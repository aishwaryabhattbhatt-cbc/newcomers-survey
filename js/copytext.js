document.querySelectorAll(".copy").forEach(copyButton => {
	copyButton.addEventListerner("click", () => {
		const targetElement = copyButton.dataset.copy;
		console.log(targetElement);
	});

});  