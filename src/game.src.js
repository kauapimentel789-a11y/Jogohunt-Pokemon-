
const CREDITS="0palite, 3Monika4, 3P1C, Anon, Audino, avalancheman, baronessfaron, Blanca, Blanky, bwappi, C_Pariah, Caitemis, chikorene, CHUNSOFT, Cloudy, Coksi, Davilos, Deeshura, deltaflare, Deltex12, distress, dmDash, Emboarger, Emmuffin, EzerArt, Fable, FalafelPorpoise, Fearless-Quit, Felis-Licht, Frostdrop1, Grimlin, Gust, G〜, Ichor, Jarleypeño, JemDragons, JFain, Jhony-Rex, JustAGunk, Kawaiitron, Kevin0itachi, LazerBlitz, LT, mixy:3, Morei, motherhenna(Helen), mucrush, NeroIntruder, NickOnimura, NikolaP, Noivern, NOLASMOR, Noo, Orange, PhillipsYoung, pi3.14, powercristal, radpeepo, Reimu\\_needs\\_$$$, RelicCipher, ShyStarryRain, silverfox88, SirViolet, Smalusion, Soulja, Tainted#3886, TawnySoup, Top_Kec, Uni, Vynnyal, Waffluffe, XModxGodX, ◥θ┴θ◤";
// ===== dados =====
const D={
1:['Bulbasaur','grass/poison',[45,65,57,45],[2,16]],2:['Ivysaur','grass/poison',0,[3,32]],3:['Venusaur','grass/poison'],
4:['Charmander','fire',[39,60,47,65],[5,16]],5:['Charmeleon','fire',0,[6,36]],6:['Charizard','fire/flying'],
7:['Squirtle','water',[44,50,65,43],[8,16]],8:['Wartortle','water',0,[9,36]],9:['Blastoise','water'],
152:['Chikorita','grass',[45,49,65,45],[153,16]],153:['Bayleef','grass',0,[154,32]],154:['Meganium','grass'],
155:['Cyndaquil','fire',[39,60,47,65],[156,14]],156:['Quilava','fire',0,[157,36]],157:['Typhlosion','fire'],
158:['Totodile','water',[50,65,56,43],[159,18]],159:['Croconaw','water',0,[160,30]],160:['Feraligatr','water'],
252:['Treecko','grass',[40,65,45,70],[253,16]],253:['Grovyle','grass',0,[254,36]],254:['Sceptile','grass'],
255:['Torchic','fire',[45,70,45,45],[256,16]],256:['Combusken','fire/fighting',0,[257,36]],257:['Blaziken','fire/fighting'],
258:['Mudkip','water',[50,70,50,40],[259,16]],259:['Marshtomp','water/ground',0,[260,36]],260:['Swampert','water/ground'],
387:['Turtwig','grass',[55,68,60,31],[388,18]],388:['Grotle','grass',0,[389,32]],389:['Torterra','grass/ground'],
390:['Chimchar','fire',[44,58,44,61],[391,14]],391:['Monferno','fire/fighting',0,[392,36]],392:['Infernape','fire/fighting'],
393:['Piplup','water',[53,61,55,40],[394,16]],394:['Prinplup','water',0,[395,36]],395:['Empoleon','water/steel'],
495:['Snivy','grass',[45,45,55,63],[496,17]],496:['Servine','grass',0,[497,36]],497:['Serperior','grass'],
498:['Tepig','fire',[65,63,45,45],[499,17]],499:['Pignite','fire/fighting',0,[500,36]],500:['Emboar','fire/fighting'],
501:['Oshawott','water',[55,63,45,45],[502,17]],502:['Dewott','water',0,[503,36]],503:['Samurott','water'],
650:['Chespin','grass',[56,61,58,38],[651,16]],651:['Quilladin','grass',0,[652,36]],652:['Chesnaught','grass/fighting'],
653:['Fennekin','fire',[40,62,50,60],[654,16]],654:['Braixen','fire',0,[655,36]],655:['Delphox','fire/psychic'],
656:['Froakie','water',[41,62,42,71],[657,16]],657:['Frogadier','water',0,[658,36]],658:['Greninja','water/dark'],
722:['Rowlet','grass/flying',[68,55,55,42],[723,17]],723:['Dartrix','grass/flying',0,[724,34]],724:['Decidueye','grass/ghost'],
725:['Litten','fire',[45,65,40,70],[726,17]],726:['Torracat','fire',0,[727,34]],727:['Incineroar','fire/dark'],
728:['Popplio','water',[50,66,55,40],[729,17]],729:['Brionne','water',0,[730,34]],730:['Primarina','water/fairy'],
810:['Grookey','grass',[50,65,45,65],[811,16]],811:['Thwackey','grass',0,[812,35]],812:['Rillaboom','grass'],
813:['Scorbunny','fire',[50,71,40,69],[814,16]],814:['Raboot','fire',0,[815,35]],815:['Cinderace','fire'],
816:['Sobble','water',[50,70,40,70],[817,16]],817:['Drizzile','water',0,[818,35]],818:['Inteleon','water'],
906:['Sprigatito','grass',[40,61,50,65],[907,16]],907:['Floragato','grass',0,[908,36]],908:['Meowscarada','grass/dark'],
909:['Fuecoco','fire',[67,63,52,36],[910,16]],910:['Crocalor','fire',0,[911,36]],911:['Skeledirge','fire/ghost'],
912:['Quaxly','water',[55,65,45,50],[913,16]],913:['Quaxwell','water',0,[914,36]],914:['Quaquaval','water/fighting'],
// Floresta
10:['Caterpie','bug',[45,20,25,45],[11,7]],11:['Metapod','bug',0,[12,10]],12:['Butterfree','bug/flying',[60,90,80,70]],
43:['Oddish','grass/poison',[45,75,60,30],[44,21]],44:['Gloom','grass/poison',0,[45,40]],45:['Vileplume','grass/poison',[75,110,88,50]],
761:['Bounsweet','grass',[42,30,38,32],[762,18]],762:['Steenee','grass',0,[763,40]],763:['Tsareena','grass',[72,120,98,72]],
540:['Sewaddle','bug/grass',[45,53,65,42],[541,20]],541:['Swadloon','bug/grass',0,[542,40]],542:['Leavanny','bug/grass',[75,103,80,92]],
672:['Skiddo','grass',[66,65,52,52],[673,32]],673:['Gogoat','grass',[123,100,72,68]],
123:['Scyther','bug/flying',[70,110,80,105]],214:['Heracross','bug/fighting',[80,125,85,85]],212:['Scizor','bug/steel',[70,130,90,65]],
// Vulcão
37:['Vulpix','fire',[38,50,55,65]],38:['Ninetales','fire',[73,81,90,100]],
58:['Growlithe','fire',[55,70,50,60]],59:['Arcanine','fire',[90,110,80,95]],
77:['Ponyta','fire',[50,85,60,90],[78,40]],78:['Rapidash','fire',[65,100,75,105]],
218:['Slugma','fire',[40,70,40,20],[219,38]],219:['Magcargo','fire/rock',[60,90,100,30]],
667:['Litleo','fire/normal',[62,73,62,72],[668,35]],668:['Pyroar','fire/normal',[86,109,68,106]],
850:['Sizzlipede','fire/bug',[50,65,45,45],[851,28]],851:['Centiskorch','fire/bug',[100,115,80,65]],
126:['Magmar','fire',[65,100,70,93]],228:['Houndour','dark/fire',[45,80,40,65],[229,24]],229:['Houndoom','dark/fire',[75,110,65,95]],
324:['Torkoal','fire',[70,85,100,20]],757:['Salandit','poison/fire',[48,71,40,77],[758,33]],758:['Salazzle','poison/fire',[68,111,60,117]],
// Lago
129:['Magikarp','water',[20,15,35,80],[130,20]],130:['Gyarados','water/flying',[95,125,94,81]],
54:['Psyduck','water',[50,65,48,55],[55,33]],55:['Golduck','water',[80,95,80,85]],
194:['Wooper','water/ground',[55,45,35,15],[195,20]],195:['Quagsire','water/ground',[95,85,75,35]],
183:['Marill','water/fairy',[70,20,50,40],[184,18]],184:['Azumarill','water/fairy',[100,60,80,50]],
418:['Buizel','water',[55,65,32,85],[419,26]],419:['Floatzel','water',[85,105,52,115]],
131:['Lapras','water/ice',[130,85,95,60]],320:['Wailmer','water',[130,70,35,60],[321,40]],321:['Wailord','water',[170,90,45,60]],
134:['Vaporeon','water',[130,110,78,65]],350:['Milotic','water',[95,100,112,81]],
// Usina
25:['Pikachu','electric',[35,55,45,90]],26:['Raichu','electric',[60,90,68,110]],
81:['Magnemite','electric/steel',[25,95,62,45],[82,30]],82:['Magneton','electric/steel',[50,120,80,70]],462:['Magnezone','electric/steel',[70,130,105,60]],
179:['Mareep','electric',[55,65,40,35],[180,15]],180:['Flaaffy','electric',0,[181,30]],181:['Ampharos','electric',[90,115,88,55]],
403:['Shinx','electric',[45,65,34,45],[404,15]],404:['Luxio','electric',0,[405,30]],405:['Luxray','electric',[80,120,79,70]],
595:['Joltik','bug/electric',[50,57,50,65],[596,36]],596:['Galvantula','bug/electric',[70,97,60,108]],
835:['Yamper','electric',[59,45,50,26],[836,25]],836:['Boltund','electric',[69,90,60,121]],
125:['Electabuzz','electric',[65,95,72,105]],479:['Rotom','electric/ghost',[50,95,97,91]],135:['Jolteon','electric',[65,110,78,130]],
// Caverna
74:['Geodude','rock/ground',[40,80,65,20],[75,25]],75:['Graveler','rock/ground',0,[76,45]],76:['Golem','rock/ground',[80,120,100,45]],
95:['Onix','rock/ground',[35,45,108,70]],208:['Steelix','steel/ground',[75,85,115,30]],
246:['Larvitar','rock/ground',[50,64,50,41],[247,30]],247:['Pupitar','rock/ground',0,[248,55]],248:['Tyranitar','rock/dark',[100,134,105,61]],
744:['Rockruff','rock',[45,65,40,60],[745,25]],745:['Lycanroc','rock',[75,115,65,112]],
524:['Roggenrola','rock',[55,75,40,15],[525,25]],525:['Boldore','rock',[70,105,75,20]],
443:['Gible','dragon/ground',[58,70,45,42],[444,24]],444:['Gabite','dragon/ground',0,[445,48]],445:['Garchomp','dragon/ground',[108,130,90,102]],
111:['Rhyhorn','ground/rock',[80,85,65,25],[112,42]],112:['Rhydon','ground/rock',[105,130,75,40]]
};
// gerado por megagen.py: linhas mega e formas mega
Object.assign(D,{"13":["Weedle","bug/poison",[40,35,25,50],[14,7]],"14":["Kakuna","bug/poison",[45,25,38,35],[15,17]],"15":["Beedrill","bug/poison",[65,90,60,75]],"16":["Pidgey","normal/flying",[40,45,38,56],[17,18]],"17":["Pidgeotto","normal/flying",[63,60,52,71],[18,36]],"18":["Pidgeot","normal/flying",[83,80,72,101]],"35":["Clefairy","fairy",[70,60,56,35],[36,30]],"36":["Clefable","fairy",[95,95,82,60]],"63":["Abra","psychic",[25,105,35,90],[64,16]],"64":["Kadabra","psychic",[40,120,50,105],[65,36]],"65":["Alakazam","psychic",[55,135,70,120]],"69":["Bellsprout","grass/poison",[50,75,32,40],[70,21]],"70":["Weepinbell","grass/poison",[65,90,48,55],[71,36]],"71":["Victreebel","grass/poison",[80,105,68,70]],"79":["Slowpoke","water/psychic",[90,65,52,15],[80,30]],"80":["Slowbro","water/psychic",[95,100,95,30]],"92":["Gastly","ghost/poison",[30,100,32,80],[93,25]],"93":["Haunter","ghost/poison",[45,115,50,95],[94,36]],"94":["Gengar","ghost/poison",[60,130,68,110]],"115":["Kangaskhan","normal",[105,95,80,90]],"120":["Staryu","water",[30,70,55,85],[121,30]],"121":["Starmie","water/psychic",[60,100,85,115]],"127":["Pinsir","bug",[65,125,85,85]],"142":["Aerodactyl","rock/flying",[80,105,70,130]],"147":["Dratini","dragon",[41,64,48,50],[148,30]],"148":["Dragonair","dragon",[61,84,68,70],[149,55]],"149":["Dragonite","dragon/flying",[91,134,98,80]],"150":["Mewtwo","psychic",[106,154,90,130]],"227":["Skarmory","steel/flying",[65,80,105,70]],"280":["Ralts","psychic/fairy",[28,45,30,40],[281,20]],"281":["Kirlia","psychic/fairy",[38,65,45,50],[282,30]],"282":["Gardevoir","psychic/fairy",[68,125,90,80]],"302":["Sableye","dark/ghost",[50,75,70,50]],"303":["Mawile","steel/fairy",[50,85,70,50]],"304":["Aron","steel/rock",[50,70,70,30],[305,32]],"305":["Lairon","steel/rock",[60,90,95,40],[306,42]],"306":["Aggron","steel/rock",[70,110,120,50]],"307":["Meditite","fighting/psychic",[30,40,55,60],[308,37]],"308":["Medicham","fighting/psychic",[60,60,75,80]],"309":["Electrike","electric",[40,65,40,65],[310,26]],"310":["Manectric","electric",[70,105,60,105]],"318":["Carvanha","water/dark",[45,90,20,65],[319,30]],"319":["Sharpedo","water/dark",[70,120,40,95]],"322":["Numel","fire/ground",[60,65,42,35],[323,33]],"323":["Camerupt","fire/ground",[70,105,72,40]],"333":["Swablu","normal/flying",[45,40,68,50],[334,35]],"334":["Altaria","dragon/flying",[75,70,98,80]],"353":["Shuppet","ghost",[44,75,34,45],[354,37]],"354":["Banette","ghost",[64,115,64,65]],"358":["Chimecho","psychic",[75,95,85,65]],"359":["Absol","dark",[65,130,60,75]],"361":["Snorunt","ice",[50,50,50,50],[362,42]],"362":["Glalie","ice",[80,80,80,80]],"371":["Bagon","dragon",[45,75,45,50],[372,30]],"372":["Shelgon","dragon",[65,95,75,50],[373,50]],"373":["Salamence","dragon/flying",[95,135,80,100]],"374":["Beldum","steel/psychic",[40,55,70,30],[375,20]],"375":["Metang","steel/psychic",[60,75,90,50],[376,45]],"376":["Metagross","steel/psychic",[80,135,110,70]],"380":["Latias","dragon/psychic",[80,110,110,110]],"381":["Latios","dragon/psychic",[80,130,95,110]],"382":["Kyogre","water",[100,150,115,90]],"383":["Groudon","ground",[100,150,115,90]],"384":["Rayquaza","dragon/flying",[105,150,90,95]],"396":["Starly","normal/flying",[40,55,30,60],[397,14]],"397":["Staravia","normal/flying",[55,75,45,80],[398,34]],"398":["Staraptor","normal/flying",[85,120,65,100]],"427":["Buneary","normal",[55,66,50,85],[428,30]],"428":["Lopunny","normal",[65,76,90,105]],"448":["Lucario","fighting/steel",[70,115,70,90]],"459":["Snover","grass/ice",[60,62,55,40],[460,40]],"460":["Abomasnow","grass/ice",[90,92,80,60]],"475":["Gallade","psychic/fighting",[68,125,90,80]],"478":["Froslass","ice/ghost",[70,80,70,110]],"485":["Heatran","fire/steel",[91,130,106,77]],"491":["Darkrai","dark",[70,135,90,125]],"529":["Drilbur","ground",[60,85,42,68],[530,31]],"530":["Excadrill","ground/steel",[110,135,62,88]],"531":["Audino","normal",[103,60,86,50]],"543":["Venipede","bug/poison",[30,45,49,57],[544,22]],"544":["Whirlipede","bug/poison",[40,55,89,47],[545,32]],"545":["Scolipede","bug/poison",[60,100,79,112]],"559":["Scraggy","dark/fighting",[50,75,70,48],[560,39]],"560":["Scrafty","dark/fighting",[65,90,115,58]],"602":["Tynamo","electric",[35,55,40,60],[603,39]],"603":["Eelektrik","electric",[65,85,70,40],[604,49]],"604":["Eelektross","electric",[85,115,80,50]],"607":["Litwick","ghost/fire",[50,65,55,20],[608,41]],"608":["Lampent","ghost/fire",[60,95,60,55],[609,51]],"609":["Chandelure","ghost/fire",[60,145,90,80]],"622":["Golett","ground/ghost",[59,74,50,35],[623,43]],"623":["Golurk","ground/ghost",[89,124,80,55]],"668":["Pyroar","fire/normal",[86,109,69,106]],"669":["Flabébé","fairy",[44,61,59,42],[670,19]],"670":["Floette","fairy",[54,75,72,52]],"677":["Espurr","psychic",[62,63,57,68],[678,25]],"678":["Meowstic","psychic",[74,83,78,104]],"686":["Inkay","dark/psychic",[53,54,50,45],[687,30]],"687":["Malamar","dark/psychic",[86,92,82,73]],"688":["Binacle","rock/water",[42,52,62,50],[689,39]],"689":["Barbaracle","rock/water",[72,105,100,68]],"690":["Skrelp","poison/water",[50,60,60,30],[691,48]],"691":["Dragalge","poison/dragon",[65,97,106,44]],"701":["Hawlucha","fighting/flying",[78,92,69,118]],"718":["Zygarde","dragon/ground",[108,100,108,95]],"719":["Diancie","rock/fairy",[50,100,150,50]],"739":["Crabrawler","fighting",[47,82,52,63],[740,30]],"740":["Crabominable","fighting/ice",[97,132,72,43]],"767":["Wimpod","bug/water",[25,35,35,80],[768,30]],"768":["Golisopod","bug/water",[75,125,115,40]],"780":["Drampa","normal/dragon",[78,135,88,36]],"801":["Magearna","steel/fairy",[80,130,115,65]],"807":["Zeraora","electric",[88,112,78,143]],"870":["Falinks","fighting",[65,100,80,75]],"951":["Capsakid","grass",[50,62,40,50],[952,30]],"952":["Scovillain","grass/fire",[65,108,65,75]],"969":["Glimmet","rock/poison",[48,105,51,60],[970,35]],"970":["Glimmora","rock/poison",[83,130,86,86]],"978":["Tatsugiri","dragon/water",[68,120,78,82]],"996":["Frigibax","dragon/ice",[65,75,45,55],[997,35]],"997":["Arctibax","dragon/ice",[90,95,66,62],[998,54]],"998":["Baxcalibur","dragon/ice",[115,145,89,87]]});
const BX={"floresta":[[13,16,35,69,333,396,427,459,543,669,767,951],[14,17,70,115,127,397,531,544,780],[15,18,36,71,398,428,460,545,670,768,952],[3,115,127,212,214,460,254,531,18,428,15,36,71,154,545,652,670,780,398,768,952]],"vulcao":[[147,307,322,371,739,996],[148,372,448,701,870,978,997],[149,308,323,334,373,668,740,998],[380,381,384,485,718,6,257,308,445,448,334,323,373,149,500,655,668,701,870,740,978,998]],"lago":[[79,120,318,361],[],[80,121,319,362,478],[382,9,130,260,319,80,362,121,160,478,658]],"usina":[[63,280,304,309,374,602,677],[64,227,281,303,305,358,375,603],[65,282,306,310,376,475,604,678],[150,801,807,65,181,282,303,306,310,475,208,376,227,604,26,358,678]],"caverna":[[92,353,529,559,607,622,686,688,690,969],[93,142,302,359,608],[94,354,530,560,609,623,687,689,691,970],[383,491,719,94,142,229,248,354,359,302,530,560,609,687,689,691,623,970]]};
const LEGEND=new Set([150, 380, 381, 382, 383, 384, 485, 491, 718, 719, 801, 807]);
const MEGA={"10033":[3,"Mega Venusaur","grass/poison",[80,122,122,80],"0001",0,1,"Pedra Mega de Venusaur",0],"10034":[6,"Mega Charizard X","fire/dragon",[78,130,98,100],"0001",1,1,"Pedra Mega de Charizard X",1],"10035":[6,"Mega Charizard Y","fire/flying",[78,159,96,100],"0002",0,1,"Pedra Mega de Charizard Y",0],"10036":[9,"Mega Blastoise","water",[79,135,118,78],"0001",0,1,"Pedra Mega de Blastoise",0],"10037":[65,"Mega Alakazam","psychic",[55,175,85,150],"0001",1,1,"Pedra Mega de Alakazam",1],"10038":[94,"Mega Gengar","ghost/poison",[60,170,88,130],"0001",1,1,"Pedra Mega de Gengar",1],"10039":[115,"Mega Kangaskhan","normal",[105,125,100,100],"0001",1,0,"Pedra Mega de Kangaskhan",1],"10040":[127,"Mega Pinsir","bug/flying",[65,155,105,105],"0001",0,1,"Pedra Mega de Pinsir",0],"10041":[130,"Mega Gyarados","water/dark",[95,155,120,81],"0001",0,1,"Pedra Mega de Gyarados",0],"10042":[142,"Mega Aerodactyl","rock/flying",[80,135,90,150],"0001",1,1,"Pedra Mega de Aerodactyl",1],"10043":[150,"Mega Mewtwo X","psychic/fighting",[106,190,100,130],"0001",0,1,"Pedra Mega de Mewtwo X",0],"10044":[150,"Mega Mewtwo Y","psychic",[106,194,95,140],"0002",1,1,"Pedra Mega de Mewtwo Y",1],"10045":[181,"Mega Ampharos","electric/dragon",[90,165,108,45],"0001",0,1,"Pedra Mega de Ampharos",0],"10046":[212,"Mega Scizor","bug/steel",[70,150,120,75],"0001",0,1,"Pedra Mega de Scizor",0],"10047":[214,"Mega Heracross","bug/fighting",[80,185,110,75],"0001",0,1,"Pedra Mega de Heracross",0],"10048":[229,"Mega Houndoom","dark/fire",[75,140,90,115],"0001",1,1,"Pedra Mega de Houndoom",1],"10049":[248,"Mega Tyranitar","rock/dark",[100,164,135,71],"0001",1,1,"Pedra Mega de Tyranitar",0],"10050":[257,"Mega Blaziken","fire/fighting",[80,160,80,100],"0001",0,1,"Pedra Mega de Blaziken",0],"10051":[282,"Mega Gardevoir","psychic/fairy",[68,165,100,100],"0001",1,1,"Pedra Mega de Gardevoir",1],"10052":[303,"Mega Mawile","steel/fairy",[50,105,110,50],"0001",1,1,"Pedra Mega de Mawile",1],"10053":[306,"Mega Aggron","steel",[70,140,155,50],"0001",0,1,"Pedra Mega de Aggron",0],"10054":[308,"Mega Medicham","fighting/psychic",[60,100,85,100],"0001",1,1,"Pedra Mega de Medicham",0],"10055":[310,"Mega Manectric","electric",[70,135,80,135],"0001",1,1,"Pedra Mega de Manectric",1],"10056":[354,"Mega Banette","ghost",[64,165,79,75],"0001",1,1,"Pedra Mega de Banette",1],"10057":[359,"Mega Absol","dark",[65,150,60,115],"0001",1,1,"Pedra Mega de Absol",1],"10058":[445,"Mega Garchomp","dragon/ground",[108,170,105,92],"0001",0,1,"Pedra Mega de Garchomp",0],"10059":[448,"Mega Lucario","fighting/steel",[70,145,79,112],"0001",1,1,"Pedra Mega de Lucario",1],"10060":[460,"Mega Abomasnow","grass/ice",[90,132,105,30],"0001",0,1,"Pedra Mega de Abomasnow",0],"10062":[380,"Mega Latias","dragon/psychic",[80,140,135,110],"0001",1,1,"Pedra Mega de Latias",1],"10063":[381,"Mega Latios","dragon/psychic",[80,160,110,110],"0001",1,1,"Pedra Mega de Latios",1],"10064":[260,"Mega Swampert","water/ground",[100,150,110,70],"0001",0,1,"Pedra Mega de Swampert",0],"10065":[254,"Mega Sceptile","grass/dragon",[70,145,80,145],"0001",1,1,"Pedra Mega de Sceptile",1],"10066":[302,"Mega Sableye","dark/ghost",[50,85,120,20],"0001",1,1,"Pedra Mega de Sableye",1],"10067":[334,"Mega Altaria","dragon/fairy",[75,110,108,80],"0001",1,1,"Pedra Mega de Altaria",1],"10068":[475,"Mega Gallade","psychic/fighting",[68,165,105,110],"0001",1,1,"Pedra Mega de Gallade",1],"10069":[531,"Mega Audino","normal/fairy",[103,80,126,50],"0001",0,1,"Pedra Mega de Audino",0],"10070":[319,"Mega Sharpedo","water/dark",[70,140,68,105],"0001",1,1,"Pedra Mega de Sharpedo",1],"10071":[80,"Mega Slowbro","water/psychic",[95,130,130,30],"0002",1,1,"Pedra Mega de Slowbro",1],"10072":[208,"Mega Steelix","steel/ground",[75,125,162,30],"0001",1,1,"Pedra Mega de Steelix",1],"10073":[18,"Mega Pidgeot","normal/flying",[83,135,80,121],"0001",0,1,"Pedra Mega de Pidgeot",0],"10074":[362,"Mega Glalie","ice",[80,120,80,100],"0001",1,1,"Pedra Mega de Glalie",1],"10075":[719,"Mega Diancie","rock/fairy",[50,160,110,110],"0001",1,1,"Pedra Mega de Diancie",1],"10076":[376,"Mega Metagross","steel/psychic",[80,145,130,110],"0001",0,1,"Pedra Mega de Metagross",0],"10077":[382,"Primal Kyogre","water",[100,180,125,90],"0001",1,1,"Orbe Azul",1],"10078":[383,"Primal Groudon","ground/fire",[100,180,125,90],"0001",1,1,"Orbe Vermelha",1],"10079":[384,"Mega Rayquaza","dragon/flying",[105,180,100,115],"0001",1,1,"Pedra Mega de Rayquaza",1],"10087":[323,"Mega Camerupt","fire/ground",[70,145,102,20],"0001",1,1,"Pedra Mega de Camerupt",1],"10088":[428,"Mega Lopunny","normal/fighting",[65,136,95,135],"0001",1,1,"Pedra Mega de Lopunny",1],"10089":[373,"Mega Salamence","dragon/flying",[95,145,110,120],"0001",0,1,"Pedra Mega de Salamence",0],"10090":[15,"Mega Beedrill","bug/poison",[65,150,60,145],"0001",0,1,"Pedra Mega de Beedrill",0],"10278":[36,"Mega Clefable","fairy/flying",[95,135,102,70],"0001",0,1,"Pedra Mega de Clefable",0],"10279":[71,"Mega Victreebel","grass/poison",[80,135,90,70],"0001",0,1,"Pedra Mega de Victreebel",0],"10280":[121,"Mega Starmie","water/psychic",[60,130,105,120],"0001",0,1,"Pedra Mega de Starmie",0],"10281":[149,"Mega Dragonite","dragon/flying",[91,145,120,100],"0001",0,1,"Pedra Mega de Dragonite",0],"10282":[154,"Mega Meganium","grass/fairy",[80,143,115,80],"0001",0,1,"Pedra Mega de Meganium",0],"10283":[160,"Mega Feraligatr","water/dragon",[85,160,109,78],"0001",0,1,"Pedra Mega de Feraligatr",0],"10284":[227,"Mega Skarmory","steel/flying",[65,140,105,110],"0001",1,1,"Pedra Mega de Skarmory",0],"10285":[478,"Mega Froslass","ice/ghost",[70,140,85,120],"0001",0,1,"Pedra Mega de Froslass",0],"10286":[500,"Mega Emboar","fire/fighting",[110,148,92,75],"0001",0,1,"Pedra Mega de Emboar",0],"10287":[530,"Mega Excadrill","ground/steel",[110,165,82,103],"0001",1,1,"Pedra Mega de Excadrill",1],"10288":[545,"Mega Scolipede","bug/poison",[60,140,124,62],"0001",0,1,"Pedra Mega de Scolipede",0],"10289":[560,"Mega Scrafty","dark/fighting",[65,130,135,68],"0001",1,1,"Pedra Mega de Scrafty",1],"10290":[604,"Mega Eelektross","electric",[85,145,85,80],"0001",1,1,"Pedra Mega de Eelektross",1],"10291":[609,"Mega Chandelure","ghost/fire",[60,175,110,90],"0001",0,1,"Pedra Mega de Chandelure",0],"10292":[652,"Mega Chesnaught","grass/fighting",[88,137,144,44],"0001",0,1,"Pedra Mega de Chesnaught",0],"10293":[655,"Mega Delphox","fire/psychic",[75,159,98,134],"0001",0,1,"Pedra Mega de Delphox",0],"10294":[658,"Mega Greninja","water/dark",[72,133,79,142],"0002",0,1,"Pedra Mega de Greninja",0],"10295":[668,"Mega Pyroar","fire/normal",[86,129,89,126],"0001",0,1,"Pedra Mega de Pyroar",0],"10296":[670,"Mega Floette","fairy",[74,155,118,102],"0006",1,1,"Pedra Mega de Floette",1],"10297":[687,"Mega Malamar","dark/psychic",[86,102,104,88],"0001",0,1,"Pedra Mega de Malamar",0],"10298":[689,"Mega Barbaracle","rock/fighting",[72,140,118,88],"0001",0,1,"Pedra Mega de Barbaracle",0],"10299":[691,"Mega Dragalge","poison/dragon",[65,132,134,44],"0001",1,1,"Pedra Mega de Dragalge",1],"10300":[701,"Mega Hawlucha","fighting/flying",[78,137,96,118],"0001",1,1,"Pedra Mega de Hawlucha",1],"10301":[718,"Mega Zygarde","dragon/ground",[216,216,88,100],"0005",1,1,"Pedra Mega de Zygarde",1],"10302":[780,"Mega Drampa","normal/dragon",[78,160,113,36],"0001",1,1,"Pedra Mega de Drampa",1],"10303":[870,"Mega Falinks","fighting",[65,135,100,100],"0001",0,1,"Pedra Mega de Falinks",0],"10304":[26,"Mega Raichu X","electric",[60,135,95,110],"0002",0,1,"Pedra Mega de Raichu X",0],"10305":[26,"Mega Raichu Y","electric",[60,160,68,130],"0003",0,1,"Pedra Mega de Raichu Y",0],"10306":[358,"Mega Chimecho","psychic/steel",[75,135,115,65],"0001",1,1,"Pedra Mega de Chimecho",1],"10307":[359,"Mega Absol Z","dark/ghost",[65,154,60,151],"0002",0,1,"Pedra Mega de Absol Z",0],"10308":[398,"Mega Staraptor","fighting/flying",[85,140,95,110],"0001",0,1,"Pedra Mega de Staraptor",0],"10309":[445,"Mega Garchomp Z","dragon",[108,141,85,151],"0002",0,1,"Pedra Mega de Garchomp Z",0],"10310":[448,"Mega Lucario Z","fighting/steel",[70,164,70,151],"0002",0,1,"Pedra Mega de Lucario Z",0],"10311":[485,"Mega Heatran","fire/steel",[91,175,124,67],"0001",0,1,"Pedra Mega de Heatran",0],"10312":[491,"Mega Darkrai","dark",[70,165,130,85],"0002",1,1,"Pedra Mega de Darkrai",0],"10313":[623,"Mega Golurk","ground/ghost",[89,159,105,55],"0001",0,1,"Pedra Mega de Golurk",0],"10314":[678,"Mega Meowstic","psychic",[74,143,88,124],"0001",0,1,"Pedra Mega de Meowstic",0],"10315":[740,"Mega Crabominable","fighting/ice",[97,157,114,33],"0001",0,1,"Pedra Mega de Crabominable",0],"10316":[768,"Mega Golisopod","bug/steel",[75,150,148,40],"0001",0,1,"Pedra Mega de Golisopod",0],"10317":[801,"Mega Magearna","steel/fairy",[80,170,115,95],"0002",0,1,"Pedra Mega de Magearna",0],"10319":[807,"Mega Zeraora","electric",[88,157,78,153],"0001",1,1,"Pedra Mega de Zeraora",1],"10320":[952,"Mega Scovillain","grass/fire",[65,138,85,75],"0001",0,1,"Pedra Mega de Scovillain",0],"10321":[970,"Mega Glimmora","rock/poison",[83,150,100,101],"0001",0,1,"Pedra Mega de Glimmora",0],"10322":[978,"Mega Tatsugiri","dragon/water",[68,135,108,92],"0003",1,1,"Pedra Mega de Tatsugiri",1],"10325":[998,"Mega Baxcalibur","dragon/ice",[115,175,109,87],"0001",0,1,"Pedra Mega de Baxcalibur",0]};

const PMD='https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/',ITEM='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';
const TYPE_COLOR={normal:'#a8a77a',fire:'#ee8130',water:'#6390f0',electric:'#f7d02c',grass:'#7ac74c',ice:'#96d9d6',fighting:'#c22e28',poison:'#a33ea1',ground:'#e2bf65',flying:'#a98ff3',psychic:'#f95587',bug:'#a6b91a',rock:'#b6a136',ghost:'#735797',dragon:'#6f35fc',dark:'#705746',steel:'#b7b7ce',fairy:'#d685ad'};
const CH={normal:{rock:.5,ghost:0,steel:.5},fire:{fire:.5,water:.5,grass:2,ice:2,bug:2,rock:.5,dragon:.5,steel:2},water:{fire:2,water:.5,grass:.5,ground:2,rock:2,dragon:.5},electric:{water:2,electric:.5,grass:.5,ground:0,flying:2,dragon:.5},grass:{fire:.5,water:2,grass:.5,poison:.5,ground:2,flying:.5,bug:.5,rock:2,dragon:.5,steel:.5},ice:{fire:.5,water:.5,grass:2,ice:.5,ground:2,flying:2,dragon:2,steel:.5},fighting:{normal:2,ice:2,poison:.5,flying:.5,psychic:.5,bug:.5,rock:2,ghost:0,dark:2,steel:2,fairy:.5},poison:{grass:2,poison:.5,ground:.5,rock:.5,ghost:.5,steel:0,fairy:2},ground:{fire:2,electric:2,grass:.5,poison:2,flying:0,bug:.5,rock:2,steel:2},flying:{electric:.5,grass:2,fighting:2,bug:2,rock:.5,steel:.5},psychic:{fighting:2,poison:2,psychic:.5,dark:0,steel:.5},bug:{fire:.5,grass:2,fighting:.5,poison:.5,flying:.5,psychic:2,ghost:.5,dark:2,steel:.5,fairy:.5},rock:{fire:2,ice:2,fighting:.5,ground:.5,flying:2,bug:2,steel:.5},ghost:{normal:0,psychic:2,ghost:2,dark:.5},dragon:{dragon:2,steel:.5,fairy:0},dark:{fighting:.5,psychic:2,ghost:2,dark:.5,fairy:.5},steel:{fire:.5,water:.5,electric:.5,ice:2,rock:2,steel:.5,fairy:2},fairy:{fire:.5,fighting:2,poison:.5,dragon:2,dark:2,steel:.5}};
const S={},PREV={};
for(const k in D){if(!META[k])continue;const [n,t,s,e]=D[k];S[k]={n,t:t.split('/'),s:s||null,e:e||null}}
for(const k in S){const e=S[k].e;if(e&&!S[e[0]])S[k].e=null;else if(e)PREV[e[0]]=+k}
const NSP=Object.keys(S).length;
// formas mega: entram em S/META com id próprio (o da PokeAPI); sem sprite próprio usam o da espécie
// evoluções que faltavam (pedra/troca nos jogos, aqui por nível)
for(const [a,b,l] of [[25,26,30],[37,38,30],[58,59,32],[95,208,40],[123,212,35],[82,462,45]])if(S[a]&&S[b]&&!S[a].e){S[a].e=[b,l];PREV[b]=a}
const MEGAS={};
for(const k in MEGA){const [sp,n,t,s,form,spr]=MEGA[k];if(!S[sp]||!META[sp]){delete MEGA[k];continue}
  if(!META[k])META[k]={a:META[sp].a,sh:META[sp].sh,alias:sp};
  S[k]={n,t:t.split('/'),s,e:null,mega:sp};PREV[k]=sp;(MEGAS[sp]||(MEGAS[sp]=[])).push(+k)}
const pickWild=list=>{let id;for(let i=0;i<20;i++){id=list[Math.floor(Math.random()*list.length)];if(!LEGEND.has(id)||Math.random()<.04)break}return id};

function baseStats(id){return S[id].s||baseStats(PREV[id]).map(x=>Math.round(x*1.3))}
const STARTERS=[['Kanto',[1,4,7]],['Johto',[152,155,158]],['Hoenn',[252,255,258]],['Sinnoh',[387,390,393]],['Unova',[495,498,501]],['Kalos',[650,653,656]],['Alola',[722,725,728]],['Galar',[810,813,816]],['Paldea',[906,909,912]]];
const BIOMES={
 floresta:{n:'Floresta',tiers:[[2,12,[10,43,761,540,672]],[14,30,[12,44,762,541,123,214]],[32,55,[45,763,542,673,212]]]},
 vulcao:{n:'Vulcão',tiers:[[2,12,[37,58,77,218,667,850]],[14,30,[126,228,324,757,851]],[32,55,[38,59,78,219,229,758]]]},
 lago:{n:'Lago',tiers:[[2,12,[129,54,194,183,418]],[14,30,[130,195,184,419,131,320]],[32,55,[55,321,134,350,131]]]},
 usina:{n:'Usina',tiers:[[2,12,[25,81,179,403,595,835]],[14,30,[180,404,82,125,479,836]],[32,55,[181,405,596,135,26,462]]]},
 caverna:{n:'Caverna',tiers:[[2,12,[74,95,246,744,524,443]],[14,30,[75,525,444,247,745,111]],[32,55,[445,248,112,76,208]]]}
};
for(const b in BX)BX[b].forEach((l,i)=>{const L=l.filter(id=>S[id]);if(i<3){const T=BIOMES[b].tiers[i][2];for(const id of L)if(!T.includes(id))T.push(id)}else BIOMES[b].tiers.push([58,80,L])});
const BALLS={poke:{n:'Poké Ball',f:'poke-ball',p:20,m:1},great:{n:'Great Ball',f:'great-ball',p:60,m:1.5},ultra:{n:'Ultra Ball',f:'ultra-ball',p:150,m:2.2}};
const CATCH=[.45,.30,.15,.10],SHINY=1/400;
const pad=id=>String(id).padStart(4,'0');
const fdir=id=>MEGA[id]?pad(MEGA[id][0])+'/'+MEGA[id][4]+'/':pad(id)+'/',shd=id=>MEGA[id]?'0001/':'0000/0001/';
const portrait=(id,sh)=>MEGA[id]&&!MEGA[id][6]?portrait(MEGA[id][0],sh):PMD+'portrait/'+fdir(id)+(sh?shd(id):'')+'Normal.png';
const icon=n=>ITEM+n+'.png';

// ===== sprites PMD =====
const SHEETS={};
function sheet(id,sh,role){
  const m=META[id].a[role];id=META[id].alias||id;sh=sh&&META[id].sh;const key=id+'|'+(sh?1:0)+'|'+m[0];
  if(!SHEETS[key]){const im=new Image();im.crossOrigin='anonymous';im.src=PMD+'sprite/'+fdir(id)+(sh?shd(id):'')+m[0]+'-Anim.png';
    if(sh)im.onerror=()=>{META[id].sh=false};SHEETS[key]=im}
  return SHEETS[key];
}
const FOOT={};
function foot(id){ // distância do centro do quadro até os pés, medida no 1º quadro do Idle
  if(FOOT[id]!==undefined)return FOOT[id];
  if(META[id].alias)return foot(META[id].alias);
  const im=sheet(id,false,'Idle'),m=META[id].a.Idle;
  if(!im.complete||!im.naturalWidth)return m[2]*.3;
  try{const c=document.createElement('canvas');c.width=m[1];c.height=m[2];const g=c.getContext('2d');g.drawImage(im,0,0,m[1],m[2],0,0,m[1],m[2]);
    const d=g.getImageData(0,0,m[1],m[2]).data;let low=m[2]-1;
    outer:for(let y=m[2]-1;y>=0;y--)for(let x=0;x<m[1];x++)if(d[(y*m[1]+x)*4+3]>40){low=y;break outer}
    FOOT[id]=low-m[2]/2}catch(e){FOOT[id]=m[2]*.3}
  return FOOT[id];
}
const ROWMAP=[2,1,0,7,6,5,4,3];
const dirOf=(dx,dy)=>dx>=0?2:6;

// ===== estado salvo =====
let G;
function fresh(){return{gold:500,balls:{poke:25,great:0,ultra:0},pots:5,team:[],depot:[],active:0,biome:'floresta',tier:0,dex:{},kills:0,auto:{hunt:true,moves:true,throw:true,ball:'poke',pot:true,merge:true},items:{rare:0},boss:{},lastSeen:Date.now(),speed:1}}
try{G=JSON.parse(localStorage.getItem('hunt_pmd_v1'))}catch(e){}
if(!G||!G.team)G=fresh();
if(G.auto.moves===undefined)G.auto.moves=true;if(G.auto.mega===undefined)G.auto.mega=true;G.arena=G.arena||{best:0,wins:{}};G.tower=G.tower||{best:0};G.rank=G.rank||{pts:0,w:0,l:0,streak:0};if(G.auto.sp===undefined)G.auto.sp=true;G.items.stones=G.items.stones||{};for(const m of [...(G.team||[]),...(G.depot||[])])delete m.mega;if(G.auto.sound===undefined)G.auto.sound=true;G.stats=G.stats||{caught:0,bosses:0,moves:0};G.metas=G.metas||{};if(G.tut===undefined)G.tut=G.team.length?4:0;if(G.auto.merge===undefined)G.auto.merge=true;G.items=G.items||{rare:0};G.boss=G.boss||{};
for(const m of [...G.team,...G.depot])if(!S[m.id])m.id=4;
const save=()=>{if(!document.hidden&&!awayOpen)G.lastSeen=Date.now();if(MODE==='arena')return;try{localStorage.setItem('hunt_pmd_v1',JSON.stringify(G,(k,v)=>k==='mega'?undefined:v))}catch(e){}};

function mk(id,lvl,shiny,q){const m={u:Math.random().toString(36).slice(2),id,lvl,xp:0,shiny:!!shiny,q:q||+(0.9+Math.random()*0.2).toFixed(2)};m.hp=calc(m).hp;return m}
function calc(m,wild){const b=baseStats(m.mega||m.id),L=m.lvl,q=(m.q||1)*(1+.08*(m.b||0));
  return{hp:Math.floor((Math.floor(2*b[0]*L/100)+L+10)*q),atk:(Math.floor(2*b[1]*L/100)+5)*q*(wild?.85:(G.team.includes(m)?amuM('dmg'):1)),def:(Math.floor(2*b[2]*L/100)+5)*q,spe:b[3]}}
const need=L=>Math.floor(1.2*Math.pow(L,2.5)*(1+L/15))+20;
const cooldown=spe=>Math.max(700,1800-spe*7);
function eff(a,d){let best=0;for(const x of a){let m=1;for(const y of d){const v=CH[x][y];if(v!==undefined)m*=v}if(m>best)best=m}return best}
const maxLvl=()=>Math.max(1,...G.team.map(m=>m.lvl));
const tierOpen=(b,i)=>maxLvl()>=BIOMES[b].tiers[i][0]-2;

// ===== canvas e mundo =====
const $=id=>document.getElementById(id);
const cv=$('cv'),ctx=cv.getContext('2d');
let MODE='hunt';
let VW=360,VH=400,SC=1.6,DPR=1,cam=0,K=3,LW=120,LH=150,GL=84,LANE_T=300,LANE_B=480,LAYERS=null;
const lc=document.createElement('canvas'),lg=lc.getContext('2d'),TW=256;
function resize(){const r=$('stage').getBoundingClientRect();VW=r.width;VH=r.height;DPR=Math.min(2,window.devicePixelRatio||1);
  document.documentElement.style.setProperty('--tabsH',($('tabs').offsetHeight+6)+'px');cv.width=Math.round(VW*DPR);cv.height=Math.round(VH*DPR);
  LH=190;K=VH/LH;LW=Math.ceil(VW/K);GL=Math.round(LH*.54);lc.width=LW;lc.height=LH;
  SC=Math.max(1.8,Math.min(3,VH/150*.68));LANE_T=GL*K+16*SC;LANE_B=VH-9*SC;buildBG();if(MODE==='ax')SC=clamp(Math.min(VW,VH)/230,1.4,2.2)}
const laneMid=()=>(LANE_T+LANE_B)/2,laneRnd=()=>LANE_T+Math.random()*(LANE_B-LANE_T);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// cenário em camadas, pintado por código em baixa resolução e repetido em parallax
function layerC(fn){const c=document.createElement('canvas');c.width=TW;c.height=LH;const x=c.getContext('2d');fn(x);return c}
const wave=(x,k,ph)=>Math.sin(2*Math.PI*x*k/TW+ph);
function blob(x,cx,cy,rw,rh,col){x.fillStyle=col;for(let y=-rh;y<=rh;y++){const w=Math.round(rw*Math.sqrt(Math.max(0,1-(y*y)/(rh*rh))));x.fillRect(cx-w,cy+y,w*2+1,1)}}
function tree(x,cx,base,s,dark,light){x.fillStyle='#4a3325';x.fillRect(cx-1,base-6*s,2,6*s);blob(x,cx,base-9*s,5*s,5*s,dark);blob(x,cx-1,base-10*s,3*s,3*s,light)}
// ---- pincéis de pixel art ----
function srnd(seed){let s=seed%2147483647||7;return()=>(s=(s*16807)%2147483647)/2147483647}
function shadeBlob(x,cx,cy,rw,rh,C){blob(x,cx,cy,rw,rh,C[0]);blob(x,cx-Math.round(rw*.15),cy-Math.round(rh*.18),Math.round(rw*.82),Math.round(rh*.8),C[1]);blob(x,cx-Math.round(rw*.35),cy-Math.round(rh*.42),Math.max(1,Math.round(rw*.4)),Math.max(1,Math.round(rh*.36)),C[2])}
function cloud(x,cx,cy,w){const h=Math.round(w*.32);blob(x,cx,cy+2,w,h,'#c7d4e6');blob(x,cx-Math.round(w*.4),cy+1,Math.round(w*.55),Math.round(h*.85),'#f4f4f4');blob(x,cx+Math.round(w*.35),cy,Math.round(w*.6),Math.round(h*.9),'#f4f4f4');blob(x,cx,cy-Math.round(h*.5),Math.round(w*.5),h,'#ffffff')}
function ridge(x,base,hf,C,snow){for(let i=0;i<TW;i++){const h=Math.round(hf(i)),hn=hf(i+1);x.fillStyle=hn>h?C[1]:C[0];x.fillRect(i,base-h,1,h);if(snow&&h>snow){x.fillStyle='#f4f4f4';x.fillRect(i,base-h,1,Math.min(4,h-snow))}}}
function tree2(x,cx,base,s,C,r){x.fillStyle='#3b2a22';x.fillRect(cx-s,base-9*s,s*2,9*s);x.fillStyle='#5a3f30';x.fillRect(cx-s,base-9*s,s,9*s);
  shadeBlob(x,cx,base-13*s,7*s,6*s,C);shadeBlob(x,cx-5*s,base-10*s,4*s,4*s,C);shadeBlob(x,cx+5*s,base-10*s,4*s,4*s,C);
  x.fillStyle=C[2];for(let k=0;k<6*s;k++)x.fillRect(cx-6*s+Math.floor(r()*12*s),base-18*s+Math.floor(r()*10*s),1,1)}
function bricks(x,x0,y0,w,h,C,r,moss){x.fillStyle=C[3];x.fillRect(x0,y0,w,h);for(let y=y0;y<y0+h;y+=4){const off=((y-y0)/4)%2?3:0;for(let xx=x0-off;xx<x0+w;xx+=7){const bx=Math.max(x0,xx),bw=Math.min(x0+w,xx+6)-bx;if(bw<=0)continue;
    x.fillStyle=C[r()<.25?0:r()<.5?2:1];x.fillRect(bx,y,bw,Math.min(3,y0+h-y));x.fillStyle=C[0];x.fillRect(bx,y,bw,1)}}
  if(moss)for(let k=0;k<w*h/30;k++){x.fillStyle=r()<.5?'#5a8a3a':'#3e6b2f';x.fillRect(x0+Math.floor(r()*w),y0+Math.floor(r()*h*.6),2,1)}}
function ruin(x,x0,base,r){const C=['#a8b5c8','#8b9bb4','#6b7a99','#3b4252'];
  bricks(x,x0,base-58,22,58,C,r,1);for(let k=0;k<22;k+=6){x.fillStyle=C[3];x.fillRect(x0+k,base-63,4,5);x.fillStyle=C[1];x.fillRect(x0+k,base-63,4,1)}
  x.fillStyle='#1a1c2c';x.fillRect(x0+7,base-40,6,9);x.fillRect(x0+8,base-41,4,1);x.fillRect(x0+8,base-20,6,20);x.fillRect(x0+9,base-21,4,1);
  bricks(x,x0+22,base-28,40,28,C,r,1);x.fillStyle='#5a8a3a';for(let a=0;a<3;a++){const ax=x0+28+a*12;x.clearRect(ax,base-20,8,20);x.clearRect(ax+1,base-22,6,2);x.clearRect(ax+2,base-23,4,1)}
  for(let k=0;k<5;k++){x.fillStyle=C[2];x.fillRect(x0+62+k*3,base-6-k*2,3,6+k*2)}
  x.fillStyle='#2b2d42';x.fillRect(x0+5,base-78,1,16);x.fillStyle='#b13e53';x.fillRect(x0+6,base-78,6,4);x.fillStyle='#ffcd75';x.fillRect(x0+7,base-77,2,1)}
function bush(x,cx,base,s,C){shadeBlob(x,cx,base-3*s,5*s,3*s,C);shadeBlob(x,cx+4*s,base-2*s,3*s,2*s,C)}
function rock(x,cx,base,w,C){blob(x,cx,base-Math.round(w*.4),w,Math.round(w*.55),C[0]);blob(x,cx-1,base-Math.round(w*.5),Math.round(w*.7),Math.round(w*.35),C[1]);x.fillStyle=C[2];x.fillRect(cx-Math.round(w*.4),base-Math.round(w*.75),Math.round(w*.4),1)}
function buildBG(){
  const B=MODE==='arena'?'arena':G.biome,H=LH,Y=GL,L={},r=srnd(B.length*977+13);
  const SK={floresta:['#3b8fe6','#5fb2f2','#8fd3fa','#c7f0ff'],vulcao:['#1a1023','#3a1730','#6b2235','#b13e53'],lago:['#3b6fd9','#5a9cf0','#8cc8fa','#d6f3ff'],usina:['#0e0f1d','#1a1c38','#29366f','#5d4a8a'],caverna:['#08080f','#0e0f1d','#151726','#1d1f30'],arena:['#0e0f1d','#1a1c2c','#222845','#29366f']}[B];
  L.sky=layerC(x=>{for(let y=0;y<H;y++){const k=y/Y,i=k<.3?0:k<.55?1:k<.8?2:3;x.fillStyle=SK[i];x.fillRect(0,y,TW,1);if(i<3&&(y%2===0)&&((k*10)%1)>.8){x.fillStyle=SK[i+1];for(let xx=y%4;xx<TW;xx+=4)x.fillRect(xx,y,1,1)}}
    if(B==='floresta'||B==='lago'){cloud(x,40,18,16);cloud(x,150,12,22);cloud(x,220,26,12);cloud(x,100,34,9)}
    if(B==='vulcao'){x.fillStyle='#4a2430';for(const [cx,cy,w] of [[50,20,30],[170,14,40]]){blob(x,cx,cy,w,5,'#3a1a28');blob(x,cx+6,cy-2,w*.6|0,3,'#5a2a35')}}
    if(B==='usina'||B==='arena'||B==='vulcao'){for(let k=0;k<40;k++){x.fillStyle=r()<.2?'#ffcd75':'#f4f4f4';x.fillRect(Math.floor(r()*TW),Math.floor(r()*Y*.5),1,1)}}
    if(B==='usina'){blob(x,200,16,7,7,'#fff3c4');blob(x,202,15,6,6,'#1a1c38')}});
  L.far=layerC(x=>{
    if(B==='floresta'){ridge(x,Y-14,i=>44+12*wave(i,2,0)+6*wave(i,5,1),['#6b8fc0','#8aaad4']);ridge(x,Y-4,i=>26+8*wave(i,3,2)+4*wave(i,7,0),['#3f7a6a','#4f8f78'])}
    if(B==='vulcao'){ridge(x,Y,i=>{const d=Math.abs(i-128);return Math.max(18+5*wave(i,3,0),84-d*.8)},['#2a1520','#3d1d28']);x.fillStyle='#ef7d57';x.fillRect(119,Y-85,18,3);x.fillStyle='#ffcd75';x.fillRect(123,Y-85,10,2);
      for(let k=0;k<14;k++){blob(x,128+Math.round(Math.sin(k)*4)+k,Y-92-k*5,6+k,4+Math.floor(k/3),k<4?'#5a3a40':'#3a2a35')}
      for(let k=0;k<8;k++){x.fillStyle='#ef7d57';x.fillRect(122+Math.floor(r()*12),Y-82+k*9,1,6)}}
    if(B==='lago'){ridge(x,Y-16,i=>52+16*wave(i,2,.5)+6*wave(i,7,2),['#7d93b8','#a3b8d6'],58);ridge(x,Y-14,i=>22+6*wave(i,4,1),['#3e7a5a','#4f9068'])}
    if(B==='usina'){for(const [px,w,h] of [[4,22,40],[30,16,62],[50,30,34],[84,18,50],[108,26,70],[140,20,44],[166,30,56],[200,18,38],[222,30,48]]){x.fillStyle='#1f2440';x.fillRect(px,Y-h,w,h);x.fillStyle='#29305a';x.fillRect(px,Y-h,2,h);
        for(let wy=Y-h+3;wy<Y-3;wy+=4)for(let wx=px+3;wx<px+w-2;wx+=3)if(r()<.45){x.fillStyle=r()<.8?'#ffcd75':'#73eff7';x.fillRect(wx,wy,1,2)}}}
    if(B==='caverna'){x.fillStyle='#151726';for(let i=0;i<TW;i++){const h=14+10*wave(i,4,0)+8*Math.abs(wave(i,11,1));x.fillRect(i,0,1,h+10)}
      for(let k=0;k<14;k++){const px=Math.floor(r()*TW),l=8+Math.floor(r()*16);for(let q=0;q<l;q++){x.fillStyle=q<l*.6?'#29233a':'#3b2f4a';x.fillRect(px+Math.floor(q/l*2),20+q,Math.max(1,3-Math.floor(q/l*3)),1)}}
      ridge(x,Y,i=>30+10*wave(i,3,2)+5*wave(i,9,1),['#1d1a2a','#29233a'])}
    if(B==='arena'){const rows=Math.floor((Y-16)/7);for(let k=0;k<rows;k++){const y0=Y-16-(k+1)*7;x.fillStyle=k%2?'#262b44':'#1f2238';x.fillRect(0,y0,TW,7);x.fillStyle='#0e0f1d';x.fillRect(0,y0+6,TW,1);
        const dim=k>rows*.55;for(let i=1;i<TW;i+=3){if(r()<.12)continue;const c=['#ef7d57','#ffcd75','#73eff7','#a7f070','#f4f4f4','#b13e53','#41a6f6'][Math.floor(r()*7)];
          x.fillStyle=dim?'#3b4252':c;x.fillRect(i,y0+2+(r()<.3?-1:0),2,2);x.fillStyle=dim?'#2b3140':'#566c86';x.fillRect(i,y0+4,2,2)}}
      for(const px of [40,168]){x.fillStyle='#566c86';x.fillRect(px,0,4,18);x.fillStyle='#f4f4f4';x.fillRect(px-6,18,16,4);x.fillStyle='#fff3c4';x.fillRect(px-4,22,12,1)}
      x.fillStyle='#0e0f1d';x.fillRect(0,Y-16,TW,4)}});
  L.mid=layerC(x=>{
    if(B==='floresta'){const C=['#1f5f46','#2f8a52','#5ab552'];ruin(x,150,Y-2,r);for(const p of [14,46,82,118,236])tree2(x,p,Y-2,2,C,r);bush(x,70,Y-1,2,C);bush(x,226,Y-1,2,C)}
    if(B==='vulcao'){for(const p of [10,58,96,170,214]){const h=20+Math.floor(r()*22);for(let k=0;k<3;k++){x.fillStyle=k===1?'#3d2323':'#2a1717';x.fillRect(p+k*4,Y-h+k*3,4,h-k*3)}x.fillStyle='#57302c';x.fillRect(p,Y-h,12,1)}
      x.fillStyle='#ef7d57';for(let i=0;i<TW;i++)if(wave(i,9,1)>.85)x.fillRect(i,Y-3,1,3)}
    if(B==='lago'){x.fillStyle='#2f58b8';x.fillRect(0,Y-22,TW,22);for(let y=Y-22;y<Y;y+=3){x.fillStyle=y%6?'#4a7fe0':'#73a8f0';for(let i=(y*7)%11;i<TW;i+=11+(y%5))x.fillRect(i,y,4,1)}
      x.fillStyle='#5a3f30';x.fillRect(180,Y-12,50,3);for(let k=0;k<5;k++)x.fillRect(184+k*11,Y-12,2,12);
      for(const p of [20,60,130,240]){x.fillStyle='#3e7a3a';for(let k=0;k<5;k++)x.fillRect(p+k*2,Y-6-Math.floor(r()*8),1,10);x.fillStyle='#8a5a3a';x.fillRect(p+3,Y-14,2,3)}}
    if(B==='usina'){for(const p of [20,100,180]){x.fillStyle='#566c86';for(let k=0;k<44;k+=3){const w=12-Math.round(k/4);x.fillRect(p+Math.round((12-w)/2),Y-k,w,1)}x.fillRect(p+5,Y-46,2,46);x.fillRect(p-4,Y-40,20,1);x.fillRect(p-2,Y-30,16,1)}
      x.fillStyle='#333c57';for(let i=0;i<TW;i++){const y=Y-39+Math.round(4*Math.sin(Math.PI*((i-26+TW)%80)/80));x.fillRect(i,y,1,1)}
      x.fillStyle='#3b4252';x.fillRect(60,Y-34,26,34);x.fillRect(64,Y-52,7,18);x.fillRect(76,Y-46,6,12);x.fillStyle='#4c5568';x.fillRect(60,Y-34,26,2);blob(x,67,Y-58,5,3,'#566c86');blob(x,70,Y-64,6,3,'#4c5568');
      x.fillStyle='#ffcd75';for(let k=0;k<3;k++)x.fillRect(64+k*7,Y-24,3,3)}
    if(B==='caverna'){for(const p of [20,80,140,200]){x.fillStyle='#3a2e24';x.fillRect(p,Y-44,12,44);x.fillStyle='#4d3b2e';x.fillRect(p,Y-44,4,44);
        const cx=p+18;for(const [dx,h,c] of [[0,10,'#73eff7'],[3,6,'#41a6f6'],[-3,7,'#b8a0ff']]){x.fillStyle=c;for(let q=0;q<h;q++)x.fillRect(cx+dx-Math.floor((h-q)/4),Y-q,1+Math.floor((h-q)/2.5),1)}
        x.fillStyle='#c7f6ff';x.fillRect(cx,Y-9,1,2)}}
    if(B==='arena'){x.fillStyle='#1a1c2c';x.fillRect(0,Y-12,TW,12);for(let i=0;i<TW;i+=32){x.fillStyle='#b13e53';x.fillRect(i+2,Y-11,28,8);x.fillStyle='#ffcd75';x.fillRect(i+4,Y-8,24,1);x.fillStyle='#f4f4f4';x.fillRect(i+14,Y-10,4,4)}}});
  L.ground=layerC(x=>{const GC={floresta:['#6cc24a','#4fa046','#3e8948','#356f3c','#2c5e33'],vulcao:['#6b3a2f','#57302c','#4a2a2a','#3d2323','#2a1717'],lago:['#ead8a6','#e0c995','#d8c08a','#cdb47c','#c2a05a'],
      usina:['#7d8ca3','#647691','#56637b','#4c5568','#3b4252'],caverna:['#6e5642','#5f4a39','#544030','#4a3829','#3d2f22'],arena:['#d8c08a','#cdb47c','#c2a05a','#b8985e','#a88a52']}[B];
    const rows=H-Y;for(let y=0;y<rows;y++){const b=Math.min(4,Math.floor(y/rows*5));x.fillStyle=GC[b];x.fillRect(0,Y+y,TW,1);
      if(b<4&&((y/rows*5)%1)>.75){x.fillStyle=GC[b+1];for(let i=(y%2);i<TW;i+=2)x.fillRect(i,Y+y,1,1)}}
    if(B==='floresta'){x.fillStyle='#8ee070';x.fillRect(0,Y,TW,1);for(let i=0;i<TW;i++){const h=1+Math.floor(r()*3);x.fillStyle=r()<.5?'#6cc24a':'#8ee070';x.fillRect(i,Y-h+1,1,h)}
      for(let k=0;k<220;k++){const px=Math.floor(r()*TW),py=Y+3+Math.floor(r()*(rows-5));x.fillStyle=r()<.5?'#2c5e33':'#7dd06a';x.fillRect(px,py,1,2);x.fillRect(px+1,py+1,1,1)}
      for(let k=0;k<22;k++){const px=Math.floor(r()*TW),py=Y+4+Math.floor(r()*(rows-8)),c=['#f4f4f4','#ffcd75','#ef7d57','#b8a0ff'][k%4];x.fillStyle='#2c5e33';x.fillRect(px,py+1,1,2);x.fillStyle=c;x.fillRect(px-1,py,3,1);x.fillRect(px,py-1,1,3);x.fillStyle='#ffcd75';x.fillRect(px,py,1,1)}
      for(let k=0;k<6;k++)rock(x,Math.floor(r()*TW),Y+6+Math.floor(r()*(rows-10)),3,['#6b7a99','#8b9bb4','#c7d4e6'])}
    else if(B==='vulcao'){for(let k=0;k<26;k++){const px=Math.floor(r()*TW),py=Y+3+Math.floor(r()*(rows-6)),w=3+Math.floor(r()*8);x.fillStyle='#1a0e10';x.fillRect(px,py,w,1);x.fillStyle=r()<.5?'#ef7d57':'#b13e53';x.fillRect(px+1,py,w-2,1)}
      for(let k=0;k<160;k++){x.fillStyle=r()<.5?'#2a1717':'#7a4535';x.fillRect(Math.floor(r()*TW),Y+2+Math.floor(r()*rows),1,1)}x.fillStyle='#7a4535';x.fillRect(0,Y,TW,1)}
    else if(B==='lago'||B==='arena'){for(let k=0;k<200;k++){x.fillStyle=r()<.5?'#b8985e':'#f4e6c0';x.fillRect(Math.floor(r()*TW),Y+2+Math.floor(r()*rows),1,1)}
      if(B==='lago'){x.fillStyle='#73eff7';x.fillRect(0,Y,TW,1);x.fillStyle='#f4f4f4';for(let i=0;i<TW;i+=7)x.fillRect(i+(i%3),Y+1,3,1);for(let k=0;k<8;k++){const px=Math.floor(r()*TW),py=Y+6+Math.floor(r()*(rows-10));x.fillStyle='#ef7d57';x.fillRect(px,py,3,2);x.fillStyle='#ffcd75';x.fillRect(px+1,py,1,1)}}}
    else if(B==='caverna'){for(let k=0;k<180;k++){x.fillStyle=r()<.1?'#73eff7':r()<.5?'#2e2219':'#7a6450';x.fillRect(Math.floor(r()*TW),Y+2+Math.floor(r()*rows),1,1)}
      for(let k=0;k<7;k++)rock(x,Math.floor(r()*TW),Y+6+Math.floor(r()*(rows-10)),4,['#3d2f22','#5f4a39','#8a7058']);
      for(let k=0;k<5;k++){const px=Math.floor(r()*TW),py=Y+8+Math.floor(r()*(rows-12));x.fillStyle='#d6c7b0';x.fillRect(px,py-1,1,2);x.fillStyle='#b13e53';x.fillRect(px-1,py-2,3,1);x.fillStyle='#f4f4f4';x.fillRect(px,py-2,1,1)}}
    else{x.fillStyle='#333c57';for(let i=0;i<TW;i+=24){x.fillRect(i,Y+1,1,rows)}for(let y=Y+10;y<H;y+=12)x.fillRect(0,y,TW,1);x.fillStyle='#94a3b8';for(let i=0;i<TW;i+=24)for(let y=Y+4;y<H;y+=12){x.fillRect(i+3,y,1,1);x.fillRect(i+20,y,1,1)}
      for(let k=0;k<10;k++){x.fillStyle=k%2?'#ffcd75':'#1a1c2c';x.fillRect(96+k*4,Y+1,4,2)}x.fillStyle='#a3b1c6';x.fillRect(0,Y,TW,1)}});
  LAYERS=L;
}
function tileL(c,f){let o=-((cam/K*f)%TW);if(o>0)o-=TW;for(let x=Math.floor(o);x<LW;x+=TW)lg.drawImage(c,x,0)}
function drawBG(now){if(!LAYERS)return;lg.imageSmoothingEnabled=false;tileL(LAYERS.sky,.03);tileL(LAYERS.far,.15);tileL(LAYERS.mid,.45);tileL(LAYERS.ground,1);
  if(MODE==='arena'){lg.fillStyle='rgba(244,244,244,.55)';const y0=GL+6,y1=LH-4;lg.fillRect(4,y0,LW-8,1);lg.fillRect(4,y1,LW-8,1);lg.fillRect(4,y0,1,y1-y0);lg.fillRect(LW-5,y0,1,y1-y0);lg.fillRect(Math.round(LW/2),y0,1,y1-y0);
    const cx=Math.round(LW/2),cy=Math.round((y0+y1)/2);for(let a=0;a<6.28;a+=.08)lg.fillRect(Math.round(cx+Math.cos(a)*12),Math.round(cy+Math.sin(a)*6),1,1)}
  else if(G.biome==='lago'){lg.fillStyle='#73eff7';for(let i=0;i<12;i++){const x=((i*41-cam/K*.45+now*.008)%LW+LW)%LW;lg.fillRect(Math.round(x),GL-14+(i%3)*4,4,1)}}
  ctx.drawImage(lc,0,0,LW,LH,0,0,LW*K,VH)}
// partículas do ambiente, por bioma
function ambient(){if(MODE==='arena')return;const B=G.biome,r=Math.random();if(r>.12)return;const px=cam+Math.random()*VW,sz=Math.round(SC);
  if(B==='vulcao')part(px,LANE_B,Math.random()<.5?'#ef7d57':'#ffcd75',{vy:-.05-Math.random()*.05,vx:(Math.random()-.5)*.02,life:2200,sz});
  else if(B==='floresta'&&r<.03)part(px,LANE_T-60*SC*Math.random(),Math.random()<.5?'#38b764':'#a7f070',{vy:.02,vx:-.02,life:3000,sz});
  else if(B==='usina'&&r<.04)part(px,LANE_T+Math.random()*(LANE_B-LANE_T),'#ffcd75',{vy:-.03,vx:(Math.random()-.5)*.08,life:300,sz});
  else if(B==='caverna'&&r<.03)part(px,LANE_T-Math.random()*120,'#94b0c2',{vy:.01,life:2500,sz:1});
  else if(B==='lago'&&r<.03)part(px,LANE_T+Math.random()*(LANE_B-LANE_T),'#c7f6ff',{vy:-.02,life:1200,sz})}

// ===== entidades =====
let noBallWarned=false,me=null,wilds=[],corpses=[],balls=[],fx=[],nums=[],center=0,spawnT=500,potCd=0,manualTarget=null,meU=null,meDeadT=0;
function ent(id,shiny,x,y){return{id,shiny,x,y,dir:0,anim:'Idle',t:0,once:false,cb:null,hitCb:null,hitDone:false,flash:0,cd:600+Math.random()*400,goal:null,wanderT:0,aggro:false}}
function play(e,role,{cb=null,hit=null,v=null}={}){e.anim=role;e.av=role==='Atk'&&v&&META[e.id].a[v]?v:null;e.t=0;e.once=role!=='Idle'&&role!=='Walk';e.cb=cb;e.hitCb=hit;e.hitDone=false}
function frame(e){if(e.av&&!META[e.id].a[e.av])e.av=null;const m=META[e.id].a[e.av||e.anim],tot=m[3].reduce((a,b)=>a+b,0)*1000/60;let t=e.t;
  if(!e.once)t%=tot;else if(t>=tot){if(e.hitCb&&!e.hitDone){e.hitDone=true;e.hitCb()}if(e.cb){const c=e.cb;e.cb=null;c()}else if(e.anim!=='Faint')play(e,'Idle');return m[3].length-1}
  let acc=0;for(let i=0;i<m[3].length;i++){acc+=m[3][i]*1000/60;if(t<acc){const hf=m[4]>=0?m[4]:Math.floor(m[3].length*.5);if(e.once&&e.hitCb&&!e.hitDone&&i>=hf){e.hitDone=true;e.hitCb()}return i}}return m[3].length-1}
function drawEnt(e,dim){
  if(e.av&&!META[e.id].a[e.av])e.av=null;const m=META[e.id].a[e.av||e.anim],im=sheet(e.id,e.shiny,e.av||e.anim);if(!im.complete||!im.naturalWidth)return;
  const f=frame(e),rows=Math.max(1,Math.round(im.naturalHeight/m[2])),row=rows>1?e.dir:0;
  const K=(e.scale||1)*(META[e.id].alias?1.15:1),sq=e.sq||0,w=m[1]*SC*K*(1+.14*sq),h=m[2]*SC*K*(1-.12*sq),fy=foot(e.id)*SC*K;
  const lx=e.lunge>0?Math.sin((1-e.lunge/220)*Math.PI)*7*SC*(e.dir===6?-1:1):0;
  ctx.save();ctx.globalAlpha=dim?.75:.35;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.ellipse(e.x,e.y,9*SC*K,3.2*SC*K,0,0,7);ctx.fill();ctx.restore();
  ctx.save();const fl=!dim&&e.flash>0&&Math.floor(e.flash/70)%2===0;let src=e.shiny&&!META[e.id].sh?sheetT(im,'hue'):im;if(HQ()&&!dim)src=sheetO(src);
  if(e.boss&&!dim){ctx.save();ctx.globalAlpha=.25+.12*Math.sin(performance.now()/180);ctx.fillStyle='#b13e53';ctx.beginPath();ctx.ellipse(e.x,e.y,14*SC*K,5*SC*K,0,0,7);ctx.fill();ctx.restore()}
  if(S[e.id]&&S[e.id].mega&&!dim)megaAura(e,K);
  if(e.ifr>0)ctx.globalAlpha=.55;
  {const X=Math.round(e.x+lx-w/2),Y=Math.round(e.y-(e.jz||0)-fy*(1-.12*sq)-h/2);ctx.drawImage(src,f*m[1],row*m[2],m[1],m[2],X,Y,w,h);if(dim||fl){ctx.globalAlpha=dim?.45:.55;ctx.drawImage(sheetT(im,dim?'dark':'white'),f*m[1],row*m[2],m[1],m[2],X,Y,w,h)}}ctx.restore();
}
function headY(e){const m=META[e.id].a.Idle,K=e.scale||1;return e.y-(foot(e.id)*SC+m[2]*SC*.42)*K}

function spawnWild(){
  const [a,b,list]=BIOMES[G.biome].tiers[G.tier];const id=pickWild(list);
  const x=Math.max(cam+VW+24*SC,...wilds.map(w=>w.x+34*SC)),y=laneRnd();
  const w=ent(id,Math.random()<shinyP(),x,y);w.lvl=a+Math.floor(Math.random()*(b-a+1));w.q=+(0.9+Math.random()*.2).toFixed(2);
  w.dir=6;Object.assign(w,calc(w,true));w.max=w.hp;w.u='w'+Math.random().toString(36).slice(2);w.moves=movesOf(w);w.spawn=400;wilds.push(w);
  if(w.shiny)toast('Um '+S[id].n+' shiny apareceu!');
}
const BOSS_N=40;
const bossKey=()=>G.biome+'|'+G.tier;
function spawnBoss(){
  const [a,b,list]=BIOMES[G.biome].tiers[G.tier];
  const pool=list.filter(i=>!LEGEND.has(i)),srt=[...pool].sort((p,q)=>baseStats(q).reduce((s,v)=>s+v,0)-baseStats(p).reduce((s,v)=>s+v,0));
  const mg=pool.filter(i=>MEGAS[i]),id=G.tier>=2&&mg.length&&Math.random()<.6?mg[Math.floor(Math.random()*mg.length)]:srt[0];
  const bid=G.tier>=3&&MEGAS[id]?MEGAS[id][Math.floor(Math.random()*MEGAS[id].length)]:id;
  const w=ent(bid,Math.random()<1/50,Math.max(cam+VW*.85,me?me.x+VW*.55:0),laneMid());w.dir=6;w.lvl=b+5;w.q=1.1;
  const c=calc(w,true);Object.assign(w,c);w.hp=w.max=c.hp*10;w.atk=c.atk*1.25;w.def=c.def*1.2;
  w.boss=true;w.scale=1.6;w.aggro=true;w.u='b'+Math.random().toString(36).slice(2);w.moves=movesOf(w);w.spawn=600;wilds.push(w);
  G.boss[bossKey()]=0;shake=500;shots.push({k:'aoe',type:S[id].t[0],x:w.x,y:w.y,r:60*SC,t:0,dur:700});
  snd('boss');toast(`Chefe: ${S[bid].n} Nv ${w.lvl} apareceu!`);feed(`Um chefe apareceu: ${S[bid].n}`);
}
function placeMe(x,y){const a=active();if(!a){me=null;return}me=ent(a.mega||a.id,a.shiny,x??cam+VW*.3,y??laneMid());me.dir=2;me.u=a.u;meU=a.u;me.spawn=400}
function active(){const t=G.team;if(t[G.active]&&t[G.active].hp>0)return t[G.active];const i=t.findIndex(m=>m.hp>0);if(i<0)return null;G.active=i;return t[i]}


// ===== som (sintetizado, sem arquivos) =====
let AC=null,lastHitSnd=0;
function snd(k){if(!G.auto.sound||SILENT)return;try{
  AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t0=AC.currentTime;
  const tone=(f,d,type,v,slide,dl)=>{const o=AC.createOscillator(),g=AC.createGain();o.type=type||'square';const t=t0+(dl||0);o.frequency.setValueAtTime(f,t);
    if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f*slide),t+d);g.gain.setValueAtTime(v||.05,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d+.02)};
  const noise=(d,v,dl)=>{const n=Math.floor(AC.sampleRate*d),b=AC.createBuffer(1,n,AC.sampleRate),c=b.getChannelData(0);for(let i=0;i<n;i++)c[i]=(Math.random()*2-1)*(1-i/n);
    const s=AC.createBufferSource(),g=AC.createGain();s.buffer=b;g.gain.value=v||.05;s.connect(g);g.connect(AC.destination);s.start(t0+(dl||0))};
  switch(k){
    case'hit':{const n=performance.now();if(n-lastHitSnd<70)return;lastHitSnd=n;noise(.05,.035);tone(170,.06,'square',.025,.6);break}
    case'se':noise(.06,.05);tone(520,.07,'square',.045);tone(780,.1,'square',.045,1,.06);break;
    case'move':tone(220,.14,'sawtooth',.03,2.4);break;
    case'shake':tone(300,.05,'triangle',.05);tone(300,.05,'triangle',.05,1,.38);tone(300,.05,'triangle',.05,1,.76);break;
    case'catch':[523,659,784,1046].forEach((f,i)=>tone(f,.12,'square',.045,1,i*.09));break;
    case'fail':tone(420,.22,'square',.035,.4);break;
    case'lvl':[392,523,659,784].forEach((f,i)=>tone(f,.1,'square',.04,1,i*.07));break;
    case'evo':for(let i=0;i<9;i++)tone(300+i*80,.14,'triangle',.05,1,i*.08);break;
    case'boss':tone(98,.8,'sawtooth',.07,.55);noise(.5,.04);break;
    case'quest':[659,784,988,1318].forEach((f,i)=>tone(f,.11,'square',.04,1,i*.08));break;
    case'faint':tone(330,.45,'square',.04,.3);break;
    case'tap':tone(700,.03,'square',.025);break;
    case'mega':for(let i=0;i<12;i++)tone(260+i*70,.16,i%2?'triangle':'square',.045,1.2,i*.06);noise(.5,.04,.1);tone(1046,.5,'triangle',.05,1,.75);break;
    case'special':for(let i=0;i<14;i++)tone(180+i*55,.12,'sawtooth',.03,1.1,i*.045);noise(.6,.05,.55);tone(110,.7,'square',.06,.4,.6);break;
    case'perfect':[1318,1760,2093].forEach((f,i)=>tone(f,.14,'triangle',.04,1,i*.05));break;
    case'dodge':noise(.08,.03);tone(500,.08,'triangle',.03,1.8);break;
    case'warn':tone(880,.05,'square',.012);break;
  }}catch(e){}}

// ===== Pokédex: marcos =====
const dexN=()=>Object.keys(G.dex).length;
const dexTier=()=>Math.floor(dexN()/10);
const dexXp=()=>(1+.02*dexTier())*amuM('xp');
const shinyP=()=>SHINY*(1+.1*dexTier())*amuM('shiny');

// ===== recompensas =====
function giveReward(rw){const p=[];
  if(rw.gold){G.gold+=rw.gold;p.push(rw.gold.toLocaleString('pt-BR')+' de ouro')}
  if(rw.balls)for(const k in rw.balls){G.balls[k]+=rw.balls[k];p.push(rw.balls[k]+' '+BALLS[k].n)}
  if(rw.pots){G.pots+=rw.pots;p.push(rw.pots+' Poções')}
  if(rw.rare){G.items.rare+=rw.rare;p.push(rw.rare+(rw.rare>1?' Doces raros':' Doce raro'))}
  dirty=true;return p.join(', ')}
const rwText=rw=>{const p=[];if(rw.gold)p.push(rw.gold.toLocaleString('pt-BR')+' de ouro');if(rw.balls)for(const k in rw.balls)p.push(rw.balls[k]+' '+BALLS[k].n);if(rw.pots)p.push(rw.pots+' Poções');if(rw.rare)p.push(rw.rare+(rw.rare>1?' Doces raros':' Doce raro'));return p.join(', ')};

// ===== metas (uma vez só) =====
const METAS=[
  {id:'cap5',n:'Capture 5 Pokémon',ok:()=>G.stats.caught>=5,rw:{balls:{poke:10}}},
  {id:'lv10',n:'Chegue ao Nv 10',ok:()=>maxLvl()>=10,rw:{gold:300}},
  {id:'dex10',n:'Registre 10 espécies na Pokédex',ok:()=>dexN()>=10,rw:{balls:{great:5}}},
  {id:'mv20',n:'Use 20 golpes especiais',ok:()=>G.stats.moves>=20,rw:{pots:3}},
  {id:'boss1',n:'Derrote um chefe',ok:()=>G.stats.bosses>=1,rw:{rare:1}},
  {id:'b1',n:'Leve um Pokémon até +1 com fusão',ok:()=>[...G.team,...G.depot].some(m=>(m.b||0)>=1),rw:{balls:{ultra:3}}},
  {id:'lv30',n:'Chegue ao Nv 30',ok:()=>maxLvl()>=30,rw:{rare:2}},
  {id:'dex30',n:'Registre 30 espécies na Pokédex',ok:()=>dexN()>=30,rw:{balls:{ultra:5}}},
  {id:'boss5',n:'Derrote 5 chefes',ok:()=>G.stats.bosses>=5,rw:{rare:3}},
  {id:'dex60',n:'Registre 60 espécies na Pokédex',ok:()=>dexN()>=60,rw:{rare:5}}];

// ===== missões diárias =====
const TPT={fire:'fogo',water:'água',grass:'planta',electric:'elétrico',rock:'pedra',ground:'terra',bug:'inseto',poison:'veneno'};
const today=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
function genDaily(day){let s=7;for(const c of day)s=(s*31+c.charCodeAt(0))>>>0;const r=()=>(s=(Math.imul(s,1103515245)+12345)>>>0)/4294967296;
  const ty=Object.keys(TPT)[Math.floor(r()*8)];
  const pool=[{k:'kill',t:ty,g:40,n:`Derrote 40 Pokémon de tipo ${TPT[ty]}`,rw:{gold:800}},{k:'kill',g:120,n:'Derrote 120 Pokémon',rw:{balls:{great:5}}},
    {k:'catch',g:12,n:'Capture 12 Pokémon',rw:{balls:{poke:15}}},{k:'move',g:60,n:'Use 60 golpes especiais',rw:{pots:5}},
    {k:'gold',g:4000,n:'Ganhe 4.000 de ouro',rw:{balls:{ultra:3}}},{k:'boss',g:1,n:'Derrote um chefe',rw:{rare:1}}];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  return{day,list:pool.slice(0,3).map(q=>Object.assign(q,{p:0,done:false,claimed:false}))}}
function daily(){const d=today();if(!G.daily||G.daily.day!==d)G.daily=genDaily(d);return G.daily}
function track(kind,v){for(const q of daily().list){if(q.done)continue;let inc=0;
  if(kind==='kill'&&q.k==='kill'&&(!q.t||v.includes(q.t)))inc=1;else if(kind==='gold'&&q.k==='gold')inc=v;else if(kind===q.k&&kind!=='kill'&&kind!=='gold')inc=1;
  if(inc){q.p=Math.min(q.g,q.p+inc);if(q.p>=q.g){q.done=true;if(!SILENT){toast('Missão completa: '+q.n);snd('quest')}}}}}
function claimable(){let n=0;for(const q of daily().list)if(q.done&&!q.claimed)n++;for(const m of METAS)if(!G.metas[m.id]&&m.ok())n++;return n}

// ===== tutorial =====
const TUT={1:'Seu Pokémon ataca sozinho. Espere ele derrotar o primeiro selvagem.',2:'Quem cai vira corpo por 30 s. A bola é jogada sozinha, ou toque no corpo para capturar.',3:'Boa! Abra o Mapa para ver os biomas. As Missões, no topo, dão prêmios.'};
function tutStep(from){if(G.tut===from){G.tut++;if(G.tut>=4){toast('Tutorial concluído');snd('quest')}dirty=true}}

// ===== efeitos =====
function burst(x,y,col,n=10,sp=.12){for(let i=0;i<n;i++){const a=Math.random()*6.28,s=sp*(.4+Math.random());fx.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-.03,life:420,age:0,col,sz:Math.round(2*SC)})}}
function num(x,y,v,kind){if(kind===''||kind==='cr'||kind==='in'||kind==='nv')snd('hit');else if(kind==='se')snd('se');nums.push({x:x+(Math.random()*16-8),y,v,kind,age:0})}
let SILENT=false,awayOpen=false;
let toastT=null;function toast(t){if(SILENT)return;const el=$('toast');el.textContent=t;el.style.display='block';clearTimeout(toastT);toastT=setTimeout(()=>el.style.display='none',2200)}
const FEED=[];function feed(t){if(SILENT)return;FEED.unshift({t,at:performance.now()});FEED.length=Math.min(FEED.length,3);renderFeed()}
function renderFeed(){const now=performance.now();$('feed').innerHTML=FEED.map(f=>`<div style="opacity:${Math.max(0,1-(now-f.at-4000)/1500)}">${f.t}</div>`).join('')}

// ===== efeitos de golpe =====
const RANGED=new Set(['fire','water','grass','electric','ice','poison','psychic','ghost','rock','flying','bug','ground']);
const FXC={fire:['#ffcd75','#ef7d57','#b13e53'],water:['#73eff7','#41a6f6','#3b5dc9'],grass:['#a7f070','#38b764','#257179'],electric:['#fff3a0','#ffcd75','#f4f4f4'],ice:['#f4f4f4','#73eff7','#41a6f6'],
  poison:['#d59bff','#a33ea1','#5d275d'],psychic:['#ffb3d1','#f95587','#b13e53'],ghost:['#c9a4ff','#735797','#29366f'],rock:['#d6bc84','#a07a3c','#5f4a39'],flying:['#f4f4f4','#c7d6f2','#94b0c2'],
  bug:['#e8f5a0','#a6b91a','#f4f4f4'],ground:['#ead08a','#c2a05a','#8a6a43'],normal:['#f4f4f4','#d8d8c0','#a8a77a'],fighting:['#ffcd75','#ef7d57','#c22e28'],dragon:['#b8a0ff','#6f35fc','#3b2a8f'],
  dark:['#8c7a8c','#5d275d','#2a1f2e'],steel:['#f4f4f4','#b7b7ce','#6b6b80'],fairy:['#ffd6ec','#d685ad','#f4f4f4']};
function moveType(att,def){let best=att[0],bv=-1;for(const x of att){let m=1;for(const y of def){const v=CH[x][y];if(v!==undefined)m*=v}if(m>bv){bv=m;best=x}}return best}
const rangeOf=type=>(RANGED.has(type)?52:22)*SC;
let shots=[],slashes=[];
function part(x,y,col,o={}){fx.push(Object.assign({x,y,vx:0,vy:0,life:400,age:0,col,sz:Math.round(2*SC),g:0},o))}
function impact(type,x,y,big){const c=FXC[type]||FXC.normal,n=big?22:14;glow(x,y,c[0],big?26:16,big?260:180);streaks(x,y,c[0],big?7:4);shots.push({k:'ring',x,y,t:0,dur:big?380:280,c:c[0]});
  for(let i=0;i<n;i++){const a=Math.random()*6.28,s=(.05+Math.random()*.13)*(type==='water'?1.3:1);
    part(x,y,c[i%3],{vx:Math.cos(a)*s,vy:Math.sin(a)*s-(type==='fire'?.05:0),g:type==='water'||type==='rock'||type==='ground'?.0006:type==='fire'?-.0002:0,life:380+Math.random()*250,sz:Math.round((type==='rock'?3:2)*SC)})}
  if(type==='psychic'||type==='ghost'||type==='fairy')shots.push({k:'ring',x,y,t:0,dur:420,c:c[1]});
}
function launch(type,from,to,onHit){
  const sx=from.x,sy=headY(from)+12*SC,tx=to.x,ty=headY(to)+12*SC;
  if(!RANGED.has(type)){ // golpe corpo a corpo: corte ou impacto no alvo
    const c=FXC[type]||FXC.normal;slashes.push({x:tx,y:ty,t:0,c,kind:type==='dragon'||type==='dark'||type==='steel'?'claw':'star'});cres(tx,ty,from.dir===6?-1:1,c);impact(type,tx,ty);onHit();return}
  if(type==='electric'){shots.push({k:'bolt',from,to,t:0,dur:260,hitAt:70,onHit,done:false});return}
  if(type==='psychic'){shots.push({k:'wave',from,to,t:0,dur:360,hitAt:300,onHit,done:false});return}
  const d=Math.hypot(tx-sx,ty-sy);
  shots.push({k:'proj',type,x0:sx,y0:sy,to,lx:tx,ly:ty,t:0,dur:Math.max(150,d/(.32*SC/1.6)),arc:type==='poison'||type==='rock'||type==='ground'?1:0,onHit,spin:0});
}
function stepShots(dt){
  for(const s of shots){s.t+=dt;
    if(s.k==='proj'){if(s.to){s.lx=s.to.x;s.ly=headY(s.to)+12*SC}const k=Math.min(1,s.t/s.dur);
      s.x=s.x0+(s.lx-s.x0)*k;s.y=s.y0+(s.ly-s.y0)*k-(s.arc?Math.sin(k*Math.PI)*26*SC:0);s.spin+=dt*.02;
      const c=FXC[s.type]||FXC.normal;
      if(Math.random()<.9)part(s.x,s.y,c[1+Math.floor(Math.random()*2)],{vx:(Math.random()-.5)*.03,vy:(Math.random()-.5)*.03-(s.type==='fire'?.03:0),life:220+Math.random()*120,sz:Math.round((s.type==='fire'?3:2)*SC)});
      (s.tr||(s.tr=[])).push([s.x,s.y]);if(s.tr.length>7)s.tr.shift();
      if(k>=1){s.dead=true;impact(s.type,s.x,s.y,true);s.onHit()}}
    else if(s.k==='bolt'||s.k==='wave'){if(!s.done&&s.t>=s.hitAt){s.done=true;const tx=s.to.x,ty=headY(s.to)+12*SC;impact(s.k==='bolt'?'electric':'psychic',tx,ty,true);s.onHit()}if(s.t>=s.dur)s.dead=true}
    else if(s.k==='ring'&&s.t>=s.dur)s.dead=true
    else if(s.k==='beam'){const c=FXC[s.type]||FXC.normal;for(let i=0;i<3;i++){const d=Math.random()*s.len,o=(Math.random()-.5)*s.w*2.4;part(s.ox+Math.cos(s.ang)*d-Math.sin(s.ang)*o,s.oy+Math.sin(s.ang)*d+Math.cos(s.ang)*o,c[i%2],{vx:(Math.random()-.5)*.05,vy:(Math.random()-.5)*.05,life:300})}if(s.t>=s.dur)s.dead=true}
    else if(s.k==='chain'||s.k==='aoe'||s.k==='boom'){if(s.t>=s.dur)s.dead=true}
    else if(s.k==='drop'){if(s.t>=s.dur&&!s.done){s.done=true;s.dead=true;s.cb()}}}
  shots=shots.filter(s=>!s.dead);
  for(const s of slashes)s.t+=dt;slashes=slashes.filter(s=>s.t<300);
}
function drawShots(){
  drawGlows();drawSpx();
  for(const s of shots){
    if(s.k==='proj'){drawTrail(s);const c=FXC[s.type]||FXC.normal,z=Math.round(SC*(s.type==='rock'?7:s.type==='fire'||s.type==='ghost'||s.type==='poison'?6:5));
      ctx.save();ctx.translate(Math.round(s.x),Math.round(s.y));
      if(s.type==='grass'||s.type==='flying'||s.type==='bug'||s.type==='ice'){ctx.rotate(s.spin);ctx.fillStyle='#0e0f1d';ctx.fillRect(-z-1,-z/2-1,z*2+2,z+2);ctx.fillStyle=c[1];ctx.fillRect(-z,-z/2,z*2,z);ctx.fillStyle=c[0];ctx.fillRect(-z,-z/2,z,Math.max(1,z/2))}
      else{ctx.fillStyle='#0e0f1d';ctx.fillRect(-z-1,-z-1,z*2+2,z*2+2);ctx.fillStyle=c[1];ctx.fillRect(-z,-z,z*2,z*2);ctx.fillStyle=c[0];ctx.fillRect(-z+SC,-z+SC,z,z)}
      ctx.restore()}
    else if(s.k==='bolt'){const ax=s.from.x,ay=headY(s.from)+12*SC,bx=s.to.x,by=headY(s.to)+12*SC;
      for(const [w,col] of [[5*SC/1.6,'#ffcd75'],[2*SC/1.6,'#fff9e0']]){ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(ax,ay);
        for(let i=1;i<6;i++){const k=i/6;ctx.lineTo(ax+(bx-ax)*k+(Math.random()-.5)*14*SC/1.6,ay+(by-ay)*k+(Math.random()-.5)*14*SC/1.6)}ctx.lineTo(bx,by);ctx.stroke()}}
    else if(s.k==='wave'){const k=s.t/s.dur,ax=s.from.x,ay=headY(s.from)+12*SC,bx=s.to.x,by=headY(s.to)+12*SC;
      for(let i=0;i<3;i++){const kk=Math.min(1,k*1.4-i*.18);if(kk<=0)continue;ctx.strokeStyle=FXC.psychic[i%2];ctx.globalAlpha=1-kk*.6;ctx.lineWidth=2*SC/1.6;ctx.beginPath();ctx.arc(ax+(bx-ax)*kk,ay+(by-ay)*kk,(4+kk*8)*SC,0,7);ctx.stroke()}ctx.globalAlpha=1}
    else if(s.k==='ring'){const k=s.t/s.dur;ctx.strokeStyle=s.c;ctx.globalAlpha=1-k;ctx.lineWidth=2*SC/1.6;ctx.beginPath();ctx.arc(s.x,s.y,(3+k*16)*SC,0,7);ctx.stroke();ctx.globalAlpha=1}
    else if(s.k==='beam'){const k=s.t/s.dur,amp=Math.min(1,s.t/90)*(k>.72?1-(k-.72)/.28:1),c=FXC[s.type]||FXC.normal,wv=s.w*amp*(1+Math.sin(s.t/22)*.1);
      ctx.save();ctx.translate(s.ox,s.oy);ctx.rotate(s.ang);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.35*amp;ctx.drawImage(glowTex(c[1]),0,-wv*4,s.len,wv*8);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=.5;ctx.fillStyle=c[2];ctx.fillRect(0,-wv*1.6,s.len,wv*3.2);
      ctx.globalAlpha=1;ctx.fillStyle=c[1];ctx.fillRect(0,-wv,s.len,wv*2);ctx.fillStyle=c[0];ctx.fillRect(0,-wv*.4,s.len,wv*.8);
      const r=wv*2.6;ctx.fillStyle=c[0];ctx.fillRect(-r/2,-r/2,r,r);ctx.restore()}
    else if(s.k==='chain'){const k=s.t/s.dur;ctx.globalAlpha=1-k*k;
      for(let i=0;i<s.pts.length-1;i++){const A=s.pts[i],B=s.pts[i+1],ax=A.x,ay=headY(A)+12*SC,bx=B.x,by=headY(B)+12*SC;
        for(const [w,col] of [[5*SC/1.6,'#ffcd75'],[2*SC/1.6,'#fff9e0']]){ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(ax,ay);for(let j=1;j<6;j++){const q=j/6;ctx.lineTo(ax+(bx-ax)*q+(Math.random()-.5)*16*SC/1.6,ay+(by-ay)*q+(Math.random()-.5)*16*SC/1.6)}ctx.lineTo(bx,by);ctx.stroke()}}
      ctx.globalAlpha=1}
    else if(s.k==='aoe'){const k=s.t/s.dur,e=1-(1-k)*(1-k),c=FXC[s.type]||FXC.normal,rr=s.r*e;
      ctx.save();ctx.globalAlpha=(s.soft?.35:.2)*(1-k);ctx.fillStyle=s.soft?c[1]:c[0];ctx.beginPath();ctx.ellipse(s.x,s.y,rr,rr*.62,0,0,7);ctx.fill();
      ctx.globalAlpha=1-k;ctx.strokeStyle=c[1];ctx.lineWidth=(6*(1-k)+1)*SC/1.6;ctx.beginPath();ctx.ellipse(s.x,s.y,rr,rr*.62,0,0,7);ctx.stroke();
      ctx.strokeStyle=c[0];ctx.lineWidth=2*SC/1.6;ctx.beginPath();ctx.ellipse(s.x,s.y,rr*.7,rr*.43,0,0,7);ctx.stroke();ctx.restore()}
    else if(s.k==='boom'){const k=s.t/s.dur,e=1-(1-k)*(1-k),c=FXC[s.type]||FXC.normal;ctx.save();
      ctx.globalAlpha=1-k;ctx.fillStyle=c[2];ctx.beginPath();ctx.arc(s.x,s.y,s.r*(.5+.6*e),0,7);ctx.fill();ctx.fillStyle=c[1];ctx.beginPath();ctx.arc(s.x,s.y,s.r*(.35+.45*e),0,7);ctx.fill();
      ctx.fillStyle=c[0];ctx.beginPath();ctx.arc(s.x,s.y,s.r*.3*(1-k),0,7);ctx.fill();ctx.restore()}
    else if(s.k==='drop'){if(s.t<0)continue;const k=Math.min(1,s.t/s.dur),c=FXC[s.type]||FXC.normal,z=Math.round(SC*(s.type==='rock'?7:5));
      ctx.save();ctx.globalAlpha=.35*k;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.ellipse(s.x,s.y,z*1.2,z*.5,0,0,7);ctx.fill();ctx.restore();
      if(s.type==='electric'){if(k>.75){ctx.strokeStyle='#fff9e0';ctx.lineWidth=3*SC/1.6;ctx.beginPath();ctx.moveTo(s.x,0);for(let j=1;j<7;j++)ctx.lineTo(s.x+(Math.random()-.5)*14*SC/1.6,s.y*j/7);ctx.lineTo(s.x,s.y);ctx.stroke()}}
      else{const y=s.y-130*SC/1.6*(1-k)-8*SC;ctx.fillStyle='#0e0f1d';ctx.fillRect(Math.round(s.x-z-1),Math.round(y-z-1),z*2+2,z*2+2);ctx.fillStyle=c[1];ctx.fillRect(Math.round(s.x-z),Math.round(y-z),z*2,z*2);ctx.fillStyle=c[0];ctx.fillRect(Math.round(s.x-z+SC),Math.round(y-z+SC),z,z)}}
  }
  for(const s of slashes){const k=s.t/300;ctx.save();ctx.globalAlpha=1-k;ctx.lineCap='square';
    if(s.kind==='claw'){const B=s.big?1.6:1;for(let i=0;i<3;i++){const o=(i-1)*5*SC*B,l=Math.min(1,k*3)*18*SC*B;ctx.strokeStyle='#0e0f1d';ctx.lineWidth=4*SC/1.6;ctx.beginPath();ctx.moveTo(s.x+o-9*SC*B,s.y-9*SC*B);ctx.lineTo(s.x+o-9*SC*B+l,s.y-9*SC*B+l);ctx.stroke();ctx.strokeStyle=s.c[0];ctx.lineWidth=2*SC/1.6;ctx.stroke()}}
    else{const r=(4+k*12)*SC;ctx.fillStyle=s.c[0];for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.fillRect(Math.round(s.x+Math.cos(a)*r-SC),Math.round(s.y+Math.sin(a)*r-SC),Math.round(2*SC),Math.round(2*SC))}}
    ctx.restore()}
}

// ===== golpes especiais =====
// [nome, tipo, forma, poder, recarga em s, extra]
const MV={
 ember:['Ember','fire','proj',40,3,{st:'burn',ch:.1}],flamethrower:['Flamethrower','fire','beam',90,8,{st:'burn',ch:.3}],flame_charge:['Flame Charge','fire','melee',60,5],
 heat_wave:['Heat Wave','fire','aoe',90,12,{r:46,st:'burn',ch:.2}],fire_blast:['Fire Blast','fire','blast',110,14,{r:30,st:'burn',ch:.3}],blast_burn:['Blast Burn','fire','aoe',150,22,{r:60}],
 mystical_fire:['Mystical Fire','fire','proj',75,8,{n:3}],pyro_ball:['Pyro Ball','fire','blast',120,14,{r:26,st:'burn',ch:.2}],torch_song:['Torch Song','fire','beam',100,12,{st:'burn',ch:.3}],
 water_gun:['Water Gun','water','proj',40,3],bubble_beam:['Bubble Beam','water','proj',50,6,{n:3}],aqua_jet:['Aqua Jet','water','melee',45,3],razor_shell:['Razor Shell','water','melee',75,6],
 surf:['Surf','water','aoe',90,12,{r:56}],hydro_pump:['Hydro Pump','water','beam',110,12],aqua_ring:['Aqua Ring','water','heal',0,20,{heal:.3}],hydro_cannon:['Hydro Cannon','water','beam',150,22,{w:1.6}],
 water_shuriken:['Water Shuriken','water','proj',45,5,{n:4}],sparkling_aria:['Sparkling Aria','water','aoe',100,14,{r:50}],snipe_shot:['Snipe Shot','water','beam',100,10,{w:.6}],aqua_step:['Aqua Step','water','melee',90,8],
 vine_whip:['Vine Whip','grass','melee',45,3],razor_leaf:['Razor Leaf','grass','proj',55,6,{n:4}],synthesis:['Synthesis','grass','heal',0,20,{heal:.35}],
 sleep_powder:['Sleep Powder','grass','status',0,16,{r:44,st:'sleep',ch:.8}],petal_blizzard:['Petal Blizzard','grass','aoe',90,12,{r:50}],solar_beam:['Solar Beam','grass','beam',130,16,{charge:900,w:1.4}],
 frenzy_plant:['Frenzy Plant','grass','rain',150,22,{n:7,r:34}],drum_beating:['Drum Beating','grass','rain',90,10,{n:5,r:26}],flower_trick:['Flower Trick','grass','melee',90,8],trop_kick:['Trop Kick','grass','melee',75,6],
 thunder_shock:['Thunder Shock','electric','proj',40,3,{st:'para',ch:.1}],thunderbolt:['Thunderbolt','electric','chain',90,8,{n:3,st:'para',ch:.2}],discharge:['Discharge','electric','aoe',80,12,{r:50,st:'para',ch:.3}],
 thunder:['Thunder','electric','rain',110,15,{n:4,r:28,st:'para',ch:.3}],volt_tackle:['Volt Tackle','electric','melee',110,12,{st:'para',ch:.1}],
 ice_shard:['Ice Shard','ice','proj',40,3],ice_beam:['Ice Beam','ice','beam',90,9],blizzard:['Blizzard','ice','rain',110,15,{n:7,r:36}],
 rock_throw:['Rock Throw','rock','proj',50,4],rock_slide:['Rock Slide','rock','rain',75,9,{n:5,r:28}],stone_edge:['Stone Edge','rock','blast',100,12,{r:22}],
 mud_shot:['Mud Shot','ground','proj',55,4],bulldoze:['Bulldoze','ground','aoe',60,8,{r:40}],earthquake:['Earthquake','ground','aoe',100,14,{r:64}],
 bug_bite:['Bug Bite','bug','melee',55,3],x_scissor:['X-Scissor','bug','melee',80,6],bug_buzz:['Bug Buzz','bug','aoe',90,12,{r:46}],pin_missile:['Pin Missile','bug','proj',30,6,{n:5}],
 poison_sting:['Poison Sting','poison','proj',35,3,{st:'poison',ch:.3}],sludge_bomb:['Sludge Bomb','poison','blast',90,9,{r:20,st:'poison',ch:.3}],toxic:['Toxic','poison','proj',0,14,{st:'poison',ch:1}],
 sludge_wave:['Sludge Wave','poison','aoe',95,13,{r:50,st:'poison',ch:.2}],
 gust:['Gust','flying','proj',40,3],air_slash:['Air Slash','flying','proj',75,7,{n:2}],hurricane:['Hurricane','flying','aoe',110,15,{r:52}],
 confusion:['Confusion','psychic','wave',50,4],psybeam:['Psybeam','psychic','beam',65,7],psychic:['Psychic','psychic','blast',90,10,{r:24}],
 shadow_ball:['Shadow Ball','ghost','proj',80,7],hex:['Hex','ghost','proj',65,5],spirit_shackle:['Spirit Shackle','ghost','proj',80,9,{n:2}],
 bite:['Bite','dark','melee',60,4],crunch:['Crunch','dark','melee',80,6],night_slash:['Night Slash','dark','melee',70,5],dark_pulse:['Dark Pulse','dark','aoe',80,11,{r:48}],darkest_lariat:['Darkest Lariat','dark','aoe',85,10,{r:36}],
 low_kick:['Low Kick','fighting','melee',50,4],close_combat:['Close Combat','fighting','melee',120,14],drain_punch:['Drain Punch','fighting','melee',75,8,{drain:.5}],
 dragon_breath:['Dragon Breath','dragon','beam',60,6,{st:'para',ch:.3,w:.8}],dragon_claw:['Dragon Claw','dragon','melee',80,6],dragon_pulse:['Dragon Pulse','dragon','proj',85,8],outrage:['Outrage','dragon','aoe',120,16,{r:44}],
 metal_claw:['Metal Claw','steel','melee',50,4],flash_cannon:['Flash Cannon','steel','beam',80,9],iron_tail:['Iron Tail','steel','melee',100,10],magnet_bomb:['Magnet Bomb','steel','proj',60,6,{n:3}],
 tackle:['Tackle','normal','melee',40,3],quick_attack:['Quick Attack','normal','melee',40,2],body_slam:['Body Slam','normal','melee',85,8,{st:'para',ch:.3}],hyper_voice:['Hyper Voice','normal','aoe',90,12,{r:48}],
 hyper_beam:['Hyper Beam','normal','beam',150,22,{w:1.5}],extreme_speed:['Extreme Speed','normal','melee',80,5],
 dazzling_gleam:['Dazzling Gleam','fairy','aoe',80,11,{r:46}],moonblast:['Moonblast','fairy','proj',95,9],play_rough:['Play Rough','fairy','melee',90,8],fairy_wind:['Fairy Wind','fairy','proj',40,3]
};
// golpes por linha evolutiva (id da forma básica): golpe:nível de aprendizado
const LEARN_S={
 1:'vine_whip:1,razor_leaf:8,synthesis:16,sleep_powder:20,sludge_bomb:26,solar_beam:34,frenzy_plant:44',
 4:'ember:1,dragon_breath:10,flamethrower:18,dragon_claw:28,air_slash:36,heat_wave:40,blast_burn:50',
 7:'water_gun:1,bubble_beam:9,aqua_ring:16,surf:24,hydro_pump:36,hydro_cannon:48',
 152:'razor_leaf:1,synthesis:12,petal_blizzard:24,body_slam:28,solar_beam:32,frenzy_plant:46',
 155:'ember:1,quick_attack:8,flame_charge:14,flamethrower:22,heat_wave:36,blast_burn:48',
 158:'water_gun:1,bite:8,crunch:20,surf:24,hydro_pump:34,hydro_cannon:46',
 252:'razor_leaf:1,quick_attack:6,petal_blizzard:20,dragon_claw:36,solar_beam:40,frenzy_plant:48',
 255:'ember:1,quick_attack:6,low_kick:16,flamethrower:22,close_combat:36,blast_burn:48',
 258:'water_gun:1,mud_shot:8,bulldoze:16,surf:24,earthquake:36,hydro_cannon:48',
 387:'razor_leaf:1,bite:8,synthesis:16,bulldoze:22,earthquake:32,frenzy_plant:46',
 390:'ember:1,low_kick:8,flame_charge:14,flamethrower:22,close_combat:36,blast_burn:48',
 393:'water_gun:1,bubble_beam:8,metal_claw:16,surf:24,flash_cannon:36,hydro_cannon:48',
 495:'vine_whip:1,razor_leaf:8,synthesis:16,petal_blizzard:24,solar_beam:36,frenzy_plant:46',
 498:'ember:1,flame_charge:7,low_kick:17,flamethrower:24,close_combat:36,blast_burn:48',
 501:'water_gun:1,razor_shell:14,surf:24,night_slash:30,hydro_pump:36,hydro_cannon:48',
 650:'vine_whip:1,bite:8,razor_leaf:14,drain_punch:24,close_combat:36,frenzy_plant:48',
 653:'ember:1,psybeam:12,flamethrower:20,psychic:36,mystical_fire:40,blast_burn:48',
 656:'bubble_beam:1,quick_attack:6,water_shuriken:16,night_slash:36,hydro_pump:40,hydro_cannon:48',
 722:'razor_leaf:1,air_slash:10,synthesis:16,spirit_shackle:34,solar_beam:40,frenzy_plant:48',
 725:'ember:1,bite:8,flamethrower:20,darkest_lariat:34,heat_wave:40,blast_burn:48',
 728:'water_gun:1,bubble_beam:8,dazzling_gleam:24,sparkling_aria:34,moonblast:38,hydro_cannon:48',
 810:'razor_leaf:1,bite:8,petal_blizzard:20,drum_beating:35,solar_beam:40,frenzy_plant:48',
 813:'ember:1,quick_attack:6,flame_charge:14,flamethrower:22,pyro_ball:35,blast_burn:48',
 816:'water_gun:1,bubble_beam:8,surf:22,snipe_shot:35,hydro_pump:40,hydro_cannon:48',
 906:'razor_leaf:1,quick_attack:6,bite:16,flower_trick:36,night_slash:38,frenzy_plant:48',
 909:'ember:1,bite:7,flamethrower:18,torch_song:36,shadow_ball:38,blast_burn:48',
 912:'water_gun:1,quick_attack:6,razor_shell:16,low_kick:18,aqua_step:36,close_combat:40,hydro_cannon:48',
 10:'bug_bite:1,gust:10,sleep_powder:13,bug_buzz:20,psychic:28,hurricane:38',
 43:'poison_sting:1,sleep_powder:12,sludge_bomb:20,petal_blizzard:28,moonblast:38,solar_beam:44',
 761:'razor_leaf:1,synthesis:12,low_kick:18,petal_blizzard:26,trop_kick:40',
 540:'bug_bite:1,razor_leaf:8,x_scissor:22,petal_blizzard:30,bug_buzz:38',
 672:'vine_whip:1,razor_leaf:9,bulldoze:18,synthesis:24,earthquake:36',
 123:'quick_attack:1,x_scissor:15,air_slash:22,night_slash:30,bug_buzz:40',
 212:'bug_bite:1,metal_claw:10,x_scissor:25,iron_tail:32,flash_cannon:38',
 214:'bug_bite:1,low_kick:10,x_scissor:20,close_combat:30,rock_slide:36',
 37:'ember:1,quick_attack:7,hex:14,flamethrower:20,fire_blast:30',
 38:'ember:1,hex:14,flamethrower:20,fire_blast:35,heat_wave:42',
 58:'ember:1,bite:6,flame_charge:14,crunch:20,flamethrower:28',
 59:'flame_charge:1,crunch:10,flamethrower:20,extreme_speed:30,fire_blast:40',
 77:'ember:1,flame_charge:10,quick_attack:14,flamethrower:30,fire_blast:45',
 218:'ember:1,rock_throw:8,flamethrower:22,rock_slide:30,heat_wave:40',
 667:'ember:1,bite:8,hyper_voice:20,flamethrower:26',
 850:'ember:1,bug_bite:6,flame_charge:14,flamethrower:28,heat_wave:36',
 126:'ember:1,flame_charge:10,flamethrower:15,low_kick:22,fire_blast:40',
 228:'ember:1,bite:8,flamethrower:18,crunch:24,dark_pulse:32,fire_blast:42',
 324:'ember:1,body_slam:12,flamethrower:18,heat_wave:30',
 757:'poison_sting:1,ember:5,flamethrower:18,sludge_bomb:24,toxic:33,dragon_pulse:36,sludge_wave:40',
 129:'tackle:15,bite:20,crunch:25,hydro_pump:30,hurricane:38,outrage:44,hyper_beam:50',
 54:'water_gun:1,confusion:6,psybeam:14,surf:22,psychic:30,hydro_pump:40',
 194:'water_gun:1,mud_shot:8,surf:20,toxic:24,earthquake:30',
 183:'water_gun:1,bubble_beam:8,aqua_ring:14,play_rough:20,surf:24,hydro_pump:34',
 418:'water_gun:1,quick_attack:6,aqua_jet:12,crunch:22,hydro_pump:34',
 131:'water_gun:1,ice_shard:8,surf:20,ice_beam:26,hydro_pump:36,blizzard:44',
 320:'water_gun:1,body_slam:12,surf:22,hydro_pump:30,hyper_beam:45',
 134:'water_gun:1,quick_attack:5,aqua_ring:15,surf:25,ice_beam:35,hydro_pump:40',
 350:'water_gun:1,aqua_ring:10,surf:25,dragon_pulse:30,ice_beam:34,hydro_pump:40',
 25:'thunder_shock:1,quick_attack:5,thunderbolt:18,volt_tackle:30,thunder:40',
 26:'thunder_shock:1,quick_attack:5,thunderbolt:18,discharge:30,thunder:40',
 81:'thunder_shock:1,magnet_bomb:10,discharge:20,flash_cannon:26,thunderbolt:30',
 462:'thunder_shock:1,magnet_bomb:10,flash_cannon:26,thunderbolt:30,discharge:34,thunder:42',
 179:'thunder_shock:1,body_slam:10,thunderbolt:20,discharge:28,dragon_pulse:34,thunder:40',
 403:'thunder_shock:1,bite:8,crunch:20,volt_tackle:28,discharge:34',
 595:'bug_bite:1,thunder_shock:4,thunderbolt:20,bug_buzz:30,discharge:36',
 835:'quick_attack:1,thunder_shock:3,bite:8,crunch:22,volt_tackle:30',
 125:'thunder_shock:1,low_kick:10,thunderbolt:20,discharge:30,thunder:40',
 479:'thunder_shock:1,hex:10,shadow_ball:20,discharge:28,thunderbolt:32',
 135:'thunder_shock:1,quick_attack:5,pin_missile:15,thunderbolt:20,thunder:40',
 74:'rock_throw:1,bulldoze:10,rock_slide:18,earthquake:30,stone_edge:36',
 95:'rock_throw:1,rock_slide:15,dragon_breath:20,earthquake:30,stone_edge:40',
 208:'iron_tail:1,crunch:15,earthquake:30,flash_cannon:34,stone_edge:40',
 246:'bite:1,rock_throw:5,rock_slide:15,crunch:24,earthquake:34,stone_edge:40,dark_pulse:46,hyper_beam:55',
 744:'tackle:1,rock_throw:6,bite:10,rock_slide:20,crunch:26,stone_edge:36',
 524:'rock_throw:1,bulldoze:10,rock_slide:18,stone_edge:30,earthquake:36',
 443:'dragon_breath:1,mud_shot:7,dragon_claw:18,crunch:24,earthquake:30,outrage:42',
 111:'rock_throw:1,bulldoze:8,rock_slide:20,stone_edge:30,earthquake:36',
 76:'rock_slide:1,bulldoze:10,earthquake:30,stone_edge:40'
};
const LEARN_T={fire:'ember:1,flamethrower:20,fire_blast:40',water:'water_gun:1,surf:20,hydro_pump:40',grass:'razor_leaf:1,petal_blizzard:20,solar_beam:40',electric:'thunder_shock:1,thunderbolt:20,thunder:40',
 bug:'bug_bite:1,x_scissor:20,bug_buzz:36',rock:'rock_throw:1,rock_slide:20,stone_edge:36',ground:'mud_shot:1,bulldoze:16,earthquake:32',poison:'poison_sting:1,sludge_bomb:20,sludge_wave:38',
 normal:'tackle:1,body_slam:20,hyper_beam:45',dark:'bite:1,crunch:20,dark_pulse:34',dragon:'dragon_breath:1,dragon_claw:20,outrage:40',steel:'metal_claw:1,flash_cannon:24,iron_tail:34',
 flying:'gust:1,air_slash:20,hurricane:40',psychic:'confusion:1,psybeam:16,psychic:30',ghost:'hex:1,shadow_ball:20',fairy:'fairy_wind:1,dazzling_gleam:20,moonblast:36',fighting:'low_kick:1,drain_punch:20,close_combat:36',ice:'ice_shard:1,ice_beam:20,blizzard:38'};
const parseL=s=>s.split(',').map(x=>{const [k,l]=x.split(':');return [k,+l]});
const LEARN={};for(const k in LEARN_S)LEARN[k]=parseL(LEARN_S[k]);
function rootOf(id){while(PREV[id])id=PREV[id];return id}
function learnList(id){return LEARN[id]||LEARN[rootOf(id)]||parseL(LEARN_T[S[id].t[0]]||LEARN_T.normal)}
function movesOf(m){const r=learnList(m.id).filter(x=>m.lvl>=x[1]).map(x=>x[0]);if(m.tm&&MV[m.tm]&&!r.includes(m.tm))r.push(m.tm);return r.slice(-4)}
function nextMoves(m){return learnList(m.id).filter(x=>m.lvl<x[1])}
const KIND_PT={proj:'Disparo',melee:'Golpe',beam:'Feixe',chain:'Corrente',aoe:'Área',blast:'Explosão',rain:'Chuva',wave:'Onda',heal:'Cura',status:'Status'};
const ST_LABEL={burn:['QUE','#ef7d57'],poison:['VEN','#a33ea1'],para:['PAR','#ffcd75'],sleep:['SON','#41a6f6']};

const CD={};
const cdOf=(u,k)=>(CD[u]&&CD[u][k])||0;
function setCd(u,k,v){(CD[u]||(CD[u]={}))[k]=v}
function tickCd(dt){for(const u in CD)for(const k in CD[u])if(CD[u][k]>0)CD[u][k]-=dt}
let timers=[];
function later(ms,fn){timers.push({t:ms,fn})}
function tickTimers(dt){const run=[];for(const t of timers){t.t-=dt;if(t.t<=0)run.push(t)}if(run.length){timers=timers.filter(t=>t.t>0);run.forEach(t=>t.fn())}}
let shake=0;
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const CAST=70;
function needRange(k){const kind=MV[k][2];return kind==='melee'?24*SC:(kind==='heal'||kind==='aoe'||kind==='status')?0:CAST*SC}
function foesOf(isMe){return isMe?wilds.filter(w=>w.hp>0&&!(w.spawn>0)):(me&&meDeadT<=0?[me]:[])}
function hpRatio(c,isMe){if(isMe){const a=active();return a?a.hp/calc(a).hp:1}return c.hp/c.max}
function canCast(k,c,tgt,isMe,auto){const [,,kind,,,x={}]=MV[k];
  if(kind==='heal')return hpRatio(c,isMe)<(auto?.55:1);
  if(kind==='aoe'||kind==='status')return !auto||foesOf(isMe).some(f=>dist(f,c)<=(x.r||40)*SC);
  if(!tgt)return false;return !auto||dist(tgt,c)<=needRange(k)}
function pickMove(list,c,tgt,isMe){
  const ready=list.filter(k=>cdOf(c.u,k)<=0&&canCast(k,c,tgt,isMe,true));if(!ready.length)return null;
  const heal=ready.find(k=>MV[k][2]==='heal');if(heal&&hpRatio(c,isMe)<.45)return heal;
  return ready.filter(k=>MV[k][2]!=='heal').sort((a,b)=>MV[b][3]-MV[a][3])[0]||null}
function cast(c,isMe,k,tgt){if(isMe){G.stats.moves++;track('move');snd('move')}
  const [n,type,,,cd,x={}]=MV[k];
  setCd(c.u,k,cd*1000*(isMe?1:c.boss?1:1.6));
  if(tgt&&tgt!==c)c.dir=dirOf(tgt.x-c.x,tgt.y-c.y);c.goal=null;
  const stack=nums.filter(q=>q.kind==='name'&&q.src===c&&q.age<700).length;nums.push({x:c.x,y:headY(c)-8*SC-stack*8*SC,v:n,kind:'name',col:TYPE_COLOR[type],age:0,src:c});
  const go=()=>play(c,'Atk',{v:atkV(MV[k][2]),hit:()=>doMove(c,isMe,k,tgt)});
  if(x.charge){c.charging=x.charge;c.chargeType=type;c.afterCharge=go;if(c.anim==='Walk')play(c,'Idle')}else go();
}
function applyStatus(o,k,ch){if(o&&!o.st&&Math.random()<ch)o.st={k,t:k==='sleep'?2600:5000,tick:1000}}
function applyHit(c,isMe,t,type,p,x){
  let dmg=0;
  if(isMe){const m=G.team[G.active];if(!m||!wilds.includes(t)||t.hp<=0)return 0;const ca=calc(m);
    if(p>0){const r=hit(ca.atk*p/50,[type],{defStat:t.def},S[t.id].t,m.lvl);dmg=r.d;t.hp-=dmg;megaGain(3);juice(t,c,p,r);num(t.x,headY(t),dmg,r.e>1?'se':r.e<1?'nv':r.crit?'cr':'')}
    t.flash=360;t.aggro=true;if(x.st)applyStatus(t,x.st,x.ch);
    if(x.drain&&dmg){const h=Math.floor(dmg*x.drain);m.hp=Math.min(ca.hp,m.hp+h);num(me.x,headY(me),'+'+h,'heal')}
    if(t.hp<=0)killWild(t,m);
  }else{const m=active();if(!m||!me||meDeadT>0||!wilds.includes(c))return 0;if(me.ifr>0){dodged();return 0}const ca=calc(m);
    if(p>0){const r=hit(c.atk*p/50,[type],{defStat:ca.def},S[m.mega||m.id].t,c.lvl);dmg=r.d;m.hp-=dmg;juice(me,c,p,r,true);num(me.x,headY(me),dmg,'in')}
    me.flash=360;if(x.st)applyStatus(m,x.st,x.ch);
    if(x.drain&&dmg)c.hp=Math.min(c.max,c.hp+dmg*x.drain);
    if(m.hp<=0){m.hp=0;meDown()}}
  return dmg;
}
function healSelf(c,isMe,frac){const col=FXC.grass;
  if(isMe){const m=active();if(!m)return;const mx=calc(m).hp,h=Math.floor(mx*frac);m.hp=Math.min(mx,m.hp+h);num(me.x,headY(me),'+'+h,'heal')}
  else{c.hp=Math.min(c.max,c.hp+c.max*frac)}
  for(let i=0;i<18;i++)part(c.x+(Math.random()-.5)*20*SC,c.y-Math.random()*10*SC,col[i%3],{vy:-.05-Math.random()*.06,life:700})}
function shootProj(type,from,to,onHit){const sx=from.x,sy=headY(from)+12*SC,tx=to.x,ty=headY(to)+12*SC,d=Math.hypot(tx-sx,ty-sy);
  shots.push({k:'proj',type,x0:sx,y0:sy,to,lx:tx,ly:ty,t:0,dur:Math.max(150,d/(.32*SC/1.6)),arc:type==='poison'||type==='rock'||type==='ground'?1:0,onHit,spin:0})}
function doMove(c,isMe,k,tgt){
  const [,type,kind,p,,x={}]=MV[k];
  if(isMe?(!me||c!==me||meDeadT>0):!wilds.includes(c))return;
  if(MODE==='arena'&&!isMe&&kind!=='heal')return arenaFoeMove(c,k,type,kind,p,x);
  if(isMe&&kind==='melee')c.lunge=220;
  const foes=()=>foesOf(isMe),valid=t=>t&&foes().includes(t),hitT=(t,mul=1)=>applyHit(c,isMe,t,type,p*mul,x);
  const cx=c.x,cy=headY(c)+12*SC,col=FXC[type]||FXC.normal;
  if(kind==='proj'){let ts=valid(tgt)?[tgt]:[];const nn=x.n||1;
    if(nn>1&&isMe)ts=ts.concat(foes().filter(f=>f!==tgt&&dist(f,c)<=CAST*SC*1.2).sort((a,b)=>dist(a,c)-dist(b,c)));
    if(!ts.length)return;for(let i=0;i<nn;i++){const t=ts[i%ts.length];later(i*90,()=>{if(valid(t))shootProj(type,c,t,()=>{if(valid(t)){impact(type,t.x,headY(t)+12*SC);hitT(t)}})})}}
  else if(kind==='melee'){if(!valid(tgt))return;const ty=headY(tgt)+12*SC;
    slashes.push({x:tgt.x,y:ty,t:0,c:col,kind:'claw',big:p>=80});cres(tgt.x,ty,c.dir===6?-1:1,col);impact(type,tgt.x,ty,p>=80);hitT(tgt);if(p>=90)shake=Math.max(shake,180)}
  else if(kind==='beam'){const ang=tgt?Math.atan2(headY(tgt)+12*SC-cy,tgt.x-cx):[0,.785,1.57,2.36,3.14,-2.36,-1.57,-.785][[2,1,0,7,6,5,4,3].indexOf(c.dir)],len=150*SC,w=7*SC*(x.w||1);
    shots.push({k:'beam',type,ox:cx,oy:cy,ang,len,w,t:0,dur:520});if(isMe&&p>=100)scrFlash(.35);glow(cx,cy,col[0],30,500);if(p>=100)shake=Math.max(shake,300);
    const cs=Math.cos(ang),sn=Math.sin(ang);
    for(const f of foes()){const dx=f.x-cx,dy=headY(f)+12*SC-cy,al=dx*cs+dy*sn,pp=Math.abs(-dx*sn+dy*cs);if(al>0&&al<len&&pp<w+10*SC)later(90,()=>valid(f)&&(impact(type,f.x,headY(f)+12*SC),hitT(f)))}}
  else if(kind==='chain'){if(!valid(tgt))return;const ts=[tgt];let last=tgt;
    while(ts.length<(x.n||3)){const nx=foes().filter(f=>!ts.includes(f)&&dist(f,last)<=70*SC).sort((a,b)=>dist(a,last)-dist(b,last))[0];if(!nx)break;ts.push(nx);last=nx}
    shots.push({k:'chain',pts:[c,...ts],t:0,dur:420});ts.forEach((t,i)=>later(i*80,()=>{if(valid(t)){impact('electric',t.x,headY(t)+12*SC,true);hitT(t,i?.7:1)}}))}
  else if(kind==='aoe'||kind==='status'){const r=(x.r||40)*SC;shots.push({k:'aoe',type,x:c.x,y:c.y-4*SC,r,t:0,dur:kind==='status'?700:520,soft:kind==='status'});
    if(type==='ground'||p>=110)shake=Math.max(shake,350);
    for(let i=0;i<26;i++){const a=Math.random()*6.28,s=.08+Math.random()*.12;part(c.x,c.y-6*SC,col[i%3],{vx:Math.cos(a)*s,vy:Math.sin(a)*s*.6,life:500+Math.random()*200,sz:Math.round((type==='ground'||type==='rock'?3:2)*SC),g:type==='ground'?.0004:0})}
    for(const f of foes())if(dist(f,c)<=r)later(140+dist(f,c)/r*200,()=>{if(!valid(f))return;if(kind==='status')applyStatus(isMe?f:active(),x.st,x.ch);else{impact(type,f.x,headY(f)+12*SC);hitT(f)}})}
  else if(kind==='blast'){if(!valid(tgt))return;shootProj(type,c,tgt,()=>{const bx=tgt.x,by=tgt.y;shots.push({k:'boom',type,x:bx,y:by-8*SC,r:(x.r||24)*SC,t:0,dur:450});shake=Math.max(shake,200);
      for(const f of foes())if(Math.hypot(f.x-bx,f.y-by)<=(x.r||24)*SC+8*SC)hitT(f)})}
  else if(kind==='rain'){const ox=tgt?tgt.x:c.x,oy=tgt?tgt.y:c.y,r=(x.r||28)*SC,n=x.n||5;
    for(let i=0;i<n;i++){const a=Math.random()*6.28,rr=Math.sqrt(Math.random())*r,px=ox+Math.cos(a)*rr,py=oy+Math.sin(a)*rr*.7;
      shots.push({k:'drop',type,x:px,y:py,t:-i*110,dur:360,cb:()=>{impact(type,px,py-4*SC,true);if(type==='rock'||type==='grass'||p>=110)shake=Math.max(shake,120);
        for(const f of foes())if(Math.hypot(f.x-px,f.y-py)<=18*SC)hitT(f,.45)}})}}
  else if(kind==='wave'){if(!valid(tgt))return;shots.push({k:'wave',from:c,to:tgt,t:0,dur:360,hitAt:300,done:false,onHit:()=>valid(tgt)&&hitT(tgt)})}
  else if(kind==='heal')healSelf(c,isMe,x.heal);
}
function stStep(o,dt,mx,onDmg){if(!o||!o.st)return;o.st.t-=dt;
  if(o.st.k==='burn'||o.st.k==='poison'){o.st.tick-=dt;if(o.st.tick<=0){o.st.tick+=1000;onDmg(Math.max(1,Math.floor(mx*(o.st.k==='poison'?.06:.05))))}}
  if(o.st&&o.st.t<=0)o.st=null}
function chargeStep(c,dt){if(!(c.charging>0))return false;c.charging-=dt;const hx=c.x,hy=headY(c)+12*SC,col=FXC[c.chargeType]||FXC.normal;
  for(let i=0;i<2;i++){const a=Math.random()*6.28,r=(26+Math.random()*24)*SC;part(hx+Math.cos(a)*r,hy+Math.sin(a)*r,col[i%2],{tx:hx,ty:hy,life:420})}
  if(c.charging<=0&&c.afterCharge){const f=c.afterCharge;c.afterCharge=null;f()}return true}

// ===== combate =====
function hit(att,attTypes,def,defTypes,lvl,isMe){
  const e=eff(attTypes,defTypes),crit=Math.random()<.06;
  let d=((2*lvl/5+2)*50*att/def.defStat)/50+2;d=e===0?0:Math.max(1,Math.floor(d*e*(.85+Math.random()*.15)*(crit?1.5:1)));
  return{d,e,crit};
}
function attack(a,target,isMe){
  a.dir=dirOf(target.x-a.x,target.y-a.y);a.goal=null;a.lunge=200;
  play(a,'Atk',{v:atkPick(a,target,isMe),hit:()=>{
    if(isMe){const m=active();if(!m||!wilds.includes(target)||target.hp<=0)return;const type=moveType(S[m.mega||m.id].t,S[target.id].t),src=me;
      launch(type,src,target,()=>{const mm=active();if(!mm||!wilds.includes(target)||target.hp<=0)return;const c=calc(mm);
        const cm=a.cmul||1;a.cmul=1;const r=hit(c.atk*cm,[type],{defStat:target.def},S[target.id].t,mm.lvl);target.hp-=r.d;megaGain(1.5*cm);juice(target,me,cm>1?130:50,r);if(cm>1){shake=Math.max(shake,240);nums.push({x:target.x,y:headY(target)-10*SC,v:'Combo!',kind:'se',age:0});streaks(target.x,headY(target)+12*SC,'#ffcd75',10)}target.flash=360;target.aggro=true;
        num(target.x,headY(target),r.d,r.e>1?'se':r.e<1?'nv':r.crit?'cr':'');if(target.hp<=0)killWild(target,mm)});
    }else{if(!me||meDeadT>0)return;const m=active();if(!m)return;const type=moveType(S[a.id].t,S[m.mega||m.id].t),tgt=me;
      if(MODE==='arena')return arenaBasic(a,type);
      launch(type,a,tgt,()=>{const mm=active();if(!mm||me!==tgt||meDeadT>0||!wilds.includes(a))return;if(me.ifr>0){dodged();return}const c=calc(mm);
        const r=hit(a.atk,[type],{defStat:c.def},S[mm.mega||mm.id].t,a.lvl);mm.hp-=r.d;me.flash=360;juice(me,a,50,r,true);num(me.x,headY(me),r.d,'in');
        if(mm.hp<=0){mm.hp=0;meDown()}});
    }}});
}
function killWild(w,m){
  w.hp=0;wilds=wilds.filter(x=>x!==w);if(manualTarget===w)manualTarget=null;if(MODE==='arena'){arenaWin(w);return}
  const ti=G.tier,xp=Math.floor((40+ti*25)*w.lvl/5*(w.boss?6:1)*dexXp()),gold=Math.floor(w.lvl*1.5*(w.boss?12:1)*amuM('gold'));G.gold+=gold;G.kills++;
  track('kill',S[w.id].t);track('gold',gold);if(w.boss){G.stats.bosses++;track('boss')}else tutStep(1);
  if(w.boss&&MODE!=='arena'){G.items.rare+=1;G.balls.great+=5;G.balls.ultra+=2;G.pots+=3;shake=400;burst(w.x,w.y-10*SC,'#ffcd75',30,.2);
    const sd=bossStone(w);toast('Chefe derrotado! +1 Doce raro, +5 Great, +2 Ultra'+(sd?', '+MEGA[sd][7]:''));feed(`Chefe ${S[w.id].n} derrotado +${xp}xp +${gold} ouro`)}
  else{mobStone(w.id);G.boss[bossKey()]=(G.boss[bossKey()]||0)+1;feed(`${S[w.id].n} derrotado +${xp}xp +${gold} ouro`);
    if(G.boss[bossKey()]>=BOSS_N&&!wilds.some(x=>x.boss))later(1500,()=>{if(!wilds.some(x=>x.boss)&&G.boss[bossKey()]>=BOSS_N)spawnBoss()})}
  megaGain(6);const cap=lvlCap();gainXp(m,capXp(m,xp,cap));for(const o of G.team)if(o!==m&&o.hp>0)gainXp(o,capXp(o,Math.floor(xp*.25),cap));
  play(w,'Faint',{cb:()=>{}});launchCorpse(w);w.corpse=w.corpseMax=Object.values(G.balls).some(v=>v>0)?30000:5000;w.faintT=0;corpses.push(w);spawnT=Math.max(spawnT,1800);dirty=true;
}
function meDown(){if(!me)return;snd('faint');const d=me;const dm=G.team[G.active];if(dm){dm.st=null;if(dm.mega)megaOff(dm,true)}if(MODE==='arena'){later(900,()=>arenaEnd(false))}me.pending=null;me.charging=0;feed(`${S[d.id].n} desmaiou`);play(d,'Faint',{cb:()=>{}});meDeadT=1100;dirty=true}
function gainXp(m,x){
  if(m.lvl>=100)return;m.xp+=x;
  while(m.lvl<100&&m.xp>=need(m.lvl)){m.xp-=need(m.lvl);const b=calc(m).hp;m.lvl++;if(m.hp>0)m.hp+=calc(m).hp-b;
    const e=S[m.id].e;
    if(e&&m.lvl>=e[1]){const old=S[m.id].n,r=m.hp/calc(m).hp;m.id=e[0];m.hp=Math.max(1,Math.round(calc(m).hp*r));toast(`${old} evoluiu para ${S[m.id].n}!`);if(me&&me.u===m.u)snd('evo');
      if(me&&me.u===m.u){me.id=m.id;me.flash=0;me.evo=1200;play(me,'Idle');for(let i=0;i<3;i++)setTimeout(()=>me&&burst(me.x,headY(me)+12*SC,'#f4f4f4',18,.18),i*250)}}
    else if(me&&me.u===m.u&&!snd('lvl'))feed(`${S[m.id].n} subiu para o Nv ${m.lvl}`)}
  dirty=true;
}

// ===== captura e fusão =====
const BNEED=[1,2,4,8,16];
function mergeTarget(m){const L=rootOf(m.id);const pool=[...G.team,...G.depot].filter(x=>x!==m&&!x.shiny===!m.shiny&&rootOf(x.id)===L&&(x.b||0)<5);
  if(!pool.length)return null;return pool.sort((a,b)=>(G.team.includes(b)-G.team.includes(a))||(b.lvl-a.lvl))[0]}
function mergeInto(t,m,silent){t.bx=(t.bx||0)+1;t.q=Math.max(t.q,m.q);let up=false;
  while((t.b||0)<5&&t.bx>=BNEED[t.b||0]){t.bx-=BNEED[t.b||0];t.b=(t.b||0)+1;up=true}if(t.b>=5)t.bx=0;
  if(!silent){if(up)toast(`${S[t.id].n} subiu para +${t.b}!`);feed(`Fusão: ${S[t.id].n} ${t.b?'+'+t.b+' ':''}(${t.bx||0}/${BNEED[t.b||0]||'máx'})`);
    if(up&&me&&me.u===t.u){me.evo=900;burst(me.x,headY(me)+12*SC,'#ffcd75',24,.18)}}
  dirty=true;return up}
function addCapture(id,lvl,shiny,q,silent){id=S[id].mega||id;
  const isNew=!G.dex[id];G.dex[id]=1;const m=mk(id,lvl,shiny,q);
  if(isNew&&dexN()%10===0&&!silent){toast(`Marco da Pokédex: ${dexN()} espécies. +2% de XP e +10% de chance de shiny`);snd('quest')}
  if(G.auto.merge&&!shiny){const t=mergeTarget(m);if(t){const up=mergeInto(t,m,silent);return{merged:t,up,isNew}}}
  let where='equipe';if(G.team.length<5)G.team.push(m);else{G.depot.unshift(m);where='depot'}
  if(G.depot.length>300){const i=G.depot.map(x=>x.shiny).lastIndexOf(false);if(i>=0){G.gold+=sellPrice(G.depot[i]);G.depot.splice(i,1)}}
  dirty=true;return{m,where,isNew};
}
// ===== captura =====
function throwAt(c,kind){
  if(!c||c.throwing||G.balls[kind]<=0||!me)return;
  G.balls[kind]--;c.throwing=true;balls.push({c,kind,x0:me.x,y0:headY(me)+8*SC,t:0,ph:'fly'});dirty=true;
}
const BALLIMG={};for(const k in BALLS){const i=new Image();i.src=icon(BALLS[k].f);BALLIMG[k]=i}
function resolveBall(b){
  const c=b.c,p=Math.min(.95,CATCH[G.tier]*BALLS[b.kind].m*([443,246].includes(c.id)?.5:1)*(LEGEND.has(S[c.id].mega||c.id)?.25:1)*(c.boss?3:1));
  if(Math.random()<p){
    const r=addCapture(c.id,c.lvl,c.shiny,c.q,false);G.stats.caught++;track('catch');tutStep(2);snd('catch');
    if(!r.merged){toast(`${c.shiny?'Shiny! ':''}${S[c.id].n} capturado${r.isNew?' (novo)':''}`);feed(`${S[c.id].n} foi para o ${r.where}`)}
    burst(c.x,c.y-6*SC,'#ffcd75',20,.16);corpses=corpses.filter(x=>x!==c);
  }else{c.throwing=false;snd('fail');feed(`${S[c.id].n} escapou da ${BALLS[b.kind].n}`);burst(c.x,c.y-6*SC,'#f4f4f4',10)}
  dirty=true;
}

// ===== progresso offline =====
const OFF_MAX=8*3600e3,OFF_EFF=.6;
function offlineSim(ms){
  const a=active()||G.team[0];if(!a)return null;const secs=Math.min(ms,OFF_MAX)/1000;
  const [lo,hi,list]=BIOMES[G.biome].tiers[G.tier];const c=calc(a),avgL=(lo+hi)/2;
  let tsum=0;for(const id of list){const s=calc({id,lvl:avgL,q:1},true);const e=Math.max(.5,eff(S[a.id].t,S[id].t)||.5);
    const d=((2*a.lvl/5+2)*50*c.atk/s.def)/50+2;tsum+=Math.ceil(s.hp/Math.max(1,d*e*.92))*cooldown(c.spe)/1000+3.5}
  const killT=tsum/list.length,lvlF=Math.max(.15,Math.min(1,(a.lvl-avgL+12)/12));
  const kills=Math.min(20000,Math.floor((Math.min(secs,7200)*OFF_EFF+Math.max(0,secs-7200)*.25)/killT*lvlF));
  const before=G.team.map(m=>({u:m.u,id:m.id,lvl:m.lvl}));
  const R={secs:Math.round(secs),capped:ms>OFF_MAX,kills,xp:0,gold:0,caught:0,merged:0,ups:0,shiny:[],news:[],stones:[],used:0,evo:[],lv:[]};
  SILENT=true;
  for(let i=0;i<kills;i++){const id=pickWild(list),L=lo+Math.floor(Math.random()*(hi-lo+1));
    R.xp+=Math.floor((40+G.tier*25)*L/5*dexXp()*.8);R.gold+=Math.floor(L*1.5*.8*amuM('gold'));track('kill',S[id].t);{const st=mobStone(id,true,R.stones.length<OFF_STONE_MAX?.005:0);if(st)R.stones.push(st)}
    if(G.auto.throw){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(x=>G.balls[x]>0);
      if(k){G.balls[k]--;R.used++;if(Math.random()<Math.min(.95,CATCH[G.tier]*BALLS[k].m*([443,246].includes(id)?.5:1))){
        const sh=Math.random()<shinyP(),nw=!G.dex[id];const r=addCapture(id,L,sh,+(0.9+Math.random()*.2).toFixed(2),true);R.caught++;G.stats.caught++;track('catch');
        if(r.merged){R.merged++;if(r.up)R.ups++}if(sh)R.shiny.push(id);if(nw)R.news.push(id)}}}}
  G.gold+=R.gold;track('gold',R.gold);G.kills+=kills;G.boss[bossKey()]=Math.min(BOSS_N,(G.boss[bossKey()]||0)+kills);
  {const cap=lvlCap();R.cap=cap;gainXp(a,capXp(a,R.xp,cap));for(const o of G.team)if(o!==a&&o.hp>0)gainXp(o,capXp(o,Math.floor(R.xp*.25),cap))}
  SILENT=false;
  for(const b of before){const m=G.team.find(x=>x.u===b.u);if(!m)continue;if(m.id!==b.id)R.evo.push([b.id,m.id]);if(m.lvl>b.lvl)R.lv.push([m.id,b.lvl,m.lvl])}
  if(me){me.id=a.mega||a.id;me.shiny=a.shiny}
  dirty=true;return R;
}
function fmtTime(s){const h=Math.floor(s/3600),m=Math.floor(s%3600/60);return h?`${h}h ${m}min`:`${m} min`}
function showAway(R){
  const n=v=>Math.floor(v).toLocaleString('pt-BR');let h='';
  if(!R.kills){h=`<p class="note">Seu time não conseguiu derrotar ninguém nesta faixa. Tente uma faixa de nível mais baixo antes de sair.</p>`}
  else{
    h+=`<div class="aw"><img src="${icon('exp-share')}" alt=""><div><b>${n(R.kills)} derrotados</b><div class="sub">+${n(R.xp)} de XP para o Pokémon em campo</div></div></div>`;
    h+=`<div class="aw"><img src="${icon('amulet-coin')}" alt=""><div><b>+${n(R.gold)} de ouro</b></div></div>`;
    if(R.used)h+=`<div class="aw"><img src="${icon('poke-ball')}" alt=""><div><b>${n(R.caught)} capturas</b><div class="sub">${n(R.used)} bolas usadas${R.merged?`, ${n(R.merged)} fundidas em Pokémon da mesma linha`:''}${R.ups?`, ${R.ups} subidas de bônus`:''}</div></div></div>`;
    else if(G.auto.throw)h+=`<p class="note">Suas bolas acabaram, então nada foi capturado.</p>`;
    for(const [id,a,b] of R.lv)h+=`<div class="aw"><img src="${portrait(id)}" alt=""><div><b>${S[id].n}</b><div class="sub">Nv ${a} para Nv ${b}</div></div></div>`;
    for(const [a,b] of R.evo)h+=`<div class="aw hi"><img src="${portrait(b)}" alt=""><div><b>${S[a].n} evoluiu para ${S[b].n}</b></div></div>`;
    for(const id of R.shiny)h+=`<div class="aw hi"><img src="${portrait(id,true)}" alt=""><div><b>Shiny capturado: ${S[id].n}</b></div></div>`;
    {const c={};for(const f of R.stones)c[f]=(c[f]||0)+1;for(const f in c)h+=`<div class="aw hi"><img src="${portrait(f)}" alt=""><div><b>Drop: ${c[f]}x ${stoneN(f)}</b><div class="sub">Agora você tem ${G.items.stones[f]}</div></div></div>`}
    if(R.news.length)h+=`<div class="sub" style="margin:8px 0 4px">Novos na Pokédex</div><div class="awgrid">${[...new Set(R.news)].map(id=>`<img src="${portrait(id)}" alt="${S[id].n}" title="${S[id].n}">`).join('')}</div>`;
    h+=`<p class="note" style="margin-top:8px">Fora do jogo o time rende 60% nas 2 primeiras horas e 25% depois, até 8 horas${R.capped?' (você passou disso)':''}. Acima do Nv ${R.cap} esta faixa dá só 10% de XP: suba de faixa para crescer mais rápido.</p>`;
  }
  $('awayTime').textContent=`Você ficou fora por ${fmtTime(R.secs)} em ${BIOMES[G.biome].n}, faixa ${G.tier+1}.`;$('awayBody').innerHTML=h;$('away').style.display='grid';awayOpen=true;
}
function runOffline(){if(MODE!=='hunt')return;
  const now=Date.now(),el=now-(G.lastSeen||now);G.lastSeen=now;
  if(el<60000||!G.team.length||awayOpen)return;
  const R=offlineSim(el);if(R){wilds=wilds.filter(w=>!w.boss||true);showAway(R);save()}
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){G.lastSeen=Date.now();save()}else runOffline()});
window.addEventListener('pagehide',()=>{G.lastSeen=Date.now();save()});

// ===== loop =====
let last=performance.now(),dirty=true,hudT=0;
function tick(now){
  const raw=Math.min(60,now-last);last=now;let dt=raw*G.speed;if(flashA>0)flashA-=raw/260;
  pollPad();if(slowmo>0){slowmo-=raw;dt*=.3}if(hitstop>0){hitstop-=raw;dt=0}
  if(G.team.length&&!$('starter').style.display.includes('flex')&&!awayOpen){if(MODE==='ax')axStep(dt,raw);else if(MODE==='arena')stepArena(dt,raw);else step(dt,raw)}
  draw();hudT-=raw;if(hudT<=0){hud();hudT=100}
  requestAnimationFrame(tick);
}
function step(dt,raw){
  if(potCd>0)potCd-=dt;
  // centro pokémon
  if(center>0){center-=dt;if(center<=0){for(const m of G.team){m.hp=calc(m).hp;m.st=null}G.active=0;placeMe();feed('Enfermeira Joy curou o time');dirty=true}return}
  if(meDeadT>0){meDeadT-=dt;if(me)me.t+=dt;if(meDeadT<=0){const px=me?me.x:cam+VW*.3,py=me?me.y:laneMid();placeMe(px,py);if(!me){center=5000;wilds.forEach(w=>w.aggro=false);manualTarget=null;feed('O time caiu. Indo ao Centro Pokémon')}}}
  if(!me&&center<=0&&meDeadT<=0&&G.team.length){placeMe();if(!me){center=5000}}
  if(me&&meU!==G.team[G.active]?.u&&meDeadT<=0){for(const o of G.team)if(o.mega&&o!==G.team[G.active])megaOff(o,true);const a=active();if(a){me.id=a.mega||a.id;me.shiny=a.shiny;me.u=a.u;meU=a.u;me.spawn=400;play(me,'Idle')}}
  // nascimento
  const maxW=4;if(wilds.length<maxW){spawnT-=dt;if(spawnT<=0){spawnWild();spawnT=1200+Math.random()*1500}}
  const a=active();
  tickCd(dt);tickTimers(dt);if(shake>0)shake-=raw;
  for(const w of [...wilds])stStep(w,dt,w.max,d=>{w.hp-=d;num(w.x,headY(w),d,'st');if(w.hp<=0&&wilds.includes(w)&&G.team[G.active])killWild(w,G.team[G.active])});
  megaStep(dt,a);autoSpecial(a);
  if(a&&me&&meDeadT<=0)stStep(a,dt,calc(a).hp,d=>{a.hp-=d;num(me.x,headY(me),d,'in');if(a.hp<=0){a.hp=0;meDown()}});
  // jogador
  if(me&&meDeadT<=0&&a){
    if(me.id!==(a.mega||a.id)){me.id=a.mega||a.id;me.shiny=a.shiny}
    me.t+=dt;if(me.flash>0)me.flash-=dt;if(me.spawn>0)me.spawn-=dt;if(me.evo>0)me.evo-=dt;me.cd-=dt;
    let tgt=manualTarget&&wilds.includes(manualTarget)?manualTarget:null;
    if(!tgt&&G.auto.hunt){let best=1e9;for(const w of wilds){if(w.spawn>0||w.x>cam+VW+8*SC)continue;const d=Math.hypot(w.x-me.x,w.y-me.y)-(w.aggro?80:0);if(d<best){best=d;tgt=w}}}
    me.target=tgt;
    const st=a.st,slow=st&&st.k==='para'?.55:1;
    if(chargeStep(me,dt)){}
    else if(st&&st.k==='sleep'){if(me.anim==='Walk')play(me,'Idle')}
    else{
      let mk=null;
      if(me.pending){if(cdOf(me.u,me.pending)>0||!movesOf(a).includes(me.pending))me.pending=null;else mk=me.pending}
      if(!mk&&G.auto.moves&&me.anim!=='Atk')mk=pickMove(movesOf(a),me,tgt,true);
      const need=mk?needRange(mk):0;
      if(mk&&me.anim!=='Atk'&&(need===0||(tgt&&dist(tgt,me)<=need))){cast(me,true,mk,tgt);me.pending=null;me.cd=Math.max(me.cd,450)}
      else if(mk&&me.pending&&tgt&&me.anim!=='Atk'){move(me,tgt.x,tgt.y,dt*slow,62)}
      else if(tgt){const R=rangeOf(moveType(S[a.mega||a.id].t,S[tgt.id].t)),d=dist(tgt,me);
        if(d>R){if(me.anim!=='Atk'&&me.anim!=='Hurt')move(me,tgt.x,tgt.y,dt*slow,62)}
        else if(me.cd<=0&&me.anim!=='Atk'){attack(me,tgt,true);me.cd=cooldown(calc(a).spe)*(slow<1?1.5:1)}
        else if(me.anim==='Walk')play(me,'Idle');
      }else if(me.anim!=='Atk'&&me.anim!=='Hurt'&&!(me.lunge>0)){me.x+=dt*.034*SC*slow;me.y+=(laneMid()-me.y)*Math.min(1,dt/900);me.dir=2;if(me.anim!=='Walk')play(me,'Walk')}
    }
    if(G.auto.pot&&a.hp>0&&a.hp<calc(a).hp*.35&&G.pots>0&&potCd<=0){G.pots--;a.hp=Math.min(calc(a).hp,a.hp+calc(a).hp*.5);potCd=3000;feed('Poção usada');burst(me.x,headY(me)+10*SC,'#73eff7',12);dirty=true}
    // regenera fora de combate
    if(!wilds.some(w=>w.aggro))for(const m of G.team)if(m.hp>0)m.hp=Math.min(calc(m).hp,m.hp+calc(m).hp*.03*dt/1000);
  }
  bodyStep(dt);
  // selvagens
  for(const w of wilds){
    w.t+=dt;if(w.flash>0)w.flash-=dt;if(w.spawn>0)w.spawn-=dt;w.cd-=dt;
    if(chargeStep(w,dt)){}
    else if(w.st&&w.st.k==='sleep'){if(w.anim==='Walk')play(w,'Idle')}
    else if(w.aggro&&me&&meDeadT<=0){const d=dist(me,w),slow=w.st&&w.st.k==='para'?.55:1;
      const k=w.anim!=='Atk'?pickMove(w.moves||[],w,me,false):null;
      if(k){cast(w,false,k,me);w.cd=Math.max(w.cd,600)}
      else if(d>rangeOf(moveType(S[w.id].t,S[me.id].t))){if(w.anim!=='Atk'&&w.anim!=='Hurt')move(w,me.x,me.y,dt*slow,50)}
      else if(w.cd<=0&&w.anim!=='Atk'){attack(w,me,false);w.cd=cooldown(w.spe)*1.15*(slow<1?1.5:1)}
      else if(w.anim==='Walk')play(w,'Idle');
    }else{
      if(me&&meDeadT<=0&&w.spawn<=0&&w.x-me.x<VW*.8)w.aggro=true;else if(w.anim==='Walk')play(w,'Idle');
    }
  }
  // corpos
  for(const c of corpses){c.t+=dt;if(!c.throwing)c.corpse-=dt}
  corpses=corpses.filter(c=>{if(c.x<cam-60*SC&&!c.throwing)return false;if(c.corpse<=0&&!c.throwing){feed(`${S[c.id].n} Nv${c.lvl} sumiu`);return false}return true});
  if(G.auto.throw&&me&&meDeadT<=0){const c=corpses.find(c=>!c.throwing);if(c){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(x=>G.balls[x]>0);if(k)throwAt(c,k);else if(!noBallWarned){noBallWarned=true;toast('Sem bolas. Compre na Loja')}}}
  if(me)cam+=(me.x-VW*.3-cam)*Math.min(1,raw/260);
  // bolas
  for(const b of balls){b.t+=dt;if(b.ph==='fly'&&b.t>=480){b.ph='shake';snd('shake');b.t=0}else if(b.ph==='shake'&&b.t>=1150){b.ph='done';resolveBall(b)}}
  balls=balls.filter(b=>b.ph!=='done');
  // efeitos
  stepShots(dt);
  ambient();
  for(const p of fx){p.age+=raw;if(p.tx!==undefined){p.x+=(p.tx-p.x)*.12;p.y+=(p.ty-p.y)*.12}else{p.x+=p.vx*raw;p.y+=p.vy*raw;p.vy+=(p.g||0)*raw}}fx=fx.filter(p=>p.age<p.life);
  for(const n of nums)n.age+=raw;nums=nums.filter(n=>n.age<900);
}
function move(e,tx,ty,dt,speed){const dx=tx-e.x,dy=ty-e.y,d=Math.hypot(dx,dy);if(d<2)return true;
  const s=Math.min(d,speed*SC/1.45*dt/1000);e.x+=dx/d*s;e.y+=dy/d*s;e.y=Math.max(LANE_T,Math.min(LANE_B,e.y));if(MODE==='arena')e.x=Math.max(cam+14*SC,Math.min(cam+VW-14*SC,e.x));if(Math.abs(dx)>2)e.dir=dirOf(dx,dy);if(e.anim!=='Walk')play(e,'Walk');return false}

function draw(){if(MODE==='ax'){axDraw();return}
  ctx.setTransform(DPR,0,0,DPR,0,0);ctx.imageSmoothingEnabled=false;if(shake>0){const m=Math.min(1,shake/200)*3*SC/1.6;ctx.translate(Math.round((Math.random()-.5)*2*m),Math.round((Math.random()-.5)*2*m))}
  drawBG(performance.now());ctx.translate(-Math.round(cam),0);drawWarn();
  const list=[...corpses.map(c=>({e:c,c:1})),...wilds.map(w=>({e:w})),...(me?[{e:me,me:1}]:[])].sort((p,q)=>p.e.y-q.e.y);
  for(const it of list){const e=it.e;
    if(it.c){ if(!e.throwing||balls.find(b=>b.c===e&&b.ph==='fly'))drawEnt(e,e.faintT!==undefined&&e.t>600);
      if(!e.throwing&&MODE!=='arena'){const r=6*SC,x=e.x,y=e.y-24*SC;ctx.save();ctx.strokeStyle='#0e0f1d';ctx.lineWidth=4;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.stroke();
        ctx.strokeStyle='#ffcd75';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r,-Math.PI/2,-Math.PI/2+6.283*e.corpse/e.corpseMax);ctx.stroke();ctx.restore()}
      continue}
    if(e.spawn>0){ctx.save();ctx.globalAlpha=1-e.spawn/400;drawEnt(e);ctx.restore()}else drawEnt(e);
    if(e.evo>0){ctx.save();ctx.globalAlpha=Math.sin(e.evo/1200*Math.PI)*.8;ctx.fillStyle='#f4f4f4';ctx.beginPath();ctx.arc(e.x,headY(e)+10*SC,18*SC,0,7);ctx.fill();ctx.restore()}
    // nome e vida acima da cabeça, estilo Tibia
    const hy=headY(e)-6*SC,bw=(e.boss?40:22)*SC;let hp,mx;
    if(it.me){const a=active();if(!a)continue;hp=a.hp;mx=calc(a).hp}else{hp=e.hp;mx=e.max}
    const r=Math.max(0,hp/mx);
    ctx.fillStyle='#0e0f1d';ctx.fillRect(Math.round(e.x-bw/2)-1,Math.round(hy)-1,bw+2,Math.round(2*SC)+2);
    ctx.fillStyle=r<.25?'#b13e53':r<.5?'#ffcd75':'#38b764';ctx.fillRect(Math.round(e.x-bw/2),Math.round(hy),Math.round(bw*r),Math.round(2*SC));
    const label=(it.me?'':(e.boss?'CHEFE ':'')+`Nv${e.lvl} `)+S[e.id].n+(it.me&&active()&&active().b?` +${active().b}`:'');ctx.font=`700 ${Math.round(6*SC)}px "Pixelify Sans",monospace`;ctx.textAlign='center';
    ctx.lineWidth=3;ctx.strokeStyle='#0e0f1d';ctx.strokeText(label,e.x,hy-3);ctx.fillStyle=e.boss?'#ef7d57':e.shiny?'#ffcd75':(it.me?'#73eff7':(e===me?.target?'#ff9e7a':'#f4f4f4'));ctx.fillText(label,e.x,hy-3);
    {const st=it.me?(active()&&active().st):e.st;if(st){const L=ST_LABEL[st.k],fs=Math.round(5*SC);ctx.font=`700 ${fs}px "Pixelify Sans",monospace`;const tw=ctx.measureText(L[0]).width+6,bx=Math.round(e.x-tw/2),by=Math.round(hy-3-6*SC-fs-4);ctx.fillStyle='#0e0f1d';ctx.fillRect(bx-1,by-1,tw+2,fs+5);ctx.fillStyle=L[1];ctx.fillRect(bx,by,tw,fs+3);ctx.fillStyle='#0e0f1d';ctx.fillText(L[0],e.x,by+fs+1)}}
  }
  drawFG();
  // bolas
  for(const b of balls){const im=BALLIMG[b.kind],s=14*SC;let x,y,rot=0;
    if(b.ph==='fly'){const k=b.t/480;x=b.x0+(b.c.x-b.x0)*k;y=b.y0+(b.c.y-6*SC-b.y0)*k-Math.sin(k*Math.PI)*40*SC;rot=k*12}
    else{x=b.c.x;y=b.c.y-6*SC;const k=b.t/1150;rot=Math.sin(k*Math.PI*3)*.45*(1-k*.3)}
    ctx.save();ctx.translate(x,y);ctx.rotate(rot);if(im.complete)ctx.drawImage(im,-s/2,-s/2,s,s);ctx.restore()}
  drawShots();
  for(const p of fx){ctx.globalAlpha=1-p.age/p.life;ctx.fillStyle=p.col;ctx.fillRect(Math.round(p.x),Math.round(p.y),p.sz,p.sz)}ctx.globalAlpha=1;
  ctx.globalCompositeOperation='lighter';for(const p of fx){if(p.sz<SC*2)continue;ctx.globalAlpha=(1-p.age/p.life)*.35;const z=p.sz*3;ctx.drawImage(glowTex(p.col),p.x-z+p.sz/2,p.y-z+p.sz/2,z*2,z*2)}ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
  for(const n of nums){const k=n.age/900;ctx.save();ctx.globalAlpha=1-Math.max(0,k-.6)/.4;ctx.textAlign='center';ctx.lineWidth=4;ctx.strokeStyle='#0e0f1d';
    if(n.kind==='name'){ctx.font=`700 ${Math.round(6.5*SC)}px "Pixelify Sans",monospace`;const y=n.y-k*8*SC;ctx.strokeText(n.v,n.x,y);ctx.fillStyle=n.col;ctx.fillText(n.v,n.x,y);ctx.restore();continue}
    const pop=1+(n.kind==='se'||n.kind==='cr'?.7:.35)*Math.max(0,1-n.age/140);ctx.font=`700 ${Math.round((n.kind==='se'?11:n.kind==='cr'?10:8)*SC*pop)}px "Pixelify Sans",monospace`;const y=n.y-(1-Math.pow(1-k,3))*24*SC;ctx.strokeText(n.v,n.x,y);
    ctx.fillStyle=n.kind==='se'?'#ffcd75':n.kind==='nv'?'#94b0c2':n.kind==='in'?'#ef7d57':n.kind==='cr'?'#73eff7':n.kind==='heal'?'#a7f070':n.kind==='st'?'#d59bff':'#f4f4f4';ctx.fillText(n.v,n.x,y);ctx.restore()}
  ctx.setTransform(DPR,0,0,DPR,0,0);if(flashA>0){ctx.globalAlpha=Math.min(1,flashA);ctx.fillStyle=flashC;ctx.fillRect(0,0,VW,VH);ctx.globalAlpha=1}
  drawCut();if(MODE==='arena')drawPad();
}

// ===== impacto: brilho, rastro, recuo, hit-stop =====
let hitstop=0,flashA=0,flashC='#f4f4f4',glows=[];
function scrFlash(a,c='#f4f4f4'){if(SILENT)return;flashA=Math.max(flashA,a);flashC=c}
const GLOWC={};
function glowTex(col){if(GLOWC[col])return GLOWC[col];const c=document.createElement('canvas');c.width=c.height=32;const g=c.getContext('2d'),r=g.createRadialGradient(16,16,0,16,16,16);
  r.addColorStop(0,col);r.addColorStop(.3,col+'aa');r.addColorStop(1,col+'00');g.fillStyle=r;g.fillRect(0,0,32,32);return GLOWC[col]=c}
function glow(x,y,col,r,life){if(SILENT)return;glows.push({x,y,col,r:r*SC/2.2,life,t0:performance.now()})}
function drawGlows(){const now=performance.now();glows=glows.filter(g=>now-g.t0<g.life);if(!glows.length)return;ctx.save();ctx.globalCompositeOperation='lighter';
  for(const g of glows){const k=(now-g.t0)/g.life,r=g.r*(1+k*.6);ctx.globalAlpha=(1-k)*.8;ctx.drawImage(glowTex(g.col),g.x-r,g.y-r,r*2,r*2)}ctx.restore()}
function drawTrail(s){if(!s.tr||s.tr.length<2)return;const c=FXC[s.type]||FXC.normal;ctx.save();ctx.globalCompositeOperation='lighter';
  s.tr.forEach(([x,y],i)=>{const k=(i+1)/s.tr.length,z=4*SC*k;ctx.globalAlpha=.45*k;ctx.drawImage(glowTex(c[1]),x-z*2,y-z*2,z*4,z*4)});ctx.restore();
  const z=Math.round(5*SC);ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.7;ctx.drawImage(glowTex(c[0]),s.x-z*2,s.y-z*2,z*4,z*4);ctx.restore()}
function juice(t,src,p,r,onMe){if(!t||SILENT)return;const big=p>=90||r.crit||r.e>1;
  t.sq=Math.min(1,(t.sq||0)+(big?1:.55));
  const dir=Math.sign(t.x-(src?src.x:t.x-1))||1;t.kb=(t.kb||0)+dir*(big?13:5)*SC/2.2*(t.boss?.4:1);
  if(big){hitstop=Math.max(hitstop,onMe?35:55);shake=Math.max(shake,onMe?170:110)}
  if(r.crit&&!onMe)scrFlash(.12)}
function bodyStep(dt){spStep(dt);stepSpx(dt);for(const c of corpses){if(c.kb){const s=c.kb*Math.min(1,dt/70);c.x+=s;c.kb-=s;if(Math.abs(c.kb)<.2)c.kb=0}airStep(c,dt);if(c.sq>0)c.sq=Math.max(0,c.sq-dt/300)}
  for(const e of [me,...wilds]){if(!e)continue;airStep(e,dt);
    if(e.kb){const s=e.kb*Math.min(1,dt/70);e.x+=s;e.kb-=s;if(Math.abs(e.kb)<.2)e.kb=0}
    if(e.sq>0)e.sq=Math.max(0,e.sq-dt/170);if(e.lunge>0)e.lunge-=dt;if(e.ifr>0)e.ifr-=dt;
    if(S[e.id]&&S[e.id].mega&&Math.random()<dt/90){const c=['#ff6b6b','#ffcd75','#a7f070','#73eff7','#b8a0ff'][Math.floor(Math.random()*5)];part(e.x+(Math.random()-.5)*20*SC*(e.scale||1),e.y-Math.random()*8*SC,c,{vy:-.04-Math.random()*.04,life:700,sz:Math.round(SC)})}}}
function megaAura(e,K){const now=performance.now(),cy=headY(e)+16*SC*K,r=20*SC*K*(1+.07*Math.sin(now/150));
  const c=['#ff6b6b','#ffcd75','#a7f070','#73eff7','#b8a0ff'][Math.floor(now/140)%5];
  ctx.save();ctx.filter='none';ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.5;ctx.drawImage(glowTex(c),e.x-r,cy-r,r*2,r*2);ctx.restore()}

// ===== mega evolução =====
const MEGA_LV=30,MEGA_T=45000;
let megaE=0,megaT=0;
const stoneN=f=>MEGA[f][7];
function canMega(m){return !!(m&&G.items.ring&&m.hold&&MEGA[m.hold]&&MEGA[m.hold][0]===m.id&&G.items.stones[m.hold]&&m.lvl>=MEGA_LV)}
function megaGain(v){const a=G.team[G.active];if(!canMega(a)||a.mega)return;megaE=Math.min(100,megaE+v*(MODE==='arena'?2.2:1))}
function megaOn(){const a=active();if(!a||!canMega(a)||a.mega||!me||meDeadT>0||megaE<100||me.spawn>0)return;
  const r=a.hp/calc(a).hp;a.mega=a.hold;a.hp=Math.max(1,Math.round(calc(a).hp*r));me.id=a.mega;megaE=0;megaT=MEGA_T;
  play(me,'Idle');me.evo=1400;scrFlash(.85);hitstop=Math.max(hitstop,160);shake=Math.max(shake,500);snd('mega');
  const cols=['#ff6b6b','#ffcd75','#a7f070','#73eff7','#b8a0ff','#f4f4f4'],hy=headY(me)+12*SC;
  for(let i=0;i<54;i++){const an=i/54*6.283,s=.1+Math.random()*.12;part(me.x,hy,cols[i%6],{vx:Math.cos(an)*s,vy:Math.sin(an)*s,life:900,sz:Math.round(2.5*SC)})}
  shots.push({k:'ring',x:me.x,y:hy,t:0,dur:700,c:'#ffcd75'});later(140,()=>me&&shots.push({k:'ring',x:me.x,y:hy,t:0,dur:700,c:'#73eff7'}));glow(me.x,hy,'#f4f4f4',60,700);
  toast(`${S[a.id].n} mega evoluiu para ${S[a.mega].n}!`);feed(`Mega Evolução: ${S[a.mega].n}`);G.stats.megas=(G.stats.megas||0)+1;dirty=true}
function megaOff(m,quiet){if(!m||!m.mega)return;const r=m.hp/calc(m).hp;delete m.mega;m.hp=m.hp>0?Math.max(1,Math.round(calc(m).hp*r)):0;
  if(me&&me.u===m.u&&meDeadT<=0){me.id=m.id;if(!quiet){burst(me.x,headY(me)+12*SC,'#f4f4f4',18,.15);feed(`${S[m.id].n} voltou ao normal`)}}megaT=0;dirty=true}
function megaStep(dt,a){if(!a)return;if(a.mega){megaT-=dt;if(megaT<=0)megaOff(a)}
  else if(G.auto.mega&&megaE>=100&&canMega(a)&&me&&meDeadT<=0&&(MODE==='arena'||wilds.some(w=>w.aggro&&w.x-me.x<VW*.6)))megaOn()}
function megaHud(a){const b=$('megaBtn');const show=!!(a&&(a.mega||canMega(a)));b.style.display=show?'flex':'none';if(!show)return;
  b.classList.toggle('ready',!a.mega&&megaE>=100);b.classList.toggle('on',!!a.mega);
  $('megaFill').style.height=(a.mega?100*megaT/MEGA_T:megaE)+'%';b.querySelector('span').textContent=a.mega?Math.ceil(megaT/1000/G.speed)+'s':megaE>=100?'MEGA!':'MEGA'}
// pedras são itens acumuláveis: G.items.stones[forma]=quantidade. Uma fica presa em cada Pokémon que segura; o resto pode ser vendido.
const addStone=(f,q=1)=>{G.items.stones[f]=(G.items.stones[f]||0)+q};
const holders=f=>[...G.team,...G.depot].filter(m=>m.hold===f).length;
const freeStones=f=>Math.max(0,(G.items.stones[f]||0)-holders(f));
function bossStone(w){const sp=S[w.id].mega||w.id,fs=MEGAS[sp];if(!fs)return null;
  if(Math.random()>(G.tier>=3?.5:.2))return null;const f=fs[Math.floor(Math.random()*fs.length)];addStone(f);feed(`Você ganhou: ${stoneN(f)}`);return f}
function megaRow(m){const fs=MEGAS[m.id];if(!fs)return '';const own=fs.filter(f=>G.items.stones[f]);
  let h='<div class="sub" style="margin-top:3px">';
  if(!own.length)h+=`Tem mega: ${fs.map(f=>S[f].n).join(', ')}. A pedra cai de selvagens da linha (5%), chefes, Arena ou Loja.`;
  else{h+=own.map(f=>m.hold===f?`<b style="color:var(--gold)">Segura ${stoneN(f)}</b>`:`<button class="btn hold" data-hold="${m.u}|${f}">Segurar ${stoneN(f)} (${G.items.stones[f]})</button>`).join(' ');
    if(m.lvl<MEGA_LV)h+=` Mega a partir do Nv ${MEGA_LV}.`;if(!G.items.ring)h+=' Falta a Pulseira Mega.'}
  return h+'</div>'}
const RING_P=15000,STONE_P=20000,STONE_SELL=1000;
function megaShop(){let h='<h3>Mega Evolução</h3>';
  h+=`<div class="shop win"><img src="${icon('mega-ring')}" alt=""><div><b>Pulseira Mega</b><div class="sub">${G.items.ring?'Você já tem':'Libera a Mega Evolução. Também sai na 1ª vitória da Arena'}</div></div>${G.items.ring?'':`<button class="btn y" data-buyring="1" ${G.gold<RING_P?'disabled':''}>${RING_P.toLocaleString('pt-BR')}</button>`}</div>`;
  const own=Object.keys(G.items.stones).map(Number).filter(f=>G.items.stones[f]>0&&MEGA[f]).sort((a,b)=>freeStones(b)-freeStones(a));
  h+=`<h3>Suas pedras mega</h3>`;
  if(!own.length)h+='<p class="note">Nenhuma ainda. Elas caem dos selvagens de linhas com mega (5% por abate).</p>';
  else h+=`<p class="note" style="margin-bottom:6px">Cada Pokémon que segura uma pedra prende uma. As outras você pode vender por ${STONE_SELL.toLocaleString('pt-BR')} cada.</p>`;
  for(const f of own){const fr=freeStones(f);h+=`<div class="shop win"><img src="${portrait(f)}" alt=""><div><b>${stoneN(f)} x${G.items.stones[f]}</b><div class="sub">${holders(f)?`${holders(f)} em uso, `:''}${fr} livre${fr===1?'':'s'}</div></div><div style="display:flex;gap:4px"><button class="btn" data-sellstone="${f}" ${fr?'':'disabled'}>Vender 1</button>${fr>1?`<button class="btn" data-sellstone="${f}" data-all="1">Todas</button>`:''}</div></div>`}
  const sp=[...new Set([...G.team,...G.depot].map(m=>m.id))].filter(id=>MEGAS[id]);const fs=sp.flatMap(id=>MEGAS[id]).filter(f=>!G.items.stones[f]);
  if(fs.length)h+='<h3>Comprar pedra</h3>';
  for(const f of fs)h+=`<div class="shop win"><img src="${portrait(f)}" alt=""><div><b>${stoneN(f)}</b><div class="sub">Para ${S[f].n}</div></div><button class="btn y" data-buystone="${f}" ${G.gold<STONE_P?'disabled':''}>${STONE_P.toLocaleString('pt-BR')}</button></div>`;
  return h}
function megaClick(t,d){
  if(t.id==='megaBtn'){megaOn();return true}
  if(d.hold){const [u,fs]=d.hold.split('|'),f=+fs;const m=[...G.team,...G.depot].find(x=>x.u===u);if(!m)return true;
    if(freeStones(f)<=0){const o=[...G.depot,...G.team].find(x=>x.hold===f&&x!==m&&!x.mega);if(o)delete o.hold}
    if(freeStones(f)>0||m.hold===f){if(m.mega)megaOff(m,true);m.hold=f;toast(`${S[m.id].n} segura ${stoneN(f)}`)}dirty=true;sheetDirty=true;return true}
  if(d.sellstone){const f=+d.sellstone,q=d.all?freeStones(f):Math.min(1,freeStones(f));if(q>0){G.items.stones[f]-=q;G.gold+=q*STONE_SELL;toast(`Vendeu ${q} ${stoneN(f)} por ${(q*STONE_SELL).toLocaleString('pt-BR')}`);snd('catch')}dirty=true;sheetDirty=true;return true}
  if(d.buyring){if(G.gold>=RING_P&&!G.items.ring){G.gold-=RING_P;G.items.ring=true;toast('Pulseira Mega comprada');snd('quest')}dirty=true;return true}
  if(d.buystone){const f=+d.buystone;if(G.gold>=STONE_P){G.gold-=STONE_P;addStone(f);toast(stoneN(f)+' comprada');snd('quest')}dirty=true;return true}
  return false}

// ===== entrada: joystick na tela, controle de videogame e teclado =====
// Tudo vira o mesmo objeto INP. No PvP, o outro jogador manda esse mesmo objeto pela rede.
const INP={x:0,y:0,atk:false,dodge:false,mega:false,sk:[0,0,0,0]},PAD={on:false,id:null,ox:0,oy:0,vx:0,vy:0,atk:false},KEYS={},GPP={};
function pollPad(){let gx=0,gy=0,ga=false;const gps=navigator.getGamepads?navigator.getGamepads():[];const gp=gps&&[...gps].find(g=>g&&g.connected);
  if(gp){gx=gp.axes[0]||0;gy=gp.axes[1]||0;const b=i=>!!(gp.buttons[i]&&gp.buttons[i].pressed);
    if(b(14))gx=-1;if(b(15))gx=1;if(b(12))gy=-1;if(b(13))gy=1;ga=b(0);
    const edge=(i,fn)=>{if(b(i)&&!GPP[i])fn();GPP[i]=b(i)};
    edge(1,()=>INP.dodge=true);edge(2,()=>INP.sk[0]=1);edge(3,()=>INP.sk[1]=1);edge(4,()=>INP.sk[2]=1);edge(5,()=>INP.sk[3]=1);edge(6,()=>INP.mega=true);edge(7,()=>INP.sp=true);edge(8,()=>INP.mega=true)}
  const kx=(KEYS.ArrowRight||KEYS.KeyD?1:0)-(KEYS.ArrowLeft||KEYS.KeyA?1:0),ky=(KEYS.ArrowDown||KEYS.KeyS?1:0)-(KEYS.ArrowUp||KEYS.KeyW?1:0);
  let x=PAD.on?PAD.vx:0,y=PAD.on?PAD.vy:0;if(Math.abs(gx)>.22||Math.abs(gy)>.22){x=gx;y=gy}if(kx||ky){x=kx;y=ky}
  const l=Math.hypot(x,y);if(l>1){x/=l;y/=l}INP.x=x;INP.y=y;INP.atk=PAD.atk||ga||!!(KEYS.KeyJ||KEYS.Space);
  if(MODE==='hunt'){const a=G.team[G.active];for(let i=0;i<4;i++)if(INP.sk[i]){INP.sk[i]=0;const k=a&&movesOf(a)[i];if(k)castManual(k)}if(INP.mega){INP.mega=false;megaOn()}if(INP.sp){INP.sp=false;useSpecial()}INP.dodge=false}}
document.addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('input,textarea'))return;KEYS[e.code]=true;
  const n=['Digit1','Digit2','Digit3','Digit4'].indexOf(e.code);if(n>=0)INP.sk[n]=1;
  if(e.code==='KeyK'||e.code==='ShiftLeft'||e.code==='KeyL')INP.dodge=true;if(e.code==='KeyM')INP.mega=true;if(e.code==='KeyF')INP.ball=true;if(e.code==='KeyE')INP.sp=true;
  if(MODE==='arena'&&['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault()});
document.addEventListener('keyup',e=>{KEYS[e.code]=false});
window.addEventListener('blur',()=>{for(const k in KEYS)KEYS[k]=false;PAD.on=false;PAD.atk=false});
function setupPad(){const p=$('pad');p.innerHTML='<div id="joy"></div><button id="bAtk" class="pbtn btn y">Atacar</button><button id="bDodge" class="pbtn btn">Esquivar</button><button id="arExit" class="btn">Sair</button>';
  const j=$('joy'),R=()=>$('stage').getBoundingClientRect();
  j.addEventListener('pointerdown',e=>{const r=R();PAD.on=true;PAD.id=e.pointerId;PAD.ox=e.clientX-r.left;PAD.oy=e.clientY-r.top;PAD.vx=PAD.vy=0;j.setPointerCapture(e.pointerId);e.preventDefault()});
  j.addEventListener('pointermove',e=>{if(!PAD.on||e.pointerId!==PAD.id)return;const r=R(),dx=e.clientX-r.left-PAD.ox,dy=e.clientY-r.top-PAD.oy,l=Math.hypot(dx,dy),M=42;
    if(l>M*1.6){PAD.ox+=dx*(1-M*1.6/l);PAD.oy+=dy*(1-M*1.6/l)}PAD.vx=clamp(dx/M,-1,1);PAD.vy=clamp(dy/M,-1,1)});
  const up=e=>{if(e.pointerId===PAD.id){PAD.on=false;PAD.vx=PAD.vy=0}};j.addEventListener('pointerup',up);j.addEventListener('pointercancel',up);
  const A=$('bAtk');A.addEventListener('pointerdown',e=>{PAD.atk=true;A.setPointerCapture(e.pointerId);e.preventDefault()});
  for(const ev of ['pointerup','pointercancel'])A.addEventListener(ev,()=>PAD.atk=false);
  $('bDodge').addEventListener('pointerdown',e=>{INP.dodge=true;e.preventDefault()})}
function drawPad(){const r=42;let x=PAD.on?PAD.ox:70,y=PAD.on?PAD.oy:VH-78;ctx.save();ctx.globalAlpha=PAD.on?.5:.22;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();
  ctx.globalAlpha=PAD.on?.75:.35;ctx.strokeStyle='#f4f4f4';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.stroke();
  ctx.globalAlpha=PAD.on?.9:.4;ctx.fillStyle='#f4f4f4';ctx.beginPath();ctx.arc(x+INP.x*r*.7,y+INP.y*r*.7,r*.42,0,7);ctx.fill();ctx.restore()}

// ===== Arena =====
// Luta 1 contra 1 com o Pokémon em campo. Os golpes do chefe avisam antes onde vão cair, então dá para desviar.
const ARENA_L=[[302,12],[310,18],[308,24],[428,30],[229,36],[303,42],[359,46],[282,50],[448,54],[94,58],[65,62],[6,66],[248,70],[381,76],[150,84],[384,92]];
const ARENA_T=150000;
let AR=null,STASH=null,WARN=[],ASH=[];
function arenaList(){return ARENA_L.map(([sp,l])=>{const fs=MEGAS[sp];if(!fs)return null;const f=fs.find(x=>!META[x].alias)||fs[0];return{f,sp,l}}).filter(Boolean).map((o,i)=>(o.i=i,o))}
function arenaFoe(L){const w=ent(L.f,false,cam+VW*.78,laneMid());w.dir=6;w.lvl=L.l;w.q=1.05;const c=calc(w,true);Object.assign(w,c);
  w.hp=w.max=Math.round(c.hp*L.hp);w.atk=c.atk*(L.atk||1);w.boss=true;w.scale=1.3;w.aggro=true;w.u='a'+Math.random().toString(36).slice(2);w.moves=movesOf(w);w.spawn=900;wilds.push(w);return w}
// torre: andar n escolhe um chefe mega com sprite próprio, cada vez mais forte
const TOWER_POOL=()=>Object.keys(MEGA).map(Number).filter(f=>S[f]&&!META[f].alias).sort((a,b)=>S[a].s.reduce((x,y)=>x+y,0)-S[b].s.reduce((x,y)=>x+y,0));
function towerL(n){const P=TOWER_POOL(),band=Math.min(P.length-1,Math.floor((n-1)/40*P.length)),lo=Math.max(0,band-6),hi=Math.min(P.length,band+6);
  const f=P[lo+((n*7919)%(hi-lo))];const l=Math.min(100,8+n*3);return{f,l,hp:3+n*.1,atk:1+Math.max(0,n-31)*.06,i:-1,floor:n}}
const wk=()=>{const d=new Date(),y=new Date(Date.UTC(d.getFullYear(),0,1)),w=Math.ceil(((d-y)/864e5+y.getUTCDay()+1)/7);return d.getFullYear()+'-'+w};
function arenaStart(i,tower){const a=active();if(!a||center>0||meDeadT>0||!me)return toast('Seu Pokémon precisa estar de pé');
  let L;if(tower){const fl=Math.floor((G.tower.best||0)/5)*5+1;L=towerL(fl)}else{L=arenaList()[i];if(!L||i>G.arena.best)return;L=Object.assign({hp:4+L.i*.25},L)}
  STASH={wilds,corpses,balls,shots,slashes,timers,cam,mx:me.x,my:me.y,manualTarget,hp:G.team.map(m=>[m.u,m.hp,m.st]),megaE,megaT};
  MODE='arena';wilds=[];corpses=[];balls=[];shots=[];slashes=[];timers=[];WARN=[];ASH=[];SPX=[];fx=[];nums=[];manualTarget=null;cam=0;megaE=50;
  for(const m of G.team)m.st=null;a.hp=calc(a).hp;const sp=spOf(a.u);sp.n=SP_MAX;sp.rt=0;
  buildBG();placeMe(VW*.22,laneMid());me.spawn=500;arenaFoe(L);
  AR={i,L,t:tower?TOWER_T:ARENA_T,over:false,won:false,tower:!!tower,floor:L.floor||0,start:L.floor||0};setTab('hunt');$('pad').style.display='block';document.body.classList.add('arena');
  scrFlash(.6);snd('boss');toast(tower?`Torre, andar ${L.floor}: ${S[L.f].n} Nv ${L.l}`:`Arena: ${S[L.f].n} Nv ${L.l}`);dirty=true}
const TOWER_T=100000;
function towerRec(n){G.tower.best=Math.max(G.tower.best||0,n);const w=wk();if(G.tower.wk!==w){G.tower.wk=w;G.tower.wbest=0}G.tower.wbest=Math.max(G.tower.wbest||0,n)}
function arenaWin(w){if(!AR||AR.over)return;AR.over=true;AR.won=true;const L=AR.L,a=G.team[G.active];
  play(w,'Faint',{cb:()=>{}});launchCorpse(w);w.corpse=w.corpseMax=1e9;w.faintT=0;w.throwing=true;corpses.push(w);
  scrFlash(.5,'#ffcd75');shake=500;snd('quest');burst(w.x,headY(w)+12*SC,'#ffcd75',36,.22);
  if(AR.tower){const n=AR.floor,gold=n*60;G.gold+=gold;towerRec(n);let msg=`Andar ${n} vencido! +${gold.toLocaleString('pt-BR')} de ouro`;
    if(n%5===0){addStone(L.f);msg+=`, ${stoneN(L.f)}`}
    if(a)gainXp(a,Math.floor(L.l*L.l*.8));toast(msg);feed(msg);
    later(1700,()=>{if(!AR||AR.ended)return;corpses=[];WARN=[];ASH=[];AR.floor++;const N=towerL(AR.floor);AR.L=N;AR.t=TOWER_T;AR.over=false;AR.won=false;
      const m=active();if(m)m.hp=Math.min(calc(m).hp,m.hp+calc(m).hp*.35);arenaFoe(N);snd('boss');toast(`Andar ${N.floor}: ${S[N.f].n} Nv ${N.l}`);dirty=true});return}
  const first=!G.arena.wins[L.i];
  const gold=L.l*(first?150:40);G.gold+=gold;G.arena.wins[L.i]=(G.arena.wins[L.i]||0)+1;G.arena.best=Math.max(G.arena.best,L.i+1);
  let msg=`Vitória! +${gold.toLocaleString('pt-BR')} de ouro`;
  if(first){addStone(L.f);msg+=`, ${stoneN(L.f)}`}
  if(!G.items.ring){G.items.ring=true;msg+=', Pulseira Mega'}
  if(a){gainXp(a,Math.floor(L.l*L.l*1.5))}
  AR.msg=msg;toast(msg);feed(msg);G.stats.arena=(G.stats.arena||0)+1;
  later(1800,()=>arenaEnd(true))}
function arenaEnd(won,why){if(!AR||AR.ended)return;AR.ended=true;
  if(AR.tower){const got=AR.floor-(AR.won?0:1);if(got>=AR.start)towerRec(got);why=`Torre: você chegou ao andar ${AR.floor}. Recorde ${G.tower.best}`}
  for(const m of G.team)if(m.mega)megaOff(m,true);
  const T=STASH;MODE='hunt';wilds=T.wilds;corpses=T.corpses;balls=T.balls;shots=T.shots;slashes=T.slashes;timers=T.timers;cam=T.cam;manualTarget=T.manualTarget;megaE=T.megaE;megaT=0;
  for(const [u,hp,st] of T.hp){const m=G.team.find(x=>x.u===u);if(m){m.hp=hp;m.st=st}}
  WARN=[];ASH=[];SPX=[];CUT=null;slowmo=0;fx=[];nums=[];meDeadT=0;buildBG();placeMe(T.mx,T.my);
  $('pad').style.display='none';document.body.classList.remove('arena');PAD.on=false;PAD.atk=false;AR=null;STASH=null;
  if(!won)toast(why||'Derrota na Arena. Tente de novo');dirty=true;save();if(won)setTab('arena')}
function arenaTitle(){const L=AR.L,s=Math.max(0,Math.ceil(AR.t/1000));return `${AR.tower?'Torre, andar '+AR.floor:'Arena, desafio '+(L.i+1)}<small>${S[L.f].n} Nv ${L.l}. Tempo ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}</small>`}
function arenaPanel(){const a=G.team[G.active];let h=`<p class="note">Luta 1 contra 1 com o Pokémon em campo contra um chefe mega. Você controla tudo: o chefe avisa em vermelho onde o golpe vai cair, então se mexa ou esquive. A Arena não gasta HP nem bolas.</p>
  <div class="keys"><b>Celular</b><span>arraste no lado esquerdo para andar, Atacar e Esquivar à direita, golpes na barra de baixo</span><b>Controle</b><span>analógico anda, A ataca, B esquiva, X Y LB RB são os golpes, gatilho mega</span><b>Teclado</b><span>WASD ou setas, J ou espaço ataca, K esquiva, 1 a 4 golpes, E especial, M mega</span></div>
  <p class="note" style="margin-top:8px">Ataque 3 vezes seguidas para o golpe final do combo. Esquivar no último instante deixa tudo lento e enche a mega. Com metade da vida o chefe fica furioso e solta o especial dele.</p>
  <h3 style="margin-top:12px">Torre infinita</h3><div class="arow win"><img src="${icon('black-belt')}" alt=""><div style="min-width:0"><div class="row"><span class="nm">Recorde: andar ${G.tower.best||0}</span></div>
  <div class="sub">Esta semana: andar ${G.tower.wk===wk()?G.tower.wbest||0:0}. Começa no andar ${Math.floor((G.tower.best||0)/5)*5+1}. A cada 5 andares, a pedra mega do chefe. Ranking com outros jogadores precisa de servidor.</div></div><button class="btn y" data-tower="1" ${!a||a.hp<=0?'disabled':''}>Subir</button></div>
  <h3 style="margin-top:12px">Desafios</h3>`;
  for(const L of arenaList()){const lock=L.i>G.arena.best,won=G.arena.wins[L.i],st=G.items.stones[L.f];
    h+=`<div class="arow win ${lock?'lock':''} ${won?'won':''}"><img src="${portrait(L.f)}" alt=""><div style="min-width:0"><div class="row"><span class="nm">${L.i+1}. ${S[L.f].n}</span><span class="lv">Nv ${L.l}</span></div>
      <div class="sub">${won?`Vencido ${won}x. Repetir dá ${(L.l*40).toLocaleString('pt-BR')} de ouro`:`1ª vitória: ${(L.l*150).toLocaleString('pt-BR')} de ouro, ${stoneN(L.f)}${!G.items.ring?', Pulseira Mega':''}`}</div></div>
      ${lock?'<span class="sub">Vença o anterior</span>':`<button class="btn y" data-ar="${L.i}" ${!a||a.hp<=0?'disabled':''}>Lutar</button>`}</div>`}
  return h}
function arenaClick(t,d){if(d.ar!==undefined){arenaStart(+d.ar);return true}if(d.tower){arenaStart(-1,true);return true}if(t.id==='arExit'){arenaEnd(false,'Você saiu da Arena');return true}return false}
// avisos no chão: círculo ou faixa
function warn(z,fn){z.t=0;z.fn=fn;WARN.push(z);snd('warn')}
function inZone(z,e){if(z.k==='circ')return Math.hypot(e.x-z.x,(e.y-z.y)*1.9)<=z.r;return e.x>=Math.min(z.x0,z.x1)&&e.x<=Math.max(z.x0,z.x1)&&Math.abs(e.y-z.y)<=z.w}
function drawWarn(){for(const z of WARN){const k=Math.min(1,z.t/z.dur),pul=.5+.5*Math.sin(z.t/50);ctx.save();
    ctx.fillStyle='#b13e53';ctx.strokeStyle='#ff6b6b';ctx.lineWidth=2;
    if(z.k==='circ'){ctx.globalAlpha=.18+.1*pul;ctx.beginPath();ctx.ellipse(z.x,z.y,z.r,z.r/1.9,0,0,7);ctx.fill();ctx.globalAlpha=.8;ctx.stroke();ctx.globalAlpha=.35;ctx.beginPath();ctx.ellipse(z.x,z.y,z.r*k,z.r*k/1.9,0,0,7);ctx.fill()}
    else{const x=Math.min(z.x0,z.x1),w=Math.abs(z.x1-z.x0);ctx.globalAlpha=.18+.1*pul;ctx.fillRect(x,z.y-z.w,w,z.w*2);ctx.globalAlpha=.8;ctx.strokeRect(x,z.y-z.w,w,z.w*2);ctx.globalAlpha=.35;
      const f=z.x1>z.x0;ctx.fillRect(f?z.x0:z.x0-w*k,z.y-z.w,w*k,z.w*2)}
    ctx.restore()}
  for(const s of ASH){const c=FXC[s.type]||FXC.normal,z=Math.round(SC*(s.big?6:4.5)),y=s.y+s.h;drawTrail({tr:s.tr,type:s.type,x:s.x,y});
    ctx.fillStyle='#0e0f1d';ctx.fillRect(Math.round(s.x-z-1),Math.round(y-z-1),z*2+2,z*2+2);ctx.fillStyle=c[1];ctx.fillRect(Math.round(s.x-z),Math.round(y-z),z*2,z*2);ctx.fillStyle=c[0];ctx.fillRect(Math.round(s.x-z+SC),Math.round(y-z+SC),z,z);
    ctx.save();ctx.globalAlpha=.3;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.ellipse(s.x,s.y,z,z*.4,0,0,7);ctx.fill();ctx.restore()}}
function stepWarn(dt){for(const z of WARN){z.t+=dt;if(z.t>=z.dur&&!z.done){z.done=true;z.fn(z)}}WARN=WARN.filter(z=>!z.done);
  for(const s of ASH){s.x+=s.vx*dt;s.y+=s.vy*dt;s.life-=dt;(s.tr||(s.tr=[])).push([s.x,s.y+s.h]);if(s.tr.length>8)s.tr.shift();
    if(Math.random()<.6)part(s.x,s.y+s.h,(FXC[s.type]||FXC.normal)[1],{vx:(Math.random()-.5)*.03,vy:(Math.random()-.5)*.03,life:200});
    if(me&&meDeadT<=0&&Math.abs(s.x-me.x)<11*SC&&Math.abs(s.y-me.y)<11*SC){s.dead=true;impact(s.type,s.x,s.y+s.h,true);s.onHit()}
    else if(s.life<=0||s.x<cam-20||s.x>cam+VW+20){s.dead=true;impact(s.type,s.x,s.y+s.h)}}ASH=ASH.filter(s=>!s.dead)}
// tiro reto: anda no chão (x,y) e é desenhado na altura de quem atirou
function ashot(c,type,ang,sp,onHit,big){const v=sp*SC/2.2;ASH.push({x:c.x,y:c.y,h:headY(c)+12*SC-c.y,vx:Math.cos(ang)*v,vy:Math.sin(ang)*v*.8,type,life:2400,onHit,big})}
function arenaFoeMove(c,k,type,kind,p,x){const hitMe=(mul=1)=>{if(me&&meDeadT<=0)applyHit(c,false,me,type,p*mul,x)};const f=me.x>=c.x?1:-1;c.dir=f>0?2:6;
  if(kind==='proj'||kind==='blast'||kind==='wave'||kind==='chain'){const n=Math.min(3,x.n||1);
    for(let i=0;i<n;i++)later(i*150,()=>{if(!wilds.includes(c)||!me)return;const ang=Math.atan2(me.y-c.y,me.x-c.x)+(n>1?(i-(n-1)/2)*.22:0);
      ashot(c,type,ang,kind==='blast'?.24:kind==='chain'?.42:.32,()=>{if(kind==='blast'){shots.push({k:'boom',type,x:me.x,y:me.y-8*SC,r:(x.r||24)*SC,t:0,dur:450});shake=Math.max(shake,200)}hitMe(n>1?.65:1)},kind==='blast')})}
  else if(kind==='melee'){const zx=c.x+f*24*SC;warn({k:'circ',x:zx,y:c.y,r:24*SC,dur:430},z=>{if(!wilds.includes(c))return;c.lunge=220;c.x+=f*10*SC;slashes.push({x:z.x,y:headY(c)+14*SC,t:0,c:FXC[type]||FXC.normal,kind:'claw',big:true});impact(type,z.x,z.y-10*SC,true);if(inZone(z,me))hitMe()})}
  else if(kind==='beam'){const len=170*SC,w=Math.max(10*SC,8*SC*(x.w||1));
    if(x.charge){c.charging=0}
    warn({k:'line',x0:c.x,x1:c.x+f*len,y:c.y,w,dur:700},z=>{if(!wilds.includes(c))return;shots.push({k:'beam',type,ox:c.x,oy:headY(c)+12*SC,ang:f>0?0:Math.PI,len,w:7*SC*(x.w||1),t:0,dur:520});shake=Math.max(shake,250);glow(c.x,headY(c)+12*SC,(FXC[type]||FXC.normal)[0],30,500);if(inZone(z,me))later(80,()=>hitMe())})}
  else if(kind==='aoe'||kind==='status'){const r=(x.r||40)*SC*1.15;warn({k:'circ',x:c.x,y:c.y,r,dur:kind==='status'?650:760},z=>{if(!wilds.includes(c))return;
      shots.push({k:'aoe',type,x:c.x,y:c.y-4*SC,r,t:0,dur:520,soft:kind==='status'});if(p>=90)shake=Math.max(shake,300);
      if(inZone(z,me)){if(kind==='status'){const a=active();if(!(me.ifr>0))applyStatus(a,x.st,x.ch);else dodged()}else hitMe()}})}
  else if(kind==='rain'){const n=Math.min(5,x.n||4);for(let i=0;i<n;i++){const px=clamp(me.x+(i?(Math.random()-.5)*60*SC:0),cam+12*SC,cam+VW-12*SC),py=clamp(me.y+(i?(Math.random()-.5)*30*SC:0),LANE_T,LANE_B);
      warn({k:'circ',x:px,y:py,r:17*SC,dur:720+i*130},z=>{shots.push({k:'drop',type,x:z.x,y:z.y,t:0,dur:1,cb:()=>{}});impact(type,z.x,z.y-4*SC,true);shake=Math.max(shake,90);if(inZone(z,me))hitMe(.55)})}}
}
// ataque básico do chefe na arena: corpo a corpo avisa, à distância é um tiro reto
function arenaBasic(a,type){if(!me)return;const f=me.x>=a.x?1:-1;
  if(RANGED.has(type))ashot(a,type,Math.atan2(me.y-a.y,me.x-a.x),.3,()=>{const mm=active();if(!mm||meDeadT>0)return;if(me.ifr>0)return dodged();const c=calc(mm);const r=hit(a.atk,[type],{defStat:c.def},S[mm.mega||mm.id].t,a.lvl);mm.hp-=r.d;me.flash=360;juice(me,a,50,r,true);num(me.x,headY(me),r.d,'in');if(mm.hp<=0){mm.hp=0;meDown()}});
  else{const zx=a.x+f*20*SC;warn({k:'circ',x:zx,y:a.y,r:20*SC,dur:330},z=>{if(!wilds.includes(a))return;a.lunge=200;slashes.push({x:z.x,y:headY(a)+14*SC,t:0,c:FXC[type]||FXC.normal,kind:'claw'});
    if(inZone(z,me)){const mm=active();if(!mm||meDeadT>0)return;if(me.ifr>0)return dodged();const c=calc(mm);const r=hit(a.atk,[type],{defStat:c.def},S[mm.mega||mm.id].t,a.lvl);mm.hp-=r.d;me.flash=360;juice(me,a,50,r,true);num(me.x,headY(me),r.d,'in');if(mm.hp<=0){mm.hp=0;meDown()}}})}}
function dodged(){if(!me)return;nums.push({x:me.x,y:headY(me),v:'Desviou',kind:'nv',age:0});megaGain(4)}
function dodge(){if(!me||meDeadT>0||me.dodgeCd>0)return;let dx=INP.x,dy=INP.y;if(Math.hypot(dx,dy)<.2){dx=me.dir===2?1:-1;dy=0}const l=Math.hypot(dx,dy);dx/=l;dy/=l;
  const v=78*SC/190;const perf=WARN.some(z=>z.dur-z.t<280&&inZone(z,me))||ASH.some(s=>Math.hypot(s.x-me.x,s.y-me.y)<48*SC&&((me.x-s.x)*s.vx+(me.y-s.y)*s.vy)>0);
  me.dvx=dx*v;me.dvy=dy*v*.7;me.dashT=190;me.ifr=perf?520:340;me.dodgeCd=perf?300:1000;
  if(perf){slowmo=600;megaGain(20);const sp=spOf(active().u);if(sp.n<SP_MAX)sp.rt+=7000;nums.push({x:me.x,y:headY(me)-6*SC,v:'Perfeita!',kind:'cr',age:0});scrFlash(.25,'#73eff7');snd('perfect');G.stats.perf=(G.stats.perf||0)+1}if(Math.abs(dx)>.1)me.dir=dx>0?2:6;snd('dodge');
  for(let i=0;i<10;i++)part(me.x,me.y-Math.random()*16*SC,'#f4f4f4',{vx:-dx*.05*Math.random(),vy:-.02,life:300,sz:Math.round(SC*1.5)})}
function arenaCast(k){if(!me||meDeadT>0)return;if(cdOf(me.u,k)>0)return;const a=active();if(!a)return;const foe=wilds[0],kind=MV[k][2];
  if(kind==='heal'&&a.hp>=calc(a).hp)return toast('HP cheio');
  const need=needRange(k);if(need>0&&(!foe||dist(foe,me)>need*1.5))return toast('Chegue mais perto');
  if(me.anim==='Atk')return;cast(me,true,k,foe);me.cd=Math.max(me.cd,350)}
function arenaPlayerAtk(a,foe){const now=performance.now();if(now-(me.lastAtk||0)>950)me.combo=0;me.combo=(me.combo||0)%3+1;me.lastAtk=now;const third=me.combo===3;me.cmul=third?1.9:1;me.nextV=[null,null,'Spin','Hop'][me.combo];me.cd=cooldown(calc(a).spe)*(third?.85:.42);if(foe&&Math.abs(INP.x)<.1)me.dir=foe.x>=me.x?2:6;const f=me.dir===2?1:-1;
  const R=foe?rangeOf(moveType(S[a.mega||a.id].t,S[foe.id].t))+14*SC:0;
  if(foe&&(foe.x-me.x)*f>-12*SC&&Math.abs(foe.x-me.x)<=R&&Math.abs(foe.y-me.y)<=28*SC)attack(me,foe,true);
  else{me.lunge=200;me.cmul=1;const v=me.nextV;me.nextV=undefined;if(v==='Hop')jumpAt(me,null);play(me,'Atk',{v});cres(me.x+f*20*SC,headY(me)+14*SC,f,FXC.normal)}}
function arenaAI(w,dt){if(w.anim==='Atk'||w.anim==='Hurt')return;const dx=me.x-w.x,dy=me.y-w.y,d=Math.hypot(dx,dy),slow=w.st&&w.st.k==='para'?.55:1;
  if(Math.abs(dx)>4*SC)w.dir=dx>=0?2:6;
  if(w.cd<=0){const k=pickMove(w.moves||[],w,me,false);if(k&&Math.random()<(w.rage?.8:.55)){cast(w,false,k,me);w.cd=w.rage?850:1300;return}}
  const type=moveType(S[w.id].t,S[me.id].t),R=rangeOf(type),want=RANGED.has(type)?R*.9:20*SC;
  if(Math.abs(dy)>8*SC||Math.abs(dx)>want+6*SC||Math.abs(dx)<want*.45){const tx=me.x-(dx>=0?1:-1)*want;move(w,clamp(tx,cam+16*SC,cam+VW-16*SC),me.y,dt*slow,RANGED.has(type)?40:52)}
  else if(w.cd<=0){attack(w,me,false);w.cd=cooldown(w.spe)*(w.rage?.85:1.25)}
  else if(w.anim==='Walk')play(w,'Idle')}
function stepArena(dt,raw){const A=AR;if(!A)return;if(!A.over)A.t-=dt;
  tickCd(dt);tickTimers(dt);if(shake>0)shake-=raw;if(!AR)return;
  const a=active();bodyStep(dt);megaStep(dt,a);if(me&&me.dodgeCd>0)me.dodgeCd-=dt;
  for(const w of [...wilds])stStep(w,dt,w.max,d=>{w.hp-=d;num(w.x,headY(w),d,'st');if(w.hp<=0&&wilds.includes(w))killWild(w,a)});
  if(a&&me&&meDeadT<=0)stStep(a,dt,calc(a).hp,d=>{a.hp-=d;num(me.x,headY(me),d,'in');if(a.hp<=0){a.hp=0;meDown()}});
  if(meDeadT>0){meDeadT-=dt;if(me)me.t+=dt}
  if(me&&meDeadT<=0&&a&&!A.over){me.t+=dt;if(me.flash>0)me.flash-=dt;if(me.spawn>0)me.spawn-=dt;if(me.evo>0)me.evo-=dt;me.cd-=dt;
    const foe=wilds[0]||null;me.target=foe;const st=a.st,sp=.08*SC*(st&&st.k==='para'?.6:1);
    if(chargeStep(me,dt)){}
    else if(st&&st.k==='sleep'){if(me.anim==='Walk')play(me,'Idle')}
    else if(me.spawn<=0){
      if(me.dashT>0){me.dashT-=dt;me.x+=me.dvx*dt;me.y+=me.dvy*dt}
      else if(Math.hypot(INP.x,INP.y)>.15&&me.anim!=='Atk'){me.x+=INP.x*sp*dt;me.y+=INP.y*sp*.7*dt;if(Math.abs(INP.x)>.1)me.dir=INP.x>0?2:6;if(me.anim!=='Walk')play(me,'Walk')}
      else if(me.anim==='Walk')play(me,'Idle');
      if(INP.atk&&me.cd<=0&&me.anim!=='Atk'&&!(me.dashT>0))arenaPlayerAtk(a,foe);
      if(INP.dodge){INP.dodge=false;dodge()}
      if(INP.mega){INP.mega=false;megaOn()}
      if(INP.sp){INP.sp=false;useSpecial()}
      for(let i=0;i<4;i++)if(INP.sk[i]){INP.sk[i]=0;const k=movesOf(a)[i];if(k)arenaCast(k)}}
    me.x=clamp(me.x,cam+14*SC,cam+VW-14*SC);me.y=clamp(me.y,LANE_T,LANE_B)}
  else{INP.dodge=false;INP.mega=false;INP.sp=false;INP.sk.fill(0)}
  for(const w of wilds){if(!w.rage&&w.hp<w.max*.5&&!A.over){w.rage=true;w.spe*=1.25;shake=600;scrFlash(.4,'#b13e53');snd('boss');toast('O chefe ficou furioso!');w.ultT=2200}
    if(w.rage&&!A.over&&me&&meDeadT<=0&&!CUT){w.ultT-=dt;if(w.ultT<=0&&w.anim!=='Atk'){w.ultT=9500;bossUlt(w)}}
    if(w.rage&&Math.random()<dt/60)part(w.x+(Math.random()-.5)*24*SC,w.y-Math.random()*30*SC,'#ef7d57',{vy:-.06,life:500,sz:Math.round(SC*1.5)})}
  for(const w of wilds){w.t+=dt;if(w.flash>0)w.flash-=dt;if(w.spawn>0)w.spawn-=dt;w.cd-=dt;
    if(w.spawn>0)continue;
    if(chargeStep(w,dt)){}else if(w.st&&w.st.k==='sleep'){if(w.anim==='Walk')play(w,'Idle')}
    else if(me&&meDeadT<=0&&!A.over)arenaAI(w,dt);else if(w.anim==='Walk')play(w,'Idle');
    w.x=clamp(w.x,cam+14*SC,cam+VW-14*SC);w.y=clamp(w.y,LANE_T,LANE_B)}
  for(const c of corpses)c.t+=dt;
  stepShots(dt);stepWarn(dt);
  for(const p of fx){p.age+=raw;if(p.tx!==undefined){p.x+=(p.tx-p.x)*.12;p.y+=(p.ty-p.y)*.12}else{p.x+=p.vx*raw;p.y+=p.vy*raw;p.vy+=(p.g||0)*raw}}fx=fx.filter(p=>p.age<p.life);
  for(const n of nums)n.age+=raw;nums=nums.filter(n=>n.age<900);
  if(A.t<=0&&!A.over){A.over=true;arenaEnd(false,'Tempo esgotado na Arena')}}
// ===== economia: amuletos, TM, chaves, energia, teto de nível =====
const AMU={dmg:['Amuleto de Força','Mais dano do seu time','muscle-band',[25000,100000,350000],[.1,.2,.3]],
  xp:['Amuleto de XP','Mais XP em toda caça','lucky-egg',[25000,100000,350000],[.1,.2,.3]],
  gold:['Amuleto da Sorte','Mais ouro em toda caça','amulet-coin',[25000,100000,350000],[.1,.2,.3]],
  shiny:['Amuleto Brilhante','Mais chance de shiny','shiny-charm',[50000,200000,600000],[.25,.5,1]]};
const TM_P=40000,KEY_P=80000,NRG_P=15000,OFF_STONE_MAX=3;
function amuL(k){G.amu=G.amu||{};return G.amu[k]||0}
function amuM(k){const l=amuL(k);return 1+(l?AMU[k][4][l-1]:0)}
function lvlCap(b,i){const T=BIOMES[b||G.biome].tiers[i??G.tier];return T[1]+5}
// XP acima do teto da faixa rende 10%
function capXp(m,x,cap){if(!cap||m.lvl>=100)return x;let rem=x,add=0,L=m.lvl,xp=m.xp;
  while(rem>0&&L<cap){const n=need(L)-xp;if(rem>=n){rem-=n;add+=n;L++;xp=0}else{add+=rem;rem=0}}
  return add+Math.floor(rem*.1)}
function tmMove(m){const L=learnList(m.id);return L.length?L[L.length-1][0]:null}
function econShop(){const n=v=>v.toLocaleString('pt-BR');let h=`<h3>Amuletos</h3>`;
  for(const k in AMU){const [nm,ds,ic,P,V]=AMU[k],l=amuL(k);
    h+=`<div class="shop win"><img src="${icon(ic)}" alt=""><div><b>${nm} ${l?['I','II','III'][l-1]:''}</b><div class="sub">${ds}${l?`: +${Math.round(V[l-1]*100)}% agora`:''}${l<3?`. Próximo: +${Math.round(V[l]*100)}%`:'. Nível máximo'}</div></div>${l<3?`<button class="btn y" data-amu="${k}" ${G.gold<P[l]?'disabled':''}>${n(P[l])}</button>`:''}</div>`}
  const a=active(),tm=a&&tmMove(a);
  h+=`<h3>Itens</h3>`;
  if(a&&tm)h+=`<div class="shop win"><img src="${icon('tm-normal')}" alt=""><div><b>TM: ${MV[tm][0]}</b><div class="sub">${a.tm===tm?`${S[a.id].n} já sabe`:`Ensina a ${S[a.id].n} o golpe mais forte da linha`}</div></div>${a.tm===tm?'':`<button class="btn y" data-tm="1" ${G.gold<TM_P?'disabled':''}>${n(TM_P)}</button>`}</div>`;
  const kd=G.keyDay===new Date().toDateString();
  h+=`<div class="shop win"><img src="${icon('dusk-stone')}" alt=""><div><b>Chave da Fenda</b><div class="sub">${kd?'Já comprada hoje':'Uma por dia'}. Você tem ${riftKeys()}</div></div>${kd?'':`<button class="btn y" data-key="1" ${G.gold<KEY_P?'disabled':''}>${n(KEY_P)}</button>`}</div>`;
  h+=`<div class="shop win"><img src="${icon('max-ether')}" alt=""><div><b>Recarga de energia</b><div class="sub">+50 de energia da caça na mão. Agora ${hmStam()}/${HM_MAX}</div></div><button class="btn y" data-nrg="1" ${G.gold<NRG_P||hmStam()>=HM_MAX?'disabled':''}>${n(NRG_P)}</button></div>`;
  return h}
function econClick(d){
  if(d.amu){const k=d.amu,l=amuL(k),p=AMU[k][3][l];if(l<3&&G.gold>=p){G.gold-=p;G.amu[k]=l+1;toast(`${AMU[k][0]} ${['I','II','III'][l]}`);snd('quest')}dirty=true;sheetDirty=true;return true}
  if(d.tm){const a=active(),tm=a&&tmMove(a);if(a&&tm&&G.gold>=TM_P){G.gold-=TM_P;a.tm=tm;toast(`${S[a.id].n} aprendeu ${MV[tm][0]}`);snd('quest')}dirty=true;sheetDirty=true;return true}
  if(d.key){const t=new Date().toDateString();if(G.keyDay!==t&&G.gold>=KEY_P){G.gold-=KEY_P;riftKeys();G.rift.k++;G.keyDay=t;toast('+1 Chave da Fenda')}dirty=true;sheetDirty=true;return true}
  if(d.nrg){if(G.gold>=NRG_P&&hmStam()<HM_MAX){G.gold-=NRG_P;G.hm.st=Math.min(HM_MAX,G.hm.st+50);toast('+50 de energia')}dirty=true;sheetDirty=true;return true}
  return false}
// ===== gráficos: contorno, luz, frente, arena, rastros por tipo, modo leve =====
const HQ=()=>G.gfx!=='leve';
// contorno escuro de 1 pixel nos sprites, gerado uma vez por folha
const imW=im=>im.naturalWidth||im.width||0,imH=im=>im.naturalHeight||im.height||0;
function sheetO(im){if(im._o)return im._o;if(!imW(im))return im;const c=document.createElement('canvas');c.width=imW(im);c.height=imH(im);const x=c.getContext('2d');
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]])x.drawImage(im,dx,dy);x.globalCompositeOperation='source-in';x.fillStyle='#0e0f1d';x.fillRect(0,0,c.width,c.height);x.globalCompositeOperation='source-over';x.drawImage(im,0,0);im._o=c;return c}
// versões tingidas da folha (sem ctx.filter, que é caro): branca para o piscar, escura para o corpo, matiz para shiny sem folha própria
function sheetT(im,k){const K='_'+k;if(im[K])return im[K];if(!imW(im))return im;const c=document.createElement('canvas');c.width=imW(im);c.height=imH(im);const x=c.getContext('2d');
  if(k==='hue'){x.filter='hue-rotate(140deg)';x.drawImage(im,0,0)}else{x.drawImage(im,0,0);x.globalCompositeOperation='source-in';x.fillStyle=k==='white'?'#ffffff':'#0e0f1d';x.fillRect(0,0,c.width,c.height)}im[K]=c;return c}
// rastro dos projéteis com cara do tipo
function trailFx(b){if(!HQ()&&Math.random()<.7)return;const t=b.type,c=FXC[t]||FXC.normal,x=b.x,y=b.y+b.h,R=Math.random;
  if(t==='fire'){part(x,y,R()<.5?c[0]:c[1],{vx:(R()-.5)*.03,vy:-.05-R()*.04,life:340,sz:Math.round(SC*(1+R()))})}
  else if(t==='water'){part(x,y,R()<.5?'#f4f4f4':c[0],{vx:(R()-.5)*.03,vy:.04+R()*.03,life:260})}
  else if(t==='electric'){part(x+(R()-.5)*10*SC,y+(R()-.5)*10*SC,R()<.5?'#f4f4f4':c[0],{life:110,sz:Math.round(SC*(1+R()*1.5))})}
  else if(t==='grass'||t==='bug'){part(x,y,R()<.5?c[0]:c[1],{vx:(R()-.5)*.05,vy:(R()-.5)*.03,life:420,sz:Math.round(SC*1.5)})}
  else if(t==='ice'){part(x+(R()-.5)*6*SC,y+(R()-.5)*6*SC,'#f4f4f4',{life:320,sz:Math.round(SC)})}
  else if(t==='ghost'||t==='dark'||t==='poison'){part(x,y,R()<.5?c[1]:c[2],{vx:(R()-.5)*.015,vy:-.025,life:520,sz:Math.round(SC*2)})}
  else if(t==='rock'||t==='ground'||t==='steel'){part(x,y,R()<.5?c[1]:c[2],{vx:(R()-.5)*.04,vy:.03,life:300})}
  else if(t==='psychic'||t==='fairy'||t==='dragon'){if(R()<.6)part(x+(R()-.5)*8*SC,y+(R()-.5)*8*SC,R()<.5?'#f4f4f4':c[0],{vy:-.01,life:380,sz:Math.round(SC)})}
  else if(R()<.5)part(x,y,c[1],{vx:(R()-.5)*.03,vy:(R()-.5)*.03,life:200})}
// tochas e plateia da arena
function arenaCrowd(x,cx,cy,rx,ry,r){const shirts=['#b13e53','#ef7d57','#ffcd75','#38b764','#41a6f6','#5d275d','#f4f4f4','#73eff7','#29366f'],skin=['#f4d8b0','#c98d5f','#8a5a3b','#e8b796'];
  for(let k=1.075;k<1.23;k+=.045)for(let a=0;a<6.283;a+=(3.2/(rx*k))){const px=Math.round(cx+Math.cos(a)*rx*k),py=Math.round(cy+Math.sin(a)*ry*k);if(py>cy+ry*.55||r()<.18)continue;
    x.fillStyle='#0e0f1d';x.fillRect(px-1,py-4,3,5);x.fillStyle=shirts[Math.floor(r()*shirts.length)];x.fillRect(px-1,py-2,3,2);x.fillStyle=skin[Math.floor(r()*skin.length)];x.fillRect(px,py-4,1,2)}}
function torchPos(){const A=AX.A,P=[];for(let i=0;i<8;i++){const a=Math.PI+i/7*Math.PI;P.push([A.cx+Math.cos(a)*A.rx*1.03,A.cy+Math.sin(a)*A.ry*1.03])}return P}
function drawTorches(now){const A=AX;if(!A.torch)A.torch=torchPos();for(const [x,y] of A.torch){const fl=Math.sin(now/90+x)*.5+.5,z=SC;
  ctx.fillStyle='#3b4252';ctx.fillRect(x-z,y-10*z,2*z,10*z);ctx.fillStyle='#5a4a3a';ctx.fillRect(x-2*z,y-11*z,4*z,2*z);
  ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.55+.2*fl;const g=(26+6*fl)*z;ctx.drawImage(glowTex('#ef7d57'),x-g,y-13*z-g,g*2,g*2);ctx.restore();
  ctx.fillStyle='#ef7d57';ctx.fillRect(x-2*z,y-(14+2*fl)*z,4*z,(3+2*fl)*z);ctx.fillStyle='#ffcd75';ctx.fillRect(x-z,y-(15+3*fl)*z,2*z,(3+2*fl)*z);
  if(Math.random()<.08)part(x,y-16*z,'#ffcd75',{vy:-.05,vx:(Math.random()-.5)*.02,life:500,sz:Math.round(z)})}}
// água e lava que se mexem
function drawLiquids(now){const A=AX;if(!A.O)return;for(const o of A.O){if(o.k!=='pond'&&o.k!=='lava')continue;if(Math.abs(o.x-A.camX-VW/2)>VW/2+o.r||Math.abs(o.y-A.camY-VH/2)>VH/2+o.r)continue;
  ctx.save();if(o.k==='lava'){ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.25+.15*Math.sin(now/400+o.x);const g=o.r*1.5;ctx.drawImage(glowTex('#ef7d57'),o.x-g,o.y-g*.6,g*2,g*1.2)}
  else{ctx.fillStyle='#c7f6ff';for(let i=0;i<5;i++){const t=(now/1400+i*.37+o.x*.01)%1,px=o.x+Math.cos(i*2.4)*o.r*.5,py=o.y+Math.sin(i*1.7)*o.r*.3;ctx.globalAlpha=Math.sin(t*Math.PI)*.8;ctx.fillRect(Math.round(px-4*SC*t),Math.round(py),Math.round(8*SC*t)+1,Math.max(1,Math.round(SC*.6)))}}
  ctx.restore()}}
// luz: escurece a cena e abre luz em volta do time, projéteis e brasas
let LC=null,LTX=null;function lightTex(){if(LTX)return LTX;const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(0,0,0,1)');g.addColorStop(.45,'rgba(0,0,0,.85)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,64,64);LTX=c;return c}const LIGHTMAP={caverna:['rgba(6,8,22,',.62],vulcao:['rgba(40,8,8,',.32],rift:['rgba(20,6,34,',.5],arena:['rgba(10,10,26,',.22],neve:['rgba(20,30,60,',.12]};
function axLight(){const A=AX,m=A.mode==='rift'?'rift':A.mode==='liga'||A.mode==='boss'?'arena':(A.L&&(A.L.map||A.L.b));const L=LIGHTMAP[m];if(!L||!HQ())return;
  const w=Math.ceil(VW/2),h=Math.ceil(VH/2);if(!LC||LC.width!==w||LC.height!==h){LC=document.createElement('canvas');LC.width=w;LC.height=h}const x=LC.getContext('2d');
  x.globalCompositeOperation='source-over';x.clearRect(0,0,w,h);x.fillStyle=L[0]+L[1]+')';x.fillRect(0,0,w,h);x.globalCompositeOperation='destination-out';
  const hole=(px,py,r,a=1)=>{const sx=(px-A.camX)/2,sy=(py-A.camY)/2,sr=r/2;if(sx<-sr||sy<-sr||sx>w+sr||sy>h+sr)return;x.globalAlpha=a;x.drawImage(lightTex(),sx-sr,sy-sr,sr*2,sr*2)};
  let n=0;for(const f of A.F)if(f.hp>0&&(f.team===0||f.boss||f.elite))hole(f.x,f.y-10*SC,(f.team===0?150:90)*SC);
  for(const b of A.B){if(n++>24)break;hole(b.x,b.y+b.h,40*SC,.8)}
  for(const e of A.FX)if(e.k==='boom'||e.k==='ring')hole(e.x,e.y,e.r*2.2,1-e.t/e.dur);
  if(A.O)for(const o of A.O)if(o.glow)hole(o.x,o.y,o.r*3,.7);
  if(A.torch)for(const [tx,ty] of A.torch)hole(tx,ty-12*SC,90*SC,.9);
  x.globalAlpha=1;ctx.save();ctx.setTransform(DPR,0,0,DPR,0,0);ctx.imageSmoothingEnabled=true;ctx.drawImage(LC,0,0,VW,VH);ctx.restore()}
// plano da frente na caça lateral: mato e folhas passando mais rápido que o chão
const FGC={floresta:['#1f5f46','#2f8a52'],vulcao:['#2a1717','#57302c'],lago:['#1f5f46','#3e8948'],usina:['#3b4252','#566c86'],caverna:['#1a1a2e','#2c2c48']};
function drawFG(){if(!HQ())return;const c=FGC[G.biome]||FGC.floresta,y0=VH,step=11*SC,off=cam*1.35,first=Math.floor(off/step)-1,z=Math.round(SC);
  for(let i=first;i<first+VW/step+3;i++){const r=srnd(i*977+13),hh=(5+r()*9)*SC,X=Math.round(cam+i*step-off);
    ctx.fillStyle=c[0];ctx.fillRect(X,y0-hh,3*z,hh);ctx.fillStyle=c[1];ctx.fillRect(X+2*z,y0-hh*.7,2*z,hh*.7);if(r()<.25)ctx.fillRect(X-3*z,y0-hh*.5,3*z,2*z)}}
function gfxRow(){return `<h3>Gráficos</h3><div class="win" style="padding:2px 10px"><div class="opt"><div><b>Qualidade</b><div class="sub">Leve tira contorno, luz e partículas extras. Use se o celular esquentar ou travar</div></div><div class="seg">${[['alto','Alto'],['leve','Leve']].map(([k,l])=>`<button class="btn" data-gfx="${k}" aria-pressed="${(G.gfx||'alto')===k}">${l}</button>`).join('')}</div></div></div>`}
function gfxClick(d){if(d.gfx){G.gfx=d.gfx;sheetDirty=true;dirty=true;return true}return false}

// ===== especial de cada Pokémon: 3 cargas, 1 volta a cada 20 s =====
const SP_MAX=3,SP_RT=20000;
const ZN={fire:'Inferno Overdrive',water:'Hydro Vortex',grass:'Bloom Doom',electric:'Gigavolt Havoc',ice:'Subzero Slammer',rock:'Continental Crush',ground:'Tectonic Rage',psychic:'Shattered Psyche',ghost:'Never-Ending Nightmare',dark:'Black Hole Eclipse',fighting:'All-Out Pummeling',normal:'Breakneck Blitz',flying:'Supersonic Skystrike',poison:'Acid Downpour',bug:'Savage Spin-Out',dragon:'Devastating Drake',steel:'Corkscrew Crash',fairy:'Twinkle Tackle'};
// golpes-assinatura conhecidos (pela forma básica da linha ou pela espécie)
const SIGN={1:'Frenzy Plant',4:'Blast Burn',7:'Hydro Cannon',152:'Frenzy Plant',155:'Eruption',158:'Hydro Cannon',252:'Leaf Storm',255:'Blaze Kick',258:'Hydro Cannon',387:'Frenzy Plant',390:'Flare Blitz',393:'Hydro Cannon',
  495:'Leaf Storm',498:'Heat Crash',501:'Razor Shell',650:'Spiky Shield',653:'Mystical Fire',656:'Water Shuriken',722:'Sinister Arrow Raid',725:'Malicious Moonsault',728:'Oceanic Operetta',810:'Drum Beating',813:'Pyro Ball',816:'Snipe Shot',
  906:'Flower Trick',909:'Torch Song',912:'Aqua Step',25:'Catastropika',26:'Catastropika',172:'Catastropika',150:'Psystrike',384:'Dragon Ascent',382:'Origin Pulse',383:'Precipice Blades',94:'Shadow Ball',92:'Shadow Ball',448:'Aura Sphere',
  248:'Stone Edge',246:'Stone Edge',130:'Hyper Beam',129:'Hyper Beam',445:'Dragon Rush',443:'Dragon Rush',149:'Hyper Beam',147:'Hyper Beam',376:'Meteor Mash',374:'Meteor Mash',373:'Draco Meteor',371:'Draco Meteor',282:'Moonblast',475:'Sacred Sword',280:'Moonblast',
  65:'Psychic',63:'Psychic',212:'Bullet Punch',123:'X-Scissor',208:'Iron Tail',95:'Iron Tail',229:'Fire Blast',228:'Fire Blast',359:'Night Slash',302:'Shadow Claw',303:'Play Rough',428:'High Jump Kick',427:'High Jump Kick',380:'Mist Ball',381:'Luster Purge',
  491:'Dark Void',719:'Diamond Storm',807:'Plasma Fists',801:'Fleur Cannon',718:'Thousand Arrows',485:'Magma Storm',780:'Clanging Scales',142:'Sky Attack',115:'Mega Punch',127:'Guillotine',214:'Megahorn'};
function spName(id){const b=S[id].mega||id;return SIGN[b]||SIGN[rootOf(b)]||ZN[S[id].t[0]]||'Especial'}
const SPC={};const spOf=u=>SPC[u]||(SPC[u]={n:SP_MAX,rt:0});
function spStep(dt){for(const m of G.team){const s=spOf(m.u);if(s.n<SP_MAX){s.rt+=dt;if(s.rt>=SP_RT){s.rt-=SP_RT;s.n++;if(m===G.team[G.active])dirty=true}}else s.rt=0}}
let CUT=null,slowmo=0,SPX=[];const PIMG={};
function pimg(id,sh){const k=id+'|'+sh;if(!PIMG[k]){const i=new Image();i.src=portrait(id,sh);PIMG[k]=i}return PIMG[k]}
// sem cena de corte: a habilidade aparece no próprio mapa (círculo no chão e nome em cima de quem usa)
function cutIn(id,sh,col,foe){snd('special')}
function sideCall(e,name,col){SPX.push({k:'glyph',e,col,t:0,dur:650});nums.push({x:e.x,y:headY(e)-8*SC,v:name,kind:'name',age:0});snd('special');scrFlash(.12,col[0])}
function drawCut(){if(!CUT)return;const k=(performance.now()-CUT.t0)/CUT.dur;if(k>=1){CUT=null;return}
  const h=Math.min(130,VH*.24),y=VH*.36,e=k<.18?k/.18:k>.85?(1-k)/.15:1,c=CUT.col;ctx.save();
  ctx.globalAlpha=.55*e;ctx.fillStyle='#0e0f1d';ctx.fillRect(0,0,VW,VH);ctx.globalAlpha=1;
  const bh=h*e;ctx.fillStyle=c[2];ctx.fillRect(0,y-bh/2,VW,bh);ctx.fillStyle=c[1];ctx.fillRect(0,y-bh/2,VW,4);ctx.fillRect(0,y+bh/2-4,VW,4);
  ctx.globalAlpha=.55*e;ctx.fillStyle=c[0];const now=performance.now();for(let i=0;i<16;i++){const yy=y-bh/2+((i*37)%Math.max(1,bh)),xx=((now*1.4+i*97)%(VW+240))-120;ctx.fillRect(CUT.foe?xx:VW-xx,yy,50+(i%3)*30,2)}
  ctx.globalAlpha=e;const s=h*1.08,px=CUT.foe?VW-s-16+(1-e)*90:16-(1-e)*90;
  if(CUT.img.complete&&CUT.img.naturalWidth){ctx.imageSmoothingEnabled=false;ctx.fillStyle='#0e0f1d';ctx.fillRect(px-3,y-s/2-3,s+6,s+6);ctx.drawImage(CUT.img,px,y-s/2,s,s)}
  const avail=VW-s-44;let fs=Math.min(26,VW/14);ctx.font=`700 ${fs}px "Pixelify Sans",monospace`;const w=ctx.measureText(CUT.name).width;if(w>avail){fs*=avail/w;ctx.font=`700 ${fs}px "Pixelify Sans",monospace`}
  ctx.textAlign=CUT.foe?'right':'left';ctx.lineWidth=5;ctx.strokeStyle='#0e0f1d';const tx=CUT.foe?px-14:px+s+14;
  ctx.strokeText(CUT.name,tx,y+fs*.35);ctx.fillStyle='#f4f4f4';ctx.fillText(CUT.name,tx,y+fs*.35);
  ctx.font=`700 ${Math.round(fs*.55)}px "Pixelify Sans",monospace`;ctx.fillStyle=c[0];ctx.strokeText(CUT.foe?'CHEFE':'ESPECIAL',tx,y-fs*.75);ctx.fillText(CUT.foe?'CHEFE':'ESPECIAL',tx,y-fs*.75);ctx.restore()}
const FAM={fire:'erupt',dragon:'erupt',fighting:'erupt',water:'wave',ice:'wave',flying:'wave',electric:'bolt',grass:'petal',bug:'petal',fairy:'petal',poison:'petal',psychic:'orb',ghost:'orb',dark:'orb'};
function useSpecial(auto){if(!me||meDeadT>0||me.spawn>0||CUT)return false;const a=active();if(!a)return false;const s=spOf(a.u);
  if(s.n<=0){if(!auto)toast('Especial recarregando');return false}
  const foes=foesOf(true);if(!foes.length){if(!auto)toast('Sem alvo');return false}
  s.n--;const id=me.id,type=S[id].t[0],col=FXC[type]||FXC.normal;sideCall(me,spName(id),col);
  later(330,()=>{if(me&&meDeadT<=0)spFire(me,true,type,col)});G.stats.sp=(G.stats.sp||0)+1;dirty=true;return true}
// visual e dano do especial; quem é atingido depende de onde a onda/erupção passa
function spFire(c,isMe,type,col){const f=c.dir===6?-1:1,fam=FAM[type]||'quake',D=VW*.9;
  const foes=foesOf(isMe).filter(t=>MODE==='arena'||((t.x-c.x)*f>-34*SC&&Math.abs(t.x-c.x)<D));
  const hitT=(t,mul=1)=>{if(wilds.includes(t)&&t.hp>0)applyHit(c,true,t,type,170*mul,{})};
  play(c,'Atk',{v:'Sp'});c.lunge=220;shake=Math.max(shake,650);scrFlash(.45,col[0]);glow(c.x,headY(c)+12*SC,col[0],70,600);
  const reach=t=>Math.abs(t.x-c.x)/(34*SC)*80;
  if(fam==='erupt'||fam==='quake'){for(let i=0;i<8;i++)later(i*80,()=>{const x=c.x+f*(28+i*34)*SC,y=c.y;
      if(fam==='erupt'){shots.push({k:'boom',type,x,y:y-12*SC,r:(20+i*2)*SC,t:0,dur:520});for(let j=0;j<10;j++)part(x+(Math.random()-.5)*16*SC,y,col[j%3],{vx:(Math.random()-.5)*.08,vy:-.16-Math.random()*.22,g:.0005,life:750,sz:Math.round(3*SC)})}
      else{shots.push({k:'aoe',type,x,y,r:30*SC,t:0,dur:420});for(let j=0;j<6;j++)part(x+(Math.random()-.5)*20*SC,y,col[j%3],{vx:(Math.random()-.5)*.1,vy:-.12-Math.random()*.12,g:.0007,life:600,sz:Math.round(3.5*SC)})}
      glow(x,y-14*SC,col[0],34,380)});foes.forEach(t=>later(reach(t),()=>hitT(t)))}
  else if(fam==='wave'){SPX.push({k:'swave',x:c.x,y:c.y,f,col,t:0,dur:900,D});foes.forEach(t=>later(Math.abs(t.x-c.x)/D*900,()=>hitT(t)))}
  else if(fam==='bolt'){const ts=foes.length?foes:[];ts.forEach((t,i)=>{for(let j=0;j<3;j++)later(i*90+j*120,()=>{if(!wilds.includes(t))return;shots.push({k:'drop',type:'electric',x:t.x+(Math.random()-.5)*10*SC,y:t.y,t:0,dur:120,cb:()=>{}});later(110,()=>{impact('electric',t.x,headY(t)+12*SC,true);glow(t.x,t.y-30*SC,'#fff9e0',50,300)})});later(i*90+260,()=>hitT(t))});scrFlash(.7,'#fff9e0')}
  else if(fam==='petal'){const x0=c.x+f*30*SC;for(let i=0;i<26;i++){const px=x0+f*Math.random()*D*.85,py=LANE_T+Math.random()*(LANE_B-LANE_T);shots.push({k:'drop',type,x:px,y:py,t:-i*30,dur:360,cb:()=>impact(type,px,py-4*SC)})}foes.forEach(t=>later(350+reach(t)*.6,()=>hitT(t)))}
  else{const t0=foes.sort((a,b)=>dist(a,c)-dist(b,c))[0];const ox=t0?t0.x:c.x+f*90*SC,oy=t0?t0.y:c.y;SPX.push({k:'orb',x:ox,y:oy-18*SC,col,t:0,dur:700});
    later(700,()=>{shots.push({k:'boom',type,x:ox,y:oy-14*SC,r:64*SC,t:0,dur:600});shake=Math.max(shake,500);scrFlash(.4,col[0]);for(const t of foesOf(isMe))if(Math.hypot(t.x-ox,(t.y-oy)*1.6)<90*SC)hitT(t)})}}
// arcos de corte e faíscas de impacto
function cres(x,y,f,col){if(!SILENT)SPX.push({k:'cres',x,y,f,col,t:0,dur:230})}
function streaks(x,y,col,n){if(SILENT)return;const a=[];for(let i=0;i<n;i++)a.push(Math.random()*6.283);SPX.push({k:'streak',x,y,col,a,t:0,dur:200})}
function stepSpx(dt){for(const s of SPX){s.t+=dt;if(s.k==='orb'&&Math.random()<.8){const an=Math.random()*6.28,r=60*SC;part(s.x+Math.cos(an)*r,s.y+Math.sin(an)*r,s.col[Math.floor(Math.random()*3)],{tx:s.x,ty:s.y,life:400})}
    if(s.k==='swave'&&Math.random()<.9){const x=s.x+s.f*s.D*Math.min(1,s.t/s.dur);part(x,LANE_T+Math.random()*(LANE_B-LANE_T)-30*SC,s.col[0],{vx:s.f*.05,vy:-.08,g:.0004,life:500,sz:Math.round(2*SC)})}}
  SPX=SPX.filter(s=>s.t<s.dur)}
function drawSpx(){for(const s of SPX){const k=s.t/s.dur;ctx.save();
    if(s.k==='swave'){const x=s.x+s.f*s.D*Math.min(1,k),h=LANE_B-LANE_T+70*SC,top=LANE_T-70*SC,w=34*SC;ctx.globalAlpha=.55*(1-k*.5);ctx.fillStyle=s.col[1];ctx.fillRect(x-(s.f>0?w:0),top,w,h);
      ctx.globalAlpha=.8*(1-k*.5);ctx.fillStyle=s.col[0];ctx.fillRect(s.f>0?x-6*SC:x,top,6*SC,h);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.35;ctx.drawImage(glowTex(s.col[0]),x-50*SC,top,100*SC,h)}
    else if(s.k==='orb'){const r=(8+k*26)*SC;ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.7;ctx.drawImage(glowTex(s.col[1]),s.x-r*2,s.y-r*2,r*4,r*4);ctx.globalCompositeOperation='source-over';
      ctx.globalAlpha=1;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.arc(s.x,s.y,r*.7,0,7);ctx.fill();ctx.strokeStyle=s.col[0];ctx.lineWidth=2*SC;ctx.beginPath();ctx.arc(s.x,s.y,r*.7+Math.sin(s.t/40)*2,0,7);ctx.stroke()}
    else if(s.k==='cres'){const r=20*SC,a0=s.f>0?-1.3:Math.PI-1.3+Math.PI*0,sw=2.6*Math.min(1,k*2.5);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=1-k;ctx.lineCap='round';
      const st=s.f>0?-1.3:Math.PI+1.3,dir=s.f>0?1:-1;ctx.strokeStyle=s.col[1];ctx.lineWidth=7*SC*(1-k);ctx.beginPath();ctx.arc(s.x-s.f*6*SC,s.y,r,st,st+dir*sw,dir<0);ctx.stroke();
      ctx.strokeStyle='#f4f4f4';ctx.lineWidth=2.5*SC*(1-k);ctx.beginPath();ctx.arc(s.x-s.f*6*SC,s.y,r,st,st+dir*sw,dir<0);ctx.stroke()}
    else if(s.k==='glyph'){const e=s.e;if(e){s.x=e.x;s.y=e.y}const r=(18+10*Math.min(1,k*2))*SC;ctx.translate(s.x,s.y);ctx.scale(1,.35);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=(1-k)*.9;ctx.strokeStyle=s.col[0];ctx.lineWidth=3*SC;
      ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.stroke();ctx.rotate(s.t/120);ctx.lineWidth=2*SC;for(let i=0;i<5;i++){const a=i/5*6.283;ctx.beginPath();ctx.moveTo(Math.cos(a)*r,Math.sin(a)*r);ctx.lineTo(Math.cos(a+2.51)*r,Math.sin(a+2.51)*r);ctx.stroke()}ctx.globalAlpha=(1-k)*.4;ctx.drawImage(glowTex(s.col[1]),-r*1.4,-r*1.4,r*2.8,r*2.8)}
    else if(s.k==='streak'){ctx.globalCompositeOperation='lighter';ctx.globalAlpha=1-k;ctx.strokeStyle=s.col;ctx.lineWidth=2*SC*(1-k);ctx.lineCap='round';
      for(const a of s.a){const r0=(4+k*14)*SC,r1=(10+k*26)*SC;ctx.beginPath();ctx.moveTo(s.x+Math.cos(a)*r0,s.y+Math.sin(a)*r0);ctx.lineTo(s.x+Math.cos(a)*r1,s.y+Math.sin(a)*r1);ctx.stroke()}}
    ctx.restore()}}
function spHud(a){const b=$('spBtn');if(!a){b.style.display='none';return}b.style.display='flex';const s=spOf(a.u);
  const k=`${s.n}|${a.mega||a.id}`;if(b.dataset.k!==k){b.dataset.k=k;b.querySelector('b').textContent=spName(a.mega||a.id);b.querySelector('.pips').innerHTML=Array.from({length:SP_MAX},(_,i)=>`<i class="${i<s.n?'on':''}"></i>`).join('')}
  $('spFill').style.width=(s.n>=SP_MAX?0:100*s.rt/SP_RT)+'%';b.classList.toggle('empty',s.n<=0)}
function autoSpecial(a){if(MODE==='arena'||!G.auto.sp||!a||!me||meDeadT>0||CUT)return;const s=spOf(a.u);if(s.n<=0)return;
  const near=wilds.filter(w=>w.aggro&&w.x-me.x<VW*.65&&w.x>me.x-20*SC);if(near.some(w=>w.boss)||(s.n>=SP_MAX&&near.length>=3))useSpecial(true)}
// chefe furioso: ataque especial que cobre a faixa inteira e a área em volta
function bossUlt(w){const type=S[w.id].t[0],col=FXC[type]||FXC.normal;sideCall(w,spName(w.id),col);
  later(1,()=>{if(!wilds.includes(w)||!me)return;
    warn({k:'line',x0:cam+4,x1:cam+VW-4,y:w.y,w:20*SC,dur:950},z=>{if(!wilds.includes(w))return;const f=me.x>=w.x?1:-1;
      for(let i=0;i<8;i++){const x=cam+VW*(i+.5)/8;later(i*40,()=>shots.push({k:'boom',type,x,y:z.y-12*SC,r:24*SC,t:0,dur:480}))}
      shake=Math.max(shake,600);scrFlash(.4,col[0]);if(inZone(z,me))applyHit(w,false,me,type,140,{})});
    warn({k:'circ',x:w.x,y:w.y,r:62*SC,dur:950},z=>{shots.push({k:'aoe',type,x:z.x,y:z.y,r:z.r,t:0,dur:520});if(inZone(z,me))applyHit(w,false,me,type,110,{})})})}

// ===== pedras mega caindo dos selvagens: 5% por abate de um Pokémon cuja linha tem mega =====
const STONE_DROP=.02,MEGA_ROOT={};
for(const f in MEGA){const r=rootOf(MEGA[f][0]);(MEGA_ROOT[r]||(MEGA_ROOT[r]=[])).push(+f)}
function mobStone(id,quiet,ch=STONE_DROP){const fs=MEGA_ROOT[rootOf(S[id].mega||id)];if(!fs||Math.random()>=ch)return null;
  const f=fs[Math.floor(Math.random()*fs.length)];addStone(f);
  if(!quiet){toast(`Drop: ${stoneN(f)}!`);feed(`${S[id].n} deixou cair ${stoneN(f)} (agora ${G.items.stones[f]})`);snd('quest');if(me)glow(me.x,headY(me)+12*SC,'#ffcd75',40,500)}dirty=true;return f}

// ===== animações de ataque variadas, pulo e corpo voando =====
const GRAV=.0012;
function atkV(kind){return kind==='melee'?(Math.random()<.6?'Spin':null):kind==='heal'?null:'Sp'}
// ataque básico: às vezes gira, às vezes pula em cima do alvo (só corpo a corpo)
function atkPick(a,t,isMe){if(a.nextV!==undefined){const v=a.nextV;a.nextV=undefined;if(v==='Hop')jumpAt(a,t);return v}
  const melee=!RANGED.has(moveType(S[a.id].t,S[t.id].t));const r=Math.random();
  if(melee&&r<.22){jumpAt(a,t);return 'Hop'}return r<.55?'Spin':null}
function jumpAt(a,t){const H=24*SC;a.jv=Math.sqrt(2*GRAV*SC*H);a.land=true;if(t){const f=t.x>=a.x?1:-1;a.kb=(a.kb||0)+f*Math.max(0,Math.abs(t.x-a.x)-18*SC)*.6}}
function dust(x,y,n=12){for(let i=0;i<n;i++){const s=(Math.random()*.12+.04)*(i%2?1:-1);part(x,y-2,['#c2a05a','#94b0c2','#f4f4f4'][i%3],{vx:s,vy:-.02-Math.random()*.05,g:.0002,life:450,sz:Math.round(SC*(1+Math.random()))})}shots.push({k:'ring',x,y,t:0,dur:260,c:'#f4f4f4'})}
function airStep(e,dt){if(!(e.jv||e.jz>0))return;e.jv-=GRAV*SC*dt;e.jz=(e.jz||0)+e.jv*dt;
  if(e.jz<=0){e.jz=0;e.jv=0;if(e.land){e.land=false;dust(e.x,e.y,14);shake=Math.max(shake,120);if(!SILENT)snd('hit')}else if(e.corpse!==undefined)dust(e.x,e.y,8)}}
function launchCorpse(w){const f=me&&w.x<me.x?-1:1;w.kb=(w.kb||0)+f*22*SC/2.2;w.jv=Math.sqrt(2*GRAV*SC*14*SC);w.land=false;w.sq=1}
// ===== golpes próprios por linha (40 espécies) =====
// [nome, tipo, forma, poder, recarga s, extras]. Extras novos: home (persegue), pierce (atravessa), dash (avança), knock (empurra), slow (deixa lento), drain (rouba vida), n (vários)
const SIGM={
 leech_seed:['Leech Seed','grass','proj',55,7,{home:1,drain:.5}],petal_dance:['Petal Dance','grass','aoe',120,15,{r:50,knock:1.6}],
 fire_fang:['Fire Fang','fire','melee',75,5,{dash:1,st:'burn',ch:.2}],flare_blitz:['Flare Blitz','fire','melee',120,13,{dash:1,knock:2,st:'burn',ch:.2}],
 aqua_tail:['Aqua Tail','water','melee',90,7,{knock:1.8}],water_spout:['Water Spout','water','blast',130,15,{r:34}],
 magical_leaf:['Magical Leaf','grass','proj',60,6,{home:1,n:2}],leaf_storm:['Leaf Storm','grass','beam',130,15,{w:1.3,knock:1.4}],
 eruption:['Eruption','fire','blast',140,16,{r:38,st:'burn',ch:.3}],lava_plume:['Lava Plume','fire','aoe',85,9,{r:46,st:'burn',ch:.3}],
 ice_fang:['Ice Fang','ice','melee',70,5,{dash:1,slow:1}],liquidation:['Liquidation','water','melee',110,10,{knock:1.8}],
 leaf_blade:['Leaf Blade','grass','melee',95,7,{dash:1,pierce:1}],bullet_seed:['Bullet Seed','grass','proj',50,6,{n:5}],
 blaze_kick:['Blaze Kick','fire','melee',95,7,{dash:1,st:'burn',ch:.2}],high_jump_kick:['High Jump Kick','fighting','melee',130,13,{dash:1,knock:2.2}],
 mud_shot:['Mud Shot','ground','proj',65,6,{slow:1}],muddy_water:['Muddy Water','water','wave',100,11,{slow:1}],
 wood_hammer:['Wood Hammer','grass','melee',120,12,{knock:2,drain:.15}],headlong_rush:['Headlong Rush','ground','melee',120,12,{dash:1,knock:2}],
 mach_punch:['Mach Punch','fighting','melee',60,3,{dash:1}],close_combat:['Close Combat','fighting','melee',130,13,{knock:1.6}],
 drill_peck:['Drill Peck','flying','melee',90,7,{dash:1,pierce:1}],wave_crash:['Wave Crash','water','melee',120,12,{dash:1,knock:2}],
 leaf_tornado:['Leaf Tornado','grass','wave',90,9,{slow:1}],heat_crash:['Heat Crash','fire','melee',110,11,{knock:2.2}],
 head_smash:['Head Smash','rock','melee',140,16,{dash:1,knock:2.4}],ceaseless_edge:['Ceaseless Edge','dark','melee',85,7,{pierce:1,st:'poison',ch:.3}],
 sacred_sword:['Sacred Sword','fighting','melee',100,9,{pierce:1}],needle_arm:['Needle Arm','grass','melee',70,5,{dash:1}],
 body_press:['Body Press','fighting','melee',100,10,{knock:2.2}],psybeam:['Psybeam','psychic','beam',80,7,{slow:1}],
 psyshock:['Psyshock','psychic','proj',90,9,{home:1}],night_slash:['Night Slash','dark','melee',80,6,{dash:1,pierce:1}],
 dark_pulse:['Dark Pulse','dark','wave',100,11,{}],spirit_shackle:['Spirit Shackle','ghost','proj',90,9,{pierce:1,slow:1}],
 darkest_lariat:['Darkest Lariat','dark','aoe',95,10,{r:42,knock:1.8}],throat_chop:['Throat Chop','dark','melee',85,6,{dash:1}],
 moonblast:['Moonblast','fairy','blast',110,12,{r:30}],disarming_voice:['Disarming Voice','fairy','proj',50,5,{home:1,n:3}],
 grassy_glide:['Grassy Glide','grass','melee',70,4,{dash:1}],u_turn:['U-turn','bug','melee',70,5,{dash:1}],
 shadow_ball:['Shadow Ball','ghost','proj',85,8,{home:1}],hex:['Hex','ghost','aoe',90,10,{r:44,slow:1}],
 brave_bird:['Brave Bird','flying','melee',120,12,{dash:1,knock:2}],volt_tackle:['Volt Tackle','electric','melee',120,12,{dash:1,knock:2,st:'para',ch:.2}],
 electro_ball:['Electro Ball','electric','proj',80,7,{home:1}],freeze_dry:['Freeze-Dry','ice','proj',70,6,{slow:1}],
 blizzard:['Blizzard','ice','aoe',110,13,{r:56,slow:1}],x_scissor:['X-Scissor','bug','melee',80,6,{dash:1,pierce:1}],
 air_cutter:['Air Cutter','flying','proj',60,6,{n:3,pierce:1}],megahorn:['Megahorn','bug','melee',120,12,{knock:2.2}],
 extreme_speed:['Extreme Speed','normal','melee',80,4,{dash:1}],waterfall:['Waterfall','water','melee',85,6,{dash:1}],
 crunch:['Crunch','dark','melee',80,6,{knock:1.4}],hurricane:['Hurricane','flying','aoe',110,13,{r:52,knock:1.8}],
 dragon_rush:['Dragon Rush','dragon','melee',110,11,{dash:1,knock:2}],sand_tomb:['Sand Tomb','ground','aoe',70,8,{r:44,slow:1}],
 stone_edge:['Stone Edge','rock','proj',110,11,{pierce:1}],rock_slide:['Rock Slide','rock','rain',85,9,{n:5,r:26}],
 iron_tail:['Iron Tail','steel','melee',100,9,{knock:1.8}],recover:['Recover','normal','heal',0,18,{heal:.4}],
 water_pulse:['Water Pulse','water','proj',70,6,{home:1,slow:1}],fire_spin:['Fire Spin','fire','aoe',70,8,{r:40,st:'burn',ch:.4,slow:1}],
 psychic:['Psychic','psychic','blast',100,11,{r:30}],zen_headbutt:['Zen Headbutt','psychic','melee',85,7,{dash:1}],
 thunder:['Thunder','electric','rain',110,13,{n:4,r:28,st:'para',ch:.3}],discharge:['Discharge','electric','aoe',85,9,{r:46,st:'para',ch:.3}]};
for(const k in SIGM){if(!MV[k])MV[k]=SIGM[k];else{const x=SIGM[k][5],o=MV[k][5]||(MV[k][5]={});for(const e of ['home','pierce','dash','knock','slow','drain'])if(x[e]&&o[e]===undefined)o[e]=x[e]}}
const SIG_L={1:'leech_seed:24,petal_dance:42',4:'fire_fang:22,flare_blitz:44',7:'aqua_tail:22,water_spout:44',152:'magical_leaf:22,leaf_storm:44',
 155:'lava_plume:22,eruption:44',158:'ice_fang:22,liquidation:42',252:'bullet_seed:20,leaf_blade:40',255:'blaze_kick:22,high_jump_kick:44',
 258:'mud_shot:20,muddy_water:40',387:'wood_hammer:30,headlong_rush:46',390:'mach_punch:18,close_combat:44',393:'drill_peck:24,wave_crash:44',
 495:'leaf_tornado:22,leaf_storm:44',498:'heat_crash:28,head_smash:46',501:'sacred_sword:28,ceaseless_edge:42',650:'needle_arm:20,body_press:40',
 653:'psybeam:20,psyshock:40',656:'night_slash:22,dark_pulse:40',722:'leaf_blade:24,spirit_shackle:42',725:'throat_chop:24,darkest_lariat:42',
 728:'disarming_voice:18,moonblast:42',810:'grassy_glide:22,wood_hammer:42',813:'blaze_kick:22,high_jump_kick:42',816:'u_turn:22,shadow_ball:40',
 906:'night_slash:22,leaf_storm:44',909:'shadow_ball:24,hex:40',912:'brave_bird:30,close_combat:44',25:'electro_ball:18,volt_tackle:40',
 131:'freeze_dry:24,blizzard:44',123:'air_cutter:20,x_scissor:36',214:'close_combat:30,megahorn:42',58:'fire_fang:20,extreme_speed:40',
 129:'waterfall:22,hurricane:44',443:'sand_tomb:22,dragon_rush:44',246:'crunch:26,stone_edge:44',95:'rock_slide:22,iron_tail:38',
 350:'water_pulse:20,recover:36',37:'fire_spin:18,hex:38',54:'zen_headbutt:24,psychic:40',179:'discharge:24,thunder:42'};
for(const k in SIG_L){if(!LEARN_S[k])continue;const seen=new Set();const L=(LEARN_S[k]+','+SIG_L[k]).split(',').map(s=>{const [m,l]=s.split(':');return [m.trim(),+l]}).filter(([m])=>MV[m]&&!seen.has(m)&&seen.add(m)).sort((a,b)=>a[1]-b[1]);
  LEARN_S[k]=L.map(([m,l])=>m+':'+l).join(',');LEARN[k]=parseL(LEARN_S[k])}
// linhas que têm lista própria no estágio evoluído recebem os mesmos golpes
for(const [a,b] of [[26,25],[38,37],[59,58],[212,123],[208,95]])if(LEARN_S[a]){const seen=new Set();const L=(LEARN_S[a]+','+SIG_L[b]).split(',').map(s=>{const [m,l]=s.split(':');return [m.trim(),+l]}).filter(([m])=>MV[m]&&!seen.has(m)&&seen.add(m)).sort((x,y)=>x[1]-y[1]);LEARN_S[a]=L.map(([m,l])=>m+':'+l).join(',');LEARN[a]=parseL(LEARN_S[a])}

// ===================== ARENA VISTA DE CIMA =====================
// Liga (melhor de 3 contra bot, com ranks) e Chefes (difíceis, com fases).
// Cada lutador é comandado por um objeto de controle {x,y,atk,hab,q,ult,dodge,evo}.
// Hoje: o seu vem do INP (joystick/controle/teclado) e o rival vem do bot. No online, o rival vem da rede.
const AX_RANKS=[['Bronze',0,'#c9884a'],['Prata',300,'#c7d4e6'],['Ouro',700,'#ffcd75'],['Platina',1200,'#73eff7'],['Diamante',1800,'#b8a0ff'],['Mestre',2600,'#ef7d57']];
const rankOf=p=>{let r=AX_RANKS[0];for(const x of AX_RANKS)if(p>=x[1])r=x;return r};
const dir8=a=>ROWMAP[((Math.round(a/(Math.PI/4))%8)+8)%8];
let AX=null,AXS=null;const AXPX=3;
function axSize(){const W=Math.round(Math.max(VW,VH)*1.2),H=Math.round(W*.72);return{W,H,cx:W/2,cy:H/2+8*SC,rx:W*.42,ry:H*.37}}
function inOval(x,y,pad=0){const A=AX.A;if(A.rect)return x>-pad&&y>-pad&&x<A.W+pad&&y<A.H+pad;return ((x-A.cx)/(A.rx-pad))**2+((y-A.cy)/(A.ry-pad*.8))**2<=1}
function clampOval(f){const A=AX.A;if(A.rect){f.x=clamp(f.x,12*SC,A.W-12*SC);f.y=clamp(f.y,14*SC,A.H-8*SC);if(AX.O)for(const o of AX.O){if(o.k==='rock'||o.block||o.k==='pond'||o.k==='lava'||o.k==='pit'||o.k==='ice'){const dx=f.x-o.x,dy=(f.y-o.y)*1.3,d=Math.hypot(dx,dy),m=o.r+6*SC*(f.scale||1);if(d<m&&d>0){f.x=o.x+dx/d*m;f.y=o.y+dy/d*m/1.3}}}return}const dx=(f.x-A.cx)/(A.rx-10*SC),dy=(f.y-A.cy)/(A.ry-8*SC),d=Math.hypot(dx,dy);if(d>1){f.x=A.cx+dx/d*(A.rx-10*SC);f.y=A.cy+dy/d*(A.ry-8*SC)}}
// ---- chão: pedras, rachaduras, grama, muro com pilares (pintado uma vez por luta) ----
function axFloor(){const A=AX.A,w=Math.ceil(A.W/AXPX),h=Math.ceil(A.H/AXPX),c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d'),r=srnd(AX.seed||7);
  const cx=A.cx/AXPX,cy=A.cy/AXPX,rx=A.rx/AXPX,ry=A.ry/AXPX,inO=(px,py,k=1)=>((px-cx)/(rx*k))**2+((py-cy)/(ry*k))**2<=1;
  x.fillStyle='#1f3a2a';x.fillRect(0,0,w,h);
  for(let k=0;k<w*h/90;k++){const px=r()*w,py=r()*h;if(inO(px,py,1.12))continue;shadeBlob(x,Math.round(px),Math.round(py),3+Math.floor(r()*5),2+Math.floor(r()*4),['#1a3324','#2f6e38','#4fa046'])}
  // degraus/arquibancada de pedra
  for(let k=1.24;k>1.02;k-=.045){x.fillStyle=k>1.15?'#4c5568':k>1.08?'#6b7a99':'#566c86';x.beginPath();x.ellipse(cx,cy,rx*k,ry*k,0,0,7);x.fill();x.fillStyle='#3b4252';x.beginPath();x.ellipse(cx,cy+1,rx*(k-.006),ry*(k-.006),0,0,7);x.fill();x.fillStyle=k>1.15?'#4c5568':k>1.08?'#6b7a99':'#566c86';x.beginPath();x.ellipse(cx,cy,rx*(k-.01),ry*(k-.01),0,0,7);x.fill()}
  for(let k=0;k<w*h/50;k++){const px=Math.floor(r()*w),py=Math.floor(r()*h);if(!inO(px,py,1.24)||inO(px,py,1.02))continue;x.fillStyle=r()<.5?'#3e6b2f':'#5a8a3a';x.fillRect(px,py,1+Math.floor(r()*3),1)}
  // piso
  x.save();x.beginPath();x.ellipse(cx,cy,rx,ry,0,0,7);x.clip();x.fillStyle='#8a7a5e';x.fillRect(0,0,w,h);
  const T=9;for(let ty=0;ty<h;ty+=T)for(let tx=-(ty/T%2)*T/2;tx<w;tx+=T){const v=r();x.fillStyle=v<.33?'#a89270':v<.66?'#9a8564':'#b29d7a';x.fillRect(Math.round(tx)+1,ty+1,T-1,T-1);
    x.fillStyle='#c4b08c';x.fillRect(Math.round(tx)+1,ty+1,T-2,1);if(r()<.18){x.fillStyle='#6e6048';x.fillRect(Math.round(tx)+2+Math.floor(r()*5),ty+2,1,3+Math.floor(r()*4))}}
  for(let k=0;k<w*h/40;k++){const px=Math.floor(r()*w),py=Math.floor(r()*h);x.fillStyle=r()<.5?'#5a8a3a':'#7aa84a';x.fillRect(px,py,1+Math.floor(r()*2),1)}
  for(let k=0;k<26;k++){const px=r()*w,py=r()*h;blob(x,Math.round(px),Math.round(py),2+Math.floor(r()*4),1+Math.floor(r()*2),r()<.5?'#5a8a3a':'#4a7a32')}
  const g=x.createRadialGradient(cx,cy,Math.min(rx,ry)*.6,cx,cy,Math.max(rx,ry));g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(14,15,29,.45)');x.fillStyle=g;x.fillRect(0,0,w,h);x.restore();
  if(!A.rect)arenaCrowd(x,cx,cy,rx,ry,r);
  // pilares ao redor
  for(let a=0;a<6.283;a+=6.283/14){const px=Math.round(cx+Math.cos(a)*rx*1.06),py=Math.round(cy+Math.sin(a)*ry*1.06);if(py>cy+ry*.6)continue;
    x.fillStyle='#3b4252';x.fillRect(px-3,py-16,7,17);x.fillStyle='#8b9bb4';x.fillRect(px-3,py-16,5,16);x.fillStyle='#a8b5c8';x.fillRect(px-3,py-16,2,16);x.fillStyle='#c7d4e6';x.fillRect(px-4,py-18,9,2);x.fillStyle='#5a8a3a';x.fillRect(px-2,py-10,2,2)}
  return c}
function crater(px,py,rad){if(!AX||!AX.floor||!HQ()&&AX.mode==='surv')return;const nw=performance.now();if(nw-(AX.crT||0)<(AX.mode==='surv'?600:150))return;AX.crT=nw;const x=AX.floor.getContext('2d'),cx=px/AXPX,cy=py/AXPX,r=Math.max(3,rad/AXPX);
  x.save();x.beginPath();x.ellipse(AX.A.cx/AXPX,AX.A.cy/AXPX,AX.A.rx/AXPX,AX.A.ry/AXPX,0,0,7);x.clip();
  blob(x,Math.round(cx),Math.round(cy),Math.round(r),Math.round(r*.6),'#5e523e');blob(x,Math.round(cx),Math.round(cy+1),Math.round(r*.7),Math.round(r*.4),'#3d3428');
  for(let k=0;k<6;k++){const a=Math.random()*6.28,l=r*(1+Math.random()*.8);x.fillStyle='#4d4232';x.fillRect(Math.round(cx+Math.cos(a)*l),Math.round(cy+Math.sin(a)*l*.6),1,1)}x.restore()}

// ---- lutador ----
function axMoves(id,lvl){const mv=movesOf({id,lvl:Math.max(30,lvl)});const at=mv.filter(k=>MV[k][2]!=='heal');const hab=at[at.length-1]||mv[mv.length-1]||null,q=mv.filter(k=>k!==hab).slice(-1)[0]||null;return{hab,q}}
function mkF(src,team,o={}){const id=src.id,lv=o.lvl||50,c=calc({id,lvl:lv,q:1});const mv=axMoves(id,o.mlvl||src.lvl||lv);
  const f={id,base:id,shiny:!!src.shiny,team,x:0,y:0,dir:2,ang:0,anim:'Idle',t:0,once:false,scale:o.scale||1.3,vx:0,vy:0,
    hpMul:o.hpMul||7,atkMul:o.atkMul||1,lvl:lv,hab:mv.hab,q:mv.q,cd:{atk:0,hab:0,q:0,dodge:0},ult:0,en:0,combo:0,lastAtk:0,
    ctrl:{x:0,y:0},bot:o.bot||null,boss:!!o.boss,hold:src.hold,u:'f'+Math.random().toString(36).slice(2),st:null,ifr:0,dash:0,stun:0,summon:!!o.summon};
  axStats(f,true);return f}
function axStats(f,full){const r=full?1:f.hp/f.max,c=calc({id:f.id,lvl:f.lvl,q:1});f.max=Math.round(c.hp*f.hpMul);f.hp=Math.max(f.hp>0||full?1:0,Math.round(f.max*r));f.atk=c.atk*f.atkMul;f.def=c.def;f.spe=c.spe;f.types=S[f.id].t}
const foesOfF=f=>AX.F.filter(o=>o.team!==f.team&&o.hp>0);
function nearestFoe(f){let b=null,bd=1e9;for(const o of foesOfF(f)){const d=Math.hypot(o.x-f.x,o.y-f.y);if(d<bd){bd=d;b=o}}return b}
const fHead=f=>headY(f);
// ---- dano ----
function axHit(src,t,type,p,o={}){if(!t||t.hp<=0||t.team===src.team)return 0;if(t.ifr>0){axDodged(t);return 0}
  const r=hit(src.atk*p/50,[type],{defStat:t.def},t.types,src.lvl);let d=r.d;if(AX.mode==='surv'&&src.team===0&&AX.sv){const u=AX.sv.up;d=Math.round(d*(1+.2*(u.dmg||0))*(src.mega?1.3:1));if(u.steal)src.hp=Math.min(src.max,src.hp+d*.03*u.steal)}if(src.swarm&&t.team===0)d=Math.max(d,Math.round(t.max*(src.elite?.07:.018+.022*Math.min(1,AX.sv.t/480000))));if(src.boss&&t.team===0)d=Math.max(d,Math.round(t.max*.07*p/AX.L.pw*(r.e>1?1.3:r.e<1?.8:1)));if(src.summon)d=Math.max(d,Math.round(t.max*.025));
  t.hp=Math.max(0,t.hp-d);t.flash=300;t.lastHit=AX.time;if(t.wild&&t.sp)for(const o of t.sp.g)o.aggro=true;t.sq=Math.min(1,(t.sq||0)+(p>=90?1:.5));
  const a=Math.atan2(t.y-src.y,t.x-src.x),kb=(p>=90?16:6)*SC/2.2*(t.boss?.25:1)*(o.knock||1);if(o.slow&&!t.boss)t.slowT=1800;t.vx+=Math.cos(a)*kb*.02;t.vy+=Math.sin(a)*kb*.02;
  if((p>=90||r.crit)&&!t.swarm){hitstop=Math.max(hitstop,t.team===0?40:55);shake=Math.max(shake,p>=120?300:150)}
  if(nums.length<70)nums.push({x:t.x+(Math.random()*14-7),y:fHead(t),v:d,kind:r.e>1?'se':r.e<1?'nv':r.crit?'cr':t.team===0?'in':'',age:0});if(!SILENT&&(AX.mode!=='surv'||performance.now()-sndT>70)){sndT=performance.now();snd(r.e>1?'se':'hit')}
  src.ult=Math.min(100,src.ult+d/t.max*150);t.ult=Math.min(100,t.ult+d/t.max*70);src.en=Math.min(100,src.en+d/t.max*90);
  if(o.st&&Math.random()<(o.ch||0)&&!t.st)t.st={k:o.st,t:o.st==='sleep'?1400:o.st==='para'?3000:4000,tick:1000};
  if(o.drain)src.hp=Math.min(src.max,src.hp+Math.round(d*o.drain));
  if(t.hp<=0)axKO(t,src);return d}
function axDodged(t){nums.push({x:t.x,y:fHead(t),v:'Desviou',kind:'nv',age:0})}
function axKO(t,src){if(t.swarm||(AX.mode==='surv'&&t.boss)){play(t,'Faint',{cb:()=>{}});survKill(t);return}if(AX.mode==='hunt'&&t.wild)hmKill(t);play(t,'Faint',{cb:()=>{}});t.vx=Math.cos(Math.atan2(t.y-src.y,t.x-src.x))*.5;t.vy=Math.sin(Math.atan2(t.y-src.y,t.x-src.x))*.5;burst(t.x,fHead(t)+10*SC,'#f4f4f4',20,.18);shake=500;hitstop=Math.max(hitstop,120);snd('faint');crater(t.x,t.y,16*SC)}
// ---- projéteis e zonas ----
function axShot(src,ang,o){const sp=(o.sp||.32)*SC;AX.B.push({x:src.x+Math.cos(ang)*12*SC,y:src.y+Math.sin(ang)*8*SC,h:-18*SC*(src.scale||1),vx:Math.cos(ang)*sp,vy:Math.sin(ang)*sp,r:(o.r||7)*SC,team:src.team,src,type:o.type,p:o.p,xo:o.x||{},life:o.life||1400,home:(o.x&&o.x.home)||src.team===0&&!src.bot&&AX.mode!=='hunt'&&AX.mode!=='surv'?nearestFoe(src):null,pierce:!!(o.pierce||o.x&&o.x.pierce),hit:new Set(),blast:o.blast||0,big:o.big,tr:[]})}
function axZone(z){z.t=0;AX.Z.push(z)}
function inZoneF(z,f){if(z.k==='circ')return Math.hypot(f.x-z.x,(f.y-z.y)*1.25)<=z.r;
  const dx=z.x1-z.x0,dy=z.y1-z.y0,L=Math.hypot(dx,dy)||1,u=((f.x-z.x0)*dx+(f.y-z.y0)*dy)/(L*L);if(u<0||u>1)return false;const px=z.x0+u*dx,py=z.y0+u*dy;return Math.hypot(f.x-px,f.y-py)<=z.w}
function aimAt(f,range){let t=null;if(f.team===0&&!f.bot&&Math.hypot(f.ctrl.x,f.ctrl.y)>.3){const ja=Math.atan2(f.ctrl.y,f.ctrl.x);let bs=1e9;for(const o of foesOfF(f)){const d=Math.hypot(o.x-f.x,o.y-f.y);if(d>range)continue;const da=Math.abs(((Math.atan2(o.y-f.y,o.x-f.x)-ja+Math.PI*3)%(Math.PI*2))-Math.PI);if(da>1.05)continue;const sc=da*120*SC+d;if(sc<bs){bs=sc;t=o}}}if(!t)t=nearestFoe(f);if(t&&Math.hypot(t.x-f.x,t.y-f.y)<=range){const a=Math.atan2(t.y-f.y,t.x-f.x);return a+(f.bot?(Math.random()-.5)*f.bot.err:0)}return f.ang}
// ---- ações ----
function axBasic(f){if(f.cd.atk>0||f.stun>0||f.dash>0)return;const now=AX.time;if(now-f.lastAtk>900)f.combo=0;f.combo=f.combo%3+1;f.lastAtk=now;
  const type=f.types[0],melee=!RANGED.has(type),third=f.combo===3,mul=third?1.8:1;f.cd.atk=Math.max(300,560-f.spe)*(third?1.4:1)*svCd(f);
  const ang=aimAt(f,210*SC);f.ang=ang;f.dir=dir8(ang);
  if(f.anim!=='Atk')play(f,'Atk',{v:third?'Hop':f.combo===2?'Spin':null});
  later(60,()=>{if(f.hp<=0)return;const col=FXC[type]||FXC.normal;
    // todos têm alcance: quem é de contato solta um corte que voa e atravessa, mais curto e mais largo
    if(melee){cres(f.x+Math.cos(ang)*14*SC,fHead(f)+14*SC,Math.cos(ang)>=0?1:-1,col);axShot(f,ang,{type,p:42*mul,sp:.5,r:third?14:11,life:420,pierce:1,big:third,slash:1})}
    else axShot(f,ang,{type,p:38*mul,sp:.42,r:third?10:7,big:third});
    const ex=AX.mode==='surv'&&f.team===0&&AX.sv?AX.sv.up.multi||0:0;for(let i=1;i<=ex;i++)axShot(f,ang+(i%2?1:-1)*Math.ceil(i/2)*.2,{type,p:30,sp:.42,r:7})})}
function axMove(f,slot){const k=f[slot];if(!k||f.cd[slot]>0||f.anim==='Atk'&&f.hitCb&&!f.hitDone||f.stun>0)return false;const [name,type,kind,p,cd,x={}]=MV[k];
  f.cd[slot]=cd*1000*.8*svCd(f);const tgt=nearestFoe(f);const ang=aimAt(f,kind==='melee'?90*SC:260*SC);f.ang=ang;f.dir=dir8(ang);const col=FXC[type]||FXC.normal;
  const tel=f.team===0?220:(f.boss?700:520);
  if(AX.mode!=='surv')nums.push({x:f.x,y:fHead(f)-10*SC,v:name,kind:'name',age:0});
  play(f,'Atk',{v:atkV(kind),hit:()=>{if(f.hp<=0)return;
    if(kind==='proj'||kind==='chain'){const n=x.n||1,fire=()=>{for(let i=0;i<n;i++)later(i*90,()=>f.hp>0&&axShot(f,ang+(n>1?(i-(n-1)/2)*.16:0),{type,p:n>1?p*.55:p,x,sp:kind==='chain'?.55:.36}))};if(f.bot&&!f.boss&&p>=90)axWarn(f,ang,fire);else fire()}
    else if(kind==='blast'){const fire=()=>f.hp>0&&axShot(f,ang,{type,p,x,sp:.26,r:10,blast:(x.r||28)*SC*1.1,big:1});if(f.bot&&!f.boss&&p>=90)axWarn(f,ang,fire);else fire()}
    else if(kind==='wave'){const fire=()=>f.hp>0&&axShot(f,ang,{type,p,x,sp:.3,r:16,pierce:1,big:1});if(f.bot&&!f.boss&&p>=90)axWarn(f,ang,fire);else fire()}
    else if(kind==='beam'){const L=210*SC,w=Math.max(9,7*(x.w||1))*SC;const z={k:'line',x0:f.x,y0:f.y,x1:f.x+Math.cos(ang)*L,y1:f.y+Math.sin(ang)*L,w,dur:tel,team:f.team,col,fn:z=>{
        AX.FX.push({k:'beam',x0:f.x,y0:fHead(f)+14*SC,ang,len:L,w,col,t:0,dur:420});shake=Math.max(shake,200);for(const t of foesOfF(f))if(inZoneF(z,t))axHit(f,t,type,p,x)}};axZone(z)}
    else if(kind==='melee'){const dm=x.dash?2.4:1;f.vx+=Math.cos(ang)*.35*dm;f.vy+=Math.sin(ang)*.28*dm;if(x.dash){f.ifr=Math.max(f.ifr,160);for(let i=0;i<8;i++)part(f.x,f.y-Math.random()*14*SC,col[1],{vx:-Math.cos(ang)*.05*Math.random(),vy:-.02,life:260})}later(140,()=>{if(f.hp<=0)return;const hx=f.x+Math.cos(ang)*16*SC,hy=f.y+Math.sin(ang)*10*SC;cres(hx,fHead(f)+14*SC,Math.cos(ang)>=0?1:-1,col);impact(type,hx,fHead(f)+14*SC,true);
      for(const t of foesOfF(f))if(Math.hypot(t.x-hx,(t.y-hy)*1.2)<=(x.pierce?50:38)*SC)axHit(f,t,type,p,x)})}
    else if(kind==='aoe'||kind==='status'){const R=(x.r||40)*SC*1.2;axZone({k:'circ',x:f.x,y:f.y,r:R,dur:tel,team:f.team,col,fn:z=>{AX.FX.push({k:'ring',x:z.x,y:z.y,r:z.r,col,t:0,dur:420});if(p>=90)crater(z.x,z.y,R*.4);
        for(const t of foesOfF(f))if(inZoneF(z,t)){if(kind==='status'){if(!t.st&&Math.random()<(x.ch||.8)&&t.ifr<=0)t.st={k:x.st,t:x.st==='sleep'?1400:3500,tick:1000};else if(t.ifr>0)axDodged(t)}else axHit(f,t,type,p,x)}}})}
    else if(kind==='rain'){const n=Math.min(6,x.n||4),bx=tgt?tgt.x:f.x+Math.cos(ang)*120*SC,by=tgt?tgt.y:f.y+Math.sin(ang)*90*SC;
      for(let i=0;i<n;i++){const px=bx+(i?(Math.random()-.5)*70*SC:0),py=by+(i?(Math.random()-.5)*50*SC:0);axZone({k:'circ',x:px,y:py,r:19*SC,dur:tel+300+i*110,team:f.team,col,fn:z=>{AX.FX.push({k:'drop',x:z.x,y:z.y,col,t:0,dur:260});impact(type,z.x,z.y-6*SC,true);for(const t of foesOfF(f))if(inZoneF(z,t))axHit(f,t,type,p*.6,x)}})}}
    else if(kind==='heal'){const h=Math.round(f.max*.22);f.hp=Math.min(f.max,f.hp+h);nums.push({x:f.x,y:fHead(f),v:'+'+h,kind:'heal',age:0});for(let i=0;i<14;i++)part(f.x+(Math.random()-.5)*20*SC,f.y,'#a7f070',{vy:-.06-Math.random()*.05,life:600})}
  }});return true}
function axWarn(f,ang,fire){const L=200*SC;axZone({k:'line',x0:f.x,y0:f.y,x1:f.x+Math.cos(ang)*L,y1:f.y+Math.sin(ang)*L,w:8*SC,dur:400,team:f.team,col:FXC[f.types[0]]||FXC.normal,warn:1,fn:fire})}
function axDodge(f){if(f.cd.dodge>0||f.stun>0||f.hp<=0)return;let dx=f.ctrl.x,dy=f.ctrl.y;if(Math.hypot(dx,dy)<.2){dx=Math.cos(f.ang);dy=Math.sin(f.ang)}const l=Math.hypot(dx,dy)||1;dx/=l;dy/=l;
  const perfect=AX.B.some(b=>b.team!==f.team&&Math.hypot(b.x-f.x,b.y-f.y)<50*SC)||AX.Z.some(z=>z.team!==f.team&&z.dur-z.t<300&&inZoneF(z,f));
  f.dash=180;f.dvx=dx*80*SC/180;f.dvy=dy*80*SC/180;f.ifr=perfect?670:450;f.cd.dodge=perfect?900:2400;f.ang=Math.atan2(dy,dx);f.dir=dir8(f.ang);
  for(let i=0;i<10;i++)part(f.x,f.y-Math.random()*16*SC,'#f4f4f4',{vx:-dx*.05*Math.random(),vy:-.02,life:280,sz:Math.round(SC*1.5)});if(!SILENT)snd('dodge');
  if(perfect){slowmo=550;f.ult=Math.min(100,f.ult+15);nums.push({x:f.x,y:fHead(f)-8*SC,v:'Perfeita!',kind:'cr',age:0});if(f.team===0){scrFlash(.2,'#73eff7');snd('perfect')}}}
function axUlt(f){if(f.ult<100||f.anim==='Atk'&&f.hitCb&&!f.hitDone||f.stun>0||f.casting>0)return;f.ult=0;const type=f.types[0],col=FXC[type]||FXC.normal,fam=FAM[type]||'quake',tgt=nearestFoe(f);
  skillCall(f,spName(f.id),col);const ang=aimAt(f,400*SC);f.ang=ang;f.dir=dir8(ang);
  later(340,()=>{if(f.hp<=0)return;play(f,'Atk',{v:'Sp'});scrFlash(.18,col[0]);shake=Math.max(shake,450);const P=165;ultBurst(f,col);
    if(fam==='erupt'){for(let i=0;i<8;i++)later(i*80,()=>{const x=f.x+Math.cos(ang)*(26+i*30)*SC,y=f.y+Math.sin(ang)*(26+i*30)*SC*.8;AX.FX.push({k:'boom',x,y,r:24*SC,col,t:0,dur:480});crater(x,y,10*SC);for(let j=0;j<10;j++)part(x+(Math.random()-.5)*16*SC,y,col[j%3],{vx:(Math.random()-.5)*.06,vy:-.14-Math.random()*.2,g:.0004,life:650,sz:Math.round(SC*(2+Math.random()*2))});for(const t of foesOfF(f))if(Math.hypot(t.x-x,(t.y-y)*1.2)<30*SC&&!t['_u'+i]){axHit(f,t,type,P/2.2,{});}})}
    else if(fam==='wave')axShot(f,ang,{type,p:P,sp:.34,r:30,pierce:1,big:1,life:1600});
    else if(fam==='bolt'){for(const t of foesOfF(f))for(let j=0;j<3;j++)later(j*140,()=>{AX.FX.push({k:'bolt',x:t.x,y:t.y,col,t:0,dur:180});if(j===2){axHit(f,t,type,P,{st:'para',ch:.3});crater(t.x,t.y,8*SC)}})}
    else if(fam==='petal'){const bx=tgt?tgt.x:f.x,by=tgt?tgt.y:f.y;for(let i=0;i<10;i++){const px=bx+(Math.random()-.5)*110*SC,py=by+(Math.random()-.5)*80*SC;axZone({k:'circ',x:px,y:py,r:20*SC,dur:500+i*90,team:f.team,col,fn:z=>{AX.FX.push({k:'drop',x:z.x,y:z.y,col,t:0,dur:260});for(const t of foesOfF(f))if(inZoneF(z,t))axHit(f,t,type,P*.38,{})}})}}
    else if(fam==='orb'){const ox=tgt?tgt.x:f.x+Math.cos(ang)*120*SC,oy=tgt?tgt.y:f.y+Math.sin(ang)*90*SC;AX.FX.push({k:'orb',x:ox,y:oy,col,t:0,dur:750});axZone({k:'circ',x:ox,y:oy,r:62*SC,dur:750,team:f.team,col,fn:z=>{AX.FX.push({k:'boom',x:z.x,y:z.y,r:64*SC,col,t:0,dur:600});crater(z.x,z.y,30*SC);for(const t of foesOfF(f))if(inZoneF(z,t))axHit(f,t,type,P,{})}})}
    else{for(let i=1;i<=4;i++)later(i*120,()=>{const R=i*30*SC;AX.FX.push({k:'ring',x:f.x,y:f.y,r:R,col,t:0,dur:380});for(const t of foesOfF(f)){const d=Math.hypot(t.x-f.x,(t.y-f.y)*1.25);if(d<=R&&d>R-32*SC)axHit(f,t,type,P/2,{})}});crater(f.x,f.y,22*SC)}})}
function axEvo(f){if(f.mega||f.en<100||!f.hold||!MEGA[f.hold]||MEGA[f.hold][0]!==f.base)return;f.en=0;f.mega=f.hold;f.id=f.hold;axStats(f,false);
  scrFlash(.8);hitstop=Math.max(hitstop,160);shake=500;snd('mega');for(let i=0;i<40;i++){const a=i/40*6.28;part(f.x,fHead(f)+12*SC,['#ff6b6b','#ffcd75','#a7f070','#73eff7','#b8a0ff'][i%5],{vx:Math.cos(a)*.18,vy:Math.sin(a)*.18,life:800,sz:Math.round(2.5*SC)})}
  nums.push({x:f.x,y:fHead(f)-10*SC,v:'Mega!',kind:'se',age:0});AX.banner={title:S[f.id].n,sub:'Mega Evolução! Dano +30% até o fim',t:2600}}
const axCanEvo=f=>!!(f&&!f.mega&&f.hold&&MEGA[f.hold]&&MEGA[f.hold][0]===f.base&&G.items.ring&&G.items.stones[f.hold]);

// ---- bot ----
// d: 0 (novato) a 1 (mestre). Define reação, mira e quanto ele desvia.
function botThink(f,dt){const t=nearestFoe(f);const c=f.ctrl;c.x=c.y=0;if(!t)return;const B=f.bot,dx=t.x-f.x,dy=t.y-f.y,d=Math.hypot(dx,dy);
  B.react=(B.react||0)-dt;B.side=(B.side||0)-dt;if(B.side<=0){B.side=900+Math.random()*1200;B.dirS=Math.random()<.5?1:-1}
  // desviar
  if(f.cd.dodge<=0&&B.react<=0){const danger=AX.B.some(b=>b.team!==f.team&&Math.hypot(b.x-f.x,b.y-f.y)<60*SC&&((f.x-b.x)*b.vx+(f.y-b.y)*b.vy)>0)||AX.Z.some(z=>z.team!==f.team&&z.dur-z.t<380&&inZoneF(z,f));
    if(danger&&Math.random()<.05+B.d*.7){const a=Math.atan2(dy,dx)+Math.PI/2*B.dirS;c.x=Math.cos(a);c.y=Math.sin(a);axDodge(f);B.react=650-B.d*470;return}B.react=danger?650-B.d*470:120}
  const melee=!RANGED.has(f.types[0]),want=melee?70*SC:120*SC;
  let mx=0,my=0;if(d>want+12*SC){mx=dx/d;my=dy/d}else if(d<want-24*SC&&!melee){mx=-dx/d;my=-dy/d}
  const sa=Math.atan2(dy,dx)+Math.PI/2*B.dirS,sw=B.d<.4?0:.6;mx+=Math.cos(sa)*sw*(melee?.3:1);my+=Math.sin(sa)*sw*(melee?.3:1);
  const inZ=AX.Z.find(z=>z.team!==f.team&&inZoneF(z,f));if(inZ){const zx=inZ.k==='circ'?inZ.x:(inZ.x0+inZ.x1)/2,zy=inZ.k==='circ'?inZ.y:(inZ.y0+inZ.y1)/2,a=Math.atan2(f.y-zy,f.x-zx);mx=Math.cos(a)*1.4;my=Math.sin(a)*1.4}
  const l=Math.hypot(mx,my);if(l>0){c.x=mx/l;c.y=my/l}
  if(Math.random()<dt/(700-B.d*450)){if(f.ult>=100&&!f.wild&&!f.ally&&(B.d>=.4||f.hp<f.max*.3))return axUlt(f);if(f.en>=100&&f.hold)axEvo(f);
    for(const s of ['hab','q'])if(f[s]&&f.cd[s]<=0){const kind=MV[f[s]][2],rng=kind==='melee'?40*SC:kind==='aoe'||kind==='status'?(MV[f[s]][5]?.r||40)*SC:230*SC;if(d<=rng||kind==='heal'&&f.hp<f.max*.5){axMove(f,s);return}}}
  if(d<=(melee?120*SC:200*SC)&&f.cd.atk<=0&&Math.random()<.5+B.d*.5)axBasic(f)}
// ---- chefe: padrões ----
function bossThink(f,dt){const t=nearestFoe(f);const c=f.ctrl;c.x=c.y=0;if(!t||f.hp<=0)return;const dx=t.x-f.x,dy=t.y-f.y,d=Math.hypot(dx,dy),fr=f.hp/f.max;
  const ph=fr>.6?1:fr>.3?2:3;if(ph>f.phase){f.phase=ph;scrFlash(.4,'#b13e53');shake=600;snd('boss');toast(ph===2?'O chefe ficou mais forte!':'Fúria total!');f.pt=900;if(ph===3)f.spe*=1.2}
  if(d>40*SC){c.x=dx/d*.7;c.y=dy/d*.7}
  f.pt-=dt;if(f.pt>0||f.anim==='Atk'||CUT)return;const type=f.types[0],col=FXC[type]||FXC.normal,P=AX.L.pw;
  const pool=['volley','slam','charge',...(ph>=2?['ring','rain','ring']:[]),...(ph>=3?['spiral','summon','sweep']:[])].filter(p=>p!=='summon'||AX.F.filter(o=>o.summon&&o.hp>0).length<2);
  const p=pool[Math.floor(Math.random()*pool.length)];f.pt=(ph===1?2300:ph===2?1700:1250);
  const ang=Math.atan2(dy,dx);f.ang=ang;f.dir=dir8(ang);
  if(p==='volley'){play(f,'Atk',{v:'Sp',hit:()=>{const n=ph+3;for(let i=0;i<n;i++)axShot(f,ang+(i-(n-1)/2)*.2,{type,p:P*.55,sp:.3,r:8})}})}
  else if(p==='ring'){play(f,'Atk',{v:'Sp',hit:()=>{const n=12+ph*2,o=Math.random();for(let i=0;i<n;i++)axShot(f,o+i/n*6.283,{type,p:P*.45,sp:.24,r:8,life:2600})}})}
  else if(p==='slam'){const R=62*SC;axZone({k:'circ',x:f.x,y:f.y,r:R,dur:850,team:f.team,col,fn:z=>{play(f,'Atk',{v:'Hop'});jumpAt(f,null);AX.FX.push({k:'ring',x:z.x,y:z.y,r:R,col,t:0,dur:450});crater(z.x,z.y,R*.5);shake=500;for(const o of foesOfF(f))if(inZoneF(z,o))axHit(f,o,type,P*1.6,{})}})}
  else if(p==='charge'){const L=Math.min(260*SC,d+60*SC),x1=f.x+Math.cos(ang)*L,y1=f.y+Math.sin(ang)*L;axZone({k:'line',x0:f.x,y0:f.y,x1,y1,w:20*SC,dur:900,team:f.team,col,fn:z=>{play(f,'Atk',{v:'Spin'});f.dash=260;f.dvx=(x1-f.x)/260;f.dvy=(y1-f.y)/260;f.chg=new Set();f.ifrB=260}})}
  else if(p==='rain'){for(let i=0;i<4+ph;i++)later(i*240,()=>{const o=nearestFoe(f);if(!o)return;axZone({k:'circ',x:o.x+(Math.random()-.5)*16*SC,y:o.y+(Math.random()-.5)*12*SC,r:24*SC,dur:750,team:f.team,col,fn:z=>{AX.FX.push({k:'drop',x:z.x,y:z.y,col,t:0,dur:260});impact(type,z.x,z.y-6*SC,true);crater(z.x,z.y,9*SC);for(const q of foesOfF(f))if(inZoneF(z,q))axHit(f,q,type,P*1.1,{})}})})}
  else if(p==='spiral'){play(f,'Atk',{v:'Sp'});for(let i=0;i<30;i++)later(i*80,()=>{if(f.hp<=0)return;const a=i*.42;axShot(f,a,{type,p:P*.35,sp:.26,r:7,life:2400});axShot(f,a+Math.PI,{type,p:P*.35,sp:.26,r:7,life:2400})});f.pt=2600}
  else if(p==='summon'){play(f,'Atk',{v:'Sp'});const sp=S[f.base].mega||f.base,r0=rootOf(sp);for(let i=0;i<2;i++){const m=mkF({id:r0},1,{lvl:Math.max(5,f.lvl-15),bot:{d:.4,err:.4},hpMul:3,scale:1.1,summon:1});m.x=f.x+(i?30:-30)*SC;m.y=f.y+20*SC;m.spawn=500;AX.F.push(m);burst(m.x,m.y,'#b8a0ff',14,.15)}}
  else if(p==='sweep'){skillCall(f,spName(f.id),col);later(340,()=>{const A=AX.A,n=3,vert=Math.random()<.5;for(let i=0;i<n;i++){const k=(i+.5+Math.random()*.4-.2)/n;
      const z=vert?{k:'line',x0:A.cx-A.rx+k*2*A.rx,y0:A.cy-A.ry,x1:A.cx-A.rx+k*2*A.rx,y1:A.cy+A.ry,w:26*SC}:{k:'line',x0:A.cx-A.rx,y0:A.cy-A.ry+k*2*A.ry,x1:A.cx+A.rx,y1:A.cy-A.ry+k*2*A.ry,w:22*SC};
      axZone(Object.assign(z,{dur:1100+i*200,team:f.team,col,fn:z=>{for(let j=0;j<6;j++){const u=j/5;AX.FX.push({k:'boom',x:z.x0+(z.x1-z.x0)*u,y:z.y0+(z.y1-z.y0)*u,r:22*SC,col,t:0,dur:420})}shake=500;for(const q of foesOfF(f))if(inZoneF(z,q))axHit(f,q,type,P*1.8,{})}}))}});f.pt=2400}
  if(d<44*SC&&f.cd.atk<=0)axBasic(f)}

// ---- início, rodadas e fim ----
const AX_BOSS=()=>ARENA_L.map(([sp,l],i)=>{const fs=MEGAS[sp];if(!fs)return null;const f=fs.find(x=>!META[x].alias)||fs[0];return{f,sp,l,i}}).filter(Boolean).map((o,i)=>(o.i=i,o));
function axPickMon(){const all=[...G.team,...G.depot];return all.find(m=>m.u===G.axPick)||G.team[G.active]||G.team[0]}
function axStart(mode,arg){const m=axPickMon();if(!m)return;
  AXS={fx,nums,shots,slashes,timers,glows,SPX};fx=[];nums=[];shots=[];slashes=[];timers=[];glows=[];SPX=[];CUT=null;
  MODE='ax';document.body.classList.add('ax');$('pad').style.display='block';setTab('hunt');axPad();
  AX={mode,arg,F:[],B:[],Z:[],FX:[],time:0,round:1,score:[0,0],state:'intro',st:2200,seed:Math.floor(Math.random()*1e9),camX:0,camY:0};
  if(mode==='liga'){const R=rankOf(G.rank.pts),ri=AX_RANKS.indexOf(R),d=Math.min(1,ri/5+Math.min(.08,(G.rank.streak||0)*.02)),warm=(G.rank.w||0)+(G.rank.l||0)<3;
    const pool=Object.keys(S).map(Number).filter(id=>!S[id].mega&&!LEGEND.has(id)&&META[id]&&!META[id].alias&&!S[id].e);const rid=pool[Math.floor(Math.random()*pool.length)];
    AX.L={d,rid,warm,name:warm?'Treinador iniciante':['Novato','Treinador','Ás','Veterano','Elite','Campeão'][ri]+' CPU'}}
  else if(mode==='hunt')AX.L={b:arg.b,i:arg.i,map:arg.map||arg.b,pw:50};
  else if(mode==='surv')AX.L={b:arg==='neve'?'lago':arg||'floresta',map:arg||'floresta',i:0,pw:70};
  else if(mode==='rift')AX.L={pw:72,R:riftNow()};
  else{const b=AX_BOSS()[arg];AX.L={b,pw:62+b.i*4}}
  resize();if(mode==='hunt'||mode==='surv'){hmSetup();if(mode==='surv')survInit()}else axRound();snd('boss');dirty=true}
function axRound(){const A=axSize();AX.A=A;AX.floor=axFloor();if(AX.mode==='rift')riftTint(AX.floor);AX.F=[];AX.B=[];AX.Z=[];AX.FX=[];timers=[];
  const m=axPickMon(),me2=mkF(m,0,{lvl:AX.mode==='liga'?50:m.lvl,mlvl:m.lvl});me2.x=A.cx-A.rx*.55;me2.y=A.cy;me2.ang=0;me2.dir=2;AX.F.push(me2);AX.P=me2;
  if(AX.mode==='liga'){const e=mkF({id:AX.L.rid},1,{lvl:50,hpMul:AX.L.warm?3.5:7,atkMul:.6+.4*AX.L.d,bot:{d:AX.L.d,err:.5-AX.L.d*.42}});e.x=A.cx+A.rx*.55;e.y=A.cy;e.ang=Math.PI;e.dir=6;AX.F.push(e);AX.E=e}
  else if(AX.mode==='rift'){const e=riftBoss(m);AX.F.push(e);AX.E=e}
  else{const b=AX.L.b,e=mkF({id:b.f},1,{lvl:Math.max(b.l,m.lvl+4),boss:1,hpMul:26+b.i*1.5,atkMul:1.15,scale:2.1,bot:{d:.7,err:.2}});e.x=A.cx+A.rx*.45;e.y=A.cy;e.dir=6;e.phase=1;e.pt=1500;AX.F.push(e);AX.E=e}
  AX.state='intro';AX.st=2200;AX.T=AX.mode==='liga'?90000:180000;axCam(true)}
function axCam(snap){const p=AX.P,A=AX.A;if(!p)return;const tx=clamp(p.x-VW/2,Math.min(0,A.W-VW)/2,Math.max(0,A.W-VW)),ty=clamp(p.y-VH*.55,Math.min(0,A.H-VH)/2,Math.max(0,A.H-VH));if(snap){AX.camX=tx;AX.camY=ty}else{AX.camX+=(tx-AX.camX)*.12;AX.camY+=(ty-AX.camY)*.12}}
function axEndRound(winner){if(AX.state!=='fight')return;AX.state='roundEnd';AX.st=2200;AX.rw=winner;if(winner>=0)AX.score[winner]++;
  if(AX.mode==='liga'&&AX.score[0]<2&&AX.score[1]<2){AX.next='round'}else AX.next='end'}
function axFinish(){if(AX.mode==='surv')return survEnd(AX.sv.won);if(AX.mode==='rift')return riftEnd(AX.rw===0);const won=AX.score[0]>AX.score[1]||(AX.mode!=='liga'&&AX.rw===0);let msg;
  if(AX.mode==='liga'){const before=rankOf(G.rank.pts);if(won){G.rank.streak=(G.rank.streak||0)+1;const g=25+Math.min(10,(G.rank.streak-1)*2);G.rank.pts+=g;G.rank.w++;const gold=200+AX_RANKS.indexOf(before)*150;G.gold+=gold;msg=`Vitória! +${g} pontos, +${gold} de ouro`}
    else{G.rank.streak=0;const l=Math.min(G.rank.pts,AX_RANKS.indexOf(before)<=1?5:15);G.rank.pts-=l;G.rank.l++;msg=`Derrota. -${l} pontos`}
    const after=rankOf(G.rank.pts);if(after!==before)msg+=after[1]>before[1]?`. Subiu para ${after[0]}!`:`. Caiu para ${after[0]}`;G.rank.best=Math.max(G.rank.best||0,G.rank.pts)}
  else{const b=AX.L.b;if(won){const first=!G.arena.wins[b.i];const gold=b.l*(first?200:60);G.gold+=gold;G.arena.wins[b.i]=(G.arena.wins[b.i]||0)+1;G.arena.best=Math.max(G.arena.best,b.i+1);addStone(b.f);msg=`Chefe vencido! +${gold.toLocaleString('pt-BR')} de ouro, ${stoneN(b.f)}`;if(!G.items.ring){G.items.ring=true;msg+=', Pulseira Mega'}}
    else msg='O chefe venceu. Treine e tente de novo'}
  AX.msg=msg;axExit(msg)}
function axExit(msg){if(!AXS)return;const wasHunt=AX&&(AX.mode==='hunt'||AX.mode==='surv');const wasRift=AX&&AX.mode==='rift';const back=AX?{hunt:'mao',surv:'surv',rift:'fenda'}[AX.mode]||'arena':'arena';$('svPick')&&($('svPick').style.display='none');({fx,nums,shots,slashes,timers,glows,SPX}=AXS);AXS=null;AX=null;CUT=null;slowmo=0;MODE='hunt';document.body.classList.remove('ax');$('pad').style.display='none';PAD.on=false;PAD.atk=false;
  resize();if(msg){toast(msg);feed(msg)}dirty=true;save();setTab(back);if(wasRift&&AX===null)riftShowResult()}

// ---- passo ----
function axStep(dt,raw){const A=AX;if(!A)return;if(A.state==='pick'){axPadHud();return}A.time+=dt;tickTimers(dt);if(!AX)return;if(shake>0)shake-=raw;stepSpx(dt);
  const p=A.P,c=p.ctrl;c.x=INP.x;c.y=INP.y;
  if(A.state==='intro'){A.st-=raw;if(A.st<=0){A.state='fight';snd('quest')}}
  else if(A.state==='roundEnd'){A.st-=raw;if(A.st<=0){if(A.next==='round'){A.round++;axRound()}else return axFinish()}}
  else if(A.state==='fight'){A.T-=dt;
    if(p.hp>0){if(INP.atk)axBasic(p);if(INP.sk[0]){INP.sk[0]=0;axMove(p,'hab')}if(INP.sk[1]){INP.sk[1]=0;axMove(p,'q')}if(INP.sp){INP.sp=false;axUlt(p)}if(INP.dodge){INP.dodge=false;axDodge(p)}if(INP.mega){INP.mega=false;if(axCanEvo(p))axEvo(p)}}
    for(const f of A.F){if(f===p||f.hp<=0||f.spawn>0)continue;if(f.boss)bossThink(f,dt);else if(f.swarm)survChase(f,dt);else if(f.wild&&!f.aggro)hmWander(f,dt);else botThink(f,dt)}
    if(A.mode==='hunt')hmStep(dt);else if(A.mode==='surv')survStep(dt);
    else if(A.T<=0){const r0=p.hp/p.max,r1=A.E.hp/A.E.max;axEndRound(r0>=r1?0:1)}
    else if(p.hp<=0)axEndRound(1);else if(A.E.hp<=0)axEndRound(0)}
  INP.sk[0]=INP.sk[1]=0;INP.sp=INP.dodge=INP.mega=false;
  for(const f of A.F){f.t+=dt;if(f.flash>0)f.flash-=dt;if(f.spawn>0)f.spawn-=dt;for(const k in f.cd)if(f.cd[k]>0)f.cd[k]-=dt;if(f.casting>0)f.casting-=dt;if(f.ifr>0)f.ifr-=dt;if(f.lunge>0)f.lunge-=dt;if(f.sq>0)f.sq=Math.max(0,f.sq-dt/170);
    airStep(f,dt);
    if(f.hp<=0){f.x+=f.vx*dt;f.y+=f.vy*dt;f.vx*=.9;f.vy*=.9;clampOval(f);continue}
    if(f.st){f.st.t-=dt;if(f.st.k==='burn'||f.st.k==='poison'){f.st.tick-=dt;if(f.st.tick<=0){f.st.tick=1000;const d=Math.max(1,Math.round(f.max*.02));f.hp=Math.max(1,f.hp-d);nums.push({x:f.x,y:fHead(f),v:d,kind:'st',age:0})}}
      if(Math.random()<dt/120)part(f.x+(Math.random()-.5)*14*SC,fHead(f)+10*SC,f.st.k==='burn'?'#ef7d57':f.st.k==='poison'?'#b8a0ff':f.st.k==='para'?'#ffcd75':'#94b0c2',{vy:-.04,life:400});if(f.st.t<=0)f.st=null}
    const stun=f.st&&f.st.k==='sleep',slow=(f.st&&f.st.k==='para'?.55:1)*(f.slowT>0?.6:1);if(f.slowT>0){f.slowT-=dt;if(Math.random()<dt/160)part(f.x+(Math.random()-.5)*14*SC,f.y,'#94b0c2',{vy:-.02,life:350})}
    if(f.dash>0){f.dash-=dt;f.x+=f.dvx*dt;f.y+=f.dvy*dt;if(f.chg)for(const o of foesOfF(f))if(!f.chg.has(o)&&Math.hypot(o.x-f.x,o.y-f.y)<26*SC*(f.scale/1.3)){f.chg.add(o);axHit(f,o,f.types[0],AX.L.pw*1.5,{})}if(f.dash<=0)f.chg=null}
    else if(!stun&&A.state==='fight'){const cx=f.ctrl.x,cy=f.ctrl.y,l=Math.hypot(cx,cy);
      if(l>.15){const sp=(.06+f.spe/4000)*SC*slow*(f.boss?.75:1)*(f.anim==='Atk'?.85:1);f.x+=cx*sp*dt;f.y+=cy*sp*dt*.85;if(f.anim!=='Atk'){f.ang=Math.atan2(cy,cx);f.dir=dir8(f.ang);if(f.anim!=='Walk')play(f,'Walk')}}
      else if(f.anim==='Walk')play(f,'Idle')}
    else if(f.anim==='Walk'&&A.state!=='fight')play(f,'Idle');
    f.x+=f.vx*dt;f.y+=f.vy*dt;f.vx*=Math.pow(.992,dt);f.vy*=Math.pow(.992,dt);clampOval(f)}
  // empurrão entre lutadores
  for(let i=0;i<A.F.length;i++)for(let j=i+1;j<A.F.length;j++){const a=A.F[i],b=A.F[j];if(a.hp<=0||b.hp<=0)continue;const dx=b.x-a.x,dy=b.y-a.y;if(dx>30*SC||dx<-30*SC||dy>30*SC||dy<-30*SC)continue;const d=Math.hypot(dx,dy),m=12*SC*((a.scale+b.scale)/2.6);if(d<m&&d>0){const k=(m-d)/2/d;a.x-=dx*k;a.y-=dy*k;b.x+=dx*k;b.y+=dy*k}}
  for(const b of A.B){if(b.home&&b.home.hp>0){const t=b.home,ca=Math.atan2(b.vy,b.vx),da=((Math.atan2(t.y-b.y,t.x-b.x)-ca+Math.PI*3)%(Math.PI*2))-Math.PI;if(Math.abs(da)<.61){const na=ca+Math.min(Math.abs(da),.0027*dt)*Math.sign(da),sp=Math.hypot(b.vx,b.vy);b.vx=Math.cos(na)*sp;b.vy=Math.sin(na)*sp}}b.x+=b.vx*dt;b.y+=b.vy*dt;b.life-=dt;b.tr.push([b.x,b.y+b.h]);if(b.tr.length>8)b.tr.shift();if(Math.random()<.55)trailFx(b);
    for(const t of A.F){if(t.team===b.team||t.hp<=0||b.hit.has(t))continue;if(Math.hypot(t.x-b.x,(t.y-b.y)*1.2)<=b.r+9*SC*(t.scale/1.3)){b.hit.add(t);
      if(b.blast){b.dead=true;AX.FX.push({k:'boom',x:b.x,y:b.y,r:b.blast,col:FXC[b.type]||FXC.normal,t:0,dur:480});crater(b.x,b.y,b.blast*.4);for(const q of foesOfF(b.src))if(Math.hypot(q.x-b.x,(q.y-b.y)*1.2)<=b.blast)axHit(b.src,q,b.type,b.p,b.xo)}
      else{axHit(b.src,t,b.type,b.p,b.xo);impact(b.type,b.x,b.y+b.h,b.big);if(!b.pierce)b.dead=true}break}}
    if(!b.dead&&AX.O)for(const o of AX.O)if((o.block)&&Math.hypot(b.x-o.x,(b.y-o.y)*1.3)<o.r){b.life=0;break}
    if(!b.dead&&(b.life<=0||!inOval(b.x,b.y,-6*SC))){b.dead=true;if(b.blast){AX.FX.push({k:'boom',x:b.x,y:b.y,r:b.blast,col:FXC[b.type]||FXC.normal,t:0,dur:480});for(const q of foesOfF(b.src))if(Math.hypot(q.x-b.x,(q.y-b.y)*1.2)<=b.blast)axHit(b.src,q,b.type,b.p,b.xo)}else impact(b.type,b.x,b.y+b.h)}}
  A.B=A.B.filter(b=>!b.dead);
  for(const z of A.Z){z.t+=dt;if(z.t>=z.dur&&!z.done){z.done=true;z.fn(z)}}A.Z=A.Z.filter(z=>!z.done);
  for(const e of A.FX)e.t+=dt;A.FX=A.FX.filter(e=>e.t<e.dur);
  for(const q of fx){q.age+=raw;if(q.tx!==undefined){q.x+=(q.tx-q.x)*.12;q.y+=(q.ty-q.y)*.12}else{q.x+=q.vx*raw;q.y+=q.vy*raw;q.vy+=(q.g||0)*raw}}fx=fx.filter(q=>q.age<q.life);
  for(const n of nums)n.age+=raw;nums=nums.filter(n=>n.age<900);
  axCam(false);axPadHud()}

// ---- desenho ----
function runeCircle(x,y,r,k,col,t){ctx.save();ctx.translate(x,y);ctx.scale(1,.8);ctx.globalCompositeOperation='lighter';
  ctx.globalAlpha=.25+.35*k;ctx.strokeStyle=col;ctx.lineWidth=Math.max(1.5,SC*.9);ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.72,0,7);ctx.stroke();
  ctx.rotate(t/600);for(let i=0;i<6;i++){const a=i/6*6.283;ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.72,Math.sin(a)*r*.72);ctx.lineTo(Math.cos(a+2.094)*r*.72,Math.sin(a+2.094)*r*.72);ctx.stroke()}
  ctx.globalAlpha=.18+.3*k;ctx.fillStyle=col;ctx.beginPath();ctx.arc(0,0,r*k,0,7);ctx.fill();ctx.restore()}
function axDraw(){const A=AX;ctx.setTransform(DPR,0,0,DPR,0,0);ctx.imageSmoothingEnabled=false;ctx.fillStyle='#0e1a14';ctx.fillRect(0,0,VW,VH);
  if(shake>0){const m=Math.min(1,shake/200)*3*SC/1.6;ctx.translate(Math.round((Math.random()-.5)*2*m),Math.round((Math.random()-.5)*2*m))}
  ctx.translate(-Math.round(A.camX),-Math.round(A.camY));const now=performance.now();
  if(A.floor){const sx=Math.max(0,Math.floor(A.camX/AXPX)-1),sy=Math.max(0,Math.floor(A.camY/AXPX)-1),sw=Math.min(A.floor.width-sx,Math.ceil(VW/AXPX)+3),sh=Math.min(A.floor.height-sy,Math.ceil(VH/AXPX)+3);if(sw>0&&sh>0)ctx.drawImage(A.floor,sx,sy,sw,sh,sx*AXPX,sy*AXPX,sw*AXPX,sh*AXPX)}
  if(A.O)for(const o of A.O)if(o.glow&&Math.random()<.05&&Math.abs(o.x-A.camX-VW/2)<VW)part(o.x+(Math.random()-.5)*o.r,o.y+(Math.random()-.5)*o.r*.5,Math.random()<.5?'#ffcd75':'#ef7d57',{vy:-.05,life:900,sz:Math.round(SC*1.5)});
  for(const z of A.Z){const k=Math.min(1,z.t/z.dur),col=z.team===0?'#73eff7':'#ffcd75';
    if(z.k==='circ')runeCircle(z.x,z.y,z.r,k,col,now);
    else{const dx=z.x1-z.x0,dy=z.y1-z.y0,L=Math.hypot(dx,dy),a=Math.atan2(dy,dx);ctx.save();ctx.translate(z.x0,z.y0);ctx.rotate(a);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.2+.3*k;ctx.fillStyle=col;ctx.fillRect(0,-z.w,L*k,z.w*2);ctx.globalAlpha=.6;ctx.strokeStyle=col;ctx.lineWidth=SC;ctx.strokeRect(0,-z.w,L,z.w*2);
      for(let s=0;s<L;s+=14*SC){ctx.beginPath();ctx.moveTo(s,-z.w*.6);ctx.lineTo(s+6*SC,0);ctx.lineTo(s,z.w*.6);ctx.stroke()}ctx.restore()}}
  if(A.mode==='surv')survDraw();
  drawLiquids(now);
  for(const e of A.FX)if(e.k==='glyph')drawGlyph(e,now);
  const vis=o=>o.x>A.camX-80*SC&&o.x<A.camX+VW+80*SC&&o.y>A.camY-40*SC&&o.y<A.camY+VH+160*SC;
  const list=[...A.F.filter(vis),...(A.O?A.O.filter(o=>o.spr&&vis(o)):[])].sort((a,b)=>a.y-b.y);
  for(const f of list){if(f.spr){hmDrawObs(f);continue}if(f.spawn>0&&Math.floor(f.spawn/80)%2)continue;drawEnt(f,f.hp<=0);if(f.wild&&f.hp<=0&&!f.caught&&!f.ball&&f===hmCorpseNear()){ctx.save();ctx.strokeStyle='#ffcd75';ctx.lineWidth=2;ctx.globalAlpha=.6+.3*Math.sin(now/150);ctx.beginPath();ctx.ellipse(f.x,f.y,12*SC,4.5*SC,0,0,7);ctx.stroke();ctx.restore()}}
  for(const f of list){if(f.spr||f.hp<=0||f===A.E&&f.boss||f.swarm&&!f.elite)continue;if(f.wild&&!f.aggro&&f.hp>=f.max){if(f.shiny){ctx.fillStyle='#ffcd75';ctx.font='400 13px "Pixelify Sans",monospace';ctx.textAlign='center';ctx.fillText('★',f.x,fHead(f)-6*SC)}continue}const y=fHead(f)-4*SC,w=26*SC;ctx.fillStyle='#0e0f1d';ctx.fillRect(f.x-w/2-1,y-1,w+2,3*SC+2);ctx.fillStyle=f.team===0?'#38b764':'#ef7d57';ctx.fillRect(f.x-w/2,y,w*f.hp/f.max,3*SC);
    if(f.st){ctx.fillStyle={burn:'#ef7d57',poison:'#b8a0ff',para:'#ffcd75',sleep:'#94b0c2'}[f.st.k];ctx.fillRect(f.x-w/2,y-3*SC,6*SC,2*SC)}}
  for(const b of A.B){const c=FXC[b.type]||FXC.normal,z=b.r,y=b.y+b.h;if(b.slash||b.pierce&&b.r>=20*SC){const a=Math.atan2(b.vy,b.vx);ctx.save();ctx.translate(b.x,y);ctx.rotate(a);ctx.globalCompositeOperation='lighter';ctx.globalAlpha=Math.min(1,b.life/150);ctx.strokeStyle=c[1];ctx.lineWidth=5*SC;ctx.lineCap='round';ctx.beginPath();ctx.arc(-z*.6,0,z*1.2,-1.1,1.1);ctx.stroke();ctx.strokeStyle='#f4f4f4';ctx.lineWidth=2*SC;ctx.beginPath();ctx.arc(-z*.6,0,z*1.2,-1,1);ctx.stroke();ctx.restore();continue}drawTrail({tr:b.tr,type:b.type,x:b.x,y});ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.75;ctx.drawImage(glowTex(c[1]),b.x-z*2.2,y-z*2.2,z*4.4,z*4.4);ctx.restore();ctx.fillStyle=c[2]||c[1];ctx.beginPath();ctx.arc(b.x,y,z*.75,0,7);ctx.fill();ctx.fillStyle=c[1];ctx.beginPath();ctx.arc(b.x,y,z*.6,0,7);ctx.fill();ctx.fillStyle=c[0];ctx.beginPath();ctx.arc(b.x-z*.15,y-z*.15,z*.32,0,7);ctx.fill();
    ctx.save();ctx.globalAlpha=.3;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.ellipse(b.x,b.y,z*.8,z*.3,0,0,7);ctx.fill();ctx.restore()}
  for(const e of A.FX){const k=e.t/e.dur,c=e.col;ctx.save();ctx.globalCompositeOperation='lighter';
    if(e.k==='boom'||e.k==='ring'){const r=e.r*(e.k==='ring'?.3+.7*k:.4+.8*(1-Math.pow(1-k,2)));ctx.globalAlpha=(1-k)*.9;ctx.strokeStyle=c[0];ctx.lineWidth=(e.k==='ring'?3:5)*SC*(1-k);ctx.beginPath();ctx.ellipse(e.x,e.y,r,r*.8,0,0,7);ctx.stroke();if(e.k==='boom'){ctx.globalAlpha=(1-k)*.6;ctx.drawImage(glowTex(c[1]),e.x-r*1.2,e.y-r*1.2,r*2.4,r*2.4);ctx.globalAlpha=(1-k)*.5;ctx.fillStyle=c[1];ctx.beginPath();ctx.ellipse(e.x,e.y,r*.7,r*.56,0,0,7);ctx.fill();ctx.globalAlpha=(1-k)*.85;ctx.fillStyle=c[0];ctx.beginPath();ctx.ellipse(e.x,e.y,r*.32*(1-k*.5),r*.26*(1-k*.5),0,0,7);ctx.fill()}}
    else if(e.k==='beam'){const a=Math.min(1,e.t/80)*(1-k);ctx.translate(e.x0,e.y0);ctx.rotate(e.ang);ctx.globalAlpha=.5*a;ctx.drawImage(glowTex(c[1]),0,-e.w*3,e.len,e.w*6);ctx.globalAlpha=a;ctx.fillStyle=c[1];ctx.fillRect(0,-e.w*.6,e.len,e.w*1.2);ctx.fillStyle=c[0];ctx.fillRect(0,-e.w*.25,e.len,e.w*.5)}
    else if(e.k==='drop'||e.k==='bolt'){const h=110*SC,y0=e.y-h*(1-k);ctx.globalAlpha=1-k*.5;ctx.strokeStyle=c[0];ctx.lineWidth=(e.k==='bolt'?3:4)*SC;ctx.beginPath();ctx.moveTo(e.x,y0-30*SC);if(e.k==='bolt'){for(let i=0;i<5;i++)ctx.lineTo(e.x+(Math.random()-.5)*14*SC,y0-30*SC+i*(30*SC+h*k)/5)}ctx.lineTo(e.x,e.y-8*SC);ctx.stroke();ctx.drawImage(glowTex(c[1]),e.x-18*SC,e.y-26*SC,36*SC,36*SC)}
    else if(e.k==='ray'){const r0=12*SC+k*60*SC,r1=r0+26*SC*(1-k);ctx.globalAlpha=1-k;ctx.strokeStyle=c[0];ctx.lineWidth=3*SC*(1-k);ctx.beginPath();ctx.moveTo(e.x+Math.cos(e.a)*r0,e.y+Math.sin(e.a)*r0*.7);ctx.lineTo(e.x+Math.cos(e.a)*r1,e.y+Math.sin(e.a)*r1*.7);ctx.stroke()}
    else if(e.k==='glyph'){}
    else if(e.k==='ballf'){ctx.globalCompositeOperation='source-over';const x=e.x+(e.tx-e.x)*k,y=e.y+(e.ty-e.y)*k-Math.sin(k*Math.PI)*40*SC,z=Math.round(3*SC);ctx.fillStyle='#0e0f1d';ctx.fillRect(x-z-1,y-z-1,z*2+2,z*2+2);ctx.fillStyle=e.ball==='ultra'?'#ffcd75':e.ball==='great'?'#41a6f6':'#ef7d57';ctx.fillRect(x-z,y-z,z*2,z);ctx.fillStyle='#f4f4f4';ctx.fillRect(x-z,y,z*2,z)}
    else if(e.k==='orb'){const r=(8+k*30)*SC;ctx.globalAlpha=.7;ctx.drawImage(glowTex(c[1]),e.x-r*2,e.y-r*2-20*SC,r*4,r*4);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.arc(e.x,e.y-20*SC,r*.6,0,7);ctx.fill();if(Math.random()<.7){const a=Math.random()*6.28;part(e.x+Math.cos(a)*70*SC,e.y-20*SC+Math.sin(a)*50*SC,c[0],{tx:e.x,ty:e.y-20*SC,life:380})}}
    ctx.restore()}
  if(!A.A.rect&&A.mode!=='rift')drawTorches(now);
  if(HQ())ambientAX(now);drawGlows();drawSpx();
  for(const q of fx){ctx.globalAlpha=1-q.age/q.life;ctx.fillStyle=q.col;ctx.fillRect(Math.round(q.x),Math.round(q.y),q.sz,q.sz)}ctx.globalAlpha=1;
  for(const n of nums){const k=n.age/900;ctx.save();ctx.globalAlpha=1-Math.max(0,k-.6)/.4;ctx.textAlign='center';const pop=1+.6*Math.max(0,1-n.age/140);
    ctx.font=`700 ${Math.round((n.kind==='name'||n.kind==='skill'?7:n.kind==='se'?10:8)*SC*(n.kind==='name'||n.kind==='skill'?1:pop))}px "Pixelify Sans",monospace`;
    if(n.kind==='skill'){const y0=n.y-(1-Math.pow(1-k,3))*14*SC,tw=ctx.measureText(n.v).width+14;ctx.fillStyle='#0e0f1d';ctx.fillRect(n.x-tw/2-2,y0-15*SC/1.7-2,tw+4,17*SC/1.7+4);ctx.fillStyle=n.col||'#5d275d';ctx.fillRect(n.x-tw/2,y0-15*SC/1.7,tw,17*SC/1.7);ctx.fillStyle='#f4f4f4';ctx.fillText(n.v,n.x,y0-2);ctx.restore();continue}const y=n.y-(1-Math.pow(1-k,3))*22*SC;ctx.lineWidth=3;ctx.strokeStyle='#0e0f1d';ctx.strokeText(n.v,n.x,y);
    ctx.fillStyle=n.kind==='se'?'#ffcd75':n.kind==='nv'?'#94b0c2':n.kind==='in'?'#ef7d57':n.kind==='cr'?'#73eff7':n.kind==='heal'?'#a7f070':n.kind==='st'?'#d59bff':n.kind==='name'?'#c7f6ff':'#f4f4f4';ctx.fillText(n.v,n.x,y);ctx.restore()}
  axLight();ctx.setTransform(DPR,0,0,DPR,0,0);if(HQ())ctx.drawImage(vignette(),0,0,VW,VH);axHud();if(flashA>0){ctx.globalAlpha=Math.min(1,flashA);ctx.fillStyle=flashC;ctx.fillRect(0,0,VW,VH);ctx.globalAlpha=1}drawCut();drawPad()}
function axCard(f,x,y,w,right){const h=44;ctx.fillStyle='#0e0f1d';ctx.fillRect(x-2,y-2,w+4,h+4);ctx.fillStyle='#29366f';ctx.fillRect(x,y,w,h);ctx.fillStyle='#41a6f6';ctx.fillRect(x,y,w,2);
  const im=pimg(f.id,f.shiny),ps=h-6,px=right?x+w-ps-3:x+3;ctx.fillStyle='#1a1c2c';ctx.fillRect(px,y+3,ps,ps);if(im.complete&&im.naturalWidth)ctx.drawImage(im,px,y+3,ps,ps);
  const bx=right?x+4:x+ps+8,bw=w-ps-14;const ht=Math.ceil(f.hp)+'/'+f.max;ctx.font='400 11px "Pixelify Sans",monospace';const hw=ctx.measureText(ht).width;let nm=S[f.id].n;ctx.font='700 13px "Pixelify Sans",monospace';while(nm.length>3&&ctx.measureText(nm).width>bw-hw-6)nm=nm.slice(0,-2)+'.';
  ctx.fillStyle='#f4f4f4';ctx.textAlign=right?'right':'left';ctx.fillText(nm,right?bx+bw:bx,y+14);
  ctx.textAlign=right?'left':'right';ctx.fillStyle='#c7d4e6';ctx.font='400 11px "Pixelify Sans",monospace';ctx.fillText(ht,right?bx:bx+bw,y+14);
  const bar=(yy,v,c,hh)=>{ctx.fillStyle='#0e0f1d';ctx.fillRect(bx,yy,bw,hh);ctx.fillStyle=c;const ww=bw*clamp(v,0,1);ctx.fillRect(right?bx+bw-ww:bx,yy,ww,hh)};
  bar(y+19,f.hp/f.max,f.hp/f.max>.5?'#38b764':f.hp/f.max>.2?'#ffcd75':'#ef7d57',6);bar(y+29,f.ult/100,f.ult>=100?'#ffcd75':'#ef7d57',4);bar(y+36,f.en/100,'#73eff7',4)}
function axHud(){const A=AX,w=Math.min(170,VW*.42);if(A.mode==='hunt')return hmHud();if(A.mode==='surv')return survHud();axCard(A.P,6,6,w,false);
  if(A.E.boss){const bw=VW-w-24,bx=w+16,f=A.E;ctx.fillStyle='#0e0f1d';ctx.fillRect(bx-2,6,bw+4,26);ctx.fillStyle='#5d275d';ctx.fillRect(bx,8,bw,22);ctx.fillStyle='#b13e53';ctx.fillRect(bx+2,20,(bw-4)*f.hp/f.max,8);
    ctx.font='700 13px "Pixelify Sans",monospace';ctx.textAlign='left';ctx.fillStyle='#ffcd75';ctx.fillText('CHEFE '+S[f.id].n+' Nv '+f.lvl,bx+4,18);ctx.textAlign='right';ctx.fillStyle='#f4f4f4';ctx.fillText('Fase '+(f.phase||1),bx+bw-4,18)}
  else axCard(A.E,VW-w-6,6,w,true);
  ctx.textAlign='center';ctx.font='700 13px "Pixelify Sans",monospace';const s=Math.max(0,Math.ceil(A.T/1000));
  ctx.fillStyle='#f4f4f4';ctx.fillText(A.mode==='liga'?`Rodada ${A.round}  ${A.score[0]} x ${A.score[1]}`:'',VW/2,56);ctx.fillStyle='#ffcd75';ctx.fillText(`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`,VW/2,70);
  if(A.state==='intro'||A.state==='roundEnd'){const t=A.state==='intro'?(A.st>1500?`Rodada ${A.round}`:A.st>1000?'3':A.st>500?'2':A.st>0?'1':'Lutar!'):(A.rw===0?'Você venceu a rodada!':A.rw===1?(A.E.boss?'Derrota...':'Rival venceu a rodada'):'Empate');
    ctx.font=`700 ${Math.round(Math.min(34,VW/12))}px "Pixelify Sans",monospace`;ctx.lineWidth=6;ctx.strokeStyle='#0e0f1d';ctx.strokeText(t,VW/2,VH*.42);ctx.fillStyle='#ffcd75';ctx.fillText(t,VW/2,VH*.42)}}
// ---- botões ----
function axPad(){const p=$('pad');p.innerHTML=`<div id="joy"></div><button id="axExit" class="btn">Sair</button>
  <button class="ab btn y" id="abAtk" data-k="atk"><b>Atq</b><i></i></button><button class="ab btn" id="abHab" data-k="hab"><b>Hab</b><small></small><i></i></button><button class="ab btn" id="abQ" data-k="q"><b>Q</b><small></small><i></i></button>
  <button class="ab btn" id="abUlt" data-k="ult"><b>ULT</b><i></i></button><button class="ab btn" id="abDodge" data-k="dodge"><b>Esq</b><i></i></button><button class="ab btn" id="abEvo" data-k="evo"><b>Evo</b><i></i></button><button class="ab btn y" id="abBall" data-k="ball"><b>Bola</b><small></small><i></i></button><div id="svPick"></div>`;
  p.onclick=e=>{const b=e.target.closest('[data-svup]');if(b)survChoose(b.dataset.svup)};
  const j=$('joy'),R=()=>$('stage').getBoundingClientRect();
  j.addEventListener('pointerdown',e=>{const r=R();PAD.on=true;PAD.id=e.pointerId;PAD.ox=e.clientX-r.left;PAD.oy=e.clientY-r.top;PAD.vx=PAD.vy=0;j.setPointerCapture(e.pointerId);e.preventDefault()});
  j.addEventListener('pointermove',e=>{if(!PAD.on||e.pointerId!==PAD.id)return;const r=R(),dx=e.clientX-r.left-PAD.ox,dy=e.clientY-r.top-PAD.oy,l=Math.hypot(dx,dy),M=42;if(l>M*1.6){PAD.ox+=dx*(1-M*1.6/l);PAD.oy+=dy*(1-M*1.6/l)}PAD.vx=clamp(dx/M,-1,1);PAD.vy=clamp(dy/M,-1,1)});
  const up=e=>{if(e.pointerId===PAD.id){PAD.on=false;PAD.vx=PAD.vy=0}};j.addEventListener('pointerup',up);j.addEventListener('pointercancel',up);
  for(const b of p.querySelectorAll('.ab')){const k=b.dataset.k;b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);if(k==='atk')PAD.atk=true;else if(k==='hab')INP.sk[0]=1;else if(k==='q')INP.sk[1]=1;else if(k==='ult')INP.sp=true;else if(k==='dodge')INP.dodge=true;else if(k==='evo')INP.mega=true;else if(k==='ball')INP.ball=true});
    if(k==='atk')for(const ev of ['pointerup','pointercancel'])b.addEventListener(ev,()=>PAD.atk=false)}
  $('axExit').addEventListener('click',()=>{if(!AX)return;if(AX.mode==='hunt')return axExit(hmSummary('Fim da caça.'));if(AX.mode==='surv')return survEnd(false);if(confirmExit())axExit(AX.mode==='liga'?'Você desistiu da partida':'Você saiu da luta')})}
function confirmExit(){if(AX.mode!=='liga')return true;if(AX.mode==='liga'&&AX.state==='fight'){G.rank.streak=0;const l=Math.min(G.rank.pts,AX_RANKS.indexOf(rankOf(G.rank.pts))<=1?5:15);G.rank.pts-=l;G.rank.l++}return true}
function axPadHud(){if(!AX||!AX.P)return;const p=AX.P,set=(id,frac,txt,dis)=>{const b=$(id);if(!b)return;b.querySelector('i').style.height=(frac*100)+'%';if(txt!==undefined){const s=b.querySelector('small');if(s&&s.textContent!==txt)s.textContent=txt}b.classList.toggle('off',!!dis)};
  set('abAtk',Math.max(0,p.cd.atk)/700);set('abHab',p.hab?Math.max(0,p.cd.hab)/(MV[p.hab][4]*800):1,p.hab?MV[p.hab][0]:'-',!p.hab);set('abQ',p.q?Math.max(0,p.cd.q)/(MV[p.q][4]*800):1,p.q?MV[p.q][0]:'-',!p.q);
  set('abUlt',1-p.ult/100,undefined,p.ult<100);set('abDodge',Math.max(0,p.cd.dodge)/2400);{const b=$('abDodge').querySelector('b'),t=p.cd.dodge>0?(p.cd.dodge/1000).toFixed(1):'Esq';if(b.textContent!==t)b.textContent=t}const ev=$('abEvo');ev.style.display=axCanEvo(p)||p.mega?'grid':'none';set('abEvo',p.mega?0:1-p.en/100,undefined,p.mega||p.en<100);
  $('abUlt').classList.toggle('ready',p.ult>=100);const bb=$('abBall');if(bb){const near=AX.mode==='hunt'&&hmCorpseNear();bb.style.display=near?'grid':'none';if(near){const k=hmBall();bb.querySelector('small').textContent=k?k==='ultra'?'Ultra':k==='great'?'Great':'Poké':'sem bola'}}}
// ---- painel ----
function axStatsRow(id){const c=calc({id,lvl:50,q:1}),bar=(n,v,mx,col)=>`<div class="sb"><span>${n}</span><i><b style="width:${Math.min(100,v/mx*100)}%;background:${col}"></b></i><em>${Math.round(v)}</em></div>`;
  return bar('PS',c.hp*7,1400,'#38b764')+bar('Atq',c.atk,260,'#ef7d57')+bar('Def',c.def,260,'#41a6f6')+bar('Vel',c.spe,240,'#ffcd75')}
function axPanel(){const m=axPickMon();if(!m)return '<p class="note">Escolha um Pokémon inicial primeiro.</p>';G.rank=G.rank||{pts:0,w:0,l:0,streak:0};const R=rankOf(G.rank.pts),ri=AX_RANKS.indexOf(R),nx=AX_RANKS[ri+1];
  const mv=axMoves(m.id,m.lvl),all=[...G.team,...G.depot].sort((a,b)=>b.lvl-a.lvl);
  let h=`<div class="axsel">${all.slice(0,40).map(o=>`<button class="axp${o.u===m.u?' on':''}" data-axpick="${o.u}" aria-label="${S[o.id].n}"><img src="${portrait(o.id,o.shiny)}" alt=""><span>${o.lvl}</span></button>`).join('')}</div>
  <div class="axcard win"><div class="row"><span class="nm">${S[m.id].n}</span><span class="lv">${S[m.id].t.join(' / ')}</span></div>${axStatsRow(m.id)}
   <div class="axmv"><b>Atq</b><span>${RANGED.has(S[m.id].t[0])?'Tiro':'Corpo a corpo'} de ${S[m.id].t[0]}, combo de 3</span><b>Hab</b><span>${mv.hab?MV[mv.hab][0]:'-'}</span><b>Q</b><span>${mv.q?MV[mv.q][0]:'-'}</span><b>ULT</b><span>${spName(m.id)}</span>${MEGAS[m.id]?`<b>Evo</b><span>${m.hold&&G.items.stones[m.hold]&&G.items.ring?S[m.hold].n:'Precisa de pedra e Pulseira'}</span>`:''}</div></div>
  <h3>Liga</h3><div class="arow win"><span class="rk" style="background:${R[2]}">${R[0][0]}</span><div style="min-width:0"><div class="row"><span class="nm">${R[0]}, ${G.rank.pts} pontos</span></div>
   <div class="sub">${G.rank.w} vitórias, ${G.rank.l} derrotas${nx?`. ${nx[1]-G.rank.pts} para ${nx[0]}`:''}. Melhor de 3, nível 50 para todos. Vitória +25 (mais em sequência), derrota -15.</div></div><button class="btn y" data-axgo="liga">Lutar!</button></div>
  <p class="note" style="margin:4px 0 10px">Por enquanto o rival é o computador, que fica mais esperto a cada rank. O online com outros jogadores entra quando ligarmos o servidor.</p>
  <h3>Chefes</h3><p class="note" style="margin-bottom:6px">Difíceis de verdade: 3 fases, ataques em área, investidas e chamam ajudantes. Seu Pokémon luta no nível dele. Vencer dá a pedra mega do chefe.</p>`;
  for(const L of AX_BOSS()){const lock=L.i>G.arena.best,won=G.arena.wins[L.i];
    h+=`<div class="arow win ${lock?'lock':''} ${won?'won':''}"><img src="${portrait(L.f)}" alt=""><div style="min-width:0"><div class="row"><span class="nm">${L.i+1}. ${S[L.f].n}</span><span class="lv">Nv ${L.l}+</span></div>
      <div class="sub">${won?`Vencido ${won}x`:`Prêmio: ${(L.l*200).toLocaleString('pt-BR')} de ouro e ${stoneN(L.f)}`}</div></div>${lock?'<span class="sub">Vença o anterior</span>':`<button class="btn y" data-axgo="boss" data-b="${L.i}">Lutar</button>`}</div>`}
    h+=`<div class="keys" style="margin-top:10px"><b>Celular</b><span>arraste à esquerda para andar; Atq, Hab, Q, ULT, Esq (esquiva) e Evo (mega) à direita</span><b>Controle</b><span>analógico anda, A Atq, X Hab, Y Q, gatilho direito ULT, B esquiva, gatilho esquerdo Evo</span><b>Teclado</b><span>WASD, J Atq, 1 Hab, 2 Q, E ULT, K esquiva, M Evo</span></div>`;
  return h}
function axClick(t,d){if(d.surv){axStart('surv',d.surv);return true}if(d.rift){if(riftKeys()<1)return toast('Sem chave da Fenda'),true;G.rift.k--;axStart('rift');return true}if(d.hm){const [b,i]=d.hm.split('|');axStart('hunt',{b,i:+i,map:b==='lago'?'neve':b});return true}if(d.axpick){G.axPick=d.axpick;sheetDirty=true;return true}if(d.axgo){if(d.axgo==='liga')axStart('liga');else axStart('boss',+d.b);return true}return false}

const svCd=f=>AX&&AX.mode==='surv'&&f.team===0&&AX.sv?Math.max(.4,1-.12*(AX.sv.up.cd||0)):1;

// ---- habilidade no mapa (sem pausa) ----
function skillCall(f,name,col){AX.FX.push({k:'glyph',f,col,t:0,dur:700});nums.push({x:f.x,y:fHead(f)-6*SC,v:name,kind:'skill',col:col[2]||'#5d275d',age:0});f.casting=340;snd('special');
  for(let i=0;i<18;i++){const a=i/18*6.283;part(f.x+Math.cos(a)*40*SC,f.y+Math.sin(a)*30*SC,col[i%3],{tx:f.x,ty:fHead(f)+16*SC,life:340})}}
function drawGlyph(e,now){const f=e.f;if(f){e.x=f.x;e.y=f.y}const k=e.t/e.dur,r=(22+16*Math.min(1,k*2.5))*SC,c=e.col;ctx.save();ctx.translate(e.x,e.y);ctx.scale(1,.55);ctx.globalCompositeOperation='lighter';
  ctx.globalAlpha=(1-k)*.5;ctx.drawImage(glowTex(c[1]),-r*1.5,-r*1.5,r*3,r*3);ctx.globalAlpha=(1-k*.8);ctx.strokeStyle=c[0];ctx.lineWidth=2.5*SC;ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.66,0,7);ctx.stroke();
  ctx.rotate(now/250);ctx.lineWidth=1.6*SC;for(let i=0;i<6;i++){const a=i/6*6.283;ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.66,Math.sin(a)*r*.66);ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);ctx.stroke();ctx.fillStyle=c[1];ctx.fillRect(Math.cos(a+.5)*r*.83-2*SC,Math.sin(a+.5)*r*.83-2*SC,4*SC,4*SC)}ctx.restore()}
// explosão de energia na hora em que a habilidade sai
function ultBurst(f,col){const y=fHead(f)+14*SC;AX.FX.push({k:'ring',x:f.x,y:f.y,r:70*SC,col,t:0,dur:450});glow(f.x,y,col[0],70,500);
  for(let i=0;i<34;i++){const a=Math.random()*6.283,s=.12+Math.random()*.22;part(f.x,y,col[i%3],{vx:Math.cos(a)*s,vy:Math.sin(a)*s*.7,g:.0002,life:520+Math.random()*300,sz:Math.round(SC*(1.5+Math.random()*1.5))})}
  for(let i=0;i<10;i++){const a=i/10*6.283;AX.FX.push({k:'ray',x:f.x,y,a,col,t:0,dur:320})}}
// vinheta pronta (desenhada uma vez por tamanho de tela)
let VIG=null;function vignette(){if(VIG&&VIG.w===VW&&VIG.h===VH)return VIG.c;const c=document.createElement('canvas');c.width=Math.ceil(VW/2);c.height=Math.ceil(VH/2);const x=c.getContext('2d'),g=x.createRadialGradient(c.width/2,c.height/2,Math.min(c.width,c.height)*.35,c.width/2,c.height/2,Math.max(c.width,c.height)*.72);
  g.addColorStop(0,'rgba(14,15,29,0)');g.addColorStop(1,'rgba(14,15,29,.55)');x.fillStyle=g;x.fillRect(0,0,c.width,c.height);VIG={w:VW,h:VH,c};return c}
// partículas de clima por mapa
function ambientAX(now){const A=AX,m=A.mode==='rift'?'rift':A.mode==='liga'||A.mode==='boss'?'arena':(A.L&&(A.L.map||A.L.b));if(fx.length>500)return;const x=A.camX+Math.random()*VW,y=A.camY+Math.random()*VH;
  if(m==='floresta'&&Math.random()<.08)part(x,y,Math.random()<.5?'#d8f080':'#fff3a0',{vx:(Math.random()-.5)*.02,vy:-.01,life:1800,sz:Math.round(SC*1.2)});
  else if(m==='vulcao'&&Math.random()<.25)part(x,A.camY+VH,Math.random()<.5?'#ef7d57':'#ffcd75',{vx:(Math.random()-.5)*.03,vy:-.08-Math.random()*.06,life:2600,sz:Math.round(SC*1.3)});
  else if(m==='caverna'&&Math.random()<.06)part(x,y,Math.random()<.5?'#b8a0ff':'#73eff7',{vx:(Math.random()-.5)*.015,vy:-.02,life:2400,sz:Math.round(SC*1.6)});
  else if((m==='neve'||m==='lago')&&Math.random()<.45)part(x,A.camY-4,'#f4f8fc',{vx:-.02+Math.random()*.01,vy:.05+Math.random()*.04,life:4200,sz:Math.round(SC*(1+Math.random()))});
  else if(m==='rift'&&Math.random()<.2)part(x,y,Math.random()<.5?'#b8a0ff':'#ef7dff',{vx:(Math.random()-.5)*.02,vy:-.04,life:1600,sz:Math.round(SC*1.5)})}

// ===================== CAÇA NA MÃO (mapa aberto, estilo PxG) =====================
// Usa o mesmo motor da arena vista de cima. Loot x2 enquanto houver energia de caça.
const MANUAL_B=new Set(['floresta','vulcao','caverna','lago']),HM_MAX=100,HM_REG=180000;
function hmStam(){const now=Date.now();G.hm=G.hm||{st:HM_MAX,t:now};const k=Math.floor((now-G.hm.t)/HM_REG);if(k>0){G.hm.st=Math.min(HM_MAX,G.hm.st+k);G.hm.t+=k*HM_REG}if(G.hm.st>=HM_MAX)G.hm.t=now;return G.hm.st}
const TREEC={};
function hmTreeSpr(kind){if(TREEC[kind])return TREEC[kind];const c=document.createElement('canvas');c.width=44;c.height=50;const x=c.getContext('2d'),r=srnd(kind.length*31+5);
  if(kind==='tree'){blob(x,22,47,12,3,'rgba(14,15,29,.35)');tree2(x,22,47,2,['#1f5f46','#2f8a52','#5ab552'],r)}
  else if(kind==='pine'){blob(x,22,47,10,3,'rgba(14,15,29,.35)');x.fillStyle='#3b2a22';x.fillRect(20,36,4,11);for(let k=0;k<4;k++){const w=14-k*3,y=38-k*8;for(let q=0;q<9;q++){x.fillStyle=q<3?'#5ab552':q<6?'#2f8a52':'#1f5f46';x.fillRect(22-Math.round(w*(q+1)/9),y-9+q,Math.round(w*(q+1)/9)*2,1)}}}
  else if(kind==='pineS'){blob(x,22,47,10,3,'rgba(14,15,29,.3)');x.fillStyle='#3b2a22';x.fillRect(20,36,4,11);for(let k=0;k<4;k++){const w=14-k*3,y=38-k*8;for(let q=0;q<9;q++){x.fillStyle=q<2?'#f4f4f4':q<5?'#2f6e58':'#1f4f46';x.fillRect(22-Math.round(w*(q+1)/9),y-9+q,Math.round(w*(q+1)/9)*2,1)}}}
  else if(kind==='grave'){blob(x,22,47,9,3,'rgba(14,15,29,.4)');x.fillStyle='#1f1c2b';x.fillRect(14,24,16,23);x.fillRect(15,22,14,2);x.fillRect(17,20,10,2);x.fillStyle='#6b6585';x.fillRect(15,24,13,22);x.fillRect(16,22,11,2);x.fillStyle='#8b85a5';x.fillRect(15,24,3,21);x.fillStyle='#3d3852';x.fillRect(20,28,4,1);x.fillRect(21,27,2,5);x.fillStyle='#5a8a3a';x.fillRect(14,45,4,2)}
  else if(kind==='col'){blob(x,22,47,9,3,'rgba(14,15,29,.4)');x.fillStyle='#1a0e10';x.fillRect(14,12,16,36);x.fillStyle='#3d2323';x.fillRect(15,12,6,35);x.fillStyle='#57302c';x.fillRect(21,12,8,35);x.fillStyle='#6b3a2f';x.fillRect(14,10,16,3);x.fillStyle='#ef7d57';x.fillRect(18,30,1,10);x.fillRect(25,20,1,8)}
  else if(kind==='dead'){blob(x,22,47,9,3,'rgba(14,15,29,.4)');x.fillStyle='#2a1717';x.fillRect(20,18,4,29);x.fillRect(12,22,9,2);x.fillRect(12,16,2,7);x.fillRect(24,26,9,2);x.fillRect(31,19,2,8);x.fillStyle='#4a2a2a';x.fillRect(21,18,1,29)}
  return TREEC[kind]=c}
// ---- mapa ----
function hmSetup(){const b=AX.L.map||AX.L.b,W=Math.round(Math.max(VW,VH)*(AX.mode==='surv'?4:3)),H=Math.round(W*.72);AX.A={W,H,cx:W/2,cy:H/2,rx:W,ry:H,rect:1};AX.O=[];AX.F=[];AX.B=[];AX.Z=[];AX.FX=[];timers=[];
  const r=srnd(AX.seed),P=AXPX,w=Math.ceil(W/P),h=Math.ceil(H/P),c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');
  const start=AX.mode==='surv'?{x:W/2,y:H/2}:{x:W*.08,y:H*.5},free=(px,py,rad)=>Math.hypot(px-start.x,py-start.y)>120*SC&&AX.O.every(o=>Math.hypot(o.x-px,o.y-py)>o.r+rad);
  if(b==='floresta'){const G1=['#4fa046','#56a84a','#5ab552','#4a9a44'];for(let ty=0;ty<h;ty+=4)for(let tx=0;tx<w;tx+=4){x.fillStyle=G1[Math.floor(r()*4)];x.fillRect(tx,ty,4,4)}
      for(let k=0;k<w*h/18;k++){x.fillStyle=r()<.5?'#3e8948':'#7dd06a';x.fillRect(Math.floor(r()*w),Math.floor(r()*h),1,2)}
      for(let pth=0;pth<3;pth++){const y0=h*(.2+pth*.3),a=10+r()*20,f=1+r()*2;for(let px=0;px<w;px++){const py=Math.round(y0+Math.sin(px/w*6.283*f+pth)*a);x.fillStyle='#c2a05a';x.fillRect(px,py-4,1,9);x.fillStyle='#b08d4e';x.fillRect(px,py+4,1,1);if(r()<.2){x.fillStyle='#d8c08a';x.fillRect(px,py-3+Math.floor(r()*7),1,1)}}}
      for(let k=0;k<40;k++){const px=Math.floor(r()*w),py=Math.floor(r()*h);for(let q=0;q<25;q++){x.fillStyle=r()<.5?'#2f6e38':'#3e8948';x.fillRect(px+Math.floor(r()*18),py+Math.floor(r()*12),1,3)}}
      for(let k=0;k<60;k++){const px=Math.floor(r()*w),py=Math.floor(r()*h),cc=['#f4f4f4','#ffcd75','#ef7d57','#b8a0ff'][k%4];for(let q=0;q<5;q++){const fx2=px+Math.floor(r()*10),fy2=py+Math.floor(r()*8);x.fillStyle=cc;x.fillRect(fx2,fy2,2,1);x.fillRect(fx2,fy2-1,1,1)}}
      for(let k=0;k<3;k++){const px=W*(.3+r()*.6),py=H*(.15+r()*.7),rx=(50+r()*40)*SC,ry=rx*.6;if(!free(px,py,rx))continue;
        blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P)+3,Math.round(ry/P)+3,'#d8c08a');blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P),Math.round(ry/P),'#3b5dc9');blob(x,Math.round(px/P),Math.round(py/P)-1,Math.round(rx/P)-3,Math.round(ry/P)-3,'#41a6f6');
        for(let q=0;q<10;q++){x.fillStyle='#73eff7';x.fillRect(Math.round(px/P-rx/P*.5+r()*rx/P),Math.round(py/P-ry/P*.4+r()*ry/P*.8),3,1)}AX.O.push({x:px,y:py,r:rx*.85,k:'pond'})}
      for(let k=0;k<70;k++){const px=r()*W,py=r()*H;if(!free(px,py,22*SC))continue;AX.O.push({x:px,y:py,r:9*SC,k:r()<.6?'tree':'pine',spr:1,block:1})}
      for(let k=0;k<30;k++){const px=r()*W,py=r()*H;if(!free(px,py,10*SC))continue;rock(x,Math.round(px/P),Math.round(py/P)+3,4,['#6b7a99','#8b9bb4','#c7d4e6']);AX.O.push({x:px,y:py,r:7*SC,k:'rock',block:1})}}
  else if(b==='vulcao'){const G1=['#3d2323','#442828','#4a2a2a','#3a2020'];for(let ty=0;ty<h;ty+=4)for(let tx=0;tx<w;tx+=4){x.fillStyle=G1[Math.floor(r()*4)];x.fillRect(tx,ty,4,4)}
      for(let k=0;k<50;k++){blob(x,Math.floor(r()*w),Math.floor(r()*h),6+Math.floor(r()*14),3+Math.floor(r()*7),r()<.5?'#57302c':'#2a1717')}
      for(let k=0;k<w*h/25;k++){x.fillStyle=r()<.5?'#2a1717':'#6b3a2f';x.fillRect(Math.floor(r()*w),Math.floor(r()*h),1,1)}
      for(let k=0;k<80;k++){let px=Math.floor(r()*w),py=Math.floor(r()*h);for(let q=0;q<14;q++){px+=Math.floor(r()*3)-1;py+=1;x.fillStyle='#1a0e10';x.fillRect(px,py,2,1);x.fillStyle=r()<.3?'#ef7d57':'#b13e53';x.fillRect(px,py,1,1)}}
      for(let k=0;k<7;k++){const px=W*(.25+r()*.7),py=H*(.1+r()*.8),rx=(40+r()*50)*SC,ry=rx*.6;if(!free(px,py,rx))continue;
        blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P)+3,Math.round(ry/P)+3,'#1a0e10');blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P),Math.round(ry/P),'#b13e53');blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P)-3,Math.round(ry/P)-3,'#ef7d57');blob(x,Math.round(px/P)-2,Math.round(py/P)-1,Math.round(rx/P*.5),Math.round(ry/P*.4),'#ffcd75');
        AX.O.push({x:px,y:py,r:rx*.85,k:'lava',glow:1})}
      for(let k=0;k<55;k++){const px=r()*W,py=r()*H;if(!free(px,py,20*SC))continue;AX.O.push({x:px,y:py,r:8*SC,k:r()<.65?'col':'dead',spr:1,block:1})}
      for(let k=0;k<30;k++){const px=r()*W,py=r()*H;if(!free(px,py,10*SC))continue;rock(x,Math.round(px/P),Math.round(py/P)+3,4,['#2a1717','#57302c','#7a4535']);AX.O.push({x:px,y:py,r:7*SC,k:'rock',block:1})}}
  else if(b==='caverna'){const G1=['#2b2838','#302c40','#28243a','#332f45'];for(let ty=0;ty<h;ty+=4)for(let tx=0;tx<w;tx+=4){x.fillStyle=G1[Math.floor(r()*4)];x.fillRect(tx,ty,4,4)}
      for(let ty=0;ty<h;ty+=10)for(let tx=(ty/10%2)*5;tx<w;tx+=10){if(r()<.5){x.fillStyle='#3d3852';x.fillRect(tx,ty,9,1);x.fillStyle='#1f1c2b';x.fillRect(tx,ty+9,9,1)}}
      for(let k=0;k<45;k++){blob(x,Math.floor(r()*w),Math.floor(r()*h),8+Math.floor(r()*14),4+Math.floor(r()*6),'rgba(184,160,255,.08)')}
      for(let k=0;k<w*h/60;k++){x.fillStyle=r()<.1?'#73eff7':r()<.5?'#1a1828':'#4a4560';x.fillRect(Math.floor(r()*w),Math.floor(r()*h),1,1)}
      for(let k=0;k<40;k++){const px=Math.floor(r()*w),py=Math.floor(r()*h),cc=r()<.5?'#b8a0ff':'#73eff7';for(let q=0;q<5;q++){x.fillStyle=cc;x.fillRect(px+q*2-4,py-q%3*2,1,2+q%3)}}
      for(let k=0;k<5;k++){const px=W*(.25+r()*.7),py=H*(.1+r()*.8),rx=(40+r()*40)*SC,ry=rx*.6;if(!free(px,py,rx))continue;blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P)+2,Math.round(ry/P)+2,'#0e0f1d');blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P),Math.round(ry/P),'#05050a');for(let q=0;q<6;q++){x.fillStyle='#5d275d';x.fillRect(Math.round(px/P-rx/P*.6+r()*rx/P*1.2),Math.round(py/P-ry/P*.5+r()*ry/P),2,1)}AX.O.push({x:px,y:py,r:rx*.85,k:'pit'})}
      for(let k=0;k<55;k++){const px=r()*W,py=r()*H;if(!free(px,py,20*SC))continue;AX.O.push({x:px,y:py,r:8*SC,k:r()<.55?'grave':'dead',spr:1,block:1})}
      for(let k=0;k<25;k++){const px=r()*W,py=r()*H;if(!free(px,py,10*SC))continue;rock(x,Math.round(px/P),Math.round(py/P)+3,4,['#1f1c2b','#3d3852','#6b6585']);AX.O.push({x:px,y:py,r:7*SC,k:'rock',block:1})}}
  else{const G1=['#e8f0f8','#dfe9f5','#f4f8fc','#d6e2f0'];for(let ty=0;ty<h;ty+=4)for(let tx=0;tx<w;tx+=4){x.fillStyle=G1[Math.floor(r()*4)];x.fillRect(tx,ty,4,4)}
      for(let k=0;k<w*h/40;k++){x.fillStyle=r()<.5?'#c7d4e6':'#ffffff';x.fillRect(Math.floor(r()*w),Math.floor(r()*h),1,1)}
      for(let pth=0;pth<2;pth++){const y0=h*(.3+pth*.4),a=12+r()*16;for(let px=0;px<w;px++){const py=Math.round(y0+Math.sin(px/w*9+pth)*a);x.fillStyle='#b8c8dc';x.fillRect(px,py-3,1,7);if(r()<.3){x.fillStyle='#a3b4cc';x.fillRect(px,py-2+Math.floor(r()*5),1,1)}}}
      for(let k=0;k<5;k++){const px=W*(.25+r()*.7),py=H*(.1+r()*.8),rx=(50+r()*50)*SC,ry=rx*.6;if(!free(px,py,rx))continue;blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P)+2,Math.round(ry/P)+2,'#94b0c2');blob(x,Math.round(px/P),Math.round(py/P),Math.round(rx/P),Math.round(ry/P),'#a8d8f0');blob(x,Math.round(px/P)-3,Math.round(py/P)-2,Math.round(rx/P*.6),Math.round(ry/P*.4),'#c7f0ff');
        for(let q=0;q<8;q++){x.fillStyle='#f4f4f4';const lx=Math.round(px/P-rx/P*.5+r()*rx/P);x.fillRect(lx,Math.round(py/P-ry/P*.3+r()*ry/P*.6),4,1)}AX.O.push({x:px,y:py,r:rx*.85,k:'ice'})}
      for(let k=0;k<65;k++){const px=r()*W,py=r()*H;if(!free(px,py,20*SC))continue;AX.O.push({x:px,y:py,r:9*SC,k:'pineS',spr:1,block:1})}
      for(let k=0;k<25;k++){const px=r()*W,py=r()*H;if(!free(px,py,10*SC))continue;rock(x,Math.round(px/P),Math.round(py/P)+3,4,['#566c86','#8b9bb4','#f4f4f4']);AX.O.push({x:px,y:py,r:7*SC,k:'rock',block:1})}}
  AX.floor=c;
  const m=axPickMon(),p=mkF(m,0,{lvl:m.lvl,mlvl:m.lvl,hpMul:5,scale:1.15,atkMul:1.7});p.x=start.x;p.y=start.y;p.src=m;AX.F.push(p);AX.P=p;AX.E=null;
  AX.SP=[];for(let k=0;k<40&&AX.SP.length<14;k++){const px=W*(.18+r()*.8),py=H*(.08+r()*.84);if(!free(px,py,30*SC)||AX.SP.some(s=>Math.hypot(s.x-px,s.y-py)<160*SC))continue;AX.SP.push({x:px,y:py,t:0})}
  if(AX.mode!=='surv')for(const s of AX.SP)hmGroup(s);
  AX.state='fight';AX.T=1e12;AX.loot={gold:0,xp:0,kills:0,caught:0,stones:0,shiny:0};axCam(true)}
function hmGroup(s){const [a,b,list]=BIOMES[AX.L.b].tiers[AX.L.i],n=2+Math.floor(Math.random()*2);s.g=[];
  for(let k=0;k<n;k++){const id=pickWild(list),lvl=a+Math.floor(Math.random()*(b-a+1)),shiny=Math.random()<SHINY*2;
    const w=mkF({id,shiny},1,{lvl,hpMul:1.6,atkMul:.75,bot:{d:.22,err:.55},scale:1.1});w.x=s.x+(Math.random()-.5)*50*SC;w.y=s.y+(Math.random()-.5)*36*SC;w.home={x:w.x,y:w.y};w.wild=1;w.sp=s;w.spawn=500;w.dir=Math.floor(Math.random()*8);
    s.g.push(w);AX.F.push(w)}}
// ---- comportamento ----
function hmWander(f,dt){const p=AX.P,d=Math.hypot(p.x-f.x,p.y-f.y);if(p.hp>0&&d<120*SC){for(const o of f.sp.g)o.aggro=true;return}
  f.wt=(f.wt||0)-dt;if(f.wt<=0){f.wt=1500+Math.random()*2500;f.goal=Math.random()<.6?{x:f.home.x+(Math.random()-.5)*70*SC,y:f.home.y+(Math.random()-.5)*50*SC}:null}
  const c=f.ctrl;c.x=c.y=0;if(f.goal){const dx=f.goal.x-f.x,dy=f.goal.y-f.y,l=Math.hypot(dx,dy);if(l>6*SC){c.x=dx/l*.45;c.y=dy/l*.45}else f.goal=null}}
function hmStep(dt){const A=AX,p=A.P;
  if(p.hp>0&&A.time-(p.lastHit||0)>4000&&p.hp<p.max){p.hp=Math.min(p.max,p.hp+p.max*.03*dt/1000)}
  for(const f of A.F){if(!f.wild)continue;
    if(f.hp<=0){f.corpse=(f.corpse??9000)-dt;continue}
    if(f.aggro&&(Math.hypot(p.x-f.x,p.y-f.y)>380*SC||p.hp<=0)){f.aggro=false;f.goal={x:f.home.x,y:f.home.y};f.hp=f.max;f.st=null}}
  A.F=A.F.filter(f=>!(f.wild&&f.hp<=0&&f.corpse<=0&&!f.ball));
  for(const s of A.SP){if(s.g.some(w=>A.F.includes(w)))continue;s.t+=dt;if(s.t>15000&&Math.hypot(p.x-s.x,p.y-s.y)>300*SC){s.t=0;hmGroup(s)}}
  if(INP.ball){INP.ball=false;hmThrow()}
  if(p.hp<=0&&!A.dead){A.dead=true;later(1300,()=>axExit(hmSummary('Seu Pokémon desmaiou.')))}}
function hmCorpseNear(){const p=AX.P;let b=null,bd=70*SC;for(const f of AX.F){if(!f.wild||f.hp>0||f.ball||f.caught)continue;const d=Math.hypot(f.x-p.x,f.y-p.y);if(d<bd){bd=d;b=f}}return b}
const hmBall=()=>G.balls.ultra>0?'ultra':G.balls.great>0?'great':G.balls.poke>0?'poke':null;
function hmThrow(){const t=hmCorpseNear(),k=hmBall();if(!t)return;if(!k)return toast('Sem bolas. Compre na Loja');G.balls[k]--;t.ball=k;const p=AX.P;
  const s={x:p.x,y:fHead(p)+10*SC,tx:t.x,ty:t.y-6*SC,t:0};snd('move');AX.FX.push({k:'ballf',x:s.x,y:s.y,tx:s.tx,ty:s.ty,col:FXC.normal,t:0,dur:420,ball:k});
  later(420,()=>{burst(t.x,t.y-6*SC,'#f4f4f4',12,.12);snd('shake')});
  later(1300,()=>{const pr=Math.min(.95,CATCH[AX.L.i]*BALLS[k].m*(LEGEND.has(t.id)?.25:1)*1.15);
    if(Math.random()<pr){t.caught=1;t.corpse=0;t.ball=null;const q=+(0.9+Math.random()*.2).toFixed(2);addCapture(t.id,t.lvl,t.shiny,q);AX.loot.caught++;snd('catch');burst(t.x,t.y-6*SC,'#ffcd75',24,.18);nums.push({x:t.x,y:t.y-30*SC,v:'Capturado!',kind:'se',age:0})}
    else{t.ball=null;t.corpse=Math.max(t.corpse||0,3000);nums.push({x:t.x,y:t.y-30*SC,v:'Escapou',kind:'nv',age:0});snd('fail')}dirty=true})}
// loot de cada abate: x2 enquanto houver energia
function hmKill(t){const A=AX,L=t.lvl,ti=A.L.i,st=hmStam(),bonus=st>0?2:1;if(st>0)G.hm.st--;
  const xp=Math.floor((40+ti*25)*L/5*dexXp())*bonus,gold=Math.floor(L*1.5*bonus*amuM('gold'));G.gold+=gold;G.kills++;track('kill',S[t.id].t);track('gold',gold);
  const m=A.P.src;if(m)gainXp(m,capXp(m,xp,lvlCap(A.L.b,ti)));A.loot.gold+=gold;A.loot.xp+=xp;A.loot.kills++;if(t.shiny)A.loot.shiny++;
  nums.push({x:t.x,y:fHead(t)-14*SC,v:`+${gold} ouro`,kind:'se',age:0});
  if(mobStone(t.id,false,bonus>1?.1:.05))A.loot.stones++;
  for(const o of t.sp.g)if(o.hp>0)o.aggro=true;dirty=true}
function hmSummary(head){const l=AX.loot;return `${head} Caça na mão: ${l.kills} derrotados, +${l.gold.toLocaleString('pt-BR')} de ouro, +${l.xp.toLocaleString('pt-BR')} XP${l.caught?`, ${l.caught} capturados`:''}${l.stones?`, ${l.stones} pedras`:''}`}
// ---- tela ----
function hmHud(){const A=AX,l=A.loot,w=Math.min(170,VW*.42);axCard(A.P,6,6,w,false);const st=hmStam();
  const bx=VW-132,by=6;ctx.fillStyle='#0e0f1d';ctx.fillRect(bx-2,by-2,130,98);ctx.fillStyle='#29366f';ctx.fillRect(bx,by,126,94);ctx.font='400 13px "Pixelify Sans",monospace';ctx.textAlign='left';
  ctx.fillStyle='#ffcd75';ctx.fillText(`Ouro +${l.gold.toLocaleString('pt-BR')}`,bx+6,by+16);ctx.fillStyle='#c7f6ff';ctx.fillText(`XP +${l.xp.toLocaleString('pt-BR')}`,bx+6,by+32);ctx.fillStyle='#f4f4f4';ctx.fillText(`${l.kills} abates, ${l.caught} pegos`,bx+6,by+48);
  ctx.fillStyle=st>0?'#a7f070':'#94b0c2';ctx.fillText(st>0?`Energia ${st} (x2)`:'Sem energia (x1)',bx+6,by+64);ctx.fillStyle='#0e0f1d';ctx.fillRect(bx+6,by+69,114,5);ctx.fillStyle='#a7f070';ctx.fillRect(bx+6,by+69,114*st/HM_MAX,5);
  ctx.fillStyle='#c7d4e6';ctx.fillText(`Bolas ${G.balls.ultra}U ${G.balls.great}G ${G.balls.poke}P`,bx+6,by+88);
  // minimapa
  const mw=126,mh=Math.round(mw*A.A.H/A.A.W),mx=bx,my=by+102;ctx.fillStyle='#0e0f1d';ctx.fillRect(mx-2,my-2,mw+4,mh+4);ctx.drawImage(A.floor,0,0,A.floor.width,A.floor.height,mx,my,mw,mh);
  const sx=mw/A.A.W,sy=mh/A.A.H;for(const f of A.F){if(f.hp<=0&&!f.wild)continue;ctx.fillStyle=f===A.P?'#73eff7':f.hp<=0?'#94b0c2':f.shiny?'#ffcd75':f.aggro?'#ef7d57':'#b13e53';ctx.fillRect(Math.round(mx+f.x*sx)-1,Math.round(my+f.y*sy)-1,f===A.P?4:3,f===A.P?4:3)}
  ctx.strokeStyle='#f4f4f4';ctx.lineWidth=1;ctx.strokeRect(mx+A.camX*sx,my+A.camY*sy,VW*sx,VH*sy);
  ctx.textAlign='center';ctx.font='700 13px "Pixelify Sans",monospace';ctx.fillStyle='#f4f4f4';ctx.fillText(`${BIOMES[A.L.b].n}, faixa ${A.L.i+1}`,VW/2,56)}
function hmDrawObs(o){const im=hmTreeSpr(o.k);ctx.drawImage(im,0,0,44,50,Math.round(o.x-22*AXPX*.8),Math.round(o.y-47*AXPX*.8),44*AXPX*.8,50*AXPX*.8)}

// ===================== SOBREVIVÊNCIA (estilo survivor) =====================
// 10 minutos de hordas. O Pokémon ataca sozinho; você anda, esquiva e escolhe melhorias.
const SV_T=600000;
const SV_UP={dmg:['Força','+20% de dano'],cd:['Pressa','-12% de recarga'],multi:['Rajada','+1 tiro no ataque básico'],area:['Alcance','+20% de área'],hp:['Vigor','+20% de vida máxima e cura'],
  regen:['Regeneração','+0,8% de vida por segundo'],magnet:['Ímã','+50% de alcance para pegar XP'],speed:['Agilidade','+10% de velocidade'],orbit:['Esferas','+1 esfera girando em volta'],
  nova:['Pulso','explosão em volta a cada 3 s'],steal:['Vampiro','+3% de roubo de vida'],ally:['Parceiro','um Pokémon do time luta junto']};
const SV_MAX={ally:2,orbit:5,nova:5};
let sndT=0;
function survInit(){const A=AX;A.sv={t:0,kills:0,lvl:1,xp:0,need:19,up:{},gems:[],spawnT:0,eliteT:60000,boss:[300000,SV_T],orbA:0,novaT:3000,shiny:0,stones:0,won:false,caught:0};
  A.P.hpMul=6;axStats(A.P,true);A.P.atkMul=1.5;axStats(A.P,true);A.T=1e12;A.state='intro';A.st=1600;
  A.pool=[...new Set(BIOMES[A.L.b].tiers.flatMap(t=>t[2]))].filter(id=>!LEGEND.has(id)&&META[id]&&!META[id].alias)}
const svL=()=>Math.round(5+AX.sv.t/60000*7);
function survMob(id,lvl,x,y,o={}){const c=calc({id,lvl,q:1}),hp=Math.round(c.hp*(o.hp||.7));
  const f={id,base:id,shiny:Math.random()<SHINY*3,team:1,x,y,dir:6,ang:0,anim:'Walk',t:Math.random()*500,once:false,scale:o.scale||1,vx:0,vy:0,
    max:hp,hp,atk:c.atk*(o.atk||.8),def:c.def,spe:c.spe,lvl,types:S[id].t,cd:{atk:0},ctrl:{x:0,y:0},swarm:1,elite:!!o.elite,u:'s'+Math.random().toString(36).slice(2),st:null,ifr:0,xpv:o.xp||1};
  AX.F.push(f);return f}
function survSpawn(n){const A=AX,p=A.P;for(let i=0;i<n;i++){if(A.F.length>230)return;const a=Math.random()*6.283,R=Math.hypot(VW,VH)*.62;
  const x=clamp(p.x+Math.cos(a)*R,10*SC,A.A.W-10*SC),y=clamp(p.y+Math.sin(a)*R*.85,10*SC,A.A.H-10*SC);survMob(A.pool[Math.floor(Math.random()*A.pool.length)],svL()+Math.floor(Math.random()*3),x,y)}}
function survChase(f,dt){const p=AX.P,dx=p.x-f.x,dy=p.y-f.y,d=Math.hypot(dx,dy)||1;f.ctrl.x=dx/d*(f.elite?.8:.7);f.ctrl.y=dy/d*(f.elite?.8:.7);
  if(d<(12+4*f.scale)*SC&&f.cd.atk<=0&&p.hp>0&&!(p.hitCd>AX.time)){f.cd.atk=850;p.hitCd=AX.time+280;axHit(f,p,f.types[0],40,{})}}
function survBoss(final){const A=AX,leg=[...LEGEND].filter(id=>S[id]&&META[id]&&!META[id].alias);let id=leg[Math.floor(Math.random()*leg.length)];
  if(final&&MEGAS[id]){const fs=MEGAS[id].filter(f=>!META[f].alias);if(fs.length)id=fs[0]}
  const e=mkF({id},1,{lvl:svL()+(final?12:6),boss:1,hpMul:final?40:22,atkMul:1.1,scale:2,bot:{d:.6,err:.2}});const a=Math.random()*6.28;e.x=clamp(A.P.x+Math.cos(a)*200*SC,30*SC,A.A.W-30*SC);e.y=clamp(A.P.y+Math.sin(a)*150*SC,30*SC,A.A.H-30*SC);
  e.phase=1;e.pt=1500;e.rift=final?2:1;e.spawn=900;A.F.push(e);A.E=e;snd('boss');shake=500;
  A.banner={title:'Lendário da fenda: '+S[e.id].n,sub:final?'Vença para completar a sobrevivência':'Vença para ganhar uma pedra mega',t:3500}}
function survKill(t){const A=AX,sv=A.sv;sv.kills++;G.kills++;t.dieT=350;
  if(t.boss){const sp=S[t.id].mega||t.id,fs=MEGAS[sp];const f=fs?fs[Math.floor(Math.random()*fs.length)]:null;if(f){addStone(f);sv.stones++;A.banner={title:'Pedra mega!',sub:stoneN(f),t:3000}}
    burst(t.x,fHead(t)+10*SC,'#ffcd75',40,.22);shake=600;crater(t.x,t.y,26*SC);for(let i=0;i<12;i++)sv.gems.push({x:t.x+(Math.random()-.5)*60*SC,y:t.y+(Math.random()-.5)*40*SC,v:5});
    if(t.rift===2){riftKeys();G.rift.k++;sv.won=true;A.state='roundEnd';A.st=2600;A.rw=0;A.next='end'}A.E=null;return}
  burst(t.x,fHead(t)+10*SC,(FXC[t.types[0]]||FXC.normal)[1],t.elite?18:5,.1);
  sv.gems.push({x:t.x,y:t.y,v:t.xpv});if(t.elite&&Math.random()<.15){riftKeys();G.rift.k++;A.banner={title:'Chave da Fenda!',sub:'Use na aba Arena',t:2500}}
  if(t.elite){A.P.hp=Math.min(A.P.max,A.P.hp+A.P.max*.25);nums.push({x:A.P.x,y:fHead(A.P),v:'+vida',kind:'heal',age:0})}
  if(t.shiny){addCapture(t.id,t.lvl,true,1);sv.shiny++;A.banner={title:'Shiny capturado!',sub:S[t.id].n,t:2500};snd('catch')}
  if(sv.kills%25===0)track('kill',t.types)}
function survStep(dt){const A=AX,sv=A.sv,p=A.P;if(A.state!=='fight')return;sv.t+=dt;
  // ondas: começa com poucos e chega a centenas
  const m=sv.t/60000,rate=2+m*1.4;sv.spawnT-=dt;if(sv.spawnT<=0){sv.spawnT=1000/rate;survSpawn(2+Math.floor(m/2))}
  if(Math.floor((sv.t-dt)/45000)!==Math.floor(sv.t/45000)){const a=Math.random()*6.28;for(let i=0;i<14+m*4;i++){const b=a+(i/14)*.9;const x=clamp(p.x+Math.cos(b)*VW*.7,10,A.A.W-10),y=clamp(p.y+Math.sin(b)*VH*.6,10,A.A.H-10);survMob(A.pool[Math.floor(Math.random()*A.pool.length)],svL(),x,y)}A.banner={title:'Horda!',sub:'Um grupo grande está vindo',t:1800}}
  sv.eliteT-=dt;if(sv.eliteT<=0){sv.eliteT=60000;const a=Math.random()*6.28;survMob(A.pool[Math.floor(Math.random()*A.pool.length)],svL()+5,clamp(p.x+Math.cos(a)*VW*.6,10,A.A.W-10),clamp(p.y+Math.sin(a)*VH*.5,10,A.A.H-10),{elite:1,hp:9,atk:1.1,scale:1.6,xp:8})}
  if(sv.boss.length&&sv.t>=sv.boss[0]&&!A.E){const fin=sv.boss.length===1;sv.boss.shift();survBoss(fin)}
  if(sv.t>=SV_T&&!sv.boss.length&&!A.E&&!sv.won){sv.won=true;A.state='roundEnd';A.st=2600;A.rw=0;A.next='end'}
  // ataque automático
  if(p.hp>0&&p.anim!=='Atk'){const t=nearestFoe(p),d=t?Math.hypot(t.x-p.x,t.y-p.y):1e9;const melee=!RANGED.has(p.types[0]);
    if(t&&p.hab&&p.cd.hab<=0&&d<(MV[p.hab][2]==='melee'?60:220)*SC)axMove(p,'hab');else if(t&&p.q&&p.cd.q<=0&&d<(MV[p.q][2]==='melee'?60:220)*SC)axMove(p,'q');
    else if(t&&d<(melee?50:210)*SC)axBasic(p);if(p.ult>=100&&A.F.filter(f=>f.team===1&&f.hp>0&&Math.hypot(f.x-p.x,f.y-p.y)<160*SC).length>=12)axUlt(p)}
  const up=sv.up;
  if(up.regen&&p.hp>0)p.hp=Math.min(p.max,p.hp+p.max*.008*up.regen*dt/1000);
  // esferas
  if(up.orbit){sv.orbA+=dt*.004;const n=up.orbit,R=(34+up.orbit*3)*SC*(1+.2*(up.area||0));for(let i=0;i<n;i++){const a=sv.orbA+i/n*6.283,ox=p.x+Math.cos(a)*R,oy=p.y+Math.sin(a)*R*.8;
    for(const f of A.F){if(f.team===0||f.hp<=0)continue;if(Math.abs(f.x-ox)<14*SC&&Math.abs(f.y-oy)<14*SC&&!(f.orbT>A.time)){f.orbT=A.time+450;axHit(p,f,p.types[0],22,{})}}}}
  // pulso
  if(up.nova){sv.novaT-=dt;if(sv.novaT<=0){sv.novaT=3000;const R=(55+up.nova*10)*SC*(1+.2*(up.area||0));AX.FX.push({k:'ring',x:p.x,y:p.y,r:R,col:FXC[p.types[0]]||FXC.normal,t:0,dur:380});
    for(const f of A.F)if(f.team===1&&f.hp>0&&Math.hypot(f.x-p.x,(f.y-p.y)*1.2)<=R)axHit(p,f,p.types[0],26+up.nova*8,{})}}
  // XP
  const mag=(80*SC)*(1+.5*(up.magnet||0));for(const g of sv.gems){const d=Math.hypot(g.x-p.x,g.y-p.y);if(d<mag||g.pull){g.pull=1;const s=Math.min(1,dt*.012);g.x+=(p.x-g.x)*s;g.y+=(p.y-g.y)*s}if(d<10*SC){g.got=1;sv.xp+=g.v}}
  sv.gems=sv.gems.filter(g=>!g.got);if(sv.gems.length>400)sv.gems.splice(0,sv.gems.length-400);
  if(sv.xp>=sv.need){sv.xp-=sv.need;sv.lvl++;sv.need=Math.round(12+sv.lvl*sv.lvl*1.2+sv.lvl*6);survPick()}
  for(const f of A.F)if(f.swarm&&f.hp<=0)f.dieT-=dt;A.F=A.F.filter(f=>!(f.swarm&&f.hp<=0&&f.dieT<=0));
  if(p.hp<=0&&!A.dead){A.dead=true;later(1500,()=>survEnd(false))}
  if(A.banner){A.banner.t-=dt;if(A.banner.t<=0)A.banner=null}}
function survPick(){const A=AX,up=A.sv.up,keys=Object.keys(SV_UP).filter(k=>(up[k]||0)<(SV_MAX[k]||5)&&(k!=='ally'||G.team.length+G.depot.length>1));
  const ch=[];while(ch.length<3&&keys.length){ch.push(keys.splice(Math.floor(Math.random()*keys.length),1)[0])}if(!ch.length)return;
  A.state='pick';snd('lvl');const box=$('svPick');box.style.display='grid';
  box.innerHTML=`<div class="svh">Nível ${A.sv.lvl}! Escolha uma melhoria</div>`+ch.map(k=>`<button class="btn svc" data-svup="${k}"><b>${SV_UP[k][0]} ${(up[k]||0)+1}</b><span>${SV_UP[k][1]}</span></button>`).join('')}
function survChoose(k){const A=AX;if(!A||A.state!=='pick')return;const up=A.sv.up,p=A.P;up[k]=(up[k]||0)+1;
  if(k==='hp'){const r=p.hp/p.max;p.hpMul*=1.2;axStats(p,false);p.hp=Math.min(p.max,p.hp+p.max*.3)}
  if(k==='speed')p.spe*=1.1;
  if(k==='ally'){const all=[...G.team,...G.depot].filter(m=>m.u!==(p.src&&p.src.u)).sort((a,b)=>b.lvl-a.lvl);const m=all[up.ally-1];if(m){const a=mkF(m,0,{lvl:m.lvl,mlvl:m.lvl,hpMul:5,atkMul:1.3,bot:{d:.7,err:.2},scale:1.1});a.x=p.x+20*SC;a.y=p.y;a.ally=1;A.F.push(a)}}
  $('svPick').style.display='none';A.state='fight';dirty=true}
function survEnd(won){const A=AX,sv=A.sv,mins=sv.t/60000,m=A.P.src;
  const gold=Math.round((sv.kills*6+mins*150+(won?2500:0))*amuM('gold')),xp=Math.round(sv.kills*(A.P.lvl||10)*.35*(won?1.5:1));G.gold+=gold;if(m)gainXp(m,xp);
  G.surv=G.surv||{best:0,wins:0};const tm=Math.min(SV_T,sv.t);G.surv.best=Math.max(G.surv.best||0,tm);if(won)G.surv.wins=(G.surv.wins||0)+1;
  const s=Math.floor(tm/1000);axExit(`${won?'Sobreviveu!':'Fim da sobrevivência.'} ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}, ${sv.kills} derrotados, +${gold.toLocaleString('pt-BR')} de ouro, +${xp.toLocaleString('pt-BR')} XP${sv.stones?`, ${sv.stones} pedra mega`:''}${sv.shiny?`, ${sv.shiny} shiny`:''}`)}
function survDraw(){const A=AX,sv=A.sv,p=A.P,now=performance.now();
  for(const g of sv.gems){const z=Math.round((g.v>=5?4:g.v>1?3:2.2)*SC),c=g.v>=5?'#ef7d57':g.v>1?'#73eff7':'#a7f070',y=g.y-3*SC+Math.sin(now/200+g.x)*1.5;ctx.fillStyle='#0e0f1d';ctx.fillRect(g.x-z/2-1,y-z-1,z+2,z*2+2);ctx.fillStyle=c;ctx.fillRect(g.x-z/2,y-z,z,z*2);ctx.fillStyle='#f4f4f4';ctx.fillRect(g.x-z/2,y-z,Math.max(1,z/2),Math.max(1,z/2))}
  const up=sv.up;if(up.orbit&&p.hp>0){const n=up.orbit,R=(34+up.orbit*3)*SC*(1+.2*(up.area||0)),c=FXC[p.types[0]]||FXC.normal;for(let i=0;i<n;i++){const a=sv.orbA+i/n*6.283,ox=p.x+Math.cos(a)*R,oy=p.y+Math.sin(a)*R*.8-12*SC;
    ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.6;ctx.drawImage(glowTex(c[1]),ox-12*SC,oy-12*SC,24*SC,24*SC);ctx.restore();ctx.fillStyle=c[0];ctx.fillRect(ox-3*SC,oy-3*SC,6*SC,6*SC)}}}
function survHud(){const A=AX,sv=A.sv,w=Math.min(170,VW*.42);
  ctx.fillStyle='#0e0f1d';ctx.fillRect(0,0,VW,8);ctx.fillStyle='#73eff7';ctx.fillRect(0,1,VW*sv.xp/sv.need,6);
  axCard(A.P,6,12,w,false);const s=Math.floor(Math.min(SV_T,sv.t)/1000);ctx.textAlign='center';ctx.font=`700 ${Math.round(Math.min(26,VW/15))}px "Pixelify Sans",monospace`;ctx.lineWidth=4;ctx.strokeStyle='#0e0f1d';
  const tt=`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;ctx.strokeText(tt,VW/2,74);ctx.fillStyle='#f4f4f4';ctx.fillText(tt,VW/2,74);
  ctx.font='700 13px "Pixelify Sans",monospace';ctx.textAlign='right';ctx.fillStyle='#ffcd75';ctx.strokeText(`Nv ${sv.lvl}  ${sv.kills} derrotados`,VW-8,24);ctx.fillText(`Nv ${sv.lvl}  ${sv.kills} derrotados`,VW-8,24);
  let ix=VW-8;ctx.font='400 11px "Pixelify Sans",monospace';for(const k in sv.up){const t=SV_UP[k][0].slice(0,3)+sv.up[k];const tw=ctx.measureText(t).width+8;ix-=tw;ctx.fillStyle='#29366f';ctx.fillRect(ix,30,tw-2,13);ctx.fillStyle='#f4f4f4';ctx.textAlign='left';ctx.fillText(t,ix+3,40)}
  if(A.E&&A.E.hp>0){const f=A.E,bw=VW*.7,bx=VW*.15;ctx.fillStyle='#0e0f1d';ctx.fillRect(bx-2,84,bw+4,14);ctx.fillStyle='#5d275d';ctx.fillRect(bx,86,bw,10);ctx.fillStyle='#b13e53';ctx.fillRect(bx,86,bw*f.hp/f.max,10);ctx.textAlign='center';ctx.fillStyle='#ffcd75';ctx.fillText(S[f.id].n,VW/2,110)}
  if(A.banner){const b=A.banner,a=Math.min(1,b.t/300),y=VH*.2;ctx.globalAlpha=a;ctx.fillStyle='#0e0f1d';ctx.fillRect(VW*.08-3,y-3,VW*.84+6,52);ctx.fillStyle='#29366f';ctx.fillRect(VW*.08,y,VW*.84,46);ctx.fillStyle='#ffcd75';ctx.fillRect(VW*.08,y,VW*.84,3);
    ctx.textAlign='center';ctx.font=`700 ${Math.round(Math.min(18,VW/20))}px "Pixelify Sans",monospace`;ctx.fillStyle='#f4f4f4';ctx.fillText(b.title,VW/2,y+20);ctx.font='700 13px "Pixelify Sans",monospace';ctx.fillStyle='#ffcd75';ctx.fillText(b.sub,VW/2,y+37);ctx.globalAlpha=1}
  if(A.state==='intro'){ctx.font=`700 ${Math.round(Math.min(30,VW/12))}px "Pixelify Sans",monospace`;ctx.textAlign='center';ctx.lineWidth=6;ctx.strokeStyle='#0e0f1d';const t='Sobreviva 10 minutos!';ctx.strokeText(t,VW/2,VH*.42);ctx.fillStyle='#ffcd75';ctx.fillText(t,VW/2,VH*.42)}}

// ===================== FENDA =====================
// Um lendário forte (em forma mega quando tem) que muda a cada 4 horas. Entrar gasta 1 chave.
const RIFT_REG=4*3600e3,RIFT_MAX=3;
function riftKeys(){const now=Date.now();G.rift=G.rift||{k:1,t:now,wins:0};const n=Math.floor((now-G.rift.t)/RIFT_REG);if(n>0){G.rift.k=Math.min(RIFT_MAX,G.rift.k+n);G.rift.t+=n*RIFT_REG}if(G.rift.k>=RIFT_MAX)G.rift.t=now;return G.rift.k}
function riftPool(){const megas=Object.keys(MEGA).map(Number).filter(f=>LEGEND.has(MEGA[f][0])&&S[f]&&!META[f].alias);const bases=[...LEGEND].filter(id=>S[id]&&META[id]&&!META[id].alias&&!megas.some(f=>MEGA[f][0]===id));return [...megas,...bases]}
function riftNow(){const P=riftPool();return P[Math.floor(Date.now()/RIFT_REG)%P.length]}
function riftBoss(m){const R=AX.L.R,lvl=Math.max(40,m.lvl+8),A=AX.A;const e=mkF({id:R},1,{lvl,boss:1,hpMul:48,atkMul:1.2,scale:2.3,bot:{d:.75,err:.15}});
  e.x=A.cx+A.rx*.45;e.y=A.cy;e.dir=6;e.phase=1;e.pt=1500;return e}
function riftTint(c){const x=c.getContext('2d'),im=x.getImageData(0,0,c.width,c.height),d=im.data;
  for(let i=0;i<d.length;i+=4){const l=(d[i]+d[i+1]+d[i+2])/3;d[i]=l*.55+22;d[i+1]=l*.33+8;d[i+2]=l*.8+40}x.putImageData(im,0,0);
  const A=AX.A,cx=A.cx/AXPX,cy=A.cy/AXPX;for(let k=0;k<26;k++){let px=cx+(Math.random()-.5)*A.rx/AXPX*1.6,py=cy+(Math.random()-.5)*A.ry/AXPX*1.6;
    for(let q=0;q<18;q++){px+=Math.round(Math.random()*2-1);py+=Math.round(Math.random()*2-1)+(q%3?0:1);x.fillStyle='#0e0a18';x.fillRect(px,py,2,1);x.fillStyle=Math.random()<.5?'#b8a0ff':'#73eff7';x.fillRect(px,py,1,1)}}}
function riftEnd(won){const R=AX.L.R,base=S[R].mega||R,lvl=AX.E?AX.E.lvl:50;let msg;
  if(won){G.rift.wins=(G.rift.wins||0)+1;const gold=4000+lvl*80;G.gold+=gold;G.items.rare+=3;msg=`Fenda vencida! +${gold.toLocaleString('pt-BR')} de ouro, 3 Doces raros`;
    if(MEGA[R]){addStone(R);msg+=`, ${stoneN(R)}`}else{const all=Object.keys(MEGA).map(Number);for(let i=0;i<2;i++){const f=all[Math.floor(Math.random()*all.length)];addStone(f);msg+=`, ${stoneN(f)}`}}
    if(Math.random()<.2){const sh=Math.random()<1/30;addCapture(base,lvl,sh,1);msg+=`. ${sh?'SHINY ':''}${S[base].n} se juntou a você!`}}
  else{G.gold+=500;msg='A Fenda venceu. +500 de ouro por tentar'}
  axExit(msg)}
function riftShowResult(){}
function riftPanel(){const k=riftKeys(),R=riftNow(),left=k>=RIFT_MAX?0:RIFT_REG-(Date.now()-G.rift.t),hh=Math.floor(left/3600e3),mm=Math.floor(left%3600e3/60000);
  return `<div class="arow win rift"><img src="${portrait(R)}" alt=""><div style="min-width:0"><div class="row"><span class="nm">${S[R].n}</span><span class="lv">Chaves ${k}/${RIFT_MAX}</span></div>
   <div class="sub">Lendário da fenda, muda a cada 4 horas. Prêmio: ${MEGA[R]?stoneN(R):'2 pedras mega'}, 3 Doces raros, muito ouro e 20% de chance de ficar com o lendário.${k<RIFT_MAX?` Próxima chave em ${hh}h${String(mm).padStart(2,'0')}.`:''} Chaves também caem na Sobrevivência.</div></div>
   <button class="btn y" data-rift="1" ${k<1?'disabled':''}>Entrar</button></div>`}

// ===================== ABA JOGAR: subabas de modos =====================
const MODES=[['mapa','Auto'],['mao','Na mão'],['surv','Survival'],['arena','Arena'],['fenda','Fenda']];
const MODE_KEYS=new Set(MODES.map(m=>m[0]));
function modeNav(cur){return `<div class="subnav" role="tablist">${MODES.map(([k,n])=>`<button class="sn${k===cur?' on':''}" role="tab" aria-selected="${k===cur}" data-mode="${k}">${n}</button>`).join('')}</div>`}
function maoPanel(){const st=hmStam();let h=`<div class="intro win"><b>Caça na mão</b><p>Você anda e luta num mapa aberto. Enquanto tiver energia, ganha <b>o dobro</b> de ouro, XP e pedras mega.</p>
  <div class="bar" style="margin-top:6px"><i style="width:${100*st/HM_MAX}%;background:#a7f070"></i></div><span class="sub">Energia ${st}/${HM_MAX}. Volta 1 a cada 3 minutos.</span></div>`;
  for(const k of ['floresta','vulcao','caverna','lago']){if(!BIOMES[k])continue;h+=`<h3>${BIOMES[k].n}${k==='lago'?' (neve)':''}</h3>`;
    BIOMES[k].tiers.forEach((t,i)=>{const op=tierOpen(k,i);h+=`<div class="mcard win ${op?'':'lock'}"><div style="min-width:0"><div class="row"><span class="nm">Faixa ${i+1}</span><span class="lv">Nv ${t[0]} a ${t[1]}</span></div>
      <div class="who">${t[2].slice(0,10).map(id=>`<img src="${portrait(id)}" class="${G.dex[id]?'':'no'}" alt="${S[id].n}">`).join('')}</div></div>
      ${op?`<button class="btn y" data-hm="${k}|${i}">Caçar</button>`:`<span class="sub">Nv ${t[0]-2}</span>`}</div>`})}
  return h}
function survPanel(){const b=G.surv&&G.surv.best?Math.floor(G.surv.best/1000):0;
  let h=`<div class="intro win"><b>Sobrevivência</b><p>10 minutos de hordas. Seu Pokémon ataca sozinho; você anda, esquiva e escolhe melhorias a cada nível. Lendários da fenda aos 5 e aos 10 minutos.</p>
  <span class="sub">${b?`Recorde ${Math.floor(b/60)}:${String(b%60).padStart(2,'0')}. `:''}${G.surv&&G.surv.wins?`${G.surv.wins} vitórias. `:''}Inimigos grandes podem soltar chave da Fenda.</span></div><h3>Mapas</h3>`;
  for(const [k,n,pool,d] of [['floresta','Floresta','floresta','Grama, lagos e árvores'],['vulcao','Vulcão','vulcao','Lava, brasas e colunas de pedra'],['caverna','Caverna assombrada','caverna','Túmulos, buracos e fantasmas'],['neve','Neve','lago','Pinheiros e lagos congelados']]){
    const ids=[...new Set(BIOMES[pool].tiers.flatMap(t=>t[2]))].filter(id=>!LEGEND.has(id)).slice(0,8);
    h+=`<div class="mcard win sv-${k}"><div style="min-width:0"><div class="row"><span class="nm">${n}</span></div><div class="sub">${d}</div><div class="who">${ids.map(id=>`<img src="${portrait(id)}" alt="">`).join('')}</div></div><button class="btn y" data-surv="${k}">Jogar</button></div>`}
  return h}
function fendaPanel(){return riftPanel()+`<p class="note" style="margin-top:8px">O lendário da Fenda é o desafio mais difícil do jogo. Ele tem 3 fases, ataques que cobrem a arena e chama ajudantes. Leve seu Pokémon mais forte.</p>`}

// ===== HUD =====
function hpCol(r){return r<.25?'var(--hp-low)':r<.5?'var(--hp-mid)':'var(--hp)'}
function setPic(img,id,sh){const k=id+'|'+sh;if(img.dataset.k!==k){img.dataset.k=k;img.onerror=sh?()=>{img.onerror=null;img.src=portrait(id,false)}:null;img.src=portrait(id,sh)}}
function renderMoves(){const a=G.team[G.active],el=$('moves');if(!a){el.innerHTML='';return}const ms=movesOf(a),nx=nextMoves(a);
  let h=ms.map(k=>{const [n,t,kind]=MV[k];return `<button class="mv win" data-mv="${k}"><span class="ty" style="background:${TYPE_COLOR[t]}"></span>${n}<small>${KIND_PT[kind]}</small><span class="cdv" data-cdv="${k}"></span><span class="s" data-cds="${k}"></span></button>`}).join('');
  for(let i=0;ms.length+i<4&&nx[i];i++){const [k,l]=nx[i];h+=`<button class="mv win" disabled><span class="ty" style="background:${TYPE_COLOR[MV[k][1]]}"></span>${MV[k][0]}<small>Nv ${l}</small></button>`}
  el.innerHTML=h}
function castManual(k){if(!me||meDeadT>0)return;const a=active();if(!a)return;if(cdOf(me.u,k)>0){toast('Ainda recarregando');return}
  if(MODE==='arena')return arenaCast(k);
  if(MV[k][2]==='heal'&&a.hp>=calc(a).hp){toast('HP cheio');return}
  if(needRange(k)>0&&!me.target){toast('Sem alvo por perto');return}
  me.pending=k}
function hud(){
  {const n=claimable(),b=$('qbadge');b.style.display=n?'block':'none';b.textContent=n;
   const c=$('coach'),on=G.tut>=1&&G.tut<=3&&G.team.length;c.style.display=on?'flex':'none';$('feed').style.visibility=on?'hidden':'visible';if(on)$('coachTxt').textContent=TUT[G.tut];
   document.querySelector('[data-tab="jogar"]').classList.toggle('pulse',G.tut===3)}
  $('gold').textContent=Math.floor(G.gold).toLocaleString('pt-BR');
  $('balls').textContent=G.balls[G.auto.ball];const bi=icon(BALLS[G.auto.ball].f);if($('icBall').dataset.s!==bi){$('icBall').dataset.s=bi;$('icBall').src=bi}
  if(MODE==='arena')$('area').innerHTML=arenaTitle();else{const bp=G.boss[bossKey()]||0,bt=wilds.some(w=>w.boss)?'Chefe em campo':`Chefe em ${Math.max(0,BOSS_N-bp)}`;$('area').innerHTML=`${BIOMES[G.biome].n}<small>Faixa ${G.tier+1}, Nv ${BIOMES[G.biome].tiers[G.tier][0]} a ${BIOMES[G.biome].tiers[G.tier][1]}. ${bt}</small>`}
  const a=G.team[G.active];
  megaHud(a);spHud(a);
  if(a){const c=calc(a),r=a.hp/c.hp;setPic($('aPic'),a.mega||a.id,a.shiny);$('aName').innerHTML=(a.shiny?'★ ':'')+S[a.mega||a.id].n+(a.b?` <span class="boost">+${a.b}</span>`:'');$('aLv').textContent='Nv '+a.lvl;
    $('aHp').style.width=(r*100)+'%';$('aHp').style.background=hpCol(r);$('aXp').style.width=(100*a.xp/need(a.lvl))+'%';$('aHpT').textContent=Math.ceil(a.hp)+'/'+c.hp}
  if(dirty){renderMoves()}
  document.querySelectorAll('[data-cdv]').forEach(e=>{const k=e.dataset.cdv,c=cdOf(meU,k),tot=MV[k][4]*1000;e.style.height=(c>0?Math.min(100,100*c/tot):0)+'%';const s=e.nextElementSibling;s.textContent=c>0?Math.ceil(c/1000/G.speed)+'s':'';e.parentNode.classList.toggle('on',!!(me&&me.pending===k))});
  if(dirty){dirty=false;$('team').innerHTML=G.team.map((m,i)=>i===G.active?'':`<button class="mini ${m.hp<=0?'ko':''}" data-sw="${i}" aria-label="Trocar para ${S[m.id].n}"><img src="${portrait(m.id,m.shiny)}" alt=""><div class="bar"><i style="width:${100*m.hp/calc(m).hp}%;background:${hpCol(m.hp/calc(m).hp)}"></i></div></button>`).join('');save();if(openTab)sheetDirty=true}
  if(openTab&&sheetDirty&&performance.now()-sheetTouch>900&&performance.now()-sheetDrawn>1000){sheetDirty=false;sheetDrawn=performance.now();renderSheet()}
  else G.team.forEach((m,i)=>{const el=document.querySelector(`[data-sw="${i}"] i`);if(el){const r=m.hp/calc(m).hp;el.style.width=(r*100)+'%';el.style.background=hpCol(r)}});
  const t=me&&me.target;
  if(t){$('target').style.display='flex';setPic($('tPic'),t.id,t.shiny);$('tName').textContent=(t.boss?'Chefe ':'')+S[t.id].n;$('tLv').textContent='Nv '+t.lvl;const r=Math.max(0,t.hp/t.max);$('tHp').style.width=(r*100)+'%';$('tHp').style.background=hpCol(r)}else $('target').style.display='none';
  const c=corpses.find(x=>!x.throwing);
  if(c&&!G.auto.throw&&MODE!=='arena'){$('throw').style.display='inline-flex';$('icThrow').src=icon(BALLS[G.auto.ball].f);$('throwTxt').textContent=`${S[c.id].n} ${Math.ceil(c.corpse/1000)}s`;$('throw').disabled=G.balls[G.auto.ball]<=0}else $('throw').style.display='none';
  const ce=$('center');if(center>0){ce.style.display='grid';ce.innerHTML=`<div>Centro Pokémon<small>Voltando em ${Math.ceil(center/1000/G.speed)}s</small></div>`}else ce.style.display='none';
  renderFeed();
}

// ===== painéis =====
let openTab=null,sheetDirty=false,sheetTouch=0,sheetDrawn=0;
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('#sheet'))sheetTouch=performance.now()},true);
const TITLES={missoes:'Missões',mapa:'Jogar',equipe:'Equipe',loja:'Loja',ajustes:'Ajustes',arena:'Jogar',mao:'Jogar',surv:'Jogar',fenda:'Jogar'};
function setTab(t){if(t==='jogar')t=G.mode&&MODE_KEYS.has(G.mode)?G.mode:'mapa';if(t==='mapa')tutStep(3);if(MODE_KEYS.has(t))G.mode=t;openTab=t==='hunt'?null:t;document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t||b.dataset.tab==='jogar'&&MODE_KEYS.has(t)));
  $('sheet').classList.toggle('open',!!openTab);$('scrim').style.display=openTab?'block':'none';if(openTab)renderSheet()}
function monRow(m,i,inTeam){const c=calc(m);return `<div class="mon win"><img src="${portrait(m.id,m.shiny)}" alt="">
  <div style="min-width:0"><div class="row"><span>${m.shiny?'★ ':''}${S[m.id].n}${m.b?` <span class="boost">+${m.b}</span>`:''}</span><span class="lv">Nv ${m.lvl}</span></div>
  <div class="bar" style="margin:4px 0"><i style="width:${100*m.hp/c.hp}%;background:${hpCol(m.hp/c.hp)}"></i></div>
  <div class="sub">${S[m.id].t.join(' / ')}, qualidade ${m.q.toFixed(2)}${(m.b||0)<5?`, fusão ${m.bx||0}/${BNEED[m.b||0]}`:', fusão máxima'}</div><div class="sub" style="margin-top:3px;color:var(--cream)">${movesOf(m).map(k=>MV[k][0]).join(', ')}</div>${megaRow(m)}${(()=>{const n=nextMoves(m)[0];return n?`<div class="sub">Próximo: ${MV[n[0]][0]} no Nv ${n[1]}</div>`:''})()}</div>
  <div class="acts">${inTeam?`${i===G.active?'<span class="sub" style="text-align:center">Em campo</span>':`<button class="btn" data-sw="${i}" ${m.hp<=0?'disabled':''}>Usar</button>`}${G.team.length>1?`<button class="btn" data-dep="${i}">Guardar</button>`:''}${G.items.rare>0&&m.lvl<100?`<button class="btn y" data-rare="${i}">Doce raro</button>`:''}`
  :`<button class="btn" data-up="${i}" ${G.team.length>=5?'disabled':''}>Equipe</button>${mergeTarget(m)?`<button class="btn y" data-merge="${i}">Fundir</button>`:''}<button class="btn" data-sell="${i}">${sellPrice(m)}</button>`}</div></div>`}
const sellPrice=m=>Math.floor(m.lvl*25*m.q*(m.shiny?10:1));
function renderSheet(){
  $('sheetTitle').textContent=TITLES[openTab];const B=$('sheetBody');let h=MODE_KEYS.has(openTab)?modeNav(openTab):'';
  if(openTab==='mao')h+=maoPanel();if(openTab==='surv')h+=survPanel();if(openTab==='fenda')h+=fendaPanel();
  if(openTab==='missoes'){const D=daily();
    h+='<h3>Missões de hoje</h3>'+D.list.map((q,i)=>`<div class="quest win ${q.claimed?'done':''}"><div class="row"><span>${q.n}</span><span class="lv">${q.p.toLocaleString('pt-BR')}/${q.g.toLocaleString('pt-BR')}</span></div><div class="bar"><i style="width:${100*q.p/q.g}%;background:var(--gold)"></i></div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="sub">Prêmio: ${rwText(q.rw)}</span>${q.claimed?'<span class="sub">Pego</span>':q.done?`<button class="btn y" data-qd="${i}">Pegar</button>`:''}</div></div>`).join('')+'<p class="note">Novas missões à meia-noite.</p>';
    const open=METAS.filter(m=>!G.metas[m.id]),got=METAS.length-open.length;
    h+=`<h3>Metas</h3>`+open.slice(0,5).map(m=>{const ok=m.ok();return `<div class="quest win"><div class="row"><span>${m.n}</span></div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px"><span class="sub">Prêmio: ${rwText(m.rw)}</span>${ok?`<button class="btn y" data-qm="${m.id}">Pegar</button>`:''}</div></div>`}).join('')+(got?`<p class="note">${got} de ${METAS.length} metas concluídas.</p>`:'');
    const n=dexN(),tier=dexTier();h+=`<h3>Pokédex</h3><div class="quest win"><div class="row"><span>${n} espécies registradas</span><span class="lv">de ${NSP}</span></div><div class="bar"><i style="width:${100*(n%10)/10}%;background:var(--xp)"></i></div><span class="sub">Bônus atual: +${tier*2}% de XP e +${tier*10}% de chance de shiny. Próximo marco em ${10-n%10} ${10-n%10>1?'espécies':'espécie'}.</span></div>`}
  if(openTab==='mapa'){h+=`<div class="intro win"><b>Caça automática</b><p>Escolha onde seu time caça sozinho. Continua rendendo mesmo com o jogo fechado.</p></div>`;for(const k in BIOMES){h+=`<h3>${BIOMES[k].n}</h3><div class="biome">`+BIOMES[k].tiers.map((t,i)=>{const op=tierOpen(k,i),cur=G.biome===k&&G.tier===i;
      return `<button class="tier win ${cur?'cur':''}" data-go="${k}|${i}" ${op?'':'disabled'}><span><b>Faixa ${i+1}</b><br><span class="sub">${op?`Nv ${t[0]} a ${t[1]}`:`Libera no Nv ${t[0]-2}`}</span></span><span class="who">${t[2].map(id=>`<img src="${portrait(id)}" class="${G.dex[id]?'':'no'}" alt="${S[id].n}" title="${S[id].n}">`).join('')}</span></button>`}).join('')+'</div>'}}
  if(openTab==='equipe'){h+=`<h3>Equipe ${G.team.length}/5</h3>`+G.team.map((m,i)=>monRow(m,i,true)).join('');
    h+=`<h3>Depot ${G.depot.length}</h3>`+(G.depot.length?G.depot.map((m,i)=>monRow(m,i,false)).join(''):'<p class="note">Vazio. O que você capturar com a equipe cheia vem para cá.</p>');
    h+=`<p class="note" style="margin-top:10px">Pokédex: ${Object.keys(G.dex).length} de ${NSP}. Abates: ${G.kills}. Doces raros: ${G.items.rare}.</p><p class="note" style="margin-top:6px">Fundir um Pokémon repetido da mesma linha dá bônus de +1 a +5. Cada nível de bônus soma 8% em HP, ataque e defesa.</p>`}
  if(openTab==='arena')h+=axPanel();
  if(openTab==='loja'){h+=`<p class="note" style="margin-bottom:8px">Você tem ${Math.floor(G.gold).toLocaleString('pt-BR')} de ouro.</p>`;
    for(const k in BALLS)h+=`<div class="shop win"><img src="${icon(BALLS[k].f)}" alt=""><div><b>${BALLS[k].n}</b><div class="sub">Você tem ${G.balls[k]}</div></div><button class="btn y" data-buy="${k}" ${G.gold<BALLS[k].p*10?'disabled':''}>10 por ${BALLS[k].p*10}</button></div>`;
    h+=megaShop();h+=econShop();
    h+=`<div class="shop win"><img src="${icon('potion')}" alt=""><div><b>Poção</b><div class="sub">Cura metade do HP. Você tem ${G.pots}</div></div><button class="btn y" data-buy="pot" ${G.gold<250?'disabled':''}>5 por 250</button></div>`}
  if(openTab==='ajustes'){const sw=(k,l,d)=>`<div class="opt"><div><b>${l}</b><div class="sub">${d}</div></div><button class="sw" role="switch" aria-checked="${G.auto[k]}" data-auto="${k}" aria-label="${l}"></button></div>`;
    h+=`<h3>Automação</h3><div class="win" style="padding:2px 10px">`+sw('hunt','Atacar sozinho','Procura o selvagem mais perto')+sw('moves','Usar golpes sozinho','Usa os golpes especiais quando ficam prontos')+sw('throw','Lançar bola sozinho','Joga no corpo assim que ele cai')+sw('merge','Fundir repetidas sozinho','Capturas repetidas fortalecem o Pokémon da mesma linha. Shiny nunca é fundido')+sw('sound','Som','Efeitos sonoros do jogo')+sw('pot','Usar poção','Abaixo de 35% de HP')+sw('mega','Mega evoluir sozinho','Quando a energia mega enche')+sw('sp','Especial sozinho','Usa o especial em chefes e grupos grandes')+
      `<div class="opt"><div><b>Bola usada</b></div><div class="seg">${Object.keys(BALLS).map(k=>`<button class="btn" data-ball="${k}" aria-pressed="${G.auto.ball===k}" aria-label="${BALLS[k].n}"><img class="ico" src="${icon(BALLS[k].f)}" alt="">${G.balls[k]}</button>`).join('')}</div></div></div>`;
    h+=gfxRow();
    h+=`<h3>Teste</h3><div class="win" style="padding:2px 10px"><div class="opt"><div><b>Velocidade</b><div class="sub">Só para testar a progressão</div></div><div class="seg">${[1,5,20].map(v=>`<button class="btn" data-sp="${v}" aria-pressed="${G.speed===v}">${v}x</button>`).join('')}</div></div>
      <div class="opt"><div><b>Simular 2 horas fora</b><div class="sub">Testa o resumo de volta</div></div><button class="btn" id="simAway">Simular</button></div>
      <div class="opt"><div><b>Chamar o chefe</b><div class="sub">Pula as 40 derrotas</div></div><button class="btn" id="simBoss">Chamar</button></div>
      <div class="opt"><div><b>Recomeçar</b><div class="sub">Apaga o progresso deste navegador</div></div><button class="btn" id="resetBtn">Apagar</button></div></div>
      <h3>Créditos</h3><div class="win" style="padding:10px"><p class="note">Fan game sem fins lucrativos. Pokémon e todos os nomes relacionados pertencem à Nintendo, Game Freak e The Pokémon Company.</p>
      <p class="note" style="margin-top:8px">Sprites e retratos: <a href="https://sprites.pmdcollab.org/" style="color:var(--gold)">PMD Collab</a>, sob a licença CC BY-NC 4.0, com sprites originais da Spike Chunsoft. Artistas: ${CREDITS}.</p>
      <p class="note" style="margin-top:8px">Ícones de itens: projeto <a href="https://github.com/PokeAPI/sprites" style="color:var(--gold)">PokeAPI</a>. Fonte Pixelify Sans, licença SIL OFL.</p></div>
      <p class="note" style="margin-top:10px">Toque num selvagem para escolher o alvo, num corpo para jogar a bola e num golpe da barra para usá-lo. Sprites e retratos do PMD Collab, só para teste interno.</p>`}
  B.innerHTML=h;
}

// ===== interação =====
document.addEventListener('click',e=>{
  const t=e.target.closest('button');if(!t)return;const d=t.dataset;
  if(d.tab){snd('tap');return setTab(d.tab)}
  if(d.mode)return setTab(d.mode);
  if(econClick(d)||gfxClick(d))return;
  if(d.mv)return castManual(d.mv);
  if(t.id==='spBtn'){useSpecial();return}
  if(megaClick(t,d))return;
  if(axClick(t,d))return;
  if(arenaClick(t,d))return;
  if(t.id==='sheetClose')return setTab('hunt');
  if(d.sw!==undefined){if(MODE==='arena')return toast('Na Arena luta só um Pokémon');const i=+d.sw;if(G.team[i]&&G.team[i].hp>0&&center<=0&&meDeadT<=0){G.active=i;dirty=true}}
  else if(d.dep!==undefined){const i=+d.dep;const cur=G.team[G.active];const [m]=G.team.splice(i,1);G.depot.unshift(m);G.active=Math.max(0,G.team.indexOf(cur));dirty=true}
  else if(d.up!==undefined){if(G.team.length<5){const [m]=G.depot.splice(+d.up,1);G.team.push(m);dirty=true}}
  else if(d.merge!==undefined){const m=G.depot[+d.merge],tg=m&&mergeTarget(m);if(tg){G.depot.splice(+d.merge,1);mergeInto(tg,m,false)}}
  else if(d.rare!==undefined){const m=G.team[+d.rare];if(m&&G.items.rare>0&&m.lvl<100){G.items.rare--;gainXp(m,need(m.lvl)-m.xp);toast(`${S[m.id].n} subiu para o Nv ${m.lvl}`)}}
  else if(d.sell!==undefined){const m=G.depot[+d.sell];G.gold+=sellPrice(m);G.depot.splice(+d.sell,1);dirty=true}
  else if(d.buy){if(d.buy==='pot'){if(G.gold>=250){G.gold-=250;G.pots+=5}}else{const b=BALLS[d.buy];if(G.gold>=b.p*10){G.gold-=b.p*10;G.balls[d.buy]+=10;noBallWarned=false}}dirty=true}
  else if(d.go){if(MODE==='arena')return toast('Saia da Arena primeiro');const [b,i]=d.go.split('|');G.biome=b;G.tier=+i;wilds=[];corpses=[];balls=[];shots=[];slashes=[];timers=[];manualTarget=null;spawnT=300;buildBG();if(me){me.x=cam+VW*.3;me.y=laneMid()}dirty=true;setTab('hunt')}
  else if(d.auto){G.auto[d.auto]=!G.auto[d.auto];dirty=true}
  else if(d.ball){G.auto.ball=d.ball;dirty=true}
  else if(d.sp){G.speed=+d.sp;dirty=true}
  else if(t.id==='awayOk'){$('away').style.display='none';awayOpen=false;G.lastSeen=Date.now();last=performance.now();dirty=true}
  else if(t.id==='qbtn'){setTab('missoes')}
  else if(d.qd!==undefined){const q=daily().list[+d.qd];if(q&&q.done&&!q.claimed){q.claimed=true;toast('Prêmio: '+giveReward(q.rw));snd('catch')}}
  else if(d.qm){const m=METAS.find(x=>x.id===d.qm);if(m&&!G.metas[m.id]&&m.ok()){G.metas[m.id]=1;toast('Prêmio: '+giveReward(m.rw));snd('catch')}}
  else if(t.id==='coachSkip'){G.tut=4;dirty=true}
  else if(t.id==='throw'){const c=corpses.find(x=>!x.throwing);throwAt(c,G.auto.ball)}
  else if(t.id==='simAway'){setTab('hunt');G.lastSeen=Date.now()-2*3600e3;runOffline()}
  else if(t.id==='simBoss'){setTab('hunt');if(!wilds.some(w=>w.boss))spawnBoss()}
  else if(t.id==='resetBtn'){if(t.dataset.c){try{localStorage.removeItem('hunt_pmd_v1')}catch(_){}G=fresh();me=null;wilds=[];corpses=[];balls=[];center=0;setTab('hunt');openStarter()}else{t.dataset.c=1;t.textContent='Confirmar'}}
  else if(d.st){G.lastSeen=Date.now();G.tut=1;snd('catch');const id=+d.st;const m=mk(id,5,false,1);G.team=[m];G.active=0;G.dex[id]=1;$('starter').style.display='none';placeMe();feed(`Você escolheu ${S[id].n}`);dirty=true}
});
$('scrim').addEventListener('click',()=>setTab('hunt'));
cv.addEventListener('pointerdown',e=>{if(MODE==='arena')return;const r=cv.getBoundingClientRect(),x=e.clientX-r.left+cam,y=e.clientY-r.top;
  const c=corpses.find(c=>!c.throwing&&Math.hypot(c.x-x,c.y-6*SC-y)<20*SC);if(c){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(k=>G.balls[k]>0);if(k)throwAt(c,k);return}
  let best=null,bd=26*SC;for(const w of wilds){const d=Math.hypot(w.x-x,(w.y-8*SC)-y);if(d<bd){bd=d;best=w}}if(best){manualTarget=best;best.aggro=true}});
function openStarter(){$('stList').innerHTML=STARTERS.map(([r,ids])=>`<div class="region">${r}</div><div class="trio">${ids.map(id=>`<button class="pick win" data-st="${id}"><img src="${portrait(id)}" alt="">${S[id].n}</button>`).join('')}</div>`).join('');$('starter').style.display='flex'}

// ícones
$('icCoin').src=icon('amulet-coin');$('icQ').src=icon('lucky-egg');$('icBall').src=icon('poke-ball');$('icHunt').src=icon('exp-share');$('icMap').src=icon('town-map');$('icTeam').src=icon('poke-ball');$('icShop').src=icon('coin-case');$('icMega').src=icon('key-stone');$('icCfg').src=icon('max-repel');

new ResizeObserver(()=>{resize();for(const e of [me,...wilds,...corpses])if(e)e.y=Math.max(LANE_T,Math.min(LANE_B,e.y))}).observe($('stage'));
setupPad();resize();
if(!G.team.length)openStarter();else{placeMe();runOffline()}
document.fonts&&document.fonts.ready.then(()=>dirty=true);
setInterval(save,5000);
requestAnimationFrame(tick);
