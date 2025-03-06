
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

// Price Range
const priceSlider = document.getElementById("price");
const priceValue = document.getElementById("priceValue");

priceSlider.addEventListener("input", function () {
    priceValue.textContent = priceSlider.value;
});

// Size Range
const sizeSlider = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");

sizeSlider.addEventListener("input", function () {
    sizeValue.textContent = sizeSlider.value;
});

// Color Picker
const colorPicker = document.getElementById("color");
const colorValue = document.getElementById("colorValue");

colorPicker.addEventListener("input", function () {
    colorValue.textContent = colorPicker.value;
});

// Lace Selector
const laceSelector = document.getElementById("laces");
const lacesValue = document.getElementById("lacesValue");

laceSelector.addEventListener("change", function () {
    lacesValue.textContent = laceSelector.value;
});
