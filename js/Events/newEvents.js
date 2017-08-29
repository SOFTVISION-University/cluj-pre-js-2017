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
        const selectInputs = document.querySelectorAll('select');

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
        iterateOver(selectInputs);

      console.log(dataObject);
  
    };

    const submitNewForm = function(event) {
        event.stopPropagation();
        event.preventDefault();

        getDataFromForm();

    };

    formNew.addEventListener('submit', submitNewForm);
        
};