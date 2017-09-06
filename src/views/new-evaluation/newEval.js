interview.formEventsSetup = function () {

    const getNewEvaluationData = function (e) {
        e.preventDefault();
        const radioInputs = document.querySelectorAll('input');
        const selectElements = document.querySelectorAll('select');
        const textareaElements = document.querySelectorAll('textarea');

        const obj = {};
        selectElements.forEach((item) => {
            obj[item.name] = item.value;
        });

        textareaElements.forEach((item) => {
            obj[item.name] = item.value;
        });

        for (let i = 0; i < radioInputs.length; i++) {
            const item = radioInputs.item(i);

            if (item.checked || item.type === 'text' || item.type === 'date') {
                obj[item.name] = item.value;
            }
        }
        console.log(obj);

        // local storage
        let arr = [];
        //verify if localStorage object contains data 
        if (localStorage.length !== 0) {
            arr = JSON.parse(localStorage.getItem('evaluations'));
        }
        //add data from evaluation form in localStorage
        arr.push(obj);
        localStorage.setItem('evaluations', JSON.stringify(arr));
    };

    const form = document.querySelector('form');

    const add = function () {
        form.addEventListener('submit', getNewEvaluationData);
    };

    const remove = function () {
        form && form.removeEventListener('submit', getNewEvaluationData);
    };

    return {add, remove };
};
