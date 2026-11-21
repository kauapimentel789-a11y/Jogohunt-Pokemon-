
const CREDITS="0palite, 3Monika4, 3P1C, Anon, Audino, avalancheman, baronessfaron, Blanca, Blanky, bwappi, C_Pariah, Caitemis, chikorene, CHUNSOFT, Cloudy, Coksi, Davilos, Deeshura, deltaflare, Deltex12, distress, dmDash, Emboarger, Emmuffin, EzerArt, Fable, FalafelPorpoise, Fearless-Quit, Felis-Licht, Frostdrop1, Grimlin, Gust, G〜, Ichor, Jarleypeño, JemDragons, JFain, Jhony-Rex, JustAGunk, Kawaiitron, LazerBlitz, LT, mixy:3, Morei, motherhenna(Helen), mucrush, NeroIntruder, NickOnimura, NikolaP, Noivern, NOLASMOR, Noo, Orange, PhillipsYoung, pi3.14, powercristal, radpeepo, Reimu\\_needs\\_$$$, RelicCipher, ShyStarryRain, silverfox88, SirViolet, Smalusion, Soulja, Tainted#3886, TawnySoup, Top_Kec, Uni, Vynnyal, Waffluffe, XModxGodX, ◥θ┴θ◤";
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
const PMD='https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/',ITEM='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';
const TYPE_COLOR={normal:'#a8a77a',fire:'#ee8130',water:'#6390f0',electric:'#f7d02c',grass:'#7ac74c',ice:'#96d9d6',fighting:'#c22e28',poison:'#a33ea1',ground:'#e2bf65',flying:'#a98ff3',psychic:'#f95587',bug:'#a6b91a',rock:'#b6a136',ghost:'#735797',dragon:'#6f35fc',dark:'#705746',steel:'#b7b7ce',fairy:'#d685ad'};
const CH={normal:{rock:.5,ghost:0,steel:.5},fire:{fire:.5,water:.5,grass:2,ice:2,bug:2,rock:.5,dragon:.5,steel:2},water:{fire:2,water:.5,grass:.5,ground:2,rock:2,dragon:.5},electric:{water:2,electric:.5,grass:.5,ground:0,flying:2,dragon:.5},grass:{fire:.5,water:2,grass:.5,poison:.5,ground:2,flying:.5,bug:.5,rock:2,dragon:.5,steel:.5},ice:{fire:.5,water:.5,grass:2,ice:.5,ground:2,flying:2,dragon:2,steel:.5},fighting:{normal:2,ice:2,poison:.5,flying:.5,psychic:.5,bug:.5,rock:2,ghost:0,dark:2,steel:2,fairy:.5},poison:{grass:2,poison:.5,ground:.5,rock:.5,ghost:.5,steel:0,fairy:2},ground:{fire:2,electric:2,grass:.5,poison:2,flying:0,bug:.5,rock:2,steel:2},flying:{electric:.5,grass:2,fighting:2,bug:2,rock:.5,steel:.5},psychic:{fighting:2,poison:2,psychic:.5,dark:0,steel:.5},bug:{fire:.5,grass:2,fighting:.5,poison:.5,flying:.5,psychic:2,ghost:.5,dark:2,steel:.5,fairy:.5},rock:{fire:2,ice:2,fighting:.5,ground:.5,flying:2,bug:2,steel:.5},ghost:{normal:0,psychic:2,ghost:2,dark:.5},dragon:{dragon:2,steel:.5,fairy:0},dark:{fighting:.5,psychic:2,ghost:2,dark:.5,fairy:.5},steel:{fire:.5,water:.5,electric:.5,ice:2,rock:2,steel:.5,fairy:2},fairy:{fire:.5,fighting:2,poison:.5,dragon:2,dark:2,steel:.5}};
const S={},PREV={};
for(const k in D){if(!META[k])continue;const [n,t,s,e]=D[k];S[k]={n,t:t.split('/'),s:s||null,e:e||null}}
for(const k in S){const e=S[k].e;if(e&&!S[e[0]])S[k].e=null;else if(e)PREV[e[0]]=+k}
function baseStats(id){return S[id].s||baseStats(PREV[id]).map(x=>Math.round(x*1.3))}
const STARTERS=[['Kanto',[1,4,7]],['Johto',[152,155,158]],['Hoenn',[252,255,258]],['Sinnoh',[387,390,393]],['Unova',[495,498,501]],['Kalos',[650,653,656]],['Alola',[722,725,728]],['Galar',[810,813,816]],['Paldea',[906,909,912]]];
const BIOMES={
 floresta:{n:'Floresta',tiers:[[2,12,[10,43,761,540,672]],[14,30,[12,44,762,541,123,214]],[32,55,[45,763,542,673,212]]]},
 vulcao:{n:'Vulcão',tiers:[[2,12,[37,58,77,218,667,850]],[14,30,[126,228,324,757,851]],[32,55,[38,59,78,219,229,758]]]},
 lago:{n:'Lago',tiers:[[2,12,[129,54,194,183,418]],[14,30,[130,195,184,419,131,320]],[32,55,[55,321,134,350,131]]]},
 usina:{n:'Usina',tiers:[[2,12,[25,81,179,403,595,835]],[14,30,[180,404,82,125,479,836]],[32,55,[181,405,596,135,26,462]]]},
 caverna:{n:'Caverna',tiers:[[2,12,[74,95,246,744,524,443]],[14,30,[75,525,444,247,745,111]],[32,55,[445,248,112,76,208]]]}
};
const BALLS={poke:{n:'Poké Ball',f:'poke-ball',p:20,m:1},great:{n:'Great Ball',f:'great-ball',p:60,m:1.5},ultra:{n:'Ultra Ball',f:'ultra-ball',p:150,m:2.2}};
const CATCH=[.45,.30,.15],SHINY=1/400;
const pad=id=>String(id).padStart(4,'0');
const portrait=(id,sh)=>PMD+'portrait/'+pad(id)+'/'+(sh?'0000/0001/':'')+'Normal.png';
const icon=n=>ITEM+n+'.png';

// ===== sprites PMD =====
const SHEETS={};
function sheet(id,sh,role){
  const m=META[id].a[role];sh=sh&&META[id].sh;const key=id+'|'+(sh?1:0)+'|'+m[0];
  if(!SHEETS[key]){const im=new Image();im.crossOrigin='anonymous';im.src=PMD+'sprite/'+pad(id)+'/'+(sh?'0000/0001/':'')+m[0]+'-Anim.png';
    if(sh)im.onerror=()=>{META[id].sh=false};SHEETS[key]=im}
  return SHEETS[key];
}
const FOOT={};
function foot(id){ // distância do centro do quadro até os pés, medida no 1º quadro do Idle
  if(FOOT[id]!==undefined)return FOOT[id];
  const im=sheet(id,false,'Idle'),m=META[id].a.Idle;
  if(!im.complete||!im.naturalWidth)return m[2]*.3;
  try{const c=document.createElement('canvas');c.width=m[1];c.height=m[2];const g=c.getContext('2d');g.drawImage(im,0,0,m[1],m[2],0,0,m[1],m[2]);
    const d=g.getImageData(0,0,m[1],m[2]).data;let low=m[2]-1;
    outer:for(let y=m[2]-1;y>=0;y--)for(let x=0;x<m[1];x++)if(d[(y*m[1]+x)*4+3]>40){low=y;break outer}
    FOOT[id]=low-m[2]/2}catch(e){FOOT[id]=m[2]*.3}
  return FOOT[id];
}
const ROWMAP=[2,1,0,7,6,5,4,3];
const dirOf=(dx,dy)=>ROWMAP[((Math.round(Math.atan2(dy,dx)/(Math.PI/4))%8)+8)%8];

