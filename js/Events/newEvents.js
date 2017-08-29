const addEventsNew = function() {
    const dataObject = {};
    const buttonEval = document.getElementById('button1');
    const formNew = document.getElementById('formNew');

    const evalButtonEvent = function(event){
        event.preventDefault();
        const app = document.getElementById('app');
        app.innerHTML = EvaluationsPage();
        addEventsEvaluations();

    };
        
    buttonEval.addEventListener('click', evalButtonEvent);
    
    const iterateOver = function(array){
        array.forEach(function(textInput){
            let name = textInput.name;
            let value = textInput.value;
            dataObject[name] = value;

        });

    };

    const iterateOverRadio = function(array){
        array.forEach(function (radioInput){
            let name = radioInput.name;
            let value = radioInput.value;
            if(radioInput.checked){
                dataObject[name] = value;
            }

        });

    };

    const getDataFromForm = function(){
        const textInputsNewForm = [];
        const radioInputsNewForm = [];
        const inputsNewForm = document.querySelectorAll('input');
        const textAreas = document.querySelectorAll('textarea');
        const selectInputs = document.getElementsByTagName('select');

        inputsNewForm.forEach(function(el){
            if(el.type === "text" || el.type === "date"){
                textInputsNewForm.push(el);
            }
            if(el.type === "radio"){
                radioInputsNewForm.push(el);
            }
            
        });

        iterateOver(textInputsNewForm);
        iterateOver(textAreas);
        iterateOver(radioInputsNewForm);

        selectInputs.forEach(function(selectInput){
            let name = selectInput.name;
            let value = selectInput.value;
            dataObject[name] = value;

        });

        
    };

    const submitNewForm = function(event) {
        event.stopPropagation();
        event.preventDefault();

        getDataFromForm();

    };

    formNew.addEventListener('submit', submitNewForm);
        
};