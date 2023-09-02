

const mysql = require("mysql2");
const inquirer = require("inquirer");
const { employeeValues, menu, departmentValues, addRoleValues, updateRoleValues } = require('./prompt')
const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "lcbdTawts12!",
        database: "employee_db"
    },
    console.log("connected to the employee db")
);

const querySuccessMessage = "\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!"


async function init() {
    const { choice } = await inquirer.prompt(menu)
    switch (choice) {
        case "View All Employees":
            return viewEmployees();

        case "Add Employee":
            return addEmployee();

        case "View All Roles":
            return viewRoles();

        case "Add Role":
            return addRole();

        case "Update Role":
            return updateRole();

        case "View All Departments":
            return viewDepartments();

        case "Add Department":
            return addDepartment();


    }
}
function viewEmployees() {

    const employeeQuery = "SELECT e.id AS id, e.first_name AS employee_first_name, e.last_name AS employee_last_name,r.title AS employee_role, r.salary AS salary, d.name AS department, m.first_name AS manager_first_name, m.last_name AS manager_last_name FROM employees e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id"

    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();

}

async function addEmployee() {


    let { first_name, last_name, manager_id, role_id } = await inquirer.prompt(employeeValues);

    manager_id = parseInt(manager_id)
    role_id = parseInt(role_id)

    const employeeQuery = `INSERT INTO employees(first_name, last_name, role_id, manager_id)VALUES(?, ?, ?, ?)`
    const params = [first_name, last_name, role_id, manager_id]

    db.query(employeeQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();
}



function viewRoles() {
    const employeeQuery = "SELECT role.id, role.title, role.salary, department.name FROM role INNER JOIN department ON role.department_id = department.id"
    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();
}
async function addRole() {

    let { title, salary, department_id } = await inquirer.prompt(addRoleValues);


    const addRoleQuery = `INSERT INTO role(title, salary, department_id)VALUES(?, ?, ?)`
    const params = [title, salary, department_id]



    db.query(addRoleQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();
}

async function updateRole() {

    let { roleOption, where, optionValue } = await inquirer.prompt(updateRoleValues);

    const updateRoleQuery = `UPDATE role SET ${roleOption} = "${optionValue}" WHERE id = ${where}`;

    db.query(updateRoleQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();
}


function viewDepartments() {
    const employeeQuery = "SELECT * from department"
    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })
    init();
}

async function addDepartment() {

    let { name } = await inquirer.prompt(departmentValues);

    const departmentQuery = `INSERT INTO department(name)VALUES(?)`
    const params = [name]

    db.query(departmentQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table(querySuccessMessage);
    })

    init();
}

init();



