const Engineer = require("../lib/engineer");



describe('test Engineer', () => {
    const engineerName = "Sam"
    const engineerEmail = "sam123@asd.com"
    const engineerId = 1
    const engineerGithub = "engineer23"
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

    test('Test Engineer github method', () => {
        expect(engineer.getGitHub()).toBe(engineerGithub);
    });
    test('Test engineer github', () => {
        expect(engineer.github).toBe(engineerGithub);
    });

    test('Test Engineer role', () => {
        expect(engineer.getRole()).toBe(engineer.constructor.name);
    });
});

