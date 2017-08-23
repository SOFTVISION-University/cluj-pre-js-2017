function newEvaluationPage (options) {
    const newOptions = options || {};

    return `
    ${NAV()}
    ${newEvaluationBody()}
    ${Footer()}
    `;
}

function inputSection (options={}) {
    return `
    <section>
        <input type = "name" name = "candidate" placeholder = "Candidate">
        <input type = "name" name = "interviewer" placeholder = "Interviewer">
        <input type = "date" name = "date">
    </section>
    `;
}

function technicalLevel (options={}) {
    return `
    <!-- Section2 -->
	<section>
		<h2>Technical Level</h2>
		<table>
			<tr>
				<th>Trainee</th>
				<th>Junior</th>
				<th>Middle</th>
				<th>Senior</th>
			</tr>
			<tr class = "radioButtons">
				<td>
					<input type = "radio" name = "technicalLevel" value = "trainee">
				</td>
				<td>
					<input type = "radio" name = "technicalLevel" value = "junior1">
					<input type = "radio" name = "technicalLevel" value = "junior2">
					<input type = "radio" name = "technicalLevel" value = "junior3">
				</td>
				<td>
					<input type = "radio" name = "technicalLevel" value = "middle1">
					<input type = "radio" name = "technicalLevel" value = "middle2">
					<input type = "radio" name = "technicalLevel" value = "middle3">
				</td>
				<td>
					<input type = "radio" name = "technicalLevel" value "senior1">
					<input type = "radio" name = "technicalLevel" value "senior2">
					<input type = "radio" name = "technicalLevel" value "senior3">
				</td>
			</tr>
		</table>
	</section>
    `;
}

function textareaSection (option={}) {
    return `
    <!-- Section3 -->
	<section>
		<h2>Should the candidate be hired?</h2>
		<textarea rows = "6" cols = "" placeholder = "The type of project that is suitable for the candidate.&#10;Is guidance required for the candidate"></textarea>
	</section>
	
	<!-- Section4 -->
	<section>
		<h2>General Impression</h2>
		<textarea rows = "6" cols = "" placeholder = "*required" required></textarea>
	</section>
	
	<!-- Section5 -->
	<section>
		<h2>Workflow, Leadership &amp; Soft Skills</h2>
		<textarea rows = "5" cols = "" placeholder = "Describe the environment in which the candidate works.&#10;Describe any guidance or management experience."></textarea>
	</section>
    `;
}
function fieldsetSection (options={}) {
    return `
    ${fieldsetSection1()}
    ${fieldsetSection2()}
    ${fieldsetSection3()}
    ${fieldsetSection4()}
    ${fieldsetSection5()}
    ${fieldsetSection6()}
    `;
}
function fieldsetSection1 (options={}) {
    return `
    <!-- Section6 -->
			<fieldset>
				<legend>OOP, Design Patterns</legend>
				<ul>
					<li>
						<label>Classes</label>
						<select name = "classes">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Exception handling</label>
						<select name = "exceptionHandling">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Version Control</label>
						<select name = "versionControl">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Access modifiers</label>
						<select name = "accessModifiers">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Design Patterns</label>
						<select name = "designPatterns">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Issue Tracking</label>
						<select name = "issueTracking">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>Polymorphism</label>
						<select name = "polymorphism">
							<option disabled>Evaluation</option>
						</select>
					</li>
					<li>
						<label>RegEx</label>
						<select name = "regEx">
							<option disabled>Evaluation</option>
						</select>
					</li>
				</ul>
			</fieldset>
    `;
}

function fieldsetSection2 (options={}) {
    return`
    <fieldset>
    <legend>HTTP</legend>
    <ul>
        <li>
            <label>Protocol</label>
            <select name = "protocol">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Response codes</label>
            <select name = "responseCodes">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>REST</label>
            <select name = "rest">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Headers</label>
            <select name = "headers">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Request methods</label>
            <select name = "requestMethods">
                <option disabled">Evaluation</option>
            </select>
        </li>
        <li>
            <label>Sessions &amp; Cookies</label>
            <select name = "sessionsCookies">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection3(options={}) {
    return `
    <fieldset>
    <legend>HTML</legend>
    <ul>
        <li>
            <label>Doctype</label>
            <select name = "doctype">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Tags</label>
            <select name = "tags">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Basic SEO</label>
            <select name = "basicseo">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Syntax rules</label>
            <select name = "syntaxRules">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Attributes</label>
            <select name = "attributes">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
    </fieldset>
    `;
}

function fieldsetSection4(options={}) {
    return `
    <fieldset>
    <legend>CSS</legend>
    <ul>
        <li>
            <label>Usage</label>
            <select name = "usage">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Box modeling</label>
            <select name = "boxModeling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>CSS 3.0</label>
            <select name = "css">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Selectors</label>
            <select name = "selectors">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Styling</label>
            <select name = "styling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Dynamic Stylesheets</label>
            <select name = "dynamicStylesheets">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection5(options={}) {
    return `
    <fieldset>
    <legend>Javascript</legend>
    <ul>
        <li>
            <label>Data types &amp; variables</label>
            <select name = "dataTypesVariables">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Object manipulation</label>
            <select name = "objectManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>DOM Manipulation</label>
            <select name = "domManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Functions</label>
            <select name = "functions">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Templating</label>
            <select name = "templating">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Event Handling</label>
            <select name = "eventHandling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Prototype &amp; OOP</label>
            <select name = "prototypeoop">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Testing (unit, E2E)</label>
            <select name = "testing">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>AJAX</label>
            <select name = "ajax">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Debugging</label>
            <select name = "debugging">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Websockets</label>
            <select name = "websockets">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Tooling</label>
            <select name = "tooling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Libraries</label>
            <select name = "libraries">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Promises</label>
            <select name = "promises">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Browser Engines</label>
            <select name = "browserEngines">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Frameworks</label>
            <select name = "frameworks">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection6(options={}) {
    return `
    <fieldset>
    <legend>NodeJS</legend>
    <ul>
        <li>
            <label>Backend frameworks</label>
            <select name = "backendFrameworks">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Templating</label>
            <select name = "templating">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>DOM Manipulation</label>
            <select name = "domManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Unit Testing</label>
            <select name = "unitTesting">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function newEvaluationBody (options={}) {
    return `
    <!-- Section1 -->
	<div class = "fieldset-container">
        <form method="POST" action="action.php">
        
        ${inputSection()}
        ${technicalLevel()}
        ${textareaSection()}
            <section>
                ${fieldsetSection()}
                <button id = "submitButton" type = "submit" name = "submit">SUBMIT</button>
            </section>
        </form>
	</div>
    `;
}

window.onload = function() {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = newEvaluationPage();
}