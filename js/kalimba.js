const	activeKey = (id) =>
{
	document.getElementById(id).style.backgroundImage = "url('../resources/imgs/kalimba_key_active.png')";
}

const	inactiveKey = (id) =>
{
	document.getElementById(id).style.backgroundImage = "url('../resources/imgs/kalimba_key.png')";
}

const	playSound = (id) =>
{
	let	note = new Audio(`../resources/sounds/kalimba/${id}.mp3`);

	note.play();
}

const	ftKeyDown = (code) =>
{
	if (code === "KeyA")
	{
		playSound("C5");
		activeKey("C5");
	}
	else if (code === "KeyS")
	{
		playSound("A");
		activeKey("A");
	}
	else if (code === "KeyD")
	{
		playSound("F");
		activeKey("F");
	}
	else if (code === "KeyF")
	{
		playSound("D");
		activeKey("D");
	}
	else if (code === "KeyG")
	{
		playSound("C");
		activeKey("C");
	}
	else if (code === "KeyH")
	{
		playSound("E");
		activeKey("E");
	}
	else if (code === "KeyJ")
	{
		playSound("G");
		activeKey("G");
	}
	else if (code === "KeyK")
	{
		playSound("B");
		activeKey("B");
	}
}

const	ftKeyUp = (code) =>
{
	if (code === "KeyA")
	{
		inactiveKey("C5");
	}
	else if (code === "KeyS")
	{
		inactiveKey("A");
	}
	else if (code === "KeyD")
	{
		inactiveKey("F");
	}
	else if (code === "KeyF")
	{
		inactiveKey("D");
	}
	else if (code === "KeyG")
	{
		inactiveKey("C");
	}
	else if (code === "KeyH")
	{
		inactiveKey("E");
	}
	else if (code === "KeyJ")
	{
		inactiveKey("G");
	}
	else if (code === "KeyK")
	{
		inactiveKey("B");
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