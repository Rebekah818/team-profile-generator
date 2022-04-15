const Intern = require("../lib/intern");

describe('test intern', () => {

    const internName = "Sam"
    const internEmail = "sam123@asd.com"
    const internId = 1
    const intern = new Intern(internName, internId, internEmail);
    test('Creates Intern ID', () => {

        expect(intern.id).toBe(internId);



    });

    test('Creates an Intern Profile', () => {

        expect(intern.name).toBe(internName);
    });
    
    test('Intern Email', () => {

        expect(intern.email).toBe(internEmail);

    });

})