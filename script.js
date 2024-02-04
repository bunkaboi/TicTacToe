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
                symbol = generateSVGo();
            } else if (fields[index] === 'cross') {
                symbol = generateSVGx();
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Setze den HTML-Code in den Container
    container.innerHTML = tableHTML;
}
 
function generateSVGo() {

    const width = 70;
    const height = 70;
    const color = '#00B0EF';
    const animationDuration = 2; // Dauer der Animation in Sekunden
    const svgCode = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 2.5}" fill="none" stroke="${color}" stroke-width="5" stroke-dasharray="0 1000">
                <animate attributeName="stroke-dasharray" values="0 1000;1000 1000" dur="${animationDuration}s" keyTimes="0;1" begin="0s" fill="freeze" />
            </circle>
        </svg>
    `;

    return svgCode;
} 

function generateSVGx() {
    const xWidth = 70;
    const xHeight = 70;
    const xColor = '#FFEB3B'; // Gelbe Farbe
    const animationDuration = 5; // Dauer der Animation in Sekunden

    const svgCode = `
    <svg width="${xWidth}" height="${xHeight}" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="5" x2="${xWidth - 5}" y2="${xHeight - 5}" stroke="${xColor}" stroke-width="5">
                <animate attributeName="stroke-dasharray" values="0 1000;1000 1000" dur="${animationDuration}s" keyTimes="0;1" begin="0s" fill="freeze" />
            </line>
            <line x1="${xWidth - 5}" y1="5" x2="5" y2="${xHeight - 5}" stroke="${xColor}" stroke-width="5">
                <animate attributeName="stroke-dasharray" values="0 1000;1000 1000" dur="${animationDuration}s" keyTimes="0;1" begin="0s" fill="freeze" />
            </line>
        </svg>
    `;

    return svgCode;
}