"use strict"
// import * as fs from "fs";
import { pickRandom, parseCr, randomMonsterName, addDamage, addFeatures, applyTemplate } from "./domain.js";
import { prefixes, suffixes, appelations, auras, templates } from "./data.js"

const root = document.getElementById("root");

// List of beastiary files
// const beastiaryFileList = fs.readdirSync('./beastiary');
// then fetch the files
const beastiaryFileList = [
    'bestiary-ai.json',
    'bestiary-aitfr-dn.json',
    'bestiary-aitfr-fcd.json',
    'bestiary-aitfr-isf.json',
    'bestiary-aitfr-thp.json',
    'bestiary-bgdia.json',
    'bestiary-cm.json',
    'bestiary-cos.json',
    'bestiary-dc.json',
    'bestiary-dip.json',
    'bestiary-dmg.json',
    'bestiary-egw.json',
    'bestiary-erlw.json',
    'bestiary-esk.json',
    'bestiary-ggr.json',
    'bestiary-gos.json',
    'bestiary-hftt.json',
    'bestiary-hol.json',
    'bestiary-hotdq.json',
    'bestiary-idrotf.json',
    'bestiary-imr.json',
    'bestiary-kkw.json',
    'bestiary-llk.json',
    'bestiary-lmop.json',
    'bestiary-lr.json',
    'bestiary-mff.json',
    'bestiary-mm.json',
    'bestiary-mot.json',
    'bestiary-mtf.json',
    'bestiary-oota.json',
    'bestiary-oow.json',
    'bestiary-phb.json',
    'bestiary-pota.json',
    'bestiary-ps-a.json',
    'bestiary-ps-d.json',
    'bestiary-ps-i.json',
    'bestiary-ps-k.json',
    'bestiary-ps-x.json',
    'bestiary-ps-z.json',
    'bestiary-rmbre.json',
    'bestiary-rot.json',
    'bestiary-sads.json',
    'bestiary-sdw.json',
    'bestiary-skt.json',
    'bestiary-slw.json',
    'bestiary-tce.json',
    'bestiary-tftyp.json',
    'bestiary-toa.json',
    'bestiary-ttp.json',
    'bestiary-ua-2020smt.json',
    'bestiary-ua-2021do.json',
    'bestiary-ua-2021mos.json',
    'bestiary-ua-20s2.json',
    'bestiary-ua-20s5.json',
    'bestiary-ua-ar.json',
    'bestiary-ua-cdw.json',
    'bestiary-ua-cfv.json',
    'bestiary-vgm.json',
    'bestiary-vrgr.json',
    'bestiary-wbtw.json',
    'bestiary-wdh.json',
    'bestiary-wdmm.json',
    'bestiary-xge.json'
  ];

/**
 * helper function for argument in { filterMonsterList };
 * checks for condition that monsters have to fulfill;
 * for CR use parseCr(creature.cr) {operator} {number}
 * @example predicate = creature => creature.name === "Animated Broom"; 
 *          // returns {"name": "Animated Broom", ... }
 * @param {Object} creature Monster object
 * @returns predicate;
 */
const predicate = creature => Domain.parseCr(creature.cr) <= 0.5;

const filterMonsterList = (beastiaryFileList, predicate) => {
    let result = [];
    beastiaryFileList.forEach(beastiaryFile => {
        const monsterData = fetch(`./beastiary/${beastiaryFile}`).then(response => response.json());
        monsterData.monster.forEach(creature => {
            if (predicate(creature)) {
                result.push(creature);
            };
        });
    })
    return result;
};

const filteredMonsters = filterMonsterList(beastiaryFileList, predicate)

const randomMonster = pickRandom(filteredMonsters);

root.appendChild(randomMonster.name);
