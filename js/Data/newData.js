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
            name: 'classes',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Exception handling',
            name: 'exceptionHandling' ,
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Version Control',
            name: 'versionControl',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Access Modifiers',
            name: 'accessModifier',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Design Patterns',
            name: 'designPatterns',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Issue Tracking',
            name: 'issueTracking',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Polymorphism',
            name: 'polymorphism',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'RegEx',
            name: 'regEx',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }, {
        groupName: 'HTTP',
        items: [{
            label: 'Protocol',
            name: 'protocol',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Response Codes',
            name: 'responseCodes',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'REST',
            name: 'rest',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Headers',
            name: 'headers',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Request Methods',
            name: 'requestMethods',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Sessions &amp; Cookies',
            name: 'sessions',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }, {
        groupName: 'HTML',
        items: [{
            label: 'Doctype',
            name: 'doctype',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Tags',
            name: 'tags',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Basic SEO',
            name: 'basicSeo',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Syntax rules',
            name: 'syntaxRules',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Attributes',
            name: 'attributes',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }, {
        groupName: 'CSS',
        items: [{
            label: 'Usage',
            name: 'usage',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Box Modeling',
            name: 'boxModeling',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'CSS 3.0',
            name: 'css',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Selectors',
            name: 'selectors',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Styling',
            name: 'styling',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Dynamic stylesheet',
            name: 'dynamicStylesheet',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }, {
        groupName: 'Javascript',
        items: [{
            label: 'Data types &amp; variables',
            name: 'dataTypesAndVariables',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Object Manipulation',
            name: 'objectManipulation',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'DOM Manipulation',
            name: 'domManipulation',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Functions',
            name: 'functions',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Templating',
            name: 'templating',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Event Handling',
            name: 'eventHandling',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Prototype &amp; OOP',
            name: 'prototype',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Testing(unit, E2E)',
            name: 'testing',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'AJAX',
            name: 'ajax',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Debugging',
            name: 'debugging',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Websockets',
            name: 'websockets',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Tooling',
            name: 'tooling',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Libraries',
            name: 'libraries',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Promises',
            name: 'promises',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Browser Engines',
            name: 'browserEngines',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }, {
            label: 'Frameworks',
            name: 'frameworks',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }, {
        groupName: 'NodeJs',
        items: [{
            label: 'Backend frameworks',
            name: 'backendFrameworks',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Templating',
            name: 'templating',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'DOM Manipulation',
            name: 'domM',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        },
        {
            label: 'Unit Testing',
            name: 'unitT',
            val_lab: [
                {value: '0',
                label: 'Evaluation'},
                {value: '1',
                label: 'Beginner'},
                {value: '2',
                label: 'Intermediate'},
                {value: '3',
                label: 'Advanced'}
            ]
        }]
    }];

    return obj;
}

