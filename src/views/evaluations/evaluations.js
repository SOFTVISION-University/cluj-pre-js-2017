function EvaluationsPage(options) {
    
    const newOptions = options || {};
    const headings = [
        'Nume', 'Tehnologie', 'Nivel', ''
    ];
    const rows = [
        {
            name: 'Popescu Adrian',
            technology: 'Javascript',
            level: 'Mid 2'
        },
        {
            name: 'Dragan Roxana',
            technology: 'PHP',
            level: 'Mid 1'
        },
        {
            name: 'Florescu Mihai',
            technology: 'Javascript',
            level: 'Junior 3'
        },
        {
            name: 'Gheorghe Andrei',
            technology: 'Ruby',
            level: 'Senior 1'
        }
    ];

    return `
    ${NAV()}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings
    })}
    ${Footer()}
    `;
}

function EvaluationsTableHeader (options) {
    const headings = [];

    options.headings.forEach(function(el) {
        const generatedEl = `<th>${el}</th>`;
        headings.push(generatedEl);
    });

    const headingsEl = `
    ${headings.join('')}
    `;

    return `
    <tr>
        ${headingsEl}
    </tr>
    `;
}

function EvaluationTableRow(options={}) {
    return `
    <tr>
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td>Detalii <button>+</button> </td>
    </tr>
    `;
}

function EvaluationTableBody (options={}) {
    
    // const rowsElements = [];
    const rowsElements = options.items.map(function(rowObj) {
        return EvaluationTableRow(rowObj);
        // rowsElements.push(generatedRow);
    });
    const rowEl = rowsElements.join('');

    return `
    ${rowEl}
    `;
}

function EvaluationsTable(options={}) {

    return `
    <div class = "tableEvaluations">
    <table>

        ${EvaluationsTableHeader({
            headings: options.itemHeadings
        })}

        ${EvaluationTableBody({
            items: options.items
        })}

        </table>
        </div>
    `;
}

window.onload = function() {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = EvaluationsPage();
}