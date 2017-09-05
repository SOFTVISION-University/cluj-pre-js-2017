var feedbackApp = {};

(function () {
    feedbackApp.login = {
        init: () => {
            const component = getComponent('login');
            render(component);
            setupEvents(component, feedbackApp.redirectToFunction);
        },
        destroy: () => {
            const component = getComponent('login');
            destroy(component);
        },
    };
    feedbackApp.evaluations = {
        init: () => {
            const component = getComponent('evaluations');
            render(component);
            setupEvents(component, feedbackApp.redirectToFunction);
        },
        destroy: () => {
            const component = getComponent('evaluations');
            destroy(component, feedbackApp.redirectToFunction);
        },
    };
    feedbackApp.newEvaluation = {
        init: () => {
            const component = getComponent('newEvaluation');
            render(component);
            setupEvents(component, feedbackApp.redirectToFunction);
        },
        destroy: () => {
            const component = getComponent('newEvaluation');
            destroy(component);
        },
    };
    feedbackApp.details = {
        init: () => {
            const component = getComponent('details');
            render(component);
            setupEvents(component, feedbackApp.redirectToFunction);
        },
        populate: (dataName) => {
            const component = getComponent('details');
            populate(component, dataName);
        },
        destroy: () => {
            const component = getComponent('details');
            destroy(component);
        },
    };
}());
