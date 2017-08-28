const addEventsLogIn = function (){

    const submitFormEvent = function (event) {
    
    event.stopPropagation();
   event.preventDefault();

    const userNameInput = document.querySelector('#userNameInput');
    const passwordInput = document.querySelector('#passwordInput');

    const userNameValue = userNameInput.value;
    const passwordValue = passwordInput.value;

    if(checkCredentials(userNameValue, passwordValue)){
        event.target.submit();
    } else {
        displayAlert(event.target, "Wrong username or password!");
    }
    
        
};

const displayAlert = function(parent, message) {
    var alertLabel = document.createElement('p');
    alertLabel.className = "alert";
    alertLabel.innerHTML = message;
    parent.appendChild(alertLabel);
};

const checkCredentials = function(username, password){
    
    if(username ==="adrian" && password ==="frunza"){
        return true;
    } else {
        return false;
    }
};

const logInForm = document.querySelector('#logInForm');

logInForm.addEventListener('submit',submitFormEvent);
};


