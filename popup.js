let utterance;
let isPaused = false;
let currentIndex = 0;
let text = '';

document.getElementById('readButton').addEventListener('click', () => {
  if (isPaused) {
    speechSynthesis.resume();
    isPaused = false;
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getTextAndRead
      }, (results) => {
        text = results[0].result;
        startReading();
      });
    });
  }
});

document.getElementById('stopButton').addEventListener('click', () => {
  speechSynthesis.pause();
  isPaused = true;
});

document.getElementById('startOverButton').addEventListener('click', () => {
  speechSynthesis.cancel();
  isPaused = false;
  currentIndex = 0;
  startReading();
});

function getTextAndRead() {
  return document.body.innerText;
}

function startReading() {
  if (utterance) {
    utterance.onboundary = null;
  }

  const remainingText = text.slice(currentIndex);
  utterance = new SpeechSynthesisUtterance(remainingText);

  utterance.onboundary = (event) => {
    if (event.name === 'word') {
      currentIndex += event.charIndex;
    }
  };

  utterance.onend = () => {
    currentIndex = 0;
  };

  speechSynthesis.speak(utterance);
}