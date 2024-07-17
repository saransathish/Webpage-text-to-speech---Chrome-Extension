# Web Page Reader Chrome Extension

This Chrome extension reads the entire web page content aloud using text-to-speech functionality. For a detailed explanation of building this extension, check out my [blog on Medium](https://saransathish.medium.com/voice-your-web-developing-a-text-to-speech-chrome-extension-from-start-to-finish-d2e0e32baf7b).

Feel free to use and contribute!

## Features

- Reads the entire web page content aloud.
- Start-over button to read from the beginning.
- Resumes reading from where it stops if paused.

## Installation

### Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/saransathish/Webpage_textToSpeech_Chrome_Extension.git
cd Webpage_textToSpeech_Chrome_Extension
```
## Load the Extension
To load our Chrome extension, follow these steps:

### Navigate to Chrome Extensions

Open Google Chrome and type chrome://extensions/ in the address bar. This will take you to the Chrome Extensions management page.
![image](https://github.com/user-attachments/assets/fd8d586b-8185-43c8-a581-464a993992b0)


### Enable Developer Mode

In the top right corner of the Extensions page, toggle on the “Developer mode” switch. This mode enables additional options for loading unpacked extensions and inspecting their behavior.
![image](https://github.com/user-attachments/assets/9d8ccac4-90bd-4b75-834f-88d246d4c6eb)


### Load Unpacked Extension

Click on the “Load unpacked” button that appears after enabling Developer mode. A file dialog box will open.

![image](https://github.com/user-attachments/assets/19c90f30-2eab-42fd-9c39-0da06351f86a)

Navigate to the directory where your Chrome extension files (manifest.json, popup.html, popup.js, content.js, and images folder) are located. Select the folder and click "Select Folder" (or equivalent based on your operating system).

Once selected, your extension will be loaded into Chrome. You’ll see its icon appear in the Chrome toolbar, indicating that the extension is ready for use.

![image](https://github.com/user-attachments/assets/20b5b05e-3f02-4c0f-958c-0c7b56a94027)

Now that our extension is loaded, here’s how you can test its functionality:

### Interact with the Extension Icon

Click on the extension icon in the Chrome toolbar to open the popup UI. Ensure that the UI displays correctly and includes necessary controls (e.g., buttons for starting, pausing, and restarting text-to-speech).

![image](https://github.com/user-attachments/assets/b0d18109-5178-456a-a558-5907be3e1099)

Use the buttons (Read Page, Pause, Start Over, etc.) in the popup UI to interact with the extension:

Read Page: Click to initiate text-to-speech, which should read aloud the content of the current webpage.
Pause: Pause the speech synthesis if it’s currently reading.
Start Over: Cancel the current reading and start from the beginning of the page content.

![image](https://github.com/user-attachments/assets/fcdf6b85-629b-4353-8ed1-50590d3079cd)

### Verify Functionality

Speech Output: Listen to ensure that the extension accurately converts web text into spoken audio.
User Interaction: Test buttons for responsiveness and correct operation (e.g., pausing and resuming speech).

![image](https://github.com/user-attachments/assets/fcc4daa1-20c5-4fd5-ad6c-ea04cd9129dc)

By following these steps, you can successfully load your Chrome extension, test its functionality.
