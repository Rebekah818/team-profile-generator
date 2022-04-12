const employee = require('../lib/employee');

test('Creates an Employee Profile', () => {
     const employeeName = new employee('name');
    expect(employee.name).toEqual(expect.any(string));
});
test('Creates Employee ID', () => {
    const employeeId = new employeeId('ID');
    expect(employee.id).toEqual(expect.any(Number));
});

test('Employee Email', () => {
    const employeeEmail = new employeeEmail('Email');
    expect(employee.email).toEqual(expect.any(string));
});

