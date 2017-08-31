const EventsEvaluations = function(){

    const newEvaluationButton = document.getElementById('newEvaluationButton');

    const newButtonListener = function(event){
        event.preventDefault();
        RedirectTo('new');
    };

    const addEventsEvaluations = function() {
        newEvaluationButton.addEventListener('click', newButtonListener);      
    };
    
    const removeEventsEvaluations = function(){
        newEvaluationButton && newEvaluationButton.removeEventListener('click', newButtonListener);
    };

    return {add:addEventsEvaluations,
            remove:removeEventsEvaluations};
};

