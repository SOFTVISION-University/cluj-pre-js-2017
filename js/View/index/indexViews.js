window.onload = function () {
    const fullString = FullPage();

    const isLoggedIn = !!localStorage.getItem('loggedUser');
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
            app.innerHTML = EvaluationsPage();
            addEventsEvaluations();
            break;
        case 'new':
            app.innerHTML = NewEvaluationPage();
            AddEventsCommon();
            addEventsNew();
            break;
        case 'logIn':
            app.innerHTML = FullPage();
            AddEventsCommon();
            addEventsLogIn();
            break;
    }
}
