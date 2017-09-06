interviewApp.Events.EventsCommon = function () {
    const logOutButton = document.getElementById('logOut');

    const logOutListener = function (event) {
        event.preventDefault();
        interviewApp.Modules.LogInModule.init();
        sessionStorage.removeItem('loggedUser');
    };

    const AddEventsCommon = function () {
        logOutButton && logOutButton.addEventListener('click', logOutListener);
    };

    const RemoveEventsCommon = function () {
        logOutButton && logOutButton.removeEventListener('click', logOutListener);
    };

    return {
        add: AddEventsCommon,
        remove: RemoveEventsCommon,
        
    };
};
