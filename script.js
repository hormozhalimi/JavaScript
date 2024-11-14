function makeBigger() {
    let textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt"; // Set text size to 24pt
}

function fancify() {
    let textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

function boring() {
    let textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "normal";
    textInput.style.color = "black";
    textInput.style.textDecoration = "none";
}

function toggleBold() {
    let textInput = document.getElementById("textInput");
    textInput.style.fontWeight = document.getElementById("bold").checked ? "bold" : "normal";
}

function toggleItalic() {
    let textInput = document.getElementById("textInput");
    textInput.style.fontStyle = document.getElementById("italic").checked ? "italic" : "normal";
}

function toggleUnderline() {
    let textInput = document.getElementById("textInput");
    textInput.style.textDecoration = document.getElementById("underline").checked ? "underline" : "none";
}

