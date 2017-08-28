const addEventsEvaluations = function() {
    const newButtonEvent = function(event){
            
            event.preventDefault();
            const app = document.querySelector('#app');
            app.innerHTML = NewEvaluationPage();
            addEventsNew();
        };
        
        const buttonNew = document.querySelector('#button2');
        buttonNew.addEventListener('click', newButtonEvent);
        
        
};