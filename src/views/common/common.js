const Footer = function() {
    return `
    <footer id='fixed-footer'>
    <div class="container">
        <p class="footer-paragraph">Copyright@Softvision 2017</p>
        </div>
        </footer>
    `;

}
const NAV = function(options={}) {
    return `
    <section class="topnav" id="Topnav">
    <img src="assets/logo.png" style="width:15%; height:30px;float:left">
    <a href="#evaluations">Evaluations</a>
    <a href="#new evaluation">New Evaluations</a>
    <a style="float:right" href="#about">Logout</a>
    <hr class="eval-header-bottom eval-header-bottom-skin">
  </section>
    `;
    
}