const LoginForm = function(options) {
    return `
    <form class = "loginForm" method="POST" action="action.php">
        <th>Interview Feedback</th>
        <tr><input type = "name" name = "username" placeholder = "Username"></tr>
        <tr><input type = "password" name = "password" placeholder = "Password"></tr>
        <tr><button type = "submit" name = "submit">Login</button></tr>
    </form>
    `;
};

const LoginHeader = function(options) {
    return `
    <header class="headerSection grid">
    ${LoginForm()}
    </header>
    `;
};

const SubmitFeedbackSection = function(options) {
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

const SubmitFeedbackResults = function(options) {
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

const Footer = function(options) {
    return `
    <footer class = "footerContent">
        <p>Copyright@Softvision 2017</p>
    </footer>
    `;
}

const LoginPage = function(options) {
    return `
        ${LoginHeader()}
        ${SubmitFeedbackSection()}
        ${SubmitFeedbackResults()}
        ${Footer()}
    `;
}

window.onload = function() {
    const result =  document.querySelector('#app');
    result.innerHTML = LoginPage();
}