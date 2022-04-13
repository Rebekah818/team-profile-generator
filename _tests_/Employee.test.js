const Employee = require('../lib/employee');


describe('testing employee', () => {
    const employeeName = "Sam"
    const employeeEmail = "sam123@asd.com"
    const employeeId = 1
    const employee = new Employee(employeeName, employeeId, employeeEmail);

    test('Creates an Employee Profile', () => {
        expect(employee.name).toBe(employeeName);
    });

    test('Creates Employee ID', () => {
        expect(employee.id).toBe(employeeId);
    });

    test('Employee Email', () => {
        expect(employee.email).toBe(employeeEmail);
    });

    test('Creates an Employee Profile', () => {
        expect(employee.getName()).toBe(employeeName);
    });

    test('Creates Employee ID', () => {
        expect(employee.getId()).toBe(employeeId);
    });

    test('Employee Email', () => {
        expect(employee.getEmail()).toBe(employeeEmail);
    });

    test('Employee Email', () => {
        expect(employee.getRole()).toBe(employee.constructor.name);
    });

});

