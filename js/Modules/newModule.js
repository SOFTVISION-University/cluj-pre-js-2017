interviewApp.Modules.NewModule = {
    init: function(id=''){
        const isIdSet = !!id;
        
                if (!isIdSet) {
                    interviewApp.Events.EventsCommon().removeAll();
                    app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp();
                    const dateInput = document.getElementById('date');
                    dateInput.valueAsDate = new Date();
                    interviewApp.Events.EventsCommon().add();
                    interviewApp.Events.EventsNew().add();
                } else {
                    app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp();
                    interviewApp.Logics.AddNewEvaluationLogic(id);
                    interviewApp.Events.EventsCommon().add();
                    interviewApp.Events.EventsNew().add();
                }
        
    }
};
