
source: https://diablo-archive.fandom.com/wiki/Unique_Monsters_(Diablo_II)

// performance ist in 95% der Fälle = weniger Iterationen und weniger neue arrays erstellen

## to do:
# functionality
- fetch list of base monsters
    - fetch all <a> elements from https://github.com/5etools-mirror-1/5etools-mirror-1.github.io/tree/master/data/bestiary
    - further filtering needed: string ends with "json"
    - push their href-values to beastiaryFileList = []
- select base monster
- fetch stats for monster
- generate boss monster template
- apply template to base creature
/**
 * generate foundry templates makes the moste sense,
 * as i can just put the templates in a table, roll and apply the rolled template to any creature
 * have a second table with all possible creatures
 */

- alternative:
    -> use stats from boss monster generator
    -> generate token:
        -> await picture from dreamByWombo
        -> generate token via tokenstamp
- output:
    -> sheet?
    -> actor data for foundry import?
        -> add to actors.db?

# data
- texts for special abilities
- special ability data depending on kind of output
    -> object with name, id, text and whatever data is needed for sheet/avtor.db

 /**
     * Problem: es gibt Einträge mit "cr": "undefined"
     * die haben keinen "cr" key, dafür einen "_copy"
     * dieser verweist auf eine anderes Monster-Objekt und gibt die Quelle dafür an
     * z.B: 
     * name: 'Amber Golem',
     * _copy: { name: 'Stone Golem', source: 'MM' },
     */