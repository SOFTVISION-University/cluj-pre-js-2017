// IIFE - immediately invoked function expression
window.onload = function () {
    const appEl = document.querySelector('#app');
    const isLogged = !!sessionStorage.userLogged;
    isLogged ? interview.modules.evaluations.init() : interview.modules.login.init();
}()