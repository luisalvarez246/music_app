const	playSound = (id) =>
{
	let	note = new Audio(`../resources/sounds/drums/${id}.wav`);

	note.play();
}
const	activeKey = (id) =>
{
	document.getElementById(id).src = `../resources/imgs/${id}-A.png`;
}
const	inactiveKey = (id) =>
{
	document.getElementById(id).src = `../resources/imgs/${id}.png`;	
}
const	ftKeyDown = (code) =>
{
	if (code === "KeyA")
	{
		playSound("hi-hat");
		activeKey("hi-hat");
	}
	else if (code === "KeyS")
	{
		playSound("tom");
		activeKey("tom");
	}
	else if (code === "KeyF")
	{
		playSound("tom1");
		activeKey("tom1");
	}
	else if (code === "KeyD")
	{
		playSound("tom2");
		activeKey("tom2");
	}
	else if (code === "KeyG")
	{
		playSound("roll");
		activeKey("roll");
	}
	else if (code === "KeyH")
	{
		playSound("tom3");
		activeKey("tom3");
	}
	else if (code === "KeyK")
	{
		playSound("crash");
		activeKey("crash");
	}
	else if (code === "KeyJ")
	{
		playSound("tom4");
		activeKey("tom4");
	}
}

const	ftKeyUp = (code) =>
{
	if (code === "KeyA")
	{
		inactiveKey("hi-hat");
	}
	else if (code === "KeyS")
	{
		inactiveKey("tom");
	}
	else if (code === "KeyF")
	{
		inactiveKey("tom1");
	}
	else if (code === "KeyD")
	{
		inactiveKey("tom2");
	}
	else if (code === "KeyG")
	{
		inactiveKey("roll");
	}
	else if (code === "KeyH")
	{
		inactiveKey("tom3");
	}
	else if (code === "KeyK")
	{
		inactiveKey("crash");
	}
	else if (code === "KeyJ")
	{
		inactiveKey("tom4");
	}

}

const	keyboardListener = () =>
{
	document.addEventListener("keydown", (event) =>
	{
		let	code = event.code;

		ftKeyDown(code);
	}
	);
	document.addEventListener("keyup", (event) =>
	{
		let code = event.code;

		ftKeyUp(code);
	}
	);
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
