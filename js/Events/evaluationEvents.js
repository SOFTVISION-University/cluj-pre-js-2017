const EventsEvaluations = function(){

    const newEvaluationButton = document.getElementById('newEvaluationButton');

    const newButtonListener = function(event){
        event.preventDefault();
        RedirectTo('new');
    };

    const plusButtons = document.querySelectorAll('.details-button');

    const detailsListener = function(e) {
       RedirectTo('new',e.target.dataset.id);
    };    

    const addEventsEvaluations = function() {
        newEvaluationButton.addEventListener('click', newButtonListener);
        plusButtons.forEach(function(el){
            el.addEventListener('click', detailsListener);
        });      
    };
    
    const removeEventsEvaluations = function(){
        newEvaluationButton && newEvaluationButton.removeEventListener('click', newButtonListener);
        plusButtons && plusButtons.forEach(function(el){
            el.removeEventListener('click', detailsListener);
        }); 
    };

    return {add:addEventsEvaluations,
            remove:removeEventsEvaluations};
};