// ===== estado salvo =====
let G;
function fresh(){return{gold:500,balls:{poke:25,great:0,ultra:0},pots:5,team:[],depot:[],active:0,biome:'floresta',tier:0,dex:{},kills:0,auto:{hunt:true,moves:true,throw:true,ball:'poke',pot:true,merge:true},items:{rare:0},boss:{},lastSeen:Date.now(),speed:1}}
try{G=JSON.parse(localStorage.getItem('hunt_pmd_v1'))}catch(e){}
if(!G||!G.team)G=fresh();
if(G.auto.moves===undefined)G.auto.moves=true;if(G.auto.sound===undefined)G.auto.sound=true;G.stats=G.stats||{caught:0,bosses:0,moves:0};G.metas=G.metas||{};if(G.tut===undefined)G.tut=G.team.length?4:0;if(G.auto.merge===undefined)G.auto.merge=true;G.items=G.items||{rare:0};G.boss=G.boss||{};
for(const m of [...G.team,...G.depot])if(!S[m.id])m.id=4;
const save=()=>{if(!document.hidden&&!awayOpen)G.lastSeen=Date.now();try{localStorage.setItem('hunt_pmd_v1',JSON.stringify(G))}catch(e){}};

function mk(id,lvl,shiny,q){const m={u:Math.random().toString(36).slice(2),id,lvl,xp:0,shiny:!!shiny,q:q||+(0.9+Math.random()*0.2).toFixed(2)};m.hp=calc(m).hp;return m}
function calc(m,wild){const b=baseStats(m.id),L=m.lvl,q=(m.q||1)*(1+.08*(m.b||0));
  return{hp:Math.floor((Math.floor(2*b[0]*L/100)+L+10)*q),atk:(Math.floor(2*b[1]*L/100)+5)*q*(wild?.85:1),def:(Math.floor(2*b[2]*L/100)+5)*q,spe:b[3]}}
const need=L=>Math.floor(1.2*Math.pow(L,2.5))+20;
const cooldown=spe=>Math.max(700,1800-spe*7);
function eff(a,d){let best=0;for(const x of a){let m=1;for(const y of d){const v=CH[x][y];if(v!==undefined)m*=v}if(m>best)best=m}return best}
const maxLvl=()=>Math.max(1,...G.team.map(m=>m.lvl));
const tierOpen=(b,i)=>maxLvl()>=BIOMES[b].tiers[i][0]-2;

// ===== canvas e mundo =====
const $=id=>document.getElementById(id);
const cv=$('cv'),ctx=cv.getContext('2d');
let VW=360,VH=400,SC=1.6,DPR=1,BG=null;
function resize(){const r=$('stage').getBoundingClientRect();VW=r.width;VH=r.height;DPR=Math.min(2,window.devicePixelRatio||1);
  document.documentElement.style.setProperty('--tabsH',($('tabs').offsetHeight+6)+'px');cv.width=Math.round(VW*DPR);cv.height=Math.round(VH*DPR);SC=VW<480?2:VW<640?2.2:2.5;buildBG()}
function buildBG(){
  BG=document.createElement('canvas');BG.width=Math.ceil(VW);BG.height=Math.ceil(VH);const g=BG.getContext('2d');
  let s=11;const r=()=>(s=(s*16807)%2147483647)/2147483647;const P=Math.round(3*SC);
  const pal={floresta:['#3e8948','#4a9a52','#367a3f','#5ab552'],vulcao:['#4a2a2a','#57302c','#3d2323','#663a2f'],lago:['#d8c08a','#e0c995','#cdb47c','#e8d4a2'],usina:['#3b4252','#444c5e','#353b49','#4c5568'],caverna:['#4d3b2e','#584435','#433328','#5f4a39']}[G.biome];
  for(let y=0;y<BG.height;y+=P)for(let x=0;x<BG.width;x+=P){const n=Math.sin(x*.02+y*.013)+Math.cos(y*.025)*.7+r()*.9;g.fillStyle=pal[n>1.2?3:n>.4?1:n<-.6?2:0];g.fillRect(x,y,P,P)}
  const blob=(cx,cy,rw,rh,col)=>{g.fillStyle=col;for(let y=-rh;y<=rh;y+=P)for(let x=-rw;x<=rw;x+=P){if((x*x)/(rw*rw)+(y*y)/(rh*rh)<=1+r()*.15)g.fillRect(Math.round((cx+x)/P)*P,Math.round((cy+y)/P)*P,P,P)}};
  const B=G.biome,W=BG.width,H=BG.height,edge=()=>r()<.5?r()*W:(r()<.5?r()*W*.15:W-r()*W*.15);
  if(B==='floresta'){for(let i=0;i<14;i++){const x=edge(),y=r()*H;blob(x,y,26*SC/1.6,20*SC/1.6,'#265c2f');blob(x-4,y-5,18*SC/1.6,13*SC/1.6,'#2f6e38')}
    for(let i=0;i<40;i++){g.fillStyle=['#f4f4f4','#ffcd75','#ef7d57'][i%3];g.fillRect(Math.round(r()*W/P)*P,Math.round(r()*H/P)*P,P,P)}}
  if(B==='vulcao'){for(let i=0;i<7;i++){const x=r()*W,y=r()*H;blob(x,y,22*SC/1.6,12*SC/1.6,'#b13e53');blob(x,y,14*SC/1.6,7*SC/1.6,'#ef7d57');blob(x,y,6*SC/1.6,3*SC/1.6,'#ffcd75')}
    for(let i=0;i<10;i++)blob(edge(),r()*H,16*SC/1.6,12*SC/1.6,'#2a1a1a')}
  if(B==='lago'){blob(W*.15,H*.2,W*.28,H*.16,'#3b5dc9');blob(W*.15,H*.2,W*.22,H*.11,'#41a6f6');blob(W*.92,H*.85,W*.25,H*.14,'#3b5dc9');blob(W*.92,H*.85,W*.18,H*.09,'#41a6f6');
    for(let i=0;i<12;i++){g.fillStyle='#73eff7';g.fillRect(Math.round((W*.05+r()*W*.25)/P)*P,Math.round((H*.12+r()*H*.14)/P)*P,P*3,P)}}
  if(B==='usina'){g.fillStyle='#2b3140';for(let x=0;x<W;x+=P*16)g.fillRect(x,0,P/2,H);for(let y=0;y<H;y+=P*16)g.fillRect(0,y,W,P/2);
    for(let i=0;i<6;i++){const x=Math.round(r()*W/P)*P,y=Math.round(r()*H/P)*P;for(let k=0;k<8;k++){g.fillStyle=k%2?'#ffcd75':'#1a1c2c';g.fillRect(x+k*P,y,P,P*2)}}}
  if(B==='caverna'){for(let i=0;i<16;i++){const x=edge(),y=r()*H;blob(x,y,14*SC/1.6,10*SC/1.6,'#2e2219');blob(x-3,y-3,8*SC/1.6,5*SC/1.6,'#6e5642')}
    for(let i=0;i<8;i++){const x=r()*W,y=r()*H;g.fillStyle='#73eff7';g.fillRect(Math.round(x/P)*P,Math.round(y/P)*P,P,P*3);g.fillStyle='#41a6f6';g.fillRect(Math.round(x/P)*P+P,Math.round(y/P)*P+P,P,P*2)}}
}

