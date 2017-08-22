    const LogInBox = function(options) {

        return `
            <div class="col1 log-in-box log-in-box-skin">
                <div class="log-in-box-head log-in-box-head-skin">Interview FeedBack</div>
                <div class="log-in-box-content">
                    <form class="log-in-form log-in-form-skin" action="evaluations.html">
                        <input class="log-in-form-input log-in-form-input-skin" type="text" name="username" placeholder="Username"><br>
                        <input class="log-in-form-input log-in-form-input-skin" type="password" name="password" placeholder="Password">
                        <button class="log-in-form-button log-in-form-button-skin" type="submit" value="Submit">Login</button>
                    </form>
                </div>
            </div>
        `;
    };

    const LogInHeader = function(options) {

        return `
            <section class="section1 section">
                <div class="grid">
                    ${LogInBox({})}
                </div>
            </section>
        `;
    };

    const SubmitFeedbackSection = function(options) {

        return `
            <section class="section2 section2-skin section">
                <div class="grid">
                    <div class="col1 img-container">
                        <img class="image" alt="Feedback image" src="img/feed2.jpg">
                    </div>
                    <div class="text-container text-container-left col2">
                        <article>
                            <h2>Submit new feedback!</h2>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        `;
    };

    const SubmitFeedBackResults = function(options) {

        return `
            <section class="section3 section3-skin section">
                <div class="grid">
                    <div class="text-container text-container-right col2">
                        <article>
                            <h2>View feedback results!</h2>	
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </div>
                        </article>
                    </div>
                    <div  class="img-container col1">
                        <img class="img3 image" alt="Results image" src="img/results.jpg">
                    </div>
                </div>
            </section>
        `;
    };

    const Footer = function(options) {
        return `
            <footer class="footer footer-skin">
                 <p class="copyright">Copyright@Softvision 2017</p>
            </footer>
        `;
    };

    const FullPage = function(){
        return `
            ${LogInHeader()}
            ${SubmitFeedbackSection()}
            ${SubmitFeedBackResults()}
            ${Footer()}
        `;
    };

window.onload = function() {
    
    const fullString = FullPage();

    document.querySelector('.app').innerHTML=fullString;
};