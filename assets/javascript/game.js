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
    name: 'Jim',
    healthPoints: 180,
    attackPower: 60,
    counterAttackPower: 10,
    imgSource: 'http://placehold.it/102x100'
    },
    {
    name: 'Andy',
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

$('.img').on("click", function () {
	$('#enemies-available').append($('[data-char="inactive"]'));
	$('#chosen-character').append(this);
	$(this).attr("data-char","active");
	$('#first-instruction').hide();
	$('#second-instruction').css("display","block");
	activeCharacter = true;
	selectEnemy();
});

$('.img').on("click", function () {
		$('#chosen-enemy').append(this);
		$(this).attr("data-char","active");
		$('#second-instruction').hide();
		$('#third-instruction').css("display","block");
		activeEnemy = true;
});

function selectCharacter () {
	if (activeCharacter===false && activeEnemy===false) {
	};
};

function selectEnemy () {
	if (activeCharacter===true && activeEnemy===false) {
	};
};

selectCharacter();
selectEnemy();



// CHOOSE CHARACTER and have them all appear in the correct spot. Remove P from under H1// done


// Display p under enemies. Choose which enemy and have it show up in the correct spot// done


//Keep them from being clickable until next character needs to be clicked// !!!


// Fight button will do what//


//Have P's show up during game // 



// reset button//




});