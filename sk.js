function RedirectTo(page, id = ''){
    const app = document.querySelector('#app');
    
    switch (page) {
        case 'evaluations':
            EventsCommon().removeAll();
            app.innerHTML = EvaluationsPageMarkUp();
            EventsCommon().add();
            EventsEvaluations().add();
            break;

        case 'new':
            const isIdSet = !!id;
            if(!isIdSet){
               ...
            }else{
                ...
            }
            
            break;

        case 'logIn':
            EventsCommon().removeAll();
            app.innerHTML = LogInPageMarkUp();
            EventsLogIn().add();
            break;
    }
}