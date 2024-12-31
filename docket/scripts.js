document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submissions
    function handleFormSubmit(event, tableId, inputId) {
        event.preventDefault();
        const input = document.getElementById(inputId);
        const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const newCell = newRow.insertCell(0);
        const newText = document.createTextNode(input.value);
        newCell.appendChild(newText);

        const actionCell = newRow.insertCell(1);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex - 1);
            saveEntries(tableId);
        });
        actionCell.appendChild(deleteButton);

        input.value = '';
        saveEntries(tableId);
    }

    // Function to save entries to local storage
    function saveEntries(tableId) {
        const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        const entries = [];
        for (let i = 0; i < table.rows.length; i++) {
            entries.push(table.rows[i].cells[0].textContent);
        }
        localStorage.setItem(tableId, JSON.stringify(entries));
    }

    // Function to load entries from local storage
    function loadEntries(tableId) {
        const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        const entries = JSON.parse(localStorage.getItem(tableId)) || [];
        entries.forEach(entry => {
            const newRow = table.insertRow();
            const newCell = newRow.insertCell(0);
            const newText = document.createTextNode(entry);
            newCell.appendChild(newText);

            const actionCell = newRow.insertCell(1);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                table.deleteRow(newRow.rowIndex - 1);
                saveEntries(tableId);
            });
            actionCell.appendChild(deleteButton);
        });
    }

    // Event listeners for form submissions
    document.getElementById('circuit-form').addEventListener('submit', function(event) {
        handleFormSubmit(event, 'circuit-table', 'circuit-entry');
    });

    document.getElementById('appellate-form').addEventListener('submit', function(event) {
        handleFormSubmit(event, 'appellate-table', 'appellate-entry');
    });

    document.getElementById('supreme-form').addEventListener('submit', function(event) {
        handleFormSubmit(event, 'supreme-table', 'supreme-entry');
    });

    // Load entries from local storage on page load
    loadEntries('circuit-table');
    loadEntries('appellate-table');
    loadEntries('supreme-table');
});
