var cheeseColor = prompt("Is de kaas geel?");
cheeseColor = cheeseColor.toLowerCase();
// .toLowerCase zorgt ervoor dat de gebruiker kleine letters en hoofdletters kan invullen en dan blijft hij het gewoon doen.
//Doordat hij alles omzet in kleine letters

if (cheeseColor == "ja") {
	var cheeseholes = prompt("Zitten er gaten in?");
	cheeseholes = cheeseholes.toLowerCase();

	if (cheeseholes == "ja") {
		var cheeseExpensive = prompt("Is de kaas belachelijk duur?");
		cheeseExpensive = cheeseExpensive.toLowerCase();

		if (cheeseExpensive == "ja") {
			alert("Uw kaas is een Emmenthaler");
			document.write("Emmenthaler");
		} else if (cheeseExpensive == "nee") {
			alert("Uw kaas is een Leerdammer");
			document.write("Leerdammer");
		}

	} else if (cheeseholes == "nee") {
		var cheeseHard = prompt("Is de kaas hard als steen?");
		cheeseHard = cheeseHard.toLowerCase();

		if (cheeseHard == "ja") {
			alert("Uw kaas is een Pamigiano Reggiano");
			document.write("Pamigiano Reggiano");
		} else if (cheeseHard == "nee") {
			alert("Uw kaas is een Goudse kaas");
			document.write("Goudse kaas");
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
			document.write("Blue de Rochbaron");
		} else if (cheeseCrust == "nee") {
			alert("Uw kaas is een Foume d'Ambert");
			document.write("Foume d'Ambert");
		}
	} else if (cheeseBlue == "nee") {
		var cheeseCrust = prompt("Heeft de kaas een korst?");
		cheeseCrust = cheeseCrust.toLowerCase();

		if (cheeseCrust == "ja") {
			alert("Uw kaas is een Camembert");
			document.write("Camembert");
		
		} else if (cheeseCrust == "nee") {
			alert("Uw kaas is een Mozzarella");
			document.write("Mozzarella");
		}
	}
}

