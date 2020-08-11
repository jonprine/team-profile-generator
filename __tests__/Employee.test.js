const Employee = require('../lib/Employee');

test('checks employee name, id, email', () => {
    const employee = new Employee('Nic Cage', 1200, 'nic@arizona.com')

    expect(employee.name).toBe('Nic Cage');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('nic@arizona.com');
})

test('checks name retrieval', () => {
    const employee = new Employee('Nic Cage', 1200, 'nic@arizona.com')

    expect(employee.getName()).toEqual(expect.any(String));
})

test('checks id retrieval', () => {
    const employee = new Employee('Nic Cage', 1200, 'nic@arizona.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('checks email retrieval', () => {
    const employee = new Employee('Nic Cage', 1200, 'nic@arizona.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('checks role retrival', () => {
    const employee = new Employee('Nic Cage', 1200, 'nic@arizona.com')

    expect(employee.getRole()).toBe('Employee')
});

