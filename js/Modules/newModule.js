interviewApp.Modules.NewModule = {
    init: function(id=''){
        const isIdSet = !!id;
        
                if (!isIdSet) {
                    interviewApp.EventsCommon().removeAll();
                    app.innerHTML = interviewApp.NewEvaluationPageMarkUp();
                    const dateInput = document.getElementById('date');
                    dateInput.valueAsDate = new Date();
                    interviewApp.EventsCommon().add();
                    interviewApp.EventsNew().add();
                } else {
                    app.innerHTML = interviewApp.NewEvaluationPageMarkUp();
                    interviewApp.AddNewEvaluationLogic(id);
                    interviewApp.EventsCommon().add();
                    interviewApp.EventsNew().add();
                }
        
    }
};
