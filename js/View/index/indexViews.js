window.onload = function () {

    const isLoggedIn = !!sessionStorage.getItem('loggedUser');
    if(isLoggedIn){
        RedirectTo('evaluations');
    }else{
        RedirectTo('logIn');
    }

};


