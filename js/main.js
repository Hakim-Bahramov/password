function myFunction() {

	var x = document.getElementById("inOne");

	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}

}

function textFunction() {

	var x = document.getElementById("inOne").value;
	var prog = document.getElementById("pb").classList;
	var tex = document.getElementById("text");

	if (x.length === 0) {
		prog.remove("bg-danger", "w-25");
		tex.innerText = "";
	}
	else if (x.length > 0 && x.length <= 4) {
		prog.remove("w-75");
		prog.add("w-25", "bg-danger");

		tex.innerText = "Too weak";
		tex.classList.add("text-danger");

		document.getElementById("button").classList.add("d-none");
	} 
	else if (x.length > 4 && x.length <= 8) {
		prog.remove("bg-danger", "w-100");
		prog.add("w-75", "bg-warning");

		tex.classList.remove("text-danger");
		tex.innerText = "Not bad";
		tex.classList.add("text-warning");

		document.getElementById("button").classList.remove("d-none");
	}
	else if (x.length > 8) {
		prog.remove("bg-warning")
		prog.add("w-100", "bg-success");

		tex.innerText = "Strong!";
		tex.classList.remove("text-warning");
		tex.classList.add("text-success");
	}
}

//document.getElementById("text").innerText = x;