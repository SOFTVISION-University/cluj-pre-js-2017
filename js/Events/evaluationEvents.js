const addEventsEvaluations = function() {
    const newEvaluationButton = document.getElementById('newEvaluationButton');

    const newButtonListener = function(event){
        event.preventDefault();
        const app = document.getElementById('app');
        app.innerHTML = NewEvaluationPage();
        addEventsNew();
    };

    newEvaluationButton.addEventListener('click', newButtonListener);
        
};