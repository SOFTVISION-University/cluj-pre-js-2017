(function () {
    const isLoggedIn = !!sessionStorage.getItem('loggedUser');
    isLoggedIn ? interviewApp.RedirectTo('evaluations') : interviewApp.RedirectTo('logIn');
}());

