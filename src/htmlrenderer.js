const fs = require("fs");

function renderEmployees(employees) {
    const html = [];

    // Filter employees and take out manager
    employees.filter(e => e.getRole() === 'manager');
        // create HTML card

        // push to overall page

    // Filter employees and take out engineer
    employees.filter(e => e.getRole() === 'engineer');

        // create HTML card

        // push to overall page

    // Filter employees and take out intern
    employees.filter(e => e.getRole() === 'intern');

        // create HTML card

        // push to overall page

    // call renderFullPage
    renderFullPage(html);

}

function renderFullPage(cards) {
    // add cards onto entire HTML page
}

module.exports = renderEmployees;