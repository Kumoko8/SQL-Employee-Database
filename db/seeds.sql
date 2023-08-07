INSERT INTO department (department_name)
VALUES ('Science'),
        ('Administration'),
        ('English');

INSERT INTO employee_role (title, salary, department_id)
VALUES ('Principal', 100000, 2),
        ('Teacher', 75000, 1),
        ('Aid', 60000, 3 );
    
INSERT INTO employees (employees_id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Jim', 'Halpert', 2, null),
        (2, 'Kevin', 'Malone', 3, 3),
        (3, 'Angela', 'Martin', 1, 1);
    
ALTER TABLE employees
ADD FOREIGN KEY (manager_id) REFERENCES employees(employees_id);

