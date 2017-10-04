document.addEventListener('copy', function(e) {
	var selectedText = window.getSelection().toString();
	
	if(~selectedText.indexOf('>>>')){
		var fixedCode = selectedText.replace(/^>>> |^...   |^...$/gm, '');
		e.clipboardData.setData('text/plain', fixedCode);
		e.preventDefault();
	}
});
