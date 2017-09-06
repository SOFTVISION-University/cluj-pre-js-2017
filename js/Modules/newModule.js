interviewApp.Modules.NewModule = {
    init(id = '') {
        const isIdSet = !!id;


        const xhttpNew = new XMLHttpRequest();
        xhttpNew.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                    let newObj;
                try {
                    newObj = JSON.parse(xhttpNew.responseText);
                } catch(e) {
                    newObj = {};
                }
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
        xhttpNew.open('GET', 'js/Data/xhrNew.json', true);
        xhttpNew.send();
    },
};
