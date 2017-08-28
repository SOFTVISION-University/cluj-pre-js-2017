const Footer = function () {
    return `
        <!-- Footer -->
        <footer class="footer footer-skin">
                <p>Copyright@Softvision 2017</p>
        </footer>
    `;
};

const Navigation = function (options = "evaluations") {

    var EvalSelected = "";
    var NewSelected = "";
    if(options == 'evaluations'){
        EvalSelected = "selected";
    } else {
        NewSelected = "selected";
    }

    return `
        <!-- Header --> 
        <header class="header header-skin">
            <nav class="nav">
                <div id="logo" class="logo logo-skin"></div>
                <div id="navigation" class="navigation-class">
                    <div id="button1" class="button button1 formatted ${EvalSelected}">
                    Evaluations
                    </div>
                    <div id="button2" class="button button2 formatted ${NewSelected}">
                    New Evaluation
                    </div>
                    
                </div>
                <span class="log-in-cont formatted"><a class="log-out-link log-out-link-skin" href="login.html">Logout</a></span>
            </nav>
        </header>
    `;
};
