chrome.storage.sync.get({
    enabledFlag: true
}, function(items) {
    if (items.enabledFlag) {
        document.addEventListener('copy', copyEventHandler);
    } else {
        document.removeEventListener('copy', copyEventHandler);
    }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.enabledFlag === undefined) return;

    if (changes.enabledFlag.newValue) {
        document.addEventListener('copy', copyEventHandler);
    } else {
        document.removeEventListener('copy', copyEventHandler);
    }
});

var copyEventHandler = function(e) {
    var selectedText = window.getSelection().toString();

    if (~selectedText.indexOf('>>>')) {
        var fixedCode = selectedText.replace(/^>>> |^...   |^...$/gm, '');
        e.clipboardData.setData('text/plain', fixedCode);
        e.preventDefault();
    }
};
