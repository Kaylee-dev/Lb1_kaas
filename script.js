var cheeseColor = prompt("Is de kaas geel?");
cheeseColor = cheeseColor.toLowerCase();

if (cheeseColor == "ja") {
	var cheeseholes = prompt("Zitten er gaten in?");
	cheeseholes = cheeseholes.toLowerCase();

	if (cheeseholes == "ja") {
		var cheeseExpensive = prompt("Is de kaas belachelijk duur?");
		cheeseExpensive = cheeseExpensive.toLowerCase();

		if (cheeseExpensive == "ja") {
			alert("Uw kaas is een Emmenthaler");
		} else if (cheeseExpensive == "nee") {
			alert("Uw kaas is een Leerdammer");
		}

	} else if (cheeseholes == "nee") {
		var cheesHard = prompt("Is de kaas hard als steen?");
		cheesHard = cheesHard.toLowerCase();

		if (cheeseHard == "ja") {
			alert("Uw kaas is een Pamigiano Reggiano");
		} else if (cheesHard == "nee") {
			alert("Uw kaas is een Goudse kaas");
		}
	}
} else if(cheeseColor == "nee") {
	var cheeseBlue = prompt("Heeft de kaas blauwe schimmels?");
	cheeseBlue = cheeseBlue.toLowerCase();

	if (cheeseBlue == "ja") {
		var cheeseCrust = prompt("Heeft de kaas een korst?");
		cheeseCrust = cheeseCrust.toLowerCase();

		if (cheeseCrust == "ja") {
			alert("Uw kaas is een Blue de Rochbaron");
		} else if (cheeseCrust == "nee") {
			alert("Uw kaas is een Foume d'Ambert");
		}
	} else if (cheeseBlue == "nee") {
		var cheeseCrust = prompt("Heeft de kaas een korst?");
		cheeseCrust = cheeseCrust.toLowerCase();

		if (cheeseCrust == "ja") {
			alert("Uw kaas is een Camembert");
		} else if (cheeseCrust == "nee") {
			alert("Uw kaas is een Mozzarella");
		}
	}
}