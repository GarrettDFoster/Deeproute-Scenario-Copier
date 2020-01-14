var s = document.createElement('script');
// TODO: add "trades.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('copy_play.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);