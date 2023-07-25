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


function init () {
        inquirer.prompt(menu).then((answer)=> {
            console.log(answer);
        })
    
    }

    init();

    
