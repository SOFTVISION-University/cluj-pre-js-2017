
const NewEvaluationPage = function(options) {
    return `
    ${Navigation()}
        <section>
            <div class="main-section">
                ${Form()}
            </div>
        </section>
       
        ${Footer()}
    `;
};

const Form = function(options) {
    return`
        <form class="form-new" action="" method="">
        ${CandidateAndTechnical({})} 
        ${Rest({})}
        </form>  
        `;
};

const CandidateDetailsForm = function(options) {
    return `
        <div class="form-section-first">
            <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Candidate">
            <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Interviewer">
            <input class="form-section-first-input form-section-first-input-skin" type="date" class="inputDate">

        </div>
    `;
};

const TechnicalLevelPicker = function(options) {
    return `
        <span class="form-section-span formatted primaryColor">Tehnical level</span></br>
        <table class="level-table">
            <tr>
                <th>Trainee</th>
                <th>Junior</th> 
                <th>Middle</th>
                <th>Senior</th>
            </tr>
            <tr class="check-boxes check-boxes-skin">
                <td>
                    <input class="level-input" type="radio" name="level" value="trainee"><br>
                </td>

                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="junior1"><br>
                        <input class="level-input" type="radio" name="level" value="junior2"><br>
                        <input class="level-input" type="radio" name="level" value="junior3"><br> 
                    </div> 
                </td> 
                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="mid1"><br>
                        <input class="level-input" type="radio" name="level" value="mid2"><br>
                        <input class="level-input" type="radio" name="level" value="mid3"><br>  
                    </div>
                </td>
                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="senior1"><br>
                        <input class="level-input" type="radio" name="level" value="senior2"><br>
                        <input class="level-input" type="radio" name="level" value="senior3"><br>  
                    </div>
                </td>
            </tr>
        </table>
    `;
}



const CandidateAndTechnical = function(options) {
    return `
        <div class="form-section">
            ${CandidateDetailsForm({})}
            ${TechnicalLevelPicker({})}
        </div>
        `;
};

