

		var wins = 0;
		var loses = 0;
		var guessesLeft = 9;
		var userGuessArray = new Array();
		
		document.onkeyup = function(event) {

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);

			function random_character() {
	    	var chars = "abcdefghijklmnopqurstuvwxyz";
	    	return chars.substr( Math.floor(Math.random() * 26), 1);
			}

			var computerGuess = random_character();
			console.log(computerGuess);
		
			if (typeof userGuess === 'string' || userGuess instanceof String) {
				if (userGuess === computerGuess) {
					userGuessArray.unshift(userGuess);
					wins++;
					guessesLeft--;
					console.log("wins : " + wins);
					} 
				else {
					userGuessArray.unshift(userGuess);
					loses++;
					console.log("lose : " + loses);
					guessesLeft--;
					} 
				}
			else {
				alert("Please enter a string");
			}


	        if (guessesLeft == 0) {
	        	wins = 0;
	        	loses = 0;
	        	guessesLeft = 9;
	        	userGuess ="";
	        	userGuessArray = [];

	        }
			// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	        var html =	
	         	"<p>Wins : " + wins + "</p>" +
	          	"<p>losses: " + loses + "</p>" +
	          	"<p>Guesses Left: " + guessesLeft + "</p>" +
	          	"<p>You Guesses so far: " + userGuessArray.toString()
	          	 + "</p>";

	        // Set the inner HTML contents of the #game div to our html string
	        document.querySelector('#Game').innerHTML = html;


	 	}

			



