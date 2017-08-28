function EvaluationsPage(options) {
    const newOptions = options || {};


    const headings = ['Nume', 
                'Tehnologie', 
                'Nivel',
                '' ];
    
        
    const rows =  [{
                        name : "Popescu Adrian",
                        tehnology : 'Javascript',
                        level : "Mid 2"
                    },
                    {
                        name : "Dragan Roxana",
                        tehnology : 'PHP',
                        level : "Mid 1"
                    },
                    {
                        name : "Florescu Mihai",
                        tehnology : 'Javascript',
                        level : "Junior3"
                    },
                    {
                        name : "Gherghe Andrei",
                        tehnology : 'Ruby',
                        level : "Senior 1"
                    }];
    

    return `
    ${Navigation()}
    ${EvaluationsTable({
        items : rows,
        head : headings
    })}
    ${Footer()}
    `;
};

function EvaluationTableRow(options = {}) {
    return `
    <tr>
        <td>${options.name}</td>
        <td>${options.tehnology}</td> 
        <td>${options.level}</td>
        <td class="details-cell"><text>Detalii</text><div class="image-for-details image-for-details-skin"></div></td>
    </tr>
    `;
};
function EvaluationsTableBody(options = {}) {
 
    const arr = options.optionsItems.map(function(el){
        return EvaluationTableRow(el);
    });

    return arr.join('');
};
function EvaluationsTableHeader(options) {
    const headings =  [];

    options.optionsHead.forEach(function(el){
        headings.push(`<th>${el}</th>`);
    });

    const headingsEl = headings.join('');

    return `
        <tr class="first-row-evaluations">
            ${headingsEl}
        </tr>
    `;
};

const EvaluationsTable = function(options = {}) {
    
    return `
        <!-- Main section --> 
        <section>
        <table id="main-table" class="main-table main-table-skin">
            ${EvaluationsTableHeader({optionsHead: options.head})}
            ${EvaluationsTableBody({optionsItems: options.items})}
           
        </table>
    </section>
    `;
};

