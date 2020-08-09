
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
    getRole() {
        return 'engineer'
    }
}

module.exports = Engineer;