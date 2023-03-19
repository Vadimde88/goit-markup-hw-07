const buttons = document.querySelectorAll(".buttons-section button");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		buttons.forEach(function (btn) {
			btn.classList.remove("active");
		});

		button.classList.add("active");

		const currentButton = document.querySelector(".current-button");
		currentButton.classList.remove("current-button");
		currentButton.classList.add("buttons");

		button.classList.remove("buttons");
		button.classList.add("current-button");
	});

	if (button.classList.contains("current-button")) {
		button.classList.add("active");
	}
});
