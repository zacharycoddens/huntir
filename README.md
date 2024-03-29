<p align="center">
  <img src="https://github.com/zacharycoddens/huntir/blob/main/huntir.png" width="200"></center>
</p>
Open source intelligence browser Google Chrome extension
</p>
*UNPACKED BETA VERSION, NOT YET SUBMITTED TO CHROME STORE*
</p>
This extension will open highlighted IPv4s, domains, or file hashes in a new tab group in Google Chrome. It is highly recommended to configure a keyboard shortcut to launch this extension, in order to maximize efficiency.

The extension will remove whitespaces, tabs, and IOC sanitizing brackets ("xxxxx[.]com" --> "xxxxx.com") automatically, any highlighted field that still does not pattern match IPv4, domain, or file hashes (SHA1, MD5, SHA256) will throw an error.

To load unpacked plugin:
- Download "ChromeExt" folder and save to your computer in a directory location of your choice
- Open Google Chrome and navigate to `chrome://extensions`
- Toggle on "Developer Mode" in top right
- Select "Load Unpacked" and select the directory location where the files are saved
- Ensure that the huntir extension is enabled

To set keyboard shortcut:
- Still under `chrome://extensions`, click on top left hamburger menu and select "Keyboard Shortcuts"
- For the huntir extension, enter your desired keystroke in the "Activate the extension" field (e.g. `Alt + Q`)
- Test extension by highlighting an IPv4 address, domain, or file hash and typing keystroke (refresh/reload Chrome first, if needed)
