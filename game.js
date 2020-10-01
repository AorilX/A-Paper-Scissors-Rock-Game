//Assignment2

//ask for the username
var userName = window.prompt("please enter your name");
document.write("<h1>" + userName + ", WELCOME TO Paper Scissors Rock Game!!</h1>");
var count = 0, countWin = 0, countLose = 0, countTie = 0,
	countPaper = 0, countSissors = 0,
	countRock = 0;
var text2 = "";

function play()
	{
	
	var y;
	var userchice, text1, text2, text3 = "";
	var paperCondition = document.getElementById("Paper").checked;
	var scissorsCondition = document.getElementById("Scissors").checked;
	var rockCondition = document.getElementById("Rock").checked;


	//check user choice
	if (paperCondition)
		{
			 userChoice = "Paper";
			 y = 3;
			 count++;
		}
		else if (scissorsCondition) 
			{
				userChoice = "Scissors";
				y = 1;
				count++;
			} 
		else if (rockCondition)
			{
				userChoice = "Rock";
				y = 2;
				count++;
			}
		else 
			{
				alert("Please select your choice");
			}
	//generate computer choices
	if (paperCondition || rockCondition || scissorsCondition) 
	{
		var	x = Math.floor(Math.random() * 3 + 1);
		//transform numbers to words
		if (x == 1) 
			{
				text1 = "Scissors";
				countSissors++;
			} 
		else if (x == 2) 
			{
				text1 = "Rock";
				countRock++;
				
			} 
		else 
			{
				text1 = "Paper";	
				countPaper++;
			}

	//show choices
	document.getElementById("yourChoice").innerHTML = userChoice;
	document.getElementById("cChoice").innerHTML = text1;
	document.getElementById("cChoice1").innerHTML = text1;
	 
	
	//compare results
	text2 = compare(x,y);
	

	document.getElementById("text_2").innerHTML = text2;
	document.getElementById("text_3").innerHTML = 
		"History: You have played total " + count + " time(s)";
	document.getElementById("text_4").innerHTML =
		"You win:\t" + countWin + " times<br>" + 
		"You lose:\t " + countLose + " times<br>" + 
		"You tie:\t  " + countTie + " times";

	document.getElementById("text_5").innerHTML =
		"Computer choices:<br>   Paper: " + countPaper
		+ " times<br>Scissors: " + countSissors +
		" times<br>Rock: " + countRock + " times";	
	}
	}

function compare (x, y)
{
	if (x == 1)
	{
		if (y == 2)
		{
			text2 = "You win!";
			countWin++;
		}
		else if (y == 3) 
		{
			text2 = "You lose.";
			countLose++;
		} 
			else 
			{
				text2 = "Tie.";
				countTie++;
			}
	}
	else if (x == 2) 
	{
		if (y == 1)
		{
			text2 = "You lose.";
			countLose++;
		}
		else if (y == 2) 
			{
				text2 = "Tie.";
				countTie++;
			} 
			else 
			{
				text2 = "You win!";
				countWin++;
			}		
	} 
	else 
		{if(y == 1)
			{
				text2 = "You win!";
				countWin++;
			}
			else if (y == 2) 
				{
					text2 = "You lose.";
					countLose++;
				} 
				else 
				{
					text2 = "Tie.";
					countTie++;
				}
		}
		return text2;
}
	

	/*
	document.getElementById("text_2").innerHTML = 
	"Paper: " + countPaper + "time(s)" + " & Scissors: " 
	+ countSissors + " & Rock: " + countRock;


		function findMax(userChoice, computerChoice)
		{
			return Math.max(userChoice, computerChoice);
		}*/