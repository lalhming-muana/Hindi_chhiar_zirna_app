document.getElementById('hindiText').addEventListener('click', function (event) {
    if (event.target.tagName === 'P') {
        const selectedWord = event.target.textContent.trim();
        document.getElementById('speakButton').textContent = `Speak: ${selectedWord}`;
        selectedText = selectedWord;
    }
});

document.getElementById('speakButton').addEventListener('click', function () {
    if (selectedText) {
        speakText(selectedText);
    }
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
