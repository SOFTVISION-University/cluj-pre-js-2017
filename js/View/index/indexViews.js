(function () {
    const isLoggedIn = !!sessionStorage.getItem('loggedUser');
    isLoggedIn ? RedirectTo('evaluations') : RedirectTo('logIn');
}());

