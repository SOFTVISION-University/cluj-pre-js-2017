interviewApp.EventsCommon = function () {
    const logOutButton = document.getElementById('logOut');

    const logOutListener = function (event) {
        event.preventDefault();
        interviewApp.Modules.LogInModule.init();
        sessionStorage.removeItem('loggedUser');
    };

    const AddEventsCommon = function () {
        logOutButton.addEventListener('click', logOutListener);
    };

    const RemoveEventsCommon = function () {
        logOutButton && logOutButton.removeEventListener('click', logOutListener);
    };

    const RemoveAllEvents = function () {
        RemoveEventsCommon();
        interviewApp.EventsEvaluations().remove();
        interviewApp.EventsNew().remove();
        interviewApp.EventsLogIn().remove();
    };

    return { add: AddEventsCommon,
        remove: RemoveEventsCommon,
        removeAll: RemoveAllEvents };
};
