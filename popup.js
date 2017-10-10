var initializeSettings = function() {
    chrome.storage.sync.get({
        enabledFlag: true
    }, function(items) {
        document.getElementById('idEnabledFlag').checked = items.enabledFlag;
    });
};

var attachEventToSettings = function() {
    var checkboxEnabledFlag = document.getElementById('idEnabledFlag');
    checkboxEnabledFlag.addEventListener('change', function(e) {
        chrome.storage.sync.set({
            enabledFlag: e.target.checked
        }, function() {
            var status = document.getElementById('idOptionSaveStatus');
            status.textContent = 'Options saved!';
            setTimeout(function() {
                status.textContent = '';
            }, 750);
        });
    });
};

document.addEventListener('DOMContentLoaded', function() {
    initializeSettings();
    attachEventToSettings();
});