$(document).ready(function() {
var characters = [
   {    
    name: 'Micheal',
    healthPoints: 100,
    attackPower: 20,
    counterAttackPower: 10,
    imgSource: 'http://placehold.it/100x100'
    },
    {
    name: 'Dwight',
    healthPoints: 160,
    attackPower: 40,
    counterAttackPower: 28,
    imgSource: 'http://placehold.it/101x100'
    },
    {
    name: 'Pam',
    healthPoints: 180,
    attackPower: 60,
    counterAttackPower: 10,
    imgSource: 'http://placehold.it/102x100'
    },
    {
    name: 'Jim',
    healthPoints: 80,
    attackPower: 10,
    counterAttackPower: 5,
    imgSource: 'http://placehold.it/103x100'	
    }];

var potentialEnemies = [];
var currentEnemy = {};
var selectedCharacter = {};

var activeCharacter = false;
var activeEnemy = false;

function endGame() {
	if (selectedCharacter.healthPoints<=0) {
		alert("You lose, sucker! Press 'Restart' to try again.")
		return;
	} else if (currentEnemy.healthPoints<=0) {

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
		currentEnemy = characters[3]
		activeEnemy = true;
	};
});

$('#fight').on("click", function (){
   $('#score').html("You attacked " + currentEnemy.name +" for " + selectedCharacter.attackPower + " damage! <br> " +
   	currentEnemy.name + " attacked you back for " + currentEnemy.counterAttackPower + " damage!");

   selectedCharacter.healthPoints = selectedCharacter.healthPoints - currentEnemy.counterAttackPower;
   currentEnemy.healthPoints = currentEnemy.healthPoints - selectedCharacter.attackPower;
   selectedCharacter.attackPower = selectedCharacter.attackPower * 2;
   
   $('#score2').html("Your health points: " + selectedCharacter.healthPoints + "<br>" +
   	currentEnemy.name + "'s health points: " + currentEnemy.healthPoints);

   endGame();
});

$('restart').on("click", function () {
});



//Have P's show up during game // 

// win and loss based on points

// reset button//

// add media queries //




});