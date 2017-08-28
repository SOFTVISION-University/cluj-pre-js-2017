const LoginForm = function(option) {
    return `
    <section style="margin-top: auto">
    <div style="background-image:url(assets/feedback-banner.jpg);width:100%;height:100%; opacity: 0.7"/>
     <hgroup >
   <h1>SV</h1>
 </hgroup>   
   <form>
       <hgroup >
   <h1>Interview Feedback</h1>
 </hgroup>
    
   <div class="group">
     <input type="text"><span class="highlight"></span><span class="bar"></span>
     <label>Username</label>
   </div>
   <div class="group">
     <input type="email">
       <span class="highlight"></span>
       <span class="bar"></span>
     <label>Password</label>
   </div>
   <button type="button" class="button buttonBlue">
     
       </div>
   </button>
 </form>
 </section>
    `;
}
const SubmitFeedbackSection = function(option) {
    return `<section  style="display:inline-flex; background-color: white">
    <img src="assets/new feedback.jpg" width="20%" height="300px" >
    
  
<article style="width:1200px;margin:0 auto;" >
   <div style="display:inline-block; width:75%; padding-left: 30px; vertical-align: middle">
     <h3 style="vertical-align: middle; color:black"> Submit new feedback
       </h3>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

     </p>
   </div>
    </article>
   

   </section>`;
}
const SubmitFeedbackResults = function(option) {
    return `
    <section style="background-color:ghostwhite;margin: 0 ; ">
    
      
   <article style="width:1200px;margin:0 auto;" >
        
       <div style="display:inline-block; width:75%; padding-right: 30px; vertical-align: middle">
       <h3 style="color:black"> View feedback results

</h3> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </p>
       </div>
       <img src="assets/results.jpg" width="20%" height="250px" style="vertical-align: middle" />
    </article>

    </section >`;
}
const Footer = function(option) {
    return`
<section style="background-color: darkgray">
<footer >
    <h1 style="float: right">Copyright@SOftvision 2017
    </h1></footer>
   </section>`;
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