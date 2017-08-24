function getDataForTextArea() {
    const obj = {
        data: [
            {
                label: 'Should the candidate be hired?',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate',
                name: 'beHired'
            }, {
                label: 'General impression',
                placeholder: '*required',
                name: 'generalImpression'
            }, {
                label: 'Workflow, leadership and Soft skills',
                placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.',
                name: 'workflow'
            }
        ]
    };
    return obj;
};
function getDataForTechnicalTable() {
    const obj = {
        title: 'Technical level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['trainee']
            },
            {
                inputLevels: ['junior1', 'junior2', 'junior3']
            },
            {
                inputLevels: ['middle1', 'middle2', 'middle3']
            },
            {
                inputLevels: ['senior1', 'senior2', 'senior3']
            }
        ]
    };

    return obj;
};

function getDataForNewPage() {
    const obj = [{
        groupName: 'OOP, Design Patterns',
        items: [{
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
            label: 'Polymorphism',
            name: 'polymorphism'
        },
        {
            label: 'RegEx',
            name: 'regEx'
        }]
    }, {
        groupName: 'HTTP',
        items: [{
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
        }]
    }, {
        groupName: 'HTML',
        items: [{
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
        }]
    }, {
        groupName: 'CSS',
        items: [{
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
        }, {
            label: 'Dynamic stylesheet',
            name: 'dynamicStylesheet'
        }]
    }, {
        groupName: 'Javascript',
        items: [{
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
        }, {
            label: 'Event Handling',
            name: 'eventHandling'
        }, {
            label: 'Prototype &amp; OOP',
            name: 'prototype'
        }, {
            label: 'Testing(unit, E2E)',
            name: 'testing'
        }, {
            label: 'AJAX',
            name: 'ajax'
        }, {
            label: 'Debugging',
            name: 'debugging'
        }, {
            label: 'Websockets',
            name: 'websockets'
        }, {
            label: 'Tooling',
            name: 'tooling'
        }, {
            label: 'Libraries',
            name: 'libraries'
        }, {
            label: 'Promises',
            name: 'promises'
        }, {
            label: 'Browser Engines',
            name: 'browserEngines'
        }, {
            label: 'Frameworks',
            name: 'frameworks'
        }]
    }, {
        groupName: 'NodeJs',
        items: [{
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
        }]
    }];

    return obj;
}

