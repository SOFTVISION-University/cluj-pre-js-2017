const addEventsEvaluations = function() {
    const newEvaluationButton = document.getElementById('newEvaluationButton');

    const newButtonListener = function(event){
        event.preventDefault();
        RedirectTo('new');
    };

    newEvaluationButton.addEventListener('click', newButtonListener);
        
};