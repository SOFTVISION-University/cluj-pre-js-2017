interview.evaluationsPage = function(options) {
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
    
        function evaluationsTableHeader(options) {
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
        
        function evaluationTableRow(options = {}) {
            return `
            <tr>
                <td>${options.candidate}</td>
                <td>${options.date}</td>
                <td>${options.technicalLevel}</td>
                <td>Detalii <button class="roundButton detailsButton" id="${options.candidate + options.date}">+</button> </td>
        
            </tr>
            `;
        }
        
        function evaluationTableBody(options = {}) {
            const rowsElements = options.items.map((rowObj) => {
                return evaluationTableRow(rowObj);
            });
            const rowEl = rowsElements.join('');
        
            return `
            ${rowEl}
            `;
        }
        
        function evaluationsTable(options = {}) {
            return `
            <div class = "tableEvaluations">
            <table>
        
                ${evaluationsTableHeader({
                headings: options.itemHeadings,
            })}
        
                ${evaluationTableBody({
                items: options.items,
            })}
        
                </table>
                </div>
            `;
        }

        return `
        ${interview.commonElements().nav}
        ${evaluationsTable({
            items: rows,
            itemHeadings: headings,
        })}
        ${interview.commonElements().footer}
        `;
    }