window.onload = function() {
    var filteredElements = [];

    var textFilter = ['koop', 'basket', 'buy', 'koop nu', 'bestel', 'order now', 'order', 'bestellen', 'kopen'];

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
        var pushElement = false;

        if(element.getAttribute('value') != undefined && textFilter.includes(element.getAttribute('value').toLowerCase())) {
            pushElement = true;
        }

        if(element.text != undefined && textFilter.includes(element.text.toLowerCase())) {
            pushElement = true;
        }

        textFilter.forEach(filter => {
            if(element.getAttribute('href') != undefined && element.getAttribute('href').includes(filter)) {
                pushElement = true;
            }
        });

        if(pushElement) {
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