const addEventsEvaluations = function() {
    const buttonNew = document.getElementById('button2');

    const newButtonEvent = function(event){
        event.preventDefault();
        const app = document.getElementById('app');
        app.innerHTML = NewEvaluationPage();
        addEventsNew();
    };

    buttonNew.addEventListener('click', newButtonEvent);
        
};