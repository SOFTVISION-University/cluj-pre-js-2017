interview.commonElements = function() {
    
    const footer = function () {
        return `
        <footer class = "footerContent">
            <p>Copyright@Softvision 2017</p>
        </footer>
        `;
    };

    const nav = function (option = {}) {
        return `
        <nav>
        <img class = "logoPicture" src = "./assets/logo.jpg">
        <a id = "evaluationsLink" href = "evaluations.html">Evaluations</a>
        <a id = "newEvaluationLink" href = "newEvaluation.html">New Evaluation</a>
        <a id = "logoutLink" href = "logout.html">Logout</a>
        </nav>
        `;
    };
    return {
        footer: footer(),
        nav: nav()
    }
}
