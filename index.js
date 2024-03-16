document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    contentDiv.addEventListener('dblclick', function(event) {
        const selection = window.getSelection();
        const selectedWord = selection.toString().trim();
        
        if (selectedWord !== '') {
            console.log('Selected Word:', selectedWord);
            speakText(selectedWord);
        }
    });
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    speechSynthesis.speak(utterance);
}
