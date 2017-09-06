interviewApp.Events.EventsLogIn = function () {
    const submitFormListener = function (event) {
        const alert = document.querySelector('.alert');
        if (alert) {
            event.target.removeChild(alert);
        }

        event.stopPropagation();
        event.preventDefault();

        const userNameInput = document.getElementById('userNameInput');
        const passwordInput = document.getElementById('passwordInput');
        const userNameValue = userNameInput.value;
        const passwordValue = passwordInput.value;

        if (userNameValue.length === 0 || passwordValue.length === 0) {
            displayAlert(event.target, 'Please complete both fields!');
            return;
        }
        // ---------------------------------------------------
        var logInPromise = new Promise(function(resolve,reject){
            const xhttpLogIn = new XMLHttpRequest();
            xhttpLogIn.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if(this.status<400){
                    let logInObj
                    try{
                    logInObj = JSON.parse(xhttpLogIn.responseText);
                    } catch(e) {
                        reject('Cannot access API')
                    }
                    resolve(logInObj);
                    
                }else{
                    reject('Cannot access API')
                }}
            };
            xhttpLogIn.open('GET', 'js/Data/xhrLogIn.json', true);
            xhttpLogIn.send();
        });
        logInPromise.then((data)=>{
            if (checkCredentials(userNameValue, passwordValue, data)) {
                interviewApp.Modules.EvaluationsModule.init();
                sessionStorage.setItem('loggedUser', userNameValue);
            } else {
                displayAlert(event.target, 'Wrong username or password!');
            }
        }).catch((error)=>{
            displayAlert(event.target, error);
        })
        // ------------------------------------------------------
        
    };

    const displayAlert = function (parent, message) {
        const alertLabel = document.createElement('p');
        alertLabel.className = 'alert';
        alertLabel.innerHTML = message;
        parent.appendChild(alertLabel);
    };

    const checkCredentials = function (username, password, logInObj) {
        return username === logInObj.username && password === logInObj.password;
    };

    const logInForm = document.getElementById('logInForm');
    const addEventsLogIn = function () {
        logInForm.addEventListener('submit', submitFormListener);
    };

    const removeEventsLogIn = function () {
        logInForm && logInForm.removeEventListener('submit', submitFormListener);
    };
    return {
        add: addEventsLogIn,
        remove: removeEventsLogIn,
    };
};