const Rest = function(options) {
    const newOptions1 = [{
        label: 'Classes',
        name: 'classes'
        },
        {
            label: 'Exception handling',
            name: 'exceptionHandling'
        },
        {
            label: 'Version Control',
            name: 'versionControl'
        },
        {
            label: 'Access Modifiers',
            name: 'accessModifier'
        },
        {
            label: 'Design Patterns',
            name: 'designPatterns'
        },
        {
            label: 'Issue Tracking',
            name: 'issueTracking'
        },
        {
            label: 'Ploymorphism',
            name: 'polymorphism'
        },
        {
            label: 'RegEx',
            name: 'regEx'
        }];

    const newOptions2 = [{
        label: 'Protocol',
        name: 'protocol'
        },
        {
            label: 'Response Codes',
            name: 'responseCodes'
        },
        {
            label: 'REST',
            name: 'rest'
        },
        {
            label: 'Headers',
            name: 'headers'
        },
        {
            label: 'Request Methods',
            name: 'requestMethods'
        },
        {
            label: 'Sessions &amp; Cookies',
            name: 'sessions'
        }];

    const newOptions3 = [{
            label: 'Doctype',
            name: 'doctype'
            },
            {
                label: 'Tags',
                name: 'tags'
            },
            {
                label: 'Basic SEO',
                name: 'basicSeo'
            },
            {
                label: 'Syntax rules',
                name: 'syntaxRules'
            },
            {
                label: 'Attributes',
                name: 'attributes'
            }];

    const newOptions4 = [{
                label: 'Usage',
                name: 'usage'
                },
                {
                    label: 'Box Modeling',
                    name: 'boxModeling'
                },
                {
                    label: 'CSS 3.0',
                    name: 'css'
                },
                {
                    label: 'Selectors',
                    name: 'selectors'
                },
                {
                    label: 'Styling',
                    name: 'styling'
                },{
                    label: 'Dynamic stylesheet',
                    name: 'dynamicStylesheet'
                }];

    const newOptions5 = [{
                    label: 'Data types &amp; variables',
                    name: 'dataTypesAndVariables'
                    },
                    {
                        label: 'Object Manipulation',
                        name: 'objectManipulation'
                    },
                    {
                        label: 'DOM Manipulation',
                        name: 'domManipulation'
                    },
                    {
                        label: 'Functions',
                        name: 'functions'
                    },
                    {
                        label: 'Templating',
                        name: 'templating'
                    },{
                        label: 'Event Handling',
                        name: 'eventHandling'
                    },{
                        label: 'Protorype &amp; OOP',
                        name: 'prototype'
                    },{
                        label: 'Testing(unit, E2E)',
                        name: 'testing'
                    },{
                        label: 'AJAX',
                        name: 'ajax'
                    },{
                        label: 'Debugging',
                        name: 'debugging'
                    },{
                        label: 'Websockets',
                        name: 'websockets'
                    },{
                        label: 'Tooling',
                        name: 'tooling'
                    },{
                        label: 'Libraries',
                        name: 'libraries'
                    },{
                        label: 'Promises',
                        name: 'promises'
                    },{
                        label: 'Browser Engines',
                        name: 'browserEngines'
                    },{
                        label: 'Frameworks',
                        name: 'frameworks'
                    }];

    const newOptions6 = [{
                        label: 'Backend frameworks',
                        name: 'backendFrameworks'
                        },
                        {
                            label: 'Templating',
                            name: 'templating'
                        },
                        {
                            label: 'DOM Manipulation',
                            name: 'domM'
                        },
                        {
                            label: 'Unit Testing',
                            name: 'unitT'
    }];
    

    
    const arr1 =  [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];
    const arr6 = [];


    newOptions1.forEach(function(el){
        arr1.push(FieldsetList(el));
    });
    newOptions2.forEach(function(el){
        arr2.push(FieldsetList(el));
    });
    newOptions3.forEach(function(el){
        arr3.push(FieldsetList(el));
    });
    newOptions4.forEach(function(el){
        arr4.push(FieldsetList(el));
    });
    newOptions5.forEach(function(el){
        arr5.push(FieldsetList(el));
    });
    newOptions6.forEach(function(el){
        arr6.push(FieldsetList(el));
    });

    const result1 = arr1.join('');
    const result2 = arr2.join('');
    const result3 = arr3.join('');
    const result4 = arr4.join('');
    const result5 = arr5.join('');
    const result6 = arr6.join('');
    return `
    	    
			<div class="form-section">
            <span class="form-section-span formatted primaryColor">Should the candidate be hired?</span></br>
            <textarea class="textarea textarea-skin" name="beHired" placeholder="The type of project that is suitable for the candidate Is guidance required for the candidate "></textarea>
        </div>
        <div class="form-section">
            <span class="form-section-span formatted primaryColor">General impression</span></br>
            <textarea class="textarea textarea-skin" name="general" placeholder="*required"></textarea>
        </div>
        <div class="form-section">
            <span class="form-section-span formatted primaryColor">Workflow, leadership and Soft skills</span></br>
            <textarea class="textarea textarea-skin" name="workflow" placeholder="Describe the environment in which the candidate works. Describe any guidance or management experience. "></textarea>
        </div>
        <fieldset class="fieldset">
            <legend class="legend legend-skin">OOP, Design Patterns</legend>
            <ul class="fieldset-ul">
                ${result1}
                
            </ul>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="legend class="legend legend-skin"">Http</legend>
            <ul class="fieldset-ul">
                ${result2}
    
            </ul>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="legend legend-skin">HTML</legend>
            <ul class="fieldset-ul">
               ${result3}
            </ul>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="legend legend-skin">CSS</legend>
            <ul class="fieldset-ul">
               ${result4}
            </ul>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="legend legend-skin">JavaScript</legend>
            <ul class="fieldset-ul">
            ${result5}
            </ul>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="legend legend-skin">NodeJs</legend>
            <ul class="fieldset-ul">
            ${result6}
            </ul>
            </fieldset>
            <input class="submit-button submit-button-skin" type="submit" value="SUBMIT">
    `;
};

const FieldsetList = function(options){
    return `<li class="fieldset-list">
    ${options.label}
    <select class="fieldset-select" name="${options.name}">
        <option value="Evaluation">Evaluation</option>
        <option value="0">Beginner</option>
        <option value="1">Intermediate</option>
        <option value="2">Advanced</option>
    </select>
</li>`;
}
window.onload = function() {
    
    const fullString = NewEvaluationPage();

    document.querySelector('#app').innerHTML=fullString;
};