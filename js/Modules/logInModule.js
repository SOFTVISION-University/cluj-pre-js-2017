interviewApp.Modules.LogInModule = {
    init() {
        const currentModule = sessionStorage.getItem('currentModule') || false;
        if(currentModule){
            interviewApp.Events.EventsCommon().remove();
            interviewApp.Events[currentModule]().remove();
        }
       
        app.innerHTML = interviewApp.Views.LogInPageMarkUp();
        sessionStorage.setItem('currentModule','EventsLogIn');
        interviewApp.Events.EventsCommon().add();
        interviewApp.Events.EventsLogIn().add();
    },
};
