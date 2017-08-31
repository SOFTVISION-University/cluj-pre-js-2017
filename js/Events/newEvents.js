const EventsNew = function(){
    const dataObject = {};
    const buttonEval = document.getElementById('evaluationButton');
    const formNew = document.getElementById('formNew');

    const evalButtonListener = function(event){
        event.preventDefault();
        RedirectTo('evaluations');

    };

    const iterateOver = function(array){
        array.forEach(function(textInput){
            let name = textInput.name;
            let value = textInput.value;
            dataObject[name] = value;

        });

    };

    const getDataFromForm = function(){
        const textInputsNewForm = [];
        const inputsNewForm = document.querySelectorAll('input');
        const textAreas = document.querySelectorAll('textarea');
        const selectInputs = document.querySelectorAll('select');

        inputsNewForm.forEach(function(el){
            if(el.type === "text" || el.type === "date"){
                textInputsNewForm.push(el);
            }
            if(el.type === "radio" && el.checked){
                textInputsNewForm.push(el);
            }
            
        });

        iterateOver(textInputsNewForm);
        iterateOver(textAreas);
        iterateOver(selectInputs);

        //ADD OBJECT TO LOCALSTORAGE
        const localStorageLength = localStorage.length;
        var evaluations = [];
        if(localStorageLength !== 0){
             evaluations = JSON.parse(localStorage.getItem("evaluations"));
        }
        evaluations.push(dataObject);
        localStorage.setItem("evaluations", JSON.stringify(evaluations));
        RedirectTo('evaluations');
  
    };

    const submitNewFormListener = function(event) {
        event.stopPropagation();
        event.preventDefault();

        getDataFromForm();

    };
    
    const addEventsNew = function() { 
        buttonEval.addEventListener('click', evalButtonListener);
        formNew.addEventListener('submit', submitNewFormListener);    
    };
    
    const removeEventsNew = function(){
        buttonEval &&  buttonEval.removeEventListener('click', evalButtonListener);
        formNew && formNew.removeEventListener('submit', submitNewFormListener);
    }
    return {
        add: addEventsNew,
        remove: removeEventsNew
    }
};
