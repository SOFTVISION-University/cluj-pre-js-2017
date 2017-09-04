interview.EvaluationsPage = function(options) {
        const newOptions = options || {};
        const headings = [
            'Nume', 'Data', 'Nivel', 'Detalii',
        ];
        const rows = JSON.parse(localStorage.getItem('evaluations'));
        /* [
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
        ]; */
    
        function EvaluationsTableHeader(options) {
            const headings = [];
        
            options.headings.forEach((el) => {
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
        
        function EvaluationTableRow(options = {}) {
            return `
            <tr>
                <td>${options.candidate}</td>
                <td>${options.date}</td>
                <td>${options.technicalLevel}</td>
                <td>Detalii <button class="roundButton detailsButton" id="${options.candidate + options.date}">+</button> </td>
        
            </tr>
            `;
        }
        
        function EvaluationTableBody(options = {}) {
            const rowsElements = options.items.map((rowObj) => {
                return EvaluationTableRow(rowObj);
            });
            const rowEl = rowsElements.join('');
        
            return `
            ${rowEl}
            `;
        }
        
        function EvaluationsTable(options = {}) {
            return `
            <div class = "tableEvaluations">
            <table>
        
                ${EvaluationsTableHeader({
                headings: options.itemHeadings,
            })}
        
                ${EvaluationTableBody({
                items: options.items,
            })}
        
                </table>
                </div>
            `;
        }

        return `
        ${interview.CommonElements().NAV}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings,
        })}
        ${interview.CommonElements().Footer}
        `;
    }