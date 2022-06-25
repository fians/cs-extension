if (typeof browser === "undefined") {
  browser = chrome;
}

function saveOptions(e) {
	e.preventDefault();
	document.getElementById("success").style.display = 'none';
	browser.storage.local.set({
		subdomain: document.querySelector("#subdomain").value,
		spaces: document.querySelector("#spaces").value
	});

	setTimeout(() => {
		document.getElementById("success").style.display = 'block';
	}, 300)
}

function restoreOptions() {
	function setData(result) {
		document.querySelector("#subdomain").value = result["subdomain"] || "";
		document.querySelector("#spaces").value = result["spaces"] || "";
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	browser.storage.local.get(["subdomain", "spaces"], setData);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("button").addEventListener("click", saveOptions);