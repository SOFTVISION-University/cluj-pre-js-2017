const interviewApp = {};
interviewApp.RedirectTo = function (page, id = '') {
    const app = document.querySelector('#app');

    switch (page) {
    case 'evaluations':
    this.EvaluationsModule.init();
        break;

    case 'new':
    this.LogInModule.init(id);
        break;

    case 'logIn':
        this.LogInModule.init();
        break;

    default:
    }
};
