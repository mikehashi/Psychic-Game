// Psychic Game javascript -- Mike Hashimoto


		var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var guessList = [];
		var wins = 0;
		var losses = 0;
		var guessesRem = 9;

		var rand = list[Math.floor(Math.random()*list.length)];

		function resetGame() {
			guessList = [];
			guessesRem = 9;
			// document.querySelector('#guessesRem').innerHTML = 9;
			document.querySelector('#gameMessage').innerHTML = " ";
			rand = list[Math.floor(Math.random()*list.length)];
		}


		document.onkeyup = function(event) {

			console.log(rand);

			var userGuess = event.key;

			guessesRem = guessesRem - 1;

			
			document.querySelector('#guessesLeft').innerHTML = guessesRem;

			if (guessesRem == 0) {
				// document.querySelector('#gameMessage').innerHTML = "You Lose!"
				resetGame();
				losses++;
				document.querySelector('#losing').innerHTML = losses;
				}
			else {
				if (userGuess === rand) {
				wins++;
				document.querySelector('#winning').innerHTML = wins;
				resetGame();
				}
				else {
					guessList.push(userGuess);
					document.querySelector('#lettersUsed').innerHTML = " " + guessList + " ";
					console.log(guessList);
				}
			}
		};


