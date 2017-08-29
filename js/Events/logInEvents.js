const addEventsLogIn = function (){
    const submitFormEvent = function (event) {
    
        event.stopPropagation();
        event.preventDefault();

        const userNameInput = document.getElementById('userNameInput');
        const passwordInput = document.getElementById('passwordInput');
        const userNameValue = userNameInput.value;
        const passwordValue = passwordInput.value;

        if(checkCredentials(userNameValue, passwordValue)){
            const app = document.getElementById('app');
            app.innerHTML = EvaluationsPage();
            addEventsEvaluations();
        } else {
            displayAlert(event.target, "Wrong username or password!");
        }

    };

    const displayAlert = function(parent, message) {
        var alert = document.querySelector('.alert');

        if(!alert){
            const alertLabel = document.createElement('p');
            alertLabel.className = "alert";
            alertLabel.innerHTML = message;
            parent.appendChild(alertLabel);
        }  

    };

    const checkCredentials = function(username, password){
        var logInObj = getLogInData();
        return (username === logInObj.username && password === logInObj.password) ? true : false ;
      

    };

    const logInForm = document.getElementById('logInForm');
    logInForm.addEventListener('submit',submitFormEvent);

};
