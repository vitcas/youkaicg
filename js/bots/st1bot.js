//types:
//1 egg
//2 digimon
//3 tamer
//4 option
const botegg_stack = ["ST1-01","ST1-01","ST1-01","ST1-01"];
const botdeck_stack = ["ST1-02","ST1-02","ST1-02","ST1-02","ST1-03","ST1-03","ST1-03","ST1-03","ST1-04","ST1-04","ST1-04","ST1-04","ST1-05","ST1-05","ST1-05","ST1-05","ST1-06","ST1-06","ST1-06","ST1-06","ST1-07","ST1-07","ST1-08","ST1-08","ST1-08","ST1-08","ST1-09","ST1-09","ST1-09","ST1-09","ST1-10","ST1-10","ST1-11","ST1-11","ST1-12","ST1-12","ST1-12","ST1-12","ST1-13","ST1-13","ST1-13","ST1-13","ST1-14","ST1-14","ST1-14","ST1-14","ST1-15","ST1-15","ST1-16","ST1-16"];
const bothand_stack = [];
const bottrash_stack = [];
const botsec_stack = [];
const cardetails = [
  {
    "code": "ST1-01",
		"level": 2,
    "name": "Koromon",
		"type": "egg",
		"inherit": "While this Digimon has 4 or more digivolution cards, it gets +1000 DP.",
		"traits": ["In-Training","Lesser"]
  },
  {
    "code": "ST1-02",
		"level": 3,
    "name": "Biyomon",
		"type": "digimon",
		"play": 2,
		"evo": 0,
    "dp": 3000,
    "effect": "",
		"inherit": "",
		"traits": ["Rookie","Vaccine","Bird"]
  },
  {
    "code": "ST1-03",
		"level": 3,
    "name": "Agumon",
		"type": "digimon",
		"play": 3,
		"evo": 0,
    "dp": 3000,
    "effect": "",
		"inherit": "Your Turn This Digimon gets +1000 DP.",
		"traits": ["Rookie","Vaccine","Reptile"]
  },
	{
    "code": "ST1-04",
		"level": 3,
    "name": "Dracomon",
		"type": "digimon",
		"play": 3,
		"evo": 0,
    "dp": 3000,
    "effect": "",
		"inherit": "",
		"traits": ["Rookie","Data","Dragon"]
  },
	{
    "code": "ST1-05",
		"level": 4,
    "name": "Birdramon",
		"type": "digimon",
		"play": 4,
		"evo": 2,
    "dp": 3000,
    "effect": "",
		"inherit": "",
		"traits": ["Champion","Vaccine","GiantBird"]
  },
	{
    "code": "ST1-06",
		"level": 4,
    "name": "Coredramon",
		"type": "digimon",
		"play": 5,
		"evo": 2,
    "dp": 6000,
    "effect": "Blocker; When Attacking: Lose 2 memory.",
		"inherit": "",
		"traits": ["Champion","Virus","Dragon"]
  },
	{
    "code": "ST1-07",
		"level": 4,
    "name": "Greymon",
		"type": "digimon",
		"play": 5,
		"evo": 2,
    "dp": 4000,
    "effect": "",
		"inherit": "Security Attack + 1",
		"traits": ["Champion","Vaccine","Dinosaur"]
  },
	{
    "code": "ST1-08",
		"level": 5,
    "name": "Garudamon",
		"type": "digimon",
		"play": 6,
		"evo": 3,
    "dp": 7000,
    "effect": "When Digivolving: 1 of your Digimon gets +3000 DP for the turn.",
		"inherit": "",
		"traits": ["Ultimate","Vaccine","Birdkin"]
  },
	{
    "code": "ST1-09",
		"level": 5,
    "name": "MetalGreymon",
		"type": "digimon",
		"play": 7,
		"evo": 3,
    "dp": 7000,
    "effect": "",
		"inherit": "Your Turn: When this Digimon is blocked, gain 3 memory.",
		"traits": ["Ultimate","Vaccine","Cyborg"]
  },
	{
    "code": "ST1-10",
		"level": 6,
    "name": "Phoenixmon",
		"type": "digimon",
		"play": 10,
		"evo": 2,
    "dp": 12000,
    "effect": "",
		"inherit": "",
		"traits": ["Mega","Vaccine","HolyBeast"]
  },
	{
    "code": "ST1-11",
		"level": 6,
    "name": "WarGreymon",
		"type": "digimon",
		"play": 12,
		"evo": 4,
    "dp": 12000,
    "effect": "Your Turn: For every digivolution cards this Digimon has, it gains Sec + 1",
		"inherit": "",
		"traits": ["Mega","Vaccine","Dragonkin"]
  },
  {
    "code": "ST1-12",
    "name": "Tai Kamiya",
		"type": "tamer",
		"play": 2,
    "main": "Your Turn: All of your Digimon get +1000 DP.",
		"security": "Play this card without paying its memory cost."
  },
	{
    "code": "ST1-13",
    "name": "Shadow Wing",
		"type": "option",
		"play": 1,
    "main": "1 of your Digimon gets +3000 DP for the turn.",
		"security": "All of your Digimon gain Security Attack +1 until the end of your next turn."
  },
	{
    "code": "ST1-14",
    "name": "Starlight Explosion",
		"type": "option",
		"play": 2,
    "main": "All of your Security Digimon get +7000 DP until the end of your opponent's next turn.",
		"security": "All of your Security Digimon get +7000 DP for the turn."
  },
	{
    "code": "ST1-15",
    "name": "Giga Destroyer",
		"type": "option",
		"play": 6,
    "main": "Delete up to 2 of your opponent's Digimon with 4000 DP or less.",
		"security": "Activate this card's Main effect."
  },
	{
    "code": "ST1-16",
    "name": "Gaia Force",
		"type": "option",
		"play": 8,
    "main": "Delete 1 of your opponent's Digimon",
		"security": "Activate this card's Main effect."
  }
];