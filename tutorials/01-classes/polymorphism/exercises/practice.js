/**** POLYMORPHISM: PRACTICE ****/

/*
    Practice overriding core parent definitions and running polymorphic iteration loops 
    over mixed object structures.
*/

/** EXERCISE 1: THE AUDIO MATRIX OVERRIDE **/

class GameCreature {
	constructor(creatureType) {
		this.type = creatureType;
	}

	makeSound() {
		return "The creature makes a generic noise.";
	}
}

/*
    TODO: Create a child class named 'Dragon' that extends 'GameCreature'.
    Override the 'makeSound' method so that it returns the string:
    "The Dragon breathes a column of roaring flame!"
*/

class Dragon extends GameCreature {
	makeSound() {
		return "The Dragon breathes a column of roaring flame!";
	}
}

/*
    TODO: Instantiate a beast of the GameCreature class 
    and a dragon of the Dragon class.
*/

const basicBeast = new GameCreature ("Wild Boar");
const bossDragon = new Dragon ("Ancient Dragon");

/*
    TODO: Call the .makeSound() method for each creature to verify the override.
*/

console.log(basicBeast.makeSound());
console.log(bossDragon.makeSound());

/** EXERCISE 2: THE TURN-BASED ENEMY ROUND **/

class EnemySlime {
	constructor(color) {
		this.name = `${color} Slime`;
	}

	takeTurn() {
		return `${this.name} oozes forward slowly.`;
	}
}

class EnemyArcher {
	constructor(name) {
		this.name = name;
	}

	takeTurn() {
		return `${this.name} fires a precision arrow from the shadows!`;
	}
}

/*
    TODO: Create an array named 'hostileEnemies' containing three instances:
    1. A new EnemySlime ("Green")
    2. A new EnemyArcher ("Skeleton Marksman")
    3. A new EnemySlime ("Blue")
    
    Then, loop through the array using '.forEach()' and execute the '.takeTurn()' 
    method on each entity, logging what the player sees.
*/

const hostileEnemies = [
	new EnemySlime("Green"),
	new EnemyArcher("Skeleton Marksman"),
	new EnemySlime("Blue"),
];

console.log("\n--- ENEMY TURN SEQUENCE COMMENCING ---");
hostileEnemies.forEach(enemy => console.log(enemy.takeTurn()));
