let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];

let currentPlayer = 'circle'; // Startspieler

let gameEnded = false;

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
            let symbol = fields[index] ? generateSymbol(fields[index]) : '';
            tableHTML += `<td onclick="handleClick(${index})">${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Setze den HTML-Code in den Container
    container.innerHTML = tableHTML;

    // Prüfe auf Gewinner
    const winner = checkWinner();
    if (winner) {
        drawWinnerLine(winner);
        gameEnded = true;
    }
}

function checkWinner() {
    // Gewinnkombinationen für Tic Tac Toe
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontale Reihen
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikale Reihen
        [0, 4, 8], [2, 4, 6]             // Diagonale Reihen
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return fields[a]; // Gewinner-Symbol ('circle' oder 'cross')
        }
    }

    return null; // Kein Gewinner
}

function generateSymbol(symbolType) {
    if (symbolType === 'circle') {
        return generateSVGo();
    } else if (symbolType === 'cross') {
        return generateSVGx();
    }
}

function handleClick(index) {
    if (!gameEnded && !fields[index]) {
        fields[index] = currentPlayer;
        const symbol = generateSymbol(currentPlayer);
        document.getElementsByTagName('td')[index].innerHTML = symbol;
        document.getElementsByTagName('td')[index].onclick = null; // Entferne das onclick-Event

        const winner = checkWinner();
        if (winner) {
            drawWinnerLine(winner);
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'; // Wechsle den Spieler
        }
    }
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

function drawWinnerLine(winnerSymbol) {
    // Hier kannst du den Code für das Zeichnen des Strichs für den Gewinner hinzufügen
    // Beachte, dass dies vom Styling deiner Seite abhängt (CSS oder direkte SVG-Manipulation)
    let thewinneris = document.getElementById('winner');
    thewinneris.innerHTML = `Spieler ${winnerSymbol} hat gewonnen!`;
    console.log(`Spieler ${winnerSymbol} hat gewonnen!`);
}