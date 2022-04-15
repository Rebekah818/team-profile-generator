const Manager = require("../lib/manager");


describe('test manager', () => {

    const managerName = "Sam"
    const managerEmail = "sam123@asd.com"
    const managerId = 1
    const managerOfficeNumber = "manager23"
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

test('Creates Manager Profile', () => {
    const managerName = new managerName('name');
    expect(anager.name).toBe(expect.any(string));
});
test('Creates Manager ID', () => {
    const managerId = new managerId('ID');
    expect(manager.id).toBe(expect.any(string));
});

test('Manager Email', () => {
    const managerEmail = new managerEmail('Email');
    expect(manager.email).toBe(expect.any(string));
});
})
