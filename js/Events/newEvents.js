interviewApp.Events.EventsNew = function () {
    const dataObject = {};
    const buttonEval = document.getElementById('evaluationButton');
    const buttonNewEvaluations = document.getElementById('newEvaluationButton');
    const formNew = document.getElementById('formNew');


    const evalButtonListener = function (event) {
        event.preventDefault();
        interviewApp.Modules.EvaluationsModule.init();
    };

    const newEvalButtonListener = function (event) {
        event.preventDefault();
        interviewApp.Modules.EvaluationsModule.init();
    };

    const iterateOver = function (array) {
        array.forEach((textInput) => {
            const name = textInput.name;
            const value = textInput.value;
            dataObject[name] = value;
        });
    };

    const getDataFromForm = function () {
        const textInputsNewForm = [];
        const inputsNewForm = document.querySelectorAll('input');
        const textAreas = document.querySelectorAll('textarea');
        const selectInputs = document.querySelectorAll('select');

        inputsNewForm.forEach((el) => {
            if (el.type === 'text' || el.type === 'date') {
                textInputsNewForm.push(el);
            }
            if (el.type === 'radio' && el.checked) {
                textInputsNewForm.push(el);
            }
        });

        iterateOver(textInputsNewForm);
        iterateOver(textAreas);
        iterateOver(selectInputs);

        // ADD OBJECT TO LOCALSTORAGE
        dataObject.id = (dataObject.candidate + dataObject.date + (new Date()).getTime()).replace(/\s/g, '');
        const localStorageLength = localStorage.length;
        let evaluations = [];
        if (localStorageLength !== 0) {
            evaluations = JSON.parse(localStorage.getItem('evaluations'));
        }
        evaluations.push(dataObject);
        localStorage.setItem('evaluations', JSON.stringify(evaluations));
        interviewApp.Modules.EvaluationsModule.init();
    };

    const isCandidateEmpty = function () {
        const candidate = document.getElementsByName('candidate')[0];

        if (candidate.value.trim()) {
            return false;
        }

        return true;
    };

    const checkEmptyFields = function () {
        const arr = [];
        const candidate = document.getElementsByName('candidate')[0];
        const date = document.getElementsByName('date')[0];

        isCandidateEmpty() && arr.push(candidate);
        isDateEmpty() && arr.push(date);
        return arr;
    };

    const displayAlertEmpty = function (fields) {
        window.scrollTo(0, 0);
        fields.forEach((field) => {
            field.className += ' empty';
        });
    };


    const isDateEmpty = function () {
        const date = document.getElementsByName('date')[0];
        if (date.value.trim()) {
            return false;
        }
        return true;
    };


    const submitNewFormListener = function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkEmptyFields().length ? displayAlertEmpty(checkEmptyFields()) : getDataFromForm();
    };

    const candidate = document.getElementsByName('candidate')[0];
    const date = document.getElementsByName('date')[0];

    const candidateListener = function (event) {
        event.target.classList.remove('empty');
    };

    const dateListener = function (event) {
        event.target.classList.remove('empty');
    };


    const addEventsNew = function () {
        buttonEval.addEventListener('click', evalButtonListener);
        buttonNewEvaluations.addEventListener('click', newEvalButtonListener);
        formNew.addEventListener('submit', submitNewFormListener);
        candidate.addEventListener('focus', candidateListener);
        date.addEventListener('focus', dateListener);
    };

    const removeEventsNew = function () {
        buttonEval && buttonEval.removeEventListener('click', evalButtonListener);
        buttonNewEvaluations && buttonNewEvaluations.addEventListener('click', newEvalButtonListener);
        formNew && formNew.removeEventListener('submit', submitNewFormListener);
        candidate && candidate.removeEventListener('focus', candidateListener);
        date && date.removeEventListener('focus', dateListener);
    };
    return {
        add: addEventsNew,
        remove: removeEventsNew,
    };
};
