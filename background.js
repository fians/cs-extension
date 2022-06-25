if (typeof browser === "undefined") {
  browser = chrome;
}

// Open the page based on how the user clicks on a suggestion.
browser.omnibox.onInputEntered.addListener((text, disposition) => {
  console.log(text, disposition)

	browser.storage.local.get(["subdomain", "spaces"], function (result) {
    let url = `https://${result["subdomain"]}.atlassian.net/wiki/search?text=${text}`;
    let spaces = result["spaces"].trim();

    if (spaces != '') {
      url = `${url}&spaces=${spaces}`
    }
  
    switch (disposition) {
      case "currentTab":
        browser.tabs.update({url});
        break;
      case "newForegroundTab":
        browser.tabs.create({url});
        break;
      case "newBackgroundTab":
        browser.tabs.create({url, active: false});
        break;
    }
  });
});