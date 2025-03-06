
    function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = color;
}

function addClass(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.add(className);
}

function removeClass(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.remove(className);
}

function updateTextContent(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
}

document.documentElement.style.setProperty('--animate-duration', '2s');