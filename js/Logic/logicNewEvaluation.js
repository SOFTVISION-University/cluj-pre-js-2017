const AddNewEvaluationLogic = function(id){
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
}