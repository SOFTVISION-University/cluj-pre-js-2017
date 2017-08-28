function newEvaluationPage(options) {
    const newOptions = options || {};

    const technicalLevelElements = {
        title: 'Technical Level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['trainee'],
            },

            {
                inputLevels: ['junior1', 'junior2', 'junior3'],
            },

            {
                inputLevels: ['middle1', 'middle2', 'middle3'],
            },

            {
                inputLevels: ['senior1', 'senior2', 'senior3'],
            },
        ],
    };

    const textareaSectionElements = [
        {
            header: 'Should the candidate be hired?',
            placeholder: 'The type of project that is suitable for the candidate. &#10; Is guidance required for the candidate',
        },
        {
            header: 'General Impression',
            placeholder: '*required',
        },
        {
            header: 'Workflow, Leadership &amp; Soft Skills',
            placeholder: 'Describe the environment in which the candidate works. &#10; Describe any guidance or management experience.',
        },
    ];

    const fieldsetSectionElements = {
        data: [{
            groupName: 'OOP, Design Patterns',
            items: [{
                label: 'Classes',
                name: 'classes',
            },
            {
                label: 'Exception handling',
                name: 'exceptionHandling',
            },
            {
                label: 'Version Control',
                name: 'versionControl',
            },
            {
                label: 'Access Modifiers',
                name: 'accessModifier',
            },
            {
                label: 'Design Patterns',
                name: 'designPatterns',
            },
            {
                label: 'Issue Tracking',
                name: 'issueTracking',
            },
            {
                label: 'Polymorphism',
                name: 'polymorphism',
            },
            {
                label: 'RegEx',
                name: 'regEx',
            }],
        },
        {
            groupName: 'HTTP',
            items: [{
                label: 'Protocol',
                name: 'protocol',
            },
            {
                label: 'Response Codes',
                name: 'responseCodes',
            },
            {
                label: 'REST',
                name: 'rest',
            },
            {
                label: 'Headers',
                name: 'headers',
            },
            {
                label: 'Request Methods',
                name: 'requestMethods',
            },
            {
                label: 'Sessions &amp; Cookies',
                name: 'sessions',
            }],
        },
        {
            groupName: 'HTML',
            items: [{
                label: 'Doctype',
                name: 'doctype',
            },
            {
                label: 'Tags',
                name: 'tags',
            },
            {
                label: 'Basic SEO',
                name: 'basicSeo',
            },
            {
                label: 'Syntax rules',
                name: 'syntaxRules',
            },
            {
                label: 'Attributes',
                name: 'attributes',
            }],
        },
        {
            groupName: 'CSS',
            items: [{
                label: 'Usage',
                name: 'usage',
            },
            {
                label: 'Box Modeling',
                name: 'boxModeling',
            },
            {
                label: 'CSS 3.0',
                name: 'css',
            },
            {
                label: 'Selectors',
                name: 'selectors',
            },
            {
                label: 'Styling',
                name: 'styling',
            }, {
                label: 'Dynamic stylesheet',
                name: 'dynamicStylesheet',
            }],
        },
        {
            groupName: 'Javascript',
            items: [{
                label: 'Data types &amp; variables',
                name: 'dataTypesAndVariables',
            },
            {
                label: 'Object Manipulation',
                name: 'objectManipulation',
            },
            {
                label: 'DOM Manipulation',
                name: 'domManipulation',
            },
            {
                label: 'Functions',
                name: 'functions',
            },
            {
                label: 'Templating',
                name: 'templating',
            }, {
                label: 'Event Handling',
                name: 'eventHandling',
            }, {
                label: 'Prototype &amp; OOP',
                name: 'prototype',
            }, {
                label: 'Testing(unit, E2E)',
                name: 'testing',
            }, {
                label: 'AJAX',
                name: 'ajax',
            }, {
                label: 'Debugging',
                name: 'debugging',
            }, {
                label: 'Websockets',
                name: 'websockets',
            }, {
                label: 'Tooling',
                name: 'tooling',
            }, {
                label: 'Libraries',
                name: 'libraries',
            }, {
                label: 'Promises',
                name: 'promises',
            }, {
                label: 'Browser Engines',
                name: 'browserEngines',
            }, {
                label: 'Frameworks',
                name: 'frameworks',
            }],
        },
        {
            groupName: 'NodeJs',
            items: [{
                label: 'Backend frameworks',
                name: 'backendFrameworks',
            },
            {
                label: 'Templating',
                name: 'templating',
            },
            {
                label: 'DOM Manipulation',
                name: 'domM',
            },
            {
                label: 'Unit Testing',
                name: 'unitTesting',
            }],
        }],
    };

    return `
    ${NAV()}
    ${newEvaluationBody(
        technicalLevelElements,
    )}
    ${Footer()}
    `;
}

function newEvaluationBody(options = {}) {
    return `
    <!-- Section1 -->
	<div class = "fieldset-container">
        <form method="POST" action="action.php">
        
        ${inputSection()}
        ${technicalLevel(options)}
        ${textareaSection()}
            <section>
                ${fieldsetSection()}
                <button id = "submitButton" type = "submit" name = "submit">SUBMIT</button>
            </section>
        </form>
	</div>
    `;
}

function inputSection(options = {}) {
    return `
    <section>
        <input type = "name" name = "candidate" placeholder = "Candidate">
        <input type = "name" name = "interviewer" placeholder = "Interviewer">
        <input type = "date" name = "date">
    </section>
    `;
}

function technicalLevelTableHeader(options = {}) {
    const headerElements = options.map((header) => {
        return `
            <th>${header}</th>
        `;
    });
    return headerElements.join('');
}

function technicalLevelTableColumn(options = {}) {
    const column = options.inputLevels.map((input) => {
        return `
        <input type = "radio" name = "technicalLevel" value = "${input}">
        `;
    });
    return `
    <td>
        ${column.join('')}
    </td>
    `;
}

function technicalLevelTableBody(options = {}) {
    const inputElements = options.map((items) => {
        return technicalLevelTableColumn(items);
    });
    const row = inputElements.join('');
    return `
    <tr class = "radioButtons">
    ${inputElements}
    </tr>
    `;
}

function technicalLevel(options = {}) {
    return `
    <!-- Section2 -->
	<section>
		<h2>${options.title}</h2>
		<table>
        <tr>
            ${technicalLevelTableHeader(options.headers)}
        </tr>
            ${technicalLevelTableBody(options.columnData)}
			
		</table>
	</section>
    `;
}

function textarea(options = {}) {
    return `
    <section>
        <h2>${options.header}</h2>
        <textarea rows = "6" cols = "" placeholder = "${options.placeholder}"></textarea>
    </section>
    `;
}

function textareaSection(options = {}) {
    return `
    ${textarea({
        header: 'Should the candidate be hired?',
        placeholder: 'The type of project that is suitable for the candidate. &#10; Is guidance required for the candidate',
    })}
    ${textarea({
        header: 'General Impression',
        placeholder: '*required',
    })}
    ${textarea({
        header: 'Workflow, Leadership &amp; Soft Skills',
        placeholder: 'Describe the environment in which the candidate works. &#10; Describe any guidance or management experience.',
    })}
    `;
}

function listItem(options = {}) {
    const optionTag = options.map((el) => {
        const optionElement = el.option.map((elem) => {
            return `
            <option>${elem}</option>
            `;
        })

        return `
        <li>
            <label>${el.label}</label>
            <select name="${el.name}">
                <option disabled>Elements</option>
                ${optionElement.join('')}
            </select>
        </li>
        `;
        
    });

    return optionTag.join('');
}

