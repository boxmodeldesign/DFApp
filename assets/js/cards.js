var cards = [
    /*{
        name: "Card 1",
        set: "Base",
        type: "std",
        id: 0,
        flav: "Spooky italics",
        effect: [
            {
                text: "The actual effects of the card. Right now, things are fine.",
                lv: 0
            },
            {
                text: "The actual effects of the card. Right now, things are grim.",
                df: "Everyone loses a card.",
                lv: 3
            },
            {
                text: "The actual effects of the card. Beware, mortals.",
                df: "You feel bad. Nothing happens.",
                lv: 7
            }
        ]
    },*/
    {
        name: "The Know Your Weakness",
        type: "std",
        set: "Base",
        id: 1,
        flav: "It is a phantom in your mind, an image that each of you sees should you close your eyes for more than a few seconds at a time. A pair of glowing, unblinking eyes, searching and staring out from the blackness.",
        effect: [
            {
                text: "<b>Continuous:</b> Players must attempt all <b>Skill Checks</b> twice.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> Players must attempt all <b>Skill Checks</b> twice.<br />Immediately make a <b>Skill Check</b> (twice).<br /><b>Failure(s):</b> Discard a card.",
                df: "Additionally, all players immediately make a <b>Skill Check</b> (twice). <b>Failure(s):</b> Discard one card.",
                lv: 6
            },
            {
                text: "<b>Continuous:</b> Players must attempt all <b>Skill Checks</b> twice.<br />Immediately make a <b>Skill Check</b> (twice).<br /><b>Failure(s):</b> Discard a card and lose 1 HP.",
                df: "Additionally, <b>Failure(s):</b> lose 1 HP.",
                lv: 10
            }
        ]
    },
    {
        name: "Fireball",
        type: "std",
        set: "Base",
        id: 2,
        flav: "A bright streak flashes from a pointed finger. Unerring. Unstoppable. Pulsating with barely-contained power. And with a growing rair, it blossoms into an explosion of hellish flame!",
        effect: [
            {
                text: "The Arcane characters chooses a character to take 2 damage. Deal 2 consecutive levels of damage to each encounter facing that character.",
                lv: 0
            }
        ]
    },
    {
        name: "Discombobulation",
        type: "std",
        set: "Base",
        id: 3,
        flav: "In the thick of battle, when all minds are turned toward survival or escape, the trap is sprung. Disengage and swing wide. Sting, withdraw, and then form a circle again, leaving your enemies bewildered and off balance.",
        effect: [
            {
                text: "<b>Greater Dispel Magic.</b><br />All non-Location encounters must <b>Save</b>.<br /><b>Failure:</b> Players may move the encounter to face any character. (Fully resolve each <b>Save</b> before moving to the next encounter.)",
                lv: 0
            }
        ]
    },
    {
        name: "Homunculus At Play",
        type: "std",
        set: "Base",
        id: 4,
        flav: "\"Quick little buggers, skulking in the shadows. Always difficult to know if they mean to help or harm. Depends on the wizard what made 'em. Mostly I ignore 'em. Barely worth the trouble it takes to twist their little heads off.\"",
        effect: [
            {
                text: "<b>Continuous:</b> At the start of your turn, gain 1 gold and discard 1 card.",
                lv: 0
            }
        ]
    },
    {
        name: "Dangerous Waters",
        type: "std",
        set: "Base",
        id: 5,
        flav: "A trickle of putre, sweet water pools in an alabaster basin. Each ero dips in a hand and tastes its revitalizing power. Then comes that cold, sinking moment of clarity: a reminder that such seeming gifts always have a price.",
        effect: [
            {
                text: "Nothing happens.",
                lv: 0
            },
            {
                df: "Each character heals half of their total lost HP (rounded down).<br /><b>Deadfall:</b> Each character takes 3 damage.",
                lv: 1
            }
        ]
    },
    {
        name: "Dark Arts",
        type: "std",
        set: "Base",
        id: 6,
        flav: "Dark, distant chanting, as if a hundred voices sreaming miles away, walks a cold chill up your spine. The words darken your vision as your enemies rally, filled with new and terrifying purpose.",
        effect: [
            {
                text: "Each non-Humanoid, non-Location encounter heals 1 level.<br /><b>Continuous:</b> The Attack Strength of each non-Humanoid, non-Location encounter increases by 1.",
                lv: 0
            },
            {
                text: "Each non-Humanoid, non-Location encounter heals 1 level.<br /><b>Continuous:</b> The Attack Strength of all encounters in play permanently increases by 1.",
                df: "Instead, the Attack Strength of all encounters in play permanently increases by 1.",
                lv: 7
            }
        ]
    },
    {
        name: "Kill the Wizard First!",
        type: "std",
        set: "Base",
        id: 7,
        flav: "It's dangerous. The glow of magic wraps about you, and mostly it leaves a comforting warmth. Mostly. But there are days when that costs you. And there are villains who know to prey first upon those who reek of knowledge&mdash;and power.",
        effect: [
            {
                text: "Nothing happens.",
                lv: 0
            },
            {
                df: "Move all non-Location encounters to the Arcane character.",
                lv: 3
            },
            {
                text: "Fully heal all non-Location encounters and move them to the Arcane character.",
                df: "Heal all damage on encounters that moved this way.",
                lv: 5
            }
        ]
    },
    {
        name: "Foggy Memory",
        type: "std",
        set: "Base",
        id: 8,
        flav: "Forgetfulness drifts over your mind like the webbing of tiny spiders blowing on a warm breeze. At first, you didn't even know a problem existed. Then, you wonder how long that memory lurked at the back of your thoughts. By the time you decide to act, the damage is already done.",
        effect: [
            {
                text: "<b>Continuous:</b> Characters can't buy cards. (Do not cycle the Market.)",
                lv: 0
            },
            {
                text: "<b>Deadfall:</b> Cycle all cards in the Market.",
                df: "When this card is placed in the discard, cycle all cards in the Market.",
                lv: 3
            }
        ]
    },
    {
        name: "Cursed Treasure",
        type: "std",
        set: "Base",
        id: 9,
        flav: "A few coins must have fallen from a pocket, or through a hole in the bottom of someone's pack. Maybe a pouch was forgotten at the last campsite. That's all it must be. Gold pieces don't fly away of their own volition. Right?",
        effect: [
            {
                text: "<b>Deadfall:</b> Each character loses 2 gold.",
                lv: 0
            },
            {
                text: "<b>Deadfall:</b> Each character loses all gold.",
                df: "Instead, each character loses all gold.",
                lv: 4
            }
        ]
    },
    {
        name: "Reinforcements",
        type: "std",
        set: "Base",
        id: 10,
        flav: "They fall back into the shadows as if summond: one with teeth bared in pain and another perhaps near death. But new enemies surge forward to take their place, demanding further payment in steel, magic, or blood.",
        effect: [
            {
                text: "Discard each non-Location, Difficulty Rating 1 or 2 encounter that has at least 1 cleared level and reveal a new card from the Primary Encounter Deck to replace it.",
                lv: 0
            },
            {
                text: "Discard each non-Location, Difficulty Rating 1 or 2 encounter that has at least 1 cleared level and reveal a new card from the Secondary Encounter Deck to replace it.",
                df: "Instead, reveal a card from the Secondary Encounter Deck to replace it.",
                lv: 5
            }
        ]
    },
    {
        name: "Uneasy Pickings",
        type: "std",
        set: "Base",
        id: 11,
        flav: "A quiet step, the softest touch, as hard-won treasures slip your hold; all lost, forgot, or set aside, for all that glitters is not gold.",
        effect: [
            {
                text: "<b>Continuous:</b> The gold value of each defeated encounter is decreased by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The gold value of each defeated encounter decreases by 1. In addition, when an encounter attacks a character, that character loses gold equal to the encounter's Attack Strength.",
                df: "In addition, when an encounter attacks a character, that character loses gold equal to the encounter's Attack Strength.",
                lv: 4
            }
        ]
    },
    {
        name: "Magical Surge",
        type: "std",
        set: "Base",
        id: 12,
        flav: "Magical runes, writ in blazing light, swirl over and around each of your opponents, dancing to the chant of a hundred whispering voices. They fade, but your enemies' eyes are glowing with renewed purpose&mdash;and power.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Arcane encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Arcane encounter increases by 1.<br />Summon Arcane (or any, if no Arcane) from the Secondary Encounter Deck and place it facing an Arcane character. All other Arcane characters discard a card.",
                df: "In addition, Summon Arcane from the Secondary Encounter Deck (or any, if no Arcane) and place it facing an Arcane character. All other Arcane characters discard a card.",
                lv: 5
            }
        ]
    },
    {
        name: "The Gods' Displeasure",
        type: "std",
        set: "Base",
        id: 13,
        flav: "A powerful voice shakes the ground upon which you stand. A language older than Elvish, perhaps as old as creation itself, sears your mind. Shouts of rapture issue from your enemies.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Devotion encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Devotion encounter increases by 1.<br />Summon Devotion (or any, if no Devotion) from the Secondary Encounter Deck and place it facing a Devotion character. All other Devotion characters discard a card.",
                df: "In addition, Summon Devotion from the Secondary Encounter Deck (or any, if no Devotion) and place it facing a Devotion character. All other Devotion characters discard a card.",
                lv: 5
            }
        ]
    },
    {
        name: "Cursed",
        type: "std",
        set: "Base",
        id: 14,
        flav: "\"Aye. Remember that feeling, I do. The dregs of fear and the hopelessness of a battle long since lost. Taking every last scrap of strength to swing a blade. To even recall a bit of magic. At times, to place even one foot after the other without falling.\"",
        effect: [
            {
                text: "<b>Continuous:</b> At the start of your turn, make two <b>Skill Checks</b>.<br /><b>Failure(s):</b> Discard a card.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> At the start of your turn, make two <b>Skill Checks</b>.<br /><b>Failure(s):</b> Discard a card.<br /><b>Both Failures:</b> Discard hand.",
                df: "<b>Both Failures:</b> Discard hand.",
                lv: 7
            }
        ]
    },
    {
        name: "The King's Fist",
        type: "std",
        set: "Base",
        id: 15,
        flav: "Familiarity breeds contempt, they say. But when the stress and burdens of adventuring lie heavy on the mind, everyone takes refuge in the tried and true.",
        effect: [
            {
                text: "<b>Continuous:</b> Players may only purchase cards from the Market of their Class Type.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> Players may only purchase cards from the Market of their Class Type. If you cycle the Market and the new card does not match your Class Type, permanently reduce the Market card slots by 1. (Discard 2 cards from the Market, then add the drawn card.)",
                df: "In addition, if you cycle the Market and the new card does not match your Class Type, permanently reduce the Market card slots by 1. (Discard 2 cards from the Market, then add the drawn card.)",
                lv: 6
            }
        ]
    },
    {
        name: "Hag's Curse",
        type: "std",
        set: "Base",
        id: 16,
        flav: "An ancient being with origins in the Feywild, with eyes of black coal peering from a withered face. Her gaze scraps cold fingers across your soul, choking away the very breath of life.",
        effect: [
            {
                text: "Nothing happens.",
                lv: 0
            },
            {
                df: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.",
                lv: 3
            },
            {
                text: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.<br />2nd Player - <b>Failure:</b> Lose 1 HP.",
                df: "2nd Player - <b>Failure:</b> Lose 1 HP.",
                lv: 4
            },
            {
                text: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.<br />2nd Player - <b>Failure:</b> Lose 1 HP.<br />3rd Player - <b>Failure:</b> Discard 1 card.",
                df: "3rd Player - <b>Failure:</b> Discard 1 card.",
                lv: 5
            },
            {
                text: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.<br />2nd Player - <b>Failure:</b> Lose 1 HP.<br />3rd Player - <b>Failure:</b> Discard 1 card.<br />4th Player - <b>Failure:</b> Summon any from the Primary Encounter Deck.",
                df: "4th Player - <b>Failure:</b> Summon any from the Primary Encounter Deck.",
                lv: 6
            },
            {
                text: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.<br />2nd Player - <b>Failure:</b> Lose 1 HP.<br />3rd Player - <b>Failure:</b> Discard 1 card.<br />4th Player - <b>Failure:</b> Summon any from the Primary Encounter Deck.<br />5th Player - <b>Failure:</b> Summon any from the Secondary Encounter Deck.",
                df: "5th Player - <b>Failure:</b> Summon any from the Secondary Encounter Deck.",
                lv: 7
            },
            {
                text: "Players must make a <b>Skill Check</b>:<br />1st Player - <b>Failure:</b> Lose 1 gold.<br />2nd Player - <b>Failure:</b> Lose 1 HP.<br />3rd Player - <b>Failure:</b> Discard 1 card.<br />4th Player - <b>Failure:</b> Summon any from the Primary Encounter Deck.<br />5th Player - <b>Failure:</b> Summon any from the Secondary Encounter Deck.<br />6th Player - <b>Failure:</b> Discard hand.",
                df: "6th Player - <b>Failure:</b> Discard hand.",
                lv: 8
            }
        ]
    },
    {
        name: "Surging Evil",
        type: "std",
        set: "Base",
        id: 17,
        flav: "A dark malevolence sweeps across the battlefield, dragging with it a harrowing silence that mutes the ring of steel against steel. Your pulse pounds in your ears. And your enemies grin savagely as they push forward with renewed strength as they push forward with renewed strength in their arms.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Martial encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Martial encounter increases by 1.<br />Summon Martial (or any, if no Martial) from the Secondary Encounter Deck and place it facing a Martial character. All other Martial characters discard a card.",
                df: "In addition, Summon Martial from the Secondary Encounter Deck (or any, if no Martial) and place it facing a Martial character. All other Martial characters discard a card.",
                lv: 5
            }
        ]
    },
    {
        name: "A New Edict",
        type: "std",
        set: "Base",
        id: 18,
        flav: "When the darkness comes, meet it without fear, without hesitation. And when you find yourself alone, pressed by the enemy, hold true! remember your training, and it may yet see you through to victory!",
        effect: [
            {
                text: "<b>Continuous:</b> You may play a non-Basic card only if it is your Class Type.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> You may play a non-Basic card only if it is your Class Type, and no Assists may be played.",
                df: "In addition, no Assists may be played.",
                lv: 6
            }
        ]
    },
    {
        name: "A Master's Hand",
        type: "std",
        set: "Base",
        id: 19,
        flav: "Shadows writhe and stretch, bending and bleeding into one another to form the gray silhouette of a malevolent being with eyes of fathomless black. It sweeps forth a misshapen arm and dark energy runnels across the ground to every enemey still standing.",
        effect: [
            {
                text: "<b>Continuous:</b> When an encounter damages a character, the encounter heals a number of levels equal to its Attack Strength.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> When an encounter damages a character, the encounter heals all levels.",
                df: "Instead, the encounter heals all levels.",
                lv: 6
            }
        ]
    },
    {
        name: "Old Enemies",
        type: "std",
        set: "Base",
        id: 20,
        flav: "Hatred burns in their eyes like the fires of Avernus. No quarter is asked nor given&mdash;this fight shall be to the death. For too long have you pushed against the darkness. Today, the dark pushes back.",
        effect: [
            {
                text: "<b>Continuous:</b> At the start of your turn, reveal a card from the top of the Primary Encounter Deck. If it matches your primary Class Type, place it facing you. Otherwise, bury it.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> At the start of your turn, reveal a card from the top of the Primary Encounter Deck. If it matches your primary Class Type, place it facing you; its gold value is halved (rounded down). Otherwise, bury it.",
                df: "Additionally, the encounter's gold value is halved (rounded down).",
                lv: 4
            },
            {
                text: "<b>Continuous:</b> At the start of your turn, reveal a card from the top of the Primary Encounter Deck. If it matches your primary Class Type, place it facing you; it has no gold value. Otherwise, bury it.",
                df: "Instead, the encounter has no gold value.",
                lv: 7
            }
        ]
    },
    {
        name: "Haunted",
        type: "std",
        set: "Base",
        id: 21,
        flav: "The runes are difficult to read, and might have been easily missed except for the otherworldly glow that emanates from each carved edge. An old Dwarvish script reads, \"As in all things, Fate shall take a hand.\"",
        effect: [
            {
                text: "<b>Deadfall:</b> Place the top card of the Dragonfire deck in the discard but don't resolve its effect. Then reveal a new card as normal.",
                lv: 0
            },
            {
                text: "<b>Deadfall:</b> Place the top card of the Dragonfire deck in the discard and resolve its effect (if any). Then reveal a new card as normal.",
                df: "Instead, do resolve its effect.",
                lv: 5
            }
        ]
    },
    {
        name: "Frenzy",
        type: "std",
        set: "Base",
        id: 22,
        flav: "Your foes momentarily shimmer before your eyes. As the effect dissipates, you wonder if you're still seeing things: they appear taller and stronger, their eyes filled with inhuman rage.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Humanoid encounter is increased by 1.<br />Each humanoid encounter heals 1 level.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Humanoid encounter is increased by 1.<br />Each humanoid encounter heals 1 level.<br />Summon Humanoid (or any, if no Humanoid) from the Secondary Encounter Deck and place it facing the character whose Class Type it matches. Then Summon Any from that deck and place it facing the next character to the left; this encounter has no gold value.",
                df: "In addition, Summon Humanoid (or any, if no Humanoid) from the Secondary Encounter Deck and place it facing the character whose Class Type it matches. Then Summon Any from that deck and place it facing the next character to the left; this encounter has no gold value.",
                lv: 8
            }
        ]
    },
    {
        name: "Goblin Uprising",
        type: "std",
        set: "Base",
        id: 23,
        flav: "A wild cacophony of screeching echoes around you as shadows jump and flicker by torchlight. A reeking odor of blood and carrion heralds their arrival.",
        effect: [
            {
                text: "Place one Humanoid Martial token (1/1) in front of each player.",
                lv: 0
            },
            {
                text: "Place one Humanoid Martial token (1/1) in front of each player. If a player is facing any encounters, add another token.",
                df: "If a player is facing any encounters, add another token.",
                lv: 3
            },
            {
                text: "Place one Humanoid Martial token (2/2) in front of each player. If a player is facing any encounters, add another token.",
                df: "Instead, each token is (2/2).",
                lv: 6
            },
            {
                text: "Place one Humanoid Martial token (3/3) in front of each player. If a player is facing any encounters, add another token.",
                df: "Instead, each token is (3/3).",
                lv: 9
            }
        ]
    },
    {
        name: "No Tricks <i>This</i> Time",
        type: "std",
        set: "Base",
        id: 24,
        flav: "The bandits are tall, broad, and tough; scars aplenty speak of their excellent tradecraft. They fan wide, knowing your bag o' tricks. You'll not talk your way out of this one. Not this time. The debt is due.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Deception encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Deception encounter increases by 1.<br />Summon Deception (or any, if no Deception) from the Secondary Encounter Deck and place it facing a Deception character. All other Deception characters discard a card.",
                df: "In addition, Summon Deception from the Secondary Encounter Deck (or any, if no Deception) and place it facing a Deception character. All other Deception characters discard a card.",
                lv: 5
            }
        ]
    },
    {
        name: "Infernal Binding",
        type: "uq",
        set: "Dragonspear",
        id: 1,
        flav: "The devil lashes and flails, smoke from infernal fires billowing. Claws scratching across cobblestone. Wings beating a cacophony matching your heartbeat. Yet you can bind it. Make it serve your purpose. There is no price too high.",
        effect: [
            {
                text: "Among all players, you may discard one card of each Class Type.<br />If successful, a Fiend encounter must skip its next attack. Deal that Fiend's Attack Strength as level damage to one other encounter.",
                lv: 0
            }
        ]
    },
    {
        name: "Infernal Contract",
        type: "sp",
        set: "Dragonspear",
        id: 2,
        flav: "It was the only way. The demonic presence was overpowering. The sulphuric stench. The acrid bite at the back of your throat. The terror pressing against your skull until you teetered at insanity. Then the contract. It really was the only way out... right?",
        effect: [
            {
                text: "All players must draw a card. If its color matches your Class Type, lose 1 HP. If it doesn't, lose 2 HP.",
                lv: 0
            }
        ]
    },
    {
        name: "Signs of Blight",
        type: "std",
        set: "Dragonspear",
        id: 3,
        flav: "The leaves drip ochre sap as though congealed blood. Each step sucks at your boots as if traipsing a fetid swamp, though there is no mud. The land seems cast in shadows, though there is no cloud cover. The gutteral barks of approaching creatures fill with glee.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Devotion and Arcane encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Devotion and Arcane encounter increases by 1.<br />Summon Devotion or Arcane from the Secondary Encounter Deck and place it facing the appropriate character. Discard the rest.",
                df: "In addition, Summon Devotion or Arcane from the Secondary Encounter Deck and place it facing the appropriate character. Discard the rest.",
                lv: 7
            }
        ]
    },
    {
        name: "Signs of Corruption",
        type: "std",
        set: "Dragonspear",
        id: 4,
        flav: "You've hunted such monsters before. You know their ways. But this is different. Scabrous sores dot their flesh. Blood-filled spittle flies as the chew their tongues. Disease-dimmed eyes twitch with madness. They surge at you, bristling with unholy strength.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Deception and Martial encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Deception and Martial encounter increases by 1.<br />Summon Deception or Martial from the Secondary Encounter Deck and place it facing the appropriate character. Discard the rest.",
                df: "In addition, Summon Deception or Martial from the Secondary Encounter Deck and place it facing the appropriate character. Discard the rest.",
                lv: 7
            }
        ]
    },
    {
        name: "Infernal Invasion",
        type: "std",
        set: "Dragonspear",
        id: 5,
        flav: "The fissure in the air gapes like a festering, pus-filled wound. Your mind quails at the unfathomable chaos writhing in its depths, while a sickly light undulates outwards. Your skin crawls as the tained light brushes against you, but other beings howl in pleasure.",
        effect: [
            {
                text: "<b>Continuous:</b> The Attack Strength of each Fiend, Monstrosity, and Aberration encounter increases by 1.",
                lv: 0
            },
            {
                text: "<b>Continuous:</b> The Attack Strength of each Fiend, Monstrosity, and Aberration encounter increases by 2.",
                df: "Instead, it increases by 2.",
                lv: 5
            }
        ]
    },
    {
        name: "Mark Your Enemies",
        type: "uq",
        set: "Trollclaws",
        id: 1,
        flav: "The endless clashes in the Trollclaws exhaust and infuriate, yet patterns emerge. At first, only gut reactions, then knowledge solidifies. As surely as you know your craft, you can predict what the despicable creatures will do next. Time to exploit it.",
        effect: [
            {
                text: "<b>Continuous:</b> At the start of your turn, if you are facing an encounter with \"gnoll,\" \"orc,\" or \"goblin\" in its name, you may make a <b>Skill Check</b>.<br /><b>Success:</b> Deal a level to one of those encounters anywhere on the damage track.<br /><b>Failure:</b> Summon Any.",
                lv: 0
            }
        ]
    },
    {
        name: "The Chaos of Battle",
        type: "std",
        set: "Trollclaws",
        id: 2,
        flav: "The thunder of hooves echoes, and you dive for heavy cover as they sweep past. You gain your feet as a new wave of claws and teeth crashes into you. All of existence sythes to a whirling maelstrom of flashing blades, sparkling energies, and sprouting crimson ribbons.",
        effect: [
            {
                text: "All players choose and set aside half of their hand (rounded down). Those cards cannot be used during their turn. At the end of their turn, place those cards back into their hand.",
                lv: 0
            },
            {
                text: "All players choose and set aside half of their hand (rounded up). Those cards cannot be used during their turn. At the end of their turn, place those cards back into their hand.",
                df: "Instead, round up.",
                lv: 4
            }
        ]
    },
    {
        name: "Fighting Through the Night",
        type: "std",
        set: "Trollclaws",
        id: 3,
        flav: "Blow. Step. Block. Step. Thrust. Your vision tunnels, and your exhausted limbs drag like iron shackles. You stumble over a body in the dark, praying it isn't a friend. Praying it won't soon be you. Praying the dawn will soon break. Praying... for one... more... step.",
        effect: [
            {
                text: "Choose one character to become Exhausted. The party may collectively spend 3 HP to negate this effect.",
                lv: 0
            },
            {
                text: "Choose one character to become Exhausted.",
                df: "Instead, the effect cannot be negated.",
                lv: 6
            }
        ]
    },
    {
        name: "Overwhelmed",
        type: "std",
        set: "Trollclaws",
        id: 4,
        flav: "A monster screams its last breath and falls to your attack, only to be replaced by two more. Despite heroic efforts, one of your party staggers back while another fights with a heavy limp. A broken shield. A shattered staff. It is all too much.",
        effect: [
            {
                text: "All players make a <b>Skill Check</b>.<br /><b>Failure:</b> Discard a non-Basic card from your hand to the Market discard.",
                lv: 0
            },
            {
                text: "All players make two <b>Skill Checks</b>.<br /><b>Either Failure:</b> Discard a non-Basic card from your hand to the Market discard.",
                df: "Instead, make two <b>Skill Checks</b>.<br /><b>Either Failure:</b> Discard a non-Basic card from your hand to the Market discard.",
                lv: 6
            }
        ]
    },
    {
        name: "Relentless Enemy",
        type: "sp",
        set: "Trollclaws",
        id: 5,
        flav: "The chaotic battle shifts abruptly, and a lone figure appears. The setting sun sets his crimson flesh aflame, his bared sword drenched in fallen foes. He slowly rasies a hand, pointing, calling you out. His implacable features bear testament to the enemy you've forged this day.",
        effect: [
            {
                text: "Summon Torog-Kaitan (Difficulty 2 Wilderness encounter from <i>Chaos in the Trollclaws</i>.) Discard the top card of the Market deck and place Torog-Kaitan facing the character whose Class Type matches it.",
                lv: 0
            }
        ]
    }
];