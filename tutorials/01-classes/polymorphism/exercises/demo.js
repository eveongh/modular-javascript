/**** POLYMORPHISM ****/


/** EXAMPLE 1 - OVERRIDING THE PARENT ACTION **/

class GameCharacter {
	constructor(characterName) {
		this.name = characterName;
	}

	// Default action baseline
	performAction() {
		return `${this.name} stands ready for battle.`;
	}
}

// DEMO: Create a Warrior class that inherits from GameCharacter
// Override the performAction() method to return a different result
class Warrior extends GameCharacter {
	performAction() {
		return `${this.name} swings a massive iron sword!`;
	}
}

// DEMO: Create a Wizard class that inherits from GameCharacter
// Override the performAction() method to return a different result
class Wizard extends GameCharacter {
	performAction() {
		return `${this.name} summons a crackling ball of blue magic!`;
	}
}


// DEMO: Assemble a collection of completely different class instances
const activeCombatTeam = [
	new Warrior("Arthur"),
	new Wizard("Merlin"),
	new GameCharacter("Standard Guard"),
];
console.log("--- THE BATTLE BEGINS ---");

// DEMO: Iterate over the array and have each character perform their action
activeCombatTeam.forEach(character => {
	console.log(character.performAction());
})
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
