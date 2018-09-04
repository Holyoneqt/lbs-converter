function onClickHandler(info, tab) {
	console.log(info, tab);
	var n = parseInt(info.selectionText);
	if (isNaN(n)) {
		return;
	} else {
		console.log(n);
		console.log();
		window.alert(`${n} lbs = ${(n * 0.453592).toPrecision(4)} kg`);
	}
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({"title": "Convert to KG", "contexts":["selection"],
                                         "id": "context_selection"});
  });