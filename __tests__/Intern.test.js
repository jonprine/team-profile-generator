const Intern = require('../lib/Intern');
const { TestScheduler } = require('jest');

test('checks school', () => {
    const intern = new Intern('Nic Cage', 1200, 'nic@arizona.com', 'Arizona');

    expect(intern.school).toEqual(expect.any(String));
})

test('check intern role', () => {
    const intern = new Intern('Nic Cage', 1200, 'nic@arizona.com', 'Arizona');
})