<!-- Number Guessing Game HTML -->
<html>
	<head>
		<title>JavaScript Number Guess</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no">
		<!-- TODO let the user submit a guess by pressing return -->
		<!-- TODO hide and show history area as needed -->
	</head>
    <style type ="text/css">
    body {
	margin: 10px;
	background-color: #cccccc;
	font-family: Arial, sans-serif;
}

.button {
	margin-top: 10px;
	border-radius: 10px;
	border-color: #000000;
	border-style: solid;
	border-width: 1px;
	width: 20%;
	padding: 5px;
	text-align: center;
	font-weight: bold;
}

#historyArea {
	margin-top: 10px;
	padding-left: 5px;
	padding-right: 5px;
}

#game {
	background-color: #ffffff;
	border-radius: 10px;
	border-style: solid;
	border-width: 3px;
	border-color: #cccccc;
	padding: 10px;
}

#statusArea {
	font-size: 120%;
}

#footerArea {
	text-align: center;
	margin-top:5px;
	font-size: 90%;
	font-style: italic;
}
</style>
	<body>
		<div id="game">
			<h1>Number Guessing Game</h1>
			<div id="statusArea">
				<p>Enter a number between 1-100 and click the button...</p>
			</div>
			<input type="number" id="userGuess"/>
			<div id="buttonArea" class="button">
				Guess
			</div>
			<div id="historyArea">
				<h2>Your Previous Guesses</h2>
				<ol id="historyList">
				</ol>
			</div>
			<div id="footerArea">
		
			</div>
		</div>
        <script type ="text/javascript">
        var secretNumber = 0,
	numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	var elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	var userGuessed = document.getElementById('userGuess').value;
	var statusArea = document.getElementById('statusArea');
	var historyList = document.getElementById('historyList');
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {
		// Nothing entered or our of range.
		writeMessage('statusArea', '<p>Please enter a number 1-100 and press the Guess button.</p>');
	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<p>Please enter a whole number 1-100 and press the Guess button.</p>');
	} else {
		numberOfGuesses++;

		if (userGuessed == secretNumber) {
			// Got it
			writeMessage('statusArea', '<p>You got me in ' + numberOfGuesses +' guesses, I was thinking ' + secretNumber + '. Let\'s go again...</p>');
			newGame();
		} else if (userGuessed < secretNumber) {
			// User needs to guess higher
			writeMessage('statusArea', '<p>You need to guess higher than ' + userGuessed + ', try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' (too low)</li>', true);
		} else {
			// User needs to guess lower
			writeMessage('statusArea', '<p>You need to guess lower than ' + userGuessed + ', try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed + ' (too high)</li>', true);
		}
	}

	document.getElementById('userGuess').value = '';	
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};
</script>
	</body>
</html>
