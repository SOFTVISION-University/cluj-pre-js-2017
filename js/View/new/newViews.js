
interviewApp.Views.NewEvaluationPageMarkUp = function (options) {
    const Textarea = (options) => `
    <div class="form-section">
        <span class="form-section-span formatted primaryColor">${options.label}</span></br>
        <textarea required class="textarea textarea-skin" name="${options.name}" placeholder="${options.placeholder}"></textarea>
    </div>
`;

    const TextareaGroup = (options) => options.data.map(el => Textarea(el)).join('');

    const Form = (options, id = '') => `
    <form class="form-new" data-id="${id}" id="formNew" action="" method="">
        ${CandidateAndTechnical(options.technical)} 
        ${TextareaGroup(options.textareas)};
        ${FieldsetList(options.fieldsets.data)}
        <input class="submit-button submit-button-skin" type="submit" value="SUBMIT">      
    </form>  
`;

    const CandidateDetailsForm = (options) => `
    <div class="form-section-first">
        <input required name="candidate" class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Candidate">
        <input required name="interviewer" class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Interviewer">
        <input required id="date" name="date" class="form-section-first-input form-section-first-input-skin" type="date" class="inputDate">
    </div>
`;

    const TechnicalLevelPickerHead = (options) => {
        const result = options.map((el) => `<th>${el}</th>`);

        return result.join('');
    };

    const RadioGroup = (options) => {
        const result = options.map((el) => `<input class="level-input" type="radio" name="level" value="${el}"><br>`);

        return `
    <td><div class="radio-group">
    ${result.join('')}
    </div></td>
`;
    };

    const TechnicalLevelPickerBody = (options) => options.map((el) =>
        RadioGroup(el.inputLevels)).join('');
    const TechnicalLevelPicker = (options) => `
    <span class="form-section-span formatted primaryColor">${options.title}</span></br>
    <table class="level-table">
        <tr>
            ${TechnicalLevelPickerHead(options.headers)}
        </tr>
        <tr class="check-boxes check-boxes-skin">
            ${TechnicalLevelPickerBody(options.columnData)}
        </tr>
    </table>
`;

    const CandidateAndTechnical = (options) => `
    <div class="form-section">
        ${CandidateDetailsForm({})}
        ${TechnicalLevelPicker(options)}
    </div>
`;

    const Fieldset = (options) => {
        const arrGroup = options.items.map((el) => DropDown(el));

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


    const Options = (options) => `<option value="${options.value}">${options.label}</option>`;

    const OptionGroup = (options) => options.map((el) => Options(el)).join('');

    const DropDown = (options) => `
    <li class="fieldset-list">
    ${options.label}
    <select class="fieldset-select" name="${options.name}">
    ${OptionGroup(options.val_lab)}    
    </select>
    </li>
    `;

    return `
        ${interviewApp.Views.commonComponents().Navigation('new')}
            <section>
                <div class="main-section">
                    ${Form(options, options)}
                </div>
            </section>      
            ${interviewApp.Views.commonComponents().Footer()}
    `;
};

