INSERT INTO department (name)
VALUES ('Administration'),
        ('Science'),
        ('English');

INSERT INTO role (title, salary, department_id)
VALUES ('Principal', 100000, 1),
        ('Teacher', 75000, 2),
        ('Aid', 60000, 3 );
    
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jim','Halpert', 1, null),
        ('Angela', 'Martin', 2, 1),
        ('Kevin', 'Malone', 3, 2);
    


