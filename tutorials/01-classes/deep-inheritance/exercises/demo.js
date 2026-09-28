/**** DEEP INHERITANCE ****/

/** EXAMPLE - THE THREE-TIER GRANDPARENT TREE **/

// LEVEL 1: THE GRANDPARENT
class BaseCharacter {
	constructor(characterName) {
		this.name = characterName;
		this.health = 100;
	}
}

// LEVEL 2: THE PARENT (Extends Grandparent)
class Wizard extends BaseCharacter {
	constructor(characterName, startingMagic) {
		super(characterName);
		this.magicPoints = startingMagic;
	}
}

// LEVEL 3: THE CHILD (Extends Parent)

// DEMO: Create a FireWizard class that inherits from both Wizard and BaseCharacter
// Add a fireDamage property and a castInferno() method

class FireWizard extends Wizard { 
	constructor(characterName, startingMagic, baseFireDamage) {
		super(characterName, startingMagic);
		this.fireDamage = baseFireDamage;
	}

castInferno() {
	this.magicPoints -= 20; 
	return `${this.name} cast Inferno for ${this.fireDamage} fire damage! Magic left: ${this.magicPoints}.`;
	}

}

// DEMO: Instantiate the grandchild element
const ignis = new FireWizard("Ignis", 80, 45);

// DEMO: Log a statement with properties from different class definitions in the
console.log(`${ignis.name} starts with ${ignis.health} total health and ${ignis.magicPoints} magic points.`);
console.log(ignis.castInferno());

// family tree, then call castInferno() and print the result.

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