// ===== entidades =====
let noBallWarned=false,me=null,wilds=[],corpses=[],balls=[],fx=[],nums=[],center=0,spawnT=500,potCd=0,manualTarget=null,meU=null,meDeadT=0;
function ent(id,shiny,x,y){return{id,shiny,x,y,dir:0,anim:'Idle',t:0,once:false,cb:null,hitCb:null,hitDone:false,flash:0,cd:600+Math.random()*400,goal:null,wanderT:0,aggro:false}}
function play(e,role,{cb=null,hit=null}={}){e.anim=role;e.t=0;e.once=role!=='Idle'&&role!=='Walk';e.cb=cb;e.hitCb=hit;e.hitDone=false}
function frame(e){const m=META[e.id].a[e.anim],tot=m[3].reduce((a,b)=>a+b,0)*1000/60;let t=e.t;
  if(!e.once)t%=tot;else if(t>=tot){if(e.hitCb&&!e.hitDone){e.hitDone=true;e.hitCb()}if(e.cb){const c=e.cb;e.cb=null;c()}else if(e.anim!=='Faint')play(e,'Idle');return m[3].length-1}
  let acc=0;for(let i=0;i<m[3].length;i++){acc+=m[3][i]*1000/60;if(t<acc){const hf=m[4]>=0?m[4]:Math.floor(m[3].length*.5);if(e.once&&e.hitCb&&!e.hitDone&&i>=hf){e.hitDone=true;e.hitCb()}return i}}return m[3].length-1}
function drawEnt(e,dim){
  const m=META[e.id].a[e.anim],im=sheet(e.id,e.shiny,e.anim);if(!im.complete||!im.naturalWidth)return;
  const f=frame(e),rows=Math.max(1,Math.round(im.naturalHeight/m[2])),row=rows>1?e.dir:0;
  const K=e.scale||1,w=m[1]*SC*K,h=m[2]*SC*K,fy=foot(e.id)*SC*K;
  ctx.save();ctx.globalAlpha=dim?.75:.35;ctx.fillStyle='#0e0f1d';ctx.beginPath();ctx.ellipse(e.x,e.y,9*SC*K,3.2*SC*K,0,0,7);ctx.fill();ctx.restore();
  ctx.save();if(dim)ctx.filter='grayscale(.7) brightness(.6)';else if(e.flash>0&&Math.floor(e.flash/70)%2===0)ctx.filter='brightness(2.4) saturate(.2)';
  if(e.shiny&&!META[e.id].sh)ctx.filter='hue-rotate(140deg)';
  if(e.boss&&!dim){ctx.save();ctx.globalAlpha=.25+.12*Math.sin(performance.now()/180);ctx.fillStyle='#b13e53';ctx.beginPath();ctx.ellipse(e.x,e.y,14*SC*K,5*SC*K,0,0,7);ctx.fill();ctx.restore()}
  ctx.drawImage(im,f*m[1],row*m[2],m[1],m[2],Math.round(e.x-w/2),Math.round(e.y-fy-h/2),w,h);ctx.restore();
}
function headY(e){const m=META[e.id].a.Idle,K=e.scale||1;return e.y-(foot(e.id)*SC+m[2]*SC*.42)*K}

function spawnWild(){
  const [a,b,list]=BIOMES[G.biome].tiers[G.tier];const id=list[Math.floor(Math.random()*list.length)];
  let x,y,k=0;do{x=30+Math.random()*(VW-60);y=95+Math.random()*(VH-140);k++}while(me&&Math.hypot(x-me.x,y-me.y)<140&&k<20);
  const w=ent(id,Math.random()<shinyP(),x,y);w.lvl=a+Math.floor(Math.random()*(b-a+1));w.q=+(0.9+Math.random()*.2).toFixed(2);
  Object.assign(w,calc(w,true));w.max=w.hp;w.u='w'+Math.random().toString(36).slice(2);w.moves=movesOf(w);w.spawn=400;wilds.push(w);
  if(w.shiny)toast('Um '+S[id].n+' shiny apareceu!');
}
const BOSS_N=40;
const bossKey=()=>G.biome+'|'+G.tier;
function spawnBoss(){
  const [a,b,list]=BIOMES[G.biome].tiers[G.tier];
  const id=[...list].sort((p,q)=>baseStats(q).reduce((s,v)=>s+v,0)-baseStats(p).reduce((s,v)=>s+v,0))[0];
  const w=ent(id,Math.random()<1/50,VW/2,Math.max(120,VH*.32));w.lvl=b+5;w.q=1.1;
  const c=calc(w,true);Object.assign(w,c);w.hp=w.max=c.hp*10;w.atk=c.atk*1.25;w.def=c.def*1.2;
  w.boss=true;w.scale=1.7;w.aggro=true;w.u='b'+Math.random().toString(36).slice(2);w.moves=movesOf(w);w.spawn=600;wilds.push(w);
  G.boss[bossKey()]=0;shake=500;shots.push({k:'aoe',type:S[id].t[0],x:w.x,y:w.y,r:60*SC,t:0,dur:700});
  snd('boss');toast(`Chefe: ${S[id].n} Nv ${w.lvl} apareceu!`);feed(`Um chefe apareceu: ${S[id].n}`);
}
function placeMe(x,y){const a=active();if(!a){me=null;return}me=ent(a.id,a.shiny,x??VW/2,y??VH*.6);me.u=a.u;meU=a.u;me.spawn=400}
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
  }}catch(e){}}

