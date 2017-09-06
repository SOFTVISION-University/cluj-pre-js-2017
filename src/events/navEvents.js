interview.addEventsNavigation = function () {
    const evaluations = document.getElementById('evaluationsLink');
    const newEvaluation = document.getElementById('newEvaluationLink');
    const logout = document.getElementById('logoutLink');

    const loadEvaluations = function(e) {
        e.preventDefault();
        interview.modules.evaluations.init();
        interview.modules.login.destroy();
        interview.modules.newEvaluation.destroy();
    };
    const loadNewEvaluation = function(e) {
        e.preventDefault();
        interview.modules.newEvaluation.init();
        interview.modules.evaluations.destroy();
    };
    const loadLogout = function(e) {
        e.preventDefault();
        sessionStorage.removeItem('userLogged');
        interview.modules.login.init();
        interview.modules.newEvaluation.destroy();
        interview.modules.evaluations.destroy();
    };
    

    const add = function () {
        evaluations.addEventListener('click', loadEvaluations);
        newEvaluation.addEventListener('click', loadNewEvaluation);
        logout.addEventListener('click', loadLogout);
    };

    const remove = function () {
        evaluations && evaluations.removeEventListener('click', loadEvaluations);
        newEvaluation && newEvaluation.removeEventListener('click', loadNewEvaluation);
        logout && logout.removeEventListener('click', loadLogout);
    };

    return {add, remove };
};
