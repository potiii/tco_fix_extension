chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: details.url.replace('t/.co', 't.co')};
    },
    {urls: ["*://t/.co/*"]},
    ["blocking"]
);