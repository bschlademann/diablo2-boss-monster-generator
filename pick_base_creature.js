const fs = require('fs');
const { createSecureContext } = require('tls');
const { pickRandom } = require("./index")

/**
 * List of beastiary files
 * @returns {Array}
 */
const beastiaryFileList = fs.readdirSync('./beastiary');

/**
 * search for monsters with target CR
 * @param {Array} beastiaryFileList 
 * @param {condition} predicate 
 * @returns Array of Monster Objects
 */
const filterMonsterList = (beastiaryFileList, predicate) => {
    let result = [];
    beastiaryFileList.forEach(beastiaryFile => {

        const fileData = require(`./beastiary/${beastiaryFile}`);
        fileData.monster.forEach(creature => {
            if (predicate(creature)) {
                result.push(creature);
            }
        });
        
    })
    return result;
};

/**
 * parses CR numbers from strings, converts fractions into floating numbers
 * 
 * @example parse("1/2") //returns 0.5
 * @param {string} cr - the monster's challenge rating
 * @returns {number} - floating number
 */
const parseCr = (cr) => {
    // if includes /
    // cr.split()
    return Function(`'use strict'; return (${cr})`)();
};

/**
 * 
 * @param {Object} creature Monster object
 * @returns predicate;
 */
const predicate = creature => parseCr(creature.cr) === 0.5;
const filteredMonsters = filterMonsterList(beastiaryFileList, predicate)
const randomMonster = pickRandom(filteredMonsters);

console.log(randomMonster);
