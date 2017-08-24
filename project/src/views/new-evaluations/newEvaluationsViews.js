const NewEvaluationsPage = function () {
    return `
        ${NAV()}
        <div class="new-eval">
            <form>
                ${CandidateDetailsForm()}
                ${TechnicalLevelPicker(getTechnicalLevels())}
                ${TextareaSection(getTextareas())}
                ${TechnicalAreaPicker(getTechnicalAreas())}
            </form>
        </div>
        ${Footer()}
        
    `;
}

const CandidateDetailsForm = function() {
    return `
    <section> 
        <input type="text" placeholder="Candidate" name="candidate">
        <input type="text" placeholder="Interviewer" name="interviewer">
        <input type="date" name="date">
    </section>
    `;
}

const TechnicalLevelHeader = function(options){
    const headings = options.headings.map((el) => `<th>${el}</th>`);
    return `
    <tr>
       ${headings.join('')}
    </tr>
    `;
}

const TechnicalLevelPickerHeaders = function(options = {}){
    const str = options.map((el) => `<th>${el}</th>`);
    return str;
}

const TechnicalLevelPickerColumns = function(options={}){
    const inputs = options.map((inp) => {
        const partialInputs = inp.inputLevels.map((lev) => `<input type="radio" id="${lev}" name="level"/>`);
        return `<td>${partialInputs.join('')} </td>`;
        });
        return inputs;

}

const TechnicalLevelPicker = function(options={}) {
    const headers = TechnicalLevelPickerHeaders(options.headers);
    const columns = TechnicalLevelPickerColumns(options.columnData);  
    return `
    <section>
        <h2 class="h2-skin">${options.title}</h2>
        <table>
        <tr>
            ${headers.join('')}
        </tr>
        <tr class="border-lists-skin">
            ${columns.join('')}
        </tr>
        </table>
    </section>
    `;
}
const Textarea = function(options = {}){
    return `
    <section>
        <h2 class="h2-skin">${options.title}</h2>
        <textarea rows="6" placeholder="${options.placeholder}"></textarea>
    </section>`;
}

const TextareaSection = function(options={}){
    const finalArr = options.items.map((el) => Textarea(el));        
    return finalArr.join('');
}


const DropdownSelector = function(options = {}) {
    const finalArr = options.map((el) => {
        const dropdownOptions = el.options.map((op) => `<option value="${op}">${op}</option>`);
        const aux = el.label.split(' ').join('_');
        return`
            <label for="${aux}" class="default-label default-label-skin default-font-label">${el.label}</label>
            <select name="${aux}" id="${aux}">
                ${dropdownOptions.join('')}
            </select>`
    });
    return finalArr.join('');    
}

const Li = function(options = {}){
    const result = options.map((el) => DropdownSelector(el));
    return `
    <li>
        ${result.join('')}
    </li>
    `;
};


const Fieldset = function(options = {}){
    const drops = options.dropdownOptions.map((el) => `<li>${DropdownSelector(el)}</li>`)
    return `<fieldset>
    <legend>${options.legend}</legend>
    <ul>
      ${drops.join('')}      
    </ul>
  </fieldset>`;
}

const TechnicalAreaPicker = function(options = {}){
    const result = options.map((el) => Fieldset(el));
    return `
        ${result}    
        <button class="new-eval-button new-eval-button-skin default-font">SUBMIT</button>
    `;
}

const newEvaluationsHTML = NewEvaluationsPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = newEvaluationsHTML;
}
