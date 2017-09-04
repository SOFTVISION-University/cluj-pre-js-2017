interviewApp.EvaluationsModule = {
    init: function(){
        interviewApp.EventsCommon().removeAll();
        app.innerHTML = interviewApp.EvaluationsPageMarkUp();
        interviewApp.AddEvaluationsLogic();
        interviewApp.EventsCommon().add();
        interviewApp.EventsEvaluations().add();
    }
};
