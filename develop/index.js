const mysql = require("mysql2");
const inquirer = require ("inquirer");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database:"employee_db"
    },
    console.log("connected to the employee db")
);

    const menu =[
            {
                type:"list",
                name:"userActions",
                message:"What would you like to do?",
                choices: [
                    {choice:"View All Employees", value: "ALL_EMPLOYEES"},
                    {choice:"add employee", value: "ADD_EMPLOYEE"},
                    {choice:"update employee role", value: "UPDATE_ROLE"},
                    {choice:"view all roles", value: "ALL_ROLES"},
                    {choice:"add role", value: "ADD_ROLE"},
                    {choice:"view all departments", value: "ALL_DEPARTMENTS"},
                    {choice:"add department", value: "ADD_DEPARTMENT"}
                ]
            }
        ]

function viewEmployees (answer) {
    if (answer ==="ALL_EMPLOYEES") {
        const employeeQuery = "SELECT * from employees";
        db.query(employeeQuery, (err, results) => {
            if (err) throw err;
            console.log ("Certainly:", results);
        })
    }
}
function addEmployees (answer) {

const employeeValues = [

    {
        type:"input",
        name:"first_name",
        message: "Employee First Name?"
        
    },
    {
        type:"input",
        name:"last_name",
        message: "Employee Last Name?"
        
    },
    {
        type:"input",
        name:"employee_role",
        message: "What is the employees role?"
        
    },
    {
        type:"input",
        name:"employee_manager",
        message: "Who is their manager?"
        
    },
]
    if (answer ==="ADD_EMPLOYEE") {
        inquirer.prompt(employeeValues).then(response => {
            const firstName = response.first_name;
            const lastName = response.last_name;
            const employeeRole = response.employee_role;
            const employeeManager = response.employee_manager;
     //how do I put who their manager is and tell it where to go?
     //do I make another db.query?
      
        const employeeQuery = `INSERT INTO employees(first_name, last_name, role_id, manager_id) \n\ VALUES(${firstName},${lastName})`;
        //what would I put for the last two values?Since they are references
        db.query(employeeQuery, (err, results) => {
            if (err) throw err;
            console.log ("Certainly:", results);
            })
        })
        }
        
    }

    function updateRole (answer) {

        const roleValues = [
            {
                type:"input",
                name:"role_id",
                message: "Employee ID?"
                
            },
            {
                type:"input",
                name:"first_name",
                message: "Employee First Name?"
                
            },
            {
                type:"input",
                name:"last_name",
                message: "Employee Last Name?"
                
            },
        ]
            if (answer ==="ADD_EMPLOYEE") {
                inquirer.prompt(employeeValues).then(response => {
                    const employeeId = response.employee_id;
                    const firstName = response.first_name;
                    const lastName = response.last_name;
             //I don't what to do with the response before I put it in the values part
              
                const employeeQuery = `INSERT INTO employees(employees_id, first_name, last_name, role_id, manager_id) \n\ VALUES(${employeeId},${firstName},${lastName})`;
                db.query(employeeQuery, (err, results) => {
                    if (err) throw err;
                    console.log ("Certainly:", results);
                    })
                })
                }
                
            }
//Create a file for query functions
//each menu option should have a function that will pull the correct information

//view all employees will be SELECT * FROM employees
//console log success
//joins are gonna go in the view all queries

//add employee will be a prompt to take in the first name, last name, role_id and manager id
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

//Connection ERROR
//I have:
//restarted
//killed terminals
//killed mysql
//restarted mysql
//restarted and updated computer
//tried mysql worskpace(except I can't because my computer cant get Ventura)
//checked firewall
//changed IP address binding to 0.0.0.0
//checked the mysql config file
//changed all ports


function init () {
        inquirer.prompt(menu).then((answer)=> {
            console.log(answer);
        })
    
    }

    init();
    viewEmployees();
    addEmployees();

    
