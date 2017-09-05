const ComponentConstructor = function (options) {
    switch (options) {
    case 'login':
        return {
            view: new LoginPage(),
            events: new LoginEvents(),
        };
    case 'evaluations':
        return {
            view: new EvaluationsPage(),
            events: new EvaluationsEvents(),
        };
    case 'newEvaluation':
        return {
            view: new NewEvaluationPage(),
            events: new NewEvaluationEvents(),
        };
    default:
        return {
            view: new DetailsPage(),
            events: new DetailsEvents(options),
        };
    }
};
