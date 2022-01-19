const fs = require('fs');
const { pickRandom } = require("./index")

/**
 * List of beastiary files
 * @returns {Array}
 */
const beastiaryFileList = fs.readdirSync('./beastiary');


/**
 * parses CR numbers from strings, converts fractions into floating numbers
 * 
 * @example parse("1/2") //returns 0.5
 * @param {string} cr - the monster's challenge rating
 * @returns {number} - floating number
 */
const parseCr = (cr) => {

    if (cr === undefined) {
        return undefined;
    } else if (cr.includes("/")) {
        return 1 / parseInt(cr[cr.length - 1])
    } else {
        return parseInt(cr, 10);
    }
};

/**
 * search for monsters with target CR
 * @param {array} beastiaryFileList 
 * @param {function} predicate 
 * @returns Array of Monster Objects
 */
const filterMonsterList = (beastiaryFileList, predicate) => {
    let result = [];
    beastiaryFileList.forEach(beastiaryFile => {
        const fileData = require(`./beastiary/${beastiaryFile}`);
        fileData.monster.forEach(creature => {
            if (predicate(creature)) {
                result.push(creature);
            };
        });
    })
    return result;
};

/**
 * checks for condition that monsters have to fulfill
 * for CR use parseCr(creature.cr) {operator} {number}
 * @example predicate = creature => creature.name === "Animated Broom"; 
 *          // returns {"name": "Animated Broom", ... }
 * @param {Object} creature Monster object
 * @returns predicate;
 */
const predicate = creature => parseCr(creature.cr) <= 0.5;

const filteredMonsters = filterMonsterList(beastiaryFileList, predicate)
const randomMonster = pickRandom(filteredMonsters);
console.log(randomMonster.name);
