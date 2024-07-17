chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'readPage') {
      const text = document.body.innerText;
      chrome.runtime.sendMessage({ action: 'speak', text: text });
    }
  });
  