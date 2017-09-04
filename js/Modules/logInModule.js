interviewApp.Modules.LogInModule = {
    init: function(){
        interviewApp.Events.EventsCommon().removeAll();
        app.innerHTML = interviewApp.Views.LogInPageMarkUp();
        interviewApp.Events.EventsLogIn().add();
    }
};
