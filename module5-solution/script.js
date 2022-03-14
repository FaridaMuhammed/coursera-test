document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			this.textContent = "Said it!";
			var name = document.getElementById('name').value;
			var message = "<h2>" + name + " Great choose !</h2>";

			document.getElementById("content").innerHTML = message;
		}

		document.querySelector("button").addEventListener("click", sayHello);
	}
	);