const Engineer = require('../lib/Engineer');

test('checks Github', () => {
    const engineer = new Engineer('Nic Cage', 1200, 'nic@arizona.com', 'wildatheart')

    expect(engineer.github).toEqual(expect.any(String));
})

test('check engineer role', () => {
    const engineer = new Engineer('Nic Cage', 1200, 'nic@arizona.com', 'wildatheart')

    expect(engineer.getRole()).toBe('Engineer');
})