function fieldsetSection(options = {}) {
    const fieldsetSectionElement = {
        data: [{
            legend: 'OOP, Design Patterns',
            items: [{
                label: 'Classes',
                name: 'classes',
                option: ['1','2','3']
            },
            {
                label: 'Exception handling',
                name: 'exceptionHandling',
                option: ['1','2','3']
            },
            {
                label: 'Version Control',
                name: 'versionControl',
                option: ['1','2','3']
            },
            {
                label: 'Access Modifiers',
                name: 'accessModifier',
                option: ['1','2','3']
            },
            {
                label: 'Design Patterns',
                name: 'designPatterns',
                option: ['1','2','3']
            },
            {
                label: 'Issue Tracking',
                name: 'issueTracking',
                option: ['1','2','3']
            },
            {
                label: 'Polymorphism',
                name: 'polymorphism',
                option: ['1','2','3']
            },
            {
                label: 'RegEx',
                name: 'regEx',
                option: ['1','2','3']
            }],
        },
        {
            legend: 'HTTP',
            items: [{
                label: 'Protocol',
                name: 'protocol',
                option: ['1','2','3']
            },
            {
                label: 'Response Codes',
                name: 'responseCodes',
                option: ['1','2','3']
            },
            {
                label: 'REST',
                name: 'rest',
                option: ['1','2','3']
            },
            {
                label: 'Headers',
                name: 'headers',
                option: ['1','2','3']
            },
            {
                label: 'Request Methods',
                name: 'requestMethods',
                option: ['1','2','3']
            },
            {
                label: 'Sessions &amp; Cookies',
                name: 'sessions',
                option: ['1','2','3']
            }],
        },
        {
            legend: 'HTML',
            items: [{
                label: 'Doctype',
                name: 'doctype',
                option: ['1','2','3']
            },
            {
                label: 'Tags',
                name: 'tags',
                option: ['1','2','3']
            },
            {
                label: 'Basic SEO',
                name: 'basicSeo',
                option: ['1','2','3']
            },
            {
                label: 'Syntax rules',
                name: 'syntaxRules',
                option: ['1','2','3']
            },
            {
                label: 'Attributes',
                name: 'attributes',
                option: ['1','2','3']
            }]
        }, 
        {
            legend: 'CSS',
            items: [{
                label: 'Usage',
                name: 'usage',
                option: ['1','2','3']
            },
            {
                label: 'Box Modeling',
                name: 'boxModeling',
                option: ['1','2','3']
            },
            {
                label: 'CSS 3.0',
                name: 'css',
                option: ['1','2','3']
            },
            {
                label: 'Selectors',
                name: 'selectors',
                option: ['1','2','3']
            },
            {
                label: 'Styling',
                name: 'styling',
                option: ['1','2','3']
            }, 
            {
                label: 'Dynamic stylesheet',
                name: 'dynamicStylesheet',
                option: ['1','2','3']
            }]
        }, 
        {
            legend: 'Javascript',
            items: [{
                label: 'Data types &amp; variables',
                name: 'dataTypesAndVariables',
                option: ['1','2','3']
            },
            {
                label: 'Object Manipulation',
                name: 'objectManipulation',
                option: ['1','2','3']
            },
            {
                label: 'DOM Manipulation',
                name: 'domManipulation',
                option: ['1','2','3']
            },
            {
                label: 'Functions',
                name: 'functions',
                option: ['1','2','3']
            },
            {
                label: 'Templating',
                name: 'templating',
                option: ['1','2','3']
            }, {
                label: 'Event Handling',
                name: 'eventHandling',
                option: ['1','2','3']
            }, {
                label: 'Prototype &amp; OOP',
                name: 'prototype',
                option: ['1','2','3']
            }, {
                label: 'Testing(unit, E2E)',
                name: 'testing',
                option: ['1','2','3']
            }, {
                label: 'AJAX',
                name: 'ajax',
                option: ['1','2','3']
            }, {
                label: 'Debugging',
                name: 'debugging',
                option: ['1','2','3']
            }, {
                label: 'Websockets',
                name: 'websockets',
                option: ['1','2','3']
            }, {
                label: 'Tooling',
                name: 'tooling',
                option: ['1','2','3']
            }, {
                label: 'Libraries',
                name: 'libraries',
                option: ['1','2','3']
            }, {
                label: 'Promises',
                name: 'promises',
                option: ['1','2','3']
            }, {
                label: 'Browser Engines',
                name: 'browserEngines',
                option: ['1','2','3']
            }, {
                label: 'Frameworks',
                name: 'frameworks',
                option: ['1','2','3']
            }]
        }, 
        {
            legend: 'NodeJs',
            items: [{
                label: 'Backend frameworks',
                name: 'backendFrameworks',
                option: ['1','2','3']
            },
            {
                label: 'Templating',
                name: 'templating',
                option: ['1','2','3']
            },
            {
                label: 'DOM Manipulation',
                name: 'domM',
                option: ['1','2','3']
            },
            {
                label: 'Unit Testing',
                name: 'unitTesting',
                option: ['1','2','3']
            }]
        }],
    };
    /*
    function fieldset(p) {
        return `<div>${p.legend}</div>`
    }*/

    const elements = fieldsetSectionElement.data.map(function(object) {
        return fieldset(object) ;
    });

    return elements.join('');
}
    /*
    fieldsetSectionElement.data = [obj1, onj2]
    elements = []
    
    1 iteration
    object => obj1
    elements => ['<div>OOP, Design Patterns</div>']

    2 iteration
    object => obj2
    elements => ['<div>OOP, Design Patterns</div>', '<div><HTTP/div>']
    */

function fieldset(options = {}) {
/*alert(listItem(options.items))*/
    return `
    <fieldset>
        <legend>${options.legend}</legend>
        <ul>
            ${listItem(options.items)}
        </ul>
    </fieldset>
    `;
}

window.onload = function () {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = newEvaluationPage();
}
;