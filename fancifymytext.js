// Texting beginning of assignment
function showAlert() {
    alert("Hello, world!");
}

// Increasing text size
function increaseTextSize() {
    var textArea = document.getElementById("textInput").style.fontSize = '24pt';
    textArea.style.fontSize = "24pt";
}

// Applying the styles provided by assignment
function applyStyles() {
    var textArea = document.getElementById("textInput");
    
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "blue";
    } else if (boringRadio.checked) {
        textArea.style.fontWeight = "";
        textArea.style.textDecoration = "";
        textArea.style.color = "";
    }
}

// Making text uppercase but also adding -Moo at the end of each sentence
// Can keep clicking button and it keeps adding -Moo
function upperCaseMoo() {
    var textArea = document.getElementById("textInput")
    textArea.value = textArea.value.toUpperCase();
    
    var sentences = text.split('.');
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
    
        if (sentence !== "") {
            var words = sentence.split(" ");
            if (words.length > 0) {
                var lastWord = words[words.length - 1];
                words[words.length - 1] = lastWord + "-Moo";
                sentences[i] = words.join(" ");
            }
        }
    }
    textArea.value = sentences.join('.');
}