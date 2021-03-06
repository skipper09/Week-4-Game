$(document).ready(function() {
var characters = [
   {    
    name: 'Micheal',
    healthPoints: 100,
    firstAttackPower: 5,
    attackPower: 5,
    counterAttackPower: 5,
    imgSource: 'http://placehold.it/100x100'
    },
    {
    name: 'Dwight',
    healthPoints: 150,
    firstAttackPower: 10,
    attackPower: 10,
    counterAttackPower: 15,
    imgSource: 'http://placehold.it/101x100'
    },
    {
    name: 'Pam',
    healthPoints: 180,
    firstAttackPower: 18,
    attackPower: 18,
    counterAttackPower: 25,
    imgSource: 'http://placehold.it/102x100'
    },
    {
    name: 'Jim',
    healthPoints: 120,
    firstAttackPower: 8,
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
   	$('#score').html("You attacked " + currentEnemy.name +" for " + selectedCharacter.attackPower + " damage! <br> " +
   	currentEnemy.name + " attacked you back for " + currentEnemy.counterAttackPower + " damage!");

	currentEnemy.healthPoints = currentEnemy.healthPoints - selectedCharacter.attackPower;
	selectedCharacter.healthPoints = selectedCharacter.healthPoints - currentEnemy.counterAttackPower;
	selectedCharacter.attackPower = selectedCharacter.attackPower +=selectedCharacter.firstAttackPower;

	$('#score2').html("Your health points: " + selectedCharacter.healthPoints + "<br>" +
   	currentEnemy.name + "'s health points: " + currentEnemy.healthPoints);

   	endGame();

	$("#one").html(characters[0].healthPoints)
	$("#two").html(characters[1].healthPoints)
	$("#three").html(characters[2].healthPoints)
	$("#four").html(characters[3].healthPoints)

	} 
});

$('#restart').on("click", function () {
	location.reload();
});

// fix attack point increments//



});