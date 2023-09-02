//I'm creating a command line app that users can use to view and edit data from a database
//I want prompt to run on command
//and I want their responses from each prompt to allow them
//to view/edit information in the database
//when they view information, such as employees,
//it should include related information such as their name, pay, role, manager, etc.
//when they add or change information, it should give them options on what they want to
//add or change, then make the changes with a success message, such as changing the pay 
//of an employee



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
    const employeeQuery = "SELECT * from employees"
    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
    
    init();
    
}

async function addEmployee() {


    let { first_name, last_name, manager_id, role_id } = await inquirer.prompt(employeeValues);
    
    manager_id = parseInt(manager_id)
    role_id = parseInt(role_id)
    
   
    // I want one if statment that kicks off several things: to place the employees name into the
    //employees table and to get their role title in the employee role table and whoever their manager is to 
    //be referenced along with that existing employee
    //when pulled the employee table should show thier id, name, role, dept, title, salary, and manager so I would have to join
    //the tables role title from employees to role id on employees
    //join salary and department name onto employees and then whosever id matches the manager name, that employee on there

    const employeeQuery = `INSERT INTO employees(first_name, last_name, role_id, manager_id)VALUES(?, ?, ?, ?)`
    const params = [first_name, last_name, role_id, manager_id]
        
    

    db.query(employeeQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
  
    init();
}



function viewRoles() {
    const employeeQuery = "SELECT * from role"
    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
    
    init();
}
async function addRole () {

    let { title, salary, department_id} = await inquirer.prompt(addRoleValues);
    

    const addRoleQuery = `INSERT INTO role(title, salary, department_id)VALUES(?, ?, ?)`
    const params = [title, salary, department_id]
        
    

    db.query(addRoleQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
  
    init();
}

async function updateRole() {

    let {roleOption, where, optionValue} = await inquirer.prompt(updateRoleValues);

    // Inquirer prompt configuration
   
    // Prompt the user with the list of choices
    const updateRoleQuery = `UPDATE role SET ${roleOption} = ${optionValue} WHERE id = ${where}`;
    
    // const params = [roleOption, optionValue, where ]
        
    

    db.query(updateRoleQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
  
    init();
}
    



function viewDepartments() {
    const employeeQuery = "SELECT * from department"
    db.query(employeeQuery, (err, results) => {
        if (err) throw err;
        console.table(results);
    })
    console.log("\n\ \n\ ")
    init();
}

async function addDepartment () {

    let { name} = await inquirer.prompt(departmentValues);
    

    const departmentQuery = `INSERT INTO department(name)VALUES(?)`
    const params = [name]
        
    

    db.query(departmentQuery, params, (err, results) => {
        if (err) throw err;
        console.table(results);
        console.table("\n\ \n\ \n\ \n\ \n\ \n\ \n\ \n\ Success! Press down arrow for main menu!");
    })
  
    init();
}

// INSERT INTO table_name (column1, column2, ...)
// VALUES (value1, value2, ...)
// ON DUPLICATE KEY UPDATE
//     column1 = VALUES(column1),
//     column2 = VALUES(column2), ...;

//Create a file for query functions
//each menu option should have a function that will pull the correct information


//joins are gonna go in the view all queries


//?? how do we get the role that they enter to be in a different table, can I use join?
//join employees table with itself 
//so I should join the employee table with the employee role table so that the role title  and salary goes next to the last name
// I also want to join the department and manager
//then that info(answers)will populate into INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
//VALUES (answers.employee_id, answers.first_name, answers.last_name, answers.role_id, answers._manager_id)
//console.log success

//update employee role will be a prompt to list options for the column to update: role_id, title, salary, department_id
// and another prompt for what to update info to
//and another prompt for what condition location (WHERE) 
//and another for value of condition (WHERE _ =) 
//into UPDATE employee_role set answers.choices = answers.update WHERE  answers.location = answers.conditionValue

//view all roles will be SELECT * from employee_role
//console log success

//add role will be a prompt for title, salary, department_id
//then INSERT INTO employee_role (title, salary, department_id)
//VALUES (answers.role_id, answers.title, answers.salary, answers.department_id)

//view all departments will be SELECT * from department
//console log success

//add department will be a prompt that asks for department name
//then INSERT INTO department (department_name)
//VALUES (answers.department_name)


// --when making a table reference to the same table
// --you have to create variables (two instances) of that table
// -- select first_name, last_name, role_id, CONCAT( )
// -- Join employees manager
// -- ON employees .manager_id = manager.employee_id


// select first_name, last_name, role_id, CONCAT(manager.first_name,manager.last_name) as Manager_Name 
// FROM employees employee
// join employees manager
// ON employee.manager_id = manager.employee_id
// WHERE employees_id = <example employee id></example>


init();
;
    // addEmployees();


