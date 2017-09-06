interviewApp.Modules.NewModule = {
    init(id = '') {
        const isIdSet = !!id;
        const newPromise = new Promise(function(resolve, reject){
            const xhttpNew = new XMLHttpRequest();
            xhttpNew.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if(this.status <400){
                        let newObj;
                    try {
                        newObj = JSON.parse(xhttpNew.responseText);
                        resolve(newObj);
                    } catch(e) {
                        reject("Cannot access json file");
                    }
                    
                }else{
                    reject("Cannot access json file");
                }}
            };
            xhttpNew.open('GET', 'js/Data/xhrNew.json', true);
            xhttpNew.send();
        });
        newPromise.then((data)=>{
            if (!isIdSet) {
                interviewApp.Events.EventsCommon().removeAll();
                app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp(data);
                const dateInput = document.getElementById('date');
                dateInput.valueAsDate = new Date();
                interviewApp.Events.EventsCommon().add();
                interviewApp.Events.EventsNew().add();
            } else {
                app.innerHTML = interviewApp.Views.NewEvaluationPageMarkUp(data);
                interviewApp.Logics.AddNewEvaluationLogic(id);
                interviewApp.Events.EventsCommon().add();
                interviewApp.Events.EventsNew().add();
            }
        }).catch((error)=>{
            document.getElementById('app').innerHTML("Something went wrong");
        });
    }
};
