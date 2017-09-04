interviewApp.Events.EventsLogIn = function () {
    const submitFormListener = function (event) {
        let alert = document.querySelector('.alert');
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
        } else

        if (checkCredentials(userNameValue, passwordValue)) {
            interviewApp.Modules.EvaluationsModule.init();
            sessionStorage.setItem('loggedUser', userNameValue);
        } else {
            displayAlert(event.target, 'Wrong username or password!');
        }
    };

    const displayAlert = function (parent, message) {
        const alertLabel = document.createElement('p');
        alertLabel.className = 'alert';
        alertLabel.innerHTML = message;
        parent.appendChild(alertLabel);
    };

    const checkCredentials = function (username, password) {
        let logInObj = interviewApp.Data.getLogInData();
        return username === logInObj.username && password === logInObj.password;
    };

    const logInForm = document.getElementById('logInForm');
    const addEventsLogIn = function () {
        logInForm.addEventListener('submit', submitFormListener);
    };

    const removeEventsLogIn = function () {
        logInForm && logInForm.removeEventListener('submit', submitFormListener);
    };
    return { add: addEventsLogIn,
        remove: removeEventsLogIn };
};