// ===== Pokédex: marcos =====
const dexN=()=>Object.keys(G.dex).length;
const dexTier=()=>Math.floor(dexN()/10);
const dexXp=()=>1+.02*dexTier();
const shinyP=()=>SHINY*(1+.1*dexTier());

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
function impact(type,x,y,big){const c=FXC[type]||FXC.normal,n=big?22:14;
  for(let i=0;i<n;i++){const a=Math.random()*6.28,s=(.05+Math.random()*.13)*(type==='water'?1.3:1);
    part(x,y,c[i%3],{vx:Math.cos(a)*s,vy:Math.sin(a)*s-(type==='fire'?.05:0),g:type==='water'||type==='rock'||type==='ground'?.0006:type==='fire'?-.0002:0,life:380+Math.random()*250,sz:Math.round((type==='rock'?3:2)*SC)})}
  if(type==='psychic'||type==='ghost'||type==='fairy')shots.push({k:'ring',x,y,t:0,dur:420,c:c[1]});
}
function launch(type,from,to,onHit){
  const sx=from.x,sy=headY(from)+12*SC,tx=to.x,ty=headY(to)+12*SC;
  if(!RANGED.has(type)){ // golpe corpo a corpo: corte ou impacto no alvo
    const c=FXC[type]||FXC.normal;slashes.push({x:tx,y:ty,t:0,c,kind:type==='dragon'||type==='dark'||type==='steel'?'claw':'star'});impact(type,tx,ty);onHit();return}
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
  for(const s of shots){
    if(s.k==='proj'){const c=FXC[s.type]||FXC.normal,z=Math.round(SC*(s.type==='rock'?7:s.type==='fire'||s.type==='ghost'||s.type==='poison'?6:5));
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
      ctx.save();ctx.translate(s.ox,s.oy);ctx.rotate(s.ang);ctx.globalAlpha=.5;ctx.fillStyle=c[2];ctx.fillRect(0,-wv*1.6,s.len,wv*3.2);
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
function movesOf(m){return learnList(m.id).filter(x=>m.lvl>=x[1]).map(x=>x[0]).slice(-4)}
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
  const go=()=>play(c,'Atk',{hit:()=>doMove(c,isMe,k,tgt)});
  if(x.charge){c.charging=x.charge;c.chargeType=type;c.afterCharge=go;if(c.anim==='Walk')play(c,'Idle')}else go();
}
function applyStatus(o,k,ch){if(o&&!o.st&&Math.random()<ch)o.st={k,t:k==='sleep'?2600:5000,tick:1000}}
function applyHit(c,isMe,t,type,p,x){
  let dmg=0;
  if(isMe){const m=G.team[G.active];if(!m||!wilds.includes(t)||t.hp<=0)return 0;const ca=calc(m);
    if(p>0){const r=hit(ca.atk*p/50,[type],{defStat:t.def},S[t.id].t,m.lvl);dmg=r.d;t.hp-=dmg;num(t.x,headY(t),dmg,r.e>1?'se':r.e<1?'nv':r.crit?'cr':'')}
    t.flash=360;t.aggro=true;if(x.st)applyStatus(t,x.st,x.ch);
    if(x.drain&&dmg){const h=Math.floor(dmg*x.drain);m.hp=Math.min(ca.hp,m.hp+h);num(me.x,headY(me),'+'+h,'heal')}
    if(t.hp<=0)killWild(t,m);
  }else{const m=active();if(!m||!me||meDeadT>0||!wilds.includes(c))return 0;const ca=calc(m);
    if(p>0){const r=hit(c.atk*p/50,[type],{defStat:ca.def},S[m.id].t,c.lvl);dmg=r.d;m.hp-=dmg;num(me.x,headY(me),dmg,'in')}
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
  const foes=()=>foesOf(isMe),valid=t=>t&&foes().includes(t),hitT=(t,mul=1)=>applyHit(c,isMe,t,type,p*mul,x);
  const cx=c.x,cy=headY(c)+12*SC,col=FXC[type]||FXC.normal;
  if(kind==='proj'){let ts=valid(tgt)?[tgt]:[];const nn=x.n||1;
    if(nn>1&&isMe)ts=ts.concat(foes().filter(f=>f!==tgt&&dist(f,c)<=CAST*SC*1.2).sort((a,b)=>dist(a,c)-dist(b,c)));
    if(!ts.length)return;for(let i=0;i<nn;i++){const t=ts[i%ts.length];later(i*90,()=>{if(valid(t))shootProj(type,c,t,()=>{if(valid(t)){impact(type,t.x,headY(t)+12*SC);hitT(t)}})})}}
  else if(kind==='melee'){if(!valid(tgt))return;const ty=headY(tgt)+12*SC;
    slashes.push({x:tgt.x,y:ty,t:0,c:col,kind:'claw',big:p>=80});impact(type,tgt.x,ty,p>=80);hitT(tgt);if(p>=90)shake=Math.max(shake,180)}
  else if(kind==='beam'){const ang=tgt?Math.atan2(headY(tgt)+12*SC-cy,tgt.x-cx):[0,.785,1.57,2.36,3.14,-2.36,-1.57,-.785][[2,1,0,7,6,5,4,3].indexOf(c.dir)],len=150*SC,w=7*SC*(x.w||1);
    shots.push({k:'beam',type,ox:cx,oy:cy,ang,len,w,t:0,dur:520});if(p>=100)shake=Math.max(shake,300);
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
  a.dir=dirOf(target.x-a.x,target.y-a.y);a.goal=null;
  play(a,'Atk',{hit:()=>{
    if(isMe){const m=active();if(!m||!wilds.includes(target)||target.hp<=0)return;const type=moveType(S[m.id].t,S[target.id].t),src=me;
      launch(type,src,target,()=>{const mm=active();if(!mm||!wilds.includes(target)||target.hp<=0)return;const c=calc(mm);
        const r=hit(c.atk,[type],{defStat:target.def},S[target.id].t,mm.lvl);target.hp-=r.d;target.flash=360;target.aggro=true;
        num(target.x,headY(target),r.d,r.e>1?'se':r.e<1?'nv':r.crit?'cr':'');if(target.hp<=0)killWild(target,mm)});
    }else{if(!me||meDeadT>0)return;const m=active();if(!m)return;const type=moveType(S[a.id].t,S[m.id].t),tgt=me;
      launch(type,a,tgt,()=>{const mm=active();if(!mm||me!==tgt||meDeadT>0||!wilds.includes(a))return;const c=calc(mm);
        const r=hit(a.atk,[type],{defStat:c.def},S[mm.id].t,a.lvl);mm.hp-=r.d;me.flash=360;num(me.x,headY(me),r.d,'in');
        if(mm.hp<=0){mm.hp=0;meDown()}});
    }}});
}
function killWild(w,m){
  w.hp=0;wilds=wilds.filter(x=>x!==w);if(manualTarget===w)manualTarget=null;
  const ti=G.tier,xp=Math.floor((40+ti*25)*w.lvl/5*(w.boss?6:1)*dexXp()),gold=w.lvl*5*(w.boss?12:1);G.gold+=gold;G.kills++;
  track('kill',S[w.id].t);track('gold',gold);if(w.boss){G.stats.bosses++;track('boss')}else tutStep(1);
  if(w.boss){G.items.rare+=1;G.balls.great+=5;G.balls.ultra+=2;G.pots+=3;shake=400;burst(w.x,w.y-10*SC,'#ffcd75',30,.2);
    toast('Chefe derrotado! +1 Doce raro, +5 Great, +2 Ultra');feed(`Chefe ${S[w.id].n} derrotado +${xp}xp +${gold} ouro`)}
  else{G.boss[bossKey()]=(G.boss[bossKey()]||0)+1;feed(`${S[w.id].n} derrotado +${xp}xp +${gold} ouro`);
    if(G.boss[bossKey()]>=BOSS_N&&!wilds.some(x=>x.boss))later(1500,()=>{if(!wilds.some(x=>x.boss)&&G.boss[bossKey()]>=BOSS_N)spawnBoss()})}
  gainXp(m,xp);for(const o of G.team)if(o!==m&&o.hp>0)gainXp(o,Math.floor(xp*.25));
  play(w,'Faint',{cb:()=>{}});w.corpse=w.corpseMax=Object.values(G.balls).some(v=>v>0)?30000:5000;w.faintT=0;corpses.push(w);spawnT=Math.max(spawnT,1800);dirty=true;
}
function meDown(){if(!me)return;snd('faint');const d=me;const dm=G.team[G.active];if(dm)dm.st=null;me.pending=null;me.charging=0;feed(`${S[d.id].n} desmaiou`);play(d,'Faint',{cb:()=>{}});meDeadT=1100;dirty=true}
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
function addCapture(id,lvl,shiny,q,silent){
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
  const c=b.c,p=Math.min(.95,CATCH[G.tier]*BALLS[b.kind].m*([443,246].includes(c.id)?.5:1)*(c.boss?3:1));
  if(Math.random()<p){
    const r=addCapture(c.id,c.lvl,c.shiny,c.q,false);G.stats.caught++;track('catch');tutStep(2);snd('catch');
    if(!r.merged){toast(`${c.shiny?'Shiny! ':''}${S[c.id].n} capturado${r.isNew?' (novo)':''}`);feed(`${S[c.id].n} foi para o ${r.where}`)}
    burst(c.x,c.y-6*SC,'#ffcd75',20,.16);corpses=corpses.filter(x=>x!==c);
  }else{c.throwing=false;snd('fail');feed(`${S[c.id].n} escapou da ${BALLS[b.kind].n}`);burst(c.x,c.y-6*SC,'#f4f4f4',10)}
  dirty=true;
}

// ===== progresso offline =====
const OFF_MAX=12*3600e3,OFF_EFF=.6;
function offlineSim(ms){
  const a=active()||G.team[0];if(!a)return null;const secs=Math.min(ms,OFF_MAX)/1000;
  const [lo,hi,list]=BIOMES[G.biome].tiers[G.tier];const c=calc(a),avgL=(lo+hi)/2;
  let tsum=0;for(const id of list){const s=calc({id,lvl:avgL,q:1},true);const e=Math.max(.5,eff(S[a.id].t,S[id].t)||.5);
    const d=((2*a.lvl/5+2)*50*c.atk/s.def)/50+2;tsum+=Math.ceil(s.hp/Math.max(1,d*e*.92))*cooldown(c.spe)/1000+3.5}
  const killT=tsum/list.length,lvlF=Math.max(.15,Math.min(1,(a.lvl-avgL+12)/12));
  const kills=Math.min(20000,Math.floor(secs/killT*OFF_EFF*lvlF));
  const before=G.team.map(m=>({u:m.u,id:m.id,lvl:m.lvl}));
  const R={secs:Math.round(secs),capped:ms>OFF_MAX,kills,xp:0,gold:0,caught:0,merged:0,ups:0,shiny:[],news:[],used:0,evo:[],lv:[]};
  SILENT=true;
  for(let i=0;i<kills;i++){const id=list[Math.floor(Math.random()*list.length)],L=lo+Math.floor(Math.random()*(hi-lo+1));
    R.xp+=Math.floor((40+G.tier*25)*L/5*dexXp());R.gold+=L*5;track('kill',S[id].t);
    if(G.auto.throw){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(x=>G.balls[x]>0);
      if(k){G.balls[k]--;R.used++;if(Math.random()<Math.min(.95,CATCH[G.tier]*BALLS[k].m*([443,246].includes(id)?.5:1))){
        const sh=Math.random()<shinyP(),nw=!G.dex[id];const r=addCapture(id,L,sh,+(0.9+Math.random()*.2).toFixed(2),true);R.caught++;G.stats.caught++;track('catch');
        if(r.merged){R.merged++;if(r.up)R.ups++}if(sh)R.shiny.push(id);if(nw)R.news.push(id)}}}}
  G.gold+=R.gold;track('gold',R.gold);G.kills+=kills;G.boss[bossKey()]=Math.min(BOSS_N,(G.boss[bossKey()]||0)+kills);
  gainXp(a,R.xp);for(const o of G.team)if(o!==a&&o.hp>0)gainXp(o,Math.floor(R.xp*.25));
  SILENT=false;
  for(const b of before){const m=G.team.find(x=>x.u===b.u);if(!m)continue;if(m.id!==b.id)R.evo.push([b.id,m.id]);if(m.lvl>b.lvl)R.lv.push([m.id,b.lvl,m.lvl])}
  if(me){me.id=a.id;me.shiny=a.shiny}
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
    if(R.news.length)h+=`<div class="sub" style="margin:8px 0 4px">Novos na Pokédex</div><div class="awgrid">${[...new Set(R.news)].map(id=>`<img src="${portrait(id)}" alt="${S[id].n}" title="${S[id].n}">`).join('')}</div>`;
    if(R.capped)h+=`<p class="note" style="margin-top:8px">O progresso fora do jogo vai até 12 horas.</p>`;
    h+=`<p class="note" style="margin-top:8px">Fora do jogo o time rende 60% do que renderia jogando.</p>`;
  }
  $('awayTime').textContent=`Você ficou fora por ${fmtTime(R.secs)} em ${BIOMES[G.biome].n}, faixa ${G.tier+1}.`;$('awayBody').innerHTML=h;$('away').style.display='grid';awayOpen=true;
}
function runOffline(){
  const now=Date.now(),el=now-(G.lastSeen||now);G.lastSeen=now;
  if(el<60000||!G.team.length||awayOpen)return;
  const R=offlineSim(el);if(R){wilds=wilds.filter(w=>!w.boss||true);showAway(R);save()}
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){G.lastSeen=Date.now();save()}else runOffline()});
window.addEventListener('pagehide',()=>{G.lastSeen=Date.now();save()});

// ===== loop =====
let last=performance.now(),dirty=true,hudT=0;
function tick(now){
  const raw=Math.min(60,now-last);last=now;const dt=raw*G.speed;
  if(G.team.length&&!$('starter').style.display.includes('flex')&&!awayOpen)step(dt,raw);
  draw();hudT-=raw;if(hudT<=0){hud();hudT=100}
  requestAnimationFrame(tick);
}
function step(dt,raw){
  if(potCd>0)potCd-=dt;
  // centro pokémon
  if(center>0){center-=dt;if(center<=0){for(const m of G.team){m.hp=calc(m).hp;m.st=null}G.active=0;placeMe();feed('Enfermeira Joy curou o time');dirty=true}return}
  if(meDeadT>0){meDeadT-=dt;if(me)me.t+=dt;if(meDeadT<=0){const px=me?me.x:VW/2,py=me?me.y:VH*.6;placeMe(px,py);if(!me){center=5000;wilds.forEach(w=>w.aggro=false);manualTarget=null;feed('O time caiu. Indo ao Centro Pokémon')}}}
  if(!me&&center<=0&&meDeadT<=0&&G.team.length){placeMe();if(!me){center=5000}}
  if(me&&meU!==G.team[G.active]?.u&&meDeadT<=0){const a=active();if(a){me.id=a.id;me.shiny=a.shiny;me.u=a.u;meU=a.u;me.spawn=400;play(me,'Idle')}}
  // nascimento
  const maxW=5;if(wilds.length<maxW){spawnT-=dt;if(spawnT<=0){spawnWild();spawnT=1200+Math.random()*1500}}
  const a=active();
  tickCd(dt);tickTimers(dt);if(shake>0)shake-=raw;
  for(const w of [...wilds])stStep(w,dt,w.max,d=>{w.hp-=d;num(w.x,headY(w),d,'st');if(w.hp<=0&&wilds.includes(w)&&G.team[G.active])killWild(w,G.team[G.active])});
  if(a&&me&&meDeadT<=0)stStep(a,dt,calc(a).hp,d=>{a.hp-=d;num(me.x,headY(me),d,'in');if(a.hp<=0){a.hp=0;meDown()}});
  // jogador
  if(me&&meDeadT<=0&&a){
    if(me.id!==a.id){me.id=a.id;me.shiny=a.shiny}
    me.t+=dt;if(me.flash>0)me.flash-=dt;if(me.spawn>0)me.spawn-=dt;if(me.evo>0)me.evo-=dt;me.cd-=dt;
    let tgt=manualTarget&&wilds.includes(manualTarget)?manualTarget:null;
    if(!tgt&&G.auto.hunt){let best=1e9;for(const w of wilds){if(w.spawn>0)continue;const d=Math.hypot(w.x-me.x,w.y-me.y)-(w.aggro?80:0);if(d<best){best=d;tgt=w}}}
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
      else if(tgt){const R=rangeOf(moveType(S[a.id].t,S[tgt.id].t)),d=dist(tgt,me);
        if(d>R){if(me.anim!=='Atk'&&me.anim!=='Hurt')move(me,tgt.x,tgt.y,dt*slow,62)}
        else if(me.cd<=0&&me.anim!=='Atk'){attack(me,tgt,true);me.cd=cooldown(calc(a).spe)*(slow<1?1.5:1)}
        else if(me.anim==='Walk')play(me,'Idle');
      }else if(me.anim==='Walk')play(me,'Idle');
    }
    if(G.auto.pot&&a.hp>0&&a.hp<calc(a).hp*.35&&G.pots>0&&potCd<=0){G.pots--;a.hp=Math.min(calc(a).hp,a.hp+calc(a).hp*.5);potCd=3000;feed('Poção usada');burst(me.x,headY(me)+10*SC,'#73eff7',12);dirty=true}
    // regenera fora de combate
    if(!wilds.some(w=>w.aggro))for(const m of G.team)if(m.hp>0)m.hp=Math.min(calc(m).hp,m.hp+calc(m).hp*.03*dt/1000);
  }
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
      w.wanderT-=dt;if(w.wanderT<=0){w.wanderT=1800+Math.random()*2600;w.goal=Math.random()<.6?{x:30+Math.random()*(VW-60),y:95+Math.random()*(VH-140)}:null;if(!w.goal&&w.anim==='Walk')play(w,'Idle')}
      if(w.goal&&w.anim!=='Atk'&&w.anim!=='Hurt'){if(move(w,w.goal.x,w.goal.y,dt,26)){w.goal=null;play(w,'Idle')}}
    }
  }
  // corpos
  for(const c of corpses){c.t+=dt;if(!c.throwing)c.corpse-=dt}
  corpses=corpses.filter(c=>{if(c.corpse<=0&&!c.throwing){feed(`${S[c.id].n} Nv${c.lvl} sumiu`);return false}return true});
  if(G.auto.throw&&me&&meDeadT<=0){const c=corpses.find(c=>!c.throwing);if(c){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(x=>G.balls[x]>0);if(k)throwAt(c,k);else if(!noBallWarned){noBallWarned=true;toast('Sem bolas. Compre na Loja')}}}
  // bolas
  for(const b of balls){b.t+=dt;if(b.ph==='fly'&&b.t>=480){b.ph='shake';snd('shake');b.t=0}else if(b.ph==='shake'&&b.t>=1150){b.ph='done';resolveBall(b)}}
  balls=balls.filter(b=>b.ph!=='done');
  // efeitos
  stepShots(dt);
  for(const p of fx){p.age+=raw;if(p.tx!==undefined){p.x+=(p.tx-p.x)*.12;p.y+=(p.ty-p.y)*.12}else{p.x+=p.vx*raw;p.y+=p.vy*raw;p.vy+=(p.g||0)*raw}}fx=fx.filter(p=>p.age<p.life);
  for(const n of nums)n.age+=raw;nums=nums.filter(n=>n.age<900);
}
function move(e,tx,ty,dt,speed){const dx=tx-e.x,dy=ty-e.y,d=Math.hypot(dx,dy);if(d<2)return true;
  const s=Math.min(d,speed*SC/1.6*dt/1000);e.x+=dx/d*s;e.y+=dy/d*s;e.x=Math.max(16,Math.min(VW-16,e.x));e.y=Math.max(80,Math.min(VH-14,e.y));e.dir=dirOf(dx,dy);if(e.anim!=='Walk')play(e,'Walk');return false}

