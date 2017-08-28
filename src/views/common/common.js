const Footer = function() {
    return `
    <footer class = "footerContent">
        <p>Copyright@Softvision 2017</p>
    </footer>
    `;
}

const NAV = function(option={}) {
    return `
    <nav>
    <img class = "logoPicture" src = "./assets/logo.jpg">
    <a href = "evaluations.html">Evaluations</a>
    <a href = "newEvaluations.html">New Evaluation</a>
    <a id = "logout" href = "logout.html">Logout</a>
    </nav>
    `;
}