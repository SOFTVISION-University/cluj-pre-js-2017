interview.loginPage = function (options) {

    const loginForm = function (options) {
        return `
        <form class = "loginForm" method="POST" action="action.php">
            <div class="loginHeader" Interview Feedback</div>
            <div class="loginContent"><tr><input type = "name" class="usernameInput" name = "username" id = "loginUsername" placeholder = "Username"></tr>
            <tr><input type = "password" class="passwordInput" name = "password" id = "loginPassword" placeholder = "Password"></tr>
            <tr><button type = "submit" class="submitButton" name = "submit">Login</button></tr></div>
        </form>
        `;
    };
    
    const loginHeader = function (options) {
        return `
        <header class="headerSection grid">
        ${loginForm()}
        </header>
        `;
    };
    
    const submitFeedbackSection = function (options) {
        return `
        <section  class ="submitSection">
            <img src = "./assets/new feedback.jpg">
            <article>
                <h2>Submit new feedback</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
        </section>
        `;
    };
    
    const submitFeedbackResults = function (options) {
        return `
        <section class="feedbackSection">
            <article class="article2">
                <h2>View feedback results</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <article >
            <img class="feedbackImg" src = "./assets/results.jpg">
        </section>
        `;
    };

    return `
        ${loginHeader()}
        ${submitFeedbackSection()}
        ${submitFeedbackResults()}
        ${interview.commonElements().footer}
    `;
};