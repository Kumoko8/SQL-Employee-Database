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
                "Add Employee",
                "View All Roles",
                "Add Role",
                "Update Role",
                "View All Departments",
                "Add Department"
                
            ]
        }
    ],
    addRoleValues : [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the new role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary?',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department id?',
        },
        
    ],
    updateRoleValues : [
        {
            type: 'list',
            name: 'roleOption',
            message: 'What information would you like to update?',
            choices: [
                "title",
                "salary"
            ]
        },
        {
            type: 'input',
            name: 'where',
            message: 'Where would you like the values set?(id of the item)'
        },
        {
            type: 'input',
            name: 'optionValue',
            message: 'What value would you like to set there instead?',
        },
        
    ],


    departmentValues :  [
        {
            type:"input",
            name:"name",
            message: "Deparment Name?"
            
        }
          
    ]



}