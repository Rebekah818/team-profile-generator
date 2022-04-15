const Intern = require("../lib/intern");

describe('test intern', () => {

    const engineerName = "Sam"
    const engineerEmail = "sam123@asd.com"
    const engineerId = 1
    const engineerGithub = "engineer23"
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
    test('Creates Intern ID', () => {
        const internId = new internId('ID');
        expect(intern.id).toBe(expect.any(5));


        test('Creates an Intern Profile', () => {
            const internName = new internName('name');
            expect(intern.name).toBe('sally');
        });

    });
    test('Intern Email', () => {
        const internEmail = new internEmail('Email');
        expect(intern.email).toBe('sally');

    });

})