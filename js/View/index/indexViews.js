(function () {
    const isLoggedIn = !!sessionStorage.getItem('loggedUser');
    isLoggedIn ? interviewApp.Modules.EvaluationsModule.init() : interviewApp.Modules.LogInModule.init();
}());

