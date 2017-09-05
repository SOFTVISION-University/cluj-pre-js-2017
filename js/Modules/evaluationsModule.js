interviewApp.Modules.EvaluationsModule = {
    init(){
        interviewApp.Events.EventsCommon().removeAll();
        app.innerHTML = interviewApp.Views.EvaluationsPageMarkUp();
        interviewApp.Logics.AddEvaluationsLogic();
        interviewApp.Events.EventsCommon().add();
        interviewApp.Events.EventsEvaluations().add();
    },
};
