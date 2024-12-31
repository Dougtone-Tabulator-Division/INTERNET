document.addEventListener('DOMContentLoaded', function() {
    const caseForm = document.getElementById('case-form');
    const pullButton = document.getElementById('pull-button');
    const confirmationMessage = document.getElementById('confirmation-message');

    caseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const caseNumber = document.getElementById('case-number').value;
        const caseName = document.getElementById('case-name').value;
        const caseDescription = document.getElementById('case-description').value;

        // Save the case details (this is a placeholder, actual implementation may vary)
        console.log('Case Details:', { caseNumber, caseName, caseDescription });

        // Display confirmation message
        confirmationMessage.textContent = 'Case added successfully!';
    });

    pullButton.addEventListener('click', function() {
        // Pull case details from the docket system (this is a placeholder, actual implementation may vary)
        console.log('Pulling case details from the docket system...');

        // Display confirmation message
        confirmationMessage.textContent = 'Case details pulled successfully!';
    });
});
