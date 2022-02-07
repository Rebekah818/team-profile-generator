

const employee = require('../employee');

test('Creates an Employee Profile', () => {
    const employeeName = new employee('name');
    expect(employee.name).toBe(expect.any(string));
});
test('Creates Employee ID', () => {
    const employeeId = new employeeId('ID');
    expect(employee.id).toBe(expect.any(string));
});

test('Employee Email', () => {
    const employeeEmail = new employeeEmail('Email');
    expect(employee.email).toBe(expect.any(string));
});

getName();
getID();
getEmail();