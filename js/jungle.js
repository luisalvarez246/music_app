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
	let	note = new Audio(`../resources/sounds/jungle/${id}.mp3`);

	note.play();
}

const	ftKeyDown = (code) =>
{
	if (code === "KeyE")
	{
		playSound("monkeySound");
		activeKey("monkeySound");
	}
	else if (code === "KeyF")
	{
		playSound("tigerSound");
		activeKey("F");
	}
	else if (code === "KeyI")
	{
		playSound("elephantSound");
		activeKey("I");
	}
	else if (code === "KeyJ")
	{
		playSound("toucanSound");
		activeKey("J");
	}
}

const	ftKeyUp = (code) =>
{
	if (code === "KeyE")
	{
		inactiveKey("F");
	}
	else if (code === "KeyF")
	{
		inactiveKey("E");
	}
	else if (code === "KeyI")
	{
		inactiveKey("J");
	}
	else if (code === "KeyJ")
	{
		inactiveKey("I");
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