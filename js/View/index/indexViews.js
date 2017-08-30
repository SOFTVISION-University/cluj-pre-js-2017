window.onload = function () {
    const fullString = FullPage();

    const isLoggedIn = !!sessionStorage.getItem('loggedUser');
    if(isLoggedIn){
        RedirectTo('evaluations');
    }else{
        RedirectTo('logIn');
    }

};

function RedirectTo(page){
    const app = document.querySelector('#app');
    switch (page) {
        case 'evaluations':
            EventsCommon().removeAll();
            app.innerHTML = EvaluationsPage();
            EventsCommon().add();
            EventsEvaluations().add();
            break;
        case 'new':
            EventsCommon().removeAll();
            app.innerHTML = NewEvaluationPage();
            EventsCommon().add();
            EventsNew().add();
            break;
        case 'logIn':
            EventsCommon().removeAll();
            app.innerHTML = FullPage();
            EventsLogIn().add();
            break;
    }
}
