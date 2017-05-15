var micheal = {
	healthPoints:100,
	attackPower: 20,
	counterAttackPower: 10
}
var dwight = {
	healthPoints:160,
	attackPower: 40,
	counterAttackPower: 28
}
var jim = {
	healthPoints:180,
	attackPower: 60,
	counterAttackPower: 18
}
var andy = {
	healthPoints: 80,
	attackPower: 10,
	counterAttackPower: 5
}

var activeCharacter = false;
var activeEnemy = false;
var passiveEnemy

$(document).ready(function() {

function selectCharacter () {
	if (activeCharacter===false && activeEnemy===false) {
	$('.img').on("click", function () {
		$('#enemies-available').append($('[data-char="inactive"]'));
		$('#chosen-character').append(this);
		$(this).attr("data-char","active");
		$('#first-instruction').hide();
		$('#second-instruction').css("display","block")
		activeCharacter = true;
		selectEnemy();
	
})}};

function selectEnemy () {
	if (activeCharacter===true && activeEnemy===false) {
		$('.img').on("click", function () {
			$('#chosen-enemy').append(this);
			$(this).attr("data-char","active")
			$('#second-instruction').hide();
			activeEnemy = true;
		});
	};
};

selectCharacter();
selectEnemy();



// CHOOSE CHARACTER and have them all appear in the correct spot. Remove P from under H1//


// Display p under enemies. Choose which enemy and have it show up in the correct spot//

//Keep them from being clickable until next character needs to be clicked//


// Fight button will do what//


//Have P's show up during game // 



// reset button//




});