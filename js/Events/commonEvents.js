const AddEventsCommon = function() {
    const logOutButton = document.getElementById('logOut');

    const logOutListener = function(event){
        event.preventDefault();
        RedirectTo('logIn');
        sessionStorage.removeItem('loggedUser');
    };
    logOutButton.addEventListener('click', logOutListener);
    
};