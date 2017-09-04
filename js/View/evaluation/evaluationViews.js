
interviewApp.EvaluationsPageMarkUp = function (options) {
    const newOptions = options || {};
    const headings = ['Nume',
        'Data',
        'Nivel',
        ''];
    const rows = JSON.parse(localStorage.getItem('evaluations'));

    function EvaluationTableRow(options = {}) {
        for (const property in options) {
            if (options.hasOwnProperty(property)) {
                if (!options[property] || typeof options[property] === 'undefined') {
                    options[property] = 'No info available';
                }
            }
        }
        return `
            <tr>
                <td>${options.candidate}</td>
                <td>${options.date}</td> 
                <td>${options.level || 'No info available'}</td>
                <td class="details-cell"><text >Detalii</text><div data-id="${options.id}" class="details-button image-for-details image-for-details-skin"></div></td>
            </tr>
        `;
    }

    function EvaluationsTableBody(options = {}) {
        const arr = options.optionsItems.map((el) => EvaluationTableRow(el));

        return arr.join('');
    }

    function EvaluationsTableHeader(options) {
        const headings = [];

        options.optionsHead.forEach((el) => {
            headings.push(`<th>${el}</th>`);
        });

        const headingsEl = headings.join('');

        return `
            <tr class="first-row-evaluations">
                ${headingsEl}
            </tr>
        `;
    }

    const EvaluationsTable = function (options = {}) {
        return `
            <!-- Main section --> 
            <section>
                <table id="main-table" class="main-table main-table-skin">
                    ${EvaluationsTableHeader({ optionsHead: options.head })}
                    ${EvaluationsTableBody({ optionsItems: options.items })}
                
                </table>
            </section>
        `;
    };


    return `
    ${interviewApp.commonComponents().Navigation('evaluations')}
    ${EvaluationsTable({
        items: rows,
        head: headings,
    })}
    ${interviewApp.commonComponents().Footer()}
    `;
};

