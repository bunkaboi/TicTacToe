let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null
];

function init() {
    render();
}

function render() {
    // Referenz zum Container-Div
    const container = document.getElementById("container");

    // HTML-Code für die Tabelle
    let tableHTML = '<table>';

    // Schleife für die 3x3 Tabelle
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = 'o';
            } else if (fields[index] === 'cross') {
                symbol = 'x';
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Setze den HTML-Code in den Container
    container.innerHTML = tableHTML;
}
 
