/**
 * JavaScript Event Handlers for index.html
 * These functions are called using inline event attributes (e.g., onclick, onblur)
 */

// OnMouseover: Changes button background to green on mouseover
function handleMouseOver(element) {
    element.style.backgroundColor = 'green';
}

// OnMouseout: Changes button background to green on mouseout
function handleMouseOut(element) {
    element.style.backgroundColor = 'green';
}

// Onclick: Changes button background to green on click
function handleClick(element) {
    element.style.backgroundColor = 'green';
}

// Ondblclick: Changes button background to green on double click
function handleDoubleClick(element) {
    element.style.backgroundColor = 'green';
}

// onfocus: Changes input background to yellow when the input is focused (clicked into)
function handleFocus(element) {
    element.style.backgroundColor = 'yellow';
}

// onblur: Changes input background back to white and converts text to uppercase when focus is lost
function handleBlur(element) {
    // Change background back to white (or another default)
    element.style.backgroundColor = 'white';
    // Convert the input value to uppercase
    element.value = element.value.toUpperCase();
}