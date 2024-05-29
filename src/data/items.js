const items = [
    {
        "id": 1002,
        "name": "Rockilla",
        "attributes": [
            "e"
        ],
        "rarity": 1,
        "img_name": "earth_rockilla",
        "monster_origin": "normal",
        "description": "These hardened souls roam the earthy plains in search of their tail. They live by a strict code favoring loyalty over all else; any who challenge this are reduced to dust by a swift blow from their gargantuan fists.",
        "books": [
            18,
            132
        ]
    },
    {
        "id": 1005,
        "name": "Thunder Eagle",
        "attributes": [
            "t"
        ],
        "rarity": 1,
        "img_name": "thunder_eaglex",
        "monster_origin": "normal",
        "description": "The Bringer of Storms, a once-loyal servant to the Gods of Thunder, transformed into Thunder Eagle form after a terrible betrayal. This sparky creature offers the perfect mix of grace and danger.",
        "books": [
            3,
            18
        ]
    },
    {
        "id": 1006,
        "name": "Light Spirit",
        "attributes": [
            "l"
        ],
        "rarity": 1,
        "img_name": "light_spirit",
        "monster_origin": "normal",
        "description": "These lighthearted pixie creatures spend most of their time unseen. On account of how they are made from light - they often get mistaken for mirages, yet here they are, right on your island!",
        "books": [
            2,
            3,
            133
        ]
    },
    {
        "id": 1007,
        "name": "Tyrannoking",
        "attributes": [
            "d"
        ],
        "rarity": 1,
        "img_name": "dark_tyraking",
        "monster_origin": "normal",
        "description": "Hail to the king baby! Self-proclaimed Kings of the Lizards, these dark creatures offer the perfect mix of danger, mystery and coolness to any island. Just don\u2019t mention their short arms... these tyrants have got a bite!\\n",
        "books": [
            1,
            18
        ]
    },
    {
        "id": 1008,
        "name": "Genie",
        "attributes": [
            "m"
        ],
        "rarity": 1,
        "img_name": "magic_genie",
        "monster_origin": "normal",
        "description": "Formed from bright, hot-blue fire and able to travel great distances in the blink of an eye. Think twice before entering into any kind of agreement with these magical marvels.",
        "books": [
            2
        ]
    },
    {
        "id": 1014,
        "name": "Firekong",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 2,
        "img_name": "fire_earth_firekong_2018",
        "monster_origin": "normal",
        "description": "Born deep below the great Shimo volcano, Firekong has an incredibly dense body structure, which gives him immense resilience. His love for heat sometimes takes him a little too close to dragons!",
        "books": [
            132
        ]
    },
    {
        "id": 1015,
        "name": "Sealion",
        "attributes": [
            "f",
            "w"
        ],
        "rarity": 2,
        "img_name": "fire_water_sealion",
        "monster_origin": "normal",
        "description": "It is easy to mistake sealions' blue fire for ice. Don\u00b4t be fooled though, as it burns even hotter than a regular flame and is impossible to quench! The king of the jungle is top of the underwater food chain now!",
        "books": [
            132
        ]
    },
    {
        "id": 1017,
        "name": "Thundenix",
        "attributes": [
            "t",
            "f"
        ],
        "rarity": 3,
        "img_name": "fire_thunder_thundenix",
        "monster_origin": "normal",
        "description": "The dazzling beauty of a Thundenix's plumage is second only to the explosion of power if you put one under threat. When exhausted, Thundenix is reborn as an egg, making it immortal too!",
        "books": [
            3
        ]
    },
    {
        "id": 1018,
        "name": "Scorchpeg",
        "attributes": [
            "f",
            "l"
        ],
        "rarity": 4,
        "img_name": "fire_light_firesus",
        "monster_origin": "normal",
        "description": "Only the bravest can try to tame Scorchpeg and walk away unsinged. This wild stallion soars in the skies close to the sun to recharge its raging fires. But if tamed, Scorchpeg can keep you warm on the darkest nights.",
        "books": [
            3,
            132
        ]
    },
    {
        "id": 1019,
        "name": "Firetaur",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 3,
        "img_name": "fire_dark_firetaur",
        "monster_origin": "normal",
        "description": "This nightmarish creature, although clumsy and slow, performs the most dangerous attacks of all the monsters in the world. A terrifying opponent but also a tremendous ally to have on your side.",
        "books": [
            5,
            18,
            93
        ]
    },
    {
        "id": 1020,
        "name": "Djinn",
        "attributes": [
            "m",
            "f"
        ],
        "rarity": 3,
        "img_name": "fire_magic_djinn",
        "monster_origin": "normal",
        "description": "He will grant you any wish, as long as that wish is to rain fiery destruction down upon your foes! You have never had a friend like him before! When Djinn isn\u2019t battling other monsters, he enjoys some karaoke.",
        "books": [
            2,
            133
        ]
    },
    {
        "id": 1021,
        "name": "Freettle",
        "attributes": [
            "e",
            "f"
        ],
        "rarity": 3,
        "img_name": "earth_fire_fireettle",
        "monster_origin": "normal",
        "description": "Nicknamed \"The Stag\", this Freettle has a point to prove and is always trying to show off. Young Freettles use their wings to fly, but the elders have no need for such frivolities; they harness the power of the planet's core itself!",
        "books": [
            18
        ]
    },
    {
        "id": 1022,
        "name": "Musu",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 4,
        "img_name": "earth_water_musu",
        "monster_origin": "normal",
        "description": "Musu are playful and mischievous water spirits. Taking the form of a dragon, they like to trick and troll passers by, rendering them soaking wet and confused but always smiling. \\n",
        "books": [
            1,
            52
        ]
    },
    {
        "id": 1023,
        "name": "Tarzape",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 3,
        "img_name": "earth_nature_goribol",
        "monster_origin": "normal",
        "description": "An ape who was raised by...apes! Tarzape lives a simple life, filled with laughter and adventure. Although quite passive, he will fiercely defend himself if in danger.",
        "books": [
            18,
            132
        ]
    },
    {
        "id": 1024,
        "name": "Electrex",
        "attributes": [
            "e",
            "t"
        ],
        "rarity": 2,
        "img_name": "earth_thunder_electrorm",
        "monster_origin": "normal",
        "description": "Hailing from a far away land where he fought for the amusement of others. Tired of a life where others gain the fame while he picks up bruises, his arrival states that he is formidable in his own right!",
        "books": [
            18
        ]
    },
    {
        "id": 1025,
        "name": "Light Sphinx",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 2,
        "img_name": "earth_light_sphinx",
        "monster_origin": "normal",
        "description": "The Light Sphinxes were the holy guardians of the ancient pharaohs. Nowadays they watch over the tombs to keep out adventurers who seek to plunder their vast treasures!",
        "books": [
            3,
            160
        ]
    },
    {
        "id": 1026,
        "name": "Obsidia",
        "attributes": [
            "e",
            "d"
        ],
        "rarity": 2,
        "img_name": "earth_dark_darkong",
        "monster_origin": "normal",
        "description": "Obsidia are closely related to Gorilla. Twice as fierce, and rocking a killer hairstyle, these agents of chaos are not to be trifled with!",
        "books": []
    },
    {
        "id": 1027,
        "name": "Terracrank",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 4,
        "img_name": "earth_magic_runjin",
        "monster_origin": "normal",
        "description": "A magical golem with a heart! Terracrank has developed emotions and can think for himself. He sees the world with the eyes of a child and is amazed by its wonders.",
        "books": [
            133
        ]
    },
    {
        "id": 1028,
        "name": "Vapwhirl",
        "attributes": [
            "w",
            "f"
        ],
        "rarity": 3,
        "img_name": "water_fire_vapor",
        "monster_origin": "normal",
        "description": "Vapwhirl is your best partner in battle. He may not defeat the strongest monsters alone, but he has the ability to twist the battle in your favor!",
        "books": [
            18,
            133
        ]
    },
    {
        "id": 1029,
        "name": "Gastosquish",
        "attributes": [
            "e",
            "w"
        ],
        "rarity": 2,
        "img_name": "water_earth_stonesnake",
        "monster_origin": "normal",
        "description": "Things get very messy when Gastosquish is involved! Slick and slimy, Gastosquish is great for supporting your team and soaking up enemy attacks.",
        "books": [
            18
        ]
    },
    {
        "id": 1030,
        "name": "Sheluke",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 2,
        "img_name": "nature_water_shellic",
        "monster_origin": "normal",
        "description": "Though primarily water dwellers, these playful kind hearted creatures can hold their breath on land for months at a time. They love to blow bubbles and eat plants without chewing!\\n",
        "books": []
    },
    {
        "id": 1031,
        "name": "Shock Turtle",
        "attributes": [
            "t",
            "w"
        ],
        "rarity": 2,
        "img_name": "water_thunder_turtlex",
        "monster_origin": "normal",
        "description": "Despite being living, breathing contradictions to the laws of science, these creatures get on just fine. If fine means burping lightning, that is. Water and electricity don\u2019t mix, kids!",
        "books": [
            4
        ]
    },
    {
        "id": 1032,
        "name": "Blesstle",
        "attributes": [
            "w",
            "l"
        ],
        "rarity": 2,
        "img_name": "water_light_blesstle",
        "monster_origin": "normal",
        "description": "The Blesstle, the Water Realm's ambassadors of light. These shy and gentle creatures swoop gently from sky to water, water to sky with ease. Their shells come with a free golden paint job.",
        "books": [
            3,
            4
        ]
    },
    {
        "id": 1033,
        "name": "Fliploch",
        "attributes": [
            "w",
            "d"
        ],
        "rarity": 4,
        "img_name": "water_dark_darkturtle",
        "monster_origin": "normal",
        "description": "A cruel and dark monstrosity raised from the depths of the darkest waters in the land. The Fliploch has an appetite for pain and despair; these creatures are built for battle.",
        "books": [
            4
        ]
    },
    {
        "id": 1034,
        "name": "Dolphchamp",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 2,
        "img_name": "water_magic_boxopus",
        "monster_origin": "normal",
        "description": "At home in harsh environments, Dolphchamp never knows when to give up! Magically enhanced to have the ultimate close combat strength, he doesn\u2019t pull his punches when in a tight spot.",
        "books": []
    },
    {
        "id": 1035,
        "name": "Pandaken",
        "attributes": [
            "n",
            "f"
        ],
        "rarity": 3,
        "img_name": "nature_fire_pandaken_2018",
        "monster_origin": "normal",
        "description": "Pandaken possesses the will of fire, a great love for nature and a weakness for fine ale. He dedicates his life to training in the Wang Sun mountains, gaining monstrous strength and finely-honed reflexes.",
        "books": [
            18,
            52,
            132
        ]
    },
    {
        "id": 1036,
        "name": "Rarawr",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 2,
        "img_name": "nature_earth_rarawr",
        "monster_origin": "normal",
        "description": "Lazy would be the word to describe Rarawr. He only stirs to eat or because he has been disturbed. When he does move, devastation follows in his wake! He also has a *serious* digestive problem.",
        "books": [
            18
        ]
    },
    {
        "id": 1037,
        "name": "Bumblesnout",
        "attributes": [
            "w",
            "n"
        ],
        "rarity": 3,
        "img_name": "water_nature_frog",
        "monster_origin": "normal",
        "description": "A swamp dweller with no known predators. Bumblesnouts' main quality is his patience. He knows that he does not possess the strongest attacks, but the longer you face him, the more dangerous he becomes.",
        "books": []
    },
    {
        "id": 1038,
        "name": "Rhynex",
        "attributes": [
            "n",
            "t"
        ],
        "rarity": 4,
        "img_name": "nature_thunder_rhynex",
        "monster_origin": "normal",
        "description": "Electro-charged stomping power, pure and simple. Rhynex\u2019s horn packs a seriously high voltage punch, and he's not afraid to charge. Still, he makes a good companion, especially when the power is out.",
        "books": [
            132
        ]
    },
    {
        "id": 1039,
        "name": "Vixsun",
        "attributes": [
            "n",
            "l"
        ],
        "rarity": 2,
        "img_name": "nature_light_foxthron",
        "monster_origin": "normal",
        "description": "Nature\u2019s light is fantastically embodied in the form of the graceful Vixsun. These light-infused nature monsters move with grace and purpose wherever they roam. Look out for them in the realms of Nature and Light.",
        "books": [
            3,
            132
        ]
    },
    {
        "id": 1040,
        "name": "Dendrosaur",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 3,
        "img_name": "nature_dark_tyranwood",
        "monster_origin": "normal",
        "description": "Even nature has a dark side. These powerful lizard creatures will stomp and chomp any who threaten their habitats. They may be lesser than their Tyrannoking relatives \u2013 but command just as much respect.",
        "books": [
            1
        ]
    },
    {
        "id": 1041,
        "name": "Pandalf",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_pandalf_2018",
        "monster_origin": "normal",
        "description": "Part panda, part wizard. Behold \u2013 Pandalf! When the going gets tough Pandalf has a host of tricks and distractions up his sleeve. When not locked in combat, he loves to conjure smoky spectres of legend!\\n",
        "books": [
            59,
            131,
            132
        ]
    },
    {
        "id": 1042,
        "name": "Gigram",
        "attributes": [
            "f",
            "t"
        ],
        "rarity": 2,
        "img_name": "thunder_fire_firefox",
        "monster_origin": "normal",
        "description": "Gigram lives for adventure! She is known as the greatest explorer in the world. Her chromatic fur is a symbol for all aspirants who follow it as an inspiration.",
        "books": [
            132
        ]
    },
    {
        "id": 1043,
        "name": "Bonbon",
        "attributes": [
            "t",
            "e"
        ],
        "rarity": 3,
        "img_name": "thunder_earth_porcupex",
        "monster_origin": "normal",
        "description": "Legends tell of the greatest monster in the world, a mythical muscled beast with unpierceable fur and gigantic claws! Perhaps that isn't Bonbon, she is just a tribute, she tries her hardest to be scary though.",
        "books": [
            18
        ]
    },
    {
        "id": 1044,
        "name": "Koopigg",
        "attributes": [
            "w",
            "t"
        ],
        "rarity": 3,
        "img_name": "thunder_water_turtle",
        "monster_origin": "normal",
        "description": "The rebel! Koopigg wants to break free from his father's evil shadow and forge his own path. You won't find Koopigg kidnapping any princesses. He wants to grow stronger, what happens next is unknown.",
        "books": [
            1,
            18
        ]
    },
    {
        "id": 1045,
        "name": "Rabidex",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 4,
        "img_name": "thunder_nature_rabidex",
        "monster_origin": "normal",
        "description": "The rampant Rabidex tunnels underground waiting for the right moment to strike! When you walk through the countryside there will always be a wild Rabidex close by, waiting...waiting to pounce!",
        "books": [
            132
        ]
    },
    {
        "id": 1046,
        "name": "Pelitwirl",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 2,
        "img_name": "thunder_light_rare_avis",
        "monster_origin": "normal",
        "description": "Such smooth, natural style and grace. The agile swift swooner Pelitwirl deftly dances through epic destruction!",
        "books": [
            3
        ]
    },
    {
        "id": 1047,
        "name": "Terror Dactyl",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 2,
        "img_name": "thunder_dark_thundersaur",
        "monster_origin": "normal",
        "description": "Translated from ancient dinosaur language, Terror Dactyl literally means... run away! This is a scary monster, he wants to eat you and release your darkest fears. Handle with care.",
        "books": [
            1,
            3
        ]
    },
    {
        "id": 1048,
        "name": "Raydex",
        "attributes": [
            "t",
            "m"
        ],
        "rarity": 2,
        "img_name": "thunder_magic_raydex",
        "monster_origin": "normal",
        "description": "Raydex is known as the \"buzz pecker\", after his tendency to peck holes in everything then blast it with electricity. Raydex is really just looking for true love, but struggles since everything he touches gets a nasty shock!",
        "books": [
            3
        ]
    },
    {
        "id": 1049,
        "name": "Skipples",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 4,
        "img_name": "light_fire_furred",
        "monster_origin": "normal",
        "description": "Once the brightest pupil of Rudicius, Skipples parted ways to go off on his own adventures to continue his training. Now a master in his own right, he searches for his lost love.",
        "books": [
            132
        ]
    },
    {
        "id": 1050,
        "name": "Goldcore",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 4,
        "img_name": "light_earth_living_rock",
        "monster_origin": "normal",
        "description": "Born in the deep below where it is over 9000 degrees, Goldcore is a hard monster. His knees are a bit weird though; don't ever mention that!",
        "books": [
            103,
            133
        ]
    },
    {
        "id": 1051,
        "name": "Raane",
        "attributes": [
            "l",
            "w"
        ],
        "rarity": 3,
        "img_name": "light_water_nymph",
        "monster_origin": "normal",
        "description": "The water sprite with a bite! This monster has a very famous voice and can often be found commenting on matches in the Monster Arena and playing the harmonica, bring the rain!",
        "books": [
            4,
            7
        ]
    },
    {
        "id": 1052,
        "name": "Rudicius",
        "attributes": [
            "l",
            "n"
        ],
        "rarity": 3,
        "img_name": "light_nature_furgreen",
        "monster_origin": "normal",
        "description": "The wisest of all the monsters, Rudicius is the mastermind behind all of the skills and strategy in the modern monster world. Students come from all around for his expert tutelage.",
        "books": [
            132
        ]
    },
    {
        "id": 1053,
        "name": "Pulseprism",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 3,
        "img_name": "light_thunder_living_crystal",
        "monster_origin": "normal",
        "description": "Light, everywhere! It\u2019s all up in your face, you can\u2019t get away from it. All of the colours that you can possibly imagine and then some. Beautiful, terrifying, mesmerizing light.",
        "books": [
            3,
            103,
            133
        ]
    },
    {
        "id": 1054,
        "name": "Fayemelina",
        "attributes": [
            "l",
            "d"
        ],
        "rarity": 4,
        "img_name": "light_dark_faerie",
        "monster_origin": "normal",
        "description": "The most fun, charming and beautiful monster of them all. Everything is better with Fayemelina around. Beware of her firey spirit; if you cross her you will feel the pain.",
        "books": [
            2,
            5,
            7,
            53
        ]
    },
    {
        "id": 1055,
        "name": "Zim",
        "attributes": [
            "l",
            "m"
        ],
        "rarity": 3,
        "img_name": "light_magic_flying_stalker",
        "monster_origin": "normal",
        "description": "There is so much more to Zim than meets the eye. There is incredible depth and talent behind the mask. Incredibly quick wits, power and will in such an unexpected package!",
        "books": [
            2,
            3,
            90
        ]
    },
    {
        "id": 1056,
        "name": "Flickie",
        "attributes": [
            "f",
            "d"
        ],
        "rarity": 2,
        "img_name": "dark_fire_chubby",
        "monster_origin": "normal",
        "description": "Flickies are the inhabitants of the \u2018dark fire\u2019 pits, unseen by man for generations. These quirky, fast-moving gremlins are capable of causing chaos wherever they roam.",
        "books": [
            1
        ]
    },
    {
        "id": 1057,
        "name": "Beefcake",
        "attributes": [
            "d",
            "e"
        ],
        "rarity": 3,
        "img_name": "dark_earth_beefcake",
        "monster_origin": "normal",
        "description": "The rocks are alive! The Beefcake is the most rocking, rolling and hardy monster in the land. Its thick rock shell protects it from most attacks.",
        "books": [
            18
        ]
    },
    {
        "id": 1058,
        "name": "Razfeesh",
        "attributes": [
            "d",
            "w"
        ],
        "rarity": 4,
        "img_name": "dark_water_exploding_fish",
        "monster_origin": "normal",
        "description": "The Razfeesh is a distant relative of the piranha.  Pack hunters by nature but immensely effective in solo combat, these fishy devils are sharp as a razor.",
        "books": [
            4
        ]
    },
    {
        "id": 1059,
        "name": "Utochomp",
        "attributes": [
            "n",
            "d"
        ],
        "rarity": 2,
        "img_name": "dark_nature_flintdin",
        "monster_origin": "normal",
        "description": "The Utochomp is a large bulky omnivore.  He uses his huge beaklike mouth to grind and crush his foods before swallowing, using the same technique on his enemies too!",
        "books": [
            1
        ]
    },
    {
        "id": 1060,
        "name": "Shanky",
        "attributes": [
            "d",
            "t"
        ],
        "rarity": 3,
        "img_name": "dark_thunder_flashraptor",
        "monster_origin": "normal",
        "description": "Dinosaurs are cool. Don't be fooled by those sharp claws; Shanky is actually a vegetarian. He is super cheeky, relaxed and knows what he likes. He is often full of mischief!",
        "books": [
            1
        ]
    },
    {
        "id": 1061,
        "name": "Succuba",
        "attributes": [
            "d",
            "l"
        ],
        "rarity": 2,
        "img_name": "dark_light_bat",
        "monster_origin": "normal",
        "description": "Eternally jealous that Fayemelina got the looks in the family, Succuba has a frightful temper. Pain and torment drive her as she wishes unhappiness upon her enemies.",
        "books": [
            3,
            7,
            93
        ]
    },
    {
        "id": 1062,
        "name": "Haze",
        "attributes": [
            "m",
            "d"
        ],
        "rarity": 3,
        "img_name": "dark_magic_darkjinn",
        "monster_origin": "normal",
        "description": "Many \"villains\" are just misunderstood, Haze however is pure evil! He is the reason that Razfeesh always looks so grumpy and why Dolphchamp was tricked into growing that hideous moustache!",
        "books": [
            2,
            133
        ]
    },
    {
        "id": 1063,
        "name": "Pyrook",
        "attributes": [
            "f",
            "m"
        ],
        "rarity": 2,
        "img_name": "magic_fire_castle",
        "monster_origin": "normal",
        "description": "Flaming...castles? Yes! You know what you're gonna get with Pyrook, as he always follows the rules to the letter. He's certainly no pawn to be taken for granted though and occasionally even takes a white knight.",
        "books": [
            2,
            62
        ]
    },
    {
        "id": 1064,
        "name": "Duchess",
        "attributes": [
            "m",
            "e"
        ],
        "rarity": 4,
        "img_name": "magic_earth_titan",
        "monster_origin": "normal",
        "description": "Rockin' royalty! The Duchess of Disaster, the Queen of Pain! Beware of flying magic rocks because that's her thing.",
        "books": [
            2,
            133
        ]
    },
    {
        "id": 1065,
        "name": "Octocrush",
        "attributes": [
            "m",
            "w"
        ],
        "rarity": 3,
        "img_name": "magic_water_octocrush",
        "monster_origin": "normal",
        "description": "She wasn't allowed a shot at the world boxing title because...well she's an octopus isn't she? This is a pity as she can give anyone a run for their money in the (underwater) ring.",
        "books": [
            4,
            142
        ]
    },
    {
        "id": 1066,
        "name": "Bloomskips",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 2,
        "img_name": "magic_nature_flower",
        "monster_origin": "normal",
        "description": "Bloomskips feel at home when popping out of dark, tight spaces like pipes! Just hope that you aren't a plumber or he's coming for you!",
        "books": [
            60,
            133
        ]
    },
    {
        "id": 1067,
        "name": "Sparkwedge",
        "attributes": [
            "m",
            "t"
        ],
        "rarity": 3,
        "img_name": "magic_thunder_medvivi",
        "monster_origin": "normal",
        "description": "Magical and electrifying! Sparkwedge will win you over with pure awesomeness.",
        "books": [
            6,
            120
        ]
    },
    {
        "id": 1068,
        "name": "Flawless",
        "attributes": [
            "m",
            "l"
        ],
        "rarity": 2,
        "img_name": "magic_light_elohim",
        "monster_origin": "normal",
        "description": "Free love and crystal healing baby! Flawless is the naive, hip hipity hipster with a carefree attitude and goodwill to all monsters.",
        "books": [
            2,
            3
        ]
    },
    {
        "id": 1069,
        "name": "Giragast",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 2,
        "img_name": "magic_dark_sharkgenie",
        "monster_origin": "normal",
        "description": "Raaawwwwwwrrr gluuuubbb buuuuuurrrrrrrrrrlllll kek agol *BURP*. I think you just got eaten by Giragast...\\n",
        "books": [
            2
        ]
    },
    {
        "id": 1101,
        "name": "Firesaur",
        "attributes": [
            "f"
        ],
        "rarity": 1,
        "img_name": "fire_firesaur",
        "monster_origin": "normal",
        "description": "Possessing a mane of white-hot hellfire and more than just a sting in his tail \u2013 the Firesaur is a creature of mythic awesomeness! The Firesaur will make fast work of anyone foolish enough to challenge him.",
        "books": [
            1,
            18
        ]
    },
    {
        "id": 1103,
        "name": "Mersnake",
        "attributes": [
            "w"
        ],
        "rarity": 1,
        "img_name": "water_triton",
        "monster_origin": "normal",
        "description": "Shy and unassuming, this tricky creature is a master of the water realm and sharper than shattered glass. The Mersnake may be slow on land, but it's as dangerous as it is graceful in the ocean.",
        "books": [
            4,
            18
        ]
    },
    {
        "id": 1104,
        "name": "Treezard",
        "attributes": [
            "n"
        ],
        "rarity": 1,
        "img_name": "nature_treezard",
        "monster_origin": "normal",
        "description": "The Treezard has long been a symbol of melancholy and sadness. But no longer! These Treezards are nature's ninjas! What they lack in stealth, they more than make up for in unexpected agility, reflexes and... clumsiness.",
        "books": [
            1,
            18
        ]
    },
    {
        "id": 1116,
        "name": "Greenasaur",
        "attributes": [
            "f",
            "n"
        ],
        "rarity": 2,
        "img_name": "fire_nature_greenasaur",
        "monster_origin": "normal",
        "description": "A young Greenasaur has little control over her flames and can be a menace in the forest, suffering exile and rejection. However, once grown, Greenasaur helps to protect everything she loves with strength and wisdom.",
        "books": [
            1,
            18
        ]
    },
    {
        "id": 2001,
        "name": "Arch Knight",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_angel_knight",
        "monster_origin": "normal",
        "description": "Behold the defender of light!  This apparition is rumoured to have some very, very powerful connection in the netherworlds. If you're lucky enough to have this Knight saviour appear before you - you'll be truly blessed in battle!",
        "books": [
            3,
            10,
            90
        ]
    },
    {
        "id": 2002,
        "name": "Vadamagma",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_volcano_core",
        "monster_origin": "normal",
        "description": "Vadamagma sleeps inside of a volcano. When he awakes, it's for fighting and when he fights, it's to obliterate his enemies. He enjoys the heat of battle, and the smell of victory in the morning.",
        "books": [
            5,
            104,
            133
        ]
    },
    {
        "id": 2003,
        "name": "Nemestrinus",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_force_nature",
        "monster_origin": "normal",
        "description": "Nemestrinus has existed for ages, but was never seen. Now is the moment when the champion of the Forest needs to show himself to defend the weak equilibrium of the ecosystems.",
        "books": [
            102,
            133
        ]
    },
    {
        "id": 2004,
        "name": "Rockantium",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_obsidian_golem",
        "monster_origin": "normal",
        "description": "Rockantium\u2019s club weighs half a ton. If we add this to the fact that his strength allows him to use it as if it were made of paper, you can imagine how hard he hits! You\u2019ll rarely be able to move after being attacked by him!",
        "books": [
            10,
            103,
            133
        ]
    },
    {
        "id": 2005,
        "name": "Thorder",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_samurex",
        "monster_origin": "normal",
        "description": "He is the Rider of Thunder! Although he is faster than almost all other creatures, he focuses on slowing his enemies down to abuse them. A dangerous enemy to face; he can hit you repeatedly before you can even react!",
        "books": [
            10,
            162
        ]
    },
    {
        "id": 2006,
        "name": "Lord of the Atlantis",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_merfolk_king",
        "monster_origin": "normal",
        "description": "Being the Lord of the Sea was not enough for him. He decided to cross the forbidden shore to rule the solid ground; and he came ashore meaning to stay. As a good ruler he inspires and protects his fellow warriors",
        "books": [
            4,
            131,
            154
        ]
    },
    {
        "id": 2007,
        "name": "Nebotus",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_nightmare",
        "monster_origin": "normal",
        "description": "Evil energy covered in legendary armor. As if this is not enough, his sword will fill your sleep with nightmares. Be aware of his sorcery, roger that?",
        "books": [
            11,
            53,
            131
        ]
    },
    {
        "id": 2008,
        "name": "Goldfield",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_executor",
        "monster_origin": "normal",
        "description": "Magic can be neither created nor destroyed, but can change form and Goldfield is the pure form of Magic. Be careful with his tricks; because they hurt!",
        "books": [
            2,
            11,
            91,
            131
        ]
    },
    {
        "id": 2009,
        "name": "White Walker",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_white_walker",
        "monster_origin": "normal",
        "description": "Without water there's no life. But at certain temperatures, water may be deadly. This evil creature will freeze the liquid element to hurt his enemies. Winter is coming.",
        "books": [
            9,
            133,
            162
        ]
    },
    {
        "id": 2010,
        "name": "Irockman",
        "attributes": [
            "e",
            "t"
        ],
        "rarity": 4,
        "img_name": "earth_thunder_irockman",
        "monster_origin": "normal",
        "description": "This monster is one of the most difficult to kill. He is not made of just normal rock, but much stronger electrified rock. He also uses shields to protect himself. Tough, very tough.",
        "books": [
            10,
            103,
            131,
            133
        ]
    },
    {
        "id": 2011,
        "name": "Worker Hulk",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_worker_hulk",
        "monster_origin": "normal",
        "description": "All Workers eat Gems when they need to rush to do a task. This one ate too many gems in one go, and was transformed because of this. Other workers trying to achieve the same results simply explode. It seems this one is special..",
        "books": [
            5,
            62,
            131
        ]
    },
    {
        "id": 2012,
        "name": "Komocat",
        "attributes": [
            "w",
            "n"
        ],
        "rarity": 3,
        "img_name": "water_earth_komodog",
        "monster_origin": "normal",
        "description": "Komocat has muscles in places where most of us don\u2019t even have places. But don\u2019t get too close to check this, because his hobby is to take the poison from venomous plants and throw it at his enemies!",
        "books": [
            1
        ]
    },
    {
        "id": 2013,
        "name": "Darkzgul",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_darkzgul",
        "monster_origin": "normal",
        "description": "This dark wraith is one of the servants of pure evil. His arcane knowledge of dreams and ghostly claws make him a terrible rival. He can\u2019t be killed by a man.",
        "books": [
            3,
            8,
            53
        ]
    },
    {
        "id": 2014,
        "name": "Darknubis",
        "attributes": [
            "m",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_magic_darknubis",
        "monster_origin": "normal",
        "description": "Before, he weighed the hearts of those that would enter the afterlife. Now, he prefers helping his foes reach the afterlife quicker.",
        "books": [
            5,
            160
        ]
    },
    {
        "id": 2015,
        "name": "Greygoyle",
        "attributes": [
            "e",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_earth_fartgoyle",
        "monster_origin": "normal",
        "description": "Cursed to become stone when the sun rises, Greygoyle has learned to become a rock at will, making him a very \"hard\" opponent.",
        "books": [
            3,
            105
        ]
    },
    {
        "id": 2016,
        "name": "Esthirel",
        "attributes": [
            "f",
            "l"
        ],
        "rarity": 4,
        "img_name": "fire_light_armorangel",
        "monster_origin": "normal",
        "description": "She used to protect the weak by healing and taking care of them. But the hidden evil forces provoked her to rise and fight against injustice. She's the light that will lead the struggling to victory.",
        "books": [
            3,
            7,
            10,
            90
        ]
    },
    {
        "id": 2017,
        "name": "Erpham",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 4,
        "img_name": "nature_magic_ewokshaman",
        "monster_origin": "normal",
        "description": "He has always prefered the rebels; they fight for a cause and not for an order. He\u2019s not a warrior, but his knowledge of nature and magic makes him an excellent companion that will never let you down!",
        "books": [
            102,
            131
        ]
    },
    {
        "id": 2018,
        "name": "Tartarus",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 4,
        "img_name": "earth_magic_bluecyclops",
        "monster_origin": "normal",
        "description": "When you guard evil, it's normal that you become evil, too. But if you're loyal to your principles and know how to balance your duties and beliefs, you won't have a problem staying on track.",
        "books": [
            5,
            160
        ]
    },
    {
        "id": 2019,
        "name": "Drop Elemental",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 4,
        "img_name": "water_magic_dropelemental",
        "monster_origin": "normal",
        "description": "A single drop is almost insignificant. But thousands falling one after one, can form a mountain. This monster can manipulate the drops to hurt his enemies or use the healthy properties of the water for the advantage of his team.",
        "books": [
            2,
            91,
            133
        ]
    },
    {
        "id": 2020,
        "name": "Wolfkami",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 4,
        "img_name": "thunder_nature_wolfkami",
        "monster_origin": "normal",
        "description": "Oriental tales speak of the goddess of thunder taking the form of a white wolf. Wolfkami can manipulate the power of nature to its will. Its fast movements can be a headache for its rivals.",
        "books": [
            52,
            132
        ]
    },
    {
        "id": 2021,
        "name": "Dragonian Beast",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 4,
        "img_name": "earth_nature_beastdragon",
        "monster_origin": "normal",
        "description": "This beast is related to Dragons; it shares their appetite and their powerful capabilities. Missing wings? No problem; it can roll!",
        "books": [
            1,
            102,
            132
        ]
    },
    {
        "id": 2022,
        "name": "Lostyghost",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_lostyghost",
        "monster_origin": "normal",
        "description": "Lostyghost is trying to find what he needs to stop roaming the living world. Along the way, he enjoys scaring people and making children cry. Not believing in ghosts doesn't mean they don't exist...",
        "books": [
            2,
            8
        ]
    },
    {
        "id": 2023,
        "name": "Tao Tao",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 4,
        "img_name": "dark_nature_taotao",
        "monster_origin": "normal",
        "description": "After a big mistake, he was cursed to have a pumpkin for a head. Crows pecking him wherever he goes isn't very nice either. This is why he always tries to eat candy; the only sweet thing in his existence.",
        "books": [
            8
        ]
    },
    {
        "id": 2024,
        "name": "Panda Claus",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "nature_magic_panda_claus",
        "monster_origin": "normal",
        "description": "He works once a year and, when he's not working, he's fighting against all kind of monsters. Best way to stay in shape!",
        "books": [
            9,
            132,
            159
        ]
    },
    {
        "id": 2025,
        "name": "Sasquach",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 4,
        "img_name": "earth_nature_sasquatch",
        "monster_origin": "normal",
        "description": "People look for him in the northern forests, but he's actually leaving his footprints in the New Kingdoms!",
        "books": [
            9,
            132,
            162
        ]
    },
    {
        "id": 2026,
        "name": "Rodolph",
        "attributes": [
            "m",
            "t"
        ],
        "rarity": 4,
        "img_name": "magic_thunder_rodolph",
        "monster_origin": "normal",
        "description": "An elite navigator, with his magical nose he will drive you to victory!",
        "books": [
            9,
            132,
            159
        ]
    },
    {
        "id": 2027,
        "name": "Firus",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "nature_light_abetus",
        "monster_origin": "normal",
        "description": "Mix the power of nature, the warmth of Christmas and the rage of not getting the desired present and you'll have a fighting Christmas Tree!",
        "books": [
            9,
            133,
            159
        ]
    },
    {
        "id": 2028,
        "name": "Kimmel's Gift",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "dark_magic_evil_present",
        "monster_origin": "normal",
        "description": "The anger of all the unliked presents has generated this evil being.",
        "books": [
            159
        ]
    },
    {
        "id": 2029,
        "name": "Cupid",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "magic_fire_cupid",
        "monster_origin": "normal",
        "description": "\"I'm a lover, not a fighter\u201d said the last victim of Cupid's Love Arrow. Cupid then took advantage of this platitude and beat up the poor soul.",
        "books": [
            10,
            90,
            131
        ]
    },
    {
        "id": 2030,
        "name": "Rosanha",
        "attributes": [
            "n",
            "d"
        ],
        "rarity": 4,
        "img_name": "nature_dark_thorn_bunch",
        "monster_origin": "normal",
        "description": "Roses are red, thorns are spiky. I\u2019m going to kill you.",
        "books": [
            8,
            159
        ]
    },
    {
        "id": 2031,
        "name": "Teddy Fear",
        "attributes": [
            "e",
            "d"
        ],
        "rarity": 4,
        "img_name": "earth_dark_teddy_fear",
        "monster_origin": "normal",
        "description": "Every time we break up, she tears apart the little bear I gave her.",
        "books": [
            8
        ]
    },
    {
        "id": 2032,
        "name": "Firelequin",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_firelequin",
        "monster_origin": "normal",
        "description": "\"Who is hiding behind that mask?\" That's a common question at the Carnival, but are you sure you want to know the answer?",
        "books": [
            11,
            62
        ]
    },
    {
        "id": 2033,
        "name": "Lagerchaun",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_leprechaun",
        "monster_origin": "normal",
        "description": "To attract a Lagerchaun, the best lure is either a pint or a fight. He won't leave while there are beers to drink or people to smash!",
        "books": [
            159
        ]
    },
    {
        "id": 2034,
        "name": "Griffex",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_thunder_griffin",
        "monster_origin": "normal",
        "description": "These creatures have a fixation with gathering gold. In order to protect their loot, they electrify it. They are so rare, that you can buy a house with one Griffex feather!",
        "books": [
            3,
            102
        ]
    },
    {
        "id": 2035,
        "name": "Thundhare",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_rabbit",
        "monster_origin": "normal",
        "description": "The Easter Hare is the judge that used to bring eggs to good people. In the New Kingdoms, however, the Thundhare delivers magical justice and punishes bad actions. Everyone is wary since his arrival.",
        "books": [
            12,
            132,
            159
        ]
    },
    {
        "id": 2036,
        "name": "Karasu",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 4,
        "img_name": "legendary_dark_tengu",
        "monster_origin": "normal",
        "description": "Silent, deadly and humble, this being has arrived in the New Kingdoms from the land of the Rising Sun. This straight-up warrior gets the upper hand in fights with his Ninjutsu.",
        "books": [
            10,
            52
        ]
    },
    {
        "id": 2037,
        "name": "Arnu",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 4,
        "img_name": "water_magic_shower_frog",
        "monster_origin": "normal",
        "description": "The poisonous sweat that Arnu produces causes hallucinations and is so powerful that it can even affect himself. He has to clean himself frequently to stay in control.",
        "books": [
            102,
            132
        ]
    },
    {
        "id": 2038,
        "name": "Cthulhu",
        "attributes": [
            "d",
            "w"
        ],
        "rarity": 4,
        "img_name": "dark_water_cthulhu",
        "monster_origin": "normal",
        "description": "Hard to pronounce, harder to kill. The almighty Great Old One is awoken. The worst nightmares of all the inhabitants of the New Kingdoms have come true. I\u00e4 i\u00e4 Cthulhu fhtagn.",
        "books": [
            3,
            4,
            122
        ]
    },
    {
        "id": 2039,
        "name": "Rockiesta",
        "attributes": [
            "e",
            "f"
        ],
        "rarity": 4,
        "img_name": "earth_fire_fifa_spain",
        "monster_origin": "normal",
        "description": "Rockiesta and his teammates don't care about food, only the game, and they work together in order to be Champions again. They know how to play and they are very difficult to beat.",
        "books": []
    },
    {
        "id": 2040,
        "name": "Rockinho",
        "attributes": [
            "e",
            "t"
        ],
        "rarity": 4,
        "img_name": "earth_thunder_fifa_brazil",
        "monster_origin": "normal",
        "description": "Rockinho is happy. He loves what he does and he is going to host a big party where the Canarinha will put on a show for their fans.",
        "books": []
    },
    {
        "id": 2041,
        "name": "Rockovan",
        "attributes": [
            "e",
            "f"
        ],
        "rarity": 4,
        "img_name": "earth_water_fifa_usa",
        "monster_origin": "normal",
        "description": "Rockovan and The Yanks are a bit confused. Everybody says they are playing football, but in fact they are playing soccer. He doesn't care; they have skills enough to score; no matter the game.",
        "books": []
    },
    {
        "id": 2052,
        "name": "Molem",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 3,
        "img_name": "earth_nature_ruins_golem",
        "monster_origin": "normal",
        "description": "Helmantica was destroyed long ago, but Jack's dreams came true. And from the ruins, the moss and the magic, Molem took life. It will be hard for anyone to stop him.",
        "books": [
            102
        ]
    },
    {
        "id": 2053,
        "name": "Freedom Feather",
        "attributes": [
            "f",
            "w"
        ],
        "rarity": 4,
        "img_name": "fire_water_usa_eagle",
        "monster_origin": "normal",
        "description": "If you want a free land, you have to fight for it. But after the fight, you should follow democratic mechanisms that legitimate your cause. Freedom Feather can do both; win a war or sign a declaration of independence. Just like that.",
        "books": [
            3,
            12,
            159
        ]
    },
    {
        "id": 2054,
        "name": "Boneticore",
        "attributes": [
            "f",
            "l"
        ],
        "rarity": 3,
        "img_name": "light_fire_manticore",
        "monster_origin": "normal",
        "description": "The threat of the Boneticore is not in his jaws, but in his tail. Boneticore's tail is also his weak spot. Only the most experienced hunters have survived an encounter with this dangerous beast.",
        "books": [
            160
        ]
    },
    {
        "id": 2055,
        "name": "Hellberus",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 4,
        "img_name": "dark_fire_cerberus",
        "monster_origin": "normal",
        "description": "As a proper Watchdog, if you dare to cross the Hell Gates, he will let you in. But of course, he won't let you out. His fleas are fireproof.",
        "books": [
            5,
            104,
            132
        ]
    },
    {
        "id": 2056,
        "name": "Rock Druid",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 4,
        "img_name": "light_earth_rock_druid",
        "monster_origin": "normal",
        "description": "A pure ray of light was traveling through space, until a gravitational pitfall attracted it. The light fell into that trap and became imprisoned in rock. To be free, the only thing that it can do is to find and shut down the Obscure Light.",
        "books": [
            103
        ]
    },
    {
        "id": 2057,
        "name": "w'Olftagnan",
        "attributes": [
            "l",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_light_sword_wolf",
        "monster_origin": "normal",
        "description": "Being the seventh son of a wealthy family gave w'Olftagnan three things: a weird name, an opportunity to become a master of the sword, and the curse of lycanthropy.",
        "books": [
            8,
            62,
            132
        ]
    },
    {
        "id": 2058,
        "name": "Medussha",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 4,
        "img_name": "legendary_earth_medusa",
        "monster_origin": "normal",
        "description": "Half woman, half snake, Medussha can win a battle with her gaze alone. When a new season arrives, she sheds her skin, and becomes even more dangerous.",
        "books": [
            7,
            160
        ]
    },
    {
        "id": 2059,
        "name": "Elder Sporeling",
        "attributes": [
            "n",
            "f"
        ],
        "rarity": 4,
        "img_name": "fire_nature_evil_mushroom",
        "monster_origin": "normal",
        "description": "What do you get when a spore falls on a volcano, and starts to grow? Answer: a very big and angry mushroom.",
        "books": [
            60
        ]
    },
    {
        "id": 2060,
        "name": "Donaturtle",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 4,
        "img_name": "earth_water_sensei_turtle",
        "monster_origin": "normal",
        "description": "Slow but steady, this elder fighter has learned to maximize his movements. Knowing what to do before having to do it is a great advantage. He hates anchovies.",
        "books": [
            52
        ]
    },
    {
        "id": 2061,
        "name": "Hydnora",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "legendary_nature_poisonivy",
        "monster_origin": "normal",
        "description": "Nature is Beauty, and Hydnora is the avatar of nature. Nature is also one of the most powerful forces of the Earth, so you can imagine how powerful Hydnora is...",
        "books": [
            7,
            102
        ]
    },
    {
        "id": 2062,
        "name": "Goath'el",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 4,
        "img_name": "light_thunder_serabra",
        "monster_origin": "normal",
        "description": "Thunder and Light powers, when combined, could transform anyone into a powerful creature. Goath'el got the best of both powers... and a predilection for grass.",
        "books": [
            3,
            90
        ]
    },
    {
        "id": 2063,
        "name": "Rootziel",
        "attributes": [
            "l",
            "n"
        ],
        "rarity": 4,
        "img_name": "light_nature_rootziel",
        "monster_origin": "normal",
        "description": "This ancient and pure soul of the forest has been learning to control the sacred, yet forgotten, elemental runes for ages. Will those powers be enough to vanquish the darkest powers?",
        "books": [
            3,
            90
        ]
    },
    {
        "id": 2064,
        "name": "Uriel",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_darkside_angel",
        "monster_origin": "normal",
        "description": "Uriel, \"The light of God\", existed before any monster walked the Earth. The true power of the Holy Light will be accessible only for a master player. Are you the chosen one?",
        "books": [
            2,
            3,
            90
        ]
    },
    {
        "id": 2065,
        "name": "Rhodent",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 3,
        "img_name": "thunder_dark_sonic",
        "monster_origin": "normal",
        "description": "Enemies usually don't know how they got injured when facing Rhodent. He's simply too quick for the eye. If you see a flash, you're probably already dead.",
        "books": [
            132
        ]
    },
    {
        "id": 2066,
        "name": "Shi Hou",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_light_monkey_king",
        "monster_origin": "normal",
        "description": "Sh\u00ed H\u00f3u is a skilled fighter, capable of holding his own against the best warriors of heaven. His strength and capacity to empower his skills give him the \"Monkey King\" alias.",
        "books": [
            10,
            52,
            132,
            131
        ]
    },
    {
        "id": 2067,
        "name": "Lord Moltus",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_moltus",
        "monster_origin": "normal",
        "description": "The Lord of the Blaze has come to defeat his enemies with the purifying power of Fire. No one can resist the power of the Burning Star, his powerful mace.",
        "books": [
            5,
            11,
            104,
            131
        ]
    },
    {
        "id": 2068,
        "name": "Metalsaur",
        "attributes": [
            "mt"
        ],
        "rarity": 1,
        "img_name": "metal_lizard",
        "monster_origin": "normal",
        "description": "Metal monsters are tough, hard to beat and dazzling. Metalsaur is pure metal, common but deadly. And now with him, a new age of breeding has started! The new Metal element is here!",
        "books": [
            103
        ]
    },
    {
        "id": 2069,
        "name": "Gravoid",
        "attributes": [
            "mt",
            "e"
        ],
        "rarity": 3,
        "img_name": "metal_earth_graboid",
        "monster_origin": "normal",
        "description": "Even scarier than his horrible jaws, Gravoid is but one specimen of a whole subterranean worm colony. His enemies don't see anything dangerous in front of them, but underground...",
        "books": [
            5,
            103
        ]
    },
    {
        "id": 2070,
        "name": "Frank S. Tein",
        "attributes": [
            "d",
            "e"
        ],
        "rarity": 4,
        "img_name": "dark_earth_frankie",
        "monster_origin": "normal",
        "description": "This monster is unlike others. Frank is the product of a creepy experiment, and now he's alive! Created by a crazy professor, Frank has only one thought inside his poor brain: CRUSH!",
        "books": [
            8
        ]
    },
    {
        "id": 2071,
        "name": "Esmelter",
        "attributes": [
            "mt",
            "f"
        ],
        "rarity": 2,
        "img_name": "metal_fire_melting_pot",
        "monster_origin": "normal",
        "description": "Blazing metal is always a dangerous thing, and Esmelter is pure Metal and Fire. He has the ability to smelt as many arms as he needs, making him a deadly foe in combat.",
        "books": [
            5,
            104
        ]
    },
    {
        "id": 2072,
        "name": "Metaselach",
        "attributes": [
            "mt",
            "w"
        ],
        "rarity": 3,
        "img_name": "metal_water_t1000",
        "monster_origin": "normal",
        "description": "Metaselach is a shapeshifting monster assassin. He can assume the form of other objects to inflict heavy damage. If you see a fin coming at you... Run away!",
        "books": [
            4,
            133,
            155
        ]
    },
    {
        "id": 2073,
        "name": "Garuda M3",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 3,
        "img_name": "metal_thunder_mazinger",
        "monster_origin": "normal",
        "description": "Garuda M3 is a mechanical beast with the power of thunder, and strong metal attacks. He has extendable arms and explosive spikes that can damage all enemies at the same time.",
        "books": [
            6,
            121
        ]
    },
    {
        "id": 2074,
        "name": "Wisteria",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "dark_magic_witch",
        "monster_origin": "normal",
        "description": "Wisteria made a pact with the Devil, and now she's very powerful. But as always, dealing with the Devil comes at a price: she has the soul of a crow and only has the power to control these scary creatures.",
        "books": [
            7
        ]
    },
    {
        "id": 2075,
        "name": "Sir Slumberly",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "dark_fire_sleepy",
        "monster_origin": "normal",
        "description": "In the past, Sir Slumberly was a respectable colonel who fought in countless wars. But in death, his body cannot find peace. Now, he's a tortured soul with but one goal: tormenting his enemies.",
        "books": [
            8,
            11,
            53
        ]
    },
    {
        "id": 2076,
        "name": "Jonskeer",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 2,
        "img_name": "metal_nature_wetrat",
        "monster_origin": "normal",
        "description": "This weird monster has a lot of metal flakes that he'll use as a defence, or even as projectiles. Jonskeer is very aggressive, but he also has some good virtues, like dancing. He really loves it!",
        "books": []
    },
    {
        "id": 2077,
        "name": "Omethyst",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 2,
        "img_name": "metal_dark",
        "monster_origin": "normal",
        "description": "Heavy as a rock, hard as steel, Omethyst is really tough. This adamantine monster is hard to defeat, even for the most powerful monsters.",
        "books": []
    },
    {
        "id": 2078,
        "name": "Manolyth",
        "attributes": [
            "mt",
            "m"
        ],
        "rarity": 2,
        "img_name": "metal_magic_eyes",
        "monster_origin": "normal",
        "description": "Manolyth has a bit of a temper. He used to announce himself as the greatest sorcerer of all time but people didn\u2019t take him seriously so he just started hexing everyone he didn\u2019t like. Make sure you\u2019re nice to him!",
        "books": [
            2,
            53
        ]
    },
    {
        "id": 2079,
        "name": "Heimdal",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 2,
        "img_name": "metal_light_centauro",
        "monster_origin": "normal",
        "description": "This savage warrior has been offered all kinds of treasures by the most powerful kings, who've begged him to join their armies, but he's an individual fighter whose only interest is to engage in brutal battles.",
        "books": [
            10,
            162
        ]
    },
    {
        "id": 2080,
        "name": "Rockneto",
        "attributes": [
            "mt",
            "e"
        ],
        "rarity": 2,
        "img_name": "metal_earth_rockneto",
        "monster_origin": "normal",
        "description": "",
        "books": [
            2,
            103
        ]
    },
    {
        "id": 2081,
        "name": "Fornax",
        "attributes": [
            "mt",
            "f"
        ],
        "rarity": 3,
        "img_name": "metal_fire_furnace",
        "monster_origin": "normal",
        "description": "",
        "books": [
            5,
            104
        ]
    },
    {
        "id": 2082,
        "name": "Metanephrops",
        "attributes": [
            "mt",
            "w"
        ],
        "rarity": 2,
        "img_name": "metal_water_cangrejo",
        "monster_origin": "normal",
        "description": "This armored monster is really dangerous if you're under water. Do you think you're safe just because there's no water near you? Metanephrops can cast an entire sea against you!",
        "books": []
    },
    {
        "id": 2083,
        "name": "Lesaki",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 2,
        "img_name": "metal_thunder_lagartijo",
        "monster_origin": "normal",
        "description": "Lesaki is an electric metal lizard. Thunder and Metal make for a powerful combination. He is able to channel his Thunder power through his spiked axe for devastating attacks.",
        "books": [
            1,
            121
        ]
    },
    {
        "id": 2084,
        "name": "Crux",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 3,
        "img_name": "metal_nature_crux",
        "monster_origin": "normal",
        "description": "The perfect combination between metal and a plant. Crux has the best of both elements. He can heal his partners with his Nature power, but he can also injure the enemies with his dangerous metal roots.",
        "books": [
            2,
            3
        ]
    },
    {
        "id": 2085,
        "name": "Vortux",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 3,
        "img_name": "metal_dark_darkarmor",
        "monster_origin": "normal",
        "description": "Vortux is a pure Dark energy soul. During combat against a soldier, Vortux absorbed his enemy's soul and stole his armor as a trophy. Now he wears the armor to hide his real shape.",
        "books": [
            11,
            53
        ]
    },
    {
        "id": 2086,
        "name": "Dommeath",
        "attributes": [
            "mt",
            "m"
        ],
        "rarity": 3,
        "img_name": "metal_magic_armor",
        "monster_origin": "normal",
        "description": "Dommeath is a skilled mage and he has mastered the ability to open magic portals. Added to his Metal powers, he is able to perform devastating combos.",
        "books": [
            2,
            8,
            53
        ]
    },
    {
        "id": 2087,
        "name": "Aurinia",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 3,
        "img_name": "metal_light_tia",
        "monster_origin": "normal",
        "description": "Aurinia belongs to a dynasty of druids. She is the last remaining member, but also the most powerful. She may have a big sword, but her strongest weapon is her wisdom.",
        "books": [
            2,
            7,
            105
        ]
    },
    {
        "id": 2088,
        "name": "Roastie",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_pavo",
        "monster_origin": "normal",
        "description": "Roastie won't allow you to stuff him with onions and throw him into the oven. He plans to throw YOU in instead!",
        "books": [
            9,
            132,
            159
        ]
    },
    {
        "id": 2089,
        "name": "C.Y.M.O",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "metal_thunder_cymo",
        "monster_origin": "normal",
        "description": "",
        "books": [
            6,
            119
        ]
    },
    {
        "id": 2090,
        "name": "Son-Cookie",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_galleta",
        "monster_origin": "normal",
        "description": "Son-Cookie is a showoff. He wears the best quality frosting scarves and the shiniest jelly buttons to impress everyone. He says he could crush any monster with his bare cookie hands. Out of the oven and into battle!",
        "books": [
            9,
            131,
            159
        ]
    },
    {
        "id": 2091,
        "name": "Freeza",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 4,
        "img_name": "ml_snowman_monster",
        "monster_origin": "normal",
        "description": "Freeza is uncomfortable and grumpy. His scarf itches, his hat makes him sweaty and his nose is so long it falls off all the time. He's always in such a bad mood that he spends the whole winter throwing snowballs at anyone who dares to sing carols next to him.",
        "books": [
            9,
            159
        ]
    },
    {
        "id": 2092,
        "name": "Hellborne",
        "attributes": [
            "f",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_fire_hellborne",
        "monster_origin": "normal",
        "description": "Weird things happen when Hellborne is around. Creatures behave in a strange way and they all obey his orders. It is suspected that the flames that surround his body give off a toxic smoke that manipulates others\u2019 intentions.",
        "books": [
            5,
            104
        ]
    },
    {
        "id": 2093,
        "name": "Dan Felino",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 3,
        "img_name": "superbowl",
        "monster_origin": "normal",
        "description": "And it\u2019s a last-minute touchdown! The Monster City Legends win the Superbowl! All thanks to our local hero, Dan Felino, who saved the day!",
        "books": [
            142
        ]
    },
    {
        "id": 2094,
        "name": "Master Fong",
        "attributes": [
            "f",
            "l"
        ],
        "rarity": 4,
        "img_name": "light_fire_tigre",
        "monster_origin": "normal",
        "description": "Master Fong isn\u2019t just one of the greatest warriors alive, he\u2019s also a respected master and has taught many monsters how to win battles. Pandaken is one of his most famous pupils!",
        "books": [
            52,
            132
        ]
    },
    {
        "id": 2095,
        "name": "Pandaval",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "carnival_nature_magic_pandalf",
        "monster_origin": "normal",
        "description": "Introducing Pandalf's little brother! The story goes like this: For years, Pandaval tried to be as wise and focused as his older brother, but he just wasn't born that way. Instead, he decided to go his own way and devote his life to partying in Brazil. A vida \u00e9 um carnaval!",
        "books": [
            132,
            159
        ]
    },
    {
        "id": 2096,
        "name": "Metalh\u00ebad",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_metalhead",
        "monster_origin": "normal",
        "description": "Heavier than a rain of axes. He\u2019s all about motorcycles and raw meat. We tried to ask him more questions to write this piece for you but he kicked us out of his habitat after two minutes. Doesn\u2019t seem to like people, this one.",
        "books": [
            5,
            142
        ]
    },
    {
        "id": 2097,
        "name": "Ao Loong",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 4,
        "img_name": "paco",
        "monster_origin": "normal",
        "description": "Tired of being a New-Year-Parade Dragon, Ao Loong has decided to break away from his chains and start his own adventure on this land full of monsters.",
        "books": [
            1,
            52
        ]
    },
    {
        "id": 2098,
        "name": "Laomu",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "nature_magic_cabra",
        "monster_origin": "normal",
        "description": "She exists on a higher spiritual level, so she seems a bit disconnected from reality, but the truth is that her wisdom has been very helpful to other monsters in times of trouble. Plus, occasionally she enjoys something as mundane as a veggie burger!",
        "books": [
            10,
            52
        ]
    },
    {
        "id": 2099,
        "name": "Dusty Fear",
        "attributes": [
            "m",
            "d"
        ],
        "rarity": 4,
        "img_name": "earth_dark_teddy_love",
        "monster_origin": "normal",
        "description": "Oh dear... Teddy Fear has last-minute doubts about getting married and he hasn't shown up for his own wedding. His bride has gone mad! How dare he leave her? She's a charming garden rose!",
        "books": [
            7,
            8,
            132
        ]
    },
    {
        "id": 2100,
        "name": "Hyperion",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 4,
        "img_name": "metal_thunder_hyperion",
        "monster_origin": "normal",
        "description": "This metal and amethyst golem was created 1000 years ago and was able to destroy entire towns. Now that the Metal element has burst into Monster Legends, this beast has awoken and acquired cutting-edge technology.",
        "books": [
            6,
            121
        ]
    },
    {
        "id": 2101,
        "name": "Kal'Drekk",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 4,
        "img_name": "dark_nature_greenfat",
        "monster_origin": "normal",
        "description": "Kal\u2019Drekk is like the troll version of Attila the Hun. He\u2019s the ruthless commander of an army of trolls whose only goal is to destroy everything in their path. Kal\u2019Drekk is also a distant relative of Arnu, can you see the resemblance?",
        "books": [
            5,
            11,
            92
        ]
    },
    {
        "id": 2102,
        "name": "Skuller",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "easter_bunny",
        "monster_origin": "normal",
        "description": "Who said Easter bunnies were cute? This one in particular carries around a bone from his first victim. He uses it as a baseball bat. Cute, huh?",
        "books": [
            8,
            132
        ]
    },
    {
        "id": 2103,
        "name": "Monster Clutch",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_eggs",
        "monster_origin": "normal",
        "description": "These Easter egg-looking monsters hide under the ground with the other Easter eggs and when kids find them, they fly out and bite their fingers!",
        "books": [
            3,
            159
        ]
    },
    {
        "id": 2104,
        "name": "Draza",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_drazza",
        "monster_origin": "normal",
        "description": "Draza was a decorated soldier, and the commander of the Cheatkingz. He didn't want to leave his army, but he lost a bet and now he's here in Monster Legends. You know lost bets must be honored!",
        "books": [
            11,
            132
        ]
    },
    {
        "id": 2105,
        "name": "Trevor",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 3,
        "img_name": "earth_nature_trebol",
        "monster_origin": "normal",
        "description": "The Celtic druids used to go to a mountain to pick clovers for their potions. One day, an old druid accidentally dropped a bottle of potion and spilled the liquid all over the mountain, which came alive. That was the birth of Trevor.",
        "books": [
            10,
            12,
            159
        ]
    },
    {
        "id": 2106,
        "name": "Haku",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_metal_haku",
        "monster_origin": "normal",
        "description": "Haku was a good ninja but his ambition drove him mad. He traded his arms for blades and his whole body became steel, including his heart. The only thing he knows now is a thirst for killing.",
        "books": [
            6,
            11,
            105
        ]
    },
    {
        "id": 2107,
        "name": "Slayentaur",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 3,
        "img_name": "light_earth_jordi",
        "monster_origin": "normal",
        "description": "This medieval centaur was tormented by a dragon for years, but as they both grew strong, they became friends. Now, in the toughest moments of his battles, Slayentaur summons the dragon, who immediately comes and helps him.",
        "books": [
            10,
            160
        ]
    },
    {
        "id": 2108,
        "name": "Varuna",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_varuna",
        "monster_origin": "normal",
        "description": "Varuna was an ambitious pirate. When he drowned after his ship sank, Death visited him. He asked Death to live without a soul under the sea instead of dying, a wish he was granted. Now he torments the good souls of the deep oceans.",
        "books": [
            4,
            20,
            131
        ]
    },
    {
        "id": 2109,
        "name": "Pandaxplorer",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_pandiana",
        "monster_origin": "normal",
        "description": "The most adventurous member of our favorite panda family knows no limits. He will cross jungles and deserts to find all sorts of treasures\u2026 and the most delicious bamboo.",
        "books": [
            132,
            142
        ]
    },
    {
        "id": 2110,
        "name": "Rascal",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "dark_magic_rascal",
        "monster_origin": "normal",
        "description": "Rascal loves to torment all neat freaks. When he goes through walls he leaves a pink shade on them that is impossible to erase. He\u2019s not a very discreet monster.",
        "books": [
            2,
            12,
            133
        ]
    },
    {
        "id": 2111,
        "name": "The Firestorm",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_superfire",
        "monster_origin": "normal",
        "description": "A superhero so strong that he can carry meteorites as if they were ping pong balls and so hot that ladies literally melt whenever he comes close. He\u2019s on fire.",
        "books": [
            12,
            76
        ]
    },
    {
        "id": 2112,
        "name": "Ultrabot",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_ultra",
        "monster_origin": "normal",
        "description": "Evil robots usually work for human villains, but this one is his own boss. He\u2019s the real, the authentic, the ultimate robot supervillain!",
        "books": [
            6,
            11,
            121
        ]
    },
    {
        "id": 2113,
        "name": "Aiden",
        "attributes": [
            "w",
            "f"
        ],
        "rarity": 4,
        "img_name": "water_fire_aiden",
        "monster_origin": "normal",
        "description": "The proof that you can be hot and cool at the same time. Aiden doesn't even need to try hard, he was born like that. Put him on your island if you want to have a portable steambath. Ladies will love him.",
        "books": [
            2,
            104,
            133
        ]
    },
    {
        "id": 2114,
        "name": "Chocolove",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_chocolove",
        "monster_origin": "normal",
        "description": "If you want to help your mother with her diet, Chocolove is the perfect chocolate box for her. It\u2019s full of deliciousness, but she\u2019ll never know, because as soon as she tries to take a chocolate from it, it\u2019ll bite her hand off.",
        "books": [
            159
        ]
    },
    {
        "id": 2115,
        "name": "Squamata Jr.",
        "attributes": [
            "mt",
            "e"
        ],
        "rarity": 4,
        "img_name": "earth_metal_squamata",
        "monster_origin": "normal",
        "description": "\"We go in, we kill.\" This is Squamata Jr.'s motto, killing is all he knows. But what did you expect from someone who lives alone in the desert and feeds on gasoline? A good conversation?",
        "books": [
            11,
            92
        ]
    },
    {
        "id": 2116,
        "name": "Pixelion",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_pixelion",
        "monster_origin": "normal",
        "description": "Error 415: Unsupported media type. A pixelated hero from another dimension has been sucked into Monster Legends\u2019 current by mistake. Suggested Solution: Welcome him to your island, he will fight all villains with honor.",
        "books": [
            10,
            132,
            131
        ]
    },
    {
        "id": 2117,
        "name": "Mecharasu",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 4,
        "img_name": "dark_thunder_mecharasu",
        "monster_origin": "normal",
        "description": "This ninja has come from the apocalypse to stop humanity from following its course to a future of chaos and destruction. Mecharasu will fight for justice and a better integration of technology in nature.",
        "books": [
            6,
            10,
            52
        ]
    },
    {
        "id": 2118,
        "name": "Dr. Hazard",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_dr-hazard",
        "monster_origin": "normal",
        "description": "Monster Master, we need your help. The evil Dr. Hazard is planning to destroy our beautiful islands and kill all the monsters by poisoning them. Only you can defeat and tame him.",
        "books": [
            6,
            78
        ]
    },
    {
        "id": 2119,
        "name": "Cyan Nathura",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_nathura",
        "monster_origin": "normal",
        "description": "Cyan Nathura is the heroine that this green world needs, because the only thing scarier than evil contaminating industries is a woman with a bad temper. If they try to dump hazardous waste, she will shove it down their throats.",
        "books": [
            7,
            12,
            75
        ]
    },
    {
        "id": 2120,
        "name": "MMOnster",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_mmonster",
        "monster_origin": "normal",
        "description": "This dark warrior of the internet shows his battles to the world for a living. The more people watch his conquests, the stronger he becomes. He has but one weakness: If you give him an \u201cunlike\u201d it will be like a fatal blow for him.",
        "books": [
            11,
            15,
            105
        ]
    },
    {
        "id": 2121,
        "name": "Sludger",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 3,
        "img_name": "water_earth_mud",
        "monster_origin": "normal",
        "description": "When you start to contaminate the environment, weird and bad things can happen. Sludger is one of those things!",
        "books": [
            103,
            133
        ]
    },
    {
        "id": 2122,
        "name": "Killeraptor",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_killeraptor",
        "monster_origin": "normal",
        "description": "A dinosaur equipped with technology is a cool thing to own. Danger comes when you give it its own intelligence. Killeraptor has revolted against its creators. Beware.",
        "books": [
            1,
            121
        ]
    },
    {
        "id": 2123,
        "name": "Skeel Trooper",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 4,
        "img_name": "thunder_dark_alien",
        "monster_origin": "normal",
        "description": "One of the thousands of troopers in the invading army. He is young, impulsive, and doesn't want to be just another face in the crowd. To avoid this, he likes to draw attention to himself by being more brutal than the rest.",
        "books": [
            6,
            121
        ]
    },
    {
        "id": 2124,
        "name": "Reptie",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_tie",
        "monster_origin": "normal",
        "description": "Make sure your dad's closet is shut properly every night. Little is known about Repties, but this doesn't mean they're uncommon. It just means that none of their victims survive to tell the world how dangerous they are.",
        "books": [
            13,
            159
        ]
    },
    {
        "id": 2125,
        "name": "Volray",
        "attributes": [
            "t",
            "w"
        ],
        "rarity": 4,
        "img_name": "thunder_water_volray",
        "monster_origin": "normal",
        "description": "Volray has been isolated for many years, given that, ever since he was born, he involuntarily killed all the fish around him every time he sneezed. Now he has controlled his powers but he\u2019s still deadly!",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2126,
        "name": "Master Skeel",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_master_skeel",
        "monster_origin": "normal",
        "description": "The admiral of the Skeel army. While the troopers and Exo Skeel are the muscle, Master Skeel is... well, the master. What he lacks in physical strength he makes up for in intelligence, strategy skills and malice.",
        "books": [
            6,
            21,
            121
        ]
    },
    {
        "id": 2127,
        "name": "Exo Skeel",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_exoskeel",
        "monster_origin": "normal",
        "description": "This armored alien unit is the jewel in the crown of the Skeel army, and is pure space avant-garde. Its core, made of compressed meteorites, is a nucleus of brutal power.",
        "books": [
            6,
            121
        ]
    },
    {
        "id": 2128,
        "name": "Crushmore",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 3,
        "img_name": "earth_nature_crushmore",
        "monster_origin": "normal",
        "description": "After Monster War I, the faces of the victors were carved into a mount that became a famous monument visited by thousands of tourists. One day, tired of having its photos taken, the mount came alive and started crushing tourists. That was the birth of Crushmore.",
        "books": [
            103,
            133
        ]
    },
    {
        "id": 2129,
        "name": "General Ingvar",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ingvar",
        "monster_origin": "team_wars",
        "description": "The general of the Light troops. He guides his monster teams with wisdom, but he also has a strong hand. It is said that when General Ingvar shines his blinding light on his enemies, they never recover completely.",
        "books": [
            3,
            10,
            14,
            62
        ]
    },
    {
        "id": 2130,
        "name": "Noctum",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_noctum",
        "monster_origin": "normal",
        "description": "Noctum lives in Darkness, a horrible dimension outside this world. This entity has come to Monster Legends through a Dark Vortex and will try to take everyone back to Darkness with it.",
        "books": [
            2,
            8,
            53,
            133
        ]
    },
    {
        "id": 2131,
        "name": "General Atum",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_atum",
        "monster_origin": "team_wars",
        "description": "The General of the Earth Forces. General Atum is strong, confident and quite rough... Not what you'd call delicate.",
        "books": [
            10,
            14,
            103,
            133,
            131
        ]
    },
    {
        "id": 2132,
        "name": "General Thetys",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_thetys",
        "monster_origin": "team_wars",
        "description": "The General of the Water troops doesn't mess around. It's hard to say if she's respected or just plain feared. When she summons the Water creatures for war, they all come without questioning her.",
        "books": [
            4,
            7,
            14,
            131,
            155
        ]
    },
    {
        "id": 2133,
        "name": "Oghma",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_oghma",
        "monster_origin": "normal",
        "description": "You have every right to be amazed at the sight of Oghma. We were wowed ourselves when he landed in Monster Legends. He's a godlike Light warrior capable of leading his team to victory single-handedly.",
        "books": [
            10
        ]
    },
    {
        "id": 2134,
        "name": "Barbatos",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_barbatos",
        "monster_origin": "normal",
        "description": "Barbatos is the monsterification of wickedness. He rules thirty legions of demons, but being in the front line of battle is what he enjoys most. He\u2019s even willing to hurt himself in order to harm others.",
        "books": [
            5,
            21,
            93,
            131
        ]
    },
    {
        "id": 2135,
        "name": "Seraphim",
        "attributes": [
            "l",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_light_seraphim",
        "monster_origin": "normal",
        "description": "He\u2019s gone from heaven to hell and back more times than anyone can remember. He fits in with neither angels nor demons so his soul is condemned to a lonely existence.",
        "books": [
            3,
            10,
            90,
            131
        ]
    },
    {
        "id": 2136,
        "name": "Ledovech",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 4,
        "img_name": "earth_water_ledovech",
        "monster_origin": "normal",
        "description": "Ledovechs are epic creatures from the Mountains of the North. They're strong and as tough as frozen rocks. One Ledovech is enough to land an entire monster team in serious trouble.",
        "books": [
            9,
            133,
            162
        ]
    },
    {
        "id": 2137,
        "name": "Rhinoram",
        "attributes": [
            "mt",
            "f"
        ],
        "rarity": 4,
        "img_name": "metal_fire_rhinoram",
        "monster_origin": "normal",
        "description": "Rhinoram is not what you would call a friendly creature. We interviewed him for this review and not only was it unbearably hot to be close to him, but even worse, he only grunted in answer to all our questions. How rude!",
        "books": [
            6,
            104
        ]
    },
    {
        "id": 2138,
        "name": "Firesque",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 4,
        "img_name": "earth_fire_firesque",
        "monster_origin": "normal",
        "description": "The legend tells us that there was a big troll who swallowed the sun. No one ever believed this legend until we met Firesque and realized he was that troll.",
        "books": [
            5,
            11,
            104
        ]
    },
    {
        "id": 2139,
        "name": "Evaranae",
        "attributes": [
            "n",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_nature_evaranae",
        "monster_origin": "normal",
        "description": "Quite the spider fatale. Beauty is not the only deadly thing about Evaranae. Her venom will literally kill you before you can do anything about it, so try not to be distracted by those intense green eyes.",
        "books": [
            7
        ]
    },
    {
        "id": 2140,
        "name": "Akhenotep",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_akhenotep",
        "monster_origin": "normal",
        "description": "This evil king ruled Ancient Egypt for 40 years. When he died, historians nicknamed him \"The Enemy\" and \"The Criminal\". Now he's back from the dead to avenge his name.",
        "books": [
            8,
            131,
            160
        ]
    },
    {
        "id": 2141,
        "name": "Horus",
        "attributes": [
            "m",
            "d"
        ],
        "rarity": 4,
        "img_name": "dark_magic_horus",
        "monster_origin": "normal",
        "description": "They call Horus \"The Distant One\" because he can fly away and disappear for whole decades; but in times of trouble, he can sense the despair of his fellow citizens\u2019 from afar and he comes to help them.",
        "books": [
            2,
            160
        ]
    },
    {
        "id": 2142,
        "name": "Gold Ra",
        "attributes": [
            "mt",
            "f"
        ],
        "rarity": 4,
        "img_name": "earth_fire_fireettle_egypt",
        "monster_origin": "normal",
        "description": "This golden beetle enjoys a sacred status in Monster Legends. It is said that Gold Ra brings good luck to your battles.",
        "books": [
            160
        ]
    },
    {
        "id": 2143,
        "name": "Timerion",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_timerion",
        "monster_origin": "normal",
        "description": "Timerion is one of the first artifacts in History. It appeared mysteriously for the first time in Monster War II and to this day, no one understands where its strange time-bending skills came from. ",
        "books": [
            6
        ]
    },
    {
        "id": 2144,
        "name": "Basthet",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_bashet",
        "monster_origin": "normal",
        "description": "If you bring Basthet to your island, she will become a major protector of your monsters. She is fair and joyful but she will go to all lengths to defend her teammates.",
        "books": [
            7,
            8,
            132,
            131,
            160
        ]
    },
    {
        "id": 2145,
        "name": "LaCroc",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 3,
        "img_name": "nature_thunder_lacroc",
        "monster_origin": "normal",
        "description": "Like most tennis players, LaCroc is quite posh. His towels are made of top quality Egyptian cotton and he only swims in mineral water. He\u2019s so spoiled that you\u2019ll probably have a hard time mastering him.",
        "books": [
            1,
            131,
            142
        ]
    },
    {
        "id": 2146,
        "name": "Pandafest",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_pandafest",
        "monster_origin": "normal",
        "description": "The Panda family members are numerous and they\u2019re all over the world. Meet Pandalf\u2019s Bavarian cousin: Pandafest. He likes beer and sauerkraut but you\u2019ll never hear him singing any Tyrolean songs.",
        "books": [
            132,
            159
        ]
    },
    {
        "id": 2147,
        "name": "VoltaiK",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_voltaik",
        "monster_origin": "normal",
        "description": "VoltaiK is a superhero as quick as Thunder. He can attack you 5 times before you even notice he\u2019s attacked you once. Like The Firestorm, he\u2019s got a big ego, so they\u2019ve got a bit of a rivalry going on.",
        "books": [
            12,
            75
        ]
    },
    {
        "id": 2148,
        "name": "Nereida",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 3,
        "img_name": "nature_magic_nereida",
        "monster_origin": "normal",
        "description": "Nereida is a charming fairy. She\u2019s quiet but she\u2019s always there to help all the creatures in the forest. She\u2019s very good at healing and supporting her teammates.",
        "books": [
            3,
            7,
            102
        ]
    },
    {
        "id": 2149,
        "name": "Ipug",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 4,
        "img_name": "metal_thunder_puggie",
        "monster_origin": "normal",
        "description": "Dr. Hazard was experimenting with robots and he needed a living creature to operate his latest machine. By mistake, he ended up using his dumbest pet: a pug.",
        "books": [
            6,
            119,
            132
        ]
    },
    {
        "id": 2150,
        "name": "Plethodon",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 4,
        "img_name": "fire_earth_plethodon",
        "monster_origin": "normal",
        "description": "Plethodons have existed since prehistoric times but they only come out for a year every four centuries. If you see one, catch it! You won\u2019t get many opportunities.",
        "books": [
            1,
            104
        ]
    },
    {
        "id": 2151,
        "name": "Neandertaler",
        "attributes": [
            "e",
            "w"
        ],
        "rarity": 4,
        "img_name": "earth_water_neandertaler",
        "monster_origin": "normal",
        "description": "You\u2019ve surely heard about cavemen, but have you heard about cavetrolls? Well, they existed, but most of them refused to look for shelter when the fire & ice ages came. This one was a little (not a lot) more intelligent and he thinks now is the right time to emerge from the cave again.",
        "books": [
            9,
            162
        ]
    },
    {
        "id": 2152,
        "name": "Megaosteum",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_megaosteum",
        "monster_origin": "normal",
        "description": "Thousands of years ago, the very dangerous Megaosteum was killed and buried under tons of sand. The cavemen were hoping that that would be the end of him, but now he\u2019s back in fossil form and more ferocious than ever.",
        "books": [
            1,
            8,
            53
        ]
    },
    {
        "id": 2153,
        "name": "Lord Mammoth",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_lord_mammoth",
        "monster_origin": "normal",
        "description": "Mammoth men are an almost extinct race, only one tribe remains. Lord Mammoth is the chief of this tribe. His strength and savagery make him stand out among the rest of his men.",
        "books": [
            9,
            131,
            162
        ]
    },
    {
        "id": 2154,
        "name": "Ouros",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_ouros",
        "monster_origin": "normal",
        "description": "The song said \u201cAin\u2019t no mountain high enough to keep me from getting to you\u201d, but if this mountain in particular wants to keep you from doing something, it will. Ouros is the biggest mountain and the biggest monster in Monster Legends!",
        "books": [
            5,
            13,
            103,
            133
        ]
    },
    {
        "id": 2155,
        "name": "Zomdalf",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_zomdalf",
        "monster_origin": "normal",
        "description": "Pandalf was practicing his spells next to his granddad\u2019s grave. By mistake, a spell hit the grave and: boom! His granddad rose from the ground\u2026 as a zombie.",
        "books": [
            8,
            132
        ]
    },
    {
        "id": 2156,
        "name": "Cristobal",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 3,
        "img_name": "water_earth_columbus",
        "monster_origin": "normal",
        "description": "Cristobal has been really important in the history of Monster Legends! When he was young, everyone thought that only the main island existed but he discovered that there were many more islands in the Monster Universe!",
        "books": [
            4,
            59,
            132
        ]
    },
    {
        "id": 2157,
        "name": "Count Vlad",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_count_vlad",
        "monster_origin": "normal",
        "description": "Most illustrious Count Vlad is the regent of Monstelvania. He\u2019s elegant, polite, interesting\u2026 He\u2019s also a murderer, but who would press charges against such a gentleman?",
        "books": [
            8,
            13
        ]
    },
    {
        "id": 2158,
        "name": "Lilysha",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "dark_magic_lilysha",
        "monster_origin": "normal",
        "description": "Lilysha knows her appearance can be distracting\u2014and what a useful thing that can be! Monsters entranced by her looks certainly make for easy victims (and, occasionally, delicious snacks.)",
        "books": [
            3,
            5,
            7,
            93
        ]
    },
    {
        "id": 2159,
        "name": "Punchie",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "dark_magic_punchie",
        "monster_origin": "normal",
        "description": "Coulrophobia is a fear of clowns. This fear was originally called \u201cPunchiephobia\u201d, but it reminded people so much of this terrible monster that the very word was too scary. That is why they decided to change it, so that no one had to name Punchie.",
        "books": [
            8
        ]
    },
    {
        "id": 2160,
        "name": "Chordim",
        "attributes": [
            "m",
            "t"
        ],
        "rarity": 4,
        "img_name": "thunder_magic_chordim",
        "monster_origin": "normal",
        "description": "Chordim is a very powerful wizard. He uses his magic against the dark forces and from time to time he even creates useful tools for battle, like the Quarantine Kit and the Hawk Lens. He\u2019s a wise guy!",
        "books": [
            62
        ]
    },
    {
        "id": 2161,
        "name": "Eburwin",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 4,
        "img_name": "metal_light_eburwin",
        "monster_origin": "normal",
        "description": "Forget about all those cutesy fairy tale unicorns. Eburwin is not the kind of creature you will see galloping under a rainbow. We\u2019re talking about a solemn Light warrior that will fight for justice to the end.",
        "books": [
            3,
            160
        ]
    },
    {
        "id": 2162,
        "name": "Megapolaris",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_megapolaris",
        "monster_origin": "normal",
        "description": "Not only does Megapolaris hate living organisms, he also despises good robots who have betrayed other machines to team up with living creatures. Now he is trying single-handedly to make machines rule the universe.",
        "books": [
            6,
            12,
            76
        ]
    },
    {
        "id": 2163,
        "name": "General Darmith",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_darmith",
        "monster_origin": "team_wars",
        "description": "The general of the Fire troops is ruthless. There\u2019s nothing he likes more than the smell of blood, so have General Darmith on your side or prepare to bleed.",
        "books": [
            1,
            11,
            14,
            92,
            131
        ]
    },
    {
        "id": 2164,
        "name": "Bjarni",
        "attributes": [
            "f",
            "t"
        ],
        "rarity": 4,
        "img_name": "thunder_fire_bjarni",
        "monster_origin": "normal",
        "description": "Bjarni lives in a Viking ship\u2019s hold. He spends most of the time tormenting the prisoners kept there, but sometimes he comes out of the hold to blast some Saxons, just for fun.",
        "books": [
            11,
            162
        ]
    },
    {
        "id": 2165,
        "name": "Layth",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_layth",
        "monster_origin": "normal",
        "description": "When Layth watches a battle from his throne in the Arena, he doesn\u2019t care about the monsters\u2019 talent or strength, he just wants to witness a good show, and if he doesn\u2019t get one\u2026 let\u2019s just say that his lions get fed.",
        "books": [
            10,
            132,
            131,
            160
        ]
    },
    {
        "id": 2166,
        "name": "MonsterFace",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 4,
        "img_name": "metal_dark_monsterface",
        "monster_origin": "normal",
        "description": "He grew up in a campsite full of humans that laughed at his terribly ugly face and his monster condition all the time, so one day, he took a chainsaw and taught them a lesson. They learnt it the hard way.",
        "books": [
            5,
            76
        ]
    },
    {
        "id": 2167,
        "name": "Pegasus",
        "attributes": [
            "n",
            "l"
        ],
        "rarity": 4,
        "img_name": "light_nature_pegasus",
        "monster_origin": "normal",
        "description": "Pegasus has all the right connections! He was sired by Poseidon, worked for Zeus, and is friends with all the Greek muses, so he gets a little help from Olympus every time he\u2019s in battle.",
        "books": [
            3,
            132,
            160
        ]
    },
    {
        "id": 2168,
        "name": "Deadwolf",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_deadwolf",
        "monster_origin": "normal",
        "description": "Deadwolf is a renegade cowboy that loves easy money, but despite his rude manners and rough looks, he has a heart of gold and often gives up a bounty to help the weak.",
        "books": [
            10,
            78,
            132,
            131
        ]
    },
    {
        "id": 2169,
        "name": "Cavenfish",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_cavenfish",
        "monster_origin": "normal",
        "description": "In the never-ending war between pirates and sharks, the pirates usually win, but that\u2019s just because they\u2019re the ones with the cannons! Cavenfish managed to get a ship full of them and now, he\u2019s the victorious one.",
        "books": [
            4,
            131
        ]
    },
    {
        "id": 2170,
        "name": "Qin",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_qin",
        "monster_origin": "normal",
        "description": "Qin remained loyal to his duty of protecting the grave of the first Emperor of China for centuries; but finally this terracotta warrior has been freed to fight again... And he is thirsty for war.",
        "books": [
            10,
            61
        ]
    },
    {
        "id": 2171,
        "name": "R.O.F.L.",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_rofl",
        "monster_origin": "normal",
        "description": "Wow, so internet, many skill, much robot, such strong, realli damage, mai team, highly monster, very meme, most hero, amaze, scare power.",
        "books": [
            6
        ]
    },
    {
        "id": 2172,
        "name": "Raccoon",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_thanksgiving_raccoon",
        "monster_origin": "normal",
        "description": "This raccoon leads a tribe of animals that steal all crops right before harvest time. Pilgrims dread him and the few that manage to keep their crops untouched give thanks every year around the end of November.",
        "books": [
            78,
            132
        ]
    },
    {
        "id": 2173,
        "name": "Xpug",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 4,
        "img_name": "magic_earth_xpug",
        "monster_origin": "normal",
        "description": "Christmas has arrived at Dr. Hazard's hideout, but no one seems to care. iPug is determined to create some Christmas atmosphere, so it has built a festive version of itself: xPug. Dr. Hazard won\u2019t like it.",
        "books": [
            6,
            9,
            132,
            159
        ]
    },
    {
        "id": 2174,
        "name": "Klectus",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_klectus",
        "monster_origin": "normal",
        "description": "This living nightmare crawls into other monsters\u2019 minds sucking all the joy out of them. Christmas, being the happiest time of the year, is a feast for him.",
        "books": [
            5
        ]
    },
    {
        "id": 2175,
        "name": "Thunderon",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 3,
        "img_name": "thunder_nature_thunderon",
        "monster_origin": "normal",
        "description": "Thunderon is an ancient spirit of the forest. His wisdom can be both healing and lethal. You\u2019ll want him to take your side.",
        "books": [
            60
        ]
    },
    {
        "id": 2176,
        "name": "Minotaurus",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_minotaurus",
        "monster_origin": "normal",
        "description": "The myth lies: Theseus didn\u2019t kill the Minotaur, it was the other way round. The Greek gods were so embarrassed about their hero that they hid the beast in a cave. 3000 years later, Minotaurus has escaped.",
        "books": [
            11,
            132,
            160
        ]
    },
    {
        "id": 2177,
        "name": "General Uria",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_general_uria",
        "monster_origin": "team_wars",
        "description": "General Uria is the commander of the Thunder troops. Under his armor there is no physical form, just a charge of pure Thunder energy. Do not touch him if you've been in contact with water!",
        "books": [
            2,
            10,
            14,
            131,
            162
        ]
    },
    {
        "id": 2178,
        "name": "St\u00f6irm",
        "attributes": [
            "t",
            "w"
        ],
        "rarity": 4,
        "img_name": "water_thunder_stoirm",
        "monster_origin": "normal",
        "description": "St\u00f6irm is Zeus' cousin. Despite sharing the ability to control meteorology, St\u00f6irm is less famous than this cousin, and not as good with women either. Being in the background has made him very bad-tempered and dark.",
        "books": [
            2,
            133,
            162
        ]
    },
    {
        "id": 2179,
        "name": "Flirty",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_flirty",
        "monster_origin": "normal",
        "description": "Flirty is so sick of working for Panda Claus at his village that he has ended up hating Christmas. He is dumb, strong and out of control. Be careful, Panda Claus!",
        "books": [
            9,
            159
        ]
    },
    {
        "id": 2180,
        "name": "Coldberus",
        "attributes": [
            "d",
            "w"
        ],
        "rarity": 4,
        "img_name": "dark_water_coldberus",
        "monster_origin": "normal",
        "description": "There\u2019s a frozen room in hell, especially designed by the Devil, where heat-loving sinners go. There they suffer unbearable cold for eternity. Coldberus guards this room to make sure that those souls never get out.",
        "books": [
            5,
            132,
            162
        ]
    },
    {
        "id": 2181,
        "name": "Caillech",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_caillech",
        "monster_origin": "normal",
        "description": "This charming frozen fairy represents all that\u2019s good about Christmas: She is kind, generous and happy\u2026 but not harmless: She will crush whoever tries to break her Christmas spirit!",
        "books": [
            3,
            7,
            9,
            131,
            162
        ]
    },
    {
        "id": 2182,
        "name": "Krampus",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_krampus",
        "monster_origin": "normal",
        "description": "It is known that Panda Claus brings presents to good monsters, but what happens to the bad ones? It is not Panda Claus, but Krampus who pays them a visit\u2026 and not a very pleasant one.",
        "books": [
            9,
            11,
            21,
            162
        ]
    },
    {
        "id": 2183,
        "name": "Beetrat",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "earth_magic_beetrat",
        "monster_origin": "normal",
        "description": "After meditating in their burrows for years, nomad Beetrats gather in the forest to perform mysterious rituals. They are said to open up paths by pushing giant balls of mud through the trees.",
        "books": [
            60
        ]
    },
    {
        "id": 2184,
        "name": "King Daeron",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_king_daeron",
        "monster_origin": "normal",
        "description": "King of the Royal Elf Army, Daeron is a harsh but fair monarch. He will fight against dark forces with courage, fortitude, and with the help of his wife, Queen Luthien.",
        "books": [
            10,
            62
        ]
    },
    {
        "id": 2185,
        "name": "Queen Luthien",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_luthien",
        "monster_origin": "normal",
        "description": "Luthien is King Daeron's wife and the Queen of Royal Elf Army. She always joins royal fights against dark forces as a warrior. She is not only a beautiful Elf Queen!",
        "books": [
            7,
            9,
            62
        ]
    },
    {
        "id": 2186,
        "name": "White Pandalf",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_white_pandalf",
        "monster_origin": "normal",
        "description": "After an epic battle against Darkness, Pandalf has been reborn as White Pandalf, the mightiest magician in the Monster Legends universe. He is capable of casting the most uncanny spells!",
        "books": [
            10,
            62,
            131
        ]
    },
    {
        "id": 2187,
        "name": "Ralbog",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_ralbog",
        "monster_origin": "normal",
        "description": "Ralbog is a sinister demon, armed with fiery blades. It is said that only dragons can rival his ferocity. He used to work for a dark lord, torturing prisoners for him, but now he is looking for a new master. Could that be you?",
        "books": [
            5,
            11,
            92,
            131
        ]
    },
    {
        "id": 2188,
        "name": "Greedy Dragon",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_greedy_dragon",
        "monster_origin": "normal",
        "description": "This malevolent creature has more riches than he can enjoy, but take something from him and he will destroy you. He\u2019s irrational but incredibly intelligent and powerful - a lethal combination.",
        "books": [
            1,
            3,
            5,
            92
        ]
    },
    {
        "id": 2189,
        "name": "Annihilator R2",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_annihilator_r2",
        "monster_origin": "normal",
        "description": "Annihilator R2 has been programmed with just one mode: annihilation. He doesn\u2019t think or listen to reason. Once he\u2019s in combat mode, he won\u2019t stop until all his enemies are dead.",
        "books": [
            6,
            120
        ]
    },
    {
        "id": 2190,
        "name": "General Shannara",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_shannara",
        "monster_origin": "team_wars",
        "description": "General Shannara belongs to a parallel dimension that only exists for wizards, but she has come to these legendary lands to be a warrior and lead the Magic troops. Metal warriors dread her.",
        "books": [
            7,
            10,
            14,
            91
        ]
    },
    {
        "id": 2192,
        "name": "Lux Aura",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_lux_aura",
        "monster_origin": "normal",
        "description": "The energy inside Lux Aura is immense. It is said that she can fight all Dark monsters on her own. Wouldn\u2019t you like to find out if it\u2019s true?",
        "books": [
            2,
            7,
            12,
            75
        ]
    },
    {
        "id": 2193,
        "name": "Sphyrnus",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_sphyrnus",
        "monster_origin": "normal",
        "description": "Beware the Prince of Dark Seas. Sphyrnus\u2019 plan to rule the world includes forcing all surface monsters to live in ponds and rivers while Water monsters get to keep lands and oceans.",
        "books": [
            4,
            12,
            76
        ]
    },
    {
        "id": 2194,
        "name": "Darude",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_darude",
        "monster_origin": "normal",
        "description": "Tough, strong\u2026 and dumb. Darude is a villain for hire. He doesn\u2019t have a strong personality, so all he does is destroy whoever he is told to destroy.",
        "books": [
            12,
            76,
            133
        ]
    },
    {
        "id": 2195,
        "name": "Malair",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_malair",
        "monster_origin": "normal",
        "description": "Malair used to be an important sorcerer in charge of protecting the Earth against magical threats. One day, just to see how it felt, he decided to try using a little black magic... It consumed him and turned him to the path of evil.",
        "books": [
            12,
            76
        ]
    },
    {
        "id": 2196,
        "name": "Super Pandalf",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_superpandalf",
        "monster_origin": "normal",
        "description": "Pandalf, a nice wizard by day\u2026 and a superhero by night! If you need Super Pandalf, just call his name and he will come to your aid!",
        "books": [
            12,
            75,
            132
        ]
    },
    {
        "id": 2197,
        "name": "Sambacadabra",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_magic_sambacadabra",
        "monster_origin": "normal",
        "description": "Sambacadabra is not just any old witch and her maracas are not just any old maracas; when she shakes them to the rhythm of the bossanova, she can heal everyone, but if she shakes them to the samba... hide!",
        "books": [
            131,
            159
        ]
    },
    {
        "id": 2198,
        "name": "Grididon",
        "attributes": [
            "mt",
            "e"
        ],
        "rarity": 4,
        "img_name": "metal_earth_gridiron",
        "monster_origin": "normal",
        "description": "Gridiron is Dan Felino\u2019s nemesis. While Dan is light and agile, Gridiron is heavy and ruthless on the field. Fair play is not his thing.",
        "books": [
            132,
            142
        ]
    },
    {
        "id": 2199,
        "name": "Galante",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_galan",
        "monster_origin": "normal",
        "description": "Here\u2019s the authentic gentlemonster: Galante. He\u2019s a specialist in breeding and he loves to fight in battles when ladies are watching. His only motivation is to impress them.",
        "books": [
            13,
            77
        ]
    },
    {
        "id": 2200,
        "name": "General Alces",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_general_alces",
        "monster_origin": "team_wars",
        "description": "The general of the Nature troops is a must in any team war. His bow can both heal and harm. Despite being a peaceful forest spirit, he will not waste an opportunity to go to war and remind you that nature always wins.",
        "books": [
            10,
            14,
            102
        ]
    },
    {
        "id": 2201,
        "name": "Scarr the Outcast",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_scarr",
        "monster_origin": "vip",
        "description": "Scarr is an outlaw. He's spent his entire life alone, but he doesn't need anyone else. It is a known fact in the monster universe that Scarr can defeat whole armies on his own. All he needs is his axe.",
        "books": [
            11,
            15,
            131
        ]
    },
    {
        "id": 2202,
        "name": "ML-1 YAMATO",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_yamato",
        "monster_origin": "normal",
        "description": "Greetings Master. I am ML-1 YAMATO (Monster Legends MODEL 1). I am here to serve you. If you want me to come, say \u201cYAMATO\u201d. If you want me to kill, choose an attack. For more information, read my instruction manual.",
        "books": [
            6,
            11,
            120,
            131
        ]
    },
    {
        "id": 2203,
        "name": "Uru",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_uru",
        "monster_origin": "normal",
        "description": "This is Uru, the cutest jelly you\u2019ll ever see! But don\u2019t be distracted by his cuteness: Uru can take the shape of any legendary fighter and destroy you.",
        "books": [
            2,
            120
        ]
    },
    {
        "id": 2204,
        "name": "Anton Acorne",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_anton_acorne",
        "monster_origin": "normal",
        "description": "Pirates are not known for their wisdom, but Anton Acorne is a very unusual pirate! He's cunning and is quite the villain. His outfit might trick you into thinking he's a chill guy, but you should never trust his \"good vibes\".",
        "books": [
            4
        ]
    },
    {
        "id": 2205,
        "name": "The Prisoner",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_the_prisoner",
        "monster_origin": "normal",
        "description": "This creature tried to become an Earth monster against Poseidon's will, so as a punishment, the god condemned him to wear a stone collar that keeps him prisoner on the seabed.",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2206,
        "name": "Hydrok The Forgotten",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_hydrok",
        "monster_origin": "vip",
        "description": "Hydrok was the commander of the most important undersea army 800 years ago. Time passed and his army disappeared, but this honorable warrior remains, still guarding the depth of the ocean.",
        "books": [
            11,
            15,
            131,
            154
        ]
    },
    {
        "id": 2208,
        "name": "The Judgment",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_the_judgement",
        "monster_origin": "normal",
        "description": "This savage beast was born on the same planet as The Firestorm. The two hate each other!... and now that The Judgement has arrived in Monster Legends, they meet again. The ultimate showdown could happen any minute!",
        "books": [
            5,
            60
        ]
    },
    {
        "id": 2209,
        "name": "Sarah",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_sarah",
        "monster_origin": "normal",
        "description": "This rag doll may be adorable and cute, but don\u2019t underestimate her as a contestant, she\u2019s a DIY master and can create the most powerful attacks from something as simple as a wool ball.",
        "books": [
            7,
            13
        ]
    },
    {
        "id": 2210,
        "name": "Blockheart",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_block_heart",
        "monster_origin": "normal",
        "description": "Blockheart was built by a boy with such dedication that he came to life. Now he's just as that boy imagined him: impressive and fearless. Well... he does have one fear: having to go back into the bucket of blocks!",
        "books": [
            1,
            13
        ]
    },
    {
        "id": 2211,
        "name": "Toy Master",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_toymaster",
        "monster_origin": "normal",
        "description": "This spoiled brat knows every dirty trick in the book to get his own way. He loves to bug other monster teens and use their own toys to torment them.",
        "books": [
            6,
            13,
            142
        ]
    },
    {
        "id": 2212,
        "name": "Sham-Rokku",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 4,
        "img_name": "nature_metal_sham_rokku",
        "monster_origin": "normal",
        "description": "Unlike other leprechauns, Sham-Rokku didn\u2019t want to devote his life to making and mending shoes, so he followed his dream: becoming a ninja! His pot of gold is the best protected of them all.",
        "books": [
            10,
            159
        ]
    },
    {
        "id": 2213,
        "name": "Lepu",
        "attributes": [
            "n",
            "l"
        ],
        "rarity": 4,
        "img_name": "light_nature_lepu",
        "monster_origin": "normal",
        "description": "Lepu was just another white bunny until one day he saved an entire family of rabbits from the cruelty of Chocobunny. On that day, Lepu became a hero, and he has devoted his life to justice ever since.",
        "books": [
            6,
            132,
            159
        ]
    },
    {
        "id": 2214,
        "name": "Chocobunny",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "epic_dark_magic_chocobunny",
        "monster_origin": "normal",
        "description": "Sweet and creamy on the outside, a psychopath on the inside! Meadow bunnies know that when a faint smell of milk chocolate appears, it\u2019s time to hide.",
        "books": [
            132
        ]
    },
    {
        "id": 2215,
        "name": "Eggeater",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_eggeater",
        "monster_origin": "normal",
        "description": "Eggeater likes to go egg hunting. But instead of picking up eggs from the ground, this creature prefers to eat eggs from baskets\u2026 and eat baskets\u2026 and eat whoever is carrying the baskets.",
        "books": [
            1,
            21
        ]
    },
    {
        "id": 2216,
        "name": "Tryon",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_tryon",
        "monster_origin": "normal",
        "description": "Tryon is the result of a bad experiment that involved a chicken, a dragon, and a centipede. It doesn\u2019t sound like a powerful combination, but you\u2019ll reconsider its danger when you have fire coming at you from three angles at a time.",
        "books": [
            1
        ]
    },
    {
        "id": 2217,
        "name": "The Ringer",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_the_ringer",
        "monster_origin": "normal",
        "description": "Ding, dong, your time has come. Ding, dong, you\u2019ve been warned. Ding, dong, The Ringer is here. Ding, dong, now you\u2019ll disappear.",
        "books": [
            5,
            11,
            92
        ]
    },
    {
        "id": 2218,
        "name": "Eggknock",
        "attributes": [
            "d",
            "e"
        ],
        "rarity": 3,
        "img_name": "dark_earth_eggknock",
        "monster_origin": "normal",
        "description": "Eggknocks are little germs that make Easter eggs their homes. As they grow big, the eggs become their shields and they can be really hard to exterminate.",
        "books": [
            5,
            159
        ]
    },
    {
        "id": 2219,
        "name": "Dr Viktor",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_dr_viktor",
        "monster_origin": "normal",
        "description": "Dr. Viktor wanted to test his inventions and experiments on other monsters, but no one wanted to be the guinea pig of a clearly mad scientist, so he had no other choice but to experiment on himself. The result was... monstrous.",
        "books": [
            8
        ]
    },
    {
        "id": 2220,
        "name": "Gullin",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_gullin",
        "monster_origin": "normal",
        "description": "His name is Gullin, but he's known as \"King of the Swill\". He earned his title by commanding an army of pigs. Even though he's quite disgusting, he doesn't mind because he values his strength above all else.",
        "books": [
            102,
            132
        ]
    },
    {
        "id": 2221,
        "name": "Vanoss",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_vanoss",
        "monster_origin": "normal",
        "description": "This Canadian owl-like monster loves to get all his adventures on film and then post them on HooTube. His videos are pretty impressive, so his enemies fear him and girls love him!",
        "books": [
            12,
            15
        ]
    },
    {
        "id": 2222,
        "name": "Dracontium",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_dracontium",
        "monster_origin": "normal",
        "description": "Dracontium is the most effective dragon guard for captive princesses. He has 23 under his surveillance! Lots of knights try to save those princesses on a daily basis, so Dracontium has roasted knights for dinner also on a daily basis.",
        "books": [
            1
        ]
    },
    {
        "id": 2223,
        "name": "Captain Legend",
        "attributes": [
            "e",
            "t"
        ],
        "rarity": 4,
        "img_name": "thunder_earth_captain_legends",
        "monster_origin": "normal",
        "description": "Rocks have never before had such a sense of justice! This is Captain Legends: tough, strong, severe, but also honorable. A must-have in the monster superhero collection.",
        "books": [
            12,
            75
        ]
    },
    {
        "id": 2224,
        "name": "General Holter",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_holter",
        "monster_origin": "team_wars",
        "description": "The general of the Metal troops is half living creature, half armored tank. He's not only a great strategist, but also the best soldier on the battlefield as he's a weapon himself.",
        "books": [
            6,
            11,
            14,
            121
        ]
    },
    {
        "id": 2225,
        "name": "Tyros",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_tyros",
        "monster_origin": "normal",
        "description": "Every 1000 years, the Fire elemental spirit called Tyros comes to Monster Legends and its power is materialized into one pure creature. This time, Tyros has chosen a Legendary tiger, which has become a divine creature.",
        "books": [
            5,
            104,
            132
        ]
    },
    {
        "id": 2226,
        "name": "Avaast",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 4,
        "img_name": "water_earth_avaast",
        "monster_origin": "normal",
        "description": "This giant ocean creature wanted to be a pirate, but he was born in the wrong place: under the sea! Despite this, he made his dream come true by himself and built a pirate ship on his back. He\u2019s the captain and his crew is formed by crabs and seagulls!",
        "books": [
            4
        ]
    },
    {
        "id": 2227,
        "name": "Will \"Razor Face\"",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_will_razor_face",
        "monster_origin": "normal",
        "description": "There was a chest that was known to be cursed, but a greedy pirate called Will decided to open it anyway, only to confirm that it was cursed. So cursed, in fact, that it killed him. Now he's only a skeleton, but he refuses to let go of the chest that took his life away.",
        "books": [
            4,
            8
        ]
    },
    {
        "id": 2228,
        "name": "Commander Alvid",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_commander_alvid",
        "monster_origin": "normal",
        "description": "Commander Alvid was the first female pirate captain, back in 1815. Now she's back as a ghost, but this time she cannot die and is not so easily defeated. She commands a crew of fierce female pirates feared in the Caribbean.",
        "books": [
            2,
            4,
            7
        ]
    },
    {
        "id": 2229,
        "name": "Anaitis",
        "attributes": [
            "l",
            "w"
        ],
        "rarity": 4,
        "img_name": "light_water_mermaid",
        "monster_origin": "normal",
        "description": "This mermaid is very different to the ones found in fairy tales. She's not charming, she has a terrible voice and she's really bad-tempered. Try to avoid running into Anaitis on a Monday morning.",
        "books": [
            4,
            7,
            155
        ]
    },
    {
        "id": 2230,
        "name": "Rorcal",
        "attributes": [
            "w",
            "d"
        ],
        "rarity": 4,
        "img_name": "legendary_water_rorcal",
        "monster_origin": "normal",
        "description": "Do you see what happens when you place nuclear labs near the coast? Sea animals mutate into monsters! This used to be a normal killer whale. Even though it's no longer a whale, it's still a deadly killer.",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2231,
        "name": "Lotan",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_lotan",
        "monster_origin": "normal",
        "description": "The Greek gods sunk Atlantis to punish Atlanteans for their arrogance, but they didn't do it on their own - they sent Lotan to do their dirty work. After sinking the island he stayed there and, for millennia, has been in control of the fallen empire of Atlantis.",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2232,
        "name": "Nidaria",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_nidaria",
        "monster_origin": "normal",
        "description": "Nidaria is a very well respected spirit in the underwater world. She provides guidance to those who get lost in the immense ocean and defends all injured water monsters.",
        "books": [
            4,
            7,
            154
        ]
    },
    {
        "id": 2233,
        "name": "Mommy",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_mommy",
        "monster_origin": "normal",
        "description": "Don\u2019t lie to Mommy, because Mommy knows where you\u2019ve been, yes she does! You\u2019ve been hanging out with those monster friends Mommy doesn\u2019t like, so... guess what? You\u2019re grounded! You\u2019ll thank Mommy one day\u2026",
        "books": [
            7,
            13,
            142
        ]
    },
    {
        "id": 2234,
        "name": "Blob",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_blob",
        "monster_origin": "normal",
        "description": "Wet and dangerous! This mass of water has the strength of a thousand seas and the resiliency of a rubber band. When Blob gets angry, tsunamis happen. Splash! You\u2019re beaten.",
        "books": [
            4,
            133,
            154
        ]
    },
    {
        "id": 2235,
        "name": "Valgar the Pure",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_valgar",
        "monster_origin": "vip",
        "description": "Valgar is the last remaining member of a strong Legendary race of monsters that was extinguished millennia ago.  And how, you may wonder, did he survive so much longer than the rest? Because he\u2019s filled with light \u2014 a light he uses not to conquer, but to protect.",
        "books": [
            10,
            15,
            62,
            132,
            131
        ]
    },
    {
        "id": 2236,
        "name": "Kulkan",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_kulkan",
        "monster_origin": "normal",
        "description": "Kulkan was rejected by the other reptiles because of his wings so, to prove that he was better than all of them, he flew up to the sun and then dived into the sea, causing an earthquake. Now all reptiles fear him.",
        "books": [
            3,
            10,
            92
        ]
    },
    {
        "id": 2237,
        "name": "Fenrir",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_fenrir",
        "monster_origin": "normal",
        "description": "Being the son of a demoniac god and a giantess, Fenrir is feared by everyone, even the norse deities, who know that nothing good can come from this terribly strong creature.",
        "books": [
            11,
            132,
            162
        ]
    },
    {
        "id": 2238,
        "name": "Brontes",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_brontes",
        "monster_origin": "normal",
        "description": "Brontes thinks he's special and superior for being the only three-eyed cyclops. The thing is that, at least in this case, more eyes doesn't mean more brains. He is a brute with uncontrollable physical strength.",
        "books": [
            10,
            92
        ]
    },
    {
        "id": 2239,
        "name": "Fenix",
        "attributes": [
            "f",
            "m"
        ],
        "rarity": 4,
        "img_name": "legendary_fire_fenix",
        "monster_origin": "normal",
        "description": "Fenix has existed in the magical world for very long. He was the first creature to be able to resurrect after a defeat in battle. He is also an advisor even for the wisest monsters.",
        "books": [
            2,
            3,
            133,
            160
        ]
    },
    {
        "id": 2240,
        "name": "Shakti",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_shakti",
        "monster_origin": "normal",
        "description": "Shakti is also known as \u201cThe Preserver\u201d. He appears whenever an innocent monster is in danger. It is said that Shakti has sworn to defeat all Dark monsters and, when he does, he will leave this world riding a white horse. ",
        "books": [
            10,
            52
        ]
    },
    {
        "id": 2241,
        "name": "Griffin",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_griffin",
        "monster_origin": "normal",
        "description": "Some say that Griffin is the king of all creatures, because he has the sight and drive of an eagle combined with the fury and the intelligence of a lion. He also has his own qualities, like a majestic pose and divine powers.",
        "books": [
            3,
            160
        ]
    },
    {
        "id": 2242,
        "name": "General Nishant",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_general_nishant",
        "monster_origin": "team_wars",
        "description": "The Dark troops need a General that is the darkest monster of them all. Nishant is that monster. He is toxic and his very touch can infect his enemies and consume them to death.",
        "books": [
            3,
            11,
            14,
            105,
            131
        ]
    },
    {
        "id": 2243,
        "name": "Zyla the Faithful",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_zyla_the_faithful",
        "monster_origin": "vip",
        "description": "Zyla used to be innocent, she believed in a world of love and happiness, but as she grew up, she learnt she needed to fight her way through the world. Now she\u2019s an experienced warrior, but she still believes she\u2019ll be able to find happiness someday.",
        "books": [
            7,
            11,
            15,
            105
        ]
    },
    {
        "id": 2244,
        "name": "Violet",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_violet",
        "monster_origin": "normal",
        "description": "Violet makes monsters lose their minds and hurt themselves. The only one she wouldn't hurt is Galante, her true love and partner in crime. Together they are the Bonnie and Clyde of the Monster World.",
        "books": [
            7,
            13,
            77
        ]
    },
    {
        "id": 2245,
        "name": "D.A.D. Unit",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_dad",
        "monster_origin": "normal",
        "description": "The Discipline and Authority Distribution (or D.A.D.) Unit is a robotic assistant built to help monsters all around the world take care of their offspring. Not even the most enraged kid can escape the domination of the D.A.D. Unit.",
        "books": [
            6,
            13,
            119
        ]
    },
    {
        "id": 2246,
        "name": "Erebus",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_erebus",
        "monster_origin": "normal",
        "description": "Also known as \u201cThe Player\u201d, Erebus is idolized by all dirty criminals. He\u2019s a master of foul play both in casinos and the arena. Honor and fairness are for losers.",
        "books": [
            5,
            77
        ]
    },
    {
        "id": 2247,
        "name": "Hasai",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_hasai",
        "monster_origin": "normal",
        "description": "Hasai used to be a ferocious golem, but then he became a monk and got his fury under control. Now he lives peacefully alone in the mountains, away from everyone, but he still has his golem strength and his monk wisdom.",
        "books": [
            9,
            133,
            162
        ]
    },
    {
        "id": 2248,
        "name": "Osteoclast",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_osteoclast",
        "monster_origin": "normal",
        "description": "Defeating Osteoclast isn't an easy task because when you have no flesh, there's less of you to hurt. If you're looking for a resilient monster, this is your guy!",
        "books": [
            8,
            11,
            53
        ]
    },
    {
        "id": 2249,
        "name": "Primigenius",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 4,
        "img_name": "earth_nature_primigenius",
        "monster_origin": "normal",
        "description": "Primigenius reigned over the Ancient Monster World until Lord Mammoth and the Mammoth Men slaughtered his race. Now that Lord Mammoth is the only remaining Mammoth Man, Primigenius wants to finish him off once and forever. ",
        "books": [
            8
        ]
    },
    {
        "id": 2250,
        "name": "Trilops",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_trilops",
        "monster_origin": "normal",
        "description": "Trilops belongs to an extinct species, but some scientists found his fossil and brought him back to life. After training him in battle, he is now tough, agile and ready to fight.",
        "books": [
            1
        ]
    },
    {
        "id": 2251,
        "name": "Mechamancer",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "metal_magic_mechamancer",
        "monster_origin": "normal",
        "description": "Mechamancer is a robotic wizard. He\u2019s able to use his magical powers to conjure powerful spells but also to create magnificent robotic beings from scraps.",
        "books": [
            6,
            120
        ]
    },
    {
        "id": 2252,
        "name": "Nautilus-1",
        "attributes": [
            "mt",
            "w"
        ],
        "rarity": 4,
        "img_name": "epic_water_metal_nautilus",
        "monster_origin": "normal",
        "description": "Nautilus-1 is the leader of a fleet of mechanical sea creatures deployed to protect the oceans against any possible menace. Watch out, fishermen!",
        "books": [
            4,
            6,
            119
        ]
    },
    {
        "id": 2253,
        "name": "Octex",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_octex",
        "monster_origin": "normal",
        "description": "Octex is an elite soldier in the army of Octalia, the most feared empire of the galaxy. Octalians usually cover their faces because their appearance is considered ugly by the rest of the galaxy, but Octex shows himself proudly.",
        "books": [
            11,
            121,
            131
        ]
    },
    {
        "id": 2254,
        "name": "Pyrotech",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 4,
        "img_name": "fire_metal_pyrotech",
        "monster_origin": "normal",
        "description": "There's nothing wrong with fireworks if they're handled responsibly... but Pyrotech is all about recklessness. He loves to light them all at the same time and just watch them explode! His favorite day of the year? The 4th of July.",
        "books": [
            12,
            159
        ]
    },
    {
        "id": 2255,
        "name": "Singularis",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_singularis",
        "monster_origin": "normal",
        "description": "Singularis was born in the middle of the universe and when he moved for the first time, he left behind a massive black hole. Since then, that black hole has been devouring all the energy around it, empowering Singularis no matter where he is.",
        "books": [
            2,
            121,
            133
        ]
    },
    {
        "id": 2256,
        "name": "Stinger S1",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_stinger",
        "monster_origin": "normal",
        "description": "Did you think that treading on a bug was an infallible way to kill it? Well, that won't work with Stinger S1. This metal scorpion is as tough as an armored tank! Be wary of its tail... Stinger S1 is merciless.",
        "books": [
            6,
            119
        ]
    },
    {
        "id": 2257,
        "name": "Darmith's Pet",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "fire_earth_darmiths_pet",
        "monster_origin": "team_wars",
        "description": "This little creature is a key member in the Fire troops. He tells General Darmith which monsters are doing a good job and which are only receiving War Coins without fighting. Lazy soldiers suffer Darmith's wrath.",
        "books": [
            1,
            3,
            14,
            11,
            92
        ]
    },
    {
        "id": 2258,
        "name": "Nemestriborg",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 4,
        "img_name": "nature_metal_nemestriborg",
        "monster_origin": "normal",
        "description": "Nemestriborg is a deadly machine. He hides in the woods, so well camouflaged among the trees, that you can't tell if it's really a cyborg. It only takes two seconds for him to get into battle mode.",
        "books": [
            6,
            119
        ]
    },
    {
        "id": 2259,
        "name": "Tempest",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_tempest",
        "monster_origin": "normal",
        "description": "It is hard to catch Tempest on a good day, since this dark cloud is angry all the time. Whenever you try to have a pleasant conversation with him, you just get big fat lightning bolts for an answer.",
        "books": [
            2,
            133,
            162
        ]
    },
    {
        "id": 2260,
        "name": "Frostbite",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_frostbite",
        "monster_origin": "normal",
        "description": "Each time Frostbite breathes, he causes a blizzard. If you see him sneezing, then stay out of his way; the icy blast will freeze you solid.  ",
        "books": [
            9,
            21,
            133,
            162
        ]
    },
    {
        "id": 2261,
        "name": "Mudflow",
        "attributes": [
            "e",
            "w"
        ],
        "rarity": 3,
        "img_name": "earth_water_mudflow",
        "monster_origin": "normal",
        "description": "Mudflow is the head druid in Monster Legends\u2019 biggest swamp. He\u2019s an expert on spells and potions, but also a great percussionist, he can play rain call music like no other.",
        "books": [
            102
        ]
    },
    {
        "id": 2262,
        "name": "Tephra",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_tephra",
        "monster_origin": "normal",
        "description": "It's very hot in here, isn't it? This could be because: A) It's summer; B) Tephra is near; or C) Something is burning in your kitchen, call the firefighters! ",
        "books": [
            5,
            104,
            133
        ]
    },
    {
        "id": 2263,
        "name": "Osur the Brave",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_osur_the_brave",
        "monster_origin": "vip",
        "description": "Osur is one of the bravest, most loyal monsters you'll ever meet. He is an experienced soldier with hundreds of battles behind him but that hasn't made him a cold killer, he's always up for a long cozy hug!",
        "books": [
            10,
            15,
            52,
            132,
            131
        ]
    },
    {
        "id": 2264,
        "name": "Discobolus",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_discobolus",
        "monster_origin": "normal",
        "description": "This statue was unearthed at an ancient stadium in Olympia. They decided to put it in a museum, but after just one night there, the statue came to life and broke out! If you are to master Discobolus, don't try to lock him up!",
        "books": [
            10,
            160
        ]
    },
    {
        "id": 2265,
        "name": "Jabaline",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_jabaline",
        "monster_origin": "normal",
        "description": "Jabaline has the intelligence and tactics of a Greek queen and the agility of the best athlete. Dodging her spear isn\u2019t something you can easily do, because it is directed by Ares, the god of war.",
        "books": [
            11,
            105,
            131
        ]
    },
    {
        "id": 2266,
        "name": "Atlas",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_atlas",
        "monster_origin": "normal",
        "description": "After he broke the bond between the Heavens and Earth, Atlas was condemned to carry a sphere representing the World. If he ever tries to let go of the sphere, the Earth will open up and devour him.",
        "books": [
            5,
            131,
            160
        ]
    },
    {
        "id": 2267,
        "name": "Mercurius",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_mercurius",
        "monster_origin": "normal",
        "description": "Mercurius is known for his speed and eloquence. A seasoned globetrotter and poet, he is usually entrusted with urgent communications. Be wary of his trickery though: he will do anything to get his way!",
        "books": [
            12,
            132,
            160
        ]
    },
    {
        "id": 2268,
        "name": "Callisto",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 4,
        "img_name": "legendary_earth_fire_callisto",
        "monster_origin": "normal",
        "description": "Callisto is one of the most ferocious soldiers in Layth's army. He likes being in the front line, with only his shield standing between him and the enemy.",
        "books": [
            11,
            132,
            160
        ]
    },
    {
        "id": 2269,
        "name": "Ape-X",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legrendary_nature_ape-x",
        "monster_origin": "normal",
        "description": "This gorilla is one of the most spectacular cases of animals reworked into monsters: He was genetically modified and put into a high performance war center. Now he\u2019s a warrior ready to face any war inside the dense jungle.",
        "books": [
            10,
            119,
            132
        ]
    },
    {
        "id": 2270,
        "name": "Kassia",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_kassia",
        "monster_origin": "normal",
        "description": "Monsters come to Kassia when they're at their most desperate. Her rituals are famous for producing the most brilliant white flames, and helping monsters who have lost their way.",
        "books": [
            7,
            9,
            91
        ]
    },
    {
        "id": 2271,
        "name": "Nishant's Pet",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_nishants_pet",
        "monster_origin": "team_wars",
        "description": "Creepy as hell, but General Nishant wouldn't have him any other way. Even the darkest creatures like Lilysha shiver a little when this pet flaps its wings near them.",
        "books": [
            5,
            11,
            14,
            105
        ]
    },
    {
        "id": 2272,
        "name": "Hiroim the Tenacious",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_hiroim_the_tenacious",
        "monster_origin": "vip",
        "description": "Hiroim has the resistance of a fortress: Even when he's the last one standing against an entire army, he will never give up, and he will never stop until the battle is won.",
        "books": [
            15,
            103,
            133,
            131
        ]
    },
    {
        "id": 2273,
        "name": "Pa'Lhax",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_palhax",
        "monster_origin": "normal",
        "description": "Pa'Lhax is the first known case of an alien with rabies. He's been kept in a high-security facility for years, but his strength is such that he has broken out, infecting all the guards in his path. Be extremely careful with him.",
        "books": [
            11,
            122
        ]
    },
    {
        "id": 2274,
        "name": "Thetys' Pet",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_thetys_pet",
        "monster_origin": "team_wars",
        "description": "This seahorse is quiet but intelligent. It always knows exactly what its General wants. When Thetys is going to lead a big attack with her Water troops, she likes to ride her pet as a sign of power.",
        "books": [
            4,
            14,
            155
        ]
    },
    {
        "id": 2275,
        "name": "Learnean",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_learnean",
        "monster_origin": "normal",
        "description": "Having a Learnean is like having an entire team of monsters bundled into one! This creature's three heads can perform Nature, Fire and Water attacks respectively.",
        "books": [
            1,
            21,
            30,
            160
        ]
    },
    {
        "id": 2276,
        "name": "Hedgy",
        "attributes": [
            "l",
            "m"
        ],
        "rarity": 3,
        "img_name": "light_magic_hedgy",
        "monster_origin": "normal",
        "description": "Hedgy is a futuristic wizard who loves racing through unknown lands and collecting treasures. He\u2019s super agile, so his enemies have a hard time reaching him with their attacks.",
        "books": [
            6,
            119
        ]
    },
    {
        "id": 2277,
        "name": "Pandalfio",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 4,
        "img_name": "legendary_nature_pandalfio",
        "monster_origin": "normal",
        "description": "Pandalfio used to do the plumbing around the floating islands, but after years of seeing other monsters returning from war as heroes, he has decided that he wants to go to battle too and become the most respected panda in the game!",
        "books": [
            6,
            132,
            131,
            142
        ]
    },
    {
        "id": 2278,
        "name": "Super Dan",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_superdan",
        "monster_origin": "normal",
        "description": "Super Dan is a unique humanoid robot that has unlimited power. He uses energy to destroy enemies and having him in your army will make your opponent weak and frightened.",
        "books": [
            6,
            120
        ]
    },
    {
        "id": 2279,
        "name": "Glitch",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "dark_light_glitch",
        "monster_origin": "normal",
        "description": "Glitch is an accident, something that should never have happened. He was designed as an epic warrior but instead, this... \u201cthing\u201d came out. Feeling frustrated and rejected, Glitch ran away from his game and swore to break every perfect video game character he could find.",
        "books": [
            2,
            120,
            133
        ]
    },
    {
        "id": 2280,
        "name": "Kaih the Eradicator",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_kaih_the_eradicator",
        "monster_origin": "vip",
        "description": "To Kaih, what is corrupted cannot be fixed, and so is better burnt to the ground. That's the concept of justice that the Eradicator has. The purifying fire of his sword will extinguish all evil in the world.",
        "books": [
            5,
            11,
            15,
            104,
            133
        ]
    },
    {
        "id": 2281,
        "name": "Harusami",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_harusami",
        "monster_origin": "normal",
        "description": "Harusami was the best samurai in Ancient Japan. He was so skillful that the Lord of Darkness recruited him for his army. When the Lord of Clarity found out, he had Harusami killed for betrayal. Now the samurai is back and wants revenge.",
        "books": [
            11,
            8,
            61,
            131
        ]
    },
    {
        "id": 2282,
        "name": "Arcade",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_arcade",
        "monster_origin": "normal",
        "description": "How can you defeat a machine that stores so much information about games? Arcade is a master tactician, having studied the best pro players for years. If you plan on beating him in a fight, be prepared to think outside the box!",
        "books": [
            6
        ]
    },
    {
        "id": 2283,
        "name": "Atum's Pet",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "metal_earth_atum_pet",
        "monster_origin": "team_wars",
        "description": "Generals have good days and bad days just like everybody else and when Atum has a bad day, it's up to his pet to lift his spirit. This isn't this little guy's only mission though, he's also a skilled warrior in battle! ",
        "books": [
            10,
            14,
            103,
            133
        ]
    },
    {
        "id": 2284,
        "name": "Lau Lau",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_laulau",
        "monster_origin": "normal",
        "description": "The Northern Winds have brought adventurous Lau Lau to Monster Legends, where she and her cat, Kenzo, are looking for a new thrill. Her speed will be great for your battles and her brightness will light up your days in the floating islands.",
        "books": [
            7,
            132,
            142
        ]
    },
    {
        "id": 2286,
        "name": "Ra'Zhul",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_razhul",
        "monster_origin": "normal",
        "description": "The time for goodbye has come, your soul is ready. Embrace your destiny, you are dead already. After today, you'll be just a skull. Accept your fate, come to Ra'Zhul.",
        "books": [
            8,
            11,
            53
        ]
    },
    {
        "id": 2288,
        "name": "Scryb",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_scryb",
        "monster_origin": "normal",
        "description": "Scryb was born of the worst criminal minds. Most of his opponents in battle end up begging to be defeated and screaming \"Just put an end to my suffering, please!\"",
        "books": [
            2,
            8,
            53
        ]
    },
    {
        "id": 2289,
        "name": "Mr. Flaky",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_mr_flaky",
        "monster_origin": "normal",
        "description": "Do you believe in Magic? This illusionist has many tricks up his sleeve and under his hat, but his favorite is the one in which he takes all of his enemies\u2019 life away.",
        "books": [
            8
        ]
    },
    {
        "id": 2290,
        "name": "Incognita",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_incognita",
        "monster_origin": "normal",
        "description": "It is known that Incognita can read destiny, but some monsters, after observing her for years, have come to the conclusion that it is she who writes it.",
        "books": [
            7,
            60
        ]
    },
    {
        "id": 2291,
        "name": "Rador",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_rador",
        "monster_origin": "normal",
        "description": "Rador, also known as The Biker of the Apocalypse, was a troublemaker when he was alive and is a troublemaker now that he\u2019s only fire and bones. Keep him away from your Nature monsters if you don\u2019t want them wiped out!",
        "books": [
            5,
            8,
            131
        ]
    },
    {
        "id": 2292,
        "name": "The Sentinel",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_the_sentinel",
        "monster_origin": "normal",
        "description": "The Sentinel has been sent by Pinzia, an advanced civilization in a faraway galaxy, to establish first contact with the monsters. It is his mission to observe and record their every activity.",
        "books": [
            6,
            120
        ]
    },
    {
        "id": 2293,
        "name": "Demise",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_demise",
        "monster_origin": "normal",
        "description": "Demise used to live in the Land of the Undead with her family. She had never known anything else, until one day, she felt the sunlight for the first time. She then ran away to the land of the living with her pet skull Manuel and became the protector of its inhabitants.",
        "books": [
            5,
            7
        ]
    },
    {
        "id": 2294,
        "name": "Joppers",
        "attributes": [
            "d",
            "e"
        ],
        "rarity": 4,
        "img_name": "legendary_earth_dark_joppers",
        "monster_origin": "normal",
        "description": "You will find Joppers wandering around sacred places at night. She attracts her victims with incense and candles and when they\u2019re near, they get trapped in her wild hair. She has only one weakness: If you take away her medal, you\u2019ll destroy her.",
        "books": [
            7
        ]
    },
    {
        "id": 2295,
        "name": "Hayman",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_hayman",
        "monster_origin": "halloween_exc",
        "description": "Harvest is the time of the year that farmers fear the most, because that is when the Hayman comes to visit. He slips into their barns and waits for the right moment to enter their homes, before cursing them with eternal bad luck.",
        "books": [
            8,
            131
        ]
    },
    {
        "id": 2296,
        "name": "Gretchen",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_gretchen",
        "monster_origin": "normal",
        "description": "Gretchen is adorable and smells like chocolate, that is why she has no trouble luring baby monsters into her house...but the moment they step in, she switches the oven on! She loves having roast baby monster for dinner.",
        "books": [
            7
        ]
    },
    {
        "id": 2297,
        "name": "Fampira",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_fampira",
        "monster_origin": "normal",
        "description": "Count Vlad was outraged when his youngest daughter Fampira told him she was bored of Monstelvania and was leaving to follow Metalh\u00ebad\u2019s band on their Underworld Tour. Now she\u2019s friends with some of the baddest monsters around.",
        "books": [
            7,
            8,
            13
        ]
    },
    {
        "id": 2298,
        "name": "Shallinar",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_shallinar",
        "monster_origin": "normal",
        "description": "After discovering it was Fire she could commune with instead of Nature, Shallinar was cast out by her tribe's elders. Though shunned by her friends and family, she still spends her time calming raging infernos to protect her beloved forest.",
        "books": [
            7
        ]
    },
    {
        "id": 2299,
        "name": "Plymouth",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_plymouth",
        "monster_origin": "normal",
        "description": "Plymouth loves turkey for lunch, so some years ago he made himself a costume so that he could approach the birds discreetly. It worked and, over the years he got huge. Now he\u2019s so fat that his costume looks ridiculous on him and he can\u2019t fool the turkeys anymore.",
        "books": [
            9,
            92
        ]
    },
    {
        "id": 2300,
        "name": "Monster D.vice",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_dvice",
        "monster_origin": "normal",
        "description": "It\u2019s happened: Technology has become smarter than monsters. This device can break any opponent's plan by predicting all their possible attack orders and then blocking them. Switch the Monster D.vice off or lose.",
        "books": [
            6
        ]
    },
    {
        "id": 2301,
        "name": "Holter's Pet",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_holters_pet",
        "monster_origin": "team_wars",
        "description": "Holter took a nice fluffy creature and turned him into a lethal monster. After giving him a metal vest and a giant crossbow, he sent him to battle. That was the beginning of this Legendary warrior.",
        "books": [
            9,
            11,
            14,
            121,
            131
        ]
    },
    {
        "id": 2302,
        "name": "Monky",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_monky",
        "monster_origin": "normal",
        "description": "This monk is one of the most ancient inhabitants of Mount Annapurna. He has lived there in recluse for centuries but he comes out to defend his home. He may not go into many battles but he has all the skills he needs to always win.",
        "books": [
            10,
            52,
            132,
            131
        ]
    },
    {
        "id": 2303,
        "name": "Totem",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_totem",
        "monster_origin": "normal",
        "description": "Even the strongest monsters need protection in their battles. Whenever they feel threatened, they bring Totem into their teams. He isn\u2019t a fierce beast, but he protects his teammates better than anyone else.",
        "books": [
            2,
            8
        ]
    },
    {
        "id": 2304,
        "name": "Growler",
        "attributes": [
            "e",
            "d"
        ],
        "rarity": 4,
        "img_name": "epic_earth_dark_growler",
        "monster_origin": "normal",
        "description": "The body of this mercenary has mutated several times over the years due to continuous exposure to radiation. Growler is a well-known menace in the deserted wastelands, where he feeds on unsuspecting travelers.",
        "books": [
            8,
            11,
            78
        ]
    },
    {
        "id": 2305,
        "name": "Rexx",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 4,
        "img_name": "epic_metal_thunder_rexx",
        "monster_origin": "normal",
        "description": "Rexx is the fierce pet of Nexor and Roxen. He is nasty and disobedient, so he doesn't always wait for his masters to order him to attack. He just lets his tentacled snout devour at will.",
        "books": [
            13,
            78,
            132
        ]
    },
    {
        "id": 2306,
        "name": "Nexor",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_nexor",
        "monster_origin": "normal",
        "description": "Along with his twin brother Roxen, Nexor Cox leads a gang of looters in the Post-Apocalyptic era. He enjoys experimenting with trash and electricity when he builds his weapons, which usually turn out to be quite unsafe, not only for his enemies, but also for him.",
        "books": [
            11,
            13,
            78,
            131
        ]
    },
    {
        "id": 2307,
        "name": "Roxen",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_roxencox",
        "monster_origin": "normal",
        "description": "Along with his twin brother Nexor, Roxen Cox leads a gang of looters in the Post-Apocalyptic era. He likes building his weapons out of pieces of industrial machinery. If the pieces are stained with radioactive fluids, he likes them even better.",
        "books": [
            11,
            13,
            131
        ]
    },
    {
        "id": 2308,
        "name": "M-2 WYVERN",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_m5wyvern",
        "monster_origin": "normal",
        "description": "Global Mech Ltd. designed the robot, Wyvern - Model 2, to spy, attack and exterminate. It looked amazing and it was ready to be tested, but something went wrong; they lost control of it and it could be lethal unless someone manages to disconnect its circuit. ",
        "books": [
            1,
            6,
            121
        ]
    },
    {
        "id": 2309,
        "name": "Goran",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_goran",
        "monster_origin": "normal",
        "description": "Flying isn\u2019t this massive creature\u2019s strong suit. Goran is more comfortable walking and making the Earth tremble. That way his enemies know he\u2019s coming from a distance and, if they\u2019re smart, they run away.",
        "books": [
            1,
            92
        ]
    },
    {
        "id": 2310,
        "name": "Frostwrath",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_frostwrath",
        "monster_origin": "normal",
        "description": "Science cannot explain the phenomenon that is Frostwrath: He is made entirely of ice on the outside, but his core is one hundred percent blue fire!",
        "books": [
            1,
            9,
            133,
            162
        ]
    },
    {
        "id": 2311,
        "name": "Daganth",
        "attributes": [
            "l",
            "d"
        ],
        "rarity": 4,
        "img_name": "epic_light_dark_daganth",
        "monster_origin": "normal",
        "description": "The never ending clash between Light and Darkness emits an incalculable amount of energy. Daganth was born from that energy and he is the living symbol of the power that the two sides have when they collide.",
        "books": [
            1,
            3,
            105
        ]
    },
    {
        "id": 2312,
        "name": "Drekk",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_drekk",
        "monster_origin": "normal",
        "description": "This peaceful dragon is part of the forest. His incredible healing and protective powers are famous! If you want to get an extra bottle of his magical sap, bribe him with pancakes.",
        "books": [
            1,
            102
        ]
    },
    {
        "id": 2313,
        "name": "Nox the Codemned",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_nox_the_condemned",
        "monster_origin": "vip",
        "description": "The captain of the Army of the Soulless chooses his victims carefully, steals their souls with a quick swing of his scythe and condemns them to a life of emptiness.",
        "books": [
            11,
            15,
            8,
            53,
            131
        ]
    },
    {
        "id": 2315,
        "name": "Terroriser",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_terroriser",
        "monster_origin": "normal",
        "description": "A monster so impressive that all his opponents look like choir boys next to him. He\u2019s a machine of killing, a governor of assassins. He\u2019s a Terroriser.",
        "books": [
            6,
            15
        ]
    },
    {
        "id": 2316,
        "name": "Sylvannis",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_sylvannis",
        "monster_origin": "normal",
        "description": "When a species of horrible monsters came to destroy the Sylvannis Forest in order to build a parking lot, all the trees came to life, pulled themselves from the ground and crowded together, producing a huge ball of energy. Now Sylvannis is not a forest, but a powerful monster.",
        "books": [
            2,
            102
        ]
    },
    {
        "id": 2317,
        "name": "H2O Delirious",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_h2o_delirious",
        "monster_origin": "normal",
        "description": "Delirious, out of his mind, brutal, relentless. This assassin will even kill his friends if necessary in order to get where he\u2019s going.",
        "books": [
            15
        ]
    },
    {
        "id": 2318,
        "name": "Ahran",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ahran",
        "monster_origin": "normal",
        "description": "This knight has the most old-fashioned gallantry but his equipment and armor are all high-tech. He is a warrior of Light, devoted to protecting the defenseless and the innocent.",
        "books": [
            10,
            62,
            131
        ]
    },
    {
        "id": 2319,
        "name": "Hercule",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_hercule",
        "monster_origin": "normal",
        "description": "Ladies and gentlemen! Come and see this one-man show! The incredible Hercule has the strength of a thousand monsters, the class of a sir and the voice of an opera tenor!",
        "books": [
            12,
            30,
            131,
            142
        ]
    },
    {
        "id": 2320,
        "name": "Uther The Valiant",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_oenus_the_valiant",
        "monster_origin": "vip",
        "description": "King Daeron's castle was being besieged by hordes of giant dark slugs. The slugs had almost overrun the castle when a robot appeared with his laser sword and defeated the overwhelming slug horde! King Daeron appointed him First Knight and had a gold suit of armor crafted for him.",
        "books": [
            10,
            15,
            120,
            131
        ]
    },
    {
        "id": 2321,
        "name": "Obsidiane",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_obsidiane",
        "monster_origin": "normal",
        "description": "Obsidiane was born thousands of years ago in the inside of a dune in the Middle East. From that moment until today, she has made it her job to find evildoers and bury them in sand.",
        "books": [
            7,
            160
        ]
    },
    {
        "id": 2322,
        "name": "Alce's Pet",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_alcespet",
        "monster_origin": "team_wars",
        "description": "The spirits of the forests wanted to thank General Alces for his priceless protection, so they gave him the best gift: A pet! This creature is perfect for the General \u2014 tough, aggressive and loyal!\n",
        "books": [
            10,
            14,
            102
        ]
    },
    {
        "id": 2323,
        "name": "Hoodini",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_hoodini",
        "monster_origin": "normal",
        "description": "Hoodini is very eccentric and his ways can be quite bizarre so, for example, if you make him angry he won\u2019t use his wand to curse you, but to hit you with it!",
        "books": [
            15
        ]
    },
    {
        "id": 2324,
        "name": "Wildcat",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_light_wildcat",
        "monster_origin": "normal",
        "description": "Wildcat loves exploring new worlds with his friends but, most of all, he loves driving cars off cliffs. He\u2019s a particular creature, this Wildcat.",
        "books": [
            15,
            132
        ]
    },
    {
        "id": 2325,
        "name": "Chill Bill",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "water_thunder_chillbill",
        "monster_origin": "normal",
        "description": "Bill is a veteran of the World Water War, where he commanded an army of Metanephrops. Now he\u2019s retired, but he still likes to look for trouble and play around with his water bazooka.",
        "books": [
            9,
            132
        ]
    },
    {
        "id": 2326,
        "name": "Furhem",
        "attributes": [
            "w",
            "e"
        ],
        "rarity": 4,
        "img_name": "water_earth_furhem",
        "monster_origin": "normal",
        "description": "Furhems are creatures from the north. They are vegetarian and during the winter they only eat cold flowers. They are very peaceful and usually help farmers out in the fields, but their incredible strength can be very dangerous if provoked.",
        "books": [
            9,
            162
        ]
    },
    {
        "id": 2327,
        "name": "Olafur",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_olafur",
        "monster_origin": "normal",
        "description": "Olafur lives in the high, frozen mountains of Scandinavia. Someone wrote a book about him, so he became very popular and started receiving visits every year around winter. He hates being so popular - that's why he decided to run away to this monster universe.",
        "books": [
            9,
            162
        ]
    },
    {
        "id": 2329,
        "name": "Leviana",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_leviana",
        "monster_origin": "normal",
        "description": "Leviana was born from the rage of a vengeful god after being betrayed by Nature monsters. To exact revenge, he sent this Fire creature to Monster Legends to exterminate them all.",
        "books": [
            3,
            7
        ]
    },
    {
        "id": 2330,
        "name": "Nanukk",
        "attributes": [
            "w",
            "t"
        ],
        "rarity": 3,
        "img_name": "rare_water_thunder_nanukk",
        "monster_origin": "normal",
        "description": "Surviving in the North Pole is an incessant struggle. There is a lack of resources and food for everyone, but Nanukk uses this problem to his advantage: he wakes up before everyone else, collects all the fish for himself, and then trades them for weapons and favors. ",
        "books": [
            4,
            9,
            162
        ]
    },
    {
        "id": 2331,
        "name": "Brynhilda",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_brynhilda",
        "monster_origin": "normal",
        "description": "Viking Queen Brynhilda was betrayed by the commander of her army at the time, Sphyrnus. As part of his plan to rule the world he trapped Brynhilda in a cage in the ocean, but during captivity she learned ancient water magic. Now she\u2019s back and stronger than ever.",
        "books": [
            7,
            9,
            10,
            162
        ]
    },
    {
        "id": 2332,
        "name": "Taiga",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_gudrod",
        "monster_origin": "normal",
        "description": "This experienced hunter uses stealth to surprise and kill foes more effectively. He used to be kind, but after losing his family to an enemy raid, his heart filled up with anger, and he can no longer distinguish friends from foes.",
        "books": [
            9,
            11,
            20,
            162
        ]
    },
    {
        "id": 2333,
        "name": "Uria's Pet",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_urias_pet",
        "monster_origin": "team_wars",
        "description": "Uria\u2019s Pet is a Thunder Spirit in solid metal armor. He is forever loyal, always following his master\u2019s commands without question. He is a true war dog!",
        "books": [
            2,
            10,
            14,
            162
        ]
    },
    {
        "id": 2334,
        "name": "Little Red Furry Cap",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_little_red_cap",
        "monster_origin": "normal",
        "description": "This cute little girl was once bitten by a wolf and she\u2019s been acting a bit weird ever since. Whenever she has a tantrum, she grows thick brown hair all over her body and starts howling! Her mom just can\u2019t get her under control anymore.",
        "books": [
            7,
            13
        ]
    },
    {
        "id": 2336,
        "name": "Mr. Scratch",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_mr_scratch",
        "monster_origin": "normal",
        "description": "There was an old man who wanted a son, but he couldn\u2019t have one, so he built one out of wood! He was only a puppet, so the man asked Mr. Flaky for help\u2026but the monster tricked him, stole his son, and conjured dark magic into him! Now Mr. Scratch is Mr. Flaky\u2019s ally!",
        "books": [
            6,
            13
        ]
    },
    {
        "id": 2337,
        "name": "Teashire",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "epic_dark_magic_teashire",
        "monster_origin": "normal",
        "description": "Monster Legends is a big universe and you can get lost in it sometimes. However, no matter how lost you are, don\u2019t ask Teashire for directions! He will always show you the way to his trap and you\u2019ll never find a way out of it!",
        "books": [
            5,
            11
        ]
    },
    {
        "id": 2338,
        "name": "Yndra",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_yndra",
        "monster_origin": "normal",
        "description": "You won\u2019t find a faster reptile in Monster Legends. Yndra\u2019s armor is fully charged with electricity and ready for war!",
        "books": [
            1,
            11,
            121,
            131
        ]
    },
    {
        "id": 2339,
        "name": "Lui Calibre",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_lui_calibre",
        "monster_origin": "normal",
        "description": "Don't get fooled by his squeaky voice, he's a hard hitter. Only gummy bears can distract him from his objective. Anyone who comes after him is dead meat!",
        "books": [
            15,
            132
        ]
    },
    {
        "id": 2341,
        "name": "Super Tomato",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_tomato",
        "monster_origin": "normal",
        "description": "It is said that whosoever takes a bite of this monster will become unstoppable. However, to this day, no one has been able to touch him, let alone take a bite! Thus the story remains a legend... Will you be the hero to devour Super Tomato?",
        "books": [
            12,
            91
        ]
    },
    {
        "id": 2342,
        "name": "Bright",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_bright",
        "monster_origin": "normal",
        "description": "Zodiac monsters from all over the world come to her for advice, but it isn\u2019t easy to find her - she\u2019s always on exotic adventures! Her wisdom is matched only by the power of her imagination.",
        "books": [
            7
        ]
    },
    {
        "id": 2343,
        "name": "Virtue",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_virtue",
        "monster_origin": "normal",
        "description": "Virtue has the might and fortitude to cause ripples throughout the galaxy, but it is his kindness that makes him special - he prefers to stand at the Celestial Gates not as a warrior, but as a watchful guardian.",
        "books": [
            10,
            132
        ]
    },
    {
        "id": 2344,
        "name": "Mystery",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_mystery",
        "monster_origin": "normal",
        "description": "Mystery lives in a sea of zodiac magic. When she\u2019s there alone, she creates a mind palace and uses waves of emotion to break into others' minds and manipulate them.",
        "books": [
            4
        ]
    },
    {
        "id": 2345,
        "name": "Passion",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_passion",
        "monster_origin": "normal",
        "description": "For Passion, war is not a job or a game - it\u2019s a way of life. Stampeding into battle with nothing but a bow and his unparalleled strength, he fearlessly tears through his enemies, be they mortals, kings or gods.",
        "books": [
            10,
            132
        ]
    },
    {
        "id": 2346,
        "name": "Ophiuchus",
        "attributes": [
            "n",
            "d"
        ],
        "rarity": 4,
        "img_name": "nature_dark_ophiuchus",
        "monster_origin": "normal",
        "description": "When Ophiuchus went against the destiny that Apollo had decided in an ancient war, the gods were infuriated and they sent a snake to kill him. With great skill, Ophiuchus charmed the snake and turned it into his best weapon.",
        "books": [
            5
        ]
    },
    {
        "id": 2347,
        "name": "Shannara's Pet",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_shannaras_pet",
        "monster_origin": "team_wars",
        "description": "This noble creature always sides with the weak, as her master General Shannara wants her to. Shannara's Pet relies on her speed to move fast around the battlefield. Her mystical horn allows her to cast blessings upon her allies.",
        "books": [
            2,
            14,
            91
        ]
    },
    {
        "id": 2348,
        "name": "Vano$$",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_vanoss",
        "monster_origin": "normal",
        "description": "Put your hands up for the gangsta member of the Hoo family! Vano$$ is in the house with endless rhymes, sick beats and a ton of gold and diamonds.",
        "books": [
            15
        ]
    },
    {
        "id": 2349,
        "name": "Sir Automatronicus",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_sir_automatronicus",
        "monster_origin": "normal",
        "description": "Kaih The Eradicator had his blacksmith build Sir Automatronicus to serve as his mechanical squire on his many conquests. This steam-powered machine may not be that agile, but when it hits, it can deal lots of damage.",
        "books": [
            6,
            104
        ]
    },
    {
        "id": 2350,
        "name": "Galante Jr",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_galantejr",
        "monster_origin": "normal",
        "description": "Galante Jr. has Violet's good looks and Galante's heartbreaker ways. As a result, nobody in high school can resist him. When he arrives on his motorcycle every morning, showing off his tattoos, all the girls sigh and all the boys hide.",
        "books": [
            13,
            77
        ]
    },
    {
        "id": 2351,
        "name": "Tesaday",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_tesaday",
        "monster_origin": "normal",
        "description": "Tesaday and VoltaiK used to be the fastest two-unit team, but VoltaiK, blinded by ambition, stole tricks from Tesaday and joined the big leagues, leaving his friend behind, humiliated and furious. After years of studying VoltaiK's flaws, Tesaday is ready for vengeance: Faster and stronger than ever.",
        "books": [
            2,
            103,
            133
        ]
    },
    {
        "id": 2352,
        "name": "Ingvar's Pet",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ingvars_pet",
        "monster_origin": "team_wars",
        "description": "Ingvar's Pet learnt from his general that he must never give up on a battle. When he's surrounded by enemies he becomes weaker, but he always finds the strength to charge his way out of the danger zone.",
        "books": [
            10,
            14,
            62,
            132
        ]
    },
    {
        "id": 2353,
        "name": "Gangsterosaurus",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_gangsterosaurus",
        "monster_origin": "normal",
        "description": "Gangsterosaurus is the boss of a mafia that controls the black market of Gems. Since his two best monsters on the ground (Galante and Violet) ran away together, he\u2019s doing the dirty work himself. He doesn\u2019t play games, so obey him or face your destiny.",
        "books": [
            1,
            13,
            77
        ]
    },
    {
        "id": 2354,
        "name": "MC Boss",
        "attributes": [
            "t",
            "e"
        ],
        "rarity": 4,
        "img_name": "legendary_thunder_mc_boss",
        "monster_origin": "normal",
        "description": "Also known as The Fresh Prince of the Dance Floor, MC Boss doesn\u2019t miss a beat. He always challenges his opponents to rap battles, but when he loses, he loses his ferocious temper and destroys anything that stands in his way!",
        "books": [
            1,
            142
        ]
    },
    {
        "id": 2355,
        "name": "Hiphopotamus",
        "attributes": [
            "l",
            "w"
        ],
        "rarity": 4,
        "img_name": "legendary_light_hiphopotamus",
        "monster_origin": "normal",
        "description": "Yo! HipHopotamus is flow incarnate. He brings the biggest, fattest rhymes and the best, most wonderful times. Put your hands in the air for the king of the river, his beats are loud and they make the audience quiver!",
        "books": [
            6,
            132,
            142
        ]
    },
    {
        "id": 2356,
        "name": "Hackster",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "light_metal_hackster",
        "monster_origin": "normal",
        "description": "Hackster understands an unknown dimension. He has discovered a way to hack floppy disks, multiplying their storage capacity. This technique allows him to keep a database of his opponents\u2019 skills and use it against them.",
        "books": [
            6,
            132,
            142
        ]
    },
    {
        "id": 2357,
        "name": "Pinky Flash",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "epic_magic_fire_pinkyflash",
        "monster_origin": "normal",
        "description": "Any time Pinky Flash feels grumpy, she puts on her flashiest workout clothes and dances to her Body Fuzion aerobics videotape. That\u2019s how she sweats out her bad mood\u2014it\u2019s totally radical!",
        "books": [
            7,
            132,
            142
        ]
    },
    {
        "id": 2358,
        "name": "Rabies",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_rabies",
        "monster_origin": "normal",
        "description": "Rabies is a materialization of all the anger contained in Hell. He's blinded by his fury, so he strikes upon his enemies recklessly, with no concern for his own well-being.",
        "books": [
            5,
            11,
            93,
            131
        ]
    },
    {
        "id": 2359,
        "name": "Firyna",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_firyna",
        "monster_origin": "normal",
        "description": "When Firyna was born, her parents held a big banquet to celebrate, but they failed to invite Barbatos. When he found out, he crashed the party and cursed Firyna with visceral fire. However, the girl grew up kind-hearted and decided to use her fire for good!",
        "books": [
            2,
            7,
            11,
            91
        ]
    },
    {
        "id": 2360,
        "name": "Vanitus",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_vanitus",
        "monster_origin": "normal",
        "description": "Every morning when he wakes up, Vanitus looks into the mirror and sighs, infatuated by his own beauty. He looks at his brother Invidia, then looks at himself again, and laughs. The more his brother hates him, the more beautiful he sees himself.",
        "books": [
            5,
            13,
            93
        ]
    },
    {
        "id": 2361,
        "name": "Baltasar",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_baltasar",
        "monster_origin": "normal",
        "description": "Baltasar was abandoned as a baby. He grew up alone in the underworld, surrounded by criminals. There he quickly became familiar with the art of the blade. It wasn't long before he learned that in his community, there were only two options: kill or be killed. He chose the former.",
        "books": [
            5,
            11,
            30,
            105
        ]
    },
    {
        "id": 2362,
        "name": "Invidia",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "legendary_magic_nature_invidia",
        "monster_origin": "normal",
        "description": "Invidia was adored by his parents until his younger brother Vanitus was born. From that moment, the baby stole the attention and Invidia was ignored. The jealousy he feels towards his brother affects him physically: Every time he looks at him, he becomes more ugly.",
        "books": [
            5,
            13,
            93
        ]
    },
    {
        "id": 2363,
        "name": "Pigredo",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_pigredo",
        "monster_origin": "normal",
        "description": "Going to war? Too much work. The battlefield? That\u2019s too far. Practice new skills? Nope. Pigredo will just ring his little bell and have a magic spirit do everything for him.",
        "books": [
            5,
            93
        ]
    },
    {
        "id": 2364,
        "name": "Avaritia",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_avaritia",
        "monster_origin": "normal",
        "description": "Avaritia's obsession with having it all started with Gold. He started gathering it and refused to share with anyone else. But then his craze moved to more serious things, like stealing Life. Now he's dangerous to be around.",
        "books": [
            5,
            93
        ]
    },
    {
        "id": 2365,
        "name": "The Keeper",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_the_keeper",
        "monster_origin": "normal",
        "description": "This monster has been known as The Keeper ever since the First Masters put him in charge of all their Books. He lives to defend the Library and all the precious wisdom held inside it. If anyone knows the history of Monster Legends, it\u2019s The Keeper.",
        "books": [
            10,
            62,
            131
        ]
    },
    {
        "id": 2366,
        "name": "Jakugan",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_jakugan",
        "monster_origin": "normal",
        "description": "When King Daeron gave the order to execute Haku and Jabaline, they came together to create a deadly creature that could defend them, and they succeeded: Jakugan has the best skills of the two, and she\u2019s ready to take down any king.",
        "books": [
            10,
            105
        ]
    },
    {
        "id": 2367,
        "name": "Koarim",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 4,
        "img_name": "legendary_earth_koarim",
        "monster_origin": "normal",
        "description": "Koarim was eating bamboo after his workout, when he noticed something different: it didn\u2019t taste right. He cracked the branch open and\u2026 it was poisoned with toxic residue! That day, Koarim swore he wouldn\u2019t rest until he had destroyed the monsters behind this residue.",
        "books": [
            10,
            12,
            119,
            132
        ]
    },
    {
        "id": 2368,
        "name": "Fightreer",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_fightreer",
        "monster_origin": "normal",
        "description": "General Alces once said: \u201cI would trust my Fightreer with my life\u201d. Every creature in his forest feels the same, because they all know Fightreer protects them ferociously: He carries two axes he stole from a logging company as a reminder not to mess with him.",
        "books": [
            10,
            12,
            119
        ]
    },
    {
        "id": 2369,
        "name": "Watinhart",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_watinhart",
        "monster_origin": "normal",
        "description": "When a drift net swept part of his family away from him, Watinhart decided to devote his life to protecting the ocean. He always does so with the best attitude, and even in the most dangerous times, he brings hope and strength to the creatures in the ocean.",
        "books": [
            10,
            4,
            12,
            119
        ]
    },
    {
        "id": 2370,
        "name": "Kiridar",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_nature_kiridar",
        "monster_origin": "normal",
        "description": "Kiridar is the ambassador of the Animals for the Earth Pact. When she plays her horn, creatures from all over the Earth come to fight by her side. She knows that when they all come together as one, they are invincible.",
        "books": [
            10,
            6,
            7,
            12,
            119
        ]
    },
    {
        "id": 2371,
        "name": "The Warrior",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_the_warrior",
        "monster_origin": "normal",
        "description": "The Warrior has been a lonely soul ever since he got lost from his friend Linus in the forest. He still waits for him there, hunting dangerous creatures to kill time. If you welcome him into your community, you\u2019ll find that when you earn his trust, he\u2019s supportive and inspiring.",
        "books": [
            10,
            59
        ]
    },
    {
        "id": 2373,
        "name": "Famperium",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_famperium",
        "monster_origin": "normal",
        "description": "Famperium is a gift that Mystery gave Count Vlad after his daughter Fampira left home. Mystery told the Count that the egg contained some of Fampira\u2019s Cells, but she hid the fact that it also contained some of hers, which now allows her to use Famperium's eyes to spy on his new daddy.",
        "books": [
            5,
            4,
            13
        ]
    },
    {
        "id": 2374,
        "name": "Bo-Tai",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_bo_tai",
        "monster_origin": "normal",
        "description": "After a great war, Bo Tai considered his service to the forces of Good finished, so he went on a journey of enlightenment. But now he's had to put his journey on hold: His immense powers of protection and support are needed in Monster Legends \u2014 Evil is around the corner.",
        "books": [
            10,
            20,
            52
        ]
    },
    {
        "id": 2375,
        "name": "Hydratila the Icebringer",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_hydratila_a",
        "monster_origin": "nemesis",
        "description": "General Thetys expelled Hydratila from her army when he confronted her about a strategy decision. Battling was Hydratila's life, so he felt that he had been left with nothing. He rebelled against the Water army, but he was defeated. Now he's back, stronger and with a new weapon!",
        "books": [
            4,
            10,
            15,
            154
        ]
    },
    {
        "id": 2376,
        "name": "Hydratila the Boltcaster",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_water_hydratila_c",
        "monster_origin": "nemesis",
        "description": "General Thetys expelled Hydratila from her army when he confronted her about a strategy decision. Battling was Hydratila's life, so he felt that he had been left with nothing. He rebelled against the Water army, but he was defeated. Now he's back, stronger and with a new weapon!",
        "books": [
            4,
            10,
            15,
            154
        ]
    },
    {
        "id": 2377,
        "name": "Hydratila the Riftmaker",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_water_hydratila_b",
        "monster_origin": "nemesis",
        "description": "General Thetys expelled Hydratila from her army when he confronted her about a strategy decision. Battling was Hydratila's life, so he felt that he had been left with nothing. He rebelled against the Water army, but he was defeated. Now he's back, stronger and with a new weapon!",
        "books": [
            4,
            10,
            15,
            154
        ]
    },
    {
        "id": 2378,
        "name": "Bella Baal",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_bella",
        "monster_origin": "normal",
        "description": "When Bella Baal was born, she was so precious that her mother Queen Luthien thought even the tiniest flea would hurt her. She asked White Pandalf to cast a protection spell over her. The spell was effective: Now, when she\u2019s in danger, Bella Baal turns into a ferocious beast!",
        "books": [
            7,
            30,
            62
        ]
    },
    {
        "id": 2379,
        "name": "Van K. March",
        "attributes": [
            "mt",
            "w"
        ],
        "rarity": 4,
        "img_name": "epic_metal_water_van_k_march",
        "monster_origin": "normal",
        "description": "While other Space Raiders sail the universe looking for treasure, what motivates Van K. Mark is the ladies. He only joined The Curse of the Cosmos\u2019 crew to seek new romances. As the helmsman, he likes taking detours that drive the captain up the wall.",
        "books": [
            4,
            6,
            119
        ]
    },
    {
        "id": 2380,
        "name": "Globrush",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_globrush",
        "monster_origin": "normal",
        "description": "Globrush got rich designing high-tech weapons, but then he lost all his Gems gambling. When Captain Copperbeard found him in a tavern, penniless and dejected, he brought him on board The Curse of the Cosmos, where he became the gunsmith.",
        "books": [
            4,
            6,
            1,
            119
        ]
    },
    {
        "id": 2381,
        "name": "Himass",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_himass",
        "monster_origin": "normal",
        "description": "A mass of black matter that gets stronger with each defeated enemy? When Captain Copperbeard heard about Himass, he knew he had to have him in his crew straightaway, and he didn\u2019t give up his search until he'd found and recruited him! ",
        "books": [
            6,
            119,
            133
        ]
    },
    {
        "id": 2382,
        "name": "Lumoona",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_lumoona",
        "monster_origin": "normal",
        "description": "Lumoona is a medium who can communicate with Mystery through astral planes. In these conversations, Mystery gives Lumoona a peek into future events. When Captain Copperbeard discovered this, he made Lumoona his advisor. She also serves as a compass for buried treasure!",
        "books": [
            5,
            7,
            20,
            119
        ]
    },
    {
        "id": 2383,
        "name": "Captain Copperbeard",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_copper_beard",
        "monster_origin": "normal",
        "description": "Brave and ambitious, Captain Copperbeard is determined to find the most valuable treasure in the universe. To this end, he has assembled a spaceship he calls The Curse of the Cosmos and gathered a crew of raiders. Like any pirate, he has a bodyguard: his parrot!",
        "books": [
            6,
            119,
            131
        ]
    },
    {
        "id": 2384,
        "name": "Thyra",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_thyra",
        "monster_origin": "normal",
        "description": "The Monster Lab tends to get very lonely, so Dr. Viktor gathered together some Cells lying around and put them in a crafting pod. He hoped the result would be a nice friend to keep him company, but this rebel punk came out instead. Thyra is anything but nice!",
        "books": [
            8,
            7
        ]
    },
    {
        "id": 2385,
        "name": "Baba Yaga",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_babayaga",
        "monster_origin": "normal",
        "description": "This witch lives in a hut deep in the forest. She likes to lure travelers to her hut and engage them in long conversations. After a while, she decides if she likes them or not and proceeds to eat them or protect them forever. Spoiler Alert: She rarely likes anyone at all.",
        "books": [
            8,
            2,
            7
        ]
    },
    {
        "id": 2386,
        "name": "Gregorz of Lyria",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_gregorz_of_lyria",
        "monster_origin": "normal",
        "description": "Gregorz has just completed his training as a witcher, and he can't wait to prove his skills and start making money by saving villages from the claws of some dangerous monsters! Being a monster himself, no one\u2019s better for the job.",
        "books": [
            10,
            12,
            20,
            59
        ]
    },
    {
        "id": 2387,
        "name": "Vodyanoy",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "water_magic_vodyanoy",
        "monster_origin": "normal",
        "description": "This wrathful creature lives beneath a murky pond deep in the forest. The nearby villagers sacrifice their food to try to appease him. If he gets angry with their offering, he drags a Nature monster or two under the water with him and makes them his slaves.",
        "books": [
            4,
            1,
            59
        ]
    },
    {
        "id": 2388,
        "name": "Semargl",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 4,
        "img_name": "light_thunder_semargl",
        "monster_origin": "normal",
        "description": "One day while Mjolnir, the Guardian of Runes, was crafting the finest Speed Rune in his temple, a lightning bolt sparked from his hammer. When it hit the floor, the bolt cracked open and Semargl emerged! Now Semargl protects Mjolnir\u2019s Temple from sneaky masters.",
        "books": [
            3,
            132,
            162
        ]
    },
    {
        "id": 2391,
        "name": "Alex Bone",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_alex_bone",
        "monster_origin": "normal",
        "description": "Even though he's the greatest safecracker of all time, Alex Bone is no stranger to prison. Nevertheless, his stays are always short, since there\u2019s no lock that can resist Mr. Bone\u2019s skills! From time to time, he even enjoys getting sent to the slammer, if only to see his old friends who always have the best stories.",
        "books": [
            13,
            30,
            77
        ]
    },
    {
        "id": 2392,
        "name": "Guava Juice",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_guava_juice",
        "monster_origin": "normal",
        "description": "He never runs from a challenge! When he was called upon to enter the ranks of Monster Legends, he only had one question: Can I bring my bathtub? Of course! An artist needs his instrument. Be careful with Guava Juice, he makes a splash wherever he goes!",
        "books": [
            15,
            133
        ]
    },
    {
        "id": 2393,
        "name": "Igursus",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_igursus",
        "monster_origin": "normal",
        "description": "In the middle of a war, Pandalf needed help to win, so he cast a spell on a mountain and split it in two: From the cold and snowy north face, Ouros was born. From the south face, this hot and mighty volcano called Igursus stood up and started walking.",
        "books": [
            5,
            11,
            13,
            30,
            104
        ]
    },
    {
        "id": 2394,
        "name": "Ingvar's Bodyguard",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ingvars_bodyguard",
        "monster_origin": "team_wars",
        "description": "Since the day General Ingvar saved his home village, this monster has dedicated his life to protecting his General, whom he follows blindly and worships like a god. If his death led General Ingvar to victory, then he would happily die: That\u2019s how loyal he is.\n",
        "books": [
            10,
            14,
            62
        ]
    },
    {
        "id": 2395,
        "name": "Crissandre",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_crissandre",
        "monster_origin": "normal",
        "description": "Crissandre was a slave until one day her fury grew so strong that it gave her the magical power to break free of her chains, defeat her master, and liberate all the other slaves under his oppression. She then summoned Ymur, a Legendary sword that has stayed in her service ever since.",
        "books": [
            7,
            10,
            12,
            91
        ]
    },
    {
        "id": 2396,
        "name": "Tulekahju",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_tulekahju",
        "monster_origin": "normal",
        "description": "Tulekahju lives in the dry mountains of the west. He has a band of eagles that serve him and inform him on the progress of battles. When he decides it\u2019s time to act, he draws his sword and swings the fate of the battle according to his will.",
        "books": [
            12,
            91
        ]
    },
    {
        "id": 2397,
        "name": "Ukuduma",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_ukuduma",
        "monster_origin": "normal",
        "description": "Ukuduma\u2019s body has always been governed by electricity. It was the day that he learned to control his electricity that he became a true battlemage. Now he\u2019s not only able to adjust the intensity of his own attacks, but also those of his enemies!",
        "books": [
            12,
            91
        ]
    },
    {
        "id": 2398,
        "name": "Cybele",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_earth_cybele",
        "monster_origin": "normal",
        "description": "When she was little, Cybele was caught in the middle of a big war in her home forest, so she learned how to make use of everything Nature offered to survive. She became so integrated in Nature that magical vegetation now grows inside of her, healing her whenever she needs it.",
        "books": [
            7,
            12,
            91
        ]
    },
    {
        "id": 2399,
        "name": "Lucifire The Lifemelter",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_lucifire_a",
        "monster_origin": "nemesis",
        "description": "For many years, the Fire army was nothing but an unruly crowd, but with time, two monsters rose as contenders for the role of General of the Fire army. Darmith and Lucifire gathered followers, but Darmith had more, so Lucifire had to step aside. Now she's back to claim control of her army!",
        "books": [
            1,
            7,
            15,
            93
        ]
    },
    {
        "id": 2400,
        "name": "Lucifire The Hopefreezer",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_lucifire_c",
        "monster_origin": "nemesis",
        "description": "For many years, the Fire army was nothing but an unruly crowd, but with time, two monsters rose as contenders for the role of General of the Fire army. Darmith and Lucifire gathered followers, but Darmith had more, so Lucifire had to step aside. Now she's back to claim control of her army!",
        "books": [
            1,
            7,
            15,
            93
        ]
    },
    {
        "id": 2401,
        "name": "Lucifire The Helltaser",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_lucifire_b",
        "monster_origin": "nemesis",
        "description": "For many years, the Fire army was nothing but an unruly crowd, but with time, two monsters rose as contenders for the role of General of the Fire army. Darmith and Lucifire gathered followers, but Darmith had more, so Lucifire had to step aside. Now she's back to claim control of her army!",
        "books": [
            1,
            7,
            15,
            93
        ]
    },
    {
        "id": 2402,
        "name": "Petro Loa",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_petro_loa",
        "monster_origin": "normal",
        "description": "Sambacadabra mixed Baltasar\u2019s Cells with her own to create something like a personal bodyguard. But then the result, Petro Loa, turned out to be a violent, unpredictable creature who will assault anyone who comes close \u2014 even Sambacadabra, his very own creator. ",
        "books": [
            1,
            21
        ]
    },
    {
        "id": 2403,
        "name": "Soap Sam",
        "attributes": [
            "t",
            "m"
        ],
        "rarity": 4,
        "img_name": "legendary_thunder_soap_sam",
        "monster_origin": "normal",
        "description": "Sam used to be a cheerful sponge, but ever since he ingested toxic soap all he wants is to die. He suffers with every breath, so he picks on his enemies to provoke them so that they will attack him and kill him. No luck so far!",
        "books": [
            8,
            4,
            142
        ]
    },
    {
        "id": 2404,
        "name": "Polaris Sea",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "water_metal_polaris_sea",
        "monster_origin": "normal",
        "description": "These huge starfishes live all together in a dark cave in the ocean. They are in serious danger of extinction because everyone wants to use their regeneration powers for themselves. Even Dr. Viktor has his own Polaris Sea in the Lab to perform experiments on it.",
        "books": [
            4,
            6,
            154
        ]
    },
    {
        "id": 2405,
        "name": "Hirondeleor",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_hirondelleor",
        "monster_origin": "normal",
        "description": "Hirondeleor doesn\u2019t have any natural predators left, since he killed them all. However, now he\u2019s gotten greedy and he also wants to destroy the only creature that can pose a threat to him: Enypiast.",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2406,
        "name": "Enypiast",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_enypiast",
        "monster_origin": "normal",
        "description": "Enypiast has never been seen, but it is easy to tell where he\u2019s been, because he always leaves a trace of blood and dead creatures behind him. The ones that have been closest to catching him say that they only got to see a tiny lightbulb quickly moving away. ",
        "books": [
            4,
            155
        ]
    },
    {
        "id": 2407,
        "name": "El Dino Volador",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_dino_volador",
        "monster_origin": "normal",
        "description": "The son of Gangsterousaurus doesn\u2019t want to continue the family business. Instead, he wants to become a wrestler! He\u2019s got everything he needs: The charisma, the power, and a cool name \u2014 El Dino Volador! He might even be better than his idol Plymouth.",
        "books": [
            1,
            12,
            13,
            75
        ]
    },
    {
        "id": 2408,
        "name": "Burotgor",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_burotgor",
        "monster_origin": "normal",
        "description": "Burotgor is the head of the Beastmen Clan, a feared group of monsters who raid villages and hoard huge amounts of Gold and Gems that never get spent, since the only hobby of the Beastmen is killing other Beastmen.",
        "books": [
            11,
            30,
            132,
            131,
            160
        ]
    },
    {
        "id": 2410,
        "name": "Sparking Mantis",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_sparking_mantis",
        "monster_origin": "normal",
        "description": "Unlike praying mantises, who kill their mates, the Sparking Mantis keeps its victims alive in its habitat. When it's feeling low on stamina, it goes home to its collection of victims, shocks one, and sucks stamina off it. That way, the Sparking Mantis keeps collecting new victims non-stop.",
        "books": [
            4
        ]
    },
    {
        "id": 2411,
        "name": "Atum's Bodyguard",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_atums_bodyguard",
        "monster_origin": "team_wars",
        "description": "General Atum was discovered inside a rock by Bogarek, the lead of a clan of miner dwarves enslaved by Warthak and a clan of chaos dwarves. When Atum came to life after being unearthed, he freed the miners and took Bogarek with him as his very own bodyguard.",
        "books": [
            10,
            14,
            103
        ]
    },
    {
        "id": 2412,
        "name": "Patrion",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_patrion",
        "monster_origin": "normal",
        "description": "After being cursed with hate and evil for years, MMOnster finally broke out of his Dark armor. He's Patrion now, a Light warrior who fights to help other monsters trapped by the same Dark curse he suffered.",
        "books": [
            10,
            15,
            62,
            131
        ]
    },
    {
        "id": 2413,
        "name": "Jasastur",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_jasastur",
        "monster_origin": "normal",
        "description": "Jasastur used to live only in the dimension of dreams, tormenting monsters in their sleep until, one day, a nightmare Baba Yaga was having felt so real that Jasastur trespassed dimensions. Now he can become your deepest fear even if you're awake.",
        "books": [
            5,
            11,
            122
        ]
    },
    {
        "id": 2414,
        "name": "Krugbo",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_krugbo",
        "monster_origin": "normal",
        "description": "When Krugbo bites an enemy, its teeth infect the target, leaving it disoriented and possessed. In case you\u2019re looking at him and wondering\u2026, the answer is yes: that is true for each and everyone of his mouths.",
        "books": [
            5,
            11,
            122
        ]
    },
    {
        "id": 2415,
        "name": "Faugnar",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_faugnar",
        "monster_origin": "normal",
        "description": "For many years, Faugnar had been stopped from hurting others by an anonymous hero who had kept him trapped inside a dark well, but one day Faugnar found the way to dematerialize his body and become a cloud of powerful, terrifying, black smoke.",
        "books": [
            2,
            5,
            11,
            53
        ]
    },
    {
        "id": 2416,
        "name": "Yilitre",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_ylitre",
        "monster_origin": "normal",
        "description": "Yilitre can see the future, the past, and many worlds at the same time without moving. His age is a mystery, but it is known that he has been seeing things and selling information to powerful lords for centuries, but that indiscretion has also bought him many enemies.",
        "books": [
            5,
            11,
            21,
            122
        ]
    },
    {
        "id": 2417,
        "name": "Postiguraf",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 4,
        "img_name": "epic_dark_magic_postiguraf",
        "monster_origin": "normal",
        "description": "On one of his strolls, Semargl stepped into a dimension of nightmares by mistake. He quickly found the way to go back home. What he didn\u2019t realize is that, by crossing the line between dimensions twice in a second, he left behind a creepy dark duplicate of himself!",
        "books": [
            8,
            5,
            11,
            122
        ]
    },
    {
        "id": 2418,
        "name": "Warthak the Skullcrusher",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_warthak_a",
        "monster_origin": "nemesis",
        "description": "Warthak was a powerful warlord who controlled and oppressed many regions with his army of chaos dwarves. He seemed unstoppable until General Atum made his appearance, liberated the regions under his oppression and sent him away. Now Warthak is back to re-write the end of that story.",
        "books": [
            11,
            15,
            103,
            131
        ]
    },
    {
        "id": 2419,
        "name": "Warthak the Mountainsplitter",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_warthak_b",
        "monster_origin": "nemesis",
        "description": "Warthak was a powerful warlord who controlled and oppressed many regions with his army of chaos dwarves. He seemed unstoppable until General Atum made his appearance, liberated the regions under his oppression and sent him away. Now Warthak is back to re-write the end of that story.",
        "books": [
            11,
            15,
            131
        ]
    },
    {
        "id": 2420,
        "name": "Warthak the Sunbringer",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_warthak_c",
        "monster_origin": "nemesis",
        "description": "Warthak was a powerful warlord who controlled and oppressed many regions with his army of chaos dwarves. He seemed unstoppable until General Atum made his appearance, liberated the regions under his oppression and sent him away. Now Warthak is back to re-write the end of that story.",
        "books": [
            11,
            15,
            131
        ]
    },
    {
        "id": 2421,
        "name": "Psilotus",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_psilotus",
        "monster_origin": "normal",
        "description": "Can you feel a halo of silence and peace around Psilotus? Well, Psilotus is a quiet monster and so, he wants his surroundings to be quiet too. If mind control is required in order to achieve quietness, then bring it on!",
        "books": [
            11,
            60
        ]
    },
    {
        "id": 2422,
        "name": "Darmith's Bodyguard",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_darmith_bodyguard",
        "monster_origin": "team_wars",
        "description": "Unlike other bodyguards, this creature prefers working in the background. He pulls the strings and influences his General with the information provided by his many whisperers. Nothing happens in the Fire army without Darmith's Bodyguard knowing.",
        "books": [
            1,
            11,
            14,
            92
        ]
    },
    {
        "id": 2423,
        "name": "Inknatius",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 4,
        "img_name": "epic_metal_dark_inknatius",
        "monster_origin": "normal",
        "description": "Originally, Inknatius was designed to print news and books. Its memory has stored all the information ever processed, giving it an extensive vocabulary and such an acid sense of humor that it will poison everyone around it.",
        "books": [
            6
        ]
    },
    {
        "id": 2424,
        "name": "Flamerion",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_flamerion",
        "monster_origin": "normal",
        "description": "Technology at its best: Flamerion consists of a molten lava core contained in a self-refrigerating capsule designed to hold the heat without melting. The fire in the core is managed and deployed through a system of weapons that make Flamerion a killing machine.",
        "books": [
            6,
            30
        ]
    },
    {
        "id": 2425,
        "name": "Tankerion",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_tankerion",
        "monster_origin": "normal",
        "description": "Tankerion is one of the first war machines ever created. You could say that it is the archetype for modern tanks: It is extremely resistant and it looks like a bunker. Because of this, the enemy team doesn\u2019t expect it to attack so, when it does hit\u2026 chaos!",
        "books": [
            6
        ]
    },
    {
        "id": 2426,
        "name": "Samael the Disease Spreader",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_samael_a",
        "monster_origin": "nemesis",
        "description": "After General Nishant killed his brother, this former soldier of the Good Legions traded secrets for Dark powers which allow him to resurrect fallen soldiers. Now he\u2019s a vengeful sorcerer who won\u2019t stop until he destroys Nishant and rescues his brother from the dead.",
        "books": [
            2,
            3,
            15
        ]
    },
    {
        "id": 2427,
        "name": "Samael the Fever Scatter",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_samael_c",
        "monster_origin": "nemesis",
        "description": "After General Nishant killed his brother, this former soldier of the Good Legions traded secrets for Dark powers which allow him to resurrect fallen soldiers. Now he\u2019s a vengeful sorcerer who won\u2019t stop until he destroys Nishant and rescues his brother from the dead.",
        "books": [
            2,
            3,
            15
        ]
    },
    {
        "id": 2428,
        "name": "Samael the Plague Carrier",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_samael_b",
        "monster_origin": "nemesis",
        "description": "After General Nishant killed his brother, this former soldier of the Good Legions traded secrets for Dark powers which allow him to resurrect fallen soldiers. Now he\u2019s a vengeful sorcerer who won\u2019t stop until he destroys Nishant and rescues his brother from the dead.",
        "books": [
            2,
            3,
            15
        ]
    },
    {
        "id": 2429,
        "name": "Granuy",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_granuy",
        "monster_origin": "normal",
        "description": "Tulekahju tried to dissuade his son Granuy from following the dangerous path of battle magic. He even sent the kid with Vodyanoy so that he could learn some support magic, but Granuy ignored his dad and went his own way to learn the most dangerous battle skills he could find.",
        "books": [
            1,
            10,
            59
        ]
    },
    {
        "id": 2430,
        "name": "Mountezuma",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_mountezuma",
        "monster_origin": "normal",
        "description": "Mountezuma is the divine leader, the shaman, and the protector of his own reptile empire inside the Aztec civilization. He holds all three roles himself because he considers everyone beneath him, even Kulkan, who he has as nothing else than a guard, in spite of his proven skills.",
        "books": [
            1,
            11,
            30,
            92
        ]
    },
    {
        "id": 2431,
        "name": "Salamander",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 4,
        "img_name": "epic_fire_metal_salamander",
        "monster_origin": "normal",
        "description": "This molten metal blob dropped from Mjolnir's hammer while he was forging runes. The insides of this monster are at such high temperature that its lower half is a red-hot, viscous glob. Salamander is an opportunistic killer scorching anyone who dares come near.",
        "books": [
            5,
            104
        ]
    },
    {
        "id": 2432,
        "name": "Nishant's Bodyguard",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_nishants_bodyguard",
        "monster_origin": "team_wars",
        "description": "This witch met General Nishant on a trip to the Lake of Lost Souls and started following him everywhere. It wasn\u2019t long before she earned his trust and became his advisor. She's overly protective of her General and sees everyone in the Dark army as a potential traitor.",
        "books": [
            7,
            14,
            5,
            105
        ]
    },
    {
        "id": 2433,
        "name": "Clivia",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_clivia",
        "monster_origin": "normal",
        "description": "Clivia\u2019s diet is high in iron, so his favourite food is warriors. The more armor they wear and the more weapons they carry, the more Clivia enjoys the meal! Swords and spears are for him like spicy food for humans.",
        "books": [
            11,
            1,
            20,
            60
        ]
    },
    {
        "id": 2434,
        "name": "Gaianova",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_gaianova",
        "monster_origin": "normal",
        "description": "When GaiaNova was born, her father had a prophetic dream  that his daughter was blessed with the spirit of the Earth and destined to be the first female to lead the tribe. When she grew up, she lived up to the expectations: faster and bigger than the rest, fiercer than anyone else!",
        "books": [
            7,
            12,
            10,
            92,
            133
        ]
    },
    {
        "id": 2435,
        "name": "Living Forest",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_livingforest",
        "monster_origin": "normal",
        "description": "Living Forest embodies the power of Nature. Like Nature itself, this monster can only be understood and appreciated by the wise. Its incredible speed allows it to be ready to empower its allies whenever they need!",
        "books": [
            12,
            10,
            2,
            102,
            133
        ]
    },
    {
        "id": 2436,
        "name": "Ragnael",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ragnael",
        "monster_origin": "normal",
        "description": "Ragnael used to live in the Underworld, but when he helped the Good Legions capture Rabies and the other Sinners, he was banished. However, the Good Legions didn\u2019t forget his help and welcomed him as one of their own. Now he stands at the Gates of Heaven, next to Remiel.",
        "books": [
            3,
            10,
            5,
            90
        ]
    },
    {
        "id": 2437,
        "name": "Azuriel",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_azuriel",
        "monster_origin": "normal",
        "description": "Azuriel was born in Heaven. It\u2019s her home, and she will defend it valiantly to the end, even if she doesn\u2019t consider herself a fighter. She spends most of her time meditating, but when Remiel calls her name, she\u2019s by his side, ready to defend or attack at his command.",
        "books": [
            3,
            7,
            10,
            90
        ]
    },
    {
        "id": 2438,
        "name": "Remiel",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_remiel",
        "monster_origin": "normal",
        "description": "As the guardian of the Gates of Heaven, Remiel is endowed with the moral and physical qualities that are required for the job. Fair and honorable, Remiel chooses his fights carefully. He will not move for a minor threat, only for worthy adversaries and sinners looking for trouble.",
        "books": [
            3,
            10,
            90,
            131
        ]
    },
    {
        "id": 2439,
        "name": "Llum the Light of Freedom",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_llum_a",
        "monster_origin": "nemesis",
        "description": "Llum and her brother Ingvar were a great team, though she was obviously the smarter and more powerful of the two. She could not stand it when the Light army chose Ingvar over her as a General, so she left. Now she is back, and those who dissed her are in for a painful lesson!",
        "books": [
            11,
            2,
            15,
            62
        ]
    },
    {
        "id": 2440,
        "name": "Llum the Iron Leader",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_llum_b",
        "monster_origin": "nemesis",
        "description": "Llum and her brother Ingvar were a great team, though she was obviously the smarter and more powerful of the two. She could not stand it when the Light army chose Ingvar over her as a General, so she left. Now she is back, and those who dissed her are in for a painful lesson!",
        "books": [
            11,
            2,
            15,
            62
        ]
    },
    {
        "id": 2441,
        "name": "Llum the Magical Matriarch",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_llum_c",
        "monster_origin": "nemesis",
        "description": "Llum and her brother Ingvar were a great team, though she was obviously the smarter and more powerful of the two. She could not stand it when the Light army chose Ingvar over her as a General, so she left. Now she is back, and those who dissed her are in for a painful lesson!",
        "books": [
            11,
            2,
            15,
            62
        ]
    },
    {
        "id": 2442,
        "name": "Shannara's Bodyguard",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_shannaras_bodyguard",
        "monster_origin": "team_wars",
        "description": "When General Shannara started receiving threats from the Nature Army, she knew it was time to bring in someone to watch her back\u2026 And who could do it better than this Magic monster? He has defeated over a thousand monsters without getting a single scar!",
        "books": [
            14,
            2,
            91,
            131
        ]
    },
    {
        "id": 2443,
        "name": "Ihtiander",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_ihtiander",
        "monster_origin": "normal",
        "description": "Ithiander spent his youth under the sea, wondering what the world would look like. One day, he dreamt that Yilitre gave him eyes to see not only what happens outside the sea, but also the future and the past. When he woke up, he found new eyes on his body and that, in fact, he had the powers from his dream!",
        "books": [
            1,
            4,
            10,
            155
        ]
    },
    {
        "id": 2444,
        "name": "Kaori",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 4,
        "img_name": "thunder_light_kaori",
        "monster_origin": "normal",
        "description": "Kaori was born into a family of admired samurai warriors, but her fate was marriage and homemaking. She had other personal plans, though. Using the elaborate armor of the samurai to conceal her gender, she attended samurai school to become the first female samurai.",
        "books": [
            7,
            10,
            52
        ]
    },
    {
        "id": 2445,
        "name": "Kihaku",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_kihaku",
        "monster_origin": "normal",
        "description": "Ever since Kihaku made a massive dragon emerge from nothingness and destroy his enemies, no one questions his power. But he\u2019s more than a fighter: He also offers counsel to people. However, it is harder to decipher Kihaku's advice than to find a solution for the problem yourself.",
        "books": [
            1,
            4,
            10,
            52
        ]
    },
    {
        "id": 2446,
        "name": "Oikawa",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_oikawa",
        "monster_origin": "normal",
        "description": "Oikawa was raised to become a sumo thanks to his rich family, who paid for the best teachers. He seemed unbeatable, but then he met with defeat and fell into depression. His family paid a sorcerer to make him invincible through magic, but this service was expensive\u2026 The price was his soul.",
        "books": [
            11,
            5,
            61
        ]
    },
    {
        "id": 2447,
        "name": "Cloud",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_cloud",
        "monster_origin": "normal",
        "description": "Cloud was just a kitten when Patrion pulled him out of the river, where he had fallen while playing. Since then, his loyalty to his savior has become indestructible. Steely claws and a feline resilience are his weapons, which put together with Patrion\u2019s skills make a deadly combo.",
        "books": [
            15,
            10,
            62,
            132
        ]
    },
    {
        "id": 2449,
        "name": "Undertaker",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_undertaker",
        "monster_origin": "normal",
        "description": "Another day at the graveyard. Another hole to dig, another body to bury\u2026 The job can get boring, so when The Undertaker doesn\u2019t feel like digging, he pulls a little trick out of his sleeve: If no one\u2019s dead, there\u2019s no need to work!",
        "books": [
            8,
            11,
            5,
            30
        ]
    },
    {
        "id": 2450,
        "name": "Nadiel the Deforestator",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_nadiel_a",
        "monster_origin": "nemesis",
        "description": "Nadiel belongs in the Cardinal Forest. He grew up outraged by what non-Nature monsters do to his home: They come seeking Nature\u2019s help, but they give nothing more than destruction in return. For this reason, Nadiel plans to close the forest to all outsiders, using violence if necessary.",
        "books": [
            1,
            15,
            102
        ]
    },
    {
        "id": 2451,
        "name": "Nadiel the Pyromancer",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_nadiel_c",
        "monster_origin": "nemesis",
        "description": "Nadiel belongs in the Cardinal Forest. He grew up outraged by what non-Nature monsters do to his home: They come seeking Nature\u2019s help, but they give nothing more than destruction in return. For this reason, Nadiel plans to close the forest to all outsiders, using violence if necessary.",
        "books": [
            1,
            15,
            102
        ]
    },
    {
        "id": 2452,
        "name": "Nadiel the Flooder",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_nadiel_b",
        "monster_origin": "nemesis",
        "description": "Nadiel belongs in the Cardinal Forest. He grew up outraged by what non-Nature monsters do to his home: They come seeking Nature\u2019s help, but they give nothing more than destruction in return. For this reason, Nadiel plans to close the forest to all outsiders, using violence if necessary.",
        "books": [
            1,
            15,
            102
        ]
    },
    {
        "id": 2453,
        "name": "Prototyperion",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 4,
        "img_name": "nature_metal_prototyperion",
        "monster_origin": "normal",
        "description": "Prototyperion was Ingenica\u2019s first successful war machine, made from rough materials. She hadn\u2019t yet found the ultimate formula to make her Artifacts immune to all status effects, but she did manage to make Prototyperion a Bulwark, so although not immune, it is very resistant.",
        "books": [
            6,
            15
        ]
    },
    {
        "id": 2454,
        "name": "Hippierion",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 4,
        "img_name": "metal_nature_hippierion",
        "monster_origin": "normal",
        "description": "Hippierion was Ingenica\u2019s final project at Monster School. She had meant to create a warrior, but something went wrong with the circuits at the last minute, and she didn\u2019t have time to fix them before her deadline. Hippierion turned out to have impressive skills but a chill attitude.",
        "books": [
            6,
            15
        ]
    },
    {
        "id": 2455,
        "name": "Sweeperion",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 4,
        "img_name": "metal_light_sweeperion",
        "monster_origin": "normal",
        "description": "When Ingenica was a girl, Captain Copperbeard was her idol, so her first Artifact, Sweeperion, was an homage to him! Sweeperion is a machine she designed to avoid having to spend time cleaning instead of playing around with her tools. Years later, it still keeps it all tidy for her.",
        "books": [
            6,
            15
        ]
    },
    {
        "id": 2456,
        "name": "Metalisha",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_metalisha",
        "monster_origin": "normal",
        "description": "The real wild child. She left home at a young age to join a gang of bikers led by Rador. She was a savage biker, always screaming and getting into fights. When she heard that in a Metal band she could actually get paid for her screaming, she didn\u2019t hesitate and she joined Metalh\u00ebad immediately.",
        "books": [
            11,
            5,
            7,
            142
        ]
    },
    {
        "id": 2457,
        "name": "Keithor",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_keithor",
        "monster_origin": "normal",
        "description": "Keithor is the drummer in Metalh\u00ebad\u2019s band. With his four arms, he never misses a beat! When he\u2019s not playing, Keithor likes the simple things, especially drinking. He\u2019s Metalh\u00ebad\u2019s best friend and the only one who can understand him. ",
        "books": [
            5,
            11,
            142
        ]
    },
    {
        "id": 2458,
        "name": "Ingenica",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_ingenica",
        "monster_origin": "normal",
        "description": "From a young age, Ingenica stood out for her engineering mind and soon became famous! All Monster Masters crave her signature products, Artifacts, and her latest creation, Relics, will change battles forever. She plays a key role in the future of Monster Legends.",
        "books": [
            6,
            15,
            7,
            131
        ]
    },
    {
        "id": 2459,
        "name": "Montauk Creature",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_slender",
        "monster_origin": "normal",
        "description": "This faceless hag is the stuff of nightmares and can torment her enemies in their sleep. She comes from the world of the dead to bring confusion and terrifying hallucinations. She is so greatly feared that many are afraid to fall asleep, which makes them progressively weaker.",
        "books": [
            5,
            2,
            7
        ]
    },
    {
        "id": 2460,
        "name": "Muerte McBlood",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_blood_drinker",
        "monster_origin": "normal",
        "description": "Muerte McBlood used to be a normal teenager, until Fampira fell in love with him, infected his blood with a kiss, and turned him into a ghoul with a bottomless appetite for flesh, who can smell blood from great distances. He is as insatiable as he is lethal.",
        "books": [
            8,
            13,
            11
        ]
    },
    {
        "id": 2461,
        "name": "Mothman",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 4,
        "img_name": "magic_nature_mothman",
        "monster_origin": "normal",
        "description": "Many consider this winged creature a mere figment of an impressionable imagination. Reports of its sighting are scarce, but the fact is that the dark forest is peppered with the remains of his victims. Survivors claim to have been assaulted after hearing a loud buzzing.",
        "books": [
            3,
            11
        ]
    },
    {
        "id": 2462,
        "name": "Scrap Warrior",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_scrap_warrior",
        "monster_origin": "normal",
        "description": "The post-apocalyptic Wastelands are ruled by Roxen and Nexor Cox. Lately, their greed is out of control and they are taxing everyone in their territory. Scrap Warrior, has had enough: Outfitted with armor made of junk, he\u2019s ready to fight the Cox brothers and anyone who tries to take advantage of him.",
        "books": [
            10,
            6,
            30,
            78
        ]
    },
    {
        "id": 2463,
        "name": "Xiron the Quartz",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_magic_xiron_a",
        "monster_origin": "nemesis",
        "description": "Xiron was an anagram cast by Shannara, but it turned into a ball of Magic and it floated away from her. It traveled through the Multiverse absorbing information and power, until it became intelligent. Now, Xiron is ready to interact and test the weaknesses of monsters.",
        "books": [
            10,
            15,
            2,
            91
        ]
    },
    {
        "id": 2464,
        "name": "Xiron the Emerald",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_magic_xiron_c",
        "monster_origin": "nemesis",
        "description": "Xiron was an anagram cast by Shannara, but it turned into a ball of Magic and it floated away from her. It traveled through the Multiverse absorbing information and power, until it became intelligent. Now, Xiron is ready to interact and test the weaknesses of monsters.",
        "books": [
            10,
            15,
            2,
            91
        ]
    },
    {
        "id": 2465,
        "name": "Xiron the Ruby",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_magic_xiron_b",
        "monster_origin": "nemesis",
        "description": "Xiron was an anagram cast by Shannara, but it turned into a ball of Magic and it floated away from her. It traveled through the Multiverse absorbing information and power, until it became intelligent. Now, Xiron is ready to interact and test the weaknesses of monsters.",
        "books": [
            10,
            15,
            2,
            91
        ]
    },
    {
        "id": 2466,
        "name": "Firael",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_firael",
        "monster_origin": "normal",
        "description": "When the leaders of the Underworld discovered that Ragnael had left them to become part of the Good Legions, they swore to destroy him. Fortunately, Firyna was there to lend a helping hand. Together they mixed their Cells to create a monster designed to defend Ragnael: Firael!",
        "books": [
            11,
            3,
            10,
            90
        ]
    },
    {
        "id": 2467,
        "name": "Burning Rogue",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 4,
        "img_name": "dark_fire_burning_rogue",
        "monster_origin": "normal",
        "description": "As a little boy, Patrick had always wanted to become a hero. When he jumped into his board game, he transformed into an underworld archer at the service of the highest bidder, a mercenary who needs nothing more than his bow to get through pretty much any situation.",
        "books": [
            5,
            11,
            59
        ]
    },
    {
        "id": 2468,
        "name": "Dungeon Master",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_dungeon_master",
        "monster_origin": "normal",
        "description": "As a kid, the Dungeon Master had no friends so she became a hateful creature, wanting other monsters to follow and obey her. Ever since she became a monster and gained the control of the Dungeons, all her joy comes from challenging monsters with traps and encounters.",
        "books": [
            11,
            5,
            20,
            59
        ]
    },
    {
        "id": 2469,
        "name": "Holter's Bodyguard",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_holters_bodyguard",
        "monster_origin": "team_wars",
        "description": "When General Holter finished building his armored tank, there were some spare parts left, so he gave them to a little fragile monster who was playing in the hangar. Time passed and the little monster became a strong soldier, so Holter decided to recruit him as his personal bodyguard!",
        "books": [
            14,
            6,
            121
        ]
    },
    {
        "id": 2470,
        "name": "Baron Traitor",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_baron_traitor",
        "monster_origin": "normal",
        "description": "Baron Traitor was Mr. Flaky's assistant in his illusionism shows and squire in battle. However, upon discovering voodoo magic, he lost his interest in illusionism and followed his own path. Now to ruin his enemies' battles, all he needs is his voodoo staff and hallucinogenic poison. ",
        "books": [
            8,
            11,
            2,
            5
        ]
    },
    {
        "id": 2471,
        "name": "Cryotan",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_cryotan",
        "monster_origin": "normal",
        "description": "When Ouros and Igursus were created from a mountain, there was a dangerous side effect: Cryotan. This massive creature emerged from the base where the mountain used to stand. It took both Ouros and Igursus to seal him in ice. Unfortunately, Cryotan has now managed to escape.",
        "books": [
            11,
            9,
            13,
            30,
            162
        ]
    },
    {
        "id": 2473,
        "name": "Herr Kommissar",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 4,
        "img_name": "dark_fire_herr_kommissar",
        "monster_origin": "normal",
        "description": "Herr Kommissar has been commanding battalions for years. Thanks to his experience, he was developed an ability to detect cowards in his unit and he uses this to make sure no one escapes. If violence is needed to keep everyone in line, so be it.",
        "books": [
            11,
            9
        ]
    },
    {
        "id": 2474,
        "name": "Teskita",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_teskita",
        "monster_origin": "normal",
        "description": "Teskita's only focus is winning. Her lack of not only blood, but compassion, can be regarded as arrogant. But in all honesty, she does what is needed to get the job done. Her character makes her the perfect killing machine for any army.",
        "books": [
            7,
            6,
            9
        ]
    },
    {
        "id": 2475,
        "name": "Voytek",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_voytek",
        "monster_origin": "normal",
        "description": "Voytek has led the toughest yet most successful military campaigns, except the last one, of which he was the only survivor. Since then, he carries a deep sense of guilt and grief for his fallen comrades, shielded behind his aggressive demeanour.",
        "books": [
            6,
            11,
            9,
            132
        ]
    },
    {
        "id": 2476,
        "name": "Zimnyaya",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_zimnyaya",
        "monster_origin": "normal",
        "description": "Zimnyaya was born a peasant in a small village, where he had many followers as a self-proclaimed overlord. He used manipulation, betrayal, and political propaganda to climb the ranks, murdering both rivals and followers along the way. Power is his sole ambition.",
        "books": [
            11,
            9,
            133
        ]
    },
    {
        "id": 2477,
        "name": "Faraday the Electrolyzer",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_thunder_faraday_a",
        "monster_origin": "nemesis",
        "description": "When General Uria got fed up of VoltaiK getting more respect than him from the Thunder Army, he asked Tesaday, who also hated VoltaiK, for help to create a monster that could better the superhero. What they didn\u2019t realize is that the result of their project, Faraday will also defeat them both.",
        "books": [
            11,
            12,
            15,
            105
        ]
    },
    {
        "id": 2478,
        "name": "Faraday the Discharguer",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_thunder_faraday_b",
        "monster_origin": "nemesis",
        "description": "When General Uria got fed up of VoltaiK getting more respect than him from the Thunder Army, he asked Tesaday, who also hated VoltaiK, for help to create a monster that could better the superhero. What they didn\u2019t realize is that the result of their project, Faraday will also defeat them both.",
        "books": [
            11,
            12,
            15,
            105
        ]
    },
    {
        "id": 2479,
        "name": "Faraday the Obscure",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_thunder_faraday_c",
        "monster_origin": "nemesis",
        "description": "When General Uria got fed up of VoltaiK getting more respect than him from the Thunder Army, he asked Tesaday, who also hated VoltaiK, for help to create a monster that could better the superhero. What they didn\u2019t realize is that the result of their project, Faraday will also defeat them both.",
        "books": [
            11,
            12,
            15,
            105
        ]
    },
    {
        "id": 2480,
        "name": "Uria's Bodyguard",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_urias_bodyguard",
        "monster_origin": "team_wars",
        "description": "During one particularly tough battle as a soldier in the Thunder Troops, this monster heroically stepped in front of an attack meant for General Uria. Since then she has never left his side. Deeply dedicated to her General and his troops, nothing and no one gets past her. ",
        "books": [
            14,
            2,
            10,
            162
        ]
    },
    {
        "id": 2481,
        "name": "Shork",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_shork",
        "monster_origin": "normal",
        "description": "Shork gets his thrills from hunting sharks with his bare hands. With the firm belief that sharks cannot be pirates, nothing enrages him more than a shark with a ship. They say go big or go home, well Shork will stop at nothing, especially if it involves the annihilation of Cavenfish. ",
        "books": [
            4,
            11,
            13,
            21,
            30,
            92
        ]
    },
    {
        "id": 2482,
        "name": "Borjork",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_borjork",
        "monster_origin": "normal",
        "description": "There\u2019s nothing like a battle shout from Borjork to make all the orc soldiers thirsty for blood. He\u2019s the most merciless in the clan and there\u2019s nothing he finds more exhilarating than being on the front line. He\u2019s intimidating to both enemies and fellow soldiers alike.",
        "books": [
            13,
            11,
            21,
            92
        ]
    },
    {
        "id": 2483,
        "name": "Bonnie Bark",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 4,
        "img_name": "dark_fire_bonniebark",
        "monster_origin": "normal",
        "description": "Bonnie Bark has earned a reputation of being the most cunning in the canine clan, and rightfully so. Highly respected by her mafia brothers, this seductive thief is notorious for using her beauty to get her way. Careful not to flirt, or you\u2019ll be flirting with danger.",
        "books": [
            7,
            13,
            11,
            21,
            77,
            132
        ]
    },
    {
        "id": 2484,
        "name": "Carlo Canbino",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_carlo_canbino",
        "monster_origin": "normal",
        "description": "Carlo Canbino does all the dirty work in the Canine Clan. He\u2019s in charge of paying visits to key monsters in rival clans. However, this massive dog has one weakness: sausages! When offered sausages, he\u2019s instantaneously distracted from his duty.",
        "books": [
            13,
            11,
            21,
            77,
            132
        ]
    },
    {
        "id": 2485,
        "name": "Al Canine",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_alcanine",
        "monster_origin": "normal",
        "description": "Al Canine is the boss in Canine Clan and a master of contraband. Chests, Gold, Cells, you name it, there\u2019s nothing he can\u2019t sell in the black market. Money isn\u2019t a game for Al, he\u2019s shameless in doing whatever he needs to do to eliminate any rival gangs that lower the prices he\u2019s set.",
        "books": [
            13,
            11,
            21,
            77,
            132
        ]
    },
    {
        "id": 2486,
        "name": "Talos The Automaton",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_metal_talos_a",
        "monster_origin": "nemesis",
        "description": "When this Artifact appeared in Monster Legends, everyone was shaken by its impressive appearance. Ingenica was able to determine that Talos had come from a distant universe and future. She couldn\u2019t, however, discover who the mastermind behind it was, or what its target destruction is.",
        "books": [
            6,
            10,
            15
        ]
    },
    {
        "id": 2487,
        "name": "Talos the island Protector",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_metal_talos_b",
        "monster_origin": "nemesis",
        "description": "When this Artifact appeared in Monster Legends, everyone was shaken by its impressive appearance. Ingenica was able to determine that Talos had come from a distant universe and future. She couldn\u2019t, however, discover who the mastermind behind it was, or what its target destruction is.",
        "books": [
            6,
            10,
            15
        ]
    },
    {
        "id": 2488,
        "name": "Talos The Forgotten Artifact",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "nemesis_legendary_metal_talos_c",
        "monster_origin": "nemesis",
        "description": "When this Artifact appeared in Monster Legends, everyone was shaken by its impressive appearance. Ingenica was able to determine that Talos had come from a distant universe and future. She couldn\u2019t, however, discover who the mastermind behind it was, or what its target destruction is.",
        "books": [
            6,
            10,
            15
        ]
    },
    {
        "id": 2489,
        "name": "The Inheritor",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_the_inheritor",
        "monster_origin": "normal",
        "description": "Self-proclaimed as The Inheritor to the Throne of Hell, this monster is raising quite a few eyebrows in purgatory. Barbatos has made it clear that he won\u2019t step down anytime soon, but The Inheritor doesn\u2019t seem to listen to him, and has decided to stick around, challenging his every move.",
        "books": [
            3,
            5,
            11,
            21,
            93
        ]
    },
    {
        "id": 2490,
        "name": "Soulfagous",
        "attributes": [
            "f",
            "m"
        ],
        "rarity": 4,
        "img_name": "legendary_fire_magic_soulfagous",
        "monster_origin": "normal",
        "description": "Hell is a busy place with crazy punishment schedules. To make sure that no one spends a day without suffering, Barbatos has hired a group of Soulfagi. These creatures are the ones to carry condemned souls from one area of punishment to the next.",
        "books": [
            5,
            11,
            21,
            93
        ]
    },
    {
        "id": 2491,
        "name": "Legion",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_legion",
        "monster_origin": "normal",
        "description": "In Hell, there are idols too, and Legion is one of the favorite ones for the Underworld Troops. All the fallen angels and hell soldiers come to light up his blue fire before battle to ask for luck. Legion does his job not by helping them, but by dragging down their enemies.",
        "books": [
            5,
            11,
            21,
            93
        ]
    },
    {
        "id": 2492,
        "name": "Yamada",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_yamada",
        "monster_origin": "normal",
        "description": "Yamada is Crissandre\u2019s go-to guy when the team of Battlemages need reinforcements. He\u2019s like their secret weapon! He comes flying over the battlefield, evading enemies\u2019 attacks and healing his allies, just like a miracle.",
        "books": [
            3,
            10,
            20,
            91
        ]
    },
    {
        "id": 2493,
        "name": "Alpha Cliviast",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_cliviast_alpha",
        "monster_origin": "normal",
        "description": "When Clivia spread its spores, everyone collected and destroyed them to make sure it didn\u2019t reproduce. After all, killer plants aren\u2019t something you want to be surrounded by. However, they missed one spore\u2026 the strongest of them all, and Alpha Cliviast sprouted from it.",
        "books": [
            1,
            11,
            21,
            60
        ]
    },
    {
        "id": 2494,
        "name": "Ixofex",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_titan_beefio",
        "monster_origin": "normal",
        "description": "Always showing up uninvited, this creature was first mistaken for a fallen star and a symbol of good luck. But this venomous parasite from outer space is extremely dangerous, it extracts life from its hosts, and grows exponentially fast.",
        "books": [
            1,
            12,
            11,
            21,
            122
        ]
    },
    {
        "id": 2495,
        "name": "Gakora",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ganesh",
        "monster_origin": "normal",
        "description": "Gakora is always exactly where he\u2019s needed. Known as \u201cThe Remover Of Obstacles\u201d, he heals, protects, and empowers his allies in battle. However, Gakora isn\u2019t only a good friend in the battlefield: there\u2019s no one who can tell anecdotes like he does!",
        "books": [
            2,
            10,
            20,
            30,
            52,
            132
        ]
    },
    {
        "id": 2496,
        "name": "Armole",
        "attributes": [
            "e",
            "mt"
        ],
        "rarity": 4,
        "img_name": "earth_metal_armole",
        "monster_origin": "normal",
        "description": "There are two reasons why Armole enjoys stealing from the rich: 1. Because he can take their Gold and give it to the poor. 2. Because after he\u2019s done his job, he helps himself to their massive pantries, which are always full of delicious treats!",
        "books": [
            10,
            12,
            20,
            59,
            132
        ]
    },
    {
        "id": 2497,
        "name": "Furrius Robin",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_furriusrobin",
        "monster_origin": "normal",
        "description": "Furrius Robin\u2019s motto is: \u201cHit hard, hit fast, take everything you can, and run as far as you can!\u201d He\u2019s kind of a fragile creature, but he makes sure to hit before he can be hit, that\u2019s how he\u2019ll stay safe.",
        "books": [
            10,
            12,
            20,
            59,
            132
        ]
    },
    {
        "id": 2498,
        "name": "Rabbish",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_rabbish",
        "monster_origin": "normal",
        "description": "Rabbish looks a bit like a pacifist druid covered in amulets but, in truth, all the little objects he carries around with him are more like souvenirs from his adventures. Because of his appearance, he\u2019s usually underestimated as a warrior, but that\u2019s something he uses in his favor!",
        "books": [
            12,
            10,
            20,
            59,
            132
        ]
    },
    {
        "id": 2499,
        "name": "Balor",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_balor",
        "monster_origin": "normal",
        "description": "This colossal beast once led a race of giants. When he began abusing his power, they created a potion and hid it in his food. But the potion was so powerful, it caused him to grow a venomous eye. Now anything he looks at is instantly blighted.",
        "books": [
            5,
            11,
            21,
            30,
            160
        ]
    },
    {
        "id": 2500,
        "name": "Quixote",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_quixote",
        "monster_origin": "normal",
        "description": "Brave, noble,... and mad as a hatter. This almighty knight is determined to ride his horse, Rocigon, right into the History books. With the help of his squire Panzus, he will make sure that justice triumphs.",
        "books": [
            10,
            13,
            12,
            20,
            59
        ]
    },
    {
        "id": 2501,
        "name": "Rocigon",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_rocigon",
        "monster_origin": "normal",
        "description": "Although a little slow and sometimes clumsy, this loyal creature never leaves Quixote\u2019s side. Where he lacks in speed he makes up for in strength with his powerful mane and hooves tougher than nails: Perfect for taking on any giant.",
        "books": [
            10,
            13,
            12,
            20,
            59,
            132
        ]
    },
    {
        "id": 2502,
        "name": "Panzus",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 4,
        "img_name": "earth_metal_panzus",
        "monster_origin": "normal",
        "description": "The good thing about Quixote having his head in the clouds is that he has his squire Panzus there to bring him back down. With his proverbs and logic, this once peasant worker is faithful in protecting Quixote on his quest and in battle.",
        "books": [
            10,
            13,
            12,
            20,
            59
        ]
    },
    {
        "id": 2503,
        "name": "Warmaster Gortak",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_gortak_a",
        "monster_origin": "war_master",
        "description": "Long ago, Gortak was the hero and protector of the miner dwarves, but lately the dwarves and their new leader, General Atum, have been tormented and enslaved by Warthak. Now Gortak is back, determined to crush Warthak and save his dear miners!",
        "books": [
            15,
            12,
            10,
            103
        ]
    },
    {
        "id": 2504,
        "name": "Rabooka",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_rabooka",
        "monster_origin": "normal",
        "description": "Easter time\u2026again. Another year where everyone is digging holes and ruining rabbit lairs to hide stupid Easter eggs. Another year where it is time for Rabooka to dust off his giant bazooka! It\u2019s an Easter tradition for this moody bunny to take all the Easter eggs he finds in his way and shoot them at his enemies.",
        "books": [
            6,
            12,
            21,
            132,
            159
        ]
    },
    {
        "id": 2505,
        "name": "Viperhotep",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_viperothep",
        "monster_origin": "normal",
        "description": "As the apprentice to Isis, Viperhotep used his cunning ways to earn the trust of the Goddess. On her deathbed she gave him her powers trusting he would use it for good. Instead he betrayed her by using his powers for evil and manipulation.",
        "books": [
            1,
            5,
            21,
            131,
            160
        ]
    },
    {
        "id": 2506,
        "name": "Bandses",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_bandses",
        "monster_origin": "normal",
        "description": "While archaeologists were in a nearby area, Bandses\u2019 ring was unearthed and stepped on\u2014bringing him back to life. Shocked and enraged that his powerful legacy as Pharaoh had been forgotten, he now attacks to regain his mighty kingdom.",
        "books": [
            8,
            5,
            21,
            160
        ]
    },
    {
        "id": 2507,
        "name": "Thetys Bodyguard",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_thetys_bodyguard",
        "monster_origin": "team_wars",
        "description": "General Thetys is already hard enough to deal with, but whenever she has her bodyguard with her, she becomes even more of a tough one. Water monsters usually just give up on the idea of trying to make her change her decisions when they see that she\u2019s in his company.",
        "books": [
            4,
            14,
            21,
            155
        ]
    },
    {
        "id": 2508,
        "name": "Tijen",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_tijen",
        "monster_origin": "normal",
        "description": "When Patrion was trapped inside the dark armor that had made him become MMOnster, Tijen broke the curse and rescued him, helping him become the Light hero he is today. Now Patrion and Tijen have become inseparable, sharing their life and battles with their dear friend Cloud.",
        "books": [
            7,
            15,
            10,
            20,
            62,
            132
        ]
    },
    {
        "id": 2509,
        "name": "Igneus",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_igneus",
        "monster_origin": "normal",
        "description": "Normally when meteors fall from the sky onto the Monster Legends Islands, no one blinks an eye\u2026 but this one was different. Not only was it enormous and leaving streaks of red-hot fire in its wake, but it also started walking and wreaking utter havoc and destruction.",
        "books": [
            11,
            5,
            21,
            104
        ]
    },
    {
        "id": 2510,
        "name": "Alces Bodyguard",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_alcesbodyguard",
        "monster_origin": "team_wars",
        "description": "When Alces\u2019 Pet grew up, General Alces decided to send him on his own missions, thus parting ways with him. However, the General knew he still needed someone to stay by his side, so he took a piece of his own bark and breathed life into it. That\u2019s how Alces\u2019 Bodyguard was born!",
        "books": [
            10,
            14,
            20,
            102
        ]
    },
    {
        "id": 2511,
        "name": "Lord Mindson",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_lord_mindson",
        "monster_origin": "normal",
        "description": "One eye is all this monster needs. Thanks to his psychic powers, Privateer Morgan has never been steered wrong. Now he predicts the moves of Captain Copperbeard. However, Lord Mindson has his own mission: To destroy Lumoona, the only one who can match his powers.",
        "books": [
            12,
            10,
            6,
            20,
            120
        ]
    },
    {
        "id": 2512,
        "name": "Privateer Morgan",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_morgan",
        "monster_origin": "normal",
        "description": "Privateer Morgan and his crew have been paid an outrageous amount of Gold by a secret commissioner to search and destroy Captain Copperbeard. With sophisticated gear of magical proportions, he has everything he needs to sink The Curse of the Cosmos.",
        "books": [
            12,
            10,
            6,
            20,
            120
        ]
    },
    {
        "id": 2513,
        "name": "Sir Francis Rock",
        "attributes": [
            "e",
            "mt"
        ],
        "rarity": 4,
        "img_name": "earth_metal_sirfrancisrock",
        "monster_origin": "normal",
        "description": "Half robot, half rock. Sir Francis Rock was designed by engineers as a durable robot worker for factories, but when Privateer Morgan saw him, he knew he had more potential and bought him as the last line of defense for the crew.",
        "books": [
            10,
            12,
            6,
            20,
            120
        ]
    },
    {
        "id": 2514,
        "name": "Talika",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_talika",
        "monster_origin": "normal",
        "description": "Talika is like a grandmother to all creatures in the forest, especially to General Alces, who always comes to her for advice and comfort. She usually doesn\u2019t intervene in his battles, but when the weak are in danger, she leaves her peaceful life aside and runs to protect them.",
        "books": [
            7,
            2,
            10,
            20,
            30,
            102
        ]
    },
    {
        "id": 2515,
        "name": "Dusk Aura",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_dusk_aura",
        "monster_origin": "normal",
        "description": "Dusk Aura used to be a superhero, like her sister Lux Aura, but one day, Malair cast a control spell on her and now she\u2019s possessed by his evil powers. Dusk Aura has become a very dangerous puppet.",
        "books": [
            7,
            11,
            12,
            21
        ]
    },
    {
        "id": 2516,
        "name": "Devastator",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_devastator",
        "monster_origin": "normal",
        "description": "Devastator is the muscle in Malair\u2019s team of supervillains. He has an extraordinary strength and he\u2019s great at obeying commands, but once he sets eyes on a target, he\u2019s so blinded by fury that he\u2019s incapable of stopping.",
        "books": [
            11,
            12,
            21,
            76
        ]
    },
    {
        "id": 2517,
        "name": "Copycat",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_copycat",
        "monster_origin": "normal",
        "description": "Copycat\u2019s super power is to provoke his rivals to attack and then copy their skills. Malair loves to have Copycat in his team because of the frustration he causes on enemies. Seeing him on the battlefield is one his favorite hobbies.",
        "books": [
            11,
            12,
            21,
            76
        ]
    },
    {
        "id": 2518,
        "name": "Warmaster Barbael",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_barbael_spine",
        "monster_origin": "war_master",
        "description": "Barbael was separated from his brother Barbatos on the night of their birth. While one demon was raised to become the King of Hell, the other was trained as an angel. Who would have known that a demon would become the most valuable soldier in Heaven and a lead to the Good Legions?",
        "books": [
            5,
            10,
            15,
            90
        ]
    },
    {
        "id": 2519,
        "name": "Yntec",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_yntec",
        "monster_origin": "normal",
        "description": "When Yntec was born from a massive Thunder explosion, everyone expected him to be the type of monster to attack and run, but he prefered to study at a school of magic and he became a remarkable and unique Thunder wizard!",
        "books": [
            2,
            10,
            20,
            91
        ]
    },
    {
        "id": 2520,
        "name": "Amphidator",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_amphidator",
        "monster_origin": "normal",
        "description": "This formidable water beast has a traditional yet infallible hunting technique. He segregates a lethal venom and waits for it to act. For a long time, scientists tried to find an antidote, but now they have ultimately given up.",
        "books": [
            4,
            21,
            60
        ]
    },
    {
        "id": 2521,
        "name": "Predagelum",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_predagelum",
        "monster_origin": "normal",
        "description": "This stealthy hunter lives by the lakes, where he waits patiently for the right prey. A wave on the surface of the water is enough for him to know what kind of creature is swimming underneath, but he doesn\u2019t go for the first potential victim - He will have nothing but the perfect meal.",
        "books": [
            1,
            21,
            60
        ]
    },
    {
        "id": 2522,
        "name": "Fatid",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_titan_fatid",
        "monster_origin": "normal",
        "description": "Once upon a time, there was a little Sheluke who lived in a swamp. One day, Dr. Hazard started using that swamp as his dumping site and contaminated it. After years of eating rotten garbage and being in contact with contamination, that little Sheluke turned into this pestilent beast: Fatid!",
        "books": [
            11,
            5,
            21,
            30,
            60
        ]
    },
    {
        "id": 2523,
        "name": "Scaraborg",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_scaraborg",
        "monster_origin": "normal",
        "description": "Especially designed to take down artifacts, this metallic poisonous beast can corrode any type of metal. Scaraborg needs to be transported in a special capsule in order for it not to hurt anything or anyone.",
        "books": [
            11,
            6,
            21,
            60
        ]
    },
    {
        "id": 2524,
        "name": "Stake",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_stake",
        "monster_origin": "normal",
        "description": "This steam-powered snake is designed to stand up to apex predators. Stake lives in the water, where it recharges and cools its system, but is a fully functioning machine out of water: It can survive and battle for up to 9 days.",
        "books": [
            6,
            11,
            21,
            60
        ]
    },
    {
        "id": 2525,
        "name": "Warmaster Necromancer",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_necromancer_a",
        "monster_origin": "war_master",
        "description": "Necromancer was a respected professor but when he started running tests with life and death, he was asked to leave his academy. However, Count Vlad offered his castle to Necromancer: He could carry out his experiments there and the Count could show off his influence: he had a Warmaster living in his home.",
        "books": [
            8,
            2,
            15
        ]
    },
    {
        "id": 2526,
        "name": "Prince Charmless",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_prince_charmless",
        "monster_origin": "normal",
        "description": "This frog lived in the gardens of King Daeron and Queen Luthien\u2019s castle. He grew up reading their books and emulating their manners. All he wanted was to become a prince. One day, he convinced Bella Baal to kiss him to realize his dream but\u2026 he didn\u2019t become a charming prince, but Prince Charmless!",
        "books": [
            13,
            10,
            12,
            20,
            30,
            62
        ]
    },
    {
        "id": 2527,
        "name": "Talany",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_talany",
        "monster_origin": "normal",
        "description": "A warrior who can make her own weapons out of Thunder? It can only be Talany! Talany\u2019s an independent fighter: She doesn\u2019t accept orders from anyone, she battles only to prove herself.",
        "books": [
            1,
            10,
            7,
            20
        ]
    },
    {
        "id": 2528,
        "name": "Wolfgang",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_wolfgang",
        "monster_origin": "normal",
        "description": "It was the night of a full moon when Colin heard some strange noises behind him while he was strolling through the forest. He started to run, but he was caught and bitten by a wolf! He transformed into Wolfgang, a werewolf, and became too dangerous for the population in the area, so he was sent to the Underworld.",
        "books": [
            5,
            11,
            20,
            132
        ]
    },
    {
        "id": 2529,
        "name": "Skull Rivera",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_skull_rivera",
        "monster_origin": "normal",
        "description": "Mr. Skull Rivera is out on a mission to find his daughter Demise. Ever since she ran away from the Land of the Undead, he\u2019s been heartbroken. As much as it pains him to leave his land, Skull has decided to join the land of the living himself, at least until he finds Demise and makes sure she\u2019s fine.",
        "books": [
            8,
            13,
            5,
            20
        ]
    },
    {
        "id": 2530,
        "name": "Countess Flawless",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_countess_flawless",
        "monster_origin": "normal",
        "description": "Meet the real ruler of Vlad's Castle. Count Vlad's wife and Fampira's mother, Countess Flawless, is 367 years old, but she doesn't look a day over 42! She doesn't show up much in big events, but everyone knows that nothing happens in Monstelvania without her approval. ",
        "books": [
            8,
            13,
            7,
            20
        ]
    },
    {
        "id": 2531,
        "name": "iMigbo",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_imigbo",
        "monster_origin": "normal",
        "description": "After years of following VoltaiK around and making videos about him, iMigbo\u2019s dream has come true: He\u2019s become VoltaiK\u2019s sidekick! They don\u2019t understand each other very well since VoltaiK only speaks English and iMigbo only speaks Spanish, but their skills match perfectly!",
        "books": [
            4,
            10,
            15,
            20,
            75
        ]
    },
    {
        "id": 2532,
        "name": "Firca",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_firca",
        "monster_origin": "normal",
        "description": "Firca is a ferocious attacker who has become a legend in the orc tribe. Despite not being as big as other soldiers, like Borjork, her mastery with the axes, as well as her recklessness and endless stamina in the battlefield, have made her a feared leader in the tribe.             ",
        "books": [
            13,
            11,
            7,
            21,
            92
        ]
    },
    {
        "id": 2533,
        "name": "The Baroness",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_the_baroness",
        "monster_origin": "normal",
        "description": "The Post-Apocalyptic Wastelands were ruled by Roxen and Nexor Cox\u2026 until she arrived. They couldn\u2019t confront her, so they accepted the terms she proposed to let them stay in her newly acquired territory. Now the brothers work for The Baroness in exchange for her protection.",
        "books": [
            6,
            11,
            7,
            21,
            30,
            78
        ]
    },
    {
        "id": 2534,
        "name": "Warspellz",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_warspellz",
        "monster_origin": "normal",
        "description": "The shaman in the orc tribe is indispensable. He may not stand in the frontline of battle most of the time, but his potions make fighters stronger in the camp, and in the battlefield, his spells are a blessing for his allies and a curse for his enemies.",
        "books": [
            13,
            5,
            11,
            21,
            92
        ]
    },
    {
        "id": 2535,
        "name": "Warmaster Elvira",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_elvira_spine",
        "monster_origin": "war_master",
        "description": "Elvira was kicked out of heaven after she lost one of her prot\u00e9g\u00e9s, but she came back with renewed power and was welcomed into heaven as an authority. She's the one who trained Barbael to become an angel instead of a demon, and no one ever doubts her word! ",
        "books": [
            3,
            7,
            15,
            90
        ]
    },
    {
        "id": 2536,
        "name": "Gelotron",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_gelotron",
        "monster_origin": "normal",
        "description": "The problem with having a ball of Magic substance like Xiron just traveling through the Multiverse is that it is exposed to everyone. Someone has found a way to extract a part of this substance to create a ball of Magic of its own. He\u2019s turned it into Gelotron, a monster designed to attack!",
        "books": [
            10,
            13,
            2,
            20,
            91
        ]
    },
    {
        "id": 2537,
        "name": "Toshiro",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_toshiro",
        "monster_origin": "normal",
        "description": "Toshiro is on a mission to protect innocent creatures traveling through space. Space is a rough place full of dangerous creatures like the abominations, or General Holter and his crew, but with Toshiro around, there\u2019s nothing to fear!",
        "books": [
            6,
            10,
            20,
            61
        ]
    },
    {
        "id": 2538,
        "name": "Warmaster Thalassa",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_thalassa_a_spine",
        "monster_origin": "war_master",
        "description": "Thalassa ruled the Water Realm until she had to go with the other Warmasters. She left the realms in the hands of her daughter Thetys and her lieutenant Hydratila, but the war between the two of them divided the population. Now Thalassa has returned and she must reunify the Water Realm.",
        "books": [
            4,
            13,
            15,
            154
        ]
    },
    {
        "id": 2539,
        "name": "Patient Cyber",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_patientcyber",
        "monster_origin": "normal",
        "description": "Patient Cyber is affected by a rare sickness that is slowly turning him into a robotic creature. It all started with a stream of nanobots running through his veins and at this point, it has spread throughout half of his body. He\u2019s losing his emotions, but he\u2019s becoming a war machine!",
        "books": [
            6,
            11,
            8,
            21,
            30,
            121
        ]
    },
    {
        "id": 2540,
        "name": "Lady Solaris",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_ladysolaris",
        "monster_origin": "normal",
        "description": "Faith and fury come together in Lady Solaris. This ambassador of the Greater Good is capable of anything to get the job done. She doesn\u2019t mind becoming a martyr and, if that means her name will be remembered, even better.",
        "books": [
            10,
            13,
            7,
            62
        ]
    },
    {
        "id": 2541,
        "name": "Inquisitor Fulmen",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_inquisitor_fulmen",
        "monster_origin": "normal",
        "description": "Inquisitor Fulmen was a full-time priest and custodian of the angels' books and prayers until Elvira decided that it was a waste for him to keep all his knowledge to himself and she called him to the ranks!",
        "books": [
            10,
            13,
            62
        ]
    },
    {
        "id": 2542,
        "name": "Beledig",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_beledig",
        "monster_origin": "normal",
        "description": "The orcs are destroying everything they can find and subduing many villages, but there\u2019s someone ready to face them and hunt them down. A wooden harpoon is all she needs!                  ",
        "books": [
            12,
            10,
            7,
            20,
            59
        ]
    },
    {
        "id": 2543,
        "name": "Sting WestClaw",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_sting_westclaw",
        "monster_origin": "normal",
        "description": "Sting Westclaw was banished from his homeland after robbing dozens of banks and taverns. He\u2019s found a new home in the desert area of the Post-Apocalyptic Wastelands. There\u2019s not much to steal there, but he has all the money from his robberies, his guns, and enviable aim. He\u2019ll be fine.",
        "books": [
            12,
            11,
            10,
            20,
            78
        ]
    },
    {
        "id": 2544,
        "name": "Warmaster Zahra",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_zahra_a",
        "monster_origin": "war_master",
        "description": "Zahra is the closest thing to Mother Nature all the creatures in the Cardinal Forest know. She was there before anyone else, and she looks as fresh and green as she\u2019s ever been. She's had to face some rebels through the years, but in the end, she always ends up with the respect of every Nature monster.",
        "books": [
            3,
            7,
            15,
            102
        ]
    },
    {
        "id": 2545,
        "name": "Mishka",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_mishka",
        "monster_origin": "normal",
        "description": "Cloud was playing, running around in a field when he accidentally stepped into a portal to the Underworld. He realized immediately and got out, but it happened so quickly that he left a couple of his Cells behind. Those Cells engendered a new Light monster that grew up in the Underworld: Mishka.",
        "books": [
            5,
            11,
            8,
            20,
            31,
            53
        ]
    },
    {
        "id": 2546,
        "name": "Francine Frank",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_francine_frank",
        "monster_origin": "normal",
        "description": "Frank S. Tein has finally found the one. Francine Frank is toned, just like him, not very bright, just like him, and has a bit of a bad attitude, just like him! Looks like the monster matches app has worked fine for these two.",
        "books": [
            5,
            7,
            8,
            20,
            30
        ]
    },
    {
        "id": 2547,
        "name": "Cain",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_cain",
        "monster_origin": "elite",
        "description": "Cain was the most feared creature in Monstelvania. He was the one who bit Count Vlad, turning him into the monster he is today. But then, one day, he disappeared. Everyone wished that he would never come back to torment them again, but their wish was denied!",
        "books": [
            3,
            5,
            8,
            25,
            105
        ]
    },
    {
        "id": 2548,
        "name": "Sergent Hull Head",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_sargent_hull_head",
        "monster_origin": "normal",
        "description": "When the war ended and Zimnyaya surrendered, he left a war prisoner behind, locked in a bunker. Without food, he passed away, but his body was exposed to radiation from nuclear bombs and, after awhile, he came back to life... as a zombie! Welcome back, Sergeant Hull Head.",
        "books": [
            11,
            2,
            8
        ]
    },
    {
        "id": 2549,
        "name": "Warmaster Babari",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_babari_a",
        "monster_origin": "war_master",
        "description": "Babari was the leader of the Thunder Warriors. They conquered a mountain so high they could reach into the sky and summon massive Thunderstorms. When he left with the Warmasters, his daughter Zyla turned against him and joined Warthak. Now Babari is back, and must deal with the situation!",
        "books": [
            1,
            13,
            15,
            162
        ]
    },
    {
        "id": 2550,
        "name": "Storm Beard",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_stormbeard",
        "monster_origin": "normal",
        "description": "It looks like Varuna and Cavenfish have competition. Storm Beard has a magnificent ship, The Thunder of the Seven Seas, he\u2019s elegantly dressed and he has skills that will crush any pirate and, in fact, any monster of the Water element!",
        "books": [
            4,
            10,
            31,
            132
        ]
    },
    {
        "id": 2551,
        "name": "Drakor",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_drakor",
        "monster_origin": "elite",
        "description": "When Eggeater, Goran, Daganth, Drekk, and Dracontium created an alliance of dragons, Drakor wanted to join but, because he's only part dragon, he wasn't accepted. That devastated him, but he swore he would have his revenge on the alliance. He will take all members down one by one.",
        "books": [
            1,
            13,
            25,
            131
        ]
    },
    {
        "id": 2552,
        "name": "Treetopog",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_treetopog",
        "monster_origin": "normal",
        "description": "Treetopog lived a quiet and peaceful life in the jungle until an explorer captured him and sold him to the Bestiarium Exhibition Center.  He was picked on by kids for years but one day, he managed to break his chains and he escaped. His dream is to return to the jungle.",
        "books": [
            4,
            1,
            102
        ]
    },
    {
        "id": 2553,
        "name": "Belbreath",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_belbreath",
        "monster_origin": "normal",
        "description": "This Legendary creature is the star at the Bestiarium Exhibition Center. Her unique attributes make her a wonder for both visitors and investigators. However, Belbreath is also a natural fighter, and you can't keep a fighter on an exhibition stand for long. She belongs in the battlefield!",
        "books": [
            3,
            2,
            102
        ]
    },
    {
        "id": 2554,
        "name": "Neobuki",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_neobuki",
        "monster_origin": "normal",
        "description": "Quick and sparkling Neobuki was traveling across the universe when a black hole sucked her in. She was unable to skip it, and she hasn't found her way out of it yet, but in the meantime, she's managed to project herself onto the battlefield!",
        "books": [
            12,
            2,
            30
        ]
    },
    {
        "id": 2556,
        "name": "Itzanami",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_itzanami",
        "monster_origin": "normal",
        "description": "It is known that Mountezuma is an arrogant and untrusting emperor, and he has a right to be like that: Everyone hates him, everyone but Itzanami, who will do anything necessary to defend her leader. She could pull off that defense because, ironically, she is much more powerful than he will ever be!",
        "books": [
            5,
            7,
            21,
            92
        ]
    },
    {
        "id": 2557,
        "name": "Warmaster Remntar",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_remntar_a",
        "monster_origin": "war_master",
        "description": "Remntar was a humble blacksmith working on protection relics and armor for King Daeron's army when he received a visit from the Warmasters, who summoned him to become one of them and fight by their side against the Titans. Now Remntar is back home, combining his old job with his role as a Warmaster.",
        "books": [
            6,
            2,
            15
        ]
    },
    {
        "id": 2558,
        "name": "Soul Hugger",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_soul_hugger",
        "monster_origin": "elite",
        "description": "Soul Hugger feeds on damned souls, but they aren\u2019t an easy meal to find. However, this monster knows his way around Hell, and he has paid one of the Soulfagi to \u201close\u201d a soul or two from time to time when carrying them around areas of punishment. Thus, the Soulfagous gets an extra pay and Soul Hugger gets his dinner!",
        "books": [
            3,
            2,
            25,
            53
        ]
    },
    {
        "id": 2559,
        "name": "Kozorg",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_kozorg",
        "monster_origin": "normal",
        "description": "Kozorg used to be nothing more than a bully, better known for being Frosilka\u2019s brother than for his own merits. However, when Thetys rose to power, she named him part of the Royal Guard, just because he was her friend. He didn\u2019t last long, though. The minute Thalassa returned, he was fired!",
        "books": [
            4,
            13,
            21,
            155
        ]
    },
    {
        "id": 2560,
        "name": "Saulot",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_saulot",
        "monster_origin": "normal",
        "description": "Saulot was a cruel general who commanded armies with great success but no compassion. After years on the job, one of his soldiers finally turned against him and killed him, but that wasn't the end of Saulot! Now his dead self torments and tortures soldiers for pleasure.",
        "books": [
            5,
            3,
            8,
            31,
            53
        ]
    },
    {
        "id": 2561,
        "name": "Frosilka",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_frosilka",
        "monster_origin": "normal",
        "description": "Frosilka was Head of the Royal Guard while Thetys was the Queen of the Water Realm. Stronger than Thetys and extremely loyal to her, she was outstanding at her job, but when Thalassa came back, Frosilka couldn\u2019t stand serving another queen, so she quit. Now she\u2019s devoted to helping Thetys seize power from her mother!",
        "books": [
            4,
            13,
            21,
            155
        ]
    },
    {
        "id": 2562,
        "name": "Eeltron",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_eeletron",
        "monster_origin": "normal",
        "description": "Eeltron was the only of Thalassa\u2019s guards to keep his job when Thetys took the throne. He was too strong to waste and his sense of duty wouldn\u2019t let him betray the queen, whoever she was. And so, he stayed loyal to the throne, but he was also extremely happy and relieved the day Thalassa returned!",
        "books": [
            4,
            20,
            155
        ]
    },
    {
        "id": 2563,
        "name": "Shademoon",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_shademoon",
        "monster_origin": "normal",
        "description": "Shademoon is a free spirit, a warrior without a home. Every night of new moon, this faceless being moves to a new city with a new secret mission he accomplishes quietly before leaving. No one knows his ultimate objective.",
        "books": [
            2,
            20,
            30,
            61
        ]
    },
    {
        "id": 2564,
        "name": "Warmaster Sherezar",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_sherezar_spine",
        "monster_origin": "war_master",
        "description": "Sherezar sacrificed himself in the final battle of the Warmasters against the Titans in a heroic move that guaranteed the victory of the Warmasters, but now his friend and fellow Warmaster Necromancer has resurrected him! However, he\u2019s changed... It's like death hasn't left his body!",
        "books": [
            8,
            15,
            2,
            91
        ]
    },
    {
        "id": 2565,
        "name": "Makugan",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_makugan",
        "monster_origin": "normal",
        "description": "Makugan is a cyborg sent from the future to stop the lethality of Jakugan. However, will the presence of this monster stop the problem that is Jakugan? Or will the remedy be worse than the problem itself? Has anyone thought that maybe Makugan's futuristic skills could break the balance in the present?",
        "books": [
            6,
            7,
            21,
            31,
            121
        ]
    },
    {
        "id": 2566,
        "name": "Sunblast",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_sunblast",
        "monster_origin": "normal",
        "description": "Sunblast was The Firestorm's disciple, but he disagreed with his teacher a lot. Those disagreements ended up in the battlefield, where The Firestorm kicked Sunblast so hard that he flew off and landed onto the sun. The Firestorm thought that was the end of Sunblast, but he was wrong!",
        "books": [
            12,
            13,
            21,
            30,
            76
        ]
    },
    {
        "id": 2567,
        "name": "Zameleon",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_zameleon",
        "monster_origin": "normal",
        "description": "Zameleon is Grumpex\u2019s younger brother. He\u2019s really cool and laid back, most of the time. But when it\u2019s time to fight alongside his brother and the rest of the Chameliens, Zameleon\u2019s Support skills are indispensable.",
        "books": [
            6,
            1,
            20,
            119
        ]
    },
    {
        "id": 2568,
        "name": "Grumpex",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_grumpex",
        "monster_origin": "normal",
        "description": "Grumpex is the head of the Chameliens, a civilization of space warriors! Until the Chameliens arrived, the Skeel army ruled the area, but ever since Grumpex and his warriors have been around, Master Skeel and his troopers have nothing to do against them.",
        "books": [
            6,
            1,
            20,
            119
        ]
    },
    {
        "id": 2570,
        "name": "Warmaster Ragnarok",
        "attributes": [
            "s",
            "s"
        ],
        "rarity": 5,
        "img_name": "legendary_ragnarok_a_spine",
        "monster_origin": "war_master",
        "description": "Ragnarok has proclaimed himself The One True Warmaster after possessing Sherezar and tricking each and every one of them all into saying a spell to give him some of their best skills! It\u2019s going to be hard to stop a Warmaster with skills of all the other Warmasters.",
        "books": [
            11,
            5,
            13,
            8,
            15,
            2
        ]
    },
    {
        "id": 2571,
        "name": "Yimburbur",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_yimburbur",
        "monster_origin": "normal",
        "description": "When Talika found little Yimburbur lost in the forest, she thought she would raise him so that he could become a forest counsellor like she was. However, as much as she tried to make a Support monster out of Yimburbur, he wasn\u2019t meant to be one. He turned out to be a big brute. A brute with some great healing skills, but a brute.",
        "books": [
            13,
            20,
            2,
            31,
            59
        ]
    },
    {
        "id": 2572,
        "name": "Wangzhou",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_wangzhou",
        "monster_origin": "normal",
        "description": "No one expects a Metal monster in the terracotta army, so enemies are easily caught off-guard by Wangzhou's attacks. His figure stands in the front row of the battle, draining the opponent\u2019s resources before they can reach the rest of the terracotta warriors.",
        "books": [
            11,
            5,
            8,
            61
        ]
    },
    {
        "id": 2573,
        "name": "Qinling",
        "attributes": [
            "m",
            "s"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_qinling",
        "monster_origin": "normal",
        "description": "When Qinling woke up next to the Emperor\u2019s grave and saw that his fellow soldier Qin had abandoned his duty of guarding the Emperor for eternity, he decided it was time for the entire army to do the same, so he used his Magic powers to wake up all the terracotta warriors one by one!",
        "books": [
            11,
            5,
            8,
            61
        ]
    },
    {
        "id": 2574,
        "name": "Dunn Ra",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_dunn_ra",
        "monster_origin": "elite",
        "description": "Dunn Ra is the grand protector of the free realm, but don't think that makes her a servant of the realm's kings! Neither Akhenotep or Bandses are worthy of her help so, until she finds a king who deserves her service, she'll protect monsters of her choice on the battlefield.",
        "books": [
            7,
            3,
            21,
            25,
            160
        ]
    },
    {
        "id": 2575,
        "name": "Koralle Brutalis",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_koralle_brutalis",
        "monster_origin": "normal",
        "description": "The war between Varuna and Cavenfish has had a negative impact on the ocean in general, but especially on the seabed and its coral reefs, which are being destroyed by lost bombs from pirate ships. Tired of the situation, Koralle Brutalis is ready to protect the reefs, and also fight back!",
        "books": [
            4,
            13,
            20,
            30,
            154
        ]
    },
    {
        "id": 2576,
        "name": "Olnir",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_olnir",
        "monster_origin": "normal",
        "description": "In the middle of the Monster Legends Multiverse, there's an ancient city only accessible through the Rainbow Bridge. Anyone can walk down the bridge, but only a few chosen monsters can cross the gates at the end of it and enter the ancient city. It is Olnir's job to decide who comes in!",
        "books": [
            10,
            7,
            20,
            131,
            162
        ]
    },
    {
        "id": 2577,
        "name": "Helgudin",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_helgudin",
        "monster_origin": "normal",
        "description": "When Helgudin crossed the Rainbow Bridge, Olnir told her that she wasn't allowed into the magical ancient city behind the gates she guards. However, Helgudin isn't one to take no for an answer and her intentions aren't just to enter the city, she wants to rule it!",
        "books": [
            5,
            7,
            20,
            131,
            162
        ]
    },
    {
        "id": 2578,
        "name": "Saika",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_saika",
        "monster_origin": "normal",
        "description": "Saika worked as a guide for lost travellers. When she retired, her granddaughter Kassia took over the job, but when Countess Flawless found out that Kassia was advising monsters against going to Monstelvania, she made a move against Kassia, so Saika has decided to come out of retirement and teach that Countess a lesson!",
        "books": [
            9,
            13,
            7,
            91
        ]
    },
    {
        "id": 2579,
        "name": "O'Reilly",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_oreilly",
        "monster_origin": "normal",
        "description": "O'Reilly discovered the Dungeons when he was young and they were like a little fight club. He started fighting for some Gold but soon he became the biggest attraction in there. Dungeons became so popular that there wasn't room for everyone, so O'Reilly invented the battle rules. Since then, O\u2019Reilly is considered the Designer of the Dungeons!",
        "books": [
            12,
            5,
            1,
            31,
            159
        ]
    },
    {
        "id": 2580,
        "name": "Marquis De Flambe",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_marquis_de_flambe",
        "monster_origin": "normal",
        "description": "Marquis de Flambe used to live in the gardens of the Light Kingdom with Prince Charmless, but Princess Bella Baal was terrified of him, so he left to go by Firyna\u2019s side, where his value would be appreciated instead of feared. Watch out for the fire toad in a suit of armor!",
        "books": [
            13,
            20,
            2,
            30
        ]
    },
    {
        "id": 2582,
        "name": "Gorg",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_gorg",
        "monster_origin": "elite",
        "description": "Gorg is Kozorg and Frosilka's father, but he's never around: he's a lonely creature who hunts eggs undersea for a living. He's filled the Sea ward of the Bestiarium Exhibition Center with Epic and Legendary monsters almost single-handedly!",
        "books": [
            4,
            11,
            13,
            25,
            155
        ]
    },
    {
        "id": 2583,
        "name": "Clipeum",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_clipeum",
        "monster_origin": "normal",
        "description": "With all the movements in the Underworld and the Evil Legions, the Good Legions are working hard to reinforce their ranks. That\u2019s how they\u2019ve come up with the finest piece of what you could call divine technology! Clipeum has been designed by the angels to protect and support heavenly warriors.",
        "books": [
            10,
            6,
            3,
            31,
            90
        ]
    },
    {
        "id": 2584,
        "name": "Hobkin",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_hobkin",
        "monster_origin": "normal",
        "description": "Hobkin is a magnificent artifact built by Nabuline to keep her safe in her journeys. While Nabuline walks down dangerous roads, Hobkin flies over her and, with its super vision, it is able to alert Nabuline that an enemy is coming!",
        "books": [
            12,
            10,
            6
        ]
    },
    {
        "id": 2585,
        "name": "Nabuline",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_nabuline",
        "monster_origin": "normal",
        "description": "This powerful sorcerer was tired of serving the different leaders that ruled over the tribe of miner dwarves she belonged to, so one day, she said her goodbyes and set on a new adventure with the only company of an artifact she built herself: Hobkin.",
        "books": [
            10,
            7,
            20,
            103
        ]
    },
    {
        "id": 2586,
        "name": "Wasper",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_wasper",
        "monster_origin": "normal",
        "description": "This Magic bug spent years hiding from Clivia, who was obsessed and wanted to devour him in one bite. However, now Wasper has come out of his shelter with a set of heavy attacks and a new trick up his wing: trait disabling! Who\u2019s going to do the chasing now?",
        "books": [
            11,
            3,
            21,
            30
        ]
    },
    {
        "id": 2587,
        "name": "Pierceid",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_pierceid",
        "monster_origin": "normal",
        "description": "Pierceid has emerged from the darkest corner of Purgatory to support The Inheritor on his claim to the Throne of Hell. What people seem to be forgetting is that, why would such a powerful and feared creature stand behind someone weaker? Is she planning to wreak havoc from behind the Throne?",
        "books": [
            5,
            1,
            3,
            31,
            53
        ]
    },
    {
        "id": 2588,
        "name": "Hookuai",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_hookuai",
        "monster_origin": "normal",
        "description": "Hookuai is a fan of mass destruction, a cause to which he contributes actively. He used to have a little club of friends with his same hobby, but all of them were defeated over the years. Now it\u2019s just him, and it gets boring! Maybe he should rescue one friend to have someone to play with. Cryotan, maybe?",
        "books": [
            4,
            11,
            21,
            155
        ]
    },
    {
        "id": 2589,
        "name": "Volthar",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_volthar",
        "monster_origin": "normal",
        "description": "Volthar is a sophisticated machine which can easily deceive his enemies. Because of its looks, they all expect it to come with heavy attacks, or to provide a strong protection for his allies but its trick is to control and possess them with electric charges before they can realize it's started attacking!",
        "books": [
            10,
            6,
            2,
            120
        ]
    },
    {
        "id": 2590,
        "name": "Mirak",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_mirak",
        "monster_origin": "normal",
        "description": "With the battlefield getting tougher and tougher, all monsters strive for excellence, but there are two creators in particular who have made it their goal to rule all fights! Ingenica and Hackster have joined forces in a secret research lab to create an unstoppable artificial intelligence being: Mirak!",
        "books": [
            12,
            6,
            7,
            30,
            120
        ]
    },
    {
        "id": 2591,
        "name": "Mephisto",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_mephisto",
        "monster_origin": "normal",
        "description": "Everyone in Hell hates Saulot\u2019s annoying pet dog: Mephisto. He\u2019s a lazy heavy beast who walks around the place barking, biting everyone, and drooling liquid fire. However, as much as they hate this silly dog, no one stands up to him, because he\u2019s terribly tough and dangerous!",
        "books": [
            11,
            5,
            2,
            31,
            104
        ]
    },
    {
        "id": 2592,
        "name": "Zeighar",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_zeighar",
        "monster_origin": "normal",
        "description": "While most creatures of his kind want to be part of the alliance of dragons, Zeighar's goal isn't to become a member but to lead, or better said, control the alliance and use its members to fight his own personal battles. Will they be up for it? Well... He doesn't really care what they're up for.",
        "books": [
            3,
            21,
            8,
            53
        ]
    },
    {
        "id": 2593,
        "name": "Draghar",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_draghar",
        "monster_origin": "normal",
        "description": "Draghar's the muscle to Zeighar's brain, and he doesn't mind not being the one in the spotlight. He loves the dirty work and he never asks questions about it. He tortures Zeighar's enemies until they give him what he wants. Some call Draghar The White-Winged Devil. Quiet but deadly.",
        "books": [
            1,
            3,
            11,
            53
        ]
    },
    {
        "id": 2594,
        "name": "Wyrmlad",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_wyrmlad",
        "monster_origin": "elite",
        "description": "When the dragons created an alliance and Drakor was excluded from it, he swore to make them regret leaving him out. His plan was to do It on his own but realistically, in a 1 vs 5 war, he didn\u2019t stand a chance, so he had to bring in back up, an attacker like himself, but a Light one: Wyrmlad!",
        "books": [
            9,
            10,
            1,
            25
        ]
    },
    {
        "id": 2595,
        "name": "Dr Marihelson",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "dark_legendary_dr_marihelson",
        "monster_origin": "normal",
        "description": "Dr. Marihelson is back home after having spent many years investigating how the World Water War turned into a nuclear conflict, but he has changed a lot. When he left he was a kind and good looking monster, but his exposure to radiation has had terrible effects on his physique and behavior!",
        "books": [
            9,
            12,
            8,
            30,
            78
        ]
    },
    {
        "id": 2596,
        "name": "Narok",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_narok",
        "monster_origin": "normal",
        "description": "Narok was a slave of Lord Mammoth and his tribe for many years. Tired of hunting only to bring food to the table of the Lord\u2019s banquets, he rose against Lord Mammoth and won! Now he lives alone and free in the Wasteland Desert, where he can hunt for himself and no one but himself.",
        "books": [
            12,
            5,
            11,
            31,
            92
        ]
    },
    {
        "id": 2597,
        "name": "Zizania",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_zizania",
        "monster_origin": "elite",
        "description": "Ever since this beast of alien origin appeared on Earth, different teams of monsters have been trying to contain its lethal attacks. Every time someone finds a way to control Zizania, it changes its behavior and becomes even more terrifying.",
        "books": [
            6,
            20,
            21,
            25,
            121
        ]
    },
    {
        "id": 2598,
        "name": "Silverleaf",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_silverleaf",
        "monster_origin": "normal",
        "description": "Silverleaf is one of the youngest yet wisest spirits in the forest. He was just a young elf when he first saw the future in the stone of his staff. He's made several predictions that have helped the creatures of the forest to prepare and protect themselves against dangerous invasions like Zizania's.",
        "books": [
            10,
            20,
            2,
            102
        ]
    },
    {
        "id": 2599,
        "name": "Zorgon",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_zorgon",
        "monster_origin": "normal",
        "description": "Hackster has been using encryption systems to protect precious information about the strengths and weaknesses of every monster in the multiverse. His work guarantees the balance in battles, but now he has detected an intruder in the system! Zorgon has accessed the monster database. What is he planning to do with the information?",
        "books": [
            6,
            21,
            2,
            61
        ]
    },
    {
        "id": 2600,
        "name": "Lighterium",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_lighterium",
        "monster_origin": "normal",
        "description": "Lighterium\u2019s mission in the Underworld is to guarantee that no good souls end up trapped there by mistake, but so many years down there, as well as his friendly relationship with Barbatos, are starting to cloud his judgment. Is Lighterium now just messing around with souls for fun?",
        "books": [
            5,
            9,
            2,
            30,
            93
        ]
    },
    {
        "id": 2601,
        "name": "Nitroblaster",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_nitroblaster",
        "monster_origin": "elite",
        "description": "General Holter is on a mission to conquer a frozen planet he\u2019s discovered, but its current inhabitants are as dangerous as dangerous gets. For this reason, he\u2019s staying in the backline while someone else does his dirty work: Nitroblaster is an unstoppable machine designed to kill!",
        "books": [
            12,
            6,
            25,
            11,
            121
        ]
    },
    {
        "id": 2602,
        "name": "Madam Fusion",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_madam_fusion",
        "monster_origin": "normal",
        "description": "Meet Malair's daughter! To her father's discontent, Madam Fusion was never interested in joining a team of villains. Instead, she found her own partner: VoltaiK. Her skills worked very well with his and the best part was that Malair hated him! They have a special chemistry, both inside and outside the battlefield.",
        "books": [
            12,
            13,
            7,
            31,
            75
        ]
    },
    {
        "id": 2603,
        "name": "Eisul",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_eisul",
        "monster_origin": "normal",
        "description": "Eisul is the strongest member and thus the commander of the Sulien civilization. Suliens are beasts made of parts of other living things that sort of froze into a block which is controlled by a parasite living on their inside. This rare build makes Suliens very unpredictable.",
        "books": [
            13,
            9,
            8,
            121
        ]
    },
    {
        "id": 2604,
        "name": "Mop",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_mop",
        "monster_origin": "normal",
        "description": "Mop and Soap Sam used to be a great team, wiping out enemies all over the place. One day, they got into a feud, resulting in Mop totally wiping Soap Sam out and stealing all his powers! Now Soap Sam is a weak and miserable creature, while Mop is pretty much unstoppable.",
        "books": [
            13,
            21,
            2,
            30,
            142
        ]
    },
    {
        "id": 2605,
        "name": "Positron",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_positron",
        "monster_origin": "normal",
        "description": "Global Mech Ltd., creators of M-2 Wyvern, are back with a new design that will be the best accessory to any monster team. Positron is the perfect companion for attackers with big egos: It is here to stop enemies and make allies shine. Customer reviews say: \u201cMake space for Timerion\u2019s successor!\u201d",
        "books": [
            6,
            13,
            20,
            31,
            120
        ]
    },
    {
        "id": 2606,
        "name": "Hyperia",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_hyperia",
        "monster_origin": "normal",
        "description": "Deep beneath the heart of the forest, lives a mythical titan by the name of Hyperia. He feeds the trees above with gold sap. In an attempt to steal the sap, Darmith and Kaih once burnt down part of the forest, but a furious Hyperia raged through the surface and buried them there, where they\u2019re trapped to this day! ",
        "books": [
            12,
            10,
            20,
            102
        ]
    },
    {
        "id": 2607,
        "name": "Zunobia",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_zunobia",
        "monster_origin": "normal",
        "description": "Zunobia was a treasure hunter, but she didn\u2019t get too far until she realized that, in order to get really rich, she had to do things no one else wanted to do. That\u2019s how she found her perfect job: tomb raider! Most would cringe at the idea of breaking into graveyards, but Zunobia does it with one thing in mind: the treasures that go underground with their owners.",
        "books": [
            2,
            7,
            10
        ]
    },
    {
        "id": 2608,
        "name": "Ugluk",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_ugluk",
        "monster_origin": "elite",
        "description": "The Lizards were a dynasty known for their might and their riches. By tradition, when they died, they were buried with their treasures. Now there\u2019s only one Lizard left, Ugluk, but the pressure of maintaining his family\u2019s glory got the best of him. To this day, he spends his time in the dynasty graveyard guarding his ancestors\u2019 remainings and riches.",
        "books": [
            13,
            1,
            21,
            25
        ]
    },
    {
        "id": 2609,
        "name": "Gurlik",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_gurlik",
        "monster_origin": "normal",
        "description": "Gurlik had been betrayed, killed, and thrown into a swamp by his successor Borjork, but the shaman of the orc tribe, Warspellz, has managed to bring him back from the dead. Gurlik has now risen from the swamp riding a massive toad named Gurmit, and he's hungry for vengeance.",
        "books": [
            5,
            21,
            8,
            30
        ]
    },
    {
        "id": 2610,
        "name": "Kronx",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_kronx",
        "monster_origin": "elite",
        "description": "This sorcerer has the rare ability of time-traveling, but something about her power has become her sole obsession; no matter how much she plays with time, she cannot stop aging, so she cannot dodge death... for now. She has arrived in Monster Legends' present time, determined to find the ultimate solution for her craving.",
        "books": [
            13,
            20,
            25,
            7,
            91
        ]
    },
    {
        "id": 2611,
        "name": "Hornet",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_hornet",
        "monster_origin": "normal",
        "description": "In his journey to rule the universe, Faraday has spent a long time looking for an ally, and he\u2019s finally found the perfect one! His name is Hornet, a cold-blooded Thunder villain with unusual skills that will both surprise and scare his enemies. A very dangerous alliance is born!",
        "books": [
            6,
            3,
            21,
            120
        ]
    },
    {
        "id": 2612,
        "name": "Devastress",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_devastress",
        "monster_origin": "normal",
        "description": "Meet Devastator\u2019s sister! She has arrived in Monster Legends to save her brother from Malair, who\u2019s been controlling him since he was a baby! However, when she rescues him from the Supervillains\u2019 Hideout, he will have to deal with the fact that he\u2019s not the strong one in the family anymore.",
        "books": [
            12,
            13,
            7,
            31,
            76
        ]
    },
    {
        "id": 2613,
        "name": "Kronxian Guard",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_kronxian_guard",
        "monster_origin": "normal",
        "description": "Kronxian Guard was one of the happiest monsters in the Multiverse, but the early death of his daughter changed him forever. From that moment forward, all he wanted was to relive his happy moments with her. He found Kronx, a sorcerer who could travel in time, and convinced her to take him to the past. In return, he became her loyal guard for eternity. ",
        "books": [
            13,
            20,
            2,
            91
        ]
    },
    {
        "id": 2614,
        "name": "Gualgui",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_gualgui",
        "monster_origin": "normal",
        "description": "Gualgui is the newest addition to Captain Copperbeard\u2019s crew. She\u2019s a dark sorcerer who has spent many years in the Desert Wasteland. She\u2019ll bring a much needed set of powers to the team, making the Space Raiders stronger than ever. Take that, Space Corsairs!",
        "books": [
            21,
            2,
            11,
            78
        ]
    },
    {
        "id": 2616,
        "name": "Nikasia",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_nikasia",
        "monster_origin": "normal",
        "description": "Nikasia is a young magic apprentice, as she wants to follow the steps of her grandmother Saika and her big sister Kassia. She knows a few magic spells but she's passionate, agile, strong and very talented, so very soon she'll be worthy of her heritage!",
        "books": [
            13,
            20,
            7,
            31,
            59
        ]
    },
    {
        "id": 2617,
        "name": "Lord Pumpseed",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_lord_pumpseed",
        "monster_origin": "halloween_exc",
        "description": "Necromancer's plan backfired enormously and now the super powerful Lord Pumpseed is roaming free, causing all sorts of havoc. He was supposed to be resurrected and then controlled, but thanks to Hayman's clumsiness, now Lord Pumpseed is the most feared and fastest Control monster ever!",
        "books": [
            5,
            15,
            2,
            11
        ]
    },
    {
        "id": 2618,
        "name": "Wildbird",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_wildbird",
        "monster_origin": "forsaken",
        "description": "Wildbird was the protector of a garden of golden apples with valuable golden seeds used to fuel a portal between dimensions. The lord of the portal had chosen him because of his loyalty, but one day, Wildbird broke that loyalty. He was tricked by his love Zunobia, who stole from the garden, leaving Wildbird lonely and jobless. Now he has to start a new life!",
        "books": [
            12,
            3,
            15,
            13
        ]
    },
    {
        "id": 2619,
        "name": "Wickah",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_wickah",
        "monster_origin": "forsaken",
        "description": "Wickah, Protector of all Swamp Creatures, is tired of being given the cold shoulder by the rest of protectors just because the swamp isn't as beautiful and radiant as other parts of the forest. So she has a plan: She's going to claim part of the forest and its surroundings and turn it all into a damp swamp biosphere. They won't be ignored anymore!",
        "books": [
            21,
            15,
            8,
            7,
            60
        ]
    },
    {
        "id": 2620,
        "name": "Ursus",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_ursus",
        "monster_origin": "normal",
        "description": "Since a youngster, Ursus had always dreamed of becoming a fighter like his brother Voytek, who was a ferocious soldier. During the great war, Voytek was captured and taken to the mountains so, when Ursus found out, he knew it was time to prove himself: He climbed to the top to defeat an entire squadron of soldiers and rescue his brother. He\u2019s the ferocious one now!",
        "books": [
            9,
            20,
            13,
            132,
            162
        ]
    },
    {
        "id": 2621,
        "name": "Crabbydroid",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_crabbydroid",
        "monster_origin": "forsaken",
        "description": "After he lost his family to plastic in the ocean, Crabbydroid used the trash he found on the seabed to build a mechanical exoskeleton. He built an armor so powerful that it made him powerful enough to destroy Global Mech, the factory that dumped trash on his family\u2019s habitat.",
        "books": [
            4,
            6,
            20,
            15,
            78
        ]
    },
    {
        "id": 2622,
        "name": "Rociuko",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_rociuko",
        "monster_origin": "normal",
        "description": "Rociuko was Kihaku\u2019s apprentice, but she had great ambitions that were always crushed by her teacher. She got so tired of Kihaku\u2019s traditional ways that she left him and joined his greatest enemy, Harusami. Kihaku will regret having underestimated his apprentice, because now she\u2019ll make Harusami her puppet and Kihaku her victim.",
        "books": [
            9,
            21,
            7,
            52
        ]
    },
    {
        "id": 2623,
        "name": "Yedra",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_yedra",
        "monster_origin": "normal",
        "description": "Yedra is a strategy mastermind and never thinks about anything but her next chance to win. It\u2019s no wonder she\u2019s never noticed her friend Son-Cookie has been madly in love with her since as long as time. Last Xmas she was given mistletoe by her admirer, and instead of romance, she turned it into a poisonous weapon for battle!",
        "books": [
            9,
            7,
            10,
            31,
            102
        ]
    },
    {
        "id": 2624,
        "name": "Santerion",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_santerion",
        "monster_origin": "forsaken",
        "description": "Santerion is a state-of-the-art, impressive yet friendly robot created by Ingenica to help Thundeer bring gifts and joy to all the monsters in the world. It can get through storms and face villains if they try to get in the way. Once a year, Thundeer chooses gifts and lucky receivers, and Santerion does the delivery. Perfect team!",
        "books": [
            4,
            6,
            9,
            15,
            159
        ]
    },
    {
        "id": 2625,
        "name": "Thundeer",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_thundeer",
        "monster_origin": "forsaken",
        "description": "Thundeer loved to bring gifts to the baby monsters in neighboring villages. One day he was struck by lightning, and this made him stronger, but his appearance became too scary, so to avoid shocking anyone, now it is Santerion delivering the gifts that Thundeer picks for the monsters!",
        "books": [
            9,
            15,
            10,
            13,
            159
        ]
    },
    {
        "id": 2627,
        "name": "Grakon",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_grakon",
        "monster_origin": "elite",
        "description": "Drekk received lots of visits to his lair from monsters in need of his curative powers, but his brother Grakon was fed up with having his home invaded by strangers, so he spent his time scaring visitors away. He became famous for being Drekk's troublesome brother, and he ended up having to leave the lair. Now he\u2019s trouble on the loose!",
        "books": [
            1,
            3,
            21,
            25,
            60
        ]
    },
    {
        "id": 2628,
        "name": "Nisael",
        "attributes": [
            "s",
            "d"
        ],
        "rarity": 5,
        "img_name": "legendary_dark_nisael",
        "monster_origin": "forsaken",
        "description": "General Nishant killed Samael's brother, Ismael, and then recrafted him using dark magic. The result was Nisael, an invincible spirit that will bring the glory back to Nishant's Army and stop Samael's rise. Or will Samael try to go against a monster that was - and perhaps still is - his brother?",
        "books": [
            21,
            15,
            2,
            8,
            105
        ]
    },
    {
        "id": 2629,
        "name": "Zenfira",
        "attributes": [
            "s",
            "f"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_zenfira",
        "monster_origin": "forsaken",
        "description": "There was an expedition of Nature monsters to Hell, but on their way out, they left behind a little centaur called Zenfira, who had followed all the adults into Hell. They never returned for her, so Zenfira slowly became the spirit of hatred and resentment she is today.",
        "books": [
            5,
            20,
            15,
            7,
            93
        ]
    },
    {
        "id": 2630,
        "name": "Synaptikus",
        "attributes": [
            "s",
            "mt"
        ],
        "rarity": 5,
        "img_name": "legendary_metal_synaptikus",
        "monster_origin": "normal",
        "description": "On the Suliens\u2019 frozen planet, a brain came alive and self-aware in the chaos of the universe. It felt threatened by Eisul, its natural predator, so it built itself a mechanical suit. Now, Synaptikus is a fully functional monster, ready to fight off Eisul or any Sulien that may stand in its way.",
        "books": [
            6,
            9,
            20,
            120
        ]
    },
    {
        "id": 2631,
        "name": "Zombic",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_zombic",
        "monster_origin": "normal",
        "description": "Zombic is the warden at Count Vlad\u2019s castle dungeons. He\u2019s so fearsome that his prisoners never attempt to escape from his watch. But there\u2019s more to Zombic. In his free time, he likes to meet his friend Muerte McBlood, with whom he keeps a cute little vegetable garden by the castle. ",
        "books": [
            5,
            11,
            31,
            8,
            53
        ]
    },
    {
        "id": 2632,
        "name": "Rubellus",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_rubellus",
        "monster_origin": "forsaken",
        "description": "Rubellus was the king of a Mushroom Kingdom, but after one of his subjects tried to betray him, he became paranoid and ate them all as a punishment. Now Rubellus is alone and insane, but within, he\u2019s got the physical power of his entire dead kingdom, and he\u2019ll prove he\u2019s still the King.",
        "books": [
            20,
            2,
            10,
            15,
            60
        ]
    },
    {
        "id": 2633,
        "name": "PZ Ronin",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_pz_ronin",
        "monster_origin": "forsaken",
        "description": "PZ Ronin used to work in Zorgon\u2019s team of hackers, but he was kicked out after disagreeing with the project\u2019s actions. Now he\u2019s made it his mission to warn the population of Monster Legends about Zorgon and to sabotage his plans.",
        "books": [
            12,
            20,
            2,
            15,
            61
        ]
    },
    {
        "id": 2634,
        "name": "Rekka",
        "attributes": [
            "f",
            "s"
        ],
        "rarity": 5,
        "img_name": "legendary_fire_rekka",
        "monster_origin": "normal",
        "description": "After spending years embroiled in the bitter power struggle between General Darmith and Lucifire, Rekka decided to walk away and start a new life. The Fire Warmaster, Barbael, recognized his gesture as an act of bravery, and armed Rekka with an unstoppable weapon, the Fire nunchaku. Now he\u2019s ready to find a battle worth fighting!",
        "books": [
            20,
            10,
            13,
            61
        ]
    },
    {
        "id": 2635,
        "name": "Lamia",
        "attributes": [
            "s",
            "e"
        ],
        "rarity": 5,
        "img_name": "legendary_earth_lamia",
        "monster_origin": "forsaken",
        "description": "Lamia was born in a city of dragons where she was the best in the competitive fighting scene. However, she soon got tired of traditional battles, and she started working on more elaborate skills. The dragon community didn\u2019t approve of her evolution, so she\u2019s come to Monster Legends looking for a challenge!",
        "books": [
            1,
            20,
            7,
            15
        ]
    },
    {
        "id": 2636,
        "name": "Urtikus",
        "attributes": [
            "s",
            "n"
        ],
        "rarity": 5,
        "img_name": "legendary_nature_urtikus",
        "monster_origin": "normal",
        "description": "Urtikus was born when a potion that Gretchen had made to boost Galante\u2019s breeding powers spilled all over her rose garden. Now this gigantic, monstrous flower is pure breeding power on the loose!",
        "books": [
            11,
            13,
            8,
            60
        ]
    },
    {
        "id": 2637,
        "name": "Frazerot",
        "attributes": [
            "s",
            "w"
        ],
        "rarity": 5,
        "img_name": "legendary_water_frazerot",
        "monster_origin": "normal",
        "description": "Frazerot has traveled from the Northern Lands to this side of the Monster Legends Universe looking for his daughter Caillech, who hasn't been home for Christmas this year. Can you help Frazerot? Have you seen Caillech around your islands?",
        "books": [
            9,
            2,
            10,
            31,
            162
        ]
    },
    {
        "id": 2638,
        "name": "Korruptus",
        "attributes": [
            "s",
            "l"
        ],
        "rarity": 5,
        "img_name": "legendary_light_korruptus",
        "monster_origin": "forsaken",
        "description": "Korruptus was the ruler of a tiny yet wealthy kingdom. He was loved and respected by his subjects, but when the realm started receiving attacks from neighbors trying to steal its gold, Korruptus turned to black magic to defend it. This practice drove him into madness, so he had to be dethroned. Now Korruptus is crownless and furious!",
        "books": [
            5,
            21,
            8,
            15
        ]
    },
    {
        "id": 2639,
        "name": "LazarBeam",
        "attributes": [
            "s",
            "m"
        ],
        "rarity": 5,
        "img_name": "legendary_magic_lazarbeam",
        "monster_origin": "forsaken",
        "description": "LazarBeam is Warmaster Sherezar\u2019s champion in the Battle Royale Tournament that takes place yearly as part of the Warmasters\u2019 Summit. He\u2019s made of the same substance as Xiron and Gelotron, but Sherezar has tweaked him so that he\u2019s the perfect attacker.",
        "books": [
            12,
            2,
            10,
            15,
            105,
            133
        ]
    },
    {
        "id": 2640,
        "name": "Katufo",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "legendary_thunder_katufo",
        "monster_origin": "mythic",
        "description": "When VoltaiK was little, he had a comic book hero: Katufo the Space Defender! This year, he received a special edition of the comic book for his birthday and, after he placed it next to a piece of Mythic Amber, his childhood memories materialized into a real monster and Katufo came to life!",
        "books": [
            12,
            6,
            20,
            34,
            119,
            132
        ]
    },
    {
        "id": 2641,
        "name": "Cyberiel",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "legendary_metal_cyberiel",
        "monster_origin": "mythic",
        "description": "Elvira had always dreamt of having angels in outer space, but she also feared that out there, far from the heavens she controls, those angels would be more imperious than fair. It is from that fear that Cyberiel was born. This mechanical angel is everything Elvira dreaded: dark, severe, and merciless.",
        "books": [
            6,
            21,
            11,
            34,
            120
        ]
    },
    {
        "id": 2642,
        "name": "Arumel",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_arumel",
        "monster_origin": "mythic",
        "description": "Arumel was born from Elvira\u2019s longing to have angels in outer space. This one in particular is a mechanical celestial being, with impressive wings and Light weapons to ensure that justice and compassion reign.",
        "books": [
            3,
            20,
            10,
            34,
            120
        ]
    },
    {
        "id": 2643,
        "name": "Armor Claw",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "legendary_fire_armor_claw",
        "monster_origin": "mythic",
        "description": "Armor Claw was Rocigon\u2019s childhood imaginary friend. He taught him how to analyze the enemy and pursue his passions. After winning a tournament, Rocigon was given a trophy, with amber decorations and, as he looked at it, he thought \u201cThanks, old friend\u201d. Within seconds, the amber released a substance which transformed into a living Armor Claw!",
        "books": [
            12,
            1,
            10,
            15,
            34,
            62
        ]
    },
    {
        "id": 2644,
        "name": "Froma",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "legendary_magic_froma",
        "monster_origin": "mythic",
        "description": "Froma was the greatest sorceress, but after her death, her son Malair took a career path she would've never approved of: he became a villain. In a moment of deep reflection about his life choices, Malair unintentionally brought Froma back to life. She\u2019s back to clean the family's legacy!",
        "books": [
            9,
            2,
            31,
            7,
            34
        ]
    },
    {
        "id": 2645,
        "name": "Xavipit",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "legendary_water_xavipit",
        "monster_origin": "mythic",
        "description": "Ingenica had always dreamed of crafting an artifact with a real soul. She had almost given up when she received a piece of Mythic Amber, which allowed her to fulfill her dream! Xavipit is kind and empathetic, but when he hits the battleground, he becomes lethal!",
        "books": [
            6,
            20,
            10,
            34
        ]
    },
    {
        "id": 2646,
        "name": "Vandecken",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "legendary_fire_vandecken",
        "monster_origin": "mythic",
        "description": "Vandecken was a famous pirate who ruled the seas between 1720 and 1799. His daughter, Commander Alvid, was also a pirate. In 2020, to honor her father\u2019s memory, Alvid went on a treasure hunt to the end of the rainbow, but instead of a pot of gold, she found Mythic Amber! When she touched it, it transformed into Vandecken. The king of the seas is back.",
        "books": [
            4,
            5,
            13,
            34
        ]
    },
    {
        "id": 2648,
        "name": "Gaidigo",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_gaidigo",
        "monster_origin": "mythic",
        "description": "Dr. Viktor was trying to demonstrate the existence of a demon named Gaidigo at a science conference. He was presenting his study based on a fossil, but when that fossil came into contact with another of the items discussed in the conference, Mythic Amber, Gaidigo came to life!",
        "books": [
            21,
            8,
            11,
            34
        ]
    },
    {
        "id": 2650,
        "name": "Abysmuss",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_abysmuss",
        "monster_origin": "mythic",
        "description": "Abysmuss is the result of Necromancer\u2019s attempt to make Miserus disappear after he realized that he was a better necromancer than himself. Necromancer threw Miserus\u2019 lamp into the ocean but, instead of getting rid of his enemy, Abysmuss rose from the bottom of the ocean. Now there are two genies tormenting Necromancer!",
        "books": [
            4,
            9,
            10,
            53,
            34
        ]
    },
    {
        "id": 2651,
        "name": "Tayni",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_tayni",
        "monster_origin": "mythic",
        "description": "When this bug arrived in the Light Castle\u2019s botanic gardens, he made an impression on Clivia, who was secretly hoping for someone to dethrone Wasper as the strongest monster in the place. However, Tayni isn\u2019t interested in power, so he\u2019s agreed to work with Clivia, who\u2019s glad to finally take his glory.",
        "books": [
            3,
            13,
            11,
            34
        ]
    },
    {
        "id": 2652,
        "name": "Miserus",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_miserus",
        "monster_origin": "mythic",
        "description": "Necromancer conjured this genie by rubbing his lamp, but as soon as he met him, he realized he had made a mistake: Miserus is Necromancer\u2019s biggest nightmare, the new best master of necromancy, with unprecedented life-and-death skills Necromancer can only wish to have.",
        "books": [
            5,
            2,
            8,
            53,
            34
        ]
    },
    {
        "id": 2653,
        "name": "Morgz",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_morgz",
        "monster_origin": "mythic",
        "description": "Morgz had always wanted to be a dragon slayer, the most stylish killer of them all. He even had a slayer suit he had put together through many years, but he lacked one thing: the power. Then one day, when he added an amber stone to his suit, it came to life and gave him all the power he\u2019d longed for. Morgz is dressed to kill!",
        "books": [
            1,
            20,
            21,
            34,
            105
        ]
    },
    {
        "id": 2654,
        "name": "Kralik",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_kralik",
        "monster_origin": "mythic",
        "description": "This mechanical bunny\u2019s job is to spread the eggs of Dr. Wattz\u2019s evil soldiers camouflaged as Easter eggs. That way, during egg hunts, other monsters will find them, take them home and, without realising, they\u2019ll be spreading Dr. Wattz\u2019s army! Kralik is ready to rig your next egg hunt. ",
        "books": [
            6,
            21,
            31,
            11,
            34,
            119
        ]
    },
    {
        "id": 2655,
        "name": "Akunobuki",
        "attributes": [
            "s",
            "t"
        ],
        "rarity": 5,
        "img_name": "legendary_thunder_akunobuki",
        "monster_origin": "elite",
        "description": "The hologram projector Neobuki uses to appear on the battlefield has been stolen! Evil hands have taken this machine and tweaked it to project a new Neobuki, something like her twisted twin: Akunobuki.",
        "books": [
            12,
            2,
            25,
            11
        ]
    },
    {
        "id": 2656,
        "name": "Erder",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_erder",
        "monster_origin": "mythic",
        "description": "Erder was a gift from Warmaster Elvira to the citizens of Plithora, who were left without a king after they dethroned Korruptus for turning to black magic. She\u2019s an incredible protector, ready to impose justice and order. Whoever tries to bring chaos upon Plithora will have to face her lance!",
        "books": [
            1,
            10,
            7,
            34,
            62
        ]
    },
    {
        "id": 2657,
        "name": "Rara Avis",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_rara_avis",
        "monster_origin": "mythic",
        "description": "Wildbird\u2019s life was devoted to helping others and fighting for justice but he felt very lonely. One day, after helping Saika, she gave him an amber stone and, from it, Rara Avis was born! She\u2019s the perfect travel and battle buddy: brave, bold, and strong.",
        "books": [
            3,
            2,
            7,
            34,
            131
        ]
    },
    {
        "id": 2658,
        "name": "Unspeakable",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_korthor",
        "monster_origin": "mythic",
        "description": "When the angels sent Erder to protect the city of Plithora, the demons took it personally and moved to help the monsters of the cities attacking Plithora. They sent a monster whose name cannot be spoken but whose actions will be talked about.",
        "books": [
            21,
            13,
            11,
            34,
            62
        ]
    },
    {
        "id": 2659,
        "name": "Dr. Wattz",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_dr_wattz",
        "monster_origin": "mythic",
        "description": "Dr. Wattz was born from Dr. Viktor\u2019s childhood wish to have a brother he could play with. The two siblings were inseparable for years, but as the competition grew between them, Dr. Wattz left to build his own army of monsters he controls through Mythic Amber. He wants to be the single most brilliant scientist ever.",
        "books": [
            6,
            20,
            10,
            34,
            76
        ]
    },
    {
        "id": 2660,
        "name": "Zorky",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_zorky",
        "monster_origin": "mythic",
        "description": "Zorky is Dr. Wattz\u2019s accidental creation. The doctor got distracted in his lab one day. He let his mind wander and started remembering how he hated magicians as a child. He couldn\u2019t stand tricks with no scientific grounds! However, because of his distractions, Zorky was born and scared Wattz away.",
        "books": [
            20,
            21,
            11,
            34
        ]
    },
    {
        "id": 2661,
        "name": "Blaz",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_blaz",
        "monster_origin": "mythic",
        "description": "Blaz is Dr. Wattz\u2019s creation and faithful servant. He helps him around his lab and is the target of the Doctor\u2019s craziest and most relentless experiments. The treatment he receives has made Blaz very resilient, despite his frail appearance.",
        "books": [
            6,
            20,
            10,
            34
        ]
    },
    {
        "id": 2662,
        "name": "Kawthor",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_kawthor",
        "monster_origin": "mythic",
        "description": "This monster made of amber and hatred came out of the Portal of Abominations when a furious Fampira threw her engagement ring into it. Kawthor is the ultimate abomination. Will he be the one to dominate the other monsters who came out of the portal?",
        "books": [
            5,
            9,
            8,
            34,
            162
        ]
    },
    {
        "id": 2663,
        "name": "Quaxalcroc",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_quaxalcroc",
        "monster_origin": "mythic",
        "description": "Quaxalcroc has been chosen to lead the rebellion against Mountezuma. It\u2019s his job to dethrone and replace the evil emperor. With the help of a group of shamans, he\u2019s used the power of Mythic Amber to become an emperor himself, but will he be a better one than his predecessor or will he let power get to his head?",
        "books": [
            5,
            1,
            20,
            34
        ]
    },
    {
        "id": 2664,
        "name": "Yoroi",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_yoroi",
        "monster_origin": "mythic",
        "description": "The terrifying myth tells that this armadillo fools lonely travelers and offers them water which is in fact poison, then stealing everything they carry. If you see Yoroi from afar, it's better to take a different path.",
        "books": [
            20,
            31,
            7,
            13,
            34,
            61
        ]
    },
    {
        "id": 2665,
        "name": "Knightingale",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_knightingale",
        "monster_origin": "mythic",
        "description": "Knightingale wanted to be a superhero, so when Malair told her that he could make her one, she followed him to his hideout. She didn\u2019t know that Malair was going to possess her and turn her into the deadly supervillain she has become!",
        "books": [
            12,
            3,
            7,
            34,
            76
        ]
    },
    {
        "id": 2666,
        "name": "Illion",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_illion",
        "monster_origin": "mythic",
        "description": "This Mythic creature was invoked by Furrius Robin and Rabbish when they were trapped inside a labyrinth with a dangerous beast. Illion blinded the beast, saved them from it, and lit up their way out the labyrinth. A true savior.",
        "books": [
            3,
            2,
            10,
            34,
            59,
            132
        ]
    },
    {
        "id": 2667,
        "name": "Moonhaze",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_moonhaze",
        "monster_origin": "mythic",
        "description": "Karlo was a firefly who wanted to become a big monster since, because of his shape, no one listened to his smart ideas. With the help of Erder, who gave him a piece of Amber, he was able to create Moonhaze, a majestic projection of his spirit.",
        "books": [
            20,
            2,
            12,
            34,
            59,
            131
        ]
    },
    {
        "id": 2668,
        "name": "Ondana",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_ondana",
        "monster_origin": "mythic",
        "description": "Ondana is Warmaster Thalassa\u2019s eyes and muscle in every corner of the ocean. She\u2019s proved to be a faithful servant but also a talent of her own. She\u2019s agile, quick and effective.",
        "books": [
            4,
            20,
            7,
            34,
            131,
            154
        ]
    },
    {
        "id": 2669,
        "name": "Brutalizer",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_brutalizer",
        "monster_origin": "mythic",
        "description": "Brutalizer was a gravedigger in Nishant\u2019s army. He had to take everything the dead had on them and hand it to his general but, one day, he kept an amber locket for himself and, when Nishant found out, he humiliated him in a way that made Brutalizer lose control and transform into a beast filled with nothing but fury.",
        "books": [
            21,
            8,
            11,
            34,
            105
        ]
    },
    {
        "id": 2670,
        "name": "Noar",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_noar",
        "monster_origin": "mythic",
        "description": "After Rociuko left him, Kihaku used the amber to create his very own perfect disciple. That\u2019s how Noar was born, with her reptilian agility and instincts. However, as Noar grew up, her interest turned towards boxing instead of traditional martial arts. Kihaku had created the perfect fighter, just not the one he\u2019d been trying to create.",
        "books": [
            10,
            12,
            7,
            34,
            52
        ]
    },
    {
        "id": 2671,
        "name": "Glamhead",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_glamhead",
        "monster_origin": "mythic",
        "description": "Metalisha has finally found a new guitar player for her band. She never thought she\u2019d find a replacement for Metalh\u00ebad but Glamhead\u2019s quite the glow up! Looks on point and riffs on fire.",
        "books": [
            5,
            3,
            12,
            34,
            131,
            142
        ]
    },
    {
        "id": 2672,
        "name": "Svart",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_svart",
        "monster_origin": "mythic",
        "description": "Svart was a very happy monster with a daughter whom he made laugh all the time, but one day, he got his face burnt in a battle and, from that moment, his daughter was terrified of him. He had no choice but to leave her but sometimes, at night, he uses his powers to draw a smile outside her window so that she remembers the happy times they spent together.",
        "books": [
            21,
            11,
            8,
            31,
            53,
            34
        ]
    },
    {
        "id": 2673,
        "name": "Daedalus",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_daedalus",
        "monster_origin": "mythic",
        "description": "Daedalus was a sculptor working on the statue of a dragon when his soul got trapped inside his work of art. Now he\u2019s a fully functioning dragon, but his spirit remains the one of an artist and contributor.",
        "books": [
            1,
            10,
            8,
            34
        ]
    },
    {
        "id": 2674,
        "name": "Urcann",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_urcann",
        "monster_origin": "mythic",
        "description": "Urcann is a very helpful little Sea creature, but his eerie figure deceives every monster he offers help to. They all find him too creepy to trust, so they just run away from him.",
        "books": [
            4,
            2,
            10,
            34,
            131,
            154
        ]
    },
    {
        "id": 2675,
        "name": "Metalbeat",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_metalbeat",
        "monster_origin": "mythic",
        "description": "Metalband was on tour and, on a particularly vibrant night, Glamhead was so overcome with his own prodigy that, at the end of a song, he smashed his guitar against the stage floor, opening a hole. A Mythic creature rose from it, like a dark angel ascending from Rock \u2019n\u2019 Roll Hell. Its name was Metalbeat.",
        "books": [
            5,
            6,
            13,
            34,
            142
        ]
    },
    {
        "id": 2676,
        "name": "JoshDub",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_joshdub",
        "monster_origin": "mythic",
        "description": "When Sergeant Hull Head resurrected as a zombie after his body was buried in nuclear waste for years, Dr. Marihelson decided to study the properties of radiation. He took a piece of Mythic Amber and buried it in radioactive waste, thinking it would create a substance he\u2019d be able to use. Instead, a Mythic monster was born!",
        "books": [
            5,
            8,
            12,
            34
        ]
    },
    {
        "id": 2677,
        "name": "Azte",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_azte",
        "monster_origin": "mythic",
        "description": "Azte was the founder and first emperor of the civilization that his descendant Mountezuma had been ruling until Quaxalcroc rebelled against him. He was a beloved leader and now, his spirit has been reawakened to regain power for his dynasty.",
        "books": [
            2,
            10,
            13,
            34,
            131
        ]
    },
    {
        "id": 2678,
        "name": "Mr Beast",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_mr_beast",
        "monster_origin": "mythic",
        "description": "This warrior for justice and fairness was born to put an end to Avaritia's greed. He's taken all of that monster's riches and redistributed them fairly amongst those who need it. This is just the beginning of his mission! Mr. Beast is here to stay.",
        "books": [
            20,
            10,
            15,
            12,
            34
        ]
    },
    {
        "id": 2679,
        "name": "Tremur",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_tremur",
        "monster_origin": "mythic",
        "description": "After Warmaster Zahra crushed his revolution, Nadiel was left alone, so he made up an imaginary friend he called Tremur. They held debates and, to Nadiel's despair, Tremur always won. One day, Nadiel was having a particularly heated discussion when Tremur came to life, as grumpy and aggressive as he was in Nadiel's imagination. ",
        "books": [
            21,
            2,
            11,
            34,
            60
        ]
    },
    {
        "id": 2680,
        "name": "Glubu",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_glubu",
        "monster_origin": "mythic",
        "description": "Glubu was a doctor specialized in outer-space creatures. On his most ambitious project, he captured a Sulien with the intention of studying it. However, the Sulien outsmarted Glubu, ate his brain and replaced it with another brain he found in the doctor\u2019s lab. The doctor came back to life, but he was an entirely new monstrous self!",
        "books": [
            6,
            21,
            11,
            34
        ]
    },
    {
        "id": 2681,
        "name": "Siamiss",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_siamiss",
        "monster_origin": "mythic",
        "description": "Meet the new star of Hercule\u2019s Freak Circus! Her name is Siamiss and she\u2019s a truly extraordinary monster! The right head can spit snakes, it\u2019s a dangerous one! However, the left head is an excellent poet. From the moment he saw her, Hercule knew he absolutely needed Siamiss on the show.",
        "books": [
            5,
            7,
            11,
            34
        ]
    },
    {
        "id": 2682,
        "name": "Moochy",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_moochy",
        "monster_origin": "mythic",
        "description": "When Jasastur was defeated by Baba Yaga and banished through the Portal of Abominations, he made sure that it wasn\u2019t the end of him. He left behind an amber stone from which Moochy was born. Now Moochy\u2019s here to torment Baba Yaga for eternity.",
        "books": [
            5,
            13,
            11,
            34,
            60
        ]
    },
    {
        "id": 2683,
        "name": "Lonradh",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_lonradh",
        "monster_origin": "mythic",
        "description": "Lonradh directs the Museum of Outer Space, where the most fascinating space creatures are displayed for the public to visit. He's the one who finds and abducts all of the aliens in the museum so he doesn\u2019t have many friends in space. He kills his victims, takes them to the museum, and Resurrects them once they\u2019re caged.",
        "books": [
            21,
            2,
            11,
            34,
            121
        ]
    },
    {
        "id": 2684,
        "name": "Blazinger",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_blazinger",
        "monster_origin": "mythic",
        "description": "Dr. Wattz uses Blaz as a guinea pig for his most relentless experiments. However, this time, Dr. Wattz didn\u2019t make tests on his servant. Instead, he cloned and evolved him as a separate creature. The result is Blazinger, an artifact he uses to torture his enemies without having to touch them himself.",
        "books": [
            6,
            13,
            12,
            31,
            34
        ]
    },
    {
        "id": 2685,
        "name": "Heiss",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_heiss",
        "monster_origin": "cosmic",
        "description": "Births in the Underworld are very rare since it\u2019s more a final destination than a home, but when the Distant Star exploded, the Stardust it produced leaked through the cracks of the Earth into the Underworld and, from it, a creature with Cosmic powers and native Hell wickedness was born: Heiss.",
        "books": [
            5,
            12,
            11,
            36
        ]
    },
    {
        "id": 2686,
        "name": "Crusty",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_crusty",
        "monster_origin": "mythic",
        "description": "Globrush is one of the most famous space pirates, but his father was a pirate too! Only a more traditional one. Crusty had disappeared many years ago, but he resurrected to save his son from drowning in the ocean after an accident. Now he's back and looking for an adventure!",
        "books": [
            4,
            20,
            13,
            34,
            131
        ]
    },
    {
        "id": 2687,
        "name": "Vastus",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_vastus",
        "monster_origin": "mythic",
        "description": "Kiridar had been under threat for years, so she pulled a little trick out her sleeve: She summoned Vastus, the original Guardian, to lead them all through their space journey safely. However, this might have been a wrong move, because Vastus has drawn the attention of a collector of creatures, Lonradh, who thinks that Vastus could be the crown jewel of his museum.",
        "books": [
            6,
            10,
            13,
            34,
            121
        ]
    },
    {
        "id": 2688,
        "name": "Slugazoid",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_slugazoid",
        "monster_origin": "cosmic",
        "description": "Millenia ago, this slug traveled from planet to planet feeding on the energy of its inhabitants, but then it arrived at the world of Monster Legends and it crashed on the coldest region. Consequently, Slugazoid froze, and that's how he remained until the rain of Stardust hit Monster Legends, waking him up and granting him renewed powers!",
        "books": [
            4,
            5,
            9,
            36,
            122
        ]
    },
    {
        "id": 2689,
        "name": "Hardy",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_prof_hardy",
        "monster_origin": "cosmic",
        "description": "Cavenfish was an abandoned young monster when Hardy took him under his fin. He taught him everything he needed to know, but the ungrateful Cavenfish organized a mutiny and threw Hardy off his own ship in the middle of the Sea. No one ever heard of him again\u2026 until now. Hardy has risen from the bottom of the ocean, and he\u2019s thirsty for vengeance!",
        "books": [
            4,
            20,
            21,
            36
        ]
    },
    {
        "id": 2690,
        "name": "Bombeta",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_bombeta",
        "monster_origin": "cosmic",
        "description": "Dr. Viktor was tasked with the mission of creating a monster who would light the way through a network of dark portals. To craft it, our favorite scientist used the Cells of two of the brightest creatures in Monster Legends: Yntec and Clipeum. He mixed them up with a pinch of Stardust and\u2026 Bombeta was born! Is he too pure to be good?",
        "books": [
            21,
            13,
            11,
            36
        ]
    },
    {
        "id": 2691,
        "name": "Ignis",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_ignis",
        "monster_origin": "cosmic",
        "description": "Ignis was a blacksmith for Barbatos, but one day he caught his boss hiding a shipment of Stardust he was going to use to crush his detractors. Ignis threatened to tell everyone about Barbatos\u2019 treasure if he didn\u2019t give him a part of it. Barbatos had no choice but to give in. Now Ignis is the first monster touched by the power of Stardust in Hell.",
        "books": [
            6,
            21,
            11,
            36,
            104
        ]
    },
    {
        "id": 2692,
        "name": "Kodama",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_kodama",
        "monster_origin": "cosmic",
        "description": "The explosion of the Distant Star opened thousands of portals all over the universe. Kodama has arrived through one of those portals. He comes from a planet covered with blue vegetation where life works at a very different pace to that of Monster Legends. This is reflected in his powers, which allow him to play with the pacing of everyone around him.",
        "books": [
            2,
            8,
            36,
            20,
            121
        ]
    },
    {
        "id": 2693,
        "name": "Thunderkong",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_thunderkong",
        "monster_origin": "cosmic",
        "description": "Rockilla was collecting Stardust to try and go from Common to Cosmic when Thunder Eagle stole the Stardust from him. Rockilla followed her to her Thunder Habitat, where they wrestled to get hold of the precious resource. Rockilla won and swallowed the Stardust inside the Thunder Habitat but, instead of an enhanced Earth Rockilla, he became Thunderkong!",
        "books": [
            20,
            12,
            31,
            3,
            36,
            132
        ]
    },
    {
        "id": 2694,
        "name": "Vanoss2099",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_vanoss2099",
        "monster_origin": "cosmic",
        "description": "This robot has arrived from year 2099 through a Stardust portal to save his creator, Vanoss, from his enemies. Vanoss2099 is a Cosmic creature \u2014 the perfect combination of technology and Mythic Stardust.",
        "books": [
            6,
            15,
            3,
            36,
            120
        ]
    },
    {
        "id": 2695,
        "name": "Blackfeather",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_blackfeather",
        "monster_origin": "cosmic",
        "description": "Blackfeather was Captain Copperbeard\u2019s beloved pet parrot until he got lost in a massive storm of Stardust which caught his spaceship while it was sailing through outer space. Blackfeather was devoured by the Stardust and then reborn as a Cosmic Spirit! If he can find his way back to the spaceship, he\u2019ll become the new flagship member of the crew.",
        "books": [
            5,
            2,
            3,
            36
        ]
    },
    {
        "id": 2696,
        "name": "Rotten",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_rotten",
        "monster_origin": "cosmic",
        "description": "The myth says that a rain of Stardust fell in a puddle of mud in a particularly dark corner of the swamp area of the forest and created a monster who\u2019s able to absorb souls. Now Rotten travels collecting souls from dead monsters. They make him stronger but rot his inner spirit. The more powerful he becomes, the stinkier he gets.",
        "books": [
            5,
            2,
            8,
            36,
            155
        ]
    },
    {
        "id": 2697,
        "name": "Atrox",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_atrox",
        "monster_origin": "cosmic",
        "description": "Nicknamed \u201cThe Cosmic Doctor\u201d, Atrox has crossed the portal into the universe of Monster Legends to bring the cure to numerous undetected diseases, but he\u2019s also brought us a warning: Mythic Stardust, when mishandled, can cause new diseases or even become deadly. Thankfully, Atrox is here to help monsterkind!",
        "books": [
            2,
            10,
            20,
            36,
            91
        ]
    },
    {
        "id": 2698,
        "name": "Diegael",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_diegael",
        "monster_origin": "cosmic",
        "description": "Diegael was a cherub, conceived as a heavenly creature whose mission was to spread love. However, since he was young, all he wanted was to become a Celestial Paladin. It took him a hundred of adventures on his own, but finally, Elvira realized that Diegael wasn\u2019t her usual cherub. She gave him a sword and named him Celestial Paladin, as he had always dreamed.",
        "books": [
            10,
            3,
            36,
            20,
            90,
            131
        ]
    },
    {
        "id": 2699,
        "name": "Solarflare",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_solarflare",
        "monster_origin": "cosmic",
        "description": "Solarflare, Sunblast's younger brother, has arrived to humiliate Firestorm, who had the audacity to go against Sunblast when he was his disciple. With the help of an anonymous villain who had a mysterious interest in seeing Firestorm gone, Solarflare has helped himself to a bit of Mythic Stardust, and he's ready for vengeance!",
        "books": [
            21,
            36,
            12,
            13
        ]
    },
    {
        "id": 2700,
        "name": "Tabora",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_tabora",
        "monster_origin": "cosmic",
        "description": "Tabora arrived in the swamp shortly after the Cosmic rain. She told Wickah that the stars had guided her there so that she could help the inhabitants in that area of the forest, but there\u2019s something about her that doesn\u2019t click. She asks a lot of questions about the leaders of the forest and it seems like she\u2019s hiding her true power...",
        "books": [
            5,
            2,
            7,
            36,
            103
        ]
    },
    {
        "id": 2701,
        "name": "Lindworm",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_lindworm",
        "monster_origin": "cosmic",
        "description": "The Legendary Villains have been looking for a Cosmic ally to turn the game in their favor again, and it looks like they\u2019ve found one. Lindworm is a mysterious dragon who can play with time, space and portals and, as they\u2019ve learned the hard way, now it\u2019s all about one portal in particular. Maybe Lindworm can help them get rid of it and end the Cosmic Era?",
        "books": [
            1,
            21,
            36,
            11,
            121
        ]
    },
    {
        "id": 2702,
        "name": "Seaquake",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_seaquake",
        "monster_origin": "cosmic",
        "description": "When the Stardust rain reached the mountain region of Monster Legends, it showered Cryotan and Ouros, but it\u2019s so cold up there that it crystalized too quickly, breaking their surface and causing a landslide. The rubble went down the mountains and onto the bottom of the ocean, where a monster was born: Seaquake.",
        "books": [
            4,
            31,
            20,
            12,
            36,
            154
        ]
    },
    {
        "id": 2703,
        "name": "Henritch",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_henritch",
        "monster_origin": "cosmic",
        "description": "Henritch was a friendly Legendary monster until a villain attacked his home and destroyed him. His neighbor Glubu ran to Henritch\u2019s house, only to find little pieces of Henritch lying all over the floor. He took what was left of him to his lab, inserted the bits and pieces into a videogame engine along with some Stardust. Now there\u2019s a Cosmic version of Henritch!",
        "books": [
            6,
            2,
            20,
            36
        ]
    },
    {
        "id": 2704,
        "name": "Kraster",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_kraster",
        "monster_origin": "cosmic",
        "description": "Clivia and Alpha Cliviast have understood that being killer plants won\u2019t be enough to survive in the Cosmic Era. For this reason, they\u2019ve released their spores to mix them with the rain of Stardust. Now, a new creature\u2019s been born in the middle of the garden. His name is Kraster and he\u2019s an armed killer plant! He\u2019s the Cosmic plant that will lead them all.\n",
        "books": [
            4,
            21,
            20,
            36,
            105
        ]
    },
    {
        "id": 2705,
        "name": "TeddieVR",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_teddie_vr",
        "monster_origin": "cosmic",
        "description": "When Gualgui saw the Cosmic rain, she confused the shiny Stardust for shooting stars and made a wish: she asked for a dark protector spirit. However, Stardust works in mysterious ways and what she got was this big guy! Because sometimes all you need is a Cosmic cowbear.",
        "books": [
            6,
            15,
            20,
            36,
            132
        ]
    },
    {
        "id": 2706,
        "name": "Mani Pulate",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_mani_pulate",
        "monster_origin": "cosmic",
        "description": "Mani Pulate started out as a wartime messenger, but after the Cosmic rain graced him with a mind of his own, he got bored of his job so, to spice it up, he started twisting peace treaties and selling information to third parties. The messenger has become an agent of chaos who knows how much to give and how much to sell, making sure he never runs out of work or clients.",
        "books": [
            5,
            6,
            9,
            36,
            121
        ]
    },
    {
        "id": 2707,
        "name": "Chuckle Muckel",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_chuckle_muckel",
        "monster_origin": "cosmic",
        "description": "This fairy arrived through the Cosmic portal to grace and protect all monsters. When they\u2019re little and lose a milk tooth, Chuckle Muckel comes while they\u2019re sleeping and collects it. She uses it to study their DNA and finds the best way to protect them when they grow up and go into battle.",
        "books": [
            2,
            7,
            3,
            36,
            102
        ]
    },
    {
        "id": 2708,
        "name": "Rusalka",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_rusalka",
        "monster_origin": "cosmic",
        "description": "Capable of piercing through the toughest of armor with her dead fisherman\u2019s hook, Rusalka is Chuckle Muckel\u2019s evil relative. Once the best of friends, a tragic accident changed the course of their lives forever. Rusalka is nothing like her warm-hearted cousin \u2013 she won\u2019t wait until your tooth has fallen out to rip it from you!",
        "books": [
            2,
            7,
            21,
            36,
            60
        ]
    },
    {
        "id": 2709,
        "name": "Shelly",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_shelly",
        "monster_origin": "cosmic",
        "description": "Queen Thalassa banished Shelly from the water realm after he stole from her. He was sent to a beach where he spent his days collecting shiny shells until he found a pink and bluish stone. As he grabbed it, it cracked and released a powder that covered Shelly. Its Cosmic effect filled him with strength to get back at Thalassa for kicking him out of the ocean.",
        "books": [
            4,
            36,
            13,
            11,
            122
        ]
    },
    {
        "id": 2710,
        "name": "Iguanazaur",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_iguanazaur",
        "monster_origin": "cosmic",
        "description": "Meet Hydratila\u2019s son! When Queen Thalassa left the Water Realm to fight alongside the other Warmasters and Thetys took over her throne, Hydratila sent Iguanazaur away to save him from the new ruler\u2019s terrible administration. Now that Thalassa\u2019s back, so is a grown-up Iguanazaur, ready to become a soldier as faithful as his father!",
        "books": [
            4,
            10,
            36,
            1,
            131,
            154
        ]
    },
    {
        "id": 2711,
        "name": "Necrolicht",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_necrolicht",
        "monster_origin": "cosmic",
        "description": "Necrolicht was Barbatos\u2019 prisoner for many years. It took long for his brother Necromancer to rescue him, but he\u2019s finally made it. However, Hell has taken its toll on Necrolicht. He\u2019s changed and, even though crossing the Cosmic Portal on his way to freedom has refreshed his powers, a dark energy has grown inside him during his captivity, and it\u2019s not going away.\r",
        "books": [
            5,
            8,
            36,
            11,
            53
        ]
    },
    {
        "id": 2712,
        "name": "Pulsus",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_pulsus",
        "monster_origin": "cosmic",
        "description": "When Pulsus saw the distant Cosmic star, he started following it up North, but he pushed himself to go further than he could, and at one point, he was too cold to continue. He was freezing to death when the star exploded and covered him with Stardust. He was invigorated and, from that moment, ice and cold were no longer his enemies, but his best allies.",
        "books": [
            9,
            10,
            31,
            36,
            20
        ]
    },
    {
        "id": 2713,
        "name": "Rhinata",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_rhinata",
        "monster_origin": "cosmic",
        "description": "Rhinata belongs to a tribe of rhino warriors in a dimension far away. One day she was on a mission when she saw a wall built against the side of a hill. She charged against it with such momentum that it cracked and she was sucked into a tunnel and flew out of the Cosmic portal in Monster Legends!\n",
        "books": [
            7,
            36,
            11,
            21,
            59
        ]
    },
    {
        "id": 2714,
        "name": "Spitfire",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_spitfire",
        "monster_origin": "cosmic",
        "description": "After Metalisha kicked Metalh\u00ebad out of the band he\u2019d founded himself, he vowed to punish her the only way he knew: making better music than her. With a drop of his blood, a string of his guitar, and a pinch of Stardust, Dr. Wattz built him a new bandmate: Spitfire, who can fire up the best tunes and the deadliest attacks!",
        "books": [
            5,
            6,
            36,
            11,
            131,
            142
        ]
    },
    {
        "id": 2715,
        "name": "Ferrus",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_ferrus",
        "monster_origin": "cosmic",
        "description": "Ahran had been exhausted and desperate for a new life for some time so, when he asked his friends in Heaven for help, what they offered him was a whole new identity. With Diegael\u2019s assistance, he was able to transfer his soul from his old body into this new suit of armor, made of Metal and Stardust. He has a new name too: Ferrus!",
        "books": [
            2,
            10,
            8,
            36
        ]
    },
    {
        "id": 2716,
        "name": "Lazarbeam2099",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_lazarbeam2099",
        "monster_origin": "cosmic",
        "description": "LazarBeam was a natural winner but he was aware that Cosmic monsters were tough competition for him. Determined to remain Warmaster Sherezar\u2019s top Battle Royale player, he crossed the Cosmic portal and found a route to year 2099, where he saw the future of Battle Royale. Now he\u2019s Cosmic too and he\u2019ll be the last one standing in any tournament.",
        "books": [
            6,
            15,
            12,
            36,
            2,
            121,
            133
        ]
    },
    {
        "id": 2717,
        "name": "Kaguya",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_kaguya",
        "monster_origin": "cosmic",
        "description": "Kaguya is on a mission of military espionage. He\u2019s infiltrated the samurai community by disguising himself as one of them. He aims to learn all their battle tactics and secrets to then take their wisdom back to his alien civilization at the other side of the Cosmic portal. There, he\u2019ll train his fellow soldiers and crush enemy civilizations from neighboring galaxies.",
        "books": [
            6,
            10,
            20,
            36,
            61
        ]
    },
    {
        "id": 2718,
        "name": "Undead Mr Beast",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_undead_mr_beast",
        "monster_origin": "cosmic",
        "description": "Mr. Beast has finally met his immortal match! Rotten\u2019s plan backfired and now there\u2019s a new Cosmic monster in the universe. By entering two portals simultaneously, Mr. Beast\u2019s body was ripped in two and now there\u2019s an evil clone, made of hatred and bone, eager to wreak havoc!",
        "books": [
            5,
            2,
            8,
            36,
            53
        ]
    },
    {
        "id": 2719,
        "name": "Noahgnarok",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_noahgnarok",
        "monster_origin": "cosmic",
        "description": "Young Noahrian was obsessed with heroes and myths. On a dark night, while he was playing with his wooden sword, a blinding light entered through the window and changed him. His sword was now made of white steel and he felt magic and power spread through every inch of his body. He\u2019d been transformed into Noahgnarok.",
        "books": [
            10,
            12,
            36,
            20,
            59
        ]
    },
    {
        "id": 2720,
        "name": "Noahrian",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 4,
        "img_name": "epic_thunder_noahrian",
        "monster_origin": "normal",
        "description": "Noahrian is obsessed with heroes and their stories. He\u2019s from the same village as Gregorz of Lyria and there\u2019s nothing he wishes more than to be the next big adventurer to impress his neighbors. Until that day comes, he practices poses and moves with his wooden sword in front of the mirror.",
        "books": [
            10,
            12,
            20,
            59
        ]
    },
    {
        "id": 2721,
        "name": "Arobat",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_arobat",
        "monster_origin": "cosmic",
        "description": "With the help of her twin sister Tabora, Arobat has been sneaking Mudflow\u2019s potions from the swamp of the Cardinal Forest. She tweaks them at the other side of the portal and uses them to control enemies. Sometimes, she even sells them to certain villains! Arobat is a sneaky creature.",
        "books": [
            5,
            2,
            36,
            21,
            103
        ]
    },
    {
        "id": 2722,
        "name": "Spawny",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_spawny",
        "monster_origin": "cosmic",
        "description": "This starfish transformed into a Cosmic monster unexpectedly, while he was doing his thing at the bottom of the ocean. After his transformation, he was really bored with his old life and felt that his Cosmic potential was wasting away until one day, he found an anchor, held on to it and, when he reached the surface, he met a famous pirate who would later become his friend: Varupapu!",
        "books": [
            4,
            10,
            36,
            20,
            154
        ]
    },
    {
        "id": 2723,
        "name": "Kaih the Sunmelter",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_kaih_the_sunmelter",
        "monster_origin": "cosmic",
        "description": "Kaih the Eradicator was on a mission to kill Heiss. He had the help of a special Diamond Sword, The Sunmelter, but Heiss was too strong for him. After he cut the demon\u2019s flesh, he attacked back and wounded him. Kaih was about to die when something happened: Heiss' blood got into one of Kaih's wounds and mixed with his own blood. He rose again as a Cosmic monster!",
        "books": [
            12,
            36,
            11,
            21,
            104,
            133
        ]
    },
    {
        "id": 2724,
        "name": "Fampirastral",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_fampirastral",
        "monster_origin": "halloween_exc",
        "description": "Fampira's going back to Monstelvania and Count Vlad is organizing her Homecoming Ceremony. As a present, he had Necrolicht bring him a piece of Stardust to transform his daughter into a Cosmic monster, thus guaranteeing the future of his family in power. Fampira will become Lady of Monstelvania and receive a new name fit to her Cosmic status: Fampirastral.",
        "books": [
            7,
            8,
            13,
            36
        ]
    },
    {
        "id": 2725,
        "name": "Varupapu",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_varupapu",
        "monster_origin": "cosmic",
        "description": "Spawny appeared in Varuna's life wanting to live an adventure. To introduce himself, he graced the pirate captain with Cosmic powers and a soul, something Varuna had lost many years ago. In return, Varuna took Spawny into his crew and promised him great adventures. Soon they became good friends and Spawny gave Varuna a new joke nickname: Varupapu.",
        "books": [
            4,
            10,
            36,
            20,
            31,
            131
        ]
    },
    {
        "id": 2726,
        "name": "Lightmare",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_lightmare",
        "monster_origin": "cosmic",
        "description": "Lightmare fed on the fear he caused in other monsters when he appeared inside their nightmares until he met The Dreamer. Her fearlessness inspired him to become a better monster. His new confident self doesn\u2019t need anyone\u2019s fear to stay strong.",
        "books": [
            5,
            10,
            36,
            20,
            162
        ]
    },
    {
        "id": 2727,
        "name": "Witchkat",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_witchkat",
        "monster_origin": "halloween_exc",
        "description": "Gretchen's cat was bored with her master ignoring her, so she climbed to the witch's shelf of ingredients, knocked over a jar of Stardust, and jumped on top of the mess she'd made, creating a cloud of Stardust. When the cloud cleared, she was Witchkat! After 8 of her lives observing Gretchen, this Cosmic witch is determined to make her remaining life count.",
        "books": [
            15,
            21,
            36,
            7,
            132
        ]
    },
    {
        "id": 2728,
        "name": "Targon",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_targon",
        "monster_origin": "cosmic",
        "description": "The Hall of Dragons is home to the statues that pay tribute to the most important dragons in history. The Cosmic energy wave has breathed life into the one dedicated to Targon, a ferocious dragon from centuries ago who destroyed numerous ancient cities. Now, it would be fair to say that he isn\u2019t happy to be back from his well deserved eternal rest. He\u2019s actually furious. ",
        "books": [
            36,
            1,
            21,
            8,
            60
        ]
    },
    {
        "id": 2729,
        "name": "Ourosmic",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_ourosmic",
        "monster_origin": "cosmic",
        "description": "The explosion of the Distant Star covered almost every corner of the Monster Legends universe with Stardust and it certainly didn\u2019t miss its biggest mountain! The magical powder formed a thin, solid stratum over Ouros\u2019 rocky surface. Cosmic Ouros \u2014 you may call him Ourosmic now, is more indestructible than ever.",
        "books": [
            5,
            12,
            13,
            36,
            103,
            133
        ]
    },
    {
        "id": 2730,
        "name": "The Dreamer",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_the_dreamer",
        "monster_origin": "cosmic",
        "description": "This monster had a lonely childhood. Her parents died and all they left her was a dreamcatcher. Every night, she went to sleep and entered the safe space that her parents\u2019 dreamcatcher created for her. Nothing bad ever happened there, but even in her sleep, she couldn't escape her loneliness until she met Lightmare, who vowed to protect her. After that, she was never lonely again.",
        "books": [
            10,
            36,
            7,
            2,
            59
        ]
    },
    {
        "id": 2731,
        "name": "Katsuko",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_katsuko",
        "monster_origin": "cosmic",
        "description": "Katsuko used to get picked on by his teacher Oikawa in sumo academy, but since he added Stardust to his diet of milk and oily fish, he is truly unstoppable. Now Oikawa should probably run away before Katsuko stomps on him.",
        "books": [
            9,
            10,
            36,
            20,
            52,
            132
        ]
    },
    {
        "id": 2732,
        "name": "Bingxen",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_bingxen",
        "monster_origin": "cosmic",
        "description": "Kihaku became a Legend after defeating his biggest enemy Bingxen in battle. Bingxen wanted to purify monsters\u2019 souls by burning them. When he lost, he had no choice but to leave Kihaku\u2019s domains, but he wasn\u2019t one to accept humiliation easily, therefore, his comeback was highly awaited. However, no one had foreseen that Bingxen would return with Cosmic powers!",
        "books": [
            36,
            11,
            1,
            21,
            61,
            131
        ]
    },
    {
        "id": 2733,
        "name": "Letalis",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_letalis",
        "monster_origin": "cosmic",
        "description": "Letalis was a prophet, but he was condemned and killed by a king who did not like the future that had been predicted to him. However, because death wasn't his destiny to die, he has come back from the dead to fulfill his destiny and predict the death of others.",
        "books": [
            5,
            36,
            2,
            8
        ]
    },
    {
        "id": 2734,
        "name": "Ullrica",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_ullrica",
        "monster_origin": "cosmic",
        "description": "The most bloodthirsty of the three wolves. While her father Master Masher guides the pack and her brother Luponudo protects it, Ullrica\u2019s the one to actually do the killing, and she wouldn't have it any other way.",
        "books": [
            13,
            36,
            7,
            20,
            59,
            132
        ]
    },
    {
        "id": 2735,
        "name": "Moon Ming",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_moonming",
        "monster_origin": "cosmic",
        "description": "This wise prophet predicted the opening of the Cosmic portal and played a key role guiding creatures like Kodama and Chuckle Muckel into the world of Monster Legends. She wasn\u2019t set to cross the portal herself, but she had to in order to warn us: Dark forces from the past will try to play with the power of the portal soon. ",
        "books": [
            9,
            10,
            36,
            20,
            52
        ]
    },
    {
        "id": 2736,
        "name": "Master Masher",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_master_masher",
        "monster_origin": "cosmic",
        "description": "On a full moon night, a pack of three wolves crossed the Cosmic Portal and entered the world of Monster Legends. They were guided by the oldest and wisest one \u2014 Master Masher. He will do anything and everything to calm his two children\u2019s thirst for blood.",
        "books": [
            9,
            13,
            36,
            20,
            59,
            132
        ]
    },
    {
        "id": 2737,
        "name": "Luponudo",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_luponudo",
        "monster_origin": "cosmic",
        "description": "Luponudo is the wild child in the wolf pack. He drives his father and sister crazy, but in crucial battle moments, he\u2019s the glue that keeps the family together and the one who makes sure they all make it to the next fight.",
        "books": [
            13,
            36,
            21,
            31,
            20,
            59,
            132
        ]
    },
    {
        "id": 2738,
        "name": "Axolmech",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_axolmech",
        "monster_origin": "cosmic",
        "description": "Axolmech is Dr. Hazard\u2019s creation. His mission is to find, infiltrate and destroy the Guardians of the Earth, who exposed Dr. Hazard\u2019s crimes against nature. With his impressive mecha and his cuteness, the Guardians will find him irresistible and accept him into their group right away. They\u2019re about to make a mistake!",
        "books": [
            6,
            36,
            20,
            21,
            132
        ]
    },
    {
        "id": 2739,
        "name": "Calamedic",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_calamedic",
        "monster_origin": "cosmic",
        "description": "When the Cosmic explosion shook the ocean, Calamedic ran to help all the creatures that had been affected by it, but he got caught in the chaos and a whirlpool swept him away. He held on to a hypnotizing blue light and a rusty diver suit that had emerged from the seabed. Before he could notice, he was in an entirely different place and he was Cosmic!",
        "books": [
            4,
            10,
            36,
            20,
            154
        ]
    },
    {
        "id": 2740,
        "name": "Lord Platypus",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_lord_platypus",
        "monster_origin": "cosmic",
        "description": "This poor fella was always ridiculed for his appearance, but he had a particularly acute sense of electrolocation. One day, while he was hunting for prey, he sensed something different: Stardust! Since that day, no one ridicules him anymore. He\u2019s Lord Platypus now.",
        "books": [
            36,
            11,
            20,
            21,
            60
        ]
    },
    {
        "id": 2742,
        "name": "Firustar",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_firustar",
        "monster_origin": "cosmic",
        "description": "A baby monster was playing in the snow when she found a piece of Stardust. She confused it for an ornament and thought it would look perfect on a tree she\u2019d seen from afar, but when she placed it, she realized that what she was decorating wasn\u2019t a tree but Firus, and she\u2019d given it Cosmic powers!",
        "books": [
            9,
            10,
            36,
            20,
            133,
            159
        ]
    },
    {
        "id": 2743,
        "name": "Roboelf",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_roboelf",
        "monster_origin": "cosmic",
        "description": "Ingenica created Roboelf to help Thundeer and Santerion wrap all the presents they need to deliver, but when they received this artifact, they put Stardust instead of the boot microchip inside it by accident. Now Roboelf isn't the helper they had ordered from Ingenica. It's something so much better!",
        "books": [
            6,
            9,
            15,
            36,
            159
        ]
    },
    {
        "id": 2744,
        "name": "Chimaney",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_chimaney",
        "monster_origin": "cosmic",
        "description": "For many years, presents went down Chimaney's body, but there was never anything for him. Every Christmas Day, he saw little monster relics and runes of all kinds. It would've been nice to receive a pack of scented coal or some premium firewood, you know? He started stealing a present or two, but this year, he hit the jackpot when he opened a box containing Stardust!",
        "books": [
            9,
            10,
            36,
            2,
            159
        ]
    },
    {
        "id": 2745,
        "name": "Rody",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_rody",
        "monster_origin": "cosmic",
        "description": "Rody grew up in a stormy plain that served as a playground to Tempest and General Uria, who had little competitions there. She was used to being hit by their loose lightning rods, but one day, something else hit her \u2014 a Stardust rock which cracked open when it came into contact with the Thunder energy covering Rody\u2019s body. After that, she became a living lightning rod.",
        "books": [
            10,
            36,
            7,
            2,
            91
        ]
    },
    {
        "id": 2746,
        "name": "Steamwrath",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_steamwrath",
        "monster_origin": "cosmic",
        "description": "A train coming into the Monster Legends universe through the Cosmic Portal would seem like a cool event, but the engine driver in this train, Steamwrath, has made a deal with Barbatos. The passengers of The Ghost Express are lost souls from the other side of the portal and she\u2019s taking them straight to Hell, where they\u2019ll become part of the army of the Undead.",
        "books": [
            6,
            36,
            7,
            2,
            142
        ]
    },
    {
        "id": 2747,
        "name": "Zuperfox",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_zuperfox",
        "monster_origin": "cosmic",
        "description": "Zuperfox was Illion's counterpart on the other side of the Cosmic Portal. She showed up whenever a good soul needed help, but one day, she stopped hearing helpless voices. She understood that her job was done. It was her time to cross the Portal to live her own adventure. This new universe is a bit cold for her, but as long as she has her cozy scarf, she'll be fine.",
        "books": [
            10,
            13,
            36,
            7,
            132,
            142
        ]
    },
    {
        "id": 2748,
        "name": "Ophiuchus the Zodiac",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_ophiuchus_the_zodiac",
        "monster_origin": "cosmic",
        "description": "Millenniums ago, Ophiuchus played with destiny. For that, he was punished and demoted to second-class Zodiac monster. Now, he has read the signs and, under his interpretation, the Cosmic explosion happened so that he could rise as Ophiuchus the Zodiac. He\u2019s used the special connection that Zodiac monsters have with the Cosmic energy to absorb Stardust.",
        "books": [
            5,
            36,
            31,
            2,
            20
        ]
    },
    {
        "id": 2749,
        "name": "Krampus the Killjoy",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_krampus_the_killjoy",
        "monster_origin": "cosmic",
        "description": "Joy to the world? Not if Krampus can help it. This demon loves Christmas because it\u2019s the best time of the year to torment baby monsters. When they're expecting Panda Claus or Santerion and it\u2019s him who appears, their faces are precious. He can\u2019t wait to see their reaction when they find out that he\u2019s helped himself to a little bag of Stardust.",
        "books": [
            9,
            36,
            21,
            11,
            132,
            162
        ]
    },
    {
        "id": 2750,
        "name": "Cryocrawler",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_cryocrawler",
        "monster_origin": "cosmic",
        "description": "When Cryotan was showered in Stardust, the effect of its crystalization caused a landslide. Seaquake was born from it, but it made Cryotan lose a big part of its rocky surface. In exchange, it gained a new and shiny layer of Stardust that now forms part of its body, which has also taken a different shape. Meet Cryocrawler, Cryotan's new Cosmic self.",
        "books": [
            9,
            36,
            11,
            13,
            162
        ]
    },
    {
        "id": 2751,
        "name": "Roost Waine",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_roost_waine",
        "monster_origin": "cosmic",
        "description": "Roost Waine spent half his life running away from Ullrica, who wanted to have him for breakfast. Now things have changed! He's got nice armor and is crossing the Cosmic Portal to face his three enemies! Will the prey become the hunter?",
        "books": [
            3,
            36,
            12,
            10,
            75
        ]
    },
    {
        "id": 2753,
        "name": "The Hacksmith",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_the_hacksmith",
        "monster_origin": "cosmic",
        "description": "When The Hacksmith crossed the Cosmic Portal, his impressive armor and talent didn\u2019t go unnoticed by Warmaster Remntar\u2019s eyes. Remntar had been looking for someone who would renew the style of the weapons he crafted in his forge and The Hacksmith, an expert in exotic weapons, had arrived looking for a mentor. Perfect match!",
        "books": [
            6,
            15,
            12,
            36,
            62
        ]
    },
    {
        "id": 2755,
        "name": "Nahane",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_nahane",
        "monster_origin": "cosmic",
        "description": "Nahane is the Master Librarian and Protector of Knowledge of the Ordo Drakkonis, but she's also a powerful sorcerer with dark secrets. The Keeper, librarian of the Monster Library, has accused her of manipulating information and even modifying the memories of the witnesses in key battles for the Alliance of Dragons. ",
        "books": [
            1,
            13,
            36,
            2
        ]
    },
    {
        "id": 2756,
        "name": "Vishamah",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_vishamah",
        "monster_origin": "cosmic",
        "description": "The members of the Alliance of Dragons have decided to create their own High Institution, the Ordo Drakkonis. If Nahane is the brains in the Ordo Drakkonis, Vishamah's the muscle. He supervises the Alliance of Dragons and pushes them to keep making history. ",
        "books": [
            1,
            13,
            36,
            2,
            131
        ]
    },
    {
        "id": 2757,
        "name": "Tesakuiper",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_tesakuiper",
        "monster_origin": "cosmic",
        "description": "For years, Tesaday fought to outshine his former friend VoltaiK, but even if he got a good reputation, he never got close to VoltaiK's level of popularity. Now, however, things may change: His soily flesh has absorbed a lot of Stardust and he's become someone different, a Cosmic version of himself: Tesakuiper!",
        "books": [
            2,
            21,
            11,
            36,
            103,
            133
        ]
    },
    {
        "id": 2758,
        "name": "The Dooo",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_the_dooo",
        "monster_origin": "cosmic",
        "description": "Warmaster Barbael needed someone to lift his troops' spirits so he sent an expedition through the Cosmic Portal just so they would bring him the monster he was looking for: The Dooo. This troubadour has the ability to boost the strength and ferocity of all frontline soldiers just by playing his guitar.",
        "books": [
            1,
            10,
            20,
            36,
            142
        ]
    },
    {
        "id": 2759,
        "name": "Fract-bot",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_fract-bot",
        "monster_origin": "cosmic",
        "description": "Fract-Bot is a machine with a Cosmic core designed by Dr. Wattz to serve as a satellite but also as a defense artifact. If any of Dr. Wattz's numerous enemies approaches his cave, they'll have to deal with Fract-Bot's Stamina draining functions first.",
        "books": [
            6,
            9,
            20,
            36,
            120
        ]
    },
    {
        "id": 2760,
        "name": "L1ght",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_l1ght",
        "monster_origin": "cosmic",
        "description": "Bombeta was a creation of Dr. Viktor that didn\u2019t work as it was supposed to. It had some evil features no one saw coming. For that reason, Dr. Viktor decided to work on a refactor: L1ght! This brilliant artifact is pure, functional, and loyal to the monsters who need its light.",
        "books": [
            6,
            31,
            12,
            20,
            36
        ]
    },
    {
        "id": 2761,
        "name": "Execumancer",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_execumancer",
        "monster_origin": "cosmic",
        "description": "During an earthquake in the Wastelands, the junkyard manager fell into a shredding machine. He was reborn as Execumancer, an evil Cosmic monster, a junk cyborg who can manipulate magnetic waves!",
        "books": [
            8,
            21,
            36,
            6,
            78
        ]
    },
    {
        "id": 2762,
        "name": "Anton Acosmic",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_anton_acosmic",
        "monster_origin": "cosmic",
        "description": "Pirates are usually impulsive, but Anton Acorne is different! After the Cosmic Portal appeared, he retired to an island while he figured out how to regain relevance. He finally did: He discovered that he could absorb residual Stardust floating on the ocean through his tentacles. He had to do it little by little, but thanks to his patience, Anton has become Acosmic!",
        "books": [
            4,
            21,
            11,
            36,
            131
        ]
    },
    {
        "id": 2763,
        "name": "Dratis",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_dratis",
        "monster_origin": "cosmic",
        "description": "Dratis is the third and last member of the Ordo Drakkonis. This singular dragon was a magician, but an awful one, so he decided to focus his efforts on the physical offensive. Without any magic, he can kill enemies in a few seconds, but he's also very fragile, so Nahane and Vishamah try to protect him.",
        "books": [
            1,
            13,
            36,
            2
        ]
    },
    {
        "id": 2764,
        "name": "Captain Alvid",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_captain_alvid",
        "monster_origin": "cosmic",
        "description": "She outdid the feats of her father Vandecken by taking Anton Acosmic's fort and stealing his Stardust. After all that, Commander Alvid thought she'd earned a promotion so she gave it to herself: She's Captain Alvid now.",
        "books": [
            4,
            7,
            36,
            2
        ]
    },
    {
        "id": 2765,
        "name": "Fayemalice",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_fayemalice",
        "monster_origin": "corrupted",
        "description": "Fayemelina had always been very much in contact with her Light side. In spite of being predominantly evil, she was kind in a way and had a sense of justice. When the Lord corrupted her, she lost that Light side, but her new evil self, Fayemalice, felt freer and stronger than ever.",
        "books": [
            7,
            2,
            53,
            54
        ]
    },
    {
        "id": 2766,
        "name": "Sensei Pandaken",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_sensei_pandaken",
        "monster_origin": "corrupted",
        "description": "Fayemalice tried to use the Corrupting Root to make Pandaken evil, but her attempt went wrong. Corruption only removed the residual evil every monster has inside them and made him Pure. Now this panda is no longer just a Gold hoarder. He's Sensei Pandaken, a Pure monster filled with wisdom and strength!",
        "books": [
            10,
            20,
            54,
            52,
            132
        ]
    },
    {
        "id": 2767,
        "name": "Dream",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_dream",
        "monster_origin": "corrupted",
        "description": "Dream was running after Pixelion through a network of dimensions when, somewhere in the Monster Legends Universe, someone closed the Cosmic Portal. Dream got trapped in between two dimensions. The energy wave Corrupted his DNA and he turned into a bug. Now he looks nothing like his old self but he still has his contagious wheezing laugh.",
        "books": [
            10,
            20,
            15,
            54
        ]
    },
    {
        "id": 2768,
        "name": "Wing-su",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_wing-su",
        "monster_origin": "corrupted",
        "description": "Wing-Su was always a brave little bird but when Fayemalice Corrupted him, he turned into a brave big bird! Her plan was to recruit Wing-Su for her Lord's army of dark souls, but she should've realized that Wing-Su had no darkness to bring out from within! He's now one of the Pure monsters who will fight to stop Fayemalice and her Lord.",
        "books": [
            31,
            10,
            20,
            54,
            52
        ]
    },
    {
        "id": 2769,
        "name": "Master Rat",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_master_rat",
        "monster_origin": "corrupted",
        "description": "After Corruption made Master Rat pure, he was filled with wisdom, and he made it his mission to use that wisdom to understand how Corruption makes some monsters purely evil and others purely good. Then he'll be able to control it and stop the evil from spreading across the universe of Monster Legends. ",
        "books": [
            10,
            20,
            54,
            52,
            132
        ]
    },
    {
        "id": 2770,
        "name": "Minos",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_minos",
        "monster_origin": "corrupted",
        "description": "Minos lived inside Daedalus' labyrinth fighting against knights who wanted his head as a trophy. Eventually, one of those knights killed him and buried his body at the edge of the Cardinal Forest. Years passed and the beast fell into oblivion, but when someone unearthed all the Lutum under the roots of the forest, the wave of Corruption reached Minos\u2019 body and he resurrected!",
        "books": [
            21,
            6,
            54,
            5,
            104
        ]
    },
    {
        "id": 2771,
        "name": "Dark-er",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_dark-er",
        "monster_origin": "corrupted",
        "description": "Dark-er was born when Lutum covered a piece of Mythic Amber which had been absorbing nightmares and protecting a young monster from them. This twisted spirit travels from dreamer to dreamer corrupting their night sleep and creating nightmares so real that they can come alive.",
        "books": [
            11,
            53,
            54,
            5
        ]
    },
    {
        "id": 2772,
        "name": "Igoribuki",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_igoribuki",
        "monster_origin": "corrupted",
        "description": "When the wave of Corruption blocked the entrance of the Cosmic Portal, Igoribuki got trapped between two dimensions, but this smart monster knows every trick in the book, so he quickly found a way to project himself as a hologram onto the battlefield. You'll find Igoribuki wherever his Support skills are needed!",
        "books": [
            12,
            2,
            6,
            54
        ]
    },
    {
        "id": 2773,
        "name": "Boarinot",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_boarinot",
        "monster_origin": "corrupted",
        "description": "Boarinot's job is to make sure that no one gets in the way of Corruption. Any Pure monster will automatically become a mortal enemy to him. He may be as smart as a stick, but the fact that he doesn't ask questions and just attacks makes him the perfect ally for the Lord.",
        "books": [
            8,
            11,
            53,
            54,
            132
        ]
    },
    {
        "id": 2774,
        "name": "Oliphanatic",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_oliphanatic",
        "monster_origin": "corrupted",
        "description": "When war broke out between his tribe and a rival one, Oliphanatic served as a mediator. However, he got too close to the enemies, who flattered him to earn his trust and then set him a trap. His family never forgave him for becoming friends with their rivals, so Oliphanatic ended up somber and alone. He'll never trust anyone again.",
        "books": [
            21,
            11,
            54,
            20,
            59
        ]
    },
    {
        "id": 2775,
        "name": "Kernel Pip",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_kernel_pip",
        "monster_origin": "corrupted",
        "description": "After the outburst of Lutum, the heart of the forest was a mess. Warmaster Zahra was wounded and unable to manage the situation, but the spirits of the forest are always watching over its inhabitants. One of them is Kernel Pip, who incarnated into a plant and took the lead in the reconstruction tasks. He's not the most diplomatic branch in the tree, but when he's around stuff gets done. ",
        "books": [
            12,
            10,
            20,
            54,
            102
        ]
    },
    {
        "id": 2776,
        "name": "Influxer",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_influxer",
        "monster_origin": "corrupted",
        "description": "Influxer used to work as an electrician at Dr. Viktor's Lab, but his terrible temper cost him his job. After he was fired, he was so furious that he sneaked into the Lab and managed to steal a gooey resource Dr. Viktor was using in his experiments. After he set hands on it, his temper got a thousand times worse. Now Influxer is on the loose with no one to release his anger on. You may be his next victim!",
        "books": [
            11,
            6,
            21,
            54,
            142
        ]
    },
    {
        "id": 2777,
        "name": "Leafilyn",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_leafilyn",
        "monster_origin": "corrupted",
        "description": "Leafilyn is a beloved forest elder. He took care of all the creatures who felt lost or lonely after the big forest catastrophe and guided them through the times of Corruption, including Warmaster Zahra, who was devastated after losing the showdown against The Lord. Monsters like Leafilyn are the backbone of any community.",
        "books": [
            12,
            10,
            2,
            54,
            102
        ]
    },
    {
        "id": 2778,
        "name": "Marley",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_marley",
        "monster_origin": "corrupted",
        "description": "Not a wolf in sheep\u2019s clothing but all the contrary! This superhero dresses up as a shark and appears wherever an innocent sea monster needs rescuing. He had his big breakthrough when he unmasked Sphyrnus, who had pretended to be a sea superhero for years while he stole from the monsters he was supposed to save. Ever since then, Marley\u2019s the one everyone can trust.",
        "books": [
            4,
            12,
            15,
            54
        ]
    },
    {
        "id": 2779,
        "name": "Neurofunk",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_neurofunk",
        "monster_origin": "corrupted",
        "description": "Neurofunk has a level of intelligence superior to most monsters but is handicapped by a total lack of feelings \u2014 well, \"handicapped\" according to forest spirits, not to The Lord, who found this fungus to be so remarkable that he risked himself to recruit it for his army. Neurofunk is obedient. Without feelings, there are no second thoughts or remorse.",
        "books": [
            8,
            60,
            54,
            11
        ]
    },
    {
        "id": 2780,
        "name": "Lady Meow",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_meow",
        "monster_origin": "corrupted",
        "description": "Lady Meow had a fabulous life. Her mother was King Daeron\u2019s strategist and the social status of her family was of the highest rank. She had wonderful dresses and the best education, but every night she sneaked into the armory and trained by herself. That was until she realized that her maid, Kat-herine also trained her magic skills after dusk. They decided to run away and live adventures together!",
        "books": [
            54,
            20,
            59,
            7,
            132
        ]
    },
    {
        "id": 2781,
        "name": "Kat-herine",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_kat-herine",
        "monster_origin": "corrupted",
        "description": "Kat-herine lived a humble life. She preferred not to have big dreams and called herself lucky just for having found friendship at her job. She was the maid of Lady Meow, a kind monster who treated her as an equal. However, when Lady Meow discovered that, like herself, Kat-herine had great battle skills that she was hiding away, she asked her to go on an adventure with her. From that moment, Kat-herine allowed herself to dream and started a new life out in the world!",
        "books": [
            20,
            59,
            7,
            54,
            132
        ]
    },
    {
        "id": 2782,
        "name": "Gartox",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_gartox",
        "monster_origin": "corrupted",
        "description": "They say the inherent fear you feel when looking into murky water comes from no other than the beast that is Gartox. Why? When he was Corrupted, so was the swamp\u2019s legacy. Beware next time you dangle your toes into dark waters.",
        "books": [
            8,
            60,
            54,
            11
        ]
    },
    {
        "id": 2783,
        "name": "Mouseron",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_mouseron",
        "monster_origin": "corrupted",
        "description": "When Mouseron was young, he and Noahrian played heroes and villains. He was the villain and he kinda liked it so, when Noahrian became Noahgnarok, the hero he had always wanted to be, Mouseron began to feel a natural hatred for him. He fantasized about being like the wicked character he played in their games. With the help of The Lord, he was able to finally become a real villain \u2014  Corrupted and intimidating.",
        "books": [
            8,
            54,
            21,
            11
        ]
    },
    {
        "id": 2784,
        "name": "Equaleria",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_equaleria",
        "monster_origin": "corrupted",
        "description": "There are many guards in the Light Kingdom, but none of them quite like Equaleria. She\u2019s Pure by nature, but that purity has flourished more than ever in the present Corrupted Era context. She's developed a special sense to detect danger, something like an inner radar\u2026 And she knows danger is round the corner of the previously peaceful Kingdom.",
        "books": [
            13,
            54,
            7,
            10,
            131
        ]
    },
    {
        "id": 2785,
        "name": "Ferrata",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_ferrata",
        "monster_origin": "corrupted",
        "description": "Ferrata grew up in her sister Basthet's palace and had the life of a royal, but all she wanted to do was to go out into the world and earn everyone's respect as Basthet had done before. When she expressed her feelings, Basthet understood immediately: \"If you work hard enough, you can be 10 times better than me.\" Thus, with her sister's blessing, Ferrata started her new life. ",
        "books": [
            20,
            59,
            7,
            54,
            31,
            132
        ]
    },
    {
        "id": 2786,
        "name": "Rudechaw",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_rudechaw",
        "monster_origin": "corrupted",
        "description": "This forever-angry creature is always looking for something or someone to get his teeth into! When he tried to bite Fayemalice things got even more frustrating; she\u2019d promised to take him along to the Village of Adventurers, but instead left him alone and Corrupted. That is until he met Neurofunk and they started their journey together.",
        "books": [
            8,
            60,
            54,
            11,
            132
        ]
    },
    {
        "id": 2787,
        "name": "Spekthra",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_spekthra",
        "monster_origin": "corrupted",
        "description": "As a bow champion, Spekthra was coveted by many, like Malair, who had tried to recruit her many times. At one point, he felt so humiliated by her that he sent his entire squad of Supervillains to her training center and tried to kill her. He succeeded only partially, and Spekthra survived as a ghost. To this day, she remains alone in her training center, planning her revenge against the Supervillains.",
        "books": [
            12,
            6,
            7,
            54,
            131
        ]
    },
    {
        "id": 2788,
        "name": "Flameara",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_flameara",
        "monster_origin": "corrupted",
        "description": "Flameara was born from the devastated core of the Cardinal Forest with the sole mission of cleansing the aura of desolation that the Corruption explosion left there. She's arrived as a spirit of rebirth who'll burn away all the pain and suffering.",
        "books": [
            20,
            7,
            54,
            10
        ]
    },
    {
        "id": 2789,
        "name": "King Charmless",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_king_charmless",
        "monster_origin": "corrupted",
        "description": "Prince Charmless was valiant, honorable, and educated, but King Daeron never respected him. That was until the Corrupted monsters assaulted the Light Kingdom. During the assault, Lady Meow, who knew his worth, Purified him. He saved the Castle and King Daeron. Such was the loyalty he showed that King Daeron finally gave him recognition. He named him King of the Royal Gardens in the Light Kingdom. Long live King Charmless!",
        "books": [
            54,
            20,
            10,
            62,
            132
        ]
    },
    {
        "id": 2790,
        "name": "ZHC",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_zhc",
        "monster_origin": "corrupted",
        "description": "ZHC worked for Borjork as a jailer. Borjork was fond of ZHC\u2019s work, but he expected a bit more cruelty towards prisoners, so he tried to manipulate him into becoming more brutal by giving him Lutum. The experiment went wrong and Corruption made ZHC brave enough to abandon Borjork and sabotage his evil plans!",
        "books": [
            15,
            5,
            54,
            10
        ]
    },
    {
        "id": 2791,
        "name": "Yaoguai Wangzhou",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_yaoguai_wangzhou",
        "monster_origin": "corrupted",
        "description": "In an army where every soldier looks and does the same, Wangzhou had always wanted to stand out. Instead of duty, it was glory that mattered to him. Fayemalice knew this and also that, whatever their differences, if she recruited Wangzhou, the rest of the Army would have to follow. She Corrupted him and, in exchange, she made him promise he would put the entire Terracotta Army at The Lord's service. Afterwards, Yaoguai Wangzhou would be free to seek his own glory.",
        "books": [
            21,
            11,
            61,
            54
        ]
    },
    {
        "id": 2792,
        "name": "Stungum",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_stungum",
        "monster_origin": "corrupted",
        "description": "This young monster with a passion for chewing gum used to get bullied. Then one day, as he was buying a gumball from his favorite machine, there was a short circuit, and Stungum was devoured by the machine and became part of it. Now he's a bit of a hero who uses his mechanical body and unique powers to defend other oppressed young monsters from bullies!",
        "books": [
            6,
            54,
            20,
            8
        ]
    },
    {
        "id": 2793,
        "name": "Kurai Kage",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_kurai_kage",
        "monster_origin": "corrupted",
        "description": "Ninjas are all about discipline. That's probably the reason why Kurai Kage has been an outcast for most of his life. He fights only with the worst intentions. He's been in several armies, but never lasts long. When the blood runs dry, he gets bored and moves on to serve another leader. His new boss is Yaoguai Wangzhou, the self-proclaimed Emperor of the Eastern Regions.",
        "books": [
            21,
            61,
            54,
            8,
            131
        ]
    },
    {
        "id": 2794,
        "name": "Royal Magus",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_royal_magus",
        "monster_origin": "corrupted",
        "description": "What makes Royal Magus unique and an excellent counsel to King Daeron, is her eyes. She has three magical eyes with different powers: With one of them, she can see what's happening far away from the kingdom. With the second eye, she can see the near future and, with the third, she sees the truth inside others. She\u2019s almost impossible to fool.",
        "books": [
            7,
            10,
            62,
            54
        ]
    },
    {
        "id": 2795,
        "name": "Hammergrom",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_hammergrom",
        "monster_origin": "corrupted",
        "description": "Hammergrom is Warmaster Remntar's nephew and King Daeron's personal armorer. He started out as a link between the very demanding King and the Warmaster, but he quickly became a protector and advisor who always has a seat at Daeron's table. Now the King doesn't go anywhere without him!",
        "books": [
            13,
            31,
            10,
            62,
            54
        ]
    },
    {
        "id": 2796,
        "name": "Jaakuna Hi",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_jaakuna_hi",
        "monster_origin": "corrupted",
        "description": "Jaakuna Hi has lived for many centuries in the Eastern Region and met many of its leaders. For years, the Regions had been ruled by a Council of elders, but Jaakuna Hi missed the old times when there was an Emperor who ruled with an iron fist. When he learned that Wangzhou aspired to become a dark Emperor, Jaakuna Hi immediately offered his support.",
        "books": [
            21,
            11,
            61,
            54,
            131
        ]
    },
    {
        "id": 2797,
        "name": "Wormhole",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_wormhole",
        "monster_origin": "corrupted",
        "description": "This parasite attacks his victims from inside and kills them little by little. If he wants, he can keep and control the bodies of his victims too. The last monster he devoured from within had a unique power: He could gain the appearance of any other monster, so Wormhole decided to keep his body as his most recurrent clothing. While he's in this skin, he can disguise himself and go anywhere.",
        "books": [
            21,
            11,
            54,
            60
        ]
    },
    {
        "id": 2798,
        "name": "Climbert",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_climbert",
        "monster_origin": "corrupted",
        "description": "Climbert used to have climbing competitions against his cousin Thunderkong, but the latter was so lazy that Climbert quickly got tired and went up the mountains looking for new fun. It was up there where he found a frozen artifact. When he turned it on, it introduced itself as Xavipit and explained it had got lost on its way back from work. Climbert helped Xavipit down the mountain and the two monsters ended up becoming great friends!",
        "books": [
            12,
            20,
            10,
            54,
            142
        ]
    },
    {
        "id": 2799,
        "name": "Mojadrak",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_mojadrak",
        "monster_origin": "corrupted",
        "description": "This dragon was flying over the oceans when a massive wave of Lutum appeared out of nowhere and knocked him down! He sank to the bottom of the ocean and felt his body transform. His wings fell off and tentacles grew out of his sides. He tried to perform some attacks, but his abilities had also changed! It took time, but in the end, he made good friends at the seabed and is pretty happy in his new environment.",
        "books": [
            4,
            1,
            10,
            54,
            122
        ]
    },
    {
        "id": 2800,
        "name": "The Boys",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_the_boys",
        "monster_origin": "corrupted",
        "description": "One entity, five personalities. The interactions inside The Boys' head get a little crazy and you can spot him yelling at strangers around town. Sometimes, he joins Toy Master for debates and games that no one but them understands.",
        "books": [
            13,
            15,
            54,
            20
        ]
    },
    {
        "id": 2801,
        "name": "Cruelectrek",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_cruelectrek",
        "monster_origin": "corrupted",
        "description": "Ingenica designed this artifact as a sidekick, but it went rogue from the very beginning. He didn\u2019t obey her and tortured rivals all the time. When he discovered Bounty Hunts, he abandoned his master and dedicated himself to that. He\u2019s amazing at it, but he\u2019s vicious and perverse, even in the eyes of other monsters fighting by his side, who find him terribly scary.",
        "books": [
            6,
            21,
            54,
            11
        ]
    },
    {
        "id": 2802,
        "name": "Junsuina Kaori",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_junsuina_kaori",
        "monster_origin": "corrupted",
        "description": "Kaori had led a lonely life as an outcast samurai, but little by little, she had earned the love and respect of some friends who learned to see behind her swords. However, she had to make a tough decision and, after accepting her new destiny as a Pure monster and becoming Junsuina Kaori, she said goodbye to her friends and left her homeland to contribute to the fight against Corruption.",
        "books": [
            7,
            10,
            52,
            54,
            131
        ]
    },
    {
        "id": 2803,
        "name": "Anwrikah",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_anwrikah",
        "monster_origin": "corrupted",
        "description": "Desperate times call for desperate measures. Wickah had tried everything in her power to make the swamp a better home for her proteges, but after everyone ignored her cries for help, she made an extreme decision and turned to The Lord. Anwrikah \u2014 Wickah's new Corrupted self \u2014 can finally provide for the monsters under her watch, at the cost of losing her soul.",
        "books": [
            8,
            60,
            54,
            7
        ]
    },
    {
        "id": 2804,
        "name": "Clocksuko",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_clocksuko",
        "monster_origin": "corrupted",
        "description": "A master of time, but also time's eternal apprentice. He understands that there are certain rules: He cannot use his skills to change History, but he can pause time briefly or tweak little events here and there, knowing that, in the end, time will always make things right.",
        "books": [
            20,
            52,
            54,
            6
        ]
    },
    {
        "id": 2805,
        "name": "Fungheratops",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_fungheratops",
        "monster_origin": "corrupted",
        "description": "Fungheratops was born from microorganisms floating in the swamp\u2019s pond. As he grew up, he absorbed more microorganisms and other substances. Whether it developed a brain at some point of this process is questioned by many. For some reason, Wickah had a liking for him and supported him in spite of his lack of talent. She even chose him to be one of her first Corrupted allies!",
        "books": [
            13,
            21,
            60,
            54
        ]
    },
    {
        "id": 2806,
        "name": "Frozynaut",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_frozynaut",
        "monster_origin": "corrupted",
        "description": "This alien witch has woken up after many years frozen in the North Pole of Petra. She had come searching for remedies to cure her species' illnesses and hadn't been able to bear the low temperatures up there, but now that she's reawakened with new strength, Frozynaut is determined to complete her mission!",
        "books": [
            9,
            6,
            54,
            7,
            162
        ]
    },
    {
        "id": 2807,
        "name": "Swamzoad",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_swamzoad",
        "monster_origin": "corrupted",
        "description": "Swamzoad is one of the swamp's oldest inhabitats. He was there even before Wickah was assigned the protection of the area! At first, Swamzoad was quite hostile towards Wickah. He thought that \"protector\" would be just a fancy word for \"ruler\", but time passed and Wickah proved her value, so Swamzoad put his experience at her service and became her best advisor.",
        "books": [
            31,
            8,
            60,
            54,
            4
        ]
    },
    {
        "id": 2808,
        "name": "Kenrei",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_kenrei",
        "monster_origin": "corrupted",
        "description": "Kenrei was a noble samurai killed by a bandit called Kurai Kage. Kenrei's spirit decided to stay and attached itself to his old armor, bringing it to life. He started guarding the roads and protecting travellers from bandits and thieves, but when he heard that his killer had become a member of government, he knew he had to do something. After his purification, he committed to removing Yaoguai Wangzhou from power.",
        "books": [
            2,
            8,
            52,
            54,
            131
        ]
    },
    {
        "id": 2809,
        "name": "Blumeria",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_blumeria",
        "monster_origin": "corrupted",
        "description": "Blumeria used to live in the meadow side of the Cardinal Forest but after her roots absorbed some toxins, her colors dimmed and the rest of the sunflowers cruelly invited her to leave their bunch. She left in shame and hid in the swamp, but the darkness of this habitat didn't help her intoxication. Her personality changed completely, but somehow, she found her place. Now she\u2019s kind of a mean guard who turns unwanted visitors away.",
        "books": [
            60,
            54,
            21,
            7
        ]
    },
    {
        "id": 2810,
        "name": "Burnex",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_burnex",
        "monster_origin": "corrupted",
        "description": "This diabolical bug has emerged from Hell by digging a tunnel to the surface and everyone's just wishing there had been more layers to keep it down there! Burnex controls and paralyzes its victims by spitting a burning poison on them, but it is so small that they only realize it's there in front of them once it has attacked them.",
        "books": [
            5,
            54,
            1,
            11
        ]
    },
    {
        "id": 2811,
        "name": "Stalkiller",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_stalkiller",
        "monster_origin": "corrupted",
        "description": "Stalkiller belongs to a lineage of hunters. Each generation in her family has outdone the previous, which makes her the best hunter her tribe of amazons has ever had. She's also had to innovate. As the size of the jungle she calls home shrinks due to felling, Stalkiller's had to come out to find prey, but thanks to that, the world has discovered her magnificent skills!",
        "books": [
            5,
            20,
            54,
            11,
            131
        ]
    },
    {
        "id": 2812,
        "name": "Matt Stonie",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_matt_stonie",
        "monster_origin": "corrupted",
        "description": "Matt Stonie had worked in General Nishant's camp's kitchens for years and felt his life was wasting away there. The problem was that the camp's guards never let him out of the kitchen. So how did he escape? He ate all the food he had cooked for Nishant's entire army! That way, when he ran away in the middle of the night, they were all too starved and weak to go after him.",
        "books": [
            15,
            5,
            10,
            54
        ]
    },
    {
        "id": 2813,
        "name": "Sir Valgar",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_sir_valgar",
        "monster_origin": "corrupted",
        "description": "Valgar the Pure was given a title and made part of the Royal Guard after he saved the Light Royal Family from a horde of orcs who had surrounded their carriage in the middle of a road. When times of Corruption arrived, King Daeron took the initiative and thought \"If someone can save us, that is Sir Valgar\". And so, he had Sir Valgar purified and sent on a mission to defeat The Lord! But is that Sir Valgar's destiny?",
        "books": [
            15,
            10,
            54,
            62,
            132
        ]
    },
    {
        "id": 2814,
        "name": "Elfriede",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_elfriede",
        "monster_origin": "corrupted",
        "description": "Elfriede is The Lord's finest piece of ironwork, because of course someone like him wouldn't just make a chair or a gate as a hobby, he made a coffin and he put his heavily corrupted Lutum inside it, to bring it to life. Elfriede fights by The Lord's side and also imprisons his enemies for eternity!",
        "books": [
            5,
            8,
            54,
            53
        ]
    },
    {
        "id": 2815,
        "name": "Ingwe",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_ingwe",
        "monster_origin": "corrupted",
        "description": "Mythic elegance at its best. Ingwe moves swiftly and hunts smoothly \u2014 legend has it that some of her victims died in awe! She carries a big knife and a net as her hunter attributes, but when she gets down to work, all she needs is her special eye on her forehead, which she uses to see behind branches and bushes, and her enormous fangs!",
        "books": [
            20,
            21,
            11,
            54,
            132
        ]
    },
    {
        "id": 2816,
        "name": "Khamelia",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_khamelia",
        "monster_origin": "corrupted",
        "description": "Ever since she was a child, Khamelia searched for answers in the stars. She used \u200bher talent to help the Light Kingdom, but the answers about herself weren't up in the sky. It took her bravery to understand her true identity could only be found inside. Once she had found that truth, she looked up again and saw more answers than ever. Today, she's the Kingdom's Royal Astrologist.",
        "books": [
            10,
            54,
            62,
            2,
            131
        ]
    },
    {
        "id": 2817,
        "name": "Boomshakalakas",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_boomshakalaka",
        "monster_origin": "corrupted",
        "description": "A fire for hire! A professional pyromaniac! Monsters with no enemies have nothing to worry about, but those with unfinished business should probably keep an extinguisher at hand, because they never know when someone might send Boomshakalaka to scorch their house!",
        "books": [
            20,
            10,
            54,
            2,
            133,
            131
        ]
    },
    {
        "id": 2818,
        "name": "Lord Nebotus",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_lord_nebotus",
        "monster_origin": "corrupted",
        "description": "He spent years in the arms of oblivion. No one even mentioned him if they weren\u2019t joking around. It took him time, unexpected alliances, some setbacks like the discovery of Purity, and lots of Corrupted servants, but in the end, Lord Nebotus is here to rule over all of the Monster Legends.",
        "books": [
            15,
            54,
            11,
            53,
            131
        ]
    },
    {
        "id": 2819,
        "name": "Waldorf",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_waldorf",
        "monster_origin": "corrupted",
        "description": "Waldorf was a little snail who had jumped into The Lord's pocket while he fought with Zahra at the Cardinal Forest. When The Lord found him after his transformation, he decided to keep it as a pet, but Waldorf grew very quickly and became not only a pet but a valuable ally to him.",
        "books": [
            60,
            21,
            11,
            54
        ]
    },
    {
        "id": 2820,
        "name": "Skelektron",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_skelektron",
        "monster_origin": "corrupted",
        "description": "The awakening of Lord Nebotus' powers was too exciting for this dead monster to stay dead. In his previous life, Skelektron had been one of Nebotus' most fervent admirers but, similarly to his idol's fame, he had died young. However, now he's back and ready to join Lord Nebotus' renewed fan club!",
        "books": [
            5,
            8,
            54,
            53
        ]
    },
    {
        "id": 2821,
        "name": "Viatrix",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_viatrix",
        "monster_origin": "corrupted",
        "description": "Viatrix is famous for her magical muds, which she finds in faraway exotic jungles and enriches with the most amazing pollens the trees in the Cardinal Forest can produce. She was dead for a while, but now that Lutum has brought her back to life, she\u2019s determined to outdo her old self as a first-class druid!",
        "books": [
            20,
            10,
            54,
            2,
            102
        ]
    },
    {
        "id": 2822,
        "name": "Megalobot",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_megalobot",
        "monster_origin": "corrupted",
        "description": "Queen and Warmaster Thalassa doesn\u2019t know yet if Lord Nebotus will eventually claim the deep sea as his, but if he ever tries to, he\u2019ll have to face Megalobot first. The Warmaster commissioned Ingenica to build this ferocious artifact shark.",
        "books": [
            4,
            6,
            11,
            54
        ]
    },
    {
        "id": 2823,
        "name": "Turtlellion",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_turtlellion",
        "monster_origin": "corrupted",
        "description": "Once a greedy merchant, Turtlellion is now the most selfless businessmonster in the Light Court. When the Corrupted troops assaulted the kingdom, he was shocked by the disaster and made his merchant fleets and all his money available to the ones who'd suffered the worst. Thanks to him, no one had to suffer hunger or sleep in the cold streets.",
        "books": [
            31,
            20,
            10,
            54,
            62
        ]
    },
    {
        "id": 2824,
        "name": "Melteus",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_melteus",
        "monster_origin": "corrupted",
        "description": "Melteus unjams volcano craters for a living. He keeps eruptions healthy and under control so that there aren't any nasty surprises for the monsters living near them. He's very effective at his job but he's used to working alone so, when taken to a social event, Melteus gets uncomfortable and can become quite explosive himself.",
        "books": [
            20,
            10,
            6,
            54,
            104
        ]
    },
    {
        "id": 2825,
        "name": "Raijin",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_raijin",
        "monster_origin": "corrupted",
        "description": "Not far from the capital of the Eastern Regions, there's a place known as the House of Thunders. It is said that, when dark clouds gather over the house, the spirit of the demon who inhabits it wakes up to bring storms and disgrace to everyone in the country. His name is Raijin, and he's wide awake now!",
        "books": [
            11,
            2,
            61,
            54
        ]
    },
    {
        "id": 2826,
        "name": "Monstera",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_monstera",
        "monster_origin": "corrupted",
        "description": "This plant appeared in the Cardinal Forest after the Lutum explosion, but nobody has paid any attention to it. After all, it's only a regular plant... Isn't it? But... if it is, why do monsters show up all disoriented after walking by Monstera? What's with those hypnotizing eyes at its base? Is Monstera really just a regular plant?",
        "books": [
            60,
            54,
            7,
            11
        ]
    },
    {
        "id": 2827,
        "name": "Pure Pandalf",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_pure_pandalf",
        "monster_origin": "corrupted",
        "description": "It took Pandalf a while to realize that he needed to come out of retirement and play a key role in the fight against Corruption, but in the end, he embraced Purity. Pure Pandalf is ready to devote his wisdom, experience, and talent to the cause! Now that's something that should worry Lord Nebotus...",
        "books": [
            20,
            10,
            59,
            54,
            132,
            131
        ]
    },
    {
        "id": 2828,
        "name": "Chi Ao Loong",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_chi_ao_loong",
        "monster_origin": "corrupted",
        "description": "As the Great Protector of the Eastern Regions, Chi Ao Loong has lived through many incarnations. This time, Yaoguai Wangzhou summoned him hoping he would get rid of the Pure monsters revolting against the Dark Empire, but Chi Ao Loong\u2019s only mission is to put the interests of the country above any political ambitions.",
        "books": [
            54,
            1,
            11,
            61,
            131
        ]
    },
    {
        "id": 2829,
        "name": "TomSka",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_mine-turtle",
        "monster_origin": "corrupted",
        "description": "Toy Master has lost his science class project, and it is dangerous. If you see an innocent-looking turtle with a red button on its shell, step back! What you're looking at is an explosive mine. Call the authorities and, in the meantime: Don\u2019t press the turtle\u2019s button, don\u2019t step on it and, most importantly, if the artifact says \u201cHello\u201d to you, run.",
        "books": [
            15,
            54,
            6,
            20
        ]
    },
    {
        "id": 2830,
        "name": "Panion",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_panion",
        "monster_origin": "corrupted",
        "description": "As a child, Panion, along with his brother Pangoliath, had to steal to survive. He was a bandit who knew every road in Petra. Thanks to Pandalf, who took him in and gave him an education, Panion doesn't have to steal anymore, and he uses his knowledge of the roads to work as a courier. He can get anywhere in no time!",
        "books": [
            20,
            10,
            59,
            54,
            132
        ]
    },
    {
        "id": 2831,
        "name": "Pangoliath",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_pangoliath",
        "monster_origin": "corrupted",
        "description": "Pangoliath works with his brother-by-choice Panion as a courier. They travel together, but things on the road can get a little dangerous. When that happens, Panion tends to be a bit impulsive and attacks straight away. Thankfully for him, Pangoliath is there to watch his back and be the reasonable one!",
        "books": [
            31,
            20,
            10,
            59,
            54,
            132
        ]
    },
    {
        "id": 2832,
        "name": "Algata",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_algata",
        "monster_origin": "corrupted",
        "description": "Algata is the first creature born after the restoration of the swamp. In the eyes of Anwrikah, Algata represents the hope of a new prosperous day for her community. Swamzoad, however, has his doubts about her. After all, she was born Corrupted. So... where does her loyalty lie?",
        "books": [
            60,
            4,
            54,
            11,
            154
        ]
    },
    {
        "id": 2833,
        "name": "Dark-uma",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_dark-uma",
        "monster_origin": "corrupted",
        "description": "When Wangzhou was a child, his mother gave him a daruma figurine as a present and told him it would make all his wishes come true. As the child grew up and became the Corrupted Emperor Yaoguai Wangzhou, he went back to his old daruma, manipulated it, and brought it to life. Now Dark-uma is a genie at his service.",
        "books": [
            8,
            2,
            61,
            54
        ]
    },
    {
        "id": 2834,
        "name": "Mad-triark",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_mad-triark",
        "monster_origin": "corrupted",
        "description": "What makes this alien bug extremely dangerous is her innate need to control every being around her. She does so by distracting victims with her shiny womb while she transforms them into babies... into her babies!",
        "books": [
            7,
            20,
            54,
            11,
            122
        ]
    },
    {
        "id": 2835,
        "name": "Gobzlayer",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_gobzlayer",
        "monster_origin": "corrupted",
        "description": "Gobzlayer grew up as the only goblin in an orc tribe. In the beginning, he felt small and powerless, but as he grew up, he started creating his own advantages to make up for his size. He mastered the art of forging and made a pair of iron axe-wings. It wasn\u2019t enough to help him integrate into his tribe, but now the orcs fear him.",
        "books": [
            21,
            6,
            11,
            54
        ]
    },
    {
        "id": 2836,
        "name": "Marlinaut",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_marlinaut",
        "monster_origin": "corrupted",
        "description": "Most victims of this bad-tempered sea critter end up skewered just for getting in his way, but his ease to catch distracted prey doesn't make him lazy. He likes a good challenge and constantly puts his hunting skills to the test. Thanks to his long and pointy sword, he can catch fish ten times his size!",
        "books": [
            4,
            20,
            10,
            54,
            154
        ]
    },
    {
        "id": 2837,
        "name": "Malfeitor",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_malfeitor",
        "monster_origin": "metropolitan",
        "description": "Information is Malfeitor\u2019s most valuable tool. Thanks to his informers, he was the first monster in Elektra to find out about Nebula. He saw the potential of this resource and tried it on himself before anyone else. Then, he shared the information with his son, Malair, who had a team of villains at his service. Now, father and son are the most powerful monsters in Elektra!",
        "books": [
            21,
            11,
            80,
            76,
            131
        ]
    },
    {
        "id": 2838,
        "name": "Super Dream",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_superdream",
        "monster_origin": "metropolitan",
        "description": "Last time someone shook the Monster Legends Universe, Dream got stuck in between dimensions and turned into a bug. Now it's happened again: Pure Pandalf ended the Corrupted Era right when Dream and his friends were starting a game but this time, he's been luckier. He's transformed into a superhero!",
        "books": [
            80,
            75,
            12,
            20
        ]
    },
    {
        "id": 2839,
        "name": "Sapman",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_sapman",
        "monster_origin": "metropolitan",
        "description": "Sapnap was looking forward to trying out a new mod with his friends Dream and GeorgeNotFound when everything went dark. \"This isn't the challenge I was expecting to do today\", he thought. Then, when the lights came back, he was in a completely different place... and he was different as well! Sapnap had transformed into Sapman!",
        "books": [
            20,
            80,
            75,
            12
        ]
    },
    {
        "id": 2840,
        "name": "Mr NotFound",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_mr_notfound",
        "monster_origin": "metropolitan",
        "description": "George was about to start a game with his friends when there was what felt like a glitch in the universe. He found himself in somewhere that was completely unknown to him. \u201cThis is the biggest 404 ever\u201d, he thought. Then he saw himself in a mirror and realized that he\u2019d been transformed into a superhero! Now he likes to go by a new name: Mr. NotFound.",
        "books": [
            20,
            80,
            75,
            12
        ]
    },
    {
        "id": 2841,
        "name": "Malairion",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_malairion",
        "monster_origin": "metropolitan",
        "description": "Malair had never had trouble staying relevant in a world of monsters who outpowered him because, being the director of Supervillains' Hideout, he managed to stay on top of them all. However, thanks to Malfeitor, he's about to take his power and influence to a whole new level. Malair is now Malairion and he's here to make Supervillain History! ",
        "books": [
            21,
            2,
            80,
            76
        ]
    },
    {
        "id": 2842,
        "name": "Don Canine",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_don_canine",
        "monster_origin": "metropolitan",
        "description": "Al Canine was the top boss in the city, with no competitor who could stand up to him. He thought things couldn't get better, but then Malairion knocked on his door, made him an offer he couldn\u2019t refuse and, after sealing the deal, he transformed Al Canine into Don Canine, the new gangster boss in Monstown.",
        "books": [
            11,
            80,
            77,
            13,
            132
        ]
    },
    {
        "id": 2843,
        "name": "The Frutastor",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_the_frutastor",
        "monster_origin": "metropolitan",
        "description": "Malairion snubbed The Frutastor at an audition for his team of Supervillains, but when he got home, he found that every gutter was clogged with rotten fruit. There were worms everywhere. He realized that an act of revenge so evil could only come from a true supervillain, so he called The Frutastor and offered him a contract.",
        "books": [
            21,
            11,
            80,
            76
        ]
    },
    {
        "id": 2844,
        "name": "Kill Drill",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_kill_drill",
        "monster_origin": "metropolitan",
        "description": "Kill Drill isn't Don Canine's smartest or most faithful henchmonster, but he's the one who brings in the most money and asks the least questions so, all in all, he's the boss' favorite. When Don Canine recruited him, he was just a Low-level burglar with a drill that can get into any safe. Now he's gang royalty, an idol for any criminal!",
        "books": [
            11,
            80,
            77,
            13,
            131
        ]
    },
    {
        "id": 2845,
        "name": "Scintherus",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_scintherus",
        "monster_origin": "metropolitan",
        "description": "The Scintherus is a non-predatory creature from the \u201celectriliae\u201d family. It is covered in very thick scales to protect itself, even though it can summon an electric orb around its body in order to protect other members of its litter. In theory, the Scintherus is a domesticable monster (if you're brave enough).",
        "books": [
            1,
            80,
            20,
            11,
            102
        ]
    },
    {
        "id": 2846,
        "name": "Geckone",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_geckone",
        "monster_origin": "metropolitan",
        "description": "Geckone and Don Canine met in prison. During that time, Canine convinced this very special burglar to join his gang. What makes Geckone special is his ability to play with electricity. He can make the power go out and switch it back again with a flick of his hand, so he's especially useful when there are security cameras and alarms involved!",
        "books": [
            21,
            80,
            77,
            11,
            31
        ]
    },
    {
        "id": 2847,
        "name": "Aquafiend",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_aquafiend",
        "monster_origin": "metropolitan",
        "description": "Dr. Fiend was a brilliant scientist until her colleague Dr. Wattz betrayed and transformed her into Aquafiend, an extraordinary mutant. After her transformation, she had nowhere to go, until Malair offered her a home and a family, but in exchange, she had to become a supervillain at his service.",
        "books": [
            7,
            4,
            80,
            76
        ]
    },
    {
        "id": 2848,
        "name": "Hydraka",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_hydraka",
        "monster_origin": "metropolitan",
        "description": "This sea critter feeds on mussels and seaweed, but when he\u2019s feeling exotic, he crawls out of the water onto dry land, looking for a bite of something different. His strategy is to play dead in the sand for hours, until a scavenger comes and tries to eat him. That\u2019s when\u2026 Snap! Hydraka attacks by surprise! ",
        "books": [
            4,
            80,
            11,
            5,
            155
        ]
    },
    {
        "id": 2849,
        "name": "Decobrah",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_decobrah",
        "monster_origin": "metropolitan",
        "description": "Decobrah starts cooking her potions in her cauldron, but the final touch takes place inside her mouth, where she stores that potion and mixes it with the poison of her fangs and then shoots that deadly cocktail all over her enemies, paralyzing them completely!",
        "books": [
            7,
            10,
            80,
            20,
            160
        ]
    },
    {
        "id": 2850,
        "name": "Ryclops",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_ryclops",
        "monster_origin": "metropolitan",
        "description": "Ryclops was a guide in the mountain regions. His unique staff reflected the moonlight and lit up the way for travelers. But one day, as he helped a traveler across the range, he was caught in an earthquake. He was able to save the traveler, but not himself. He was trapped inside the heart of a mountain until now! The miner dwarves found and unearthed him!",
        "books": [
            2,
            10,
            80,
            20,
            103
        ]
    },
    {
        "id": 2851,
        "name": "Sigrid & Fort",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_sigrid_and_fort",
        "monster_origin": "metropolitan",
        "description": "On the night that Sigrid was born, her grandfather Fort had a revelation that she was destined for greatness, so he devoted his life to making sure she reached her goal. Years later, Sigrid is one of the best wizards Petra has ever known, and the memories of Fort are so strong that she's able to summon him onto the battlefield!",
        "books": [
            2,
            10,
            80,
            8
        ]
    },
    {
        "id": 2852,
        "name": "Jacksepticeye",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_jacksepticeye",
        "monster_origin": "metropolitan",
        "description": "This leprechaun devotes his life to games, but he has a very specific taste. He loves pretty much anything that may cost him his life. If there's no risk of death involved, the game's just not interesting enough for him.",
        "books": [
            1,
            5,
            80,
            15,
            159
        ]
    },
    {
        "id": 2853,
        "name": "Emerald Nathura",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_emerald_nathura",
        "monster_origin": "metropolitan",
        "description": "Cyan Nathura kept reading in the news that the sunlight had become toxic. The problem was that, being part plant, sunbathing wasn't optional for her. With every passing day she felt stronger, until one day, as she was doing her photosynthesis, she transformed into Emerald Nathura! Maybe the sunlight wasn't as toxic?",
        "books": [
            75,
            12,
            80,
            7
        ]
    },
    {
        "id": 2854,
        "name": "The Baronex",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_the_baronex",
        "monster_origin": "metropolitan",
        "description": "The Baroness had always been a tyrannical ruler who abused the few resources of the Wastelands. Now, however, she's crossed the line by allowing Don Canine to leave all of Montrown's trash in her region. She's done it for more power and a new name. As The BaroneX, she'll be able to keep on ruling in spite of her many detractors!",
        "books": [
            7,
            6,
            80,
            78
        ]
    },
    {
        "id": 2855,
        "name": "Jakpack",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_jakpack",
        "monster_origin": "metropolitan",
        "description": "Jakpack's talent is outstanding for a monster of his age. His parents started suspecting that he was special when, at the age of 2, he turned his crib into a hovercraft. He goes to school with all the other young monsters, but he had to combine his education with superhero duty! ",
        "books": [
            6,
            75,
            12,
            80
        ]
    },
    {
        "id": 2856,
        "name": "Aloe Death",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_aloe_death",
        "monster_origin": "metropolitan",
        "description": "Aloe Death made it out of the Wastelands and into Monstown as a stowaway in one of Don Canine's trucks, hidden under a pile of iron beams. The minute he set foot in the city, he started tormenting everyone, so he's become a problem for Mayor Don Canine, who's had to send his best henchmonsters after him before questions about this unwanted visitor arise.",
        "books": [
            11,
            80,
            78,
            21
        ]
    },
    {
        "id": 2857,
        "name": "Acheron",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_acheron",
        "monster_origin": "metropolitan",
        "description": "The Inheritor and Kaih the Sunmelter have only started their new roles as co-rulers of Hell, but they're already feeling the pains of power. Their latest problem is that Acheron, a beast they were keeping in the dungeons to torture their prisoners, has escaped and gone through it to another galaxy!",
        "books": [
            11,
            5,
            80,
            21
        ]
    },
    {
        "id": 2858,
        "name": "Fossarius",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_fossarius",
        "monster_origin": "metropolitan",
        "description": "It has been many years since Fossarius lost control of his flying saucer and crashed it onto the Wastelands Desert. In order to survive in this hostile land, he had to craft weapons out of what was left of his ship. Over time, his lungs adapted to the new atmosphere, and he became the feared mutant he is today.",
        "books": [
            6,
            11,
            31,
            80,
            78
        ]
    },
    {
        "id": 2859,
        "name": "Q-3R1ON",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_q3r10n",
        "monster_origin": "metropolitan",
        "description": "Q-3R1ON is a complex emotional AI inside a robotic shell made of living modular cubes. After measuring the chances of evil forces taking control of Elektra, Q-3R1ON has detected extreme levels of danger and has decided to face those evil forces in order to stop them. ",
        "books": [
            75,
            12,
            80,
            6,
            133
        ]
    },
    {
        "id": 2860,
        "name": "Nautick",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_nautick",
        "monster_origin": "metropolitan",
        "description": "Malairion's project is going according to plan. His latest idea was to install a device under Nautick's shell to gather the rays of sunlight that reach the most superficial part of the oceans of Elektra. Nautick's psionic powers then allow him to telepathically transmit all that energy right into Malairion's Nebula Multiplier.",
        "books": [
            4,
            20,
            11,
            80,
            155
        ]
    },
    {
        "id": 2862,
        "name": "Grakshak",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_grakshak",
        "monster_origin": "metropolitan",
        "description": "It's easier to see Grakshak's weapon than it is to see Grakshak. This tiny warrior fairy has a privileged mind for strategy and fierceness that would make the biggest monster nervous. Sure, someone could step on her, but they'd have to catch her first!",
        "books": [
            3,
            80,
            7,
            11,
            131
        ]
    },
    {
        "id": 2863,
        "name": "Thermagorn",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_thermagorn",
        "monster_origin": "metropolitan",
        "description": "After Malairion chopped down almost every tree in the city to build The Shelter, he left termites with nothing to eat. Unfortunately for him, these bugs aren\u2019t going to give in without a fight. Their leader Thermagorn has a plan to hollow out the ground under The Shelter\u2019s main building. It might take him long to make it, but he\u2019ll get there eventually! ",
        "books": [
            1,
            80,
            21,
            11,
            122
        ]
    },
    {
        "id": 2864,
        "name": "Gahy Zuhl",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_gahy_zuhl",
        "monster_origin": "metropolitan",
        "description": "Gahy Zuhl was sentenced to Hell for committing unspeakable crimes. Now, for the rest of her existence, not only will she live in the Underworld, she'll also have to put up with the pain inflicted by an eternal fire inside her. Because of that pain, she is permanently enraged and makes everyone around her furious too.",
        "books": [
            11,
            5,
            8,
            80
        ]
    },
    {
        "id": 2865,
        "name": "FaZe Rug",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_faze_rug",
        "monster_origin": "metropolitan",
        "description": "FaZe Rug was driving his sports car around Monstown when he skipped a traffic light. Unluckily for him, Malfeitor was there trying to cross the road and he didn't take FaZe Rug's disrespect well. The villain cursed him and fused him with his car, so he's become a massive robot! He may not be able to drive anymore but, as a robot, he\u2019s second to none!",
        "books": [
            75,
            15,
            6,
            80
        ]
    },
    {
        "id": 2866,
        "name": "OG Bone",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_og_bone",
        "monster_origin": "metropolitan",
        "description": "When Don Canine distributed Nebula amongst his collaborators, he skipped the only gangster with enough talent to outshine him: Alex Bone. Alex was desperate to get his hands on some Nebula, but in the end, Nebula came to him without effort: A client offered it to him as payment for a job, and he was able to transform into OG Bone!",
        "books": [
            13,
            11,
            77,
            80
        ]
    },
    {
        "id": 2867,
        "name": "Butcherang",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_butcherang",
        "monster_origin": "metropolitan",
        "description": "Butcherang was raised by Wastelanders as a group, and as a result of that education, he's an amazing hunter, a savage fighter, and a beloved friend to all of them (except The Baroness, of course). He's not that great of a speaker, though, but he doesn't need to be, he always finds a way of communicating with others.",
        "books": [
            20,
            78,
            11,
            80,
            131
        ]
    },
    {
        "id": 2868,
        "name": "Orcatti",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_orcatti",
        "monster_origin": "metropolitan",
        "description": "Keep your friends close and your enemies closer. Orcatti used to be an old rival of Don Canine, but when the latter ran for Mayor, he built a strategy to silence his rivals. To succeed, he enlisted professionals of his own field. That's how he teamed up with Orcatti, who did a great job ensuring none of the other candidates stood a chance!",
        "books": [
            4,
            13,
            77,
            80
        ]
    },
    {
        "id": 2869,
        "name": "Lucky Clint",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_lucky_clint",
        "monster_origin": "metropolitan",
        "description": "Lucky Clint likes people to think he's nothing but a lone wanderer who's good with his guns, but in reality, he's a caring monster who has lots of wisdom to offer. He\u2019s one of Butcherang\u2019s father figures and protectors.",
        "books": [
            20,
            78,
            6,
            80
        ]
    },
    {
        "id": 2870,
        "name": "Dro-Bonaut",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_dro-bonaut",
        "monster_origin": "metropolitan",
        "description": "Dro-Bonaut is a submersible robotic drone developed to assist the Navy. Its main function is to emit an ultra-frequency attack-signal that disables or limits the combat capabilities of both other robots and living monsters! Thanks to it, Dro-Bonaut can disarm entire areas of the ocean.",
        "books": [
            10,
            6,
            80,
            4
        ]
    },
    {
        "id": 2871,
        "name": "Qwaste",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_qwaste",
        "monster_origin": "metropolitan",
        "description": "Qwaste is a trash can hermit. He traveled from Monstown to the Wastelands on one of Don Canine's trucks and found himself in paradise at his new home. He uses garbage not only to protect himself, but also to amplify his foul stench, which allows him to stun even the strongest enemy.",
        "books": [
            31,
            8,
            78,
            11,
            80
        ]
    },
    {
        "id": 2872,
        "name": "Slumster",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_slumster",
        "monster_origin": "metropolitan",
        "description": "Meet Don Canine's most secret collaborator. No one in the Mayor's crew knows about his existence. Slumster is at the center of a network of discreet monsters who only do two things: They listen and whisper. Thanks to him, Don Canine is able to stop protests before they happen or get ahead of potential betrayals coming from inside his crew.",
        "books": [
            13,
            11,
            77,
            80,
            132
        ]
    },
    {
        "id": 2873,
        "name": "Posidonia",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_posidonia",
        "monster_origin": "metropolitan",
        "description": "Posidonia was banished from the seas of Petra after betraying Queen Thalassa. After her expulsion, she docked in the seas of Elektra, and happened to be one of the very few lucky underwater monsters transformed by Nebula thanks to her plant body, which absorbed all the nutrients from the sunshine!",
        "books": [
            13,
            7,
            80,
            4,
            133,
            155
        ]
    },
    {
        "id": 2874,
        "name": "Garnyxel",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_garnyxel",
        "monster_origin": "metropolitan",
        "description": "Garnyxel used to be the guardian angel of a northern tribe. When he started, he was a tiny little cherub doing his best to protect a group of warriors. However, after engaging in too many of their parties and banquets, he lost his angel status. Now he's just Garnyxel, the tribe's guardian, and he still protects the warriors!",
        "books": [
            3,
            20,
            80,
            10,
            90
        ]
    },
    {
        "id": 2875,
        "name": "Tuska",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_tuska",
        "monster_origin": "metropolitan",
        "description": "Tuska doesn't belong in any wolf pack. He prefers to be on his own. He had a hunting partner called Thentsar once, but he died in a battle against an ork, leaving Tuska devastated. He burned his friend\u2019s body and placed the ashes inside a capsule, which he attached to his sword. That way, Thentsar will always be Tuska's hunting partner.",
        "books": [
            21,
            11,
            80,
            20,
            132
        ]
    },
    {
        "id": 2876,
        "name": "Dork",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_dork",
        "monster_origin": "metropolitan",
        "description": "Dork was killed by members of his own tribe when they discovered he was plotting against their leader. However, after his death, his soul was released into the universe and, no one knows what happened out there, but the fact is that it traveled back into his body. When Dork resurrected, the orks understood that it was his destiny to rule.",
        "books": [
            13,
            8,
            21,
            80
        ]
    },
    {
        "id": 2877,
        "name": "Tetsuman",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_tetsuman",
        "monster_origin": "metropolitan",
        "description": "\u200b\u200bWith Malairion controlling all of the Nebula in Elektra, how can the superheroes stop him? Well... They have their own secret weapon, and his name is Tetsuman! Built with cutting-edge technology, countless fighting techniques, and a mission to protect the innocent, Tetsuman is set to give the villains a nightmare or two. ",
        "books": [
            6,
            10,
            20,
            80,
            75
        ]
    },
    {
        "id": 2878,
        "name": "Dark Voltaik",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_dark_voltaik",
        "monster_origin": "metropolitan",
        "description": "Dark VoltaiK doesn\u2019t know he\u2019s a supervillain. He thinks that the power boost that he\u2019s obtained thanks to corruption has brought him back as everyone\u2019s favorite hero... but he\u2019s wrong. Someone so focused on his own glory will never be able to put the protection of the innocent first.",
        "books": [
            21,
            80,
            76,
            11
        ]
    },
    {
        "id": 2879,
        "name": "UV Fusion",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_uv_fusion",
        "monster_origin": "metropolitan",
        "description": "With the help of her friend, Emerald Nathura, who gave her her Nebula-infused sap, Madam Fusion has given way to UV Fusion, the superheroine who will save Monstown from the twisted plans of Malairion and his entire squad of villains! She had to choose between her family and justice. She chose justice.",
        "books": [
            12,
            7,
            80,
            75
        ]
    },
    {
        "id": 2880,
        "name": "Wormanoid",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_wormanoid",
        "monster_origin": "metropolitan",
        "description": "After being bitten by an alien bug, no one wanted to give Wormanoid a chance \u2014 no one except for Malairion, who was fascinated by the mutation the bite had caused on his body. He's been training at the Supervillains' Hideout for a while now, and has been chosen by his boss to become one of his first Nebula-powered agents!",
        "books": [
            21,
            11,
            20,
            80,
            76
        ]
    },
    {
        "id": 2881,
        "name": "Tallulight",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_tallulight",
        "monster_origin": "metropolitan",
        "description": "The citizens of Monstown have been deprived of the sunlight and lied to by Don Canine and Malairion. But the truth always comes out in the end and it's made a certain someone very angry. Tired of sitting around waiting for superheroes to save her, the monster behind Tallulight\u2019s mask has decided to fight back for herself and her fellow citizens!",
        "books": [
            12,
            31,
            7,
            80,
            75
        ]
    },
    {
        "id": 2882,
        "name": "Vilina",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_vilina",
        "monster_origin": "metropolitan",
        "description": "Vilina used to be Fampira\u2019s best friend, but she disappeared when she went trick or treating in Monstown on a night of Halloween. No one saw her after that\u2026 until today. She\u2019s changed a bit, though. There\u2019s still no doubt that she\u2019s from Monstelvania, but her powers and life goals are completely different. She\u2019s Malairion\u2019s supervillain now!",
        "books": [
            7,
            80,
            11,
            21
        ]
    },
    {
        "id": 2883,
        "name": "Firecatcher",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_firecatcher",
        "monster_origin": "metropolitan",
        "description": "Malairion trained this blazing supervillain personally years ago. He knew she had a talent for crime. The problem was that Firecatcher liked to do things her own way and this disobedience cost her her contract. However, Malairion's project is in danger now, so he's put his ego aside and asked Firecatcher to come back to his team!",
        "books": [
            20,
            80,
            76,
            21,
            133
        ]
    },
    {
        "id": 2884,
        "name": "Maremotus",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_maremotus",
        "monster_origin": "metropolitan",
        "description": "\u200b\u200bDon Canine learned the hard way that when you throw toxic residue into the water without seeing what's underneath it, accidents can happen: accidents like Maremotus. Ever since this giant zombie sponge emerged from the ocean, he's brought calamity wherever he goes!",
        "books": [
            5,
            8,
            4,
            80,
            155
        ]
    },
    {
        "id": 2885,
        "name": "Werevolt",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_werevolt",
        "monster_origin": "metropolitan",
        "description": "This werewolf lived in the forest, where he'd be harmless to the citizens, but when Malairion and Don Canine destroyed it to make room for The Shelter, he was left with nowhere to live. Blinded by his fury, he tried to storm the city, but he didn't see the electric fence surrounding it. He clashed against it and... that was the birth of Werevolt!",
        "books": [
            8,
            21,
            20,
            80,
            132
        ]
    },
    {
        "id": 2886,
        "name": "Firefly",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_firefly",
        "monster_origin": "metropolitan",
        "description": "Beware! If you see a bright red bug offering to guide you through the dark areas of the Cardinal Forest, run. Firefly is the mother of five, none of which know how to hunt, so she has to do all the work. She lures clueless victims by offering to get them to the other side of the forest, stuns them, and steals their food.",
        "books": [
            1,
            20,
            80,
            11
        ]
    },
    {
        "id": 2887,
        "name": "Beambot",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_beambot",
        "monster_origin": "metropolitan",
        "description": "Official statement: Global Mech Ltd, Elektra's top tech company, proudly announces the release of their latest creation: Beambot. This pocket-sized flying unit hides a compressed cannon inside. With its powerful light beam, Beambot has the capacity to destroy any target in a radius of 10 miles.",
        "books": [
            6,
            80,
            11,
            2,
            120
        ]
    },
    {
        "id": 2888,
        "name": "Mandarka",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_mandarka",
        "monster_origin": "doomed",
        "description": "Mandarka arrived in the Underworld at a very young age. He was practically dragged there when no one could stand him anymore on the Land of the Living. On the first couple of days he felt disoriented, but he quickly realized that Hell was perfect for him! He's the best at torturing souls.",
        "books": [
            5,
            11,
            94,
            3
        ]
    },
    {
        "id": 2889,
        "name": "McCreamy",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_mccreamy",
        "monster_origin": "doomed",
        "description": "McCreamy used to eat ice cream all the time until he made the ultimate mistake: He stole King Daeron's royal birthday ice cream! When the King found out, he sentenced McCreamy to the worst possible punishment for him \u2014 a lifelong stay in the Underworld, where ice creams melt in seconds and taste like sulfur!",
        "books": [
            15,
            10,
            20,
            94,
            142
        ]
    },
    {
        "id": 2890,
        "name": "Lord Inheritor",
        "attributes": [
            "f",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_lord_inheritor",
        "monster_origin": "doomed",
        "description": "The Inheritor was co-ruling the Underworld with Kaih the Sunmelter, but it wasn't enough for him. In order to become the sole ruler, he broke the pact of balance between Demons and Angels: He stole Ambrosia and transformed into a Demon with unmatched power. Now, no one stands up to him\u2026 or rules by his side.",
        "books": [
            5,
            93,
            94,
            3
        ]
    },
    {
        "id": 2891,
        "name": "Darmith Khan",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_darmith_khan",
        "monster_origin": "doomed",
        "description": "General Darmith wasn't the Supreme General of all Fire monsters he used to be. He was demotivated, had lost most of his soldiers, and had had to team up with Barbarians of other elements and factions. However, after he got a gift in the shape of Ambrosia from Lord Inheritor, his motivation is back and he's fully focused on destruction!",
        "books": [
            1,
            11,
            92,
            94,
            131
        ]
    },
    {
        "id": 2892,
        "name": "Izabeth",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_izabeth",
        "monster_origin": "doomed",
        "description": "Lord Inheritor is hungry for grandeur and determined to build a court of thousands of servants and acolytes. His personal favorite is Izabeth, a skilled and dedicated demon with an incredible talent for dark arts. However, after seeing Lord Inheritor's rise to the throne, Izabeth aspires to much more than to being an obliging acolyte.",
        "books": [
            5,
            2,
            93,
            94
        ]
    },
    {
        "id": 2893,
        "name": "Thundorc",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_thundorc",
        "monster_origin": "doomed",
        "description": "Thundorc has been a friend of Darmith Khan for years. This ferocious barbarian vouched for the alliance between orcs and Darmith's army when no one believed it would actually work, so when it proved successful, she immediately became a key ally for the General.",
        "books": [
            7,
            11,
            92,
            94
        ]
    },
    {
        "id": 2894,
        "name": "Clach",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_clach",
        "monster_origin": "doomed",
        "description": "When Lord Inheritor stole the Ambrosia from the Peak of Conciliation, he released a wave of energy so strong that a part of the mountain detached and came alive. Its name is Clach and its body is the breathing memory of the day when angels and demons dropped their swords for the sake of peace, which has been broken centuries later.",
        "books": [
            9,
            13,
            2,
            94,
            133,
            162
        ]
    },
    {
        "id": 2895,
        "name": "Goathram",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_goathram",
        "monster_origin": "doomed",
        "description": "Darmith Khan is a brutal warrior, but he\u2019s been around for long enough to know that if everyone around him is just as savage and short-tempered as he is, he\u2019ll end up failing. That\u2019s why he keeps monsters like Goathram at hand. This Barbarian shaman isn\u2019t here to destroy, but to keep enemies from stopping Darmith and his soldiers.",
        "books": [
            11,
            92,
            94,
            13,
            31
        ]
    },
    {
        "id": 2896,
        "name": "Killarok",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_killarok",
        "monster_origin": "doomed",
        "description": "Lord Inheritor may have won the first battle against the Angels, but he knows that the war has just begun. For this reason, he's started putting together some key soldiers to help him and the other Demons if the Angels dare to counterattack. His first creation is called Killarok, a monster made of unaltered Underworld rock!",
        "books": [
            93,
            94,
            5,
            11,
            133
        ]
    },
    {
        "id": 2897,
        "name": "Plantomination",
        "attributes": [
            "n",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_plantomination",
        "monster_origin": "doomed",
        "description": "This mutant plant may not come from the Underworld, but it's as scary as any demon. The bigger it gets, the more heads it spawns. The more heads it spawns, the hungrier it gets. The hungrier it gets, the more it eats, and the more it eats, the bigger it gets!",
        "books": [
            8,
            2,
            94,
            11,
            122
        ]
    },
    {
        "id": 2898,
        "name": "Thundercane Jelly",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_thundercane_jelly",
        "monster_origin": "doomed",
        "description": "This extraordinary pirate-wizard has the ability to predict heavy surges, but also appease them. All he needs to do is jump into the water, cast an intense yellow circle of light and, in a matter of seconds, the ocean becomes as calm as a lake. Then, Thundercane Jelly jumps back on the pirate ship and the voyage continues!",
        "books": [
            4,
            20,
            94,
            11
        ]
    },
    {
        "id": 2899,
        "name": "Pipershock",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_pipershock",
        "monster_origin": "doomed",
        "description": "Pipershock is a hunter for hire, trained to fight both on dry land or in deep, cold waters. Thanks to her unique body, she's always armed and ready to go! Liquid metal runs through her veins, and when she's ready to attack, it solidifies and compresses into a cannon ball which she then shoots through her blowpipe mouth! ",
        "books": [
            9,
            6,
            4,
            94
        ]
    },
    {
        "id": 2900,
        "name": "Hidrorion",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_water_hidrorion",
        "monster_origin": "doomed",
        "description": "Thalassa is worried about her fellow Warmaster Elvira, so she's refurbished and sent her an old artifact she always found useful whenever there was a war in her realm. Hidrorion has a cannon gun integrated into its metal body, and it will surely help the Angels when the time comes to reconquer the Celestial Paradise!",
        "books": [
            6,
            4,
            94,
            11
        ]
    },
    {
        "id": 2901,
        "name": "Xiron the Great",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_xiron_the_great",
        "monster_origin": "doomed",
        "description": "Thanks to Warmaster Elvira's generous contribution in the shape of Ambrosia, Sherezar and his Magic Council have been able to create the perfect spell-crafted magician: Xiron the Great. He's a faultless version of the first Xiron, an uncontrollable ball of magic accidentally cast by General Shannara years ago.",
        "books": [
            10,
            2,
            91,
            94,
            131
        ]
    },
    {
        "id": 2902,
        "name": "SSundee",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_ssundee",
        "monster_origin": "doomed",
        "description": "SSundee went from the Elektra mines to the battlefield, thanks to a superpowered cap and sunglasses. This blue-clad monster might be more interested in crafting than destruction, but that doesn\u2019t mean he won\u2019t make dog water out of his opponents!",
        "books": [
            15,
            10,
            20,
            94,
            142
        ]
    },
    {
        "id": 2903,
        "name": "Visiel",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_visiel",
        "monster_origin": "doomed",
        "description": "Visiel uses their hypnotizing gaze to disable enemies on the battlefield. While they have Dark powers, Visiel actually fights for the Celestial Paradise, using their abilities to buff teammates as well as to curse the other side.",
        "books": [
            10,
            90,
            3,
            94
        ]
    },
    {
        "id": 2904,
        "name": "Arch Duke",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_arch_duke",
        "monster_origin": "doomed",
        "description": "Elvira had tried to summon Arch Knight after she fell from the Celestial Paradise, but it wasn't until Xiron found his relic that she was able to invoke him! However, Xiron\u2019s presence in the ritual had an unexpected effect: Arch Knight manifested himself as Arch Duke. His mission is to be the first Angel to reach Paradise after Doomsday!",
        "books": [
            10,
            90,
            3,
            94
        ]
    },
    {
        "id": 2905,
        "name": "P3 R3",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_p3r3",
        "monster_origin": "doomed",
        "description": "P3R3 is a self-conscious robot. Thanks to his advanced AI, he's able to work as a programmer. He even fixes the bugs inside his own system! Unlike most robots, P3R3 is able to have fun, so when he's not working, he likes to play games with his friend Hackster. If there's soccer and cars involved, even better.",
        "books": [
            10,
            6,
            20,
            94,
            120
        ]
    },
    {
        "id": 2906,
        "name": "Sealkara",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_sealkara",
        "monster_origin": "doomed",
        "description": "Sealkara was an ordinary seal until she swallowed an enchanted fish, granting her ice powers. The Magic Council searched for the fish and found Sealkara instead. Now Warmaster Sherezar has summoned Sealkara to cross the Frozen Mountains and put the Council\u2019s enemies on ice.",
        "books": [
            9,
            4,
            91,
            94,
            132
        ]
    },
    {
        "id": 2907,
        "name": "Juggernael",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_juggernael",
        "monster_origin": "doomed",
        "description": "The angels are determined to win the Celestial Paradise back and they're not playing games anymore. If you have any doubts, just look at Juggernael. This massive tank of an angel is the solid protector of the celestial legions, keeping them 100% Demon-proof. ",
        "books": [
            90,
            3,
            31,
            6,
            94
        ]
    },
    {
        "id": 2908,
        "name": "Earthog",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_earthog",
        "monster_origin": "doomed",
        "description": "This Miner Dwarf was recruited by Crissandre to become a Battle Mage. When he got old, he retired to the headquarters of the Magic Council, where he spent his days documenting his adventures. He hadn't grabbed his hammer for a very long time, but when the Barbarians attacked his home, it was time for a comeback!",
        "books": [
            2,
            91,
            20,
            94
        ]
    },
    {
        "id": 2909,
        "name": "TeddyBomb",
        "attributes": [
            "n",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_teddybomb",
        "monster_origin": "doomed",
        "description": "Santerion and Thundeer were told not to hire a goblin as a helper a thousand times, but they didn't listen... and maybe they should have, because all Teddybomb does all day long is open the gifts that Roboelf wraps and put explosives in them.",
        "books": [
            9,
            6,
            20,
            94,
            159
        ]
    },
    {
        "id": 2910,
        "name": "X-Mess",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_x-mess",
        "monster_origin": "doomed",
        "description": "Who sneaked X-Mess into Santerion's sleigh? This joke is too sick, even for Teddybomb! Also, Teddybomb would've never been able to get his hands on a tiny yet deadly abomination such as this one. Anyway, what matters now isn\u2019t who created X-Mess, but how we\u2019re going to track it down and lock it up!",
        "books": [
            9,
            8,
            11,
            94,
            159
        ]
    },
    {
        "id": 2911,
        "name": "Snowgross",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_light_snowgross",
        "monster_origin": "doomed",
        "description": "Do you remember Freeza? This snowman used to pick on young monsters but this year he hasn't chosen his victims well. He attacked a group of young Barbarians and, in return, they disfigured him! Now he has three noses and zero eyes. He's also angrier and more aggressive than ever!",
        "books": [
            9,
            2,
            94,
            8,
            162
        ]
    },
    {
        "id": 2912,
        "name": "Jaeger Yearend",
        "attributes": [
            "m",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_jaeger_yearend",
        "monster_origin": "doomed",
        "description": "You have heard about shooting stars, but have you ever heard about a star shooter? That's Jaeger Yearend. This intergalactic pyrotechnician uses his magic to first encapsulate stars and then use them as his ammunition! When the shot is good, he'll even create an entire constellation.",
        "books": [
            9,
            20,
            94,
            10
        ]
    },
    {
        "id": 2913,
        "name": "Chieftain Alarorc",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_chieftain_alarorc",
        "monster_origin": "doomed",
        "description": "Alarorc may be dumb as a stick, but he was also the one to eat a feather that Arch Duke left behind after a battle. The feather was made of pure Ambrosia so... long story short: Alarorc became the strongest orc in his tribe, which means he became the Boss \u2014 Chieftain Alarorc.",
        "books": [
            21,
            92,
            11,
            94,
            131
        ]
    },
    {
        "id": 2914,
        "name": "Barbatos Rex",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_barbatos_rex",
        "monster_origin": "doomed",
        "description": "When he was dethroned, Barbatos accepted his defeat without making a big fuss, but only because he knew that his moment to come back would arrive and that his friends in Hell wouldn't fail him... and they didn't. Thanks to them, he was able to obtain Ambrosia and transform into Barbatos Rex. He is ready to get his throne back.",
        "books": [
            93,
            5,
            11,
            94
        ]
    },
    {
        "id": 2915,
        "name": "Weirdika",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_weirdika",
        "monster_origin": "doomed",
        "description": "One night, a clan of orc magicians violated the skulls of three long-dead Barbarian heroes to use in a dark summoning ritual. It worked, but she wasn't happy about the interruption. What happened to those orcs? Only Weirdika knows.",
        "books": [
            7,
            92,
            11,
            94
        ]
    },
    {
        "id": 2916,
        "name": "Monk Flamorg",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_monk_flamorg",
        "monster_origin": "doomed",
        "description": "The twisted Monk Flamorg belongs to an ancient order of energy-manipulating demon cultists. A master invoker of flame, he was trained in the most terrifying recesses of the underworld, where he constructed dark alliances with other power-hungry demons. ",
        "books": [
            93,
            5,
            94,
            11
        ]
    },
    {
        "id": 2917,
        "name": "Brainlien",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_brainlien",
        "monster_origin": "doomed",
        "description": "Originally created as a pet for Eisul, Brainlien proved itself to be so much more. It was sitting in Eisul\u2019s lap when an assassin suddenly attacked without warning, aiming straight for Eisul\u2019s heart! Eisul was so impressed by his little pet\u2019s bravery that he granted it a set of bionic legs so they could ride into battle together.",
        "books": [
            21,
            6,
            8,
            94,
            121
        ]
    },
    {
        "id": 2918,
        "name": "Gwalirn",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_gwalirn",
        "monster_origin": "doomed",
        "description": "Gwalirn loves causing chaos, on and off the battlefield. Half merfolk and half imp, he must infiltrate and occupy bodies of water outside the Underworld to survive, which gives him ample opportunity to play pranks!",
        "books": [
            21,
            93,
            5,
            31,
            94
        ]
    },
    {
        "id": 2919,
        "name": "Ogeronk",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_ogeronk",
        "monster_origin": "doomed",
        "description": "Ogeronk is too brutal even for Barbarian standards. Darmith Khan keeps him in chains and inside a cage for extra protection from him. He doesn't feed him so that he's furious and hungry when he lets him out for battle. This strategy has worked so far, but Darmith's secretly scared that one day Ogeronk's fury and hunger will turn against him!",
        "books": [
            21,
            92,
            94,
            11
        ]
    },
    {
        "id": 2920,
        "name": "Raris",
        "attributes": [
            "l",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_light_raris",
        "monster_origin": "doomed",
        "description": "This abomination was trapped inside a space void for centuries. As it came out, it had completely mutated into what it is today. During its time inside the void, Raris acquired some extraordinary powers, like the ability to see the future and the past of other monsters, as well as manipulate their memories.",
        "books": [
            21,
            2,
            94,
            11,
            122
        ]
    },
    {
        "id": 2921,
        "name": "Fundy",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_fundy",
        "monster_origin": "doomed",
        "description": "Fundy is a well-known architect and constructor in Elektra. He's moved from his home city into Monstown to help restore all the areas that were destroyed by Malairion and Don Canine to make room for The Shelter. He's become friends with Super Dream and the other Superheroes. The city is in good hands now!",
        "books": [
            15,
            20,
            10,
            94,
            132,
            142
        ]
    },
    {
        "id": 2922,
        "name": "Khalidan",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_khallidan",
        "monster_origin": "doomed",
        "description": "\u200b\u200bThis orc was repudiated by his tribe because of his size right after his birth, so he was raised at the Light Kingdom. As Khalidan grew up, it became clear that you can take an orc out of his tribe, but he'll still be an orc. He was aggressive and loved sharp objects so, in order to channel his violence, he took up a job that was perfect for him: executioner!",
        "books": [
            21,
            13,
            11,
            94
        ]
    },
    {
        "id": 2923,
        "name": "Galvanus",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_galvanus",
        "monster_origin": "doomed",
        "description": "This alchemist used to experiment with Thunder currents. \"Used to\", because one day, an experiment went horribly wrong and his entire body was affected by those electric currents. Since then, battling has been the only way Galvanus can find balance. He channels the currents inside him through his skills.",
        "books": [
            6,
            10,
            94,
            62
        ]
    },
    {
        "id": 2924,
        "name": "Shivarakah",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_shivarakah",
        "monster_origin": "doomed",
        "description": "Shivarakah is a hunter witch (not to be confused with a witch hunter!). She used to be part of a trio, but she lost her sister witches in a dangerous ritual. Since that fateful event, she's alert and very aware of her loneliness. Her survival depends on her and her only, so she trusts no one but herself.",
        "books": [
            8,
            11,
            94,
            7
        ]
    },
    {
        "id": 2925,
        "name": "Elvira Demonslayer",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_light_elvira_demonslayer",
        "monster_origin": "doomed",
        "description": "Warmaster Elvira would\u2019ve never believed it if someone had told her that it would be Barbatos Rex, a demon, who would give her the ultimate power boost and the opportunity to win her war against Hell, but here she is \u2014 all fired up and ready to slay some demons!",
        "books": [
            90,
            3,
            7,
            94,
            131
        ]
    },
    {
        "id": 2926,
        "name": "Emmerice",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_emmerice",
        "monster_origin": "doomed",
        "description": "Emmerice took form after a demonic ice attack on the Cardinal Forest, absorbing punishing Ice magic to fuel her own powers. She protects the forests with a fierceness harder and colder than ice or gems.",
        "books": [
            94,
            2,
            21,
            60,
            102
        ]
    },
    {
        "id": 2927,
        "name": "Uriel the Divine",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_uriel_the_divine",
        "monster_origin": "doomed",
        "description": "Uriel was already there in the dawn of time. He's an Angel, but you'll rarely see him with the Celestial Legions. He doesn't take part in wars, unless a law of the universe or a sacred pact is broken. He only intervenes in historical moments to act as a supreme judge; this time he\u2019s here to judge the one who broke the Peak of Conciliation Treaty.",
        "books": [
            90,
            94,
            3,
            2,
            131
        ]
    },
    {
        "id": 2928,
        "name": "Sparkus",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_sparkus",
        "monster_origin": "doomed",
        "description": "Sparkus had terrible problems controlling the electricity inside him until his brother, Ukuduma, talked to Sherezar about him. The Warmaster created an enchanted armor for Sparkus, which has allowed him to channel all that electricity. Now he's able to use it in his favor!",
        "books": [
            91,
            31,
            10,
            94,
            2
        ]
    },
    {
        "id": 2929,
        "name": "Master Goldfield",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_master_goldfield",
        "monster_origin": "doomed",
        "description": "Goldfield spent centuries studying the interactions between Light and Darkness, Life and Death,... However, his favorite relationship is the one between Magic and Nature, which made him develop a special connection with the creatures in the Forest; it's so special that it made him come out of retirement the minute he learned that it was in trouble.",
        "books": [
            91,
            20,
            10,
            94,
            131
        ]
    },
    {
        "id": 2930,
        "name": "Phyreas",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_phyreas",
        "monster_origin": "doomed",
        "description": "In order to atone for a destructive mistake, Warmaster Sherezar ordered Phyreas to fight his way south to the Free Lands. The struggles along the way honed Phyreas into a wise and mighty Fire magician. Now he trains the most powerful Fire magicians in the land.",
        "books": [
            91,
            20,
            10,
            94,
            131
        ]
    },
    {
        "id": 2931,
        "name": "Golemnoid",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_golemnoid",
        "monster_origin": "doomed",
        "description": "Golemnoid is tired of having Barbarians crossing up and down the mountain region all the time, so he's made it his personal mission to protect his part of the territory. He's just one monster, but he'll use his Control skills to confuse at least one or two Barbarians and get them to fight on his side.",
        "books": [
            13,
            10,
            94,
            2,
            133
        ]
    },
    {
        "id": 2932,
        "name": "Jack Russael",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_jack_russael",
        "monster_origin": "doomed",
        "description": "Jack Russael was once the loyal protector of a young and defenseless monster. He vowed to do anything to keep his master safe and kept his word until the end, when he sacrificed his life to save him. Jack's service was so outstanding that the Celestial Legions granted him a new life and recruited him for their ranks!",
        "books": [
            13,
            94,
            10,
            90,
            132
        ]
    },
    {
        "id": 2933,
        "name": "Cherub Cupid",
        "attributes": [
            "f",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_cherub_cupid",
        "monster_origin": "doomed",
        "description": "Cherub Cupid materializes wherever desperate lovers need his help and lights their way towards their soulmates. Whenever he's free, Cherub Cupid likes to spend his time in the Light Kingdom. He finds its beautiful flower gardens very inspiring; he actually prefers them over the Celestial Paradise!",
        "books": [
            90,
            10,
            94,
            3,
            131
        ]
    },
    {
        "id": 2934,
        "name": "Bionic",
        "attributes": [
            "e",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_bionic",
        "monster_origin": "doomed",
        "description": "Bionic used to work as a master crafter at Global Mech Ltd., but after building robots and weapons for others for many years, he's decided to quit and start his own adventure. He's built himself some fine weapons and is ready to explore Elektra!",
        "books": [
            15,
            6,
            94,
            10,
            142
        ]
    },
    {
        "id": 2935,
        "name": "Danisaurus",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_danisaurus",
        "monster_origin": "doomed",
        "description": "Danisaurus was one of the first Barbarians. After a long life and endless wars, he was feeling old and tired. He thought about leaving his tribe and retiring alone at the mountains, but Darmith Khan decided to reward him for all his battles with a gift in the shape of Ambrosia, which has brought new strength to this ancient monster!",
        "books": [
            1,
            11,
            94,
            92,
            131
        ]
    },
    {
        "id": 2936,
        "name": "Elfeera",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_elfeera",
        "monster_origin": "doomed",
        "description": "This dark elf lives at the skirts of a volcano, surrounded by ash, but since her homeland is pretty dead, she spends a lot of time traveling in all sorts of forests and mountain chains. However, in spite of being a great adventurer, she's never made friends away from home. Survival is her only interest.",
        "books": [
            11,
            7,
            94,
            20,
            131
        ]
    },
    {
        "id": 2937,
        "name": "Nereida de Danann",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_nereida_de_danann",
        "monster_origin": "blossom",
        "description": "Nereida has always been one of the Forest key ambassadors. She can speak the language of monsters, fairies, plants, and spirits easily and always makes sure everyone's voice gets heard, so now that a new Era has blossomed in the Cardinal Forest, this beloved fairy has been reborn into a Mythic creature!",
        "books": [
            7,
            3,
            108,
            102
        ]
    },
    {
        "id": 2938,
        "name": "Queen Zahra",
        "attributes": [
            "n",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_queen_zahra",
        "monster_origin": "blossom",
        "description": "Warmaster Zahra was the initiator of the Blossom Era, not only because she conducted a magic ritual along with other Forest monsters and changed everything, but also because she was the first one to try a sweet Nectar that was previously unknown to monsterkind. After drinking it, she transformed into Queen Zahra!",
        "books": [
            7,
            10,
            108,
            102,
            131
        ]
    },
    {
        "id": 2939,
        "name": "Mr Beast Eco",
        "attributes": [
            "w",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_water_mr_beast_eco",
        "monster_origin": "blossom",
        "description": "Mr. Beast has a new mission: To save the planet of Elektra after Malairion\u2019s debacle! Emerald Nathura and the rest of the Superheroes have enlisted this pro ecologist and he\u2019s determined to succeed, even if he has to face some of the most notorious figures in Monstown along the way.",
        "books": [
            15,
            4,
            10,
            108,
            132,
            142
        ]
    },
    {
        "id": 2940,
        "name": "Rock Archdruid",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_rock_archdruid",
        "monster_origin": "blossom",
        "description": "After years away from home, Rock Druid was ready to go back to the mountains and reunite with his tribe of miner dwarfs. However, before setting on his journey, he transformed into Rock Archdruid and understood that he was meant to play a key role in the reconciliation of his tribe once he got home. ",
        "books": [
            10,
            108,
            20,
            103
        ]
    },
    {
        "id": 2941,
        "name": "Antlerian",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_antlerian",
        "monster_origin": "blossom",
        "description": "Antlerian is a wise and ancient denizen of the Cardinal Forest. A counselor and philosopher, he is also deeply invested in the outcome of Queen Zahra\u2019s ritual. He fights at her side in order to study the effects and consequences of her having unleashed such powerful forces.",
        "books": [
            13,
            10,
            108,
            102,
            133
        ]
    },
    {
        "id": 2942,
        "name": "Silex",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_silex",
        "monster_origin": "blossom",
        "description": "Silex is a mountain golem brought to life by Queen Zahra\u2019s banishment ritual. A tireless and mighty combatant, Silex fights alongside the forces of Light, although whether they will eventually turn back into silent rock remains to be seen.",
        "books": [
            2,
            10,
            108,
            103,
            133
        ]
    },
    {
        "id": 2943,
        "name": "Torvax",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_torvax",
        "monster_origin": "blossom",
        "description": "Torvax uses his strong Psionic powers to neutralize Abomination portals and assassinate the creatures that made them. A student of space piracy, Torvax is always careful not to repeat the mistakes of his forebears. However, he is not infallible, and may one day never return from his vigilantism.",
        "books": [
            13,
            11,
            21,
            108,
            119
        ]
    },
    {
        "id": 2944,
        "name": "Strolem",
        "attributes": [
            "e",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_strolem",
        "monster_origin": "blossom",
        "description": "Strolem was born centuries ago when lightning struck a mountain in the Rocky Peaks region. He started traveling across Petra aimlessly, causing destruction wherever he went. He became problematic and a group of ancient mages cast a spell and put him to sleep\u2026 but the long nap is over!",
        "books": [
            31,
            8,
            21,
            108,
            103,
            133
        ]
    },
    {
        "id": 2945,
        "name": "Bucelyn",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_bucelyn",
        "monster_origin": "blossom",
        "description": "Bucelyn was a woodcutter at the Cardinal Forest who was challenged to a game of chess by an elf who was traveling by his cottage. The elf won the game by checkmating the woodcutter with his knight. As punishment, the woodcutter was cursed and turned into this bulky living wooden horse. ",
        "books": [
            2,
            10,
            108,
            20,
            102
        ]
    },
    {
        "id": 2946,
        "name": "Ahma Niah",
        "attributes": [
            "m",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_ahma_niah",
        "monster_origin": "blossom",
        "description": "Ahma Niah is a breath of fresh air in the Magic Council, an organization that can be a bit arcane sometimes. All its members joined several decades or even centuries ago, but Ahma Niah, having proved her talent and wisdom, has earned her membership and is determined to open the minds of her fellow mages.",
        "books": [
            7,
            108,
            91,
            10,
            131
        ]
    },
    {
        "id": 2947,
        "name": "Hardnut Gorilla",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_light_hardnut_gorilla",
        "monster_origin": "blossom",
        "description": "This street fighter was once managed by Al Canine, but after the manager became the Mayor, Hardnut Gorilla was left on his own, only to discover that Don Canine had been milking him for money his whole life without him knowing. Now he's furious and ready to make Canine pay!",
        "books": [
            21,
            108,
            11,
            77,
            132
        ]
    },
    {
        "id": 2948,
        "name": "Slimok",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_slimok",
        "monster_origin": "blossom",
        "description": "Slimok isn't native to space. It was once a bug in the Cardinal Forest, but got sucked in by the Portal of Abominations by Baba Yaga's hut. Most bugs would've died in this journey, but for reasons unknown, Slimok's body didn't perish. Instead, it transformed into an alien and adapted to its new environment.",
        "books": [
            5,
            8,
            108,
            11,
            122
        ]
    },
    {
        "id": 2949,
        "name": "Vrak Shriker",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_vrak_shriker",
        "monster_origin": "blossom",
        "description": "Vrak Shriker was one of the best Space Defenders. He always liked to do things his own way, but he crossed the line when he stole some of the team's weapons for his own personal collection. When the other Defenders found out, he was given an ultimatum. But Vrak Shriker decided to keep the weapons and ditch the job!",
        "books": [
            6,
            20,
            108,
            1,
            119
        ]
    },
    {
        "id": 2950,
        "name": "TommyInnit",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_tommyinnit",
        "monster_origin": "blossom",
        "description": "TommyInnit became a real-life video game hero by crafting a set of light armor and a heavy-hitting purple bat. With his super-fast strikes, the bad guys will definitely know what hit them!",
        "books": [
            15,
            20,
            10,
            108
        ]
    },
    {
        "id": 2951,
        "name": "Nishant the Great",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_nishant_the_great",
        "monster_origin": "blossom",
        "description": "General Nishant has finally put his massive collection of relics and dead things to good use. He\u2019s enlisted Dr. Viktor and forced him to mix his Cells with Xiron's Essence so that he can become a renewed, stronger monster who can lead a revolution. Meet Nishant the Great!",
        "books": [
            3,
            2,
            105,
            108,
            131
        ]
    },
    {
        "id": 2952,
        "name": "Vadamelter",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_vadamelter",
        "monster_origin": "blossom",
        "description": "Nishant has found a way to convince the monsters of the Fiery Forces into thinking that their powers are in danger because of Nature\u2019s new position in the Blossom Era. But he hasn\u2019t just persuaded them into fighting with him, he\u2019s also transformed one of their flagship monsters: Vadamagma!",
        "books": [
            5,
            104,
            11,
            108,
            133
        ]
    },
    {
        "id": 2953,
        "name": "Murk",
        "attributes": [
            "d",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_murk",
        "monster_origin": "blossom",
        "description": "Murk lost a battle and spent hundreds of years trapped behind ice as a result. When Vadamelter and the other volcanoes intensified their activity, he was able to free himself from his melting prison and roam the realms again.",
        "books": [
            8,
            105,
            108,
            4
        ]
    },
    {
        "id": 2954,
        "name": "Magmor",
        "attributes": [
            "m",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_magmor",
        "monster_origin": "blossom",
        "description": "Magmor saved Kaih the Sunmelter from being buried under tons of lava through his quick wits and strong magic skills. In return, he was granted power directly from the volcanoes themselves.",
        "books": [
            20,
            104,
            10,
            108,
            133
        ]
    },
    {
        "id": 2955,
        "name": "Seashell Guard",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_seashell_guard",
        "monster_origin": "blossom",
        "description": "As a member of Queen Thalassa\u2019s most loyal regiment, Seashell Guards must spend many dangerous and difficult years training for the job. They are fierce warriors who are sworn to protect the Queen and her royal court.",
        "books": [
            10,
            108,
            4,
            13,
            154
        ]
    },
    {
        "id": 2956,
        "name": "Obsidiantes",
        "attributes": [
            "f",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_obsidiantes",
        "monster_origin": "blossom",
        "description": "Obsidiantes is a strong ally to the Fiery Forces... or so he says. He may just be benefiting from their immense power to increase the effect of his own spells and curses. He's learned to master the energy produced by obsidian rocks, which come straight from the core of Petra and are led out through its volcanoes.",
        "books": [
            2,
            104,
            11,
            108,
            31
        ]
    },
    {
        "id": 2957,
        "name": "Shadowyna",
        "attributes": [
            "d",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_shadowyna",
        "monster_origin": "blossom",
        "description": "This witch is an old friend of Nishant, who\u2019s a fan of her twisted curses. For a long time, he had tried to convince Shadowyna to join his Dark Blades, but his lack of projects or war campaigns made that proposal unattractive to her. However, Nishant is \"the Great\" now, and he's finally got Shadowyna's to accept a job as his High Counsel!",
        "books": [
            7,
            105,
            11,
            108
        ]
    },
    {
        "id": 2958,
        "name": "Roborabbit",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_light_roborabbit",
        "monster_origin": "blossom",
        "description": "Roborabbit is the former Galactic Champion of Easter Egg hunting. Now she shares the fun of egg-hunting throughout the universe, hoping other Roborabbits will join her someday.",
        "books": [
            6,
            7,
            20,
            108,
            132,
            159
        ]
    },
    {
        "id": 2959,
        "name": "Teddywave",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_teddywave",
        "monster_origin": "blossom",
        "description": "Teddywave was supposed to be a toy, but a mistake at the factory turned her into a powerful combatant instead. She\u2019s still cute, but she spends more time working with the Space Defenders than entertaining kids.",
        "books": [
            20,
            10,
            108,
            6,
            120
        ]
    },
    {
        "id": 2960,
        "name": "Steelgoroth",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_steelgoroth",
        "monster_origin": "blossom",
        "description": "Steelgoroth snatches metal from his victims and uses them to create unique pieces of custom armor. Once he builds himself a massive, impenetrable robot exoskeleton, the fun begins! For him, anyway. Not so much for the rest of us...",
        "books": [
            21,
            11,
            108,
            5
        ]
    },
    {
        "id": 2961,
        "name": "Serpentex",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_light_serpentex",
        "monster_origin": "blossom",
        "description": "Serpentex is a bounty hunter who specializes in bringing down Abominations. His unique modified laser rifle shoots venomous rounds that can incapacitate even the biggest, nastiest monsters.",
        "books": [
            11,
            1,
            108,
            6,
            119
        ]
    },
    {
        "id": 2962,
        "name": "Forge Labs",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_forge_labs",
        "monster_origin": "blossom",
        "description": "Forge Labs was created by mistake when Dr. Wattz tried to make synthetic Mythic Amber. It escaped Wattz\u2019s clutches once it realized that the not-so-good doctor wanted to use it for evil experiments.",
        "books": [
            8,
            108,
            15,
            2
        ]
    },
    {
        "id": 2963,
        "name": "King Atum",
        "attributes": [
            "e",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_king_atum",
        "monster_origin": "blossom",
        "description": "After years of division and conflict, the monsters of the Rocky Peaks have decided to summon the only leader all of them trust: General Atum. However, this time, Rock Archdruid has used his blood, naturally infused with Nectar to summon him. Therefore, General Atum is now a new supreme rocky being: King Atum!",
        "books": [
            103,
            10,
            13,
            108,
            133
        ]
    },
    {
        "id": 2964,
        "name": "Mother Talika",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_mother_talika",
        "monster_origin": "blossom",
        "description": "When Talika returned to the Forest after being kidnapped, she was welcomed in the most celebratory way: With every step she took, flowers grew under her feet, but not only flowers, also Nectar plants. She understood what the Forest wanted from her. She drank their Nectar and transformed into Mother Talika!",
        "books": [
            102,
            108,
            2,
            7
        ]
    },
    {
        "id": 2965,
        "name": "Slab",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_slab",
        "monster_origin": "blossom",
        "description": "Slab was broken off a giant ore nugget underground and brought to the surface by an earthquake. His huge metal body can take a lot of punishment, making him very popular with his teammates.",
        "books": [
            103,
            10,
            108,
            2
        ]
    },
    {
        "id": 2966,
        "name": "Tuberkhan",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_tuberkhan",
        "monster_origin": "blossom",
        "description": "Tuberkhan had lived underground his entire life and he was bored to death, but one day, as he was stretching his roots, he touched something hiding next to him under the soil. It was a Nectar plant. It was so sweet and addictive that once he'd come into contact with it, he absorbed as much of it as he could... until he transformed!",
        "books": [
            102,
            13,
            108,
            2
        ]
    },
    {
        "id": 2967,
        "name": "Brainlodon",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_brainlodon",
        "monster_origin": "blossom",
        "description": "Brainlodon is an ultradimensional Abomination who can access any and all knowledge in the universe. Besides knowing the best ways to defeat other monsters, Brainlodon can boost their allies to make them infinitely more powerful.",
        "books": [
            10,
            108,
            2,
            20,
            122
        ]
    },
    {
        "id": 2968,
        "name": "La Mamma",
        "attributes": [
            "w",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_water_la_mamma",
        "monster_origin": "blossom",
        "description": "Tough, hard-working, and faithful to her family. That's how Leonora Canine, known to her son Don Canine's friends as \"La Mamma\", wants to be known. She believes that her son can do no wrong, so you could say she's a bit self-deceiving too, but you'd never dare to say that to her face.",
        "books": [
            77,
            13,
            31,
            108,
            7,
            132
        ]
    },
    {
        "id": 2969,
        "name": "Boulderar",
        "attributes": [
            "e",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_boulderar",
        "monster_origin": "blossom",
        "description": "The Miners are fierce fighters, but when King Atum broke off a piece of himself to shape Boulderar, he had something specific in mind: He wanted a small and fast frontline warrior who could cause devastation in the battlefield before the rest of his army walked in. Needless to say, King Atum succeeded in his creation.",
        "books": [
            13,
            108,
            10,
            103,
            131
        ]
    },
    {
        "id": 2970,
        "name": "Oswald",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_oswald",
        "monster_origin": "blossom",
        "description": "Oswald used to fight with the Barbarians, but after being trapped after raiding the Forest, he was given a choice by Mother Talika: Swear to follow her and do good from then on, or death. Oswald chose to keep living.",
        "books": [
            108,
            20,
            102,
            10,
            132
        ]
    },
    {
        "id": 2971,
        "name": "Flasherion",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_flasherion",
        "monster_origin": "blossom",
        "description": "Remember Influxer, Dr. Viktor's old electrician whose terrible temper cost him his job? Well, he sort of missed the rush of being involved in the creation of monsters, so he decided to give it a go himself! Flasherion is his first solo work. He isn't exactly polished, but he's fully functional and ready to fight!",
        "books": [
            8,
            11,
            6,
            108
        ]
    },
    {
        "id": 2972,
        "name": "Shiveerie",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_shiveerie",
        "monster_origin": "blossom",
        "description": "This Abomination actually eats nightmares. When Shiveerie devours enough bad dreams, it becomes unstoppably powerful. Some space monsters wear special suits to repel its attacks, but it\u2019s never enough to really discourage Shiveerie.",
        "books": [
            21,
            108,
            2,
            11
        ]
    },
    {
        "id": 2973,
        "name": "Enhanzor",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_enhanzor",
        "monster_origin": "blossom",
        "description": "After being attacked by Shiveerie in his ship, Enhanzor sent the nightmare Abomination into the coldness of space. While he thought fast that time, there\u2019s a chance he might not be so lucky if Shiveerie returns.",
        "books": [
            21,
            6,
            108,
            11,
            131
        ]
    },
    {
        "id": 2974,
        "name": "Doni Bobes",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_doni_bobes",
        "monster_origin": "blossom",
        "description": "Meet the new number-one street fighter in Monstown! Doni Bobes has defeated all the best: El Dino Volador, Plymouth, Hardnut Gorilla,... But how does he do it? Doni Bobes\u2019 inimitable strategy is to distract his adversaries with jokes and pranks before knocking them out!",
        "books": [
            3,
            13,
            15,
            108
        ]
    },
    {
        "id": 2975,
        "name": "Epigursus",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_epigursus",
        "monster_origin": "blossom",
        "description": "Igursus didn\u2019t do anything to deserve his transformation into Epigursus. He was just lucky enough to be around when Kaih the Sunmelter rejected the Cells that Nishant the Great had sent to him. Big loss for Kaih, big win for Epigursus!",
        "books": [
            104,
            13,
            5,
            108
        ]
    },
    {
        "id": 2976,
        "name": "Master Pet",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_master_pet",
        "monster_origin": "blossom",
        "description": "Nishant created Master Pet with Dr. Viktor's help and the Cells of two monsters: Master Rat's, who he got brought in straight from the Eastern Regions, and the Cells of his own Pet, who used to be famous for his extraordinary Possession skills!",
        "books": [
            5,
            11,
            108,
            105
        ]
    },
    {
        "id": 2977,
        "name": "Volcanyx",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_volcanyx",
        "monster_origin": "blossom",
        "description": "There was a Magic phoenix who came to die inside Igursus when he knew his time had come centuries ago. Its ashes remained inside Igursus until he transformed into Epigursus. In the very moment of his transformation, he spit out a flare of pink fire and Volcanyx was born from it!",
        "books": [
            3,
            1,
            2,
            108,
            104,
            133
        ]
    },
    {
        "id": 2978,
        "name": "Nyla the Revenant",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_nyla_the_revenant",
        "monster_origin": "blossom",
        "description": "Nyla wasn\u2019t easy to create. First, Nishant had to track down Zyla the Faithful, defeat her, and steal Cells from her. Then, Dr. Viktor had to recycle a monster that was already recycled material: Nisael. Thanks to the Cells of those two monsters, Nyla the Revenant came to life!",
        "books": [
            15,
            7,
            8,
            108
        ]
    },
    {
        "id": 2979,
        "name": "Mermaid Spearband",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_mermaid_spearband",
        "monster_origin": "blossom",
        "description": "Mermaid Spearband was part of the elite Seashell Guard, but she disappeared on a mission she was carrying out for Queen Thalassa. However, years later, when everyone thought she was dead, she came back to the Water Realm, alive and having accomplished her mission! She was received with the highest honors.",
        "books": [
            4,
            13,
            7,
            108,
            154
        ]
    },
    {
        "id": 2980,
        "name": "Dunn Fatid",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_dunn_fatid",
        "monster_origin": "blossom",
        "description": "Nishant the Great couldn\u2019t resist the temptation of creating one of his experimental creatures using Cells from a Cardinal Forest monster, in this case, Fatid. To complete this recipe, Nishant threw in the Cells of a luxurious creature he\u2019d always wanted: Dunn Ra. And here\u2019s the result of the experiment: Dunn Fatid!",
        "books": [
            31,
            11,
            8,
            108,
            105
        ]
    },
    {
        "id": 2981,
        "name": "Firefool",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_firefool",
        "monster_origin": "blossom",
        "description": "Firefool was in charge of the entertainment in Barbartos Rex's banquets for a while, but the King of Hell, known for his whimsical taste, soon grew bored of him and kicked him out. Thankfully for Firefool, right at the gates of Hell, Kaih the Sunmelter saw him and thought he'd be a great addition to the Fiery Forces!",
        "books": [
            5,
            20,
            108,
            104
        ]
    },
    {
        "id": 2982,
        "name": "Hornroot",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_nature_hornroot",
        "monster_origin": "blossom",
        "description": "Although they were threatened by Abomination hunters, Mother Talika saved the last few Hornroots from extinction by infusing them with Nature powers. In turn, they use these new strengths to protect the forests, lakes, and rivers of their homeworld.",
        "books": [
            2,
            102,
            10,
            108
        ]
    },
    {
        "id": 2983,
        "name": "RAM",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_ram",
        "monster_origin": "blossom",
        "description": "RAM is an artificial intelligence being that decided to build itself a body so it could mingle with the creatures spread out across the universe. However, as it has slowly learned more about its surroundings, RAM has become predatory, and there's no going back unless someone resets its system.",
        "books": [
            6,
            10,
            108,
            2
        ]
    },
    {
        "id": 2984,
        "name": "Tentacon",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_tentacon",
        "monster_origin": "blossom",
        "description": "Lately, Abominations are moving more often and further than usual, angrily hitting the cosmic limitations that confine them in a corner of the universe for everyone else's safety. They're emanating such energy that a new one has been born from it: Its name is Tentacon and it's a creature as strange as it is dangerous.",
        "books": [
            5,
            122,
            11,
            108
        ]
    },
    {
        "id": 2985,
        "name": "Duke Shrimpwader",
        "attributes": [
            "w",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_water_duke_shrimpwader",
        "monster_origin": "blossom",
        "description": "After his family was cruelly slain by a passing troop of Abominations, Shrimpwader knew he had to fight the dark side. He took up a powerful weapon and traveled to space, where he fights for Light in honor of his family. May the (cocktail) sauce be with you!",
        "books": [
            4,
            10,
            120,
            108,
            131
        ]
    },
    {
        "id": 2986,
        "name": "Lumoona Iwa",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_lumoona_iwa",
        "monster_origin": "galactic",
        "description": "Lumoona once rescued Captain Copperbeard and gave him a new life, so when Copperbeard found Astronite, he knew that the first monster in his crew who deserved a transformation had to be her! Thanks to her new powers, Lumoona Iwa will play a role as important as ever in the crew of the Curse of the Cosmos.",
        "books": [
            7,
            119,
            2,
            130
        ]
    },
    {
        "id": 2987,
        "name": "Sam and Colby",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_sam_and_colby",
        "monster_origin": "galactic",
        "description": "When Sam and Colby decided to take on the ultimate haunted house challenge, he almost made it out successfully. Almost. Right as he was leaving the main hall, he was caught by Count Vlad himself! He transformed him into a ghost and now he's condemned to wander through the Castle for eternity.",
        "books": [
            5,
            15,
            2,
            130
        ]
    },
    {
        "id": 2988,
        "name": "Admiral Copperbeard",
        "attributes": [
            "mt",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_admiral_copperbeard",
        "monster_origin": "galactic",
        "description": "Captain Copperbeard was struggling to keep his spaceship afloat and his crew happy after years without a proper treasure. That was until he found Astronite, a new resource that not only has made him transform into Admiral Copperbeard, it is also set to make him rich because he's the only one who knows where to find it!",
        "books": [
            6,
            119,
            130,
            131
        ]
    },
    {
        "id": 2989,
        "name": "Brigadier Holter",
        "attributes": [
            "mt",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_dark_brigadier_holter",
        "monster_origin": "galactic",
        "description": "Holter has his own understanding of what a union of galactic civilizations should look like. The problem is that his vision isn't shared by the rest of the leads of these civilizations, mainly because what he speaks of as a union sounds more like an army at his mercy for most. ",
        "books": [
            6,
            121,
            130,
            131
        ]
    },
    {
        "id": 2990,
        "name": "Gleamhild",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic_light_gleamhild",
        "monster_origin": "galactic",
        "description": "Gleamhild was a prisoner at Count Vlad's castle. There, she died forgotten in a dungeon cell. You'd think that after death granted her a new freedom, she'd leave and go somewhere else, but she decided to stay inside the castle for eternity so that she could go through walls and torment the Count whenever she wanted!",
        "books": [
            8,
            2,
            130,
            53
        ]
    },
    {
        "id": 2991,
        "name": "Ravenbot",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic_thunder_ravenbot",
        "monster_origin": "galactic",
        "description": "A twisted, experimental shadow of Parrobot, Ravenbot is a vicious beast who lives for the thrill of hunting. It\u2019s a good thing it killed all its creators, or they might have made more\u2026",
        "books": [
            3,
            6,
            121,
            130
        ]
    },
    {
        "id": 2992,
        "name": "Shaolion",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic_magic_shaolion",
        "monster_origin": "galactic",
        "description": "Shaolion chose a life of monastic service, but he never felt he was making enough of a difference. With the blessings of his order, he\u2019s on a mission to eradicate evil wherever he finds it.",
        "books": [
            20,
            52,
            130,
            132
        ]
    },
    {
        "id": 2993,
        "name": "Biowormbot",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic_metal_biowormbot",
        "monster_origin": "galactic",
        "description": "This lab-made worm and robot hybrid, this biological creature that looks like a giant virus, this disgusting creation is a deadly biological weapon sailing through space freely. Its lab of origin is unknown, but as soon as the mystery is unveiled, the monster responsible for Biowormbot will face charges for releasing this danger!",
        "books": [
            31,
            121,
            11,
            130,
            6
        ]
    },
    {
        "id": 2994,
        "name": "Dabunka",
        "attributes": [
            "e",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_earth_dabunka",
        "monster_origin": "galactic",
        "description": "Globrush built Dabunka out of pieces from spaceships the Curse of the Cosmos crew had destroyed. Dabunka is a powerful fighter with an Astronite-powered cannon in his chest, but he\u2019s equally good at cooking.",
        "books": [
            119,
            130,
            131,
            6
        ]
    },
    {
        "id": 2995,
        "name": "Georgelato",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic_water_georgelato",
        "monster_origin": "galactic",
        "description": "Meet Georgelato! He's the sweetest monster inhabitant of Monstown, or so he likes to think. He's also the coolest, and that may be true... deadly cool. That's always been Georgelato's problem. He always tries to be sweet and cool, but every time he tries to do something nice for someone else, he ends up brain-freezing them.",
        "books": [
            10,
            11,
            8,
            130,
            142
        ]
    },
    {
        "id": 2996,
        "name": "Parrobot",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic_fire_parrobot",
        "monster_origin": "galactic",
        "description": "Global Tech Ltd. rarely takes requests from individuals, especially from outlaws like Admiral Copperbeard, but he asked the scientists in the company to include something very attractive in the experiment: Astronite. They couldn't say no to such a treat. Parrobot is the result of the experiment they carried out.",
        "books": [
            3,
            121,
            130,
            6
        ]
    },
    {
        "id": 2997,
        "name": "Calamitabyss",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-calamitabyss",
        "monster_origin": "galactic",
        "description": "When this crustacean was a baby, Dr. Wattz made experiments on it before discarding it, thinking that they hadn't had any effect on the creature. However, Calamitabyss grew up to become a terrible beast who now brings calamity to all abyssal creatures. He has a sixth sense, so there's no hiding from him!",
        "books": [
            4,
            8,
            2,
            130,
            155
        ]
    },
    {
        "id": 2998,
        "name": "Harpiker",
        "attributes": [
            "t",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-harpiker",
        "monster_origin": "galactic",
        "description": "\u200b\u200bThe seas of Elektra are wild. Genetically modified creatures, monsters who've coexisted with pollution for so long that they've mutated,... There\u2019s a bit of everything. Diving in those waters is a dangerous sport if you're unprepared. However, with his armor and a massive weapon, Harpiker is as far from unprepared as it gets.",
        "books": [
            20,
            10,
            130,
            13
        ]
    },
    {
        "id": 2999,
        "name": "FaZe Rug Pro",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-faze-rug-pro",
        "monster_origin": "galactic",
        "description": "Faze Rug managed to separate his body from his car, but a freak accident turned his hands into flaming weapons. However, the new and improved FaZe Rug Pro finds them pretty useful in battle!",
        "books": [
            15,
            20,
            10,
            130
        ]
    },
    {
        "id": 3000,
        "name": "Commander Morgan",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-commander-morgan",
        "monster_origin": "galactic",
        "description": "Privateer Morgan loved power. It was the reason he joined the Space Defenders, because he wanted to be the arm of the law! It was this thirst for power that made him take the only piece of Astronite that the Space Defenders had in their reserve to use on himself, thus becoming commander Morgan.",
        "books": [
            120,
            6,
            13,
            130
        ]
    },
    {
        "id": 3001,
        "name": "Clawgore",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-clawgore",
        "monster_origin": "galactic",
        "description": "Clawgore was a microorganism unlikely to thrive in the harsh conditions of the Void of Abominations until the Curse of the Cosmos flew in, dumping all the Astronite it was carrying and showering Clawgore with it. He transformed from an insignificant specimen into everything the entire galaxy should be afraid of.",
        "books": [
            21,
            11,
            122,
            130
        ]
    },
    {
        "id": 3002,
        "name": "Ambisonic",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-ambisonic",
        "monster_origin": "galactic",
        "description": "Ambisonic is Global Tech\u2019s newest and greatest sonic crowd control solution. Order yours today! (Legal Notice: Global Tech is not responsible for any accidental death, injury, deafening, or terrifying bleeding from the ears that may result from using Ambisonic units.)",
        "books": [
            120,
            6,
            130,
            10
        ]
    },
    {
        "id": 3003,
        "name": "Gafuhlz",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-gafuhlz",
        "monster_origin": "galactic",
        "description": "The Abomination named Gafuhlz has see-through patches of skin all over its body, along with a terrifying collection of eyes. Even the bravest monsters feel sick at the sight of this creature\u2014and they definitely should.",
        "books": [
            1,
            122,
            130,
            3
        ]
    },
    {
        "id": 3004,
        "name": "Brother Tiberius",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-light-brother-tiberius",
        "monster_origin": "galactic",
        "description": "This representative of the Celestial Paradise was sent to the Light Kingdom to supervise Lady Solaris and Inquisitor Fulmen, whose relationship with King Daeron had grown sour over the years. Upon his arrival, not only did he smooth things out between the Angels and King Daeron, but also proved himself useful at setting up the defenses of the Kingdom.",
        "books": [
            62,
            13,
            130,
            10
        ]
    },
    {
        "id": 3005,
        "name": "Psykaos",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-psykaos",
        "monster_origin": "galactic",
        "description": "Psykaos travels between timeline anomalies and portals, spreading chaos wherever it goes. As far as anyone can tell, its only goal is to enjoy the vicious spectacles its interference creates.",
        "books": [
            31,
            8,
            122,
            130
        ]
    },
    {
        "id": 3006,
        "name": "K911",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-k911",
        "monster_origin": "galactic",
        "description": "Not all Space Defenders are heartless and thirsty for power like Commander Morgan. There are galactic servants like K911 who are well liked, loved even. K911 is known for his good service to the galaxy. Whenever a meteor leaves fire behind it or there's a crash, K911 comes to save the monsters near the accident from damage.",
        "books": [
            120,
            132,
            6,
            130
        ]
    },
    {
        "id": 3007,
        "name": "Fropsi",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-popsi",
        "monster_origin": "galactic",
        "description": "Fropsi was born when Georgelato accidentally left part of himself behind in an old freezer. But he\u2019s more than a drip off the old cone\u2014Fropsi is armed with ice-pop sticks, and he definitely knows how to use \u2018em!",
        "books": [
            8,
            130,
            10,
            11,
            142
        ]
    },
    {
        "id": 3008,
        "name": "Kenecro",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-kenecro",
        "monster_origin": "galactic",
        "description": "Kenecro betrayed Yaoguai Wangzhou, selling his secrets to mercenaries, and when the Dark Emperor found out, he cursed him to burn for eternity. The fire burning inside him hasn't killed him, but it gives him a pain that he can only release when he fights. ",
        "books": [
            15,
            131,
            130,
            61
        ]
    },
    {
        "id": 3009,
        "name": "Goliathess",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-goliathess",
        "monster_origin": "galactic",
        "description": "Goliathess wasn't a Barbarian originally, but one day, she camped amongst the Barbarians and they were so scared of her that they didn't dare to tell her that she needed to work like the rest of the tribe, so they cater to her requests (or grunts they've learned to interpret), hoping that if they ever go to war, she'll take their side.",
        "books": [
            92,
            13,
            130,
            11
        ]
    },
    {
        "id": 3010,
        "name": "Dracbite",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-dracbite",
        "monster_origin": "galactic",
        "description": "Darmith Khan's leadership is constantly under question, and the law of the strongest prevails. In this environment, a new Barbarian superstar has risen. Called Dracbite, he made his name by slaying dragons in the Northlands. He wears the skin of his victims as a cloak, which confers him protection and extra powers.",
        "books": [
            1,
            20,
            131,
            130
        ]
    },
    {
        "id": 3011,
        "name": "Dhar Mann",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-dhar-mann",
        "monster_origin": "galactic",
        "description": "When his lamp was found in the Eastern Regions a couple of years ago, Dhar Mann started serving his masters by granting wishes. However, little by little, he realized that he could make a more positive impact through stories and advice. To this day, Dhar Mann has changed hundreds of lives.",
        "books": [
            15,
            2,
            10,
            130
        ]
    },
    {
        "id": 3012,
        "name": "Ra\u2019zhul Doom",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-ra-zhul-doom",
        "monster_origin": "galactic",
        "description": "Ra'Zhul's transformation came to him unexpectedly. One minute he was summoned by Fayemalice, who said she had a mission for him, and the next minute he was cracking open an Astronite stone and becoming the single most powerful Souls Lair monster. And the mission? Who cares about the mission?",
        "books": [
            8,
            53,
            130,
            131
        ]
    },
    {
        "id": 3013,
        "name": "Empress Luthien",
        "attributes": [
            "l",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-empress-luthien",
        "monster_origin": "galactic",
        "description": "Luthien was walking around the Royal Gardens when she stumbled upon her destiny in the shape of an Astronite stone. It was wrapped in a piece of paper with a message saying she'd been chosen to lead the fight against the Abominations in Petra. Her time to step up and embrace her destiny has come!",
        "books": [
            62,
            7,
            10,
            130
        ]
    },
    {
        "id": 3014,
        "name": "The Koi Boy",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-the-koi-boy",
        "monster_origin": "galactic",
        "description": "Koi lived in a fish tank at Kihaku's house. He was so fascinated by the master's skills that, one day, he jumped out of his tank to join his practice. As Koi grew up, he learned Kihaku's combat secrets and skills too. When he was ready to fight, the master gave him his stage name, The Koi Boy, and guided his first steps as a fighter.",
        "books": [
            1,
            52,
            132,
            130
        ]
    },
    {
        "id": 3015,
        "name": "Darko",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-darko",
        "monster_origin": "galactic",
        "description": "Darko used to live in the Light Kingdom's castle's dungeons, but he was bored, so he tried to earn some attention by kidnapping Princess Bella Baal. For some reason, no one liked his little show and he was banished. Luckily, he found a new castle and a host who enjoys danger: Nishant the Great!",
        "books": [
            1,
            105,
            131,
            130
        ]
    },
    {
        "id": 3016,
        "name": "Kronobite",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-kronobite",
        "monster_origin": "galactic",
        "description": "Kronobite devours time around its opponents, leaving them disoriented. But swallowing too much of the timeline at once can be dangerous, so he\u2019s always careful not to bite off more than he can chew.",
        "books": [
            2,
            53,
            11,
            130
        ]
    },
    {
        "id": 3017,
        "name": "Heliom",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-light-heliom",
        "monster_origin": "galactic",
        "description": "All Heliom ever wanted to do was to reach the Sun. He built a pair of wings and flew out of Petra, but when gravity disappeared, he got stuck! He floated around space until he crashed into a piece of Astronite that gave him the final push to reach the sun in all its glory, approaching it with such reverence that he didn't get burnt.",
        "books": [
            62,
            10,
            130,
            20,
            31,
            160
        ]
    },
    {
        "id": 3018,
        "name": "Slothunder",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-slothunder",
        "monster_origin": "galactic",
        "description": "Slothunder prefers a methodical approach to exploration, making sure to observe every tiny detail around him. While his expeditions may take a long time, everyone always comes back alive\u2014and very well informed!",
        "books": [
            132,
            10,
            130,
            59
        ]
    },
    {
        "id": 3019,
        "name": "Robo Tito",
        "attributes": [
            "n",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-robo-tito",
        "monster_origin": "galactic",
        "description": "Robo Tito holds a unique biosphere inside of him. He wasn't safe in Elektra, so he was sent to outer space, but after some time, his battery died and his system stopped working. Robo Tito floated through space aimlessly until he collided with a piece of Astronite. Now his battery never runs dry and the biosphere he holds is as alive as ever!",
        "books": [
            20,
            6,
            10,
            130
        ]
    },
    {
        "id": 3021,
        "name": "Mikenetic",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-mikenetic",
        "monster_origin": "galactic",
        "description": "Mikenetic is highly magnetic, and that doesn't refer to its personality. Its magnets are powerful enough to tear spacecraft apart, so it\u2019s easy (but not recommended) to imagine what it can do to a Metal monster.",
        "books": [
            133,
            6,
            11,
            130
        ]
    },
    {
        "id": 3022,
        "name": "Matarragon",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-matarragon",
        "monster_origin": "galactic",
        "description": "Matarragon specializes in hunting dragons. While his attacks are breathtakingly powerful, the truly terrifying thing about Matarragon is that once he\u2019s slain his quarry, he\u2019ll harvest parts of the dragon\u2019s corpse to make his armor even heavier and more impenetrable.",
        "books": [
            1,
            11,
            130,
            131
        ]
    },
    {
        "id": 3023,
        "name": "Rick",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-pokiha",
        "monster_origin": "survivors",
        "description": "Rick is a tough and stoic leader, compassionate and ruthless in equal measure. Having traveled through a portal to this new realm, he stands ready to fight a whole new army of the walking dead. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            15,
            132,
            10
        ]
    },
    {
        "id": 3024,
        "name": "Daryl",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-wuruhi",
        "monster_origin": "survivors",
        "description": "Daryl can track an Abomination through any dimension, making him extra deadly. He has a knack for showing up where he's most needed -- no surprise, then, that Rick found him outside a portal. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            131,
            15,
            132
        ]
    },
    {
        "id": 3025,
        "name": "Michonne",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-ngeru",
        "monster_origin": "survivors",
        "description": "Michonne is a deadly warrior with a keen intellect. She joined Rick in this strange new world through the portal, and now the pair fight side-by-side as monsters against overwhelming odds. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            20,
            15,
            132
        ]
    },
    {
        "id": 3027,
        "name": "Nuke Aura",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-nuke-aura",
        "monster_origin": "galactic",
        "description": "Malfeitor transformed Dusk Aura into Nuke Aura, giving her an immense power boost, but that gift came with a mission \u2014 one so complicated that it is more a death trap than a mission. Will Nuke Aura stay loyal to Malfeitor, knowing that he's putting her at risk, or will she use her new powers to reclaim her life and freedom?",
        "books": [
            7,
            21,
            12,
            130
        ]
    },
    {
        "id": 3028,
        "name": "Boss DaRex",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-boss-darex",
        "monster_origin": "galactic",
        "description": "MC Boss had held all types of jobs \u2014 DJ, rapper, b-boy,... until he found his true passion as a radio host. In his radio show, he plays the best beats, but he's also sort of become the voice of the people. His transformation into Boss DaRex has earned him even more love and admiration from other Citizens!",
        "books": [
            20,
            10,
            130,
            1,
            142
        ]
    },
    {
        "id": 3029,
        "name": "Aderlass",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-aderlass",
        "monster_origin": "galactic",
        "description": "Aderlass absorbs the life forces of everything around it, sometimes until its soft body is completely bloated with energy. A terrifying hybrid between Abomination and a native Petra plant, it lurks underground until feeding time.",
        "books": [
            122,
            130,
            11,
            8
        ]
    },
    {
        "id": 3031,
        "name": "ZEO",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-zeo",
        "monster_origin": "galactic",
        "description": "ZEO is a cold, ruthless monster who only cares about money. Anyone who stands between him and profits will be destroyed\u2026unless they\u2019re more useful to ZEO alive. That said, death might be preferable.",
        "books": [
            77,
            11,
            131,
            130
        ]
    },
    {
        "id": 3030,
        "name": "Prospero the Great",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-prospero-the-great",
        "monster_origin": "galactic",
        "description": "Prospero the Great used magic to win big at ZEO\u2019s casino, but he got caught before he could escape with the gold. Rather than taking his money back by force, ZEO hired Prospero the Great to wipe out the competition.",
        "books": [
            77,
            11,
            131,
            130
        ]
    },
    {
        "id": 3032,
        "name": "Bo Frost",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-bo-frost",
        "monster_origin": "galactic",
        "description": "A new villain who never liked Malairion or wanted to work under his wing is taking advantage of the leader of the Supervillains to look for attention. His name is Bo Frost and he likes to create atmospheres that are unbearable to most and perfect to him. His dream? To turn Monstown into a city-size refrigerator.",
        "books": [
            9,
            133,
            31,
            21,
            130
        ]
    },
    {
        "id": 3033,
        "name": "Khrilz",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-khrilz",
        "monster_origin": "galactic",
        "description": "Khrilz isn't an Abomination, but a species of Abomination. These creatures reproduce at untraceable speed and move even faster to surround and attack their targets. Light can disorient and even eliminate them, but can Khrilz be killed faster than they can reproduce?",
        "books": [
            122,
            5,
            130,
            8
        ]
    },
    {
        "id": 3034,
        "name": "Captain Elektra",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-captain-elektra",
        "monster_origin": "galactic",
        "description": "The Superheroes in the Elektra Patrol have recruited a new member! Captain Elektra's record speaks for itself: She's helped countless Citizens in hard situations, has superior strength that allows her to bend iron beams like grass blades, and, most importantly, she's the definition of brave.",
        "books": [
            131,
            12,
            130,
            7
        ]
    },
    {
        "id": 3036,
        "name": "Zarkane",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-zarkane",
        "monster_origin": "galactic",
        "description": "\u200b\u200bZarkane was a disgraced sorcerer back in Petra, so he made an escape to Elektra looking for Malairion's mentoring on how to make big money as a supervillain, but when he arrived, Malairion had already fled Elektra with his father, so Zarkane now wanders the streets trying to make it as a villain on his own.",
        "books": [
            13,
            21,
            130,
            11
        ]
    },
    {
        "id": 3037,
        "name": "Grynde",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-grynde",
        "monster_origin": "galactic",
        "description": "Because of a witch's curse, Grynde is forever trapped inside a dense forest. The only moments of freedom he gets are when other monsters summon him to collect a bounty. Then Grynde tastes sweet liberty\u2026but never for long enough to escape.",
        "books": [
            131,
            20,
            130,
            11
        ]
    },
    {
        "id": 3038,
        "name": "Negan",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-puru",
        "monster_origin": "survivors",
        "description": "Negan's as ruthless as any Abomination, but with a much better sense of humor. You'd be surprised how much you can learn from a guy like him. And if you still don't get it, Lucille is happy to help Negan make his point. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            11,
            15,
            5,
            130
        ]
    },
    {
        "id": 3039,
        "name": "Carol",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-manu",
        "monster_origin": "survivors",
        "description": "Carol's lost loved ones again and again. But, like steel forged through fire, she's emerged from those tragedies even stronger. Carol may not want to kill, but she won't hesitate if it's necessary. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            3,
            15,
            132,
            130
        ]
    },
    {
        "id": 3040,
        "name": "Maggie",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-uwha",
        "monster_origin": "survivors",
        "description": "Resourceful and pragmatic, Maggie won\u2019t let her family's tragedy befall any other monster, if she can help it. And when push comes to shove, Maggie\u2019s more than happy to take matters into her own hands. \u00a9 2022 AMC Film Holdings LLC. All rights reserved.",
        "books": [
            7,
            15,
            132,
            130
        ]
    },
    {
        "id": 3042,
        "name": "Tyrant Skeel",
        "attributes": [
            "d",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-tyrant-skeel",
        "monster_origin": "galactic",
        "description": "The leader of the Skeels hasn't lost a shred of malice in his transformation. He's learned to play the long game to guarantee his interests and his army's. His alliance with Brigadier Holter is promising and he wouldn\u2019t want to ruin it, but his signature malice remains part of everything he does.",
        "books": [
            121,
            11,
            6,
            130
        ]
    },
    {
        "id": 3043,
        "name": "Kiridar Pilgrim",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-kiridar-pilgrim",
        "monster_origin": "galactic",
        "description": "Kiridar is known for saving animals and monsters from ill-fated planets and giving them a family in her Space Ark, but she's also known for her sense of justice. Those who are corrupt, sneaky, or unfair don't like her as much as the rest, knowing that Kiridar will call them out on their shady business!",
        "books": [
            13,
            10,
            7,
            130
        ]
    },
    {
        "id": 3044,
        "name": "Rage-To-O",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-rage-to-o",
        "monster_origin": "galactic",
        "description": "Rage-To-O grew up in captivity. He had dreamed of living in open waters his entire life but, when he escaped his aquarium, he discovered that no seas were left on his planet. All alone, he left the planet and wandered the galaxy until he found Kiridar and the monsters of her Space Ark. They instantly became his family.",
        "books": [
            13,
            131,
            6,
            130
        ]
    },
    {
        "id": 3045,
        "name": "Lord Hayman",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-lord-hayman",
        "monster_origin": "halloween_exc",
        "description": "After Hayman saved Halloween in Monstelvania, Lord Pumpseed gave him a unique Golden Pumpkin. Hayman thought of it as a trophy, but soon he noticed that it made him stronger every day. A year after receiving the Pumpkin, on the night of Halloween, his evolution reached a breaking point and he transformed into Lord Hayman!",
        "books": [
            15,
            31,
            8,
            130
        ]
    },
    {
        "id": 3046,
        "name": "Gravatron",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-gravatron",
        "monster_origin": "galactic",
        "description": "Gravatron was spun into existence by a gamma ray flare. Its body perpetually spins to produce strong gravitational forces, which it can then use to supercharge its allies.",
        "books": [
            121,
            133,
            6,
            130
        ]
    },
    {
        "id": 3047,
        "name": "Velvet Tom",
        "attributes": [
            "e",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-velvet-tom",
        "monster_origin": "galactic",
        "description": "Velvet Tom was found floating in space and nearly dead by Kiridar\u2019s Space Ark. He may look delicate, but anyone who\u2019s fought against him knows that Velvet Tom is fast, deadly, and surprisingly unbreakable.",
        "books": [
            13,
            3,
            1,
            130
        ]
    },
    {
        "id": 3048,
        "name": "Rootborg",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-rootborg",
        "monster_origin": "galactic",
        "description": "Seeds grow under all kinds of strange conditions, even during intergalactic travel. Rootborg is a heavy-hitting cyborg plant whose body is formed around high-tech weapons and armor, making it a uniquely powerful space combatant.",
        "books": [
            121,
            133,
            6,
            130
        ]
    },
    {
        "id": 3049,
        "name": "Trickytricker",
        "attributes": [
            "w",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-water-trickytricker",
        "monster_origin": "galactic",
        "description": "\u201cDid that kid just say \u2018trick or trick\u2019?\u201d you ask yourself. Or you would have, if only Trickytricker hadn't attacked before you finished that thought. This dark attacker is a quick, lethal shadow who blends in perfectly on a spooky Halloween night.",
        "books": [
            21,
            11,
            142,
            130
        ]
    },
    {
        "id": 3051,
        "name": "Dreadrock",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-dreadrok",
        "monster_origin": "galactic",
        "description": "Dreadrock snuck into Count Vlad\u2019s castle for a little tour. Unfortunately for him, Count Vlad responded by throwing Dreadrock into the ground of the castle graveyard so hard that his body fused with the tombstones and corpses. Fortunately for him, this made Dreadrock a lot stronger and harder to kill.",
        "books": [
            2,
            8,
            130,
            131
        ]
    },
    {
        "id": 3052,
        "name": "The Nefilslayer",
        "attributes": [
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-the-nefilslayer",
        "monster_origin": "galactic",
        "description": "An apocalyptic battle between monsters and demons was interrupted by the ground-shaking footsteps of a gigantic armored hunter. This mysterious titan destroyed the demons and saved monsterkind, but his quest didn\u2019t stop there. The Nefilslayer is still out there, hunting down evil wherever he can find it.",
        "books": [
            8,
            130,
            131,
            2
        ]
    },
    {
        "id": 3053,
        "name": "Preston",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-preston",
        "monster_origin": "galactic",
        "description": "Preston\u2019s on fire for friendship and justice, but he\u2019s also just plain on fire. Thankfully, he focuses that burning power solely on evildoers. It\u2019s a good thing he\u2019s committed to living the best life possible, or we\u2019d all be in a heated situation.",
        "books": [
            133,
            12,
            142,
            130,
            15
        ]
    },
    {
        "id": 3054,
        "name": "The Great Cthulhu",
        "attributes": [
            "s",
            "s"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-great-cthulhu",
        "monster_origin": "galactic",
        "description": "For the longest time, many monsters in the galaxy refused to believe that a creature as terrifying as Cthulhu was even real. However, self-deception is no longer an option, because Cthulhu has grown and been reborn as The Great Cthulhu, impossible to ignore, and out there for everyone to fear!",
        "books": [
            4,
            2,
            130,
            122
        ]
    },
    {
        "id": 3055,
        "name": "VoltaiK Redeemed",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-light-voltaik-redeemed",
        "monster_origin": "galactic",
        "description": "He's far from perfect, but what makes VoltaiK the superhero he is, is his ability to learn from his mistakes. His flirtation with the dark side is over, and he's here to redeem himself in the best way possible: By saving the entire galaxy from the terror of Abominations on his own!",
        "books": [
            120,
            10,
            12,
            130
        ]
    },
    {
        "id": 3056,
        "name": "Inmunoid",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-inmunoid",
        "monster_origin": "galactic",
        "description": "Inmunoid was part of a warlord\u2019s drone security fleet when he became separated from his ship. The signal giving him his orders faded away, and Inmunoid was finally able to make his own decisions. His choice? To help others instead of harming them.",
        "books": [
            120,
            6,
            131,
            130
        ]
    },
    {
        "id": 3057,
        "name": "Obliterion",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-obliterion",
        "monster_origin": "galactic",
        "description": "Obliterion is the latest product from Global Mech Ltd.! Your dream of wreaking destruction while living a life of luxury finally comes true with this single piece of high-end weaponry. Remember, all sales are final.",
        "books": [
            20,
            6,
            2,
            130
        ]
    },
    {
        "id": 3058,
        "name": "Uksagon",
        "attributes": [
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-uksagon",
        "monster_origin": "galactic",
        "description": "Uksagon is more like a torture device than a monster, able to stun others by burning the air around them and making them gasp for breath. But don\u2019t think a breathing device will save you\u2014Uksagon loves a good fight, too.",
        "books": [
            122,
            5,
            11,
            130
        ]
    },
    {
        "id": 3059,
        "name": "Titanbolt",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-titanbolt",
        "monster_origin": "galactic",
        "description": "Bolt was fed up with bigger, stronger monsters kicking him around just because he was smart and weak. Building a mech to fight in seemed like the perfect solution, so Bolt created an amazing mobile battle suit, which he called Titan. Together they are Titanbolt, the massive bulwark warrior!",
        "books": [
            120,
            31,
            6,
            130
        ]
    },
    {
        "id": 3060,
        "name": "Grooklax",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-grooklax",
        "monster_origin": "galactic",
        "description": "Shrouded in blue and purple flame, Grooklax is a creature who loves a good curse. Her favorite? Torching the very souls of her victims with psychic flames. What she likes even more than burning their souls, though, is the deliciously vacant look in their eyes as their spirits die.",
        "books": [
            11,
            2,
            130,
            122
        ]
    },
    {
        "id": 3061,
        "name": "Grateful Ted",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-light-grateful-ted",
        "monster_origin": "galactic",
        "description": "When Grateful Ted\u2019s planet was attacked by deserters from the Skeel Army, he didn\u2019t fight back with violence. Instead, he used his wits to trick the raiders into leaving his planet in search of a (fictional) richer and more abundant one. In honor of his quick wits, the monsters on Grateful Ted\u2019s home planet hold a yearly feast to celebrate how Ted saved their entire species.",
        "books": [
            3,
            10,
            130,
            6,
            159
        ]
    },
    {
        "id": 3093,
        "name": "Robur Oldenshield",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 7,
        "img_name": "ancestor-nature-robur-oldenshield",
        "monster_origin": "ancestor",
        "description": "Robur seeded the foundations of the Cardinal Forest. However, the conflict between Pure Gaia and Wicked Gaia made him sick with blight, and he left to avoid infecting the forest. Only peace between the two sides of the forest could bring Robur back, and thanks to Zahra and Anwrikah, peace has finally arrived and cured Robur.",
        "books": [
            102,
            133,
            152,
            131
        ]
    },
    {
        "id": 3063,
        "name": "Urchinion",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-water-urchinion",
        "monster_origin": "galactic",
        "description": "Urchinions come from a very cold part of the ocean, where it\u2019s difficult to thrive. Queen Thalassa took pity on them and offered them a good deal: join her army as an honored fighter, or move to a new protected spot to rebuild society. The Urchinions who remained in the palace are deeply devoted to their Queen, and will fight for her until their deaths.",
        "books": [
            9,
            4,
            5,
            130,
            154
        ]
    },
    {
        "id": 3064,
        "name": "Klawax",
        "attributes": [
            "f",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-klawax",
        "monster_origin": "galactic",
        "description": "Klawax\u2019s father was also a bounty hunter, and he always cautioned his son that chasing glory leads to disaster. But Klawax is out to become the most fearsome hunter in the galaxy, and nothing\u2019s going to stop him in his pursuit of fame! Well, except maybe a rival hunter\u2026",
        "books": [
            131,
            130,
            13,
            132
        ]
    },
    {
        "id": 3065,
        "name": "Dvice 22",
        "attributes": [
            "t",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-dvice-22",
        "monster_origin": "galactic",
        "description": "Most users give the Dvice 22 ten out of ten! And that\u2019s because it\u2019s a cutting-edge piece of technology with a gorgeous, luxurious design. Not because everyone\u2019s afraid of its unpredictable bolts of lightning and they don\u2019t want to make it angrier! Nope. Definitely not that.",
        "books": [
            6,
            2,
            130,
            15
        ]
    },
    {
        "id": 3066,
        "name": "Duke of the Atlantis",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-water-duke-of-atlantis",
        "monster_origin": "abyssal",
        "description": "Lord of Atlantis was devastated to be the one to find that the Corallia, the Water Realm's biggest treasure, had disappeared. He only found some tiny tentacles of it that had been left behind and, by accident, he transformed into Duke of Atlantis. He's vowed to find the culprit behind the disappearance!",
        "books": [
            131,
            13,
            152,
            154
        ]
    },
    {
        "id": 3067,
        "name": "Dhar Mann Santa",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-dhar-mann-santa",
        "monster_origin": "abyssal",
        "description": "Dhar Mann Santa\u2019s making a list and checking it twice, but not to say whether monsters are naughty or nice! Instead, he\u2019s using his \u201cnaughty list\u201d to see which monsters need to learn some important life lessons before he can give them holiday gifts.",
        "books": [
            10,
            2,
            15,
            152,
            159
        ]
    },
    {
        "id": 3068,
        "name": "Mighty Thetys",
        "attributes": [
            "w",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-water-mighty-thetys",
        "monster_origin": "abyssal",
        "description": "Thetys waited many years to become Queen of the Water Realm, but her mother Thalassa never trusted her with the Throne, so she got impatient: She stole Corallia, the ocean's most precious resource, used it to power up, and made an alliance with Yaoguai Wangzhou, Emperor of the Eastern Regions. If she couldn't be Queen, she'd be Empress.",
        "books": [
            7,
            13,
            152,
            155
        ]
    },
    {
        "id": 3069,
        "name": "Pig-Kin",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-pig-kin",
        "monster_origin": "abyssal",
        "description": "Pig-kin is probably Yaoguai Wangzhou's favorite personal guard. He's not the strongest or the smartest, but he has an empty look in his eye. He's cold and initially, he wasn't even interested in joining the guard, which only made Wangzhou more interested. It took big riches but in the end, Wangzhou persuaded him.",
        "books": [
            61,
            131,
            132,
            152
        ]
    },
    {
        "id": 3070,
        "name": "Azajinn",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-azajinn",
        "monster_origin": "abyssal",
        "description": "Azajinn nearly destroyed Warmaster Sherezar in hand-to-hand combat, but the Warmaster managed to (accidentally) imprison him in a snack container and put the genie under his control. Since then, Azajinn has been obligated to serve the Magic Council, fighting at their side whenever summoned.",
        "books": [
            91,
            133,
            2,
            152
        ]
    },
    {
        "id": 3071,
        "name": "Griffania Ironwings",
        "attributes": [
            "l",
            "mt"
        ],
        "rarity": 7,
        "img_name": "ancestor-light-griffania-ironwings",
        "monster_origin": "ancestor",
        "description": "Griffania Ironwings was King Yerex's loyal friend when he founded the Light Kingdom. Their battles together are history and became the roots of what the Light Court is today. After Yerex's death at an old age, Griffania vowed to remain his kingdom's eternal protector, available to any true ruler who would need her help.",
        "books": [
            62,
            3,
            10,
            152
        ]
    },
    {
        "id": 3072,
        "name": "Clara Claus",
        "attributes": [
            "f",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-clara-claus",
        "monster_origin": "abyssal",
        "description": "Clara Claus is one jolly little elf\u2014until one of her holiday guests commits a faux pas. Step out of line one time, and you\u2019ll feel the chilling winds of winter blowing down your spine. A cold, wintry doom\u2026that\u2019s one \u201cgift\u201d you\u2019ll never be able to return for store credit.",
        "books": [
            9,
            20,
            7,
            152,
            159
        ]
    },
    {
        "id": 3073,
        "name": "Piranhiac",
        "attributes": [
            "w",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-water-piranhiac",
        "monster_origin": "abyssal",
        "description": "Piranhiac is a punk who sneers at the status quo. He may live in a society, but he doesn't have to like it! And that\u2019s one reason he\u2019s throwing his support behind Mighty Thetys. The other reason? He just likes to cause trouble.",
        "books": [
            4,
            132,
            152,
            155
        ]
    },
    {
        "id": 3074,
        "name": "Raitosama",
        "attributes": [
            "l",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-light-raitosama",
        "monster_origin": "abyssal",
        "description": "Raitosama\u2019s been working with Pig-kin for years, and they\u2019ve gotten each other out of (and into) some pretty crazy situations. It\u2019s been a very profitable partnership so far. But following his buddy into the service of Yaoguai Wangzhou just might be the most lucrative scheme Raitosama\u2019s ever cooked up\u2026",
        "books": [
            61,
            11,
            2,
            152
        ]
    },
    {
        "id": 3075,
        "name": "Korol",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-korol",
        "monster_origin": "abyssal",
        "description": "With his rocklike shell and seaweed-shaped sensory organs, Korol has the perfect physique\u2026for battlefield espionage, that is. Once Mighty Thetys saw his skill at camouflaging himself and launching surprise attacks, she knew she had to make Korol part of her army.",
        "books": [
            8,
            131,
            152,
            155
        ]
    },
    {
        "id": 3076,
        "name": "Jingle Hells",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-jingle-hells",
        "monster_origin": "abyssal",
        "description": "\u2018Twas the night before Christmas, and all monsters know\nThat Jingle Hells lurks right outside in the snow.\nHe\u2019s not very jolly and tends to be mean\u2014\nAnd he can\u2019t wait to hear all your holiday screams\u2026",
        "books": [
            9,
            104,
            6,
            152,
            159
        ]
    },
    {
        "id": 3077,
        "name": "Lloronion",
        "attributes": [
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-lloronion",
        "monster_origin": "abyssal",
        "description": "Don\u2019t be fooled by Lloronion\u2019s tears\u2014this sad-looking monster isn\u2019t crying at all. His \u201ctears\u201d are actually made of powerful neurotoxins. Once another monster inhales the fumes, they\u2019re down for the count, and all they can do is watch as Lloronion begins to feast. Now that\u2019s something to cry about\u2026",
        "books": [
            121,
            20,
            152,
            11
        ]
    },
    {
        "id": 3078,
        "name": "Mouserk",
        "attributes": [
            "m",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-mouserk",
        "monster_origin": "abyssal",
        "description": "Mouserk is a mercenary, but he\u2019s picky about which jobs he accepts. Unless he can take one of the galaxy\u2019s finest pleasure vessels to the location, he\u2019s not interested. And he\u2019s not planning to pay for that luxury cruise, either\u2014this monster is a professional stowaway.",
        "books": [
            119,
            131,
            132,
            152
        ]
    },
    {
        "id": 3079,
        "name": "CoryxKenshin",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-water-coryxkenshin",
        "monster_origin": "abyssal",
        "description": "CoryxKenshin has the noble bearing of a legendary samurai, a savage companion, and the ability to withstand any terrifying experience and come out with a smile on his face! But despite these impressive credentials, he\u2019s a pretty nice guy. Unless you\u2019re standing in the way of justice, of course\u2014in which case, CoryxKenshin will put you in your place.",
        "books": [
            20,
            15,
            152,
            131
        ]
    },
    {
        "id": 3080,
        "name": "Rebel Frosilka",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-water-rebel-frosilka",
        "monster_origin": "abyssal",
        "description": "Frosilka\u2019s rebellious nature has led to a lot of changes in her life. For one thing, she\u2019s left the Water Realm to join Mighty Thetys in the Eastern Regions. For another, she\u2019s been exposed to Corallia, making her even harder to kill. But her revolutionary spirit hasn\u2019t changed at all\u2014that burns as strongly as it always has.",
        "books": [
            21,
            13,
            155,
            152
        ]
    },
    {
        "id": 3081,
        "name": "King Daeron II",
        "attributes": [
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-light-king-daeron-ii",
        "monster_origin": "abyssal",
        "description": "Daeron II, son of Helmut IV, and grandson of Lieron III, carrier of royal blood from the lineage of Yerex, knows that the time has come for him to transform into the best version of himself. After summoning Griffania Ironwings, the Ancestor of his Righteous Court, he's been overcome by a wave of clarity and wisdom that shall lead the Light Kingdom to victory.",
        "books": [
            62,
            10,
            152,
            131
        ]
    },
    {
        "id": 3082,
        "name": "Alchemystic",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-alchemystic",
        "monster_origin": "abyssal",
        "description": "Alchemystic has a dark secret. In fact, he has almost a thousand locked away in the subterranean dungeons of his lair. One day, all his test subjects will break free and take their revenge for Alchemystic\u2019s sick experiments, and he\u2019ll need more than some potions to survive that battle.",
        "books": [
            152,
            131,
            62,
            10
        ]
    },
    {
        "id": 3083,
        "name": "Theton Tideborn",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 7,
        "img_name": "ancestor-water-theton-tideborn",
        "monster_origin": "ancestor",
        "description": "Theton Tideborn first founded the Water Realm in what used to be the sunken city of Atlantis. He helped the sunken citizens to survive in the water and was adored by all of them. Even after abdicating in favor of his daughter Thenia, he promised to always remain available for the Realm. Now, they need him back!",
        "books": [
            13,
            154,
            152,
            131
        ]
    },
    {
        "id": 3084,
        "name": "Gaspagore",
        "attributes": [
            "m",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-gaspagore",
        "monster_origin": "abyssal",
        "description": "Gaspagore tried to single-handedly conquer the Light Kingdom by using some magic incense given to him by a mysterious and spooky advisor. This went about as well as you might expect, and now all Gaspagore has to show for his troubles is a permanently purple sneer.",
        "books": [
            9,
            91,
            13,
            152,
            159
        ]
    },
    {
        "id": 3085,
        "name": "Turtle Murtle",
        "attributes": [
            "e",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-turtle-murtle",
        "monster_origin": "abyssal",
        "description": "This crusty old turtle has been unhappy with Thalassa\u2019s leadership since the beginning. No matter how long or loudly he complains, Turtle Murtle\u2019s many (highly important) demands go unfulfilled by the Queen. Will throwing his allegiance to the Sea Rebels finally convince those darn kids to stay off his seaweedy lawn? That remains to be seen.",
        "books": [
            155,
            11,
            4,
            152
        ]
    },
    {
        "id": 3086,
        "name": "Sir Weosule",
        "attributes": [
            "mt",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-sir-weosule",
        "monster_origin": "abyssal",
        "description": "Squire Weosule was accompanying his lord, King Charmless, on a pleasant walk one day when they stumbled across Griffania Ironwings caught in a dark magic trap. Although they were unarmed, Weosule managed to use his wits to outsmart Griffania\u2019s would-be kidnappers and help the Ancestor fly free. In exchange for his service, King Daeron made Weosule a noble knight.",
        "books": [
            132,
            152,
            131,
            62
        ]
    },
    {
        "id": 3087,
        "name": "Zerozone",
        "attributes": [
            "d",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-zerozone",
        "monster_origin": "abyssal",
        "description": "Zerozone isn\u2019t a deep thinker, let alone political. So when Rebel Frosilka decided to recruit him into Mighty Thetys\u2019s army, it didn\u2019t take much convincing. All she had to do was assure Zerozone that he could have all the shrimp he wanted if he joined the Sea Rebels, and he couldn\u2019t wait to sign up!",
        "books": [
            155,
            152,
            4,
            132
        ]
    },
    {
        "id": 3088,
        "name": "Skydkold",
        "attributes": [
            "w",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-light-skydkold",
        "monster_origin": "abyssal",
        "description": "Skydkold\u2019s ice shield, Froskold, is a family heirloom. Where he comes from, all would-be warriors must survive being tied up and sent out into the deepest seas on their family\u2019s shield. Honor and glory await those who make it back home, whereas those who never return cast shame on their families.",
        "books": [
            9,
            154,
            152,
            131
        ]
    },
    {
        "id": 3090,
        "name": "Blackbarry",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-blackbarry",
        "monster_origin": "abyssal",
        "description": "Blackbarry was originally designed to help replant the trees and forests in Monstown. However, the Skeels stole it when they came to pick up Monstown\u2019s transmission tower and modified it for their own evil purposes. Now Blackbarry spends its time strengthening its Skeel allies with orbs of antimatter instead of peacefully planting seeds.",
        "books": [
            6,
            11,
            152,
            121
        ]
    },
    {
        "id": 3091,
        "name": "Blaster Kong",
        "attributes": [
            "f",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-blaster-kong",
        "monster_origin": "abyssal",
        "description": "Blaster Kong is Firekong\u2019s younger (and much smaller) sibling. A talented sharpshooter, he decided to lend his skills to the Space Mercs, hoping to make a name for himself besides \u201cFirekong\u2019s little brother.\u201d So far, it\u2019s a change he\u2019s happy to have made, although he\u2019d be lying if he said he didn\u2019t miss his family.",
        "books": [
            119,
            152,
            131,
            132
        ]
    },
    {
        "id": 3094,
        "name": "Wolperdinger",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-wolperdinger",
        "monster_origin": "abyssal",
        "description": "Wolperdinger is one of Robur Oldenshield\u2019s last followers in the Cardinal Forest. The lighter foil of Roothorn, he embodies the more typically beautiful and admired aspects of Nature, but his appearance belies his true strength. While he\u2019s tried very hard to make Queen Zahra and the Pure Gaians reconcile with Wicked Gaia, it\u2019s not an easy battle. Wolperdinger just hopes he can solve this problem before he has to trade his words for actual weapons.",
        "books": [
            102,
            132,
            152,
            2
        ]
    },
    {
        "id": 3095,
        "name": "Roothorn",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-roothorn",
        "monster_origin": "abyssal",
        "description": "Roothorn is one of Robur Oldenshield\u2019s last remaining followers. He represents the aspects of Nature many find unpleasant or hard to stomach, which is one reason he decided to ally with Wicked Gaia. While he hasn\u2019t had much luck convincing Anwrikah and the \u201cdark side\u201d of the forest to ally with Pure Gaia, he hasn\u2019t given up yet. Failure is truly not an option.",
        "books": [
            102,
            131,
            152,
            2
        ]
    },
    {
        "id": 3096,
        "name": "Deepdoom",
        "attributes": [
            "w",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-water-deepdoom",
        "monster_origin": "abyssal",
        "description": "Formerly known as Dorzorg, Deepdoom is the estranged brother of Rebel Frosilka and Korzorg. He wasn\u2019t a fan of his family\u2019s rebellious politics, so he decided to join Queen Thalassa\u2019s forces. While she was skeptical at first, he quickly proved himself loyal by defending her from one of Rebel Frosilka\u2019s surprise attacks. The Queen decided to reward him by making him part of her forces and giving him a new name, so that he could live his life free from being associated with his siblings.",
        "books": [
            1,
            154,
            152,
            131
        ]
    },
    {
        "id": 3097,
        "name": "Roareth",
        "attributes": [
            "e",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-light-roareth",
        "monster_origin": "abyssal",
        "description": "The powerful and majestic warrior called Roareth is a longtime ally of Queen Basthet and, some say, even a former paramour. Roareth prefers adventuring in the desert to boring palace life, but he never strays too far from Queen Basthet\u2019s court, devoted as he is to his friend and sovereign.",
        "books": [
            13,
            132,
            152,
            160
        ]
    },
    {
        "id": 3098,
        "name": "Lovestruck",
        "attributes": [
            "f",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-lovestruck",
        "monster_origin": "abyssal",
        "description": "Despite his appearance, Lovestruck has no heart whatsoever. Formerly an angelic being, he was stripped of his powers and thrown out of the heavens because of his nasty habit of trolling people. It\u2019s not very angelic to force monsters to fall in love against their will, after all! But while Lovestruck may have been banished, he doesn\u2019t care\u2014now he has all the time in the world to play his nasty tricks, and no one trying to rein him in.",
        "books": [
            3,
            11,
            152,
            159
        ]
    },
    {
        "id": 3099,
        "name": "Surgenia",
        "attributes": [
            "t",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-surgenia",
        "monster_origin": "abyssal",
        "description": "Surgenia and Admiral Copperbeard met by accident in the dangerous Tri-Cluster Region, an area of space swarming with pirates. Together, they \u201cliberated\u201d a rare relic and flew away in the Curse of the Cosmos, cementing their (slightly criminal) love for each other. It may not be everyone\u2019s idea of a dream date, but for two spacefaring robo-pirates, it was the perfect meet-cute.",
        "books": [
            119,
            7,
            6,
            152
        ]
    },
    {
        "id": 3100,
        "name": "Akithron",
        "attributes": [
            "l",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-light-akithron",
        "monster_origin": "abyssal",
        "description": "Who\u2019s a good boy? It\u2019s Akithron! Oh, yes it is! Akithron was given to Bella Baal as a present. However, every time she transformed into a lion, it set off his attack protocol. King Daeron insisted that Akithron be reprogrammed so that he could never possibly hurt Bella Baal (or anyone else) again.",
        "books": [
            6,
            62,
            132,
            152
        ]
    },
    {
        "id": 3101,
        "name": "Owlinia",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-owlinia",
        "monster_origin": "abyssal",
        "description": "The history of Griffania Ironwings made a huge impression on a young Owlinia. When she grew up, she devoted her time to studying the Ancestors. King Daeron II needed Owlinia\u2019s expertise after summoning Griffania, so he offered her an amazing job: to act as Griffania\u2019s official liaison!",
        "books": [
            62,
            10,
            152,
            132
        ]
    },
    {
        "id": 3102,
        "name": "Eternal Basthet",
        "attributes": [
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-eternal-basthet",
        "monster_origin": "abyssal",
        "description": "Once a legendary battle champion, Basthet was chosen to become Queen of the Free Reigns and open their region to the rest of Petra. Her time on the throne had been peaceful until Yaoguai Wangzhou, Emperor of the Eastern Regions, attacked her land. She realized it was time to dust off her battle skills and evolve into Eternal Basthet! ",
        "books": [
            13,
            132,
            160,
            152
        ]
    },
    {
        "id": 3103,
        "name": "Hellmut Hoyt",
        "attributes": [
            "m",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-hellmut-hoyt",
        "monster_origin": "abyssal",
        "description": "Hellmut Hoyt was sent by the Magic Council to investigate reports that Alchemystic was doing something terrible. Ever since he returned, Hoyt\u2019s found it difficult to talk about what he saw there. Mostly because he seems to be under a spell that forces him to keep secrets\u2026but why?",
        "books": [
            91,
            10,
            152,
            20
        ]
    },
    {
        "id": 3104,
        "name": "Lyza",
        "attributes": [
            "n",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-lyza",
        "monster_origin": "abyssal",
        "description": "Lyza\u2019s the leader of Petra\u2019s most notorious gang of female barbarians. She loves fighting, but it\u2019s plunder she\u2019s most interested in. Knowing this, Yaoguai Wangzhou made her a demon of a deal: Fight with him, and be showered in gold and Corallia. Lyza didn\u2019t hesitate to accept.",
        "books": [
            92,
            1,
            131,
            152
        ]
    },
    {
        "id": 3105,
        "name": "Fangoriak",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-fangoriak",
        "monster_origin": "abyssal",
        "description": "Fangoriak was one of Fayemalice\u2019s precious pets and an ordinary zombie tiger until, for political reasons, she fed him Corallia. He suddenly grew four times bigger, making him large enough for Fayemalice to ride. This delighted her so much that she agreed to an alliance with Yaoguai Wangzhou, who\u2019d offered the Corallia as a bribe.",
        "books": [
            53,
            5,
            8,
            152
        ]
    },
    {
        "id": 3106,
        "name": "Pyrolektrica",
        "attributes": [
            "f",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-pyrolektrica",
        "monster_origin": "abyssal",
        "description": "When Elektra\u2019s citizens went into lockdown during a toxic sunlight event, Pyrolektrica\u2019s medical skills were more in demand than ever, so she kept visiting patients at great danger to herself. But instead of getting sick from sun exposure, Pyrolektrica gained incredible strength and new powers, leading her to join Elektra Patrol!",
        "books": [
            12,
            7,
            152,
            75
        ]
    },
    {
        "id": 3107,
        "name": "Hurtnivore",
        "attributes": [
            "mt",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-hurtnivore",
        "monster_origin": "abyssal",
        "description": "While many people would love Hurtnivore to join their crews (or gangs), he\u2019s always turned them down. Hurtnivore doesn\u2019t want to make friends; he wants to hunt! His insistence on solo stalking has led to some unsavory cannibalism rumors, but Hurtnivore just lets people talk. After all, a scary reputation is a big help in his line of work.",
        "books": [
            11,
            121,
            131,
            152
        ]
    },
    {
        "id": 3108,
        "name": "Kongrus",
        "attributes": [
            "w",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-water-kongrus",
        "monster_origin": "abyssal",
        "description": "Kongrus started life in the Water Realms\u2019 most impoverished community. While Theton Tideborn took Kongrus under his wing long ago and made him a member of the Sea Old Guard, Kongrus still prefers patrolling in that area. He\u2019s doing what he can to make his hometown safer\u2014plus, he just loves arresting bad guys.",
        "books": [
            154,
            4,
            131,
            152
        ]
    },
    {
        "id": 3109,
        "name": "Queen Thalassa",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-queen-thalassa",
        "monster_origin": "abyssal",
        "description": "Queen Thalassa has had to dust off her Warmaster skills. The things a mother does to get her daughter back under her wing! She's ready to share the throne with her daughter, Mighty Thetys, but for that to happen, she'll have to teach her a lesson first. The lesson being: \"Who's the Queen here?\"",
        "books": [
            154,
            4,
            152,
            13
        ]
    },
    {
        "id": 3110,
        "name": "Princess Baal",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-light-princess-baal",
        "monster_origin": "abyssal",
        "description": "Most members of Daeron and Luthien\u2019s court are experienced combatants with hundreds of battles behind them, but Bella Baal isn\u2019t one of them. To her mind, that\u2019s a problem: How can she rule well, especially in times of war, if she hasn\u2019t experienced it herself? Looks like the time has come for that to change!",
        "books": [
            7,
            62,
            132,
            152
        ]
    },
    {
        "id": 3111,
        "name": "Ghoulossus",
        "attributes": [
            "d",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-ghoulossus",
        "monster_origin": "abyssal",
        "description": "Fayemalice recruited Ghoulossus because of the huge, glowing portal in the center of his body. Believing she could contact Lord Nebotus through it, Fayemalice spent an embarrassingly long time yelling into Ghoulossus\u2019s gut before she finally realized it didn\u2019t work that way. Now she\u2019s stuck with the big lummox\u2026",
        "books": [
            53,
            5,
            8,
            152
        ]
    },
    {
        "id": 3112,
        "name": "Bolskudon",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-bolskudon",
        "monster_origin": "abyssal",
        "description": "It\u2019s hard for Bolskudon to make friends. First of all, he\u2019s completely unpredictable; no one can trust him. Second, whenever someone tells Bolskudon that, he expresses his disagreement by frying them with lightning. Maybe that\u2019s why this powerful druid has never found a tribe to call his own\u2026",
        "books": [
            92,
            1,
            131,
            152
        ]
    },
    {
        "id": 3113,
        "name": "Prulka",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-prulka",
        "monster_origin": "abyssal",
        "description": "Prulka\u2019s guitar is the source of her power, and she didn\u2019t come by it honestly. Whispers speak of a dark crossroads, and a cloven-hooved trickster, and promises made. But when asked about the rumors, Prulka just snickers and turn up the volume, drowning out any uncomfortable questions.",
        "books": [
            92,
            7,
            131,
            152
        ]
    },
    {
        "id": 3114,
        "name": "Hysterikeaster",
        "attributes": [
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-hysterikeaster",
        "monster_origin": "abyssal",
        "description": "After falling into Warspellz\u2019s potion pot, Hysterikeaster transformed into a monster and went on a rampage. Things got so crazy, Roborabbit was called in to clean up the mess. But the Barbarians decided that a giant murderous rabbit would actually make a pretty good ally, so they decided to keep him.",
        "books": [
            131,
            159,
            132,
            152
        ]
    },
    {
        "id": 3115,
        "name": "Ion V2",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-ionv2",
        "monster_origin": "abyssal",
        "description": "ION V2 is a top-of-the-line bounty-hunting robot. A very elite unit, only one is known to exist. And that is totally because it\u2019s a very advanced robot and expensive to produce, not because it\u2019s actually a metal suit being controlled by a tiny little monster inside it. Nope, just a rumor! Don\u2019t bring it up again.",
        "books": [
            6,
            11,
            121,
            152
        ]
    },
    {
        "id": 3116,
        "name": "Wootr",
        "attributes": [
            "n",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-wootr",
        "monster_origin": "abyssal",
        "description": "Wootr is one of Robur Oldenshield\u2019s most dedicated soldiers. However, he\u2019s equally devoted to his twin, Owu Wu. Wootr is the more serious and traditional of the two siblings, and follows ancient Gaian customs most monsters have long forgotten.\n",
        "books": [
            102,
            2,
            13,
            152
        ]
    },
    {
        "id": 3117,
        "name": "Owu Wu",
        "attributes": [
            "e",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-owu-wu",
        "monster_origin": "abyssal",
        "description": "Owu Wu never took anything seriously in their life. That is, until their beloved brother Wootr was chosen to dedicate his life to serving Robur Oldenshield. There was no way Owu Wu would accept a life without Wootr by their side, so they swore fealty to Robur as well.\n",
        "books": [
            2,
            13,
            152,
            102
        ]
    },
    {
        "id": 3118,
        "name": "Tenno Kihaku",
        "attributes": [
            "w",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-water-tenno-kihaku",
        "monster_origin": "abyssal",
        "description": "During a meditation, Kihaku disconnected his soul from his body. Free to wander the universe, Kihaku spent millennia experiencing everything before returning to his body, a changed monster, one ready to lead the Honor Dojo into victory and the Eastern Regions into a new Era.",
        "books": [
            52,
            1,
            4,
            152
        ]
    },
    {
        "id": 3119,
        "name": "Zparks",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-lights-zparks",
        "monster_origin": "abyssal",
        "description": "The newest member of Elektra Patrol, Zparks can\u2019t wait to bring joy to the people of Elektra\u2026by concocting the perfect snappy catchphrase. Unfortunately, he\u2019s very much still in the testing phase, and his teammates suffer from the constant practicing. But Zparks is positive it\u2019ll pay off eventually!\n",
        "books": [
            12,
            10,
            75,
            152
        ]
    },
    {
        "id": 3120,
        "name": "Powflow",
        "attributes": [
            "n",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-powflow",
        "monster_origin": "abyssal",
        "description": "As a kid, Powflow got picked on all the time for being so small and cute. While he tried not to show that it made him angry, his rage eventually manifested itself as incredible electrical powers while fending off a bully at school. Elektra Patrol heard of this and immediately hired him as their intern.",
        "books": [
            12,
            10,
            75,
            152
        ]
    },
    {
        "id": 3121,
        "name": "Max Shroom",
        "attributes": [
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-max-shroom",
        "monster_origin": "abyssal",
        "description": "Slothunder and Max Shroom met deep underground when both were looking for an ancient lost book. Thinking Max\u2019s head was a delicious mushroom, Slothunder gave him a chomp. Despite that awkward start, they became fast friends, and Slothunder recruited Max into the Adventurer\u2019s Guild.",
        "books": [
            59,
            10,
            152,
            133
        ]
    },
    {
        "id": 3122,
        "name": "Varumamu ",
        "attributes": [
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-water-varumamu",
        "monster_origin": "abyssal",
        "description": "One very nice side effect of Varupapu getting his soul back was that he was able to fall in love for the first time. He and Varumamu had a sweet baby, named Varulinus, and settled down into familial bliss. But anyone who messes with Varumamu quickly learns that she\u2019s definitely the scariest monster in that family\u2026",
        "books": [
            10,
            4,
            13,
            152
        ]
    },
    {
        "id": 3123,
        "name": "Meleenaut",
        "attributes": [
            "t",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-meleenaut",
        "monster_origin": "abyssal",
        "description": "No one loves to fight more than Meleenaut. In fact, if you push back on that, he\u2019ll probably immediately challenge you to a fight, just to prove himself. But Meleenaut\u2019s not a bad guy, really\u2014he\u2019s just a little socially awkward (and really good at beating other monsters up.)",
        "books": [
            11,
            121,
            152,
            131
        ]
    },
    {
        "id": 3124,
        "name": "Erafaz",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-erafaz",
        "monster_origin": "alpine",
        "description": "Helgudin rescued Erafaz from an icy death when he was just a puppy. Despite that adorable beginning, her decision to train Erafaz to be the ultimate murder hound sort of sours the story. Nevertheless, it was a fantastic idea\u2014Helgudin\u2019s resulting reputation boost was invaluable.",
        "books": [
            132,
            131,
            162,
            163
        ]
    },
    {
        "id": 3125,
        "name": "Tyr Stormbringer",
        "attributes": [
            "t",
            "mt"
        ],
        "rarity": 7,
        "img_name": "ancestor-thunder-tyr-stormbringer",
        "monster_origin": "ancestor",
        "description": "Once a member of the Adventurer\u2019s Guild, Tyr set out on a fateful quest to some of the coldest and most remote lands. He became so entranced with the monsters he met there that he settled in the mountains and founded a hardscrabble, independent society. But will his Summitfolk survive an unforeseen threat?",
        "books": [
            131,
            162,
            163,
            10
        ]
    },
    {
        "id": 3126,
        "name": "Sorcerice",
        "attributes": [
            "m",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-sorcerice",
        "monster_origin": "alpine",
        "description": "A hermit with a heart as icy as her mountain home, Sorcerice is mostly known for making shady deals for her magical charms and potions. However, as the only monster to ever successfully harvest a Northberry, the other Summitfolk treat her with great respect (despite their mistrust).",
        "books": [
            11,
            162,
            163,
            7
        ]
    },
    {
        "id": 3127,
        "name": "Drakkarhed",
        "attributes": [
            "mt",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-drakkarhed",
        "monster_origin": "alpine",
        "description": "When some adventurers accidentally landed their boat on a patch of Northberries, the last thing they expected was for the ship\u2019s figurehead to come to life. What else could Northberries do, and how could monsters harvest them? They set out on an alpine adventure in search of the answer.",
        "books": [
            1,
            131,
            162,
            163
        ]
    },
    {
        "id": 3128,
        "name": "Rygolm",
        "attributes": [
            "e",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-rygolm",
        "monster_origin": "alpine",
        "description": "When Ryclops was trapped in a mountain, he spent a lot of time dreaming. Sometimes he\u2019d talk in his sleep, accidentally sharing his adventure stories with the rocks surrounding him. One rock, Rygolm, was so enchanted by the stories that Ryclops took it with him when he escaped.",
        "books": [
            103,
            2,
            133,
            163
        ]
    },
    {
        "id": 3129,
        "name": "Arachnoflam",
        "attributes": [
            "f",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-arachnoflam",
        "monster_origin": "alpine",
        "description": "Hidden in a mountain core for millions of years, the giant fossil known as Arachnoflam was suddenly exposed by a volcanic quake. Although the Adventurer\u2019s Guild, Rocky Peaks, and Fiery Pits factions all claimed ownership, they quickly surrendered their claims once Arachnoflam started moving.",
        "books": [
            103,
            5,
            132,
            163
        ]
    },
    {
        "id": 3130,
        "name": "Evileye Joe",
        "attributes": [
            "d",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-evileye-joe",
        "monster_origin": "alpine",
        "description": "The smoothest lawyer in all of Monstown, Don Canine recently put Joe on retainer, making him one of the richest as well. But Evileye Joe is haunted by something in his recent past\u2014something that Gangsterosaurus wants revenge for. Hard to enjoy living on Easy Street with that looming over you\u2026",
        "books": [
            21,
            132,
            163,
            77
        ]
    },
    {
        "id": 3131,
        "name": "Arkanite",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-arkanite",
        "monster_origin": "alpine",
        "description": "Arkanite is the Magic Council representative to be from the Rocky Peaks. He\u2019s recently returned to his homeland, albeit unhappily. Secretive and sour-tempered, he spends most of his time hiding in his tower and tending to his secret crystal garden. What? Even wizards need hobbies\u2026",
        "books": [
            103,
            131,
            133,
            163
        ]
    },
    {
        "id": 3132,
        "name": "Gloverd",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-gloverd",
        "monster_origin": "alpine",
        "description": "After his planet was destroyed by the neglect and selfishness of its own citizens, Gloverd was left spinning alone in space. Luckily, Kiridar managed to save him before he perished in the cold blackness of space. Now Gloverd is a happy Pilgrim, working to prevent similar planetary destruction from happening again.",
        "books": [
            119,
            10,
            4,
            163
        ]
    },
    {
        "id": 3133,
        "name": "Mad Country",
        "attributes": [
            "l",
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-light-mad-country",
        "monster_origin": "alpine",
        "description": "Mad Country is The BaroneX\u2019s favorite courier, mainly because he\u2019s managed to live the longest. Of course, that also means Mad Country is one ornery cuss, but that\u2019s probably for the best\u2014softhearted monsters don\u2019t last long in the Wastelands.",
        "books": [
            13,
            131,
            163,
            78
        ]
    },
    {
        "id": 3134,
        "name": "Fatal Harald",
        "attributes": [
            "n",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-fatal-harald",
        "monster_origin": "alpine",
        "description": "Fatal Harald used to retrieve supplies for the Summitfolk faction. Unfortunately, he was once caught stealing vegetables from Nishant\u2019s garden. Merciless as Lord Nishant is, he attached a cursed mark to poor Fatal Harald\u2019s face, preventing him from ever taking it off or speaking again.",
        "books": [
            162,
            163,
            10,
            132
        ]
    },
    {
        "id": 3135,
        "name": "Sygrid Spirit",
        "attributes": [
            "e",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-sygrid-spirit",
        "monster_origin": "alpine",
        "description": "Sygrid was one of Tyr Stormbringer\u2019s first followers, a powerful Valkyrie as famous for her beauty and kindness as for her battle prowess. Her restoration is foretold in the Summitfolk\u2019s ancient petroglyphs, which detail her eventual return in the more powerful form of Sygrid Spirit.",
        "books": [
            2,
            162,
            7,
            163
        ]
    },
    {
        "id": 3136,
        "name": "Olan",
        "attributes": [
            "l",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-light-olan",
        "monster_origin": "alpine",
        "description": "Olan saved Nishant the Great from a wild Abomination attack. Nishant wasn\u2019t just impressed with Olan\u2019s alacrity; he was doubly impressed by the way Olan was able to rearrange the Abomination\u2019s entrails with just a few quick flicks of his wrist\u2014definitely Dark Blades material.",
        "books": [
            105,
            131,
            10,
            163
        ]
    },
    {
        "id": 3137,
        "name": "Vosker",
        "attributes": [
            "t",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-vosker",
        "monster_origin": "alpine",
        "description": "Vosker\u2019s rare suit of armor\u2014or, possibly, his unique physiology\u2014makes him an excellent torturer. Not only is he immune to any potentially dangerous splatter, but he looks quite intimidating. Nishant the Great certainly has an eye for talent\u2026especially evil talent.",
        "books": [
            105,
            13,
            163,
            8
        ]
    },
    {
        "id": 3138,
        "name": "Learnatta",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-learnatta",
        "monster_origin": "alpine",
        "description": "Nishant the Great and Dr. Viktor wanted to make a powerful three-headed monster with strong defenses and tons of motivation, so they smashed Cells of Learnean and Ferrata together. While the resulting monster was indeed super-strong, its weird and unexpected meowing led Nishant to abandon it in the Free Reigns.",
        "books": [
            15,
            160,
            131,
            163
        ]
    },
    {
        "id": 3139,
        "name": "Konrad von Krow",
        "attributes": [
            "d",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-konrad-von-krow",
        "monster_origin": "alpine",
        "description": "Konrad von Krow, ambassador of the Dark Blades, is actually an old Monstelvania citizen. He decided to leave his home region when Count Vlad, jealous of his glamour, started expropriating his properties. However, he took all his riches with him when he left, leaving Monstelvania in an economic crisis!",
        "books": [
            105,
            13,
            163,
            8
        ]
    },
    {
        "id": 3140,
        "name": "Prismatic Pandatone",
        "attributes": [
            "l",
            "s"
        ],
        "rarity": 6,
        "img_name": "mythic-light-prismatic-pandatone",
        "monster_origin": "alpine",
        "description": "Pandatone never felt like he fit in with his family. Even his twin brother, Pandalf, had trouble understanding him. So Pandatone ran away on an amazing journey of self-discovery, which eventually led him to become Prismatic Pandatone. Now he helps others find the lost colors of their lives.",
        "books": [
            15,
            159,
            132,
            163
        ]
    },
    {
        "id": 3141,
        "name": "Bandolero",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-bandolero",
        "monster_origin": "alpine",
        "description": "Wanting to cash in on the lucrative underground robot-fighting craze, The BaroneX designed Bandolero to be the ultimate champion. His programming commands him to make every victory as messy and vicious as possible. Now that\u2019s entertainment!",
        "books": [
            78,
            163,
            131,
            11
        ]
    },
    {
        "id": 3142,
        "name": "Khalorc Rageskin",
        "attributes": [
            "e",
            "f"
        ],
        "rarity": 7,
        "img_name": "ancestor-earth-khalorc-rageskin",
        "monster_origin": "ancestor",
        "description": "Khalorc seized and held power for over a century, in a time historians call the Red Stain. Under his authority, orcs reigned supreme among the other Barbarians. Now that he\u2019s returned to a changed Petra, will orcs again claw their way to the top of the food chain? And will the other Barbarian leaders submit to him again?",
        "books": [
            11,
            163,
            92,
            13
        ]
    },
    {
        "id": 3143,
        "name": "Bruzard",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-bruzard",
        "monster_origin": "alpine",
        "description": "Bruzard spent decades as a miserable hermit, dreaming of his glory days at Khalorc Rageskin\u2019s side. However, his Ancestor\u2019s long-awaited return hasn\u2019t benefited him the way he expected it to, and Bruzard\u2019s beginning to dream of tasting power himself. Will he remain loyal? It\u2019s currently unclear\u2026",
        "books": [
            92,
            131,
            11,
            163
        ]
    },
    {
        "id": 3147,
        "name": "Mortal Ming",
        "attributes": [
            "m",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-mortal-ming",
        "monster_origin": "alpine",
        "description": "When Yaoguai Wangzhou and the Fury Dojo went into hiding after their defeat, the faction seemed doomed. But Mortal Ming devised a clever plan to spread propaganda and misinformation throughout Petra, giving Wangzhou enough time to plot his own triumphant comeback.",
        "books": [
            61,
            2,
            11,
            163
        ]
    },
    {
        "id": 3148,
        "name": "Mag Karra",
        "attributes": [
            "mt",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-mag-karra",
        "monster_origin": "alpine",
        "description": "Calida thought she could harness volcanic power to help discourage some invading Barbarians by dropping a Northberry into a lava tube. Instead, she accidentally created a horrible monster out of molten metal. Now Mag Karra has to stay one step ahead of her at all times, lest she try to \u201cerase\u201d her mistake.",
        "books": [
            104,
            8,
            163,
            5
        ]
    },
    {
        "id": 3149,
        "name": "Gremmie",
        "attributes": [
            "t"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-gremmie",
        "monster_origin": "alpine",
        "description": "One of the most laid-back monsters in Petra, Gremmie turned down an offer to work with Elektra Patrol because it would cut into his surfing. That said, he flies under the radar of most of Petra\u2019s biggest gangsters, and as such often gets bits of very helpful information to pass on to the good guys.",
        "books": [
            142,
            20,
            132,
            163
        ]
    },
    {
        "id": 3150,
        "name": "Tinytrap",
        "attributes": [
            "n",
            "w"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-tinytrap",
        "monster_origin": "alpine",
        "description": "There's a small toxic jungle in the Wastelands, but you can't visit it unless you want a fight with Tinytrap. He says that the jungle is his property, alleging that it\u2019s the only place in the Wastelands that his skin can weather, but... can't you share, Tinytrap? Plus, you don't need a gigantic scrap ax to protect your personal space!",
        "books": [
            1,
            78,
            131,
            163
        ]
    },
    {
        "id": 3151,
        "name": "Mosklin",
        "attributes": [
            "mt",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-metal-mosklin",
        "monster_origin": "alpine",
        "description": "Mosklin has a never-ending rivalry with Khalorc Rageskin\u2019s other minions, Gobzerkir and Bruzard. While he might be Khalorc\u2019s favorite scion right now, that won\u2019t save him from being ripped from power by the other two followers, so Mosklin stays constantly vigilant.",
        "books": [
            3,
            6,
            163,
            92
        ]
    },
    {
        "id": 3144,
        "name": "Gobzerkir",
        "attributes": [
            "e",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-earth-gobzerkir",
        "monster_origin": "alpine",
        "description": "Loyal and dimwitted, Gobzerkir worships Khalorc Rageskin, but can\u2019t remember exactly why. Decades spent in a haze of fog may have dulled his wits, but the reappearance of Khalorc seems to be sharpening them. If only he could figure out what happened to his memories\u2026",
        "books": [
            131,
            11,
            163,
            92
        ]
    },
    {
        "id": 3152,
        "name": "Goblarzd",
        "attributes": [
            "n",
            "m"
        ],
        "rarity": 6,
        "img_name": "mythic-nature-goblarzd",
        "monster_origin": "alpine",
        "description": "Goblarzd is Khalorc Rageskin\u2019s most beloved minion. Well, not \u201cbeloved,\u201d but he\u2019s certainly the only one of them whose opinion matters at all to Khalorc. But while Goblarzd is outwardly loyal, there\u2019s something else going on behind the scenes\u2014something Khalorc would never expect.",
        "books": [
            131,
            11,
            92,
            163
        ]
    },
    {
        "id": 3153,
        "name": "Sir Lancefloat",
        "attributes": [
            "w",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-water-sir-lancefloat",
        "monster_origin": "alpine",
        "description": "Sir Lancefloat served Queen Thalassa for many years, earning a knighthood in the process. However, he didn\u2019t enjoy court life, and asked to be released from Thalassa\u2019s service. Instead, the Queen offered something else: a chance to join the Light Kingdom and explore the world outside the oceans.",
        "books": [
            132,
            131,
            163,
            62
        ]
    },
    {
        "id": 3154,
        "name": "Dolores",
        "attributes": [
            "t",
            "l"
        ],
        "rarity": 6,
        "img_name": "mythic-thunder-dolores",
        "monster_origin": "alpine",
        "description": "Dolores was possessed by an otherworldly spirit, who showed her the hidden mysteries of the universe. This changed her so deeply that she withdrew from public life and took a vow of silence. Yet, despite this advocation, her tower rings with celestial singing every night.",
        "books": [
            62,
            10,
            13,
            163
        ]
    },
    {
        "id": 3146,
        "name": "Calida",
        "attributes": [
            "f",
            "mt"
        ],
        "rarity": 6,
        "img_name": "mythic-fire-calida",
        "monster_origin": "alpine",
        "description": "One of Mjolnir\u2019s only known living experiments, Calida was born from his Forge and was raised as his apprentice. However, her impulsive nature doesn\u2019t make her the best student. To help her focus her energy on something constructive, Mjolnir\u2019s tasked her with guarding his Forge for now.",
        "books": [
            104,
            13,
            131,
            163
        ]
    },
    {
        "id": 3155,
        "name": "Jellymer",
        "attributes": [
            "m",
            "n"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-jellymer",
        "monster_origin": "alpine",
        "description": "This jolly jelly giant is a much-beloved figure in the Magic Council and an eager student of wizardry. He\u2019s dedicated his life to protecting travelers in the region, even setting up his own patrol crew. But lately, there have been whispers that his gentle facade conceals a dastardly criminal past.",
        "books": [
            91,
            2,
            133,
            163
        ]
    },
    {
        "id": 3156,
        "name": "Magoat",
        "attributes": [
            "l",
            "e"
        ],
        "rarity": 6,
        "img_name": "mythic-light-magoat",
        "monster_origin": "alpine",
        "description": "Magoat runs a little alchemical workshop on the edge of the Light Kingdom. She\u2019s a well-liked figure in the neighborhood, due to her excellent products and friendly personality. However, she\u2019s not quite as personable towards customers who try to persuade her to use her alchemical skills for evil.",
        "books": [
            10,
            132,
            163,
            62
        ]
    },
    {
        "id": 3145,
        "name": "Albynassa",
        "attributes": [
            "l",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-light-albynassa",
        "monster_origin": "alpine",
        "description": "Albynassa is a never-ending source of social unease and madness. If it stalks near a settlement, everyone there will turn against their neighbors. Luckily for Warmaster Babari, Albynassa\u2019s sworn to help the Summitfolk\u2014although no one is sure if it\u2019ll stand by its words.",
        "books": [
            104,
            5,
            8,
            163
        ]
    },
    {
        "id": 3157,
        "name": "Madprof",
        "attributes": [
            "d",
            "f"
        ],
        "rarity": 6,
        "img_name": "mythic-dark-madprof",
        "monster_origin": "alpine",
        "description": "Madprof is the meanest, strictest teacher in the history of Monstown High. Once a monster goes into one of his detentions, they might not come out for years. Unfortunately for Robo Tito, Madprof\u2019s furious eye has landed on him, and he\u2019s finally been summoned to class. But will he ever come back out?",
        "books": [
            21,
            142,
            11,
            163
        ]
    },
    {
        "id": 3158,
        "name": "Kawborg",
        "attributes": [
            "t",
            "d"
        ],
        "rarity": 6,
        "img_name": "mythic-magic-gaspagore",
        "monster_origin": "alpine",
        "description": "",
        "books": []
    }
];

export default items;
