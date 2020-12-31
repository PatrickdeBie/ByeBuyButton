window.onload = function() {
    var filteredElements = [];

    var textFilter = 'koop';

    // Buttons
    var allButtons = getAllButtons();
    filteredElements = filterElements(allButtons, textFilter);
    hideBuyElements(filteredElements);

    // Anchors
    var allAnchors = getAllAnchors();
    filteredElements = filterElements(allAnchors, textFilter);
    hideBuyElements(filteredElements);
}

function getAllButtons() {
    return document.querySelectorAll('input[type="button"]');
}

function getAllAnchors() {
    return document.querySelectorAll('a');
}

function filterElements(elements, textFilter) {
    var filteredElements = [];

    elements.forEach(element => {
        if(element.getAttribute('value') != undefined && element.getAttribute('value').toLowerCase() === textFilter) {
            filteredElements.push(element);
        }

        if(element.text != undefined && element.text.toLowerCase() === textFilter) {
            filteredElements.push(element);
        }
    });

    return filteredElements;
}

function hideBuyElements(elements) {
    elements.forEach(element => {
        element.style.display = "none";
    });
}