function draw(){
  ctx.setTransform(DPR,0,0,DPR,0,0);ctx.imageSmoothingEnabled=false;if(shake>0){const m=Math.min(1,shake/200)*3*SC/1.6;ctx.translate(Math.round((Math.random()-.5)*2*m),Math.round((Math.random()-.5)*2*m))}
  if(BG)ctx.drawImage(BG,0,0);
  const list=[...corpses.map(c=>({e:c,c:1})),...wilds.map(w=>({e:w})),...(me?[{e:me,me:1}]:[])].sort((p,q)=>p.e.y-q.e.y);
  for(const it of list){const e=it.e;
    if(it.c){ if(!e.throwing||balls.find(b=>b.c===e&&b.ph==='fly'))drawEnt(e,e.faintT!==undefined&&e.t>600);
      if(!e.throwing){const r=6*SC,x=e.x,y=e.y-24*SC;ctx.save();ctx.strokeStyle='#0e0f1d';ctx.lineWidth=4;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.stroke();
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
  // bolas
  for(const b of balls){const im=BALLIMG[b.kind],s=14*SC;let x,y,rot=0;
    if(b.ph==='fly'){const k=b.t/480;x=b.x0+(b.c.x-b.x0)*k;y=b.y0+(b.c.y-6*SC-b.y0)*k-Math.sin(k*Math.PI)*40*SC;rot=k*12}
    else{x=b.c.x;y=b.c.y-6*SC;const k=b.t/1150;rot=Math.sin(k*Math.PI*3)*.45*(1-k*.3)}
    ctx.save();ctx.translate(x,y);ctx.rotate(rot);if(im.complete)ctx.drawImage(im,-s/2,-s/2,s,s);ctx.restore()}
  drawShots();
  for(const p of fx){ctx.globalAlpha=1-p.age/p.life;ctx.fillStyle=p.col;ctx.fillRect(Math.round(p.x),Math.round(p.y),p.sz,p.sz)}ctx.globalAlpha=1;
  for(const n of nums){const k=n.age/900;ctx.save();ctx.globalAlpha=1-Math.max(0,k-.6)/.4;ctx.textAlign='center';ctx.lineWidth=4;ctx.strokeStyle='#0e0f1d';
    if(n.kind==='name'){ctx.font=`700 ${Math.round(6.5*SC)}px "Pixelify Sans",monospace`;const y=n.y-k*8*SC;ctx.strokeText(n.v,n.x,y);ctx.fillStyle=n.col;ctx.fillText(n.v,n.x,y);ctx.restore();continue}
    ctx.font=`700 ${Math.round((n.kind==='se'?11:8)*SC)}px "Pixelify Sans",monospace`;const y=n.y-k*22*SC;ctx.strokeText(n.v,n.x,y);
    ctx.fillStyle=n.kind==='se'?'#ffcd75':n.kind==='nv'?'#94b0c2':n.kind==='in'?'#ef7d57':n.kind==='cr'?'#73eff7':n.kind==='heal'?'#a7f070':n.kind==='st'?'#d59bff':'#f4f4f4';ctx.fillText(n.v,n.x,y);ctx.restore()}
}

// ===== HUD =====
function hpCol(r){return r<.25?'var(--hp-low)':r<.5?'var(--hp-mid)':'var(--hp)'}
function setPic(img,id,sh){const k=id+'|'+sh;if(img.dataset.k!==k){img.dataset.k=k;img.onerror=sh?()=>{img.onerror=null;img.src=portrait(id,false)}:null;img.src=portrait(id,sh)}}
function renderMoves(){const a=G.team[G.active],el=$('moves');if(!a){el.innerHTML='';return}const ms=movesOf(a),nx=nextMoves(a);
  let h=ms.map(k=>{const [n,t,kind]=MV[k];return `<button class="mv win" data-mv="${k}"><span class="ty" style="background:${TYPE_COLOR[t]}"></span>${n}<small>${KIND_PT[kind]}</small><span class="cdv" data-cdv="${k}"></span><span class="s" data-cds="${k}"></span></button>`}).join('');
  for(let i=0;ms.length+i<4&&nx[i];i++){const [k,l]=nx[i];h+=`<button class="mv win" disabled><span class="ty" style="background:${TYPE_COLOR[MV[k][1]]}"></span>${MV[k][0]}<small>Nv ${l}</small></button>`}
  el.innerHTML=h}
function castManual(k){if(!me||meDeadT>0)return;const a=active();if(!a)return;if(cdOf(me.u,k)>0){toast('Ainda recarregando');return}
  if(MV[k][2]==='heal'&&a.hp>=calc(a).hp){toast('HP cheio');return}
  if(needRange(k)>0&&!me.target){toast('Sem alvo por perto');return}
  me.pending=k}
function hud(){
  {const n=claimable(),b=$('qbadge');b.style.display=n?'block':'none';b.textContent=n;
   const c=$('coach'),on=G.tut>=1&&G.tut<=3&&G.team.length;c.style.display=on?'flex':'none';$('feed').style.visibility=on?'hidden':'visible';if(on)$('coachTxt').textContent=TUT[G.tut];
   document.querySelector('[data-tab="mapa"]').classList.toggle('pulse',G.tut===3)}
  $('gold').textContent=Math.floor(G.gold).toLocaleString('pt-BR');
  $('balls').textContent=G.balls[G.auto.ball];const bi=icon(BALLS[G.auto.ball].f);if($('icBall').dataset.s!==bi){$('icBall').dataset.s=bi;$('icBall').src=bi}
  {const bp=G.boss[bossKey()]||0,bt=wilds.some(w=>w.boss)?'Chefe em campo':`Chefe em ${Math.max(0,BOSS_N-bp)}`;$('area').innerHTML=`${BIOMES[G.biome].n}<small>Faixa ${G.tier+1}, Nv ${BIOMES[G.biome].tiers[G.tier][0]} a ${BIOMES[G.biome].tiers[G.tier][1]}. ${bt}</small>`}
  const a=G.team[G.active];
  if(a){const c=calc(a),r=a.hp/c.hp;setPic($('aPic'),a.id,a.shiny);$('aName').innerHTML=(a.shiny?'★ ':'')+S[a.id].n+(a.b?` <span class="boost">+${a.b}</span>`:'');$('aLv').textContent='Nv '+a.lvl;
    $('aHp').style.width=(r*100)+'%';$('aHp').style.background=hpCol(r);$('aXp').style.width=(100*a.xp/need(a.lvl))+'%';$('aHpT').textContent=Math.ceil(a.hp)+'/'+c.hp}
  if(dirty){renderMoves()}
  document.querySelectorAll('[data-cdv]').forEach(e=>{const k=e.dataset.cdv,c=cdOf(meU,k),tot=MV[k][4]*1000;e.style.height=(c>0?Math.min(100,100*c/tot):0)+'%';const s=e.nextElementSibling;s.textContent=c>0?Math.ceil(c/1000/G.speed)+'s':'';e.parentNode.classList.toggle('on',!!(me&&me.pending===k))});
  if(dirty){dirty=false;$('team').innerHTML=G.team.map((m,i)=>i===G.active?'':`<button class="mini ${m.hp<=0?'ko':''}" data-sw="${i}" aria-label="Trocar para ${S[m.id].n}"><img src="${portrait(m.id,m.shiny)}" alt=""><div class="bar"><i style="width:${100*m.hp/calc(m).hp}%;background:${hpCol(m.hp/calc(m).hp)}"></i></div></button>`).join('');save();if(openTab)sheetDirty=true}
  if(openTab&&sheetDirty&&performance.now()-sheetTouch>900&&performance.now()-sheetDrawn>1000){sheetDirty=false;sheetDrawn=performance.now();renderSheet()}
  else G.team.forEach((m,i)=>{const el=document.querySelector(`[data-sw="${i}"] i`);if(el){const r=m.hp/calc(m).hp;el.style.width=(r*100)+'%';el.style.background=hpCol(r)}});
  const t=me&&me.target;
  if(t){$('target').style.display='flex';setPic($('tPic'),t.id,t.shiny);$('tName').textContent=(t.boss?'Chefe ':'')+S[t.id].n;$('tLv').textContent='Nv '+t.lvl;const r=Math.max(0,t.hp/t.max);$('tHp').style.width=(r*100)+'%';$('tHp').style.background=hpCol(r)}else $('target').style.display='none';
  const c=corpses.find(x=>!x.throwing);
  if(c&&!G.auto.throw){$('throw').style.display='inline-flex';$('icThrow').src=icon(BALLS[G.auto.ball].f);$('throwTxt').textContent=`${S[c.id].n} ${Math.ceil(c.corpse/1000)}s`;$('throw').disabled=G.balls[G.auto.ball]<=0}else $('throw').style.display='none';
  const ce=$('center');if(center>0){ce.style.display='grid';ce.innerHTML=`<div>Centro Pokémon<small>Voltando em ${Math.ceil(center/1000/G.speed)}s</small></div>`}else ce.style.display='none';
  renderFeed();
}

// ===== painéis =====
let openTab=null,sheetDirty=false,sheetTouch=0,sheetDrawn=0;
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('#sheet'))sheetTouch=performance.now()},true);
const TITLES={missoes:'Missões',mapa:'Mapa',equipe:'Equipe',loja:'Loja',ajustes:'Ajustes'};
function setTab(t){if(t==='mapa')tutStep(3);openTab=t==='hunt'?null:t;document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));
  $('sheet').classList.toggle('open',!!openTab);$('scrim').style.display=openTab?'block':'none';if(openTab)renderSheet()}
function monRow(m,i,inTeam){const c=calc(m);return `<div class="mon win"><img src="${portrait(m.id,m.shiny)}" alt="">
  <div style="min-width:0"><div class="row"><span>${m.shiny?'★ ':''}${S[m.id].n}${m.b?` <span class="boost">+${m.b}</span>`:''}</span><span class="lv">Nv ${m.lvl}</span></div>
  <div class="bar" style="margin:4px 0"><i style="width:${100*m.hp/c.hp}%;background:${hpCol(m.hp/c.hp)}"></i></div>
  <div class="sub">${S[m.id].t.join(' / ')}, qualidade ${m.q.toFixed(2)}${(m.b||0)<5?`, fusão ${m.bx||0}/${BNEED[m.b||0]}`:', fusão máxima'}</div><div class="sub" style="margin-top:3px;color:var(--cream)">${movesOf(m).map(k=>MV[k][0]).join(', ')}</div>${(()=>{const n=nextMoves(m)[0];return n?`<div class="sub">Próximo: ${MV[n[0]][0]} no Nv ${n[1]}</div>`:''})()}</div>
  <div class="acts">${inTeam?`${i===G.active?'<span class="sub" style="text-align:center">Em campo</span>':`<button class="btn" data-sw="${i}" ${m.hp<=0?'disabled':''}>Usar</button>`}${G.team.length>1?`<button class="btn" data-dep="${i}">Guardar</button>`:''}${G.items.rare>0&&m.lvl<100?`<button class="btn y" data-rare="${i}">Doce raro</button>`:''}`
  :`<button class="btn" data-up="${i}" ${G.team.length>=5?'disabled':''}>Equipe</button>${mergeTarget(m)?`<button class="btn y" data-merge="${i}">Fundir</button>`:''}<button class="btn" data-sell="${i}">${sellPrice(m)}</button>`}</div></div>`}
const sellPrice=m=>Math.floor(m.lvl*25*m.q*(m.shiny?10:1));
function renderSheet(){
  $('sheetTitle').textContent=TITLES[openTab];const B=$('sheetBody');let h='';
  if(openTab==='missoes'){const D=daily();
    h+='<h3>Missões de hoje</h3>'+D.list.map((q,i)=>`<div class="quest win ${q.claimed?'done':''}"><div class="row"><span>${q.n}</span><span class="lv">${q.p.toLocaleString('pt-BR')}/${q.g.toLocaleString('pt-BR')}</span></div><div class="bar"><i style="width:${100*q.p/q.g}%;background:var(--gold)"></i></div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="sub">Prêmio: ${rwText(q.rw)}</span>${q.claimed?'<span class="sub">Pego</span>':q.done?`<button class="btn y" data-qd="${i}">Pegar</button>`:''}</div></div>`).join('')+'<p class="note">Novas missões à meia-noite.</p>';
    const open=METAS.filter(m=>!G.metas[m.id]),got=METAS.length-open.length;
    h+=`<h3>Metas</h3>`+open.slice(0,5).map(m=>{const ok=m.ok();return `<div class="quest win"><div class="row"><span>${m.n}</span></div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px"><span class="sub">Prêmio: ${rwText(m.rw)}</span>${ok?`<button class="btn y" data-qm="${m.id}">Pegar</button>`:''}</div></div>`}).join('')+(got?`<p class="note">${got} de ${METAS.length} metas concluídas.</p>`:'');
    const n=dexN(),tier=dexTier();h+=`<h3>Pokédex</h3><div class="quest win"><div class="row"><span>${n} espécies registradas</span><span class="lv">de ${Object.keys(S).length}</span></div><div class="bar"><i style="width:${100*(n%10)/10}%;background:var(--xp)"></i></div><span class="sub">Bônus atual: +${tier*2}% de XP e +${tier*10}% de chance de shiny. Próximo marco em ${10-n%10} ${10-n%10>1?'espécies':'espécie'}.</span></div>`}
  if(openTab==='mapa'){for(const k in BIOMES){h+=`<h3>${BIOMES[k].n}</h3><div class="biome">`+BIOMES[k].tiers.map((t,i)=>{const op=tierOpen(k,i),cur=G.biome===k&&G.tier===i;
      return `<button class="tier win ${cur?'cur':''}" data-go="${k}|${i}" ${op?'':'disabled'}><span><b>Faixa ${i+1}</b><br><span class="sub">${op?`Nv ${t[0]} a ${t[1]}`:`Libera no Nv ${t[0]-2}`}</span></span><span class="who">${t[2].map(id=>`<img src="${portrait(id)}" class="${G.dex[id]?'':'no'}" alt="${S[id].n}" title="${S[id].n}">`).join('')}</span></button>`}).join('')+'</div>'}}
  if(openTab==='equipe'){h+=`<h3>Equipe ${G.team.length}/5</h3>`+G.team.map((m,i)=>monRow(m,i,true)).join('');
    h+=`<h3>Depot ${G.depot.length}</h3>`+(G.depot.length?G.depot.map((m,i)=>monRow(m,i,false)).join(''):'<p class="note">Vazio. O que você capturar com a equipe cheia vem para cá.</p>');
    h+=`<p class="note" style="margin-top:10px">Pokédex: ${Object.keys(G.dex).length} de ${Object.keys(S).length}. Abates: ${G.kills}. Doces raros: ${G.items.rare}.</p><p class="note" style="margin-top:6px">Fundir um Pokémon repetido da mesma linha dá bônus de +1 a +5. Cada nível de bônus soma 8% em HP, ataque e defesa.</p>`}
  if(openTab==='loja'){h+=`<p class="note" style="margin-bottom:8px">Você tem ${Math.floor(G.gold).toLocaleString('pt-BR')} de ouro.</p>`;
    for(const k in BALLS)h+=`<div class="shop win"><img src="${icon(BALLS[k].f)}" alt=""><div><b>${BALLS[k].n}</b><div class="sub">Você tem ${G.balls[k]}</div></div><button class="btn y" data-buy="${k}" ${G.gold<BALLS[k].p*10?'disabled':''}>10 por ${BALLS[k].p*10}</button></div>`;
    h+=`<div class="shop win"><img src="${icon('potion')}" alt=""><div><b>Poção</b><div class="sub">Cura metade do HP. Você tem ${G.pots}</div></div><button class="btn y" data-buy="pot" ${G.gold<250?'disabled':''}>5 por 250</button></div>`}
  if(openTab==='ajustes'){const sw=(k,l,d)=>`<div class="opt"><div><b>${l}</b><div class="sub">${d}</div></div><button class="sw" role="switch" aria-checked="${G.auto[k]}" data-auto="${k}" aria-label="${l}"></button></div>`;
    h+=`<h3>Automação</h3><div class="win" style="padding:2px 10px">`+sw('hunt','Atacar sozinho','Procura o selvagem mais perto')+sw('moves','Usar golpes sozinho','Usa os golpes especiais quando ficam prontos')+sw('throw','Lançar bola sozinho','Joga no corpo assim que ele cai')+sw('merge','Fundir repetidas sozinho','Capturas repetidas fortalecem o Pokémon da mesma linha. Shiny nunca é fundido')+sw('sound','Som','Efeitos sonoros do jogo')+sw('pot','Usar poção','Abaixo de 35% de HP')+
      `<div class="opt"><div><b>Bola usada</b></div><div class="seg">${Object.keys(BALLS).map(k=>`<button class="btn" data-ball="${k}" aria-pressed="${G.auto.ball===k}" aria-label="${BALLS[k].n}"><img class="ico" src="${icon(BALLS[k].f)}" alt="">${G.balls[k]}</button>`).join('')}</div></div></div>`;
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
  if(d.mv)return castManual(d.mv);
  if(t.id==='sheetClose')return setTab('hunt');
  if(d.sw!==undefined){const i=+d.sw;if(G.team[i]&&G.team[i].hp>0&&center<=0&&meDeadT<=0){G.active=i;dirty=true}}
  else if(d.dep!==undefined){const i=+d.dep;const cur=G.team[G.active];const [m]=G.team.splice(i,1);G.depot.unshift(m);G.active=Math.max(0,G.team.indexOf(cur));dirty=true}
  else if(d.up!==undefined){if(G.team.length<5){const [m]=G.depot.splice(+d.up,1);G.team.push(m);dirty=true}}
  else if(d.merge!==undefined){const m=G.depot[+d.merge],tg=m&&mergeTarget(m);if(tg){G.depot.splice(+d.merge,1);mergeInto(tg,m,false)}}
  else if(d.rare!==undefined){const m=G.team[+d.rare];if(m&&G.items.rare>0&&m.lvl<100){G.items.rare--;gainXp(m,need(m.lvl)-m.xp);toast(`${S[m.id].n} subiu para o Nv ${m.lvl}`)}}
  else if(d.sell!==undefined){const m=G.depot[+d.sell];G.gold+=sellPrice(m);G.depot.splice(+d.sell,1);dirty=true}
  else if(d.buy){if(d.buy==='pot'){if(G.gold>=250){G.gold-=250;G.pots+=5}}else{const b=BALLS[d.buy];if(G.gold>=b.p*10){G.gold-=b.p*10;G.balls[d.buy]+=10;noBallWarned=false}}dirty=true}
  else if(d.go){const [b,i]=d.go.split('|');G.biome=b;G.tier=+i;wilds=[];corpses=[];balls=[];shots=[];slashes=[];timers=[];manualTarget=null;spawnT=300;buildBG();if(me){me.x=VW/2;me.y=VH*.6}dirty=true;setTab('hunt')}
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
cv.addEventListener('pointerdown',e=>{const r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  const c=corpses.find(c=>!c.throwing&&Math.hypot(c.x-x,c.y-6*SC-y)<20*SC);if(c){const k=G.balls[G.auto.ball]>0?G.auto.ball:Object.keys(BALLS).find(k=>G.balls[k]>0);if(k)throwAt(c,k);return}
  let best=null,bd=26*SC;for(const w of wilds){const d=Math.hypot(w.x-x,(w.y-8*SC)-y);if(d<bd){bd=d;best=w}}if(best){manualTarget=best;best.aggro=true}});
function openStarter(){$('stList').innerHTML=STARTERS.map(([r,ids])=>`<div class="region">${r}</div><div class="trio">${ids.map(id=>`<button class="pick win" data-st="${id}"><img src="${portrait(id)}" alt="">${S[id].n}</button>`).join('')}</div>`).join('');$('starter').style.display='flex'}

// ícones
$('icCoin').src=icon('amulet-coin');$('icQ').src=icon('lucky-egg');$('icBall').src=icon('poke-ball');$('icHunt').src=icon('exp-share');$('icMap').src=icon('town-map');$('icTeam').src=icon('poke-ball');$('icShop').src=icon('coin-case');$('icCfg').src=icon('max-repel');

new ResizeObserver(()=>{const ox=VW,oy=VH;resize();const kx=VW/ox,ky=VH/oy;for(const e of [me,...wilds,...corpses])if(e){e.x*=kx;e.y*=ky}}).observe($('stage'));
resize();
if(!G.team.length)openStarter();else{placeMe();runOffline()}
document.fonts&&document.fonts.ready.then(()=>dirty=true);
setInterval(save,5000);
requestAnimationFrame(tick);
