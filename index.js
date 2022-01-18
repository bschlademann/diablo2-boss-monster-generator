"use strict"

const prefixes = [
    "Gloom",
    "Gray",
    "Dire",
    "Black",
    "Shadow",
    "Haze",
    "Wind",
    "Storm",
    "Warp",
    "Night",
    "Moon",
    "Star",
    "Pit",
    "Fire",
    "Cold",
    "Seethe",
    "Sharp",
    "Ash",
    "Blade",
    "Steel",
    "Stone",
    "Rust",
    "Mold",
    "Blight",
    "Plague",
    "Rot",
    "Ooze",
    "Puke",
    "Snot",
    "Bile",
    "Blood",
    "Pulse",
    "Gut",
    "Gore",
    "Flesh",
    "Bone",
    "Spine",
    "Mind",
    "Spirit",
    "Soul",
    "Wrath",
    "Grief",
    "Foul",
    "Vile",
    "Sin",
    "Chaos",
    "Dread",
    "Doom",
    "Bane",
    "Death",
    "Viper",
    "Dragon",
    "Devil"
];

const suffixes = [
    "Touch",
    "Spell",
    "Feast",
    "Wound",
    "Grin",
    "Maim",
    "Hack",
    "Bite",
    "Rend",
    "Burn",
    "Rip",
    "Kill",
    "Call",
    "Vex",
    "Jade",
    "Web",
    "Shield",
    "Killer",
    "Razor",
    "Drinker",
    "Shifter",
    "Crawler",
    "Dancer",
    "Bender",
    "Weaver",
    "Eater",
    "Widow",
    "Maggot",
    "Spawn",
    "Wight",
    "Grumble",
    "Growler",
    "Snarl",
    "Wolf",
    "Crow",
    "Hawk",
    "Cloud",
    "Bang",
    "Head",
    "Skull",
    "Brow",
    "Eye",
    "Maw",
    "Tongue",
    "Fang",
    "Horn",
    "Thorn",
    "Claw",
    "Fist",
    "Heart",
    "Shank",
    "Skin",
    "Wing",
    "Pox",
    "Fester",
    "Blister",
    "Pus",
    "Slime",
    "Drool",
    "Froth",
    "Sludge",
    "Venom",
    "Poison",
    "Break",
    "Shard",
    "Flame",
    "Maul",
    "Thirst",
    "Lust"
];

const appelations = [
    "the Hammer",
    "the Axe",
    "the Sharp",
    "the Jagged",
    "the Flayer",
    "the Slasher",
    "the Impaler",
    "the Hunter",
    "the Slayer",
    "the Mauler",
    "the Destroyer",
    "the Quick",
    "the Witch",
    "the Mad",
    "the Wraith",
    "the Shade",
    "the Dead",
    "the Unholy",
    "the Howler",
    "the Grim",
    "the Dark",
    "the Tainted",
    "the Unclean",
    "the Hungry",
    "the Cold"
];

const pickRandom = (list) => {
    const position = Math.floor(Math.random() * (list.length - 1));
    const entry = list[position];
    return entry;
};

const auras = [
    "Might",
    "Holy Fire",
    "Blessed Aim",
    "Holy Freeze",
    "Holy Shock",
    "Conviction",
    "Fanaticism"
];

const specialAbilities = [
    {
        name: "Aura Enchanted",
        effect: pickRandom(auras),
    },
    {
        name: "Cold Enchanted",
        effect: `
        damage: +1d4 cold damage
        on hit: DC {8 + profB + ConMod} Con save or reduce target's speed by 10 feet 3 rounds, target can repeat save at the end of each of it's turns; {monster} has advantage on attacks against slowed target
        Resistances: cold
        Death Burst.
            damage: {Math.floor(HD / 6)}d{monster.HD.size} cold damage, target is frozen (incapacitated, speed=0) for 1 minute, area becomes difficult terrain
                    reflex save for half (DC: 8 + profB + conMOd monster) and no additional effect
            radius: side length token
        `,
    },
    {
        name: "Cursed",
        effect: `
        on hit: DC {8 +profB + monster wisMod/chaMod, whichever is higher} Cha save or be target of {spells.Bane}
        duration: 10 rounds
        `,
    },
    {
        name: "Extra Fast",
        effect: "movement speed + 10ft, +1 attack/round",
    },
    {
        name: "Extra Strong",
        effect: "grow 1 size -> +1HP/HD, str +4, gain proficiency/expertise athletics",
    },
    {
        name: "Fire Enchanted",
        effect: `
        damage: +1d4 fire damage
        on hit: If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 1d{monster.HD.size} fire damage at the start of each of its turns.
        Resistances: fire
        Death Burst.
            damage: {Math.floor(HD / 4)}d{HD.size} fire damage, targets ignite
            reflex save for half (DC: 8 + profB + conMOd monster) and no additional effect
            radius: side length token
        `,
    },
    {
        name: "Lightning Enchanted",
        effect: `
        damage: +1d4 lightning damage
        when hit: 1d{monster.HD.size} lightning retaliation
        Resistances: lightning
        Death Burst.
            damage: {Math.floor(HD / 4)}d{HD.size} lightning damage, targts are blinded for 1 minute
            reflex save for half (DC: 8 + profB + conMOd monster) and no additional effect
            radius: side length token
        `,
    },
    {
        name: "Magic Resistant",
        effect: "advantage on saves vs magic",
    },
    {
        name: "Magic Drain",
        effect: `
        on hit: DC {8 + profB + monster intMod/wisMod/chaMod, whichever is higher} Cha save or loose a random spell slot, monster gains {spellSlotLevel}d{monster.HD.size} THP
        `,
    },
    {
        name: "Multi-Shot",
        effect: "ranged attacks target 3 targets",
    },
    {
        name: "Spectral Hit",
        effect: `
        on hit: +1d4 random([fire, cold, lightning, poison, force]) damage
        `,
    },
    {
        name: "Stone Skin",
        effect: "resistance to non-magical physical damage",
    },
    {
        name: "Teleporting",
        effect: "reaction: misty step",
    },
];

const randomNamePart = (namePartList) => {
    const position = Math.floor(Math.random() * (namePartList.length - 1));
    const namePart = namePartList[position];
    return namePart;
};

const randomMonsterName = (prefixes, suffixes, appelations) => {

    const randomPrefix = randomNamePart(prefixes);
    const randomSuffix = randomNamePart(suffixes);
    const randomAppelation = randomNamePart(appelations);

    const monsterName = `${randomPrefix} ${randomSuffix} ${randomAppelation}`;
    return monsterName;
};

const monster = (prefixes, suffixes, appelations, specialAbilities) => {
    const monsterName = randomMonsterName(prefixes, suffixes, appelations);
    const specialAbility = pickRandom(specialAbilities);
    return {
        name: monsterName,
        specialAbilityName: specialAbility.name,
        effect:specialAbility.effect
    }
};

// function times(func, n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(func());
//     }
//     return arr;
// };

// console.log(times(() => monster(prefixes, suffixes, appelations, specialAbilities), 5));

const effectTemplate = {
    name: "",
    bonusDamage: {
        value: 0,
        type: "initial",
        additionalEffect: "",
    },
    bonusResistance: "",
    bonusFeature: {
        name: "",
        effect:"",
    }
};

const randomMonster = monster(prefixes, suffixes, appelations, specialAbilities);

console.log(randomMonster);