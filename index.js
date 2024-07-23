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
    utterance.voiceURI = 'Google हिन्दी';
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);

    const voices = speechSynthesis.getVoices();
    
    // Find a female voice for Hindi (India) if available
    const femaleVoice = voices.find(voice => voice.lang === 'hi-IN' && voice.name.includes('Female'));
    console.log(femaleVoice);
}
