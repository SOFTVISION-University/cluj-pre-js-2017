const interview = {};

// set up the collection of modules that app can use
interview.modules = {
    evaluations: {
        init() {
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.evaluationsPage();
            // events
            interview.addEventsNavigation().add();
        },
        destroy() {
            interview.addEventsNavigation().remove();
        }
    },

    newEvaluation: {
        init() {
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.newEvaluationPage();
            // events
            interview.formEventsSetup().add();
            interview.addEventsNavigation().add();
        },
        destroy() {
            interview.formEventsSetup().remove();
            interview.addEventsNavigation().remove();
        }
    },

    login: {
        init() {
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.loginPage();
            // events
            interview.eventsLogin().add();
        },
        destroy() {
            interview.eventsLogin().remove();
        }
    }
};
