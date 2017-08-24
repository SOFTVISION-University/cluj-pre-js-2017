const EvaluationsPage = function(options = {}) {
    return `
        ${NAV()}
        ${EvaluationsTable({
            itemsHeadings: getHeadings(),
            items: getRows()
        })}
        ${Footer()}
    `;
}

const EvaluationsTableHeader = function(options){
    const headings = options.headings.map(function(el) {
        return `<th>${el}</th>`;
    });
    return `
    <tr>
       ${headings.join('')}
    </tr>
    `;
}

const EvaluationsTableRow = function(options = {}) {
    return `
    <tr>
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td><a href="">Detalii</a></td>
    </tr>
    `;
}

const EvaluationsTableBody = function(options = {}){
    const rowsElements = options.items.map(function(rowObj){
        return EvaluationsTableRow(rowObj);
    });
    const rowsEl = rowsElements.join('');
    return `
        ${rowsEl}
    `;
}

const EvaluationsTable = function(options = {}) {
    return `
            <div class="eval-section">
            <section>
                    <table class="eval-section-table">
                        ${EvaluationsTableHeader({
                            headings: options.itemsHeadings
                        })}
                        ${EvaluationsTableBody({
                            items: options.items
                        })}                    
                </table>
            </section>
        </div>    
    `;
}


const evaluationsHTML = EvaluationsPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = evaluationsHTML;
}

