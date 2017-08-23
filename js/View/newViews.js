const NAV = function(options) {
    return `
    <header class="header header-skin">
        <nav class="nav">
            <div id="logo" class="logo logo-skin"></div>
            <div id="navigation" class="navigation-class">
                <a href="evaluations.html">
                    <div id="button1" class="button button1 formatted">
                    Evaluations
                    </div>
                </a>
                <div id="button2" class="button button2 formatted selected">
                    New Evaluation
                </div>
            </div>
            <span class="log-in-cont formatted"><a class="log-out-link log-out-link-skin" href="login.html">Logout</a></span>
        </nav>
    </header>
    `;
};

const NewEvaluationPage(options) {
    return '
        <section>
            <div class="main-section">
                ${Form({})}
            </div>
        </section>
    ';
};

const Form(options) {
    return 
        `
        <form class="form-new" action="" method="">
        ${CandidateAndTechnical({})} 
        ${Textarea({label: 'Should the candidate be hired?', placeholder: ''})}
        ${Textarea({label: '', placeholder: ''})}
        ${Textarea({label: '', placeholder: ''})}
        </form>  
        `;
};

const CandidateDetailsForm(options) {
    return `
        <div class="form-section-first">
            <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Candidate">
            <input class="form-section-first-input form-section-first-input-skin" type="text" placeholder="Interviewer">
            <input class="form-section-first-input form-section-first-input-skin" type="date" class="inputDate">

        </div>
    `;
};

const TechnicalLevelPicker(options) {
    return `
        <span class="form-section-span formatted blue">Tehnical level</span></br>
        <table class="level-table">
            <tr>
                <th>Trainee</th>
                <th>Junior</th> 
                <th>Middle</th>
                <th>Senior</th>
            </tr>
            <tr class="check-boxes check-boxes-skin">
                <td>
                    <input class="level-input" type="radio" name="level" value="trainee"><br>
                </td>

                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="junior1"><br>
                        <input class="level-input" type="radio" name="level" value="junior2"><br>
                        <input class="level-input" type="radio" name="level" value="junior3"><br> 
                    </div> 
                </td> 
                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="mid1"><br>
                        <input class="level-input" type="radio" name="level" value="mid2"><br>
                        <input class="level-input" type="radio" name="level" value="mid3"><br>  
                    </div>
                </td>
                <td>
                    <div class="radio-group">
                        <input class="level-input" type="radio" name="level" value="senior1"><br>
                        <input class="level-input" type="radio" name="level" value="senior2"><br>
                        <input class="level-input" type="radio" name="level" value="senior3"><br>  
                    </div>
                </td>
            </tr>
        </table>
    `;
}



const CandidateAndTechnical(options) {
    return 
        `
        <div class="form-section">
            ${CandidateDetailsForm({})}
            ${TechnicalLevelPicker({})}
        </div>
        `;
};

const Textarea(options) {
    return `
    <div class="form-section">
        <span class="form-section-span formatted blue">${options.label}</span></br>
        <textarea class="textarea textarea-skin" name="beHired" placeholder="${options.placeholder}"></textarea>
    </div>
    `;
}