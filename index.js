document.getElementById('speakButton').addEventListener('click', function () {
    const textToSpeak = 'नमस्ते! यह एक परीक्षण है'; // Hindi text to be spoken
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'hi-IN'; // Set the language to Hindi (India)
    speechSynthesis.speak(utterance);
});