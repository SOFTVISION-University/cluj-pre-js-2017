const NewEvaluationPage = (options) => {
    return `
    ${Navigation()}
        <section>
            <div class="main-section">
                ${Form(getDataForTextArea())}
            </div>
        </section>      
        ${Footer()}
    `;
};

const Textarea = (options) => {
    return `
    <div class="form-section">
        <span class="form-section-span formatted primaryColor">${options.label}</span></br>
        <textarea class="textarea textarea-skin" name="${options.name}" placeholder="${options.placeholder}"></textarea>
    </div>
    `;
};

const Form = (options) => {
    var textAreas = options.data.map((el) => {
        return Textarea(el);
    });
    
    return`
    <form class="form-new" action="" method="">
        ${CandidateAndTechnical({})} 
        ${textAreas.join('')}
        ${FieldsetList(getDataForNewPage())}
        <input class="submit-button submit-button-skin" type="submit" value="SUBMIT">      
    </form>  
    `;
};

const CandidateDetailsForm = (options) => {
    return `
    <div class="form-section-first">
        <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Candidate">
        <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Interviewer">
        <input class="form-section-first-input form-section-first-input-skin" type="date" class="inputDate">
    </div>
    `;
};

const TechnicalLevelPickerHead = (options) => {
    const result = options.map(function(el){
        return `<th>${el}</th>`;
    });

    return result.join('');
};

const RadioGroup = (options) => {
    const result = options.map((el) => {
        return `<input class="level-input" type="radio" name="level" value="${el}"><br>`;
    });

    return `
    <td><div class="radio-group">
    ${result.join('')}
    </div></td>
    `;
};

const TechnicalLevelPicker = (options) => {
    const result = options.columnData.map((el) => {
        return RadioGroup(el.inputLevels);
    });
    
    return `
    <span class="form-section-span formatted primaryColor">${options.title}</span></br>
    <table class="level-table">
        <tr>
            ${TechnicalLevelPickerHead(options.headers)}
        </tr>
        <tr class="check-boxes check-boxes-skin">
            ${result.join('')}
        </tr>
    </table>
    `;
};

const CandidateAndTechnical = (options) => {
    return `
    <div class="form-section">
        ${CandidateDetailsForm({})}
        ${TechnicalLevelPicker(getDataForTechnicalTable())}
    </div>
    `;
};

const Fieldset = (options) => {
    const arrGroup = options.items.map((el) => {
        return DropDown(el); 
    });

    return `
    <fieldset class="fieldset">
    <legend class="legend legend-skin">${options.groupName}</legend>
    <ul class="fieldset-ul">
        ${arrGroup.join('')}
    </ul>
    </fieldset>
    `;
};

const FieldsetList = (options) => {
    const fieldsetString = options.map((el) => {
        const result = Fieldset(el);
        return result;
    }).join('');

    return fieldsetString;
};



const DropDown = (options) => {
    return `
    <li class="fieldset-list">
    ${options.label}
    <select class="fieldset-select" name="${options.name}">
        <option value="Evaluation">Evaluation</option>
        <option value="0">Beginner</option>
        <option value="1">Intermediate</option>
        <option value="2">Advanced</option>
    </select>
    </li>
    `;
};

window.onload = () => {
    const fullString = NewEvaluationPage();
    document.querySelector('#app').innerHTML=fullString;
};