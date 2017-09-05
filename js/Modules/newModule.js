interviewApp.Modules.NewModule = {
    init(id = '') {
        const isIdSet = !!id;


        const hxttpNew = new XMLHttpRequest();
        hxttpNew.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:

                const newObj = JSON.parse(hxttpNew.responseText);
                if (!isIdSet) {
                    interviewApp.Events.EventsCommon().removeAll();
                    app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp(newObj);
                    const dateInput = document.getElementById('date');
                    dateInput.valueAsDate = new Date();
                    interviewApp.Events.EventsCommon().add();
                    interviewApp.Events.EventsNew().add();
                } else {
                    app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp(newObj);
                    interviewApp.Logics.AddNewEvaluationLogic(id);
                    interviewApp.Events.EventsCommon().add();
                    interviewApp.Events.EventsNew().add();
                }
            }
        };
        hxttpNew.open('GET', 'js/Data/xhrNew.json', true);
        hxttpNew.send();
    },
};
