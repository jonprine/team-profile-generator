const Manager = require('../lib/Manager');

test('checks office number', () => {
    const manager = new Manager('Nic Cage', 1200, 'nic@arizona.com', 33);

    
    expect(manager.number).toEqual(expect.any(Number));
  
})

test('check manager role', () => {
    const manager = new Manager('Nic Cage', 1200, 'nic@arizona.com', 33);

    expect(manager.getRole()).toBe('Manager');
});

