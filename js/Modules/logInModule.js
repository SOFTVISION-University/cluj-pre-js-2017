interviewApp.Modules.LogInModule = {
    init() {
        interviewApp.Events.EventsCommon().removeAll();
        app.innerHTML = interviewApp.Views.LogInPageMarkUp();
        interviewApp.Events.EventsLogIn().add();
    },
};
