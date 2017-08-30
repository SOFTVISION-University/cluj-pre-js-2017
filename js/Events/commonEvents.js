const EventsCommon = function(){
    const logOutButton = document.getElementById('logOut');
    const logOutListener = function(event){
        event.preventDefault();
        RedirectTo('logIn');
        sessionStorage.removeItem('loggedUser');
    };

    const AddEventsCommon = function() {
        logOutButton.addEventListener('click', logOutListener);
    };
    
    const RemoveEventsCommon = function() {
        logOutButton && logOutButton.removeEventListener('click', logOutListener);
    };
    
    const RemoveAllEvents = function(){
        RemoveEventsCommon();
        EventsEvaluations().remove();
        EventsNew().remove();
        EventsLogIn().remove();
    }

    return {add:AddEventsCommon,
            remove:RemoveEventsCommon,
            removeAll: RemoveAllEvents};
};
