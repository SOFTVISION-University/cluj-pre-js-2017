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
                EventsCommon().removeAll();
                app.innerHTML = NewEvaluationPageMarkUp();
                const dateInput = document.getElementById('date');
                dateInput.valueAsDate = new Date();
                EventsCommon().add();
                EventsNew().add();
            }else{
                EventsCommon().removeAll();
                const evaluations = JSON.parse(localStorage.getItem('evaluations'));
                evaluations.forEach(function(evaluation){
                    if(evaluation.id === id){
                        app.innerHTML = NewEvaluationPageMarkUp(id);
                    }
                });
                
                EventsCommon().add();
                EventsNew().add();
            }
            
            break;

        case 'logIn':
            EventsCommon().removeAll();
            app.innerHTML = LogInPageMarkUp();
            EventsLogIn().add();
            break;
    }
}