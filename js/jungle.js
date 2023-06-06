const	activeKey = (id) =>
{
	document.getElementById(id).style.backgroundImage = "url('./../resources/imgs/exclamation.jpg')";
}

const	inactiveKey = (id) =>
{
	if (id === "monkey")
	{
		setTimeout(() => {
			document.getElementById(id).style.backgroundImage = "url('./../resources/imgs/monkey.png')";			
		}, 3000);
	}
	else if (id === "elephant")
	{
		setTimeout(() => {
			document.getElementById(id).style.backgroundImage = "url('./../resources/imgs/elephant.png')";			
		}, 3000);
	}
	else if (id === "tiger")
	{
		setTimeout(() => {
			document.getElementById(id).style.backgroundImage = "url('./../resources/imgs/tiger.png')";			
		}, 3000);
	}
	else if (id === "toucan")
	{
		setTimeout(() => {
			document.getElementById(id).style.backgroundImage = "url('./../resources/imgs/toucan.png')";			
		}, 3000);
	}
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
		activeKey("monkey");
	}
	else if (code === "KeyF")
	{
		playSound("tigerSound");
		activeKey("tiger");
	}
	else if (code === "KeyI")
	{
		playSound("elephantSound");
		activeKey("elephant");
	}
	else if (code === "KeyJ")
	{
		playSound("toucanSound");
		activeKey("toucan");
	}
}

const	ftKeyUp = (code) =>
{
	if (code === "KeyE")
	{
		inactiveKey("monkey");
	}
	else if (code === "KeyF")
	{
		inactiveKey("tiger");
	}
	else if (code === "KeyI")
	{
		inactiveKey("elephant");
	}
	else if (code === "KeyJ")
	{
		inactiveKey("toucan");
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