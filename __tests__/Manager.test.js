const Manager = require('../lib/Manager');

test('checks office number', () => {
    const manager = new Manager('Jon', 912, 'jonprine@gmail.com', 999);

    
    expect(manager.officeNumber).toEqual(expect.any(Number));
  
})

