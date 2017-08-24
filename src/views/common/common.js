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
    <section style="width:100%; height:300px">
    
        <img src="assets/logo.png" style="width:200%; height:40px">
     
        <a ref="/Evaluation/">Evaluations</a> 
              <a ref="/New Evaluation/">New Evaluation</a> 
         <a style="float:right" ref="/Logout/">Logout</a> 
    </section>
    `;
}