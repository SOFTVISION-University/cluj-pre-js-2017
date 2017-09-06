interviewApp.Views.commonComponents = function () {
    const Footer = function () {
        return `
            <!-- Footer -->
            <footer class="footer footer-skin">
                    <p>Copyright@Softvision 2017</p>
            </footer>
        `;
    };

    const Navigation = function (options = 'evaluations') {
        let EvalSelected;
        let NewSelected;

        if (options == 'evaluations') {
            EvalSelected = 'selected';
        }
        if (options == 'new') {
            NewSelected = 'selected';
        }


        return `
            <!-- Header --> 
            <header class="header header-skin">
                <nav class="nav">
                    <div id="logo" class="logo logo-skin"></div>
                    <div id="navigation" class="navigation-class">
                        <div id="evaluationButton" class="button evaluationButton formatted ${EvalSelected}">
                        Evaluations
                        </div>
                        <div id="newEvaluationButton" class="button newEvaluationButton formatted ${NewSelected}">
                        New Evaluation
                        </div>
                    </div>
                    <span id="logOut" class="log-in-cont formatted"><a class="log-out-link log-out-link-skin">Logout</a></span>
                </nav>
            </header>
        `;
    };
    return {
        Footer,
        Navigation,
    };
};
