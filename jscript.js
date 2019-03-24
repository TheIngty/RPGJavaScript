function definicjeGlobalne(){
  window.grajButton = document.getElementById('grajButton');
  window.bodyTag = document.body;
  window.turyUmiejetnosci = 0;
  window.tempSelect = 0;
  window.klasy = Array(Warrior,MageFire,MageIce,MageLightning,Archer,BladeDancer);
  window.SelectedClass = Warrior;
  window.randEnemy = 'Default';
  window.klasaWybrana = false;
  window.cdSpell1 = 0;
  window.cdSpell2 = 0;
  window.cdDot1 = 0;
  window.cdDot2 = 0;
  window.cdBuff1 = 0;
  window.cdBuff2 = 0;
}
function definicjaKlas(){
  //KlasyGracza
  window.Warrior = {class: 'Wojownik',defaulthp: 100,hp: 100,sila: 8,obrona: 6,int: 1,szczescie: 2,img: '/PNG/Warrior.PNG',xp: 0,lvl: 1,wolne: 7, spell1: 'Amok', spell2: 'Blok', gold: 0}
  window.MageIce = {class: 'Mag Lodu',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 8,szczescie: 2,img: '/PNG/MageIce.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Iceball', spell2: 'DODAJTO', gold: 0}
  window.MageFire = {class: 'Mag Ognia',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 9,szczescie: 2,img: '/PNG/MageFire.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Fireball', spell2: 'DODAJTO', gold: 0}
  window.MageLightning = {class: 'Mag Blyskawic',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 6,szczescie: 2,img: '/PNG/MageLightning.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Storm', spell2: 'DODAJTO', gold: 0}
  window.Archer = {class: 'Lucznik',defaulthp: 70,hp: 70,sila: 9,obrona: 3,int: 2,szczescie: 5,img: '/PNG/Archer.PNG',xp: 0,lvl: 1,wolne: 4, spell1: 'Poison Arrow', spell2: 'Fire Arrow', gold: 0}
  window.BladeDancer = {class: 'Tancerz Ostrzy',defaulthp: 80,hp: 80,sila: 10,obrona: 2,int: 2,szczescie: 6,img: '/PNG/BladeDancer.PNG',xp: 0,lvl: 1,wolne: 3, spell1: 'Double Hit', spell2: 'Triple Hit', gold: 0}
}
function start(){
  definicjaKlas();
  definicjeGlobalne();
  bodyTag.style.setProperty('background','#000');
  bodyTag.style.setProperty('color','#fc0');
  bodyTag.style.setProperty('text-align','center');
  klasaWybrana = false;
  bodyTag.innerHTML = '';

  window.divGracz = document.createElement('div');
  document.body.appendChild(divGracz);
  window.profilImg = document.createElement('img');
  window.profilClass = document.createElement('div');
  window.profilHp = document.createElement('div');
  window.profilUm1 = document.createElement('div');
  window.profilUm2 = document.createElement('div');
  divGracz.appendChild(profilImg);
  divGracz.appendChild(profilClass);
  divGracz.appendChild(profilHp);
  divGracz.appendChild(profilUm1);
  divGracz.appendChild(profilUm2);

  window.divSila = document.createElement('div');
  window.profilSila = document.createElement('span');
  window.addSila = document.createElement('button');
  window.redSila = document.createElement('button');
  divGracz.appendChild(divSila);
  divSila.appendChild(profilSila);
  divSila.appendChild(addSila);
  divSila.appendChild(redSila);
  addSila.setAttribute('onclick','silaadd()');
  redSila.setAttribute('onclick','silamin()');
  addSila.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';
  redSila.innerHTML = '<img src="PNG/Red.png" width="20" height="20"></img>';


  window.divObrona = document.createElement('div');
  window.profilObrona = document.createElement('span');
  window.addObrona = document.createElement('button');
  window.redObrona = document.createElement('button');
  divGracz.appendChild(divObrona);
  divObrona.appendChild(profilObrona);
  divObrona.appendChild(addObrona);
  divObrona.appendChild(redObrona);
  addObrona.setAttribute('onclick','obronaadd()');
  redObrona.setAttribute('onclick','obronamin()');
  addObrona.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';
  redObrona.innerHTML = '<img src="PNG/Red.png" width="20" height="20"></img>';

  window.divInt = document.createElement('div');
  window.profilInt = document.createElement('span');
  window.addInt = document.createElement('button');
  window.redInt = document.createElement('button');
  divGracz.appendChild(divInt);
  divInt.appendChild(profilInt);
  divInt.appendChild(addInt);
  divInt.appendChild(redInt);
  addInt.setAttribute('onclick','intadd()');
  redInt.setAttribute('onclick','intmin()');
  addInt.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';
  redInt.innerHTML = '<img src="PNG/Red.png" width="20" height="20"></img>';

  window.divSzczescie = document.createElement('div');
  window.profilSzczescie = document.createElement('span');
  window.addSzczescie = document.createElement('button');
  window.redSzczescie = document.createElement('button');
  divGracz.appendChild(divSzczescie);
  divSzczescie.appendChild(profilSzczescie);
  divSzczescie.appendChild(addSzczescie);
  divSzczescie.appendChild(redSzczescie);
  addSzczescie.setAttribute('onclick','szczescieadd()');
  redSzczescie.setAttribute('onclick','szczesciemin()');
  addSzczescie.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';
  redSzczescie.innerHTML = '<img src="PNG/Red.png" width="20" height="20"></img>';

  window.profilWolne = document.createElement('div');
  divGracz.appendChild(profilWolne);
  updateStatDisplay();

  window.zmienKlaseButton = document.createElement('button');
  divGracz.appendChild(zmienKlaseButton);
  zmienKlaseButton.innerHTML = '<img src="PNG/Change.png" width="30" height="30"></img>';
  zmienKlaseButton.setAttribute('onclick','zmianaKlasy()');

  window.rozpocznijGreButton = document.createElement('button');
  divGracz.appendChild(rozpocznijGreButton);
  rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="30" height="30"></img>';
  rozpocznijGreButton.setAttribute('onclick','generujWalke()');
}
function zmianaKlasy(){
  if(tempSelect==5){
    tempSelect=0;
  }
  else{
    tempSelect++;
  }
  SelectedClass = klasy[tempSelect];
  updateStatDisplay();
}
function generujWalke(){
  //Wylosuj przeciwnika
  losujEnemy();
  //Ustaw stan wyboru klasy
  klasaWybrana=true;
  // Wyczysc cale body
  bodyTag.innerHTML = ''
  //Generuj profil gracza
  window.divGracz = document.createElement('div');
  document.body.appendChild(divGracz);
  window.profilImg = document.createElement('img');
  window.profilClass = document.createElement('div');
  window.profilHp = document.createElement('div');
  window.profilSila = document.createElement('div');
  window.profilObrona = document.createElement('div');
  window.profilInt = document.createElement('div');
  window.profilSzczescie = document.createElement('div');
  window.profilXp = document.createElement('div');
  window.profilLvl = document.createElement('div');
  window.profilGold = document.createElement('div');
  divGracz.style.setProperty('display','inline-block');
  divGracz.style.setProperty('float', 'left');
  divGracz.appendChild(profilImg);
  divGracz.appendChild(profilClass);
  divGracz.appendChild(profilHp);
  divGracz.appendChild(profilSila);
  divGracz.appendChild(profilObrona);
  divGracz.appendChild(profilInt);
  divGracz.appendChild(profilSzczescie);
  divGracz.appendChild(profilXp);
  divGracz.appendChild(profilLvl);
  divGracz.appendChild(profilGold);
  //Wyswietl przyciski
  window.divCzynnosc = document.createElement('div');
  window.buttonAtak = document.createElement('button');
  window.buttonSpell1 = document.createElement('button');
  window.buttonSpell2 = document.createElement('button');
  document.body.appendChild(divCzynnosc);
  divCzynnosc.appendChild(buttonAtak);
  divCzynnosc.appendChild(buttonSpell1);
  divCzynnosc.appendChild(buttonSpell2);
  divCzynnosc.style.setProperty('display','inline-block');
  buttonAtak.innerHTML = '<img src="PNG/Attack.png"></img><br>' + 'Atak';
  buttonSpell1.innerHTML = '<img src="PNG/Skill1.png"></img><br>' + SelectedClass.spell1;
  buttonSpell2.innerHTML = '<img src="PNG/Skill2.png"></img><br>' + SelectedClass.spell2;
  buttonAtak.setAttribute('onClick','walcz()');
  buttonSpell1.setAttribute('onClick','spell1()');
  buttonSpell2.setAttribute('onClick','spell2()');
  //Generuj profil przeciwnika
  window.divEnemy = document.createElement('div');
  document.body.appendChild(divEnemy);
  window.enemyImg = document.createElement('img');
  window.enemyClass = document.createElement('div');
  window.enemyHp = document.createElement('div');
  window.enemySila = document.createElement('div');
  window.enemyObrona = document.createElement('div');
  window.enemyInt = document.createElement('div');
  window.enemySzczescie = document.createElement('div');
  divEnemy.style.setProperty('display','inline-block');
  divEnemy.style.setProperty('float', 'right')
  divEnemy.appendChild(enemyImg);
  divEnemy.appendChild(enemyClass);
  divEnemy.appendChild(enemyHp);
  divEnemy.appendChild(enemySila);
  divEnemy.appendChild(enemyObrona);
  divEnemy.appendChild(enemyInt);
  divEnemy.appendChild(enemySzczescie);
  //Historia walki
  window.divHitLog = document.createElement('div');
  bodyTag.appendChild(divHitLog);
  divHitLog.style.setProperty('width','70%');
  divHitLog.style.setProperty('margin-left','auto');
  divHitLog.style.setProperty('margin-right','auto');
  divHitLog.style.setProperty('background','#222222');
  //Wyswietl statystyki
  updateStatDisplay();
}
function updateStatDisplay(){
  //Aktualizuje wyswietlone statystyki przy wyborze postaci
  if(klasaWybrana==false){
    profilImg.setAttribute('src',SelectedClass.img);
    profilClass.innerHTML = '<b>Klasa: </b>' + SelectedClass.class;
    profilHp.innerHTML = '<b>HP: </b>' + SelectedClass.hp;
    profilUm1.innerHTML = '<b>Umiejetnosc 1: </b>' + SelectedClass.spell1;
    profilUm2.innerHTML = '<b>Umiejetnosc 2: </b>' + SelectedClass.spell2;
    profilSila.innerHTML = '<b>Sila: </b>' + SelectedClass.sila;
    profilObrona.innerHTML = '<b>Obrona: </b>' + SelectedClass.obrona;
    profilInt.innerHTML = '<b>Int: </b>' + SelectedClass.int;
    profilSzczescie.innerHTML = '<b>Szczescie: </b>' + SelectedClass.szczescie;
    profilWolne.innerHTML = '<b>Wolne: </b>' + SelectedClass.wolne;
  }
  else{
    //Aktualizuje wyswietlone statystyki po wyborze postaci
    profilImg.setAttribute('src',SelectedClass.img);
    profilClass.innerHTML = '<b>Klasa: </b>' + SelectedClass.class;
    profilHp.innerHTML = '<b>HP: </b>' + SelectedClass.hp;
    profilSila.innerHTML = '<b>Sila: </b>' + SelectedClass.sila;
    profilObrona.innerHTML = '<b>Obrona: </b>' + SelectedClass.obrona;
    profilInt.innerHTML = '<b>Int: </b>' + SelectedClass.int;
    profilSzczescie.innerHTML = '<b>Szczescie: </b>' + SelectedClass.szczescie;
    profilLvl.innerHTML = '<b>Lvl: </b>' + SelectedClass.lvl;
    profilXp.innerHTML = '<b>XP: </b>' + SelectedClass.xp;
    profilGold.innerHTML = '<b>Gold: </b>' + SelectedClass.gold;
    enemyImg.setAttribute('src',Enemy.img);
    enemyClass.innerHTML = '<b>Klasa: </b>' + Enemy.class;
    enemyHp.innerHTML = '<b>HP: </b>' + Enemy.hp;
    enemySila.innerHTML = '<b>Sila: </b>' + Enemy.sila;
    enemyObrona.innerHTML = '<b>Obrona: </b>' + Enemy.obrona;
    enemyInt.innerHTML = '<b>Int: </b>' + Enemy.int;
    enemySzczescie.innerHTML = '<b>Szczescie: </b>' + Enemy.szczescie;
  }
}
function sklep(){
  bodyTag.innerHTML = ''
  window.divGracz = document.createElement('div');
  bodyTag.appendChild(divGracz);
  window.profilImg = document.createElement('img');
  window.profilClass = document.createElement('div');
  window.profilHp = document.createElement('div');
  window.profilSila = document.createElement('div');
  window.profilObrona = document.createElement('div');
  window.profilInt = document.createElement('div');
  window.profilSzczescie = document.createElement('div');
  window.profilXp = document.createElement('div');
  window.profilLvl = document.createElement('div');
  window.profilGold = document.createElement('div');
  divGracz.style.setProperty('display','inline-block');
  divGracz.style.setProperty('float', 'left');
  divGracz.appendChild(profilImg);
  divGracz.appendChild(profilClass);
  divGracz.appendChild(profilHp);
  divGracz.appendChild(profilSila);
  divGracz.appendChild(profilObrona);
  divGracz.appendChild(profilInt);
  divGracz.appendChild(profilSzczescie);
  divGracz.appendChild(profilXp);
  divGracz.appendChild(profilLvl);
  divGracz.appendChild(profilGold);

  window.tableSklepDivMain = document.createElement('div');
  window.tableSklepItem1 = document.createElement('button');
  window.tableSklepItem2 = document.createElement('button');
  window.tableSklepItem3 = document.createElement('button');
  window.tableSklepItem4 = document.createElement('button');
  bodyTag.appendChild(tableSklepDivMain);
  tableSklepDivMain.style.setProperty('display','inline-block');
  tableSklepDivMain.style.setProperty('float', 'right');
  tableSklepDivMain.appendChild(tableSklepItem1);
  tableSklepDivMain.appendChild(tableSklepItem2);
  tableSklepDivMain.appendChild(tableSklepItem3);
  tableSklepDivMain.appendChild(tableSklepItem4);

  tableSklepItem1.innerHTML = '<img src="PNG/PotionHP.png" width="50" height="50"></img><br>'  + 'HP: 50<br> Gold: 40';
  tableSklepItem2.innerHTML = '<img src="PNG/Apple.png" width="50" height="50"></img><br>'  + 'HP: 20<br> Gold: 20';
  tableSklepItem3.innerHTML = '<img src="PNG/Banana.png" width="50" height="50"></img><br>'  + 'HP: 15<br> Gold: 15';
  tableSklepItem4.innerHTML = '<img src="PNG/Pear.png" width="50" height="50"></img><br>'  + 'HP: 10<br> Gold: 10';

  tableSklepItem1.setAttribute('onclick','potion()');
  tableSklepItem2.setAttribute('onclick','apple()');
  tableSklepItem3.setAttribute('onclick','banana()');
  tableSklepItem4.setAttribute('onclick','pear()');

  window.rozpocznijGreButton = document.createElement('button');
  divGracz.appendChild(rozpocznijGreButton);
  rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="30" height="30"></img>';
  rozpocznijGreButton.setAttribute('onclick','generujWalke()');
  updateStatDisplay();
}
function potion(){
  if(SelectedClass.gold>=40){
    SelectedClass.gold -= 40;
    SelectedClass.hp += 50;
    updateStatDisplay();
  }
}
function apple(){
  if(SelectedClass.gold>=20){
    SelectedClass.gold -= 20;
    SelectedClass.hp += 20;
    updateStatDisplay();
  }
}
function banana(){
  if(SelectedClass.gold>=15){
    SelectedClass.gold -= 15;
    SelectedClass.hp += 15;
    updateStatDisplay();
  }
}
function pear(){
  if(SelectedClass.gold>=10){
    SelectedClass.gold -= 10;
    SelectedClass.hp += 10;
    updateStatDisplay();
  }
}
function losujEnemy(){
  //Definicja przeciwnika
    window.Enemy = {
      class: 'DEFAULT',
      hp: (Math.floor(Math.random() * (80 - 40)) + 40),
      sila: (Math.floor(Math.random() * (8 - 2)) + 2),
      obrona: (Math.floor(Math.random() * (8 - 2)) + 2),
      int: (Math.floor(Math.random() * (8 - 2)) + 2),
      szczescie: (Math.floor(Math.random() * (8 - 2)) + 2),
      img: 'PNG/Error.png'
    }
    //Losowanie i dobor odpowiedniego png
    let temp = Math.floor(Math.random() * 4) + 1;
    if(temp==1){randEnemy = "Ork";Enemy.img = 'PNG/Orc.png';  }
    if(temp==2){randEnemy = "Harpia";Enemy.img = 'PNG/Harpy.png';}
    if(temp==3){randEnemy = "Goblin";Enemy.img = 'PNG/Goblin.png';}
    if(temp==4){randEnemy = "Meduza";Enemy.img = 'PNG/Medusa.png';}
    Enemy.class = randEnemy;
}
function lvlup(){
  //System zwiekszania statystyk przy wbiciu poziomu
    SelectedClass.xp = 0;
    SelectedClass.lvl++;
    SelectedClass.wolne = 3;
    bodyTag.innerHTML = '';

    window.divGracz = document.createElement('div');
    document.body.appendChild(divGracz);
    window.profilImg = document.createElement('img');
    window.profilClass = document.createElement('div');
    divGracz.appendChild(profilImg);
    divGracz.appendChild(profilClass);


    window.divSila = document.createElement('div');
    window.profilSila = document.createElement('span');
    window.addSila = document.createElement('button');
    divGracz.appendChild(divSila);
    divSila.appendChild(profilSila);
    divSila.appendChild(addSila);
    addSila.setAttribute('onclick','silaadd()');
    addSila.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';


    window.divObrona = document.createElement('div');
    window.profilObrona = document.createElement('span');
    window.addObrona = document.createElement('button');
    divGracz.appendChild(divObrona);
    divObrona.appendChild(profilObrona);
    divObrona.appendChild(addObrona);
    addObrona.setAttribute('onclick','obronaadd()');
    addObrona.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';

    window.divInt = document.createElement('div');
    window.profilInt = document.createElement('span');
    window.addInt = document.createElement('button');
    divGracz.appendChild(divInt);
    divInt.appendChild(profilInt);
    divInt.appendChild(addInt);
    addInt.setAttribute('onclick','intadd()');
    addInt.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';

    window.divSzczescie = document.createElement('div');
    window.profilSzczescie = document.createElement('span');
    window.addSzczescie = document.createElement('button');
    divGracz.appendChild(divSzczescie);
    divSzczescie.appendChild(profilSzczescie);
    divSzczescie.appendChild(addSzczescie);
    addSzczescie.setAttribute('onclick','szczescieadd()');
    addSzczescie.innerHTML = '<img src="PNG/Add.png" width="20" height="20"></img>';

    window.profilLvl = document.createElement('div');
    window.profilWolne = document.createElement('div');
    divGracz.appendChild(profilLvl);
    divGracz.appendChild(profilWolne);
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
    updateStatDisplay();

    window.rozpocznijGreButton = document.createElement('button');
    divGracz.appendChild(rozpocznijGreButton);
    rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="30" height="30"></img>';
    rozpocznijGreButton.setAttribute('onclick','generujWalke()');
}
function walcz(){
  hpCheck();
  turaGracza();
  turaPrzeciwnika();
  updateStatDisplay();
}
function fireball(){
  hpCheck();
  if(cdSpell1==0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*300-240)+240)/100);
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' obrazen kula ognia' + '<br><br>';
    window.cdSpell1 = 5;
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function iceball(){
  hpCheck();
  if(cdSpell1==0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*200-140)+140)/100);
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Przeciwnik zamarza i nie wykonuje swojej tury<br>';
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' obrazen lodowa kula' + '<br><br>';
    window.cdSpell1 = 5;
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  updateStatDisplay();
}
function doubleHit(){
  if(cdSpell1==0){
    turaGracza();
    turaGracza();
    window.cdSpell1 = 5;
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function amok(){
  if(cdSpell1==0){
    window.cdBuff1 = 3;
    window.cdSpell1 = 5;
    SelectedClass.sila += 8;
    SelectedClass.hp += 20;
    divHitLog.innerHTML += 'Uzyles umiejetnosci Amok<br>';
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function blok(){
  if(cdSpell2==0){
    window.cdBuff2 = 3;
    window.cdSpell2 = 5;
    SelectedClass.obrona += 5;
    SelectedClass.hp += 10;
    divHitLog.innerHTML += 'Uzyles umiejetnosci Blok<br>';
  }
  else if(cdSpell2>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell2 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function poisonarrow(){
  if(cdSpell1==0){
    window.cdDot1 = 3;
    window.cdSpell1 = 5;
    divHitLog.innerHTML += 'Zatrules przeciwnika! <br><br>';
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function firearrow(){
  if(cdSpell2==0){
    window.cdDot2 = 3;
    window.cdSpell2 = 5;
    divHitLog.innerHTML += 'Podpaliles przeciwnika! <br><br>';
  }
  else if(cdSpell2>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell2 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function tripleHit(){
  if(cdSpell2==0){
    turaGracza();
    turaGracza();
    turaGracza();
    window.cdSpell2 = 10;
  }
  else if(cdSpell2>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell2 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function storm(){
  if(cdSpell1==0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*300-240)+240)/100);
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' obrazen burza pioronow' + '<br><br>';
    window.cdSpell1 = 10;
  }
  else if(cdSpell1>0){
    turaGracza();
    divHitLog.innerHTML += 'Pozostaly cooldown: ' + cdSpell1 + '<br><br>';
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function spell1(){
  hpCheck();
  if(SelectedClass.class=="Wojownik"){
    amok();
  }
  else if(SelectedClass.class=="Mag Ognia"){
    fireball();
  }
  else if(SelectedClass.class=="Mag Lodu"){
    iceball();
  }
  else if(SelectedClass.class=='Mag Blyskawic'){
    storm();
  }
  else if(SelectedClass.class=="Lucznik"){
    poisonarrow();
  }
  else if(SelectedClass.class=="Tancerz Ostrzy"){
    doubleHit();
  }
  updateStatDisplay();
}
function spell2(){
  hpCheck();
  if(SelectedClass.class=="Wojownik"){
    blok();
  }
  else if(SelectedClass.class=="Mag Ognia"){

  }
  else if(SelectedClass.class=="Mag Lodu"){

  }
  else if(SelectedClass.class=='Mag Blyskawic'){

  }
  else if(SelectedClass.class=="Lucznik"){
    firearrow();
  }
  else if(SelectedClass.class=="Tancerz Ostrzy"){
    tripleHit();
  }
  updateStatDisplay();
}
function hpCheck(){
  //Sprawdzamy HP gracza
  if(SelectedClass.hp<=0){
    SelectedClass.xp = 1;
    document.body.innerHTML = 'GAME OVER';
  }
  //Sprawdzamy HP przeciwnika
  if(Enemy.hp<=0){
      SelectedClass.xp += 0.25;
      SelectedClass.gold += Math.floor((Math.random()*30-10)+10);

    if(SelectedClass.xp>((SelectedClass.lvl*SelectedClass.lvl)/2)){
      lvlup();
    }
    else{
      window.sklepButton = document.createElement('button');
      divCzynnosc.appendChild(sklepButton);
      sklepButton.innerHTML = '<img src="PNG/Shop.png" width="50" height="50"></img>';
      sklepButton.setAttribute('onclick','sklep()');
      buttonAtak.setAttribute('hidden','hidden');
      buttonSpell1.setAttribute('hidden','hidden');
      buttonSpell2.setAttribute('hidden','hidden');
      window.rozpocznijGreButton = document.createElement('button');
      divCzynnosc.appendChild(rozpocznijGreButton);
      rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="50" height="50"></img>';
      rozpocznijGreButton.setAttribute('onclick','generujWalke()');
    }
  }
}
function turaGracza(){
  if(cdSpell1>0){
    cdSpell1--;
  }
  if(cdSpell2>0){
    cdSpell2--;
  }
  if(cdDot1>0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*150-50)+50)/100)
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' z obrazen w czasie' + '<br><br>';
    cdDot1--;
  }
  if(cdDot2>0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*150-50)+50)/100)
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' z obrazen w czasie' + '<br><br>';
    cdDot2--;
  }
  if(cdBuff1>0&&SelectedClass.class=="Wojownik"){
    cdBuff1--;
    if(cdBuff1==0){
      SelectedClass.sila -= 8;
    }
  }
  if(cdBuff2>0&&SelectedClass.class=="Wojownik"){
    cdBuff2--;
    if(cdBuff2==0){
      SelectedClass.obrona -= 5;
    }
  }
  window.critChance = SelectedClass.szczescie*5;
  window.critCheck= Math.random()*100;
  if(SelectedClass.class=="Wojownik"||SelectedClass.class=="Lucznik"||SelectedClass.class=="Tancerz Ostrzy"){
    window.nextHit = Math.floor(SelectedClass.sila*((Math.random()*120-80)+80)/100)
  }
  else{
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*200-120)+120)/100);
  }
  if(critCheck<=critChance){
    nextHit = nextHit * 1.5;
    divHitLog.innerHTML += '<b>Trafiasz krytycznie</b>' + '<br>';
  }
  window.obronaEnemy = (1-(Enemy.obrona/25));
  window.obronaGracz = (1-(SelectedClass.obrona/25));
  Enemy.hp -= (nextHit*obronaEnemy).toFixed(0);
  Enemy.hp = Math.floor(Enemy.hp);
  divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit*obronaEnemy).toFixed(0) + ' obrazen' + '<br><br>';
}
function turaPrzeciwnika(){
  window.critChance = Enemy.szczescie*5;
  window.critCheck= Math.random()*100;
  window.nextHit = Math.floor(Enemy.sila*((Math.random()*120-80)+80)/100);
  if(critCheck<=critChance){
    nextHit = nextHit * 1.5;
    divHitLog.innerHTML += '<b>' + Enemy.class + ' trafia krytycznie</b> <br>';
  }
  window.obronaEnemy = (1-(Enemy.obrona/25));
  window.obronaGracz = (1-(SelectedClass.obrona/25));
  SelectedClass.hp -= (nextHit*obronaGracz).toFixed(0);
  divHitLog.innerHTML += Enemy.class + ' zadaje tobie ' + (nextHit*obronaGracz).toFixed(0) + ' obrazen' + '<br><br>';
}
function silaadd(){
  if(SelectedClass.sila<100&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.sila += 1;
    profilSila.innerHTML = 'Sila: ' + SelectedClass.sila;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function silamin(){
  if(SelectedClass.sila>0){
    SelectedClass.wolne += 1;
    SelectedClass.sila -= 1;
    profilSila.innerHTML = 'Sila: ' + SelectedClass.sila;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function obronaadd(){
  if(SelectedClass.obrona<10&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.obrona += 1;
    profilObrona.innerHTML = 'Obrona: ' + SelectedClass.obrona;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function obronamin(){
  if(SelectedClass.obrona>0){
    SelectedClass.wolne += 1;
    SelectedClass.obrona -= 1;
    profilObrona.innerHTML = 'Obrona: ' + SelectedClass.obrona;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function intadd(){
  if(SelectedClass.int<100&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.int += 1;
    profilInt.innerHTML = 'Int: ' + SelectedClass.int;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function intmin(){
  if(SelectedClass.int>0){
    SelectedClass.wolne += 1;
    SelectedClass.int -= 1;
    profilInt.innerHTML = 'Int: ' + SelectedClass.int;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function szczescieadd(){
  if(SelectedClass.szczescie<20&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.szczescie += 1;
    profilSzczescie.innerHTML = 'Szczescie: ' + SelectedClass.szczescie;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
function szczesciemin(){
  if(SelectedClass.szczescie>0){
    SelectedClass.wolne += 1;
    SelectedClass.szczescie -= 1;
    profilSzczescie.innerHTML = 'Szczescie: ' + SelectedClass.szczescie;
    profilWolne.innerHTML = 'Wolne: ' + SelectedClass.wolne;
  }
}
