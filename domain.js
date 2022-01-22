"use strict"

export const pickRandom = (list) => {
    const position = Math.floor(Math.random() * (list.length - 1));
    const entry = list[position];
    return entry;
};

/**
 * parses CR numbers from strings, converts fractions into floating numbers
 * 
 * @example parse("1/2") //returns 0.5
 * @param {string} cr - the monster's challenge rating
 * @returns {number} - floating number
 */
export const parseCr = (cr) => {

    if (cr === undefined) {
        return undefined;
    } else if (cr.includes("/")) {
        return 1 / parseInt(cr[cr.length - 1])
    } else {
        return parseInt(cr, 10);
    }
};

export const randomMonsterName = (prefixes, suffixes, appelations, pickRandom) => {

    const randomPrefix = pickRandom(prefixes);
    const randomSuffix = pickRandom(suffixes);
    const randomAppelation = pickRandom(appelations);

    const monsterName = `${randomPrefix} ${randomSuffix} ${randomAppelation}`;
    return monsterName;
};

/**
 * search for monsters with target CR
 * @param {array} beastiaryFileList 
 * @param {function} predicate 
 * @returns Array of Monster Objects
 */
export const filterMonsterList = (beastiaryFileList, predicate) => {
    let result = [];
    beastiaryFileList.forEach(beastiaryFile => {
        // import * as monsterData from `./beastiary/${beastiaryFile}`;
        const monsterData = require(`./beastiary/${beastiaryFile}`);
        monsterData.monster.forEach(creature => {
            if (predicate(creature)) {
                result.push(creature);
            };
        });
    })
    return result;
};

export const addDamage = creature => {
    //
};

export const addFeatures = creature => {
    //
};

export const applyTemplate = (baseCreature, specialAbilities, addDamage, addFeatures) => {
    //
};