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
                    const localStorageArray = JSON.parse(localStorage.getItem('evaluations'));
                    let requiredEvaluation;
                    localStorageArray.forEach(function(evaluation){
                        if(evaluation.id === id){
                        
                            requiredEvaluation = evaluation;
                        }
                    });
                    document.querySelectorAll('input').forEach(function(input){
                        if(input.type === 'text' || input.type === 'date'){
                            input.value = requiredEvaluation[input.name];
                        }
                        if(input.type === 'radio'){
                            if(input.value === requiredEvaluation[input.name]){
                                input.setAttribute('checked', true);
                            }
                            input.disabled = true;
                        }
                        if(input.type === 'submit'){
                            input.disabled = true;
                        }
                        input.setAttribute('readonly', true);

                    });
                    document.querySelectorAll('select').forEach(function(select){
                            select.value = requiredEvaluation[select.name];
                            select.setAttribute('disabled', true);
                        
                    });
                    document.querySelectorAll('textarea').forEach(function(ta){
                        ta.value = requiredEvaluation[ta.name];
                        ta.setAttribute('readonly', true);
                    
                });
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