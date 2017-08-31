function RedirectTo(page){
    const app = document.querySelector('#app');
    
    switch (page) {
        case 'evaluations':
            EventsCommon().removeAll();
            app.innerHTML = EvaluationsPageMarkUp();
            EventsCommon().add();
            EventsEvaluations().add();
            break;

        case 'new':
            EventsCommon().removeAll();
            app.innerHTML = NewEvaluationPageMarkUp();
            const dateInput = document.getElementById('date');
            dateInput.valueAsDate = new Date();
            EventsCommon().add();
            EventsNew().add();
            break;

        case 'logIn':
            EventsCommon().removeAll();
            app.innerHTML = LogInPageMarkUp();
            EventsLogIn().add();
            break;
    }
}