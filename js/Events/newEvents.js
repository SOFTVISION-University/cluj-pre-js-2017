const addEventsNew = function() {
    const evalButtonEvent = function(event){
            event.preventDefault();
            const app = document.querySelector('#app');
            app.innerHTML = EvaluationsPage();
            addEventsEvaluations();
        };
        
        const buttonEval = document.querySelector('#button1');
        buttonEval.addEventListener('click', evalButtonEvent);
        
        
};