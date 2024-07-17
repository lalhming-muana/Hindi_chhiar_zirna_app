document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    contentDiv.addEventListener('mouseup', function(event) {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        
        if (selectedText !== '') {
            console.log('Selected Text:', selectedText);
            speakText(selectedText);
        }
    });
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    speechSynthesis.speak(utterance);
}
