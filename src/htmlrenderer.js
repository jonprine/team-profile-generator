function renderEmployees(employees) {
    const html = [];

    // Filter employees and take out manager
    employees.filter(e => e.getRole() === 'manager');
        // create HTML card

        // push to overall page

    // Filter employees and take out engineer

        // create HTML card

        // push to overall page

    // Filter employees and take out intern

        // create HTML card

        // push to overall page

    // call renderFullPage
    renderFullPage(html);

}

function renderFullPage(cards) {
    // add cards onto entire HTML page
}

module.exports = renderEmployees;