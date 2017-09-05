interviewApp.Events.EventsEvaluations = function () {
    const newEvaluationButton = document.getElementById('newEvaluationButton');

    const newButtonListener = function (event) {
        event.preventDefault();
        interviewApp.Modules.NewModule.init();
    };

    const plusButtons = document.querySelectorAll('.details-button');

    const detailsListener = function (e) {
        interviewApp.Modules.NewModule.init(e.target.dataset.id);
    };

    const addEventsEvaluations = function () {
        newEvaluationButton.addEventListener('click', newButtonListener);
        plusButtons.forEach((el) => {
            el.addEventListener('click', detailsListener);
        });
    };

    const removeEventsEvaluations = function () {
        newEvaluationButton && newEvaluationButton.removeEventListener('click', newButtonListener);
        plusButtons && plusButtons.forEach((el) => {
            el.removeEventListener('click', detailsListener);
        });
    };

    return {
        add: addEventsEvaluations,
        remove: removeEventsEvaluations,
    };
};

