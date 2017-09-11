const LoginForm = function(option) {
    return `
        <section class="login-section">
            <div class="grid">
                <div class="login login-form">
                    <div class="login-caption login-caption-form">Interview FeedBack</div>
                    <div class="login-content">
                        <form id="logInForm" class="log-in-form log-in-form-form" action="evaluations.html">
                            <input id="userNameInput" class="log-in-form-input log-in-form-input-form" type="text" name="username" placeholder="Username"><br>
                            <input id="passwordInput" class="log-in-form-input log-in-form-input-form" type="password" name="password" placeholder="Password">
                            <button id="logInButton" class="log-in-form-button log-in-form-button-form" type="submit" value="Submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}
const SubmitFeedbackSection = function(option) {
    return `
        <div class="grid">
            <section  style="display:inline-flex; background-color: white">
                <img src="assets/new feedback.jpg" width="28%" height="70%" >

                <article style="width:1000px;margin:0 auto;" >
                    <div style="display:inline-block; width:75%; padding-left: 30px; vertical-align: middle">
                        <h3 style="vertical-align: middle; color:black"> Submit new feedback</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </article>
            </section>
        </div>
    `;
}
const SubmitFeedbackResults = function(option) {
    return `
    <div style="width:100%; background-color:ghostwhite;margin-bottom: 100px!important;">
        <div class="grid">
            <section style="">
                <article style="width:1000px;margin:0 auto;">
                    <div style="display:inline-block; width:55%; padding-right: 10%; vertical-align: middle; font-size: 11px;">
                    <h3 style="color:black"> View feedback results
                    </h3> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                <img src="assets/results.jpg" width="33%" height="60%" style="vertical-align: middle" />
                </article>
            </section>
        </div>
    </div>
    
    `;
}
const Footer = function(option) {
    return`
    <section>
        <footer id='footer'>
            <div class="container">
                <p class="footer-paragraph"> Copyright@Softvision 2017 </p>
            </div>
        </footer>
   </section>
   `;
}
const LoginPage = function(option){
    return `
    ${LoginForm()}
    ${SubmitFeedbackSection()}
    ${SubmitFeedbackResults()}
    ${Footer()}
`;
}
window.onload = function() {
const result = document.querySelector("#app");
result.innerHTML = LoginPage();



}