// content.js

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {

		var ourTabIds = []
		var highlighted = selection[0]
		
		// replace "[.]" with "."
		highlightedClean = highlighted.replace(/\[\.\]/g, '.');

		// remove whitespace, tabs, quotes, brackets
		highlightedClean = highlighted.replace(/[\"\'\[\]\t\s ]/g, '');

		var regIpv4 = new RegExp("^(?:(25[0-5]|(?:2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$")
		const arrayIpv4 = ['https://www.shodan.io/host/','https://www.virustotal.com/gui/ip-address/','https://exchange.xforce.ibmcloud.com/ip/','https://otx.alienvault.com/indicator/ip/','https://viz.greynoise.io/ip/']
		
		var regMd5 = new RegExp("^[0-9a-fA-F]{32}$")
		var regSha1 = new RegExp("^[0-9a-fA-F]{40}$")
		var regSha256 = new RegExp("^[0-9a-fA-F]{64}$")
		const arrayHash = ['https://www.virustotal.com/gui/file/','https://exchange.xforce.ibmcloud.com/malware/','https://otx.alienvault.com/indicator/file/','https://www.hybrid-analysis.com/search?query=']

		var regDom = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i
		const arrayDom = ['https://www.shodan.io/search?query=','https://www.virustotal.com/gui/domain/','https://exchange.xforce.ibmcloud.com/url/','https://talosintelligence.com/reputation_center/lookup?search=']

		if (regIpv4.test(highlightedClean)) {
			var ar = arrayIpv4
		} else if (regMd5.test(highlightedClean)) {
			var ar = arrayHash
		} else if (regSha1.test(highlightedClean)) {
			var ar = arrayHash
		} else if (regSha256.test(highlightedClean)) {
			var ar = arrayHash
		} else if (regDom.test(highlightedClean)) {
			var ar = arrayDom
		} else {
			alert("Unknown selection format: " + highlighted);
			return
		}		

		ar.forEach(function(x) {
			chrome.tabs.create({
				active: false,
				url: (x) + highlightedClean
			}, tab => {
				ourTabIds.push(tab.id)
				chrome.tabs.group({tabIds : ourTabIds}, groupId => {console.log(groupId)})
			});
			
		});

    });
	
});
