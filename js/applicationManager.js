const interviewApp = {};
interviewApp.RedirectTo = function (page, id = '') {
    const app = document.querySelector('#app');

    switch (page) {
    case 'evaluations':
    interviewApp.EventsCommon().removeAll();
        app.innerHTML = interviewApp.EvaluationsPageMarkUp();
        interviewApp.AddEvaluationsLogic();
        interviewApp.EventsCommon().add();
        interviewApp.EventsEvaluations().add();
        break;

    case 'new':
        const isIdSet = !!id;

        if (!isIdSet) {
            interviewApp.EventsCommon().removeAll();
            app.innerHTML = interviewApp.NewEvaluationPageMarkUp();
            const dateInput = document.getElementById('date');
            dateInput.valueAsDate = new Date();
            interviewApp.EventsCommon().add();
            interviewApp.EventsNew().add();
        } else {
            app.innerHTML = interviewApp.NewEvaluationPageMarkUp();
            interviewApp.AddNewEvaluationLogic(id);
            interviewApp.EventsCommon().add();
            interviewApp.EventsNew().add();
        }

        break;

    case 'logIn':
        interviewApp.LogInModule.init();
        break;

    default:
    }
};
