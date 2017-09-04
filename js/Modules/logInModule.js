interviewApp.LogInModule = {
    init: function(){
        interviewApp.EventsCommon().removeAll();
        app.innerHTML = interviewApp.LogInPageMarkUp();
        interviewApp.EventsLogIn().add();
    }
};
