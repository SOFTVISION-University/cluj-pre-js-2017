interviewApp.Modules.EvaluationsModule = {
    init() {
        window.scrollTo(0, 0);
        const currentModule = sessionStorage.getItem('currentModule') || false;
        if(currentModule){
            interviewApp.Events.EventsCommon().remove();
            interviewApp.Events[currentModule]().remove();
        }
        app.innerHTML = interviewApp.Views.EvaluationsPageMarkUp();
        sessionStorage.setItem('currentModule','EventsEvaluations');
        interviewApp.Events.EventsCommon().add();
        interviewApp.Logics.AddEvaluationsLogic();
        interviewApp.Events.EventsEvaluations().add();
        
        
        
      
       
    },
};
