const addEventsLogIn = function (){
    const submitFormListener = function (event) {
        var alert = document.querySelector('.alert');
         if(alert) {
             
             event.target.removeChild(alert);
         }

        event.stopPropagation();
        event.preventDefault();

        const userNameInput = document.getElementById('userNameInput');
        const passwordInput = document.getElementById('passwordInput');
        const userNameValue = userNameInput.value;
        const passwordValue = passwordInput.value;

        if(userNameValue.length === 0 || passwordValue.length === 0){
            displayAlert(event.target, "Please complete both fields!")
        } else
        
        if(checkCredentials(userNameValue, passwordValue)){
            const app = document.getElementById('app');
            RedirectTo('evaluations');
        } else {
            displayAlert(event.target, "Wrong username or password!");
        }

    };

    const displayAlert = function(parent, message) {
       
            const alertLabel = document.createElement('p');
            alertLabel.className = "alert";
            alertLabel.innerHTML = message;
            parent.appendChild(alertLabel);
    
    };

    const checkCredentials = function(username, password){
        var logInObj = getLogInData();
        return username === logInObj.username && password === logInObj.password ;
      
    };

    const logInForm = document.getElementById('logInForm');
    logInForm.addEventListener('submit',submitFormListener);

};
