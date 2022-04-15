const Manager = require("../lib/manager");


describe('test manager', () => {

    const managerName = "Sam"
    const managerEmail = "sam123@asd.com"
    const managerId = 1
    const manager = new Manager(managerName, managerId, managerEmail);

test('Creates Manager Profile', () => {
    
    expect(manager.name).toBe(managerName);
});
test('Creates Manager ID', () => {
    
    expect(manager.id).toBe(managerId);
});

test('Manager Email', () => {
    
    expect(manager.email).toBe(managerEmail);
});


})
