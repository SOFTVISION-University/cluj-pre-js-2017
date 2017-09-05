function constructId(title) {
    return title.split(/[ |,|]/).join('');
}

function constructIdFieldset(legend, label) {
    return `${constructId(legend)}${constructId(label)}`;
}

function disableElement(key, el) {
    const element = document.getElementById(key);
    element.value = el[key];
    element.disabled = true;
}

const getComponent = function (page) {
    return ComponentConstructor(page);
};

const render = function (component) {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = component.view.markup;
};

const setupEvents = function (component, redirectToFunction) {
    component.events.init(redirectToFunction);
};

const destroy = function (component) {
    component.events.destroy();
};

const populate = function (component, dataName) {
    component.events.populate(dataName);
};


