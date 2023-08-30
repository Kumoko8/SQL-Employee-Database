module.exports = {

    employeeValues : [
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
            name:"role_id",
            message: "What is the role id?" 
        },
        {
            type:"input",
            name:"manager_id",
            message: "What is the manager's id?" 

        }
            
            
    ],

    menu : [
        {
            type:"list",
            name:"choice",
            message:"What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee"
                
            ]
        }
    ]



}