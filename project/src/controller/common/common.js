function setEvent(idName, objectAttribute, redirectToFunction) {
    const element = document.getElementById(idName);
    const tableName = element.dataset.name;
    let pagesObject = {};
    const addEvent = function (e) {
        e.preventDefault();
        if (objectAttribute === 'login') {
            localStorageSetter('isLogged', false);
        }
        if (tableName) {
            pagesObject = prepareDetailsObject(tableName);
        } else {
            pagesObject = setPagesObject(objectAttribute);
        }
        redirectToFunction(pagesObject);
    };
    element.addEventListener('click', addEvent);
}

function setPagesObject(objectAttribute) {
    const pagesObject = getDefaultObject();
    pagesObject[objectAttribute] = true;
    return pagesObject;
}

function setNavEvent(idName, addListenerFunction) {
    const element = document.getElementById(idName);
    element.addEventListener('click', addListenerFunction);
}

function removeEvents(idName, eventFunction) {
    const newEvaluationNav = document.getElementById(idName);
    newEvaluationNav.removeEventListener('click', eventFunction);
}

const addEvent = function (pageAttribute, redirectToFunction) {
    const pagesObject = setPagesObject();
    pagesObject[pageAttribute] = true;
    if (pageAttribute === 'login') {
        localStorageSetter('isLogged', false);
    }
    redirectToFunction(pagesObject);
};

