const botegg_stack = ["BT2-005","BT2-005","BT2-005","BT2-005"];
const botdeck_stack = ["ST13-07","ST13-07","ST13-07","ST13-07","ST5-05","ST5-05","ST5-05","ST5-05","BT9-057","BT9-057","BT9-057","BT9-057","BT3-067","BT3-067","BT3-067","BT3-067","BT9-060","BT9-060","BT9-060","BT9-060","BT10-062","BT10-062","BT10-062","BT10-062","BT2-060","BT2-060","BT2-060","BT2-060","BT5-066","BT5-066","BT5-066","BT5-066","BT9-063","BT9-063","BT9-063","BT9-063","BT2-064","BT2-064","BT2-064","BT2-064","BT8-030","BT8-030","BT8-030","BT8-030","BT8-017","BT8-017","BT8-017","BT8-017","BT9-111","EX4-073"];
const bothand_stack = [];
const bottrash_stack = [];
const botsec_stack = [];
const cardetails = [
  {
    "code": "BT2-005",
		"level": 2,
    "name": "Kapurimon",
		"type": "egg",
		"inherit": "[Your Turn] While this Digimon has ＜Reboot＞ , it gets +1000 DP.",
		"traits": ["In-Training","Lesser"]
  },
  {
    "code": "BT9-057",
		"level": 3,
    "name": "Bearmon",
		"type": "digimon",
		"play": 2,
		"evo": 0,
    "dp": 3000,
    "effect": "",
		"inherit": "",
		"traits": ["Rookie","Vaccine","Bird"]
  },
  {
    "code": "ST5-05",
		"level": 3,
    "name": "Commandramon",
		"type": "digimon",
		"play": 4,
		"evo": 0,
    "dp": 5000,
    "effect": "",
		"inherit": "",
		"traits": ["Rookie","Vaccine","Reptile"]
  },
	{
    "code": "ST13-07",
		"level": 3,
    "name": "Kotemon",
		"type": "digimon",
		"play": 2,
		"evo": 0,
    "dp": 3000,
    "effect": "",
		"inherit": "",
		"traits": ["Rookie","Data","Dragon"]
  },
	{
    "code": "BT9-060",
		"level": 4,
    "name": "Grizzlymon",
		"type": "digimon",
		"play": 5,
		"evo": 1,
    "dp": 5000,
    "effect": "",
		"inherit": "",
		"traits": ["Champion","Vaccine","GiantBird"]
  },
	{
    "code": "BT10-062",
		"level": 4,
    "name": "Golemon",
		"type": "digimon",
		"play": 5,
		"evo": 1,
    "dp": 5000,
    "effect": "",
		"inherit": "",
		"traits": ["Champion","Virus","Dragon"]
  },
	{
    "code": "BT3-067",
		"level": 4,
    "name": "Tankmon",
		"type": "digimon",
		"play": 6,
		"evo": 1,
    "dp": 6000,
    "effect": "",
		"inherit": "",
		"traits": ["Champion","Vaccine","Dinosaur"]
  },
	{
    "code": "BT2-060",
		"level": 5,
    "name": "Megadramon",
		"type": "digimon",
		"play": 6,
		"evo": 3,
    "dp": 9000,
    "effect": "",
		"inherit": "",
		"traits": ["Ultimate","Vaccine","Birdkin"]
  },
	{
    "code": "BT9-063",
		"level": 5,
    "name": "LoaderLeomon",
		"type": "digimon",
		"play": 6,
		"evo": 2,
    "dp": 7000,
    "effect": "",
		"inherit": "",
		"traits": ["Ultimate","Vaccine","Cyborg"]
  },
	{
    "code": "BT5-066",
		"level": 5,
    "name": "WaruMonzaemon",
		"type": "digimon",
		"play": 5,
		"evo": 2,
    "dp": 6000,
    "effect": "",
		"inherit": "",
		"traits": ["Ultimate","Vaccine","Cyborg"]
  },
	{
    "code": "BT2-064",
		"level": 6,
    "name": "HiAndromon",
		"type": "digimon",
		"play": 10,
		"evo": 2,
    "dp": 12000,
    "effect": "",
		"inherit": "",
		"traits": ["Mega","Vaccine","HolyBeast"]
  },
	{
    "code": "BT8-017",
		"level": 6,
    "name": "UltimateBrachiomon",
		"type": "digimon",
		"play": 10,
		"evo": 3,
    "dp": 13000,
    "effect": "",
		"inherit": "",
		"traits": ["Ultimate","Data","Cybotg"]
  },
	{
    "code": "BT8-030",
		"level": 6,
    "name": "Surfimon",
		"type": "digimon",
		"play": 10,
		"evo": 3,
    "dp": 13000,
    "effect": "",
		"inherit": "",
		"traits": ["Mega","Vaccine","Cyborg"]
  },
	{
    "code": "BT9-111",
		"level": 7,
    "name": "Alphamon Ouryuken",
		"type": "digimon",
		"play": 15,
		"evo": 7,
    "dp": 16000,
    "effect": "[When Digivolving] Delete all of your opponent's Digimon with the highest play cost. [End of Your Turn] [Once Per Turn] You may return up to 7 non-Digi-Egg cards with the [X Antibody] trait from this Digimon's digivolution cards to the bottom of your deck in any order, if you do, gain 1 memory for each card returned.",
		"inherit": "",
		"traits": ["Mega","Vaccine","Dragonkin"]
  },
	{
    "code": "EX4-073",
		"level": 7,
    "name": "Omnimon Alter-B",
		"type": "digimon",
		"play": 15,
		"evo": 5,
    "dp": 15000,
    "effect": "[When Digivolving] ＜De-Digivolve 3＞ on 1 of your opponent's Digimon (Trash up to 3 cards from the top of one of your opponent's Digimon. If it has no digivolution cards, or becomes a level 3 Digimon, you can't trash any more cards). Then, choose any number of your opponent's Digimon so that their play cost total is up to 6 and delete them. [When Attacking] By trashing up to 3 level 6 or higher cards in this Digimon's digivolution cards, delete 1 of your opponent's Digimon or Tamers with the lowest play cost for each card trashed. If you trashed 3 cards, trash the top 2 cards of your opponent's security stack.",
		"inherit": "",
		"traits": ["Mega","Vaccine","Dragonkin"]
  }
];