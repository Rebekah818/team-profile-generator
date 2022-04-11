const Intern = require("../lib/intern");


test('Creates an Intern Profile', () => {
    const internName = new internName('name');
    expect(intern.name).toBe(expect.any(string));
});
test('Creates Intern ID', () => {
    const internId = new internId('ID');
    expect(intern.id).toBe(expect.any(string));
});

test('Intern Email', () => {
    const internEmail = new internEmail('Email');
    expect(intern.email).toBe(expect.any(string));
});

getName();
getID();
getEmail();