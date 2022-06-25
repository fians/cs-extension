# Confluence search web extension

DISCLAIMER: I created this because at the time this extension created initialy there is no easy way to perform search on your Confluence site directly from the browser omnibox (address bar). I have no intention to make this extension available on the browser extension marketplace nor maintain this extension in the future. This is only part of my experimentation to increase productivity of my team which related with projects documentation.

## How to install

### Mozilla Firefox

1. Download this repository onto your local machine
2. Open `about:debugging` on your Firefox browser.
3. Go to "This Firefox" section
4. Click "Load Temporary Add-on"
5. Find the local folder of this repository and open `manifest.json` file
6. The extension is ready to use.

If this step not working, please find out more details here [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

### Google Chrome

1. Download this repository onto your local machine
2. Open `chrome://extensions/` on your Chrome browser.
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Find the local folder of this repository and select the folder
6. The extension is ready to use.

If you see warning "Manifest version 2 is deprecated" this is because the current implementation of the extension is using Manifest V2. This is fine, the extension is still usable until 2023.

If this step not working, please find out more details here [https://developer.chrome.com/docs/extensions/mv2/tut_debugging/](https://developer.chrome.com/docs/extensions/mv2/tut_debugging/)

### Other browser
This extension has not been tested on other browser than Firefox and Chrome. As long as the browser support [Extension API](https://developer.chrome.com/docs/extensions/reference/) this extension should work.

## Developers

This extension is quite straight forward. It just registering the keyword for omnibox and replacing the search text with the proper site search url. So it should be easy for you if you want to use this and change it into different search extension functionality. Just replace the url and modify some parameter and you good to go.

## Notice of Non-Affiliation and Disclaimer

I am are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Atlassian, or any of its subsidiaries or its affiliates. The official Atlassian and Confluence can be found at [http://www.atlassian.com](http://www.atlassian.com).

The names Atlasian and Confluence as well as related names, marks, emblems and images are registered trademarks of their respective owners.


