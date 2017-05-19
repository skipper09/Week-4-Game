$(document).ready(function() {
var characters = [
   {    
    name: 'Micheal',
    healthPoints: 100,
    attackPower: 5,
    counterAttackPower: 5,
    imgSource: 'http://placehold.it/100x100'
    },
    {
    name: 'Dwight',
    healthPoints: 150,
    attackPower: 15,
    counterAttackPower: 20,
    imgSource: 'http://placehold.it/101x100'
    },
    {
    name: 'Pam',
    healthPoints: 180,
    attackPower: 18,
    counterAttackPower: 25,
    imgSource: 'http://placehold.it/102x100'
    },
    {
    name: 'Jim',
    healthPoints: 120,
    attackPower: 8,
    counterAttackPower: 5,
    imgSource: 'http://placehold.it/103x100'	
    }];

var potentialEnemies = [];
var currentEnemy = {};
var selectedCharacter = {};
var activeCharacter = false;
var activeEnemy = false;
var deadEnemies = 0;
var fightButtonClicks = 1;

$("#one").html(characters[0].healthPoints)
$("#two").html(characters[1].healthPoints)
$("#three").html(characters[2].healthPoints)
$("#four").html(characters[3].healthPoints)

function endGame() {
	if (selectedCharacter.healthPoints<=0) {
		$("#score").html("You lose, sucker! Press 'Restart' to try again.");
		$("#score2").html("");
		return;
	} if (currentEnemy.healthPoints<=0) {
		$("#fourth-instruction").css("display","block")
		$('#score').html("");
		$('#score2').html("");
		$('#chosen-enemy').html("");
		activeEnemy = false;
		currentEnemy = {};
		deadEnemies++;
	} if (deadEnemies==3) {
			alert("You win!");
			$("#fourth-instruction").hide();
	}
};

($('[data-name="michael"]')).on("click", function () {
	if (activeCharacter==false && activeEnemy==false) {
		$('#chosen-character').append(this);
		$(this).attr("data-char","active");
		$('#enemies-available').append($('[data-char="inactive"]'));
		$('#first-instruction').hide();
		$('#second-instruction').css("display","block");
		activeCharacter = true;
		selectedCharacter = characters[0];
		return;
		}

	if (activeCharacter==true && activeEnemy==false) {
		$('#chosen-enemy').append(this);
		$(this).attr("data-char","active");
		$('#second-instruction').hide();
		$('#third-instruction').css("display","block");
		$("#fourth-instruction").hide();
		$("#fifth-instruction").hide();
		currentEnemy = characters[0]
		activeEnemy = true;
	};
});


($('[data-name="dwight"]')).on("click", function () {
	if (activeCharacter===false && activeEnemy===false) {
		$('#chosen-character').append(this);
		$(this).attr("data-char","active");
		$('#enemies-available').append($('[data-char="inactive"]'));
		$('#first-instruction').hide();
		$('#second-instruction').css("display","block");
		activeCharacter = true;
		selectedCharacter = characters[1];
		return;
		}

	if (activeCharacter===true && activeEnemy===false) {
		$('#chosen-enemy').append(this);
		$(this).attr("data-char","active");
		$('#second-instruction').hide();
		$('#third-instruction').css("display","block");
		$("#fourth-instruction").hide();
		$("#fifth-instruction").hide();
		currentEnemy = characters[1]
		activeEnemy = true;
	};
});

($('[data-name="pam"]')).on("click", function () {
	if (activeCharacter===false && activeEnemy===false) {
		$('#chosen-character').append(this);
		$(this).attr("data-char","active");
		$('#enemies-available').append($('[data-char="inactive"]'));
		$('#first-instruction').hide();
		$('#second-instruction').css("display","block");
		activeCharacter = true;
		selectedCharacter = characters[2];
		return;
		}

	if (activeCharacter===true && activeEnemy===false) {
		$('#chosen-enemy').append(this);
		$(this).attr("data-char","active");
		$('#second-instruction').hide();
		$('#third-instruction').css("display","block");
		$("#fourth-instruction").hide();
		$("#fifth-instruction").hide();
		currentEnemy = characters[2]
		activeEnemy = true;
	};
});

($('[data-name="jim"]')).on("click", function () {
	if (activeCharacter===false && activeEnemy===false) {
		$('#chosen-character').append(this);
		$(this).attr("data-char","active");
		$('#enemies-available').append($('[data-char="inactive"]'));
		$('#first-instruction').hide();
		$('#second-instruction').css("display","block");
		activeCharacter = true;
		selectedCharacter = characters[3];
		return;
		}

	if (activeCharacter===true && activeEnemy===false) {
		$('#chosen-enemy').append(this);
		$(this).attr("data-char","active");
		$('#second-instruction').hide();
		$('#third-instruction').css("display","block");
		$("#fourth-instruction").hide();
		$("#fifth-instruction").hide();
		currentEnemy = characters[3]
		activeEnemy = true;
	};
});

$('#fight').on("click", function (){
	if (activeEnemy==true) {
	fightButtonClicks++;
   	$('#score').html("You attacked " + currentEnemy.name +" for " + selectedCharacter.attackPower + " damage! <br> " +
   	currentEnemy.name + " attacked you back for " + currentEnemy.counterAttackPower + " damage!");

	selectedCharacter.healthPoints = selectedCharacter.healthPoints - currentEnemy.counterAttackPower;
	currentEnemy.healthPoints = currentEnemy.healthPoints - selectedCharacter.attackPower;
	selectedCharacter.attackPower = selectedCharacter.attackPower * fightButtonClicks;
   
	$('#score2').html("Your health points: " + selectedCharacter.healthPoints + "<br>" +
   	currentEnemy.name + "'s health points: " + currentEnemy.healthPoints);

	$("#one").html(characters[0].healthPoints)
	$("#two").html(characters[1].healthPoints)
	$("#three").html(characters[2].healthPoints)
	$("#four").html(characters[3].healthPoints)

   endGame();

	} 
});

	//not working//
$('#restart').on("click", function () {
	location.reload();
});




// reset button//

// add media queries //

// maybe change the colors of the floats behind the images like in the example //



});