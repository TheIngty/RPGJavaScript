function definicjeGlobalne(){
  window.grajButton = document.getElementById('grajButton');
  window.bodyTag = document.body;
  window.turyUmiejetnosci = 0;
  window.tempSelect = 0;
  window.klasy = Array(Warrior,MageFire,MageIce,MageLightning,Archer,BladeDancer);
  window.SelectedClass = None;
  window.randEnemy = 'Default';
  window.klasaWybrana = false;
  window.cdSpell1 = 0;
  window.cdSpell2 = 0;
  window.cdDot1 = 0;
  window.cdDot2 = 0;
  window.cdBuff1 = 0;
  window.cdBuff2 = 0;
  window.lvlUpScreen = false;
}
function definicjaKlas(){
  //KlasyGracza
  window.None = {class: 'Brak',defaulthp: 100,hp: 100,sila: 0,obrona: 0,int: 0,szczescie: 0,img: 'PNG/Error.PNG',xp: 0,lvl: 1,wolne: 24, spell1: 'BRAK', spell2: 'BRAK', gold: 0}
  window.Warrior = {class: 'Wojownik',defaulthp: 100,hp: 100,sila: 8,obrona: 6,int: 0,szczescie: 2,img: 'PNG/Warrior.PNG',xp: 0,lvl: 1,wolne: 8, spell1: 'Amok', spell2: 'Blok', spell1img: 'PNG/amok.png', spell2img: 'PNG/shield.png',gold: 0}
  window.MageIce = {class: 'Mag Lodu',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 8,szczescie: 2,img: 'PNG/MageIce.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Iceball', spell2: 'Tarcza lodu', spell1img: 'PNG/iceball.png', spell2img: 'PNG/iceshield.png', gold: 0}
  window.MageFire = {class: 'Mag Ognia',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 9,szczescie: 2,img: 'PNG/MageFire.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Fireball', spell2: 'Deszcz ognia', spell1img: 'PNG/fireball.png', spell2img: 'PNG/meteor.png',gold: 0}
  window.MageLightning = {class: 'Mag Blyskawic',defaulthp: 60,hp: 60,sila: 1,obrona: 2,int: 6,szczescie: 2,img: 'PNG/MageLightning.PNG',xp: 0,lvl: 1,wolne: 5, spell1: 'Storm', spell2: 'Uderzenie pioruna', spell1img: 'PNG/storm.png', spell2img: 'PNG/lightning.png',gold: 0}
  window.Archer = {class: 'Lucznik',defaulthp: 70,hp: 70,sila: 9,obrona: 3,int: 2,szczescie: 5,img: 'PNG/Archer.PNG',xp: 0,lvl: 1,wolne: 4, spell1: 'Poison Arrow', spell2: 'Fire Arrow', spell1img: 'PNG/poisonarrow.png', spell2img: 'PNG/firearrow.png',gold: 0}
  window.BladeDancer = {class: 'Tancerz Ostrzy',defaulthp: 80,hp: 80,sila: 10,obrona: 2,int: 2,szczescie: 6,img: 'PNG/BladeDancer.PNG',xp: 0,lvl: 1,wolne: 3, spell1: 'Double Hit', spell2: 'Triple Hit', spell1img: 'PNG/doublehit.png', spell2img: 'PNG/triplehit.png',gold: 0}
}
function start(){
  definicjaKlas();
  definicjeGlobalne();
  bodyTag.style.setProperty('background-image','url("PNG/Bg.png")');
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

  zmianaKlasy();

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
  lvlUpScreen=false;
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
  window.divAtak = document.createElement('div');
  window.divSpell1 = document.createElement('div');
  window.divSpell2 = document.createElement('div');
  window.cdDivSpell1 = document.createElement('div');
  window.cdDivSpell2 = document.createElement('div');
  window.placeHolderAtak = document.createElement('div');
  document.body.appendChild(divCzynnosc);
  divCzynnosc.appendChild(divAtak);
  divCzynnosc.appendChild(divSpell1);
  divCzynnosc.appendChild(divSpell2);
  divAtak.appendChild(buttonAtak);
  divAtak.appendChild(placeHolderAtak);
  placeHolderAtak.innerText = 'Podstawowy';
  divSpell1.appendChild(buttonSpell1);
  divSpell1.appendChild(cdDivSpell1);
  divSpell2.appendChild(buttonSpell2);
  divSpell2.appendChild(cdDivSpell2);
  divAtak.style.setProperty('display','inline-block');
  divSpell1.style.setProperty('display','inline-block');
  divSpell2.style.setProperty('display','inline-block');
  divCzynnosc.style.setProperty('display','inline-block');
  buttonAtak.innerHTML = '<img src="PNG/Atak.png" width="50px" height="50px"></img><br>' + 'Atak';
  buttonSpell1img = document.createElement('img');
  buttonSpell1.appendChild(buttonSpell1img);
  buttonSpell1img.setAttribute('src',SelectedClass.spell1img);
  buttonSpell1img.style.setProperty('width','50px');
  buttonSpell1img.style.setProperty('height','50px');
  buttonSpell1.innerHTML += '<br>' + SelectedClass.spell1;
  buttonSpell2img = document.createElement('img');
  buttonSpell2.appendChild(buttonSpell2img);
  buttonSpell2img.setAttribute('src',SelectedClass.spell2img);
  buttonSpell2img.style.setProperty('width','50px');
  buttonSpell2img.style.setProperty('height','50px');
  buttonSpell2.innerHTML += '<br>' + SelectedClass.spell2;
  buttonAtak.setAttribute('onClick','walcz()');
  buttonSpell1.setAttribute('onClick','spell1()');
  buttonSpell2.setAttribute('onClick','spell2()');
  updateCooldown();
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
  divHitLog.setAttribute('id','divHitLog');
  divHitLog.style.setProperty('width','30%');
  divHitLog.style.setProperty('margin-left','auto');
  divHitLog.style.setProperty('margin-right','auto');
  divHitLog.style.setProperty('background','#222222');
  //Wyswietl statystyki
  updateStatDisplay();
}
function updateStatDisplay(){
  //Aktualizuje wyswietlone statystyki przy wyborze postaci
  if(lvlUpScreen==true){
    profilWolne.innerHTML = '<b>Wolne: </b>' + SelectedClass.wolne;
  }
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
      hp: (Math.floor(Math.random() * (200 - 160)) + 160),
      sila: (Math.floor(Math.random() * (5 - 2)) + 2),
      obrona: (Math.floor(Math.random() * (5 - 2)) + 2),
      int: (Math.floor(Math.random() * (5 - 2)) + 2),
      szczescie: (Math.floor(Math.random() * (5 - 2)) + 2),
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
    lvlUpScreen = true;
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
    profilWolne.innerHTML = '<b>Wolne: </b>' + SelectedClass.wolne;
    updateStatDisplay();

    window.rozpocznijGreButton = document.createElement('button');
    divGracz.appendChild(rozpocznijGreButton);
    rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="30" height="30"></img>';
    rozpocznijGreButton.setAttribute('onclick','generujWalke()');
}
function walcz(){
  turaGracza();
  turaPrzeciwnika();
  updateStatDisplay();
  if(cdSpell1>0){
    cdSpell1--;
  }
  if(cdSpell2>0){
    cdSpell2--;
  }
  hpCheck();
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

  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function deszczognia(){
  hpCheck();
  if(cdSpell2==0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*350-300)+300)/100);
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' obrazen deszczem ognia' + '<br><br>';
    window.cdSpell2 = 10;
  }
  else if(cdSpell1>0){
    turaGracza();

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

  }
  updateStatDisplay();
}
function tarczalodu(){
  if(cdSpell2==0){
    window.cdBuff2 = 5;
    window.cdSpell2 = 7;
    SelectedClass.obrona += 8;
    divHitLog.innerHTML += 'Uzyles umiejetnosci Tarcza lodu<br>';
  }
  else if(cdSpell2>0){
    turaGracza();

  }
  turaPrzeciwnika();
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
  }
  turaPrzeciwnika();
  updateStatDisplay();
}
function piorun(){
  if(cdSpell2==0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*240-150)+150)/100);
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' obrazen piorunem' + '<br><br>';
    window.cdSpell2 = 5;
  }
  else if(cdSpell1>0){
    turaGracza();
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
  updateCooldown();
  if(cdSpell1>0){
    cdSpell1--;
  }
  if(cdSpell2>0){
    cdSpell2--;
  }
}
function spell2(){
  hpCheck();
  if(SelectedClass.class=="Wojownik"){
    blok();
  }
  else if(SelectedClass.class=="Mag Ognia"){
    deszczognia();
  }
  else if(SelectedClass.class=="Mag Lodu"){
    tarczalodu();
  }
  else if(SelectedClass.class=='Mag Blyskawic'){
    piorun();
  }
  else if(SelectedClass.class=="Lucznik"){
    firearrow();
  }
  else if(SelectedClass.class=="Tancerz Ostrzy"){
    tripleHit();
  }
  updateStatDisplay();
  updateCooldown();
  if(cdSpell1>0){
    cdSpell1--;
  }
  if(cdSpell2>0){
    cdSpell2--;
  }
}
function updateCooldown(){
  cdDivSpell1.innerText = 'CD: ' + cdSpell1;
  cdDivSpell2.innerText = 'CD: ' + cdSpell2;
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
      SelectedClass.gold += Math.floor((Math.random()*50-30)+30);
      cdDot1 = 0;
      cdDot2 = 0;

    if(SelectedClass.xp>((SelectedClass.lvl*SelectedClass.lvl)/2)){
      lvlup();
    }
    else{
      window.sklepButton = document.createElement('button');
      divCzynnosc.appendChild(sklepButton);
      sklepButton.innerHTML = '<img src="PNG/Shop.png" width="50" height="50"></img>';
      sklepButton.setAttribute('onclick','sklep()');
      divAtak.innerHTML = '';
      divSpell1.innerHTML = '';
      divSpell2.innerHTML = '';
      window.rozpocznijGreButton = document.createElement('button');
      divCzynnosc.appendChild(rozpocznijGreButton);
      rozpocznijGreButton.innerHTML = '<img src="PNG/Fist.png" width="50" height="50"></img>';
      rozpocznijGreButton.setAttribute('onclick','generujWalke()');
    }
  }
}
function turaGracza(){

  if(cdDot1>0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*150-50)+50)/100) + Math.floor(SelectedClass.sila*((Math.random()*90-80)+80)/100)
    Enemy.hp -= (nextHit).toFixed(0);
    Enemy.hp = Math.floor(Enemy.hp);
    divHitLog.innerHTML += 'Zadales przeciwnikowi ' + (nextHit).toFixed(0) + ' z obrazen w czasie' + '<br><br>';
    cdDot1--;
  }
  if(cdDot2>0){
    window.nextHit = Math.floor(SelectedClass.int*((Math.random()*150-50)+50)/100) + Math.floor(SelectedClass.sila*((Math.random()*90-80)+80)/100)
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
  updateCooldown();
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
    updateStatDisplay();
  }
}
function silamin(){
  if(SelectedClass.sila>0){
    if(SelectedClass.class == "Wojownik" && SelectedClass.sila > 8){
      SelectedClass.wolne += 1;
      SelectedClass.sila -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Lucznik" && SelectedClass.sila > 9){
      SelectedClass.wolne += 1;
      SelectedClass.sila -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Tancerz Ostrzy" && SelectedClass.sila > 10){
      SelectedClass.wolne += 1;
      SelectedClass.sila -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Mag Ognia" || SelectedClass.class == "Mag Lodu" || SelectedClass.class == "Mag Blyskawic")
    {
      if(SelectedClass.sila > 0){
        SelectedClass.wolne += 1;
        SelectedClass.sila -= 1;
        updateStatDisplay();
      }
    }
  }
}
function obronaadd(){
  if(SelectedClass.obrona<10&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.obrona += 1;
    updateStatDisplay();
  }
}
function obronamin(){
  if(SelectedClass.obrona>0){
    if(SelectedClass.class == "Wojownik" && SelectedClass.obrona > 6){
      SelectedClass.wolne += 1;
      SelectedClass.obrona -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Lucznik" && SelectedClass.obrona > 3){
      SelectedClass.wolne += 1;
      SelectedClass.obrona -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Tancerz Ostrzy" && SelectedClass.obrona > 2){
      SelectedClass.wolne += 1;
      SelectedClass.obrona -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Mag Ognia" || SelectedClass.class == "Mag Lodu" || SelectedClass.class == "Mag Blyskawic")
    {
      if(SelectedClass.obrona > 2){
        SelectedClass.wolne += 1;
        SelectedClass.obrona -= 1;
        updateStatDisplay();
      }
    }
  }
}
function intadd(){
  if(SelectedClass.int<100&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.int += 1;
    updateStatDisplay();
  }
}
function intmin(){
  if(SelectedClass.int>0){
    if(SelectedClass.class == "Wojownik" && SelectedClass.int > 0){
      SelectedClass.wolne += 1;
      SelectedClass.int -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Lucznik" && SelectedClass.int > 2){
      SelectedClass.wolne += 1;
      SelectedClass.int -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Tancerz Ostrzy" && SelectedClass.int > 2){
      SelectedClass.wolne += 1;
      SelectedClass.int -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Mag Ognia" || SelectedClass.class == "Mag Lodu" || SelectedClass.class == "Mag Blyskawic")
    {
      if(SelectedClass.int > 6){
        SelectedClass.wolne += 1;
        SelectedClass.int -= 1;
        updateStatDisplay();
      }
    }
  }
}
function szczescieadd(){
  if(SelectedClass.szczescie<20&&SelectedClass.wolne>0){
    SelectedClass.wolne -= 1;
    SelectedClass.szczescie += 1;
    updateStatDisplay();
  }
}
function szczesciemin(){
  if(SelectedClass.szczescie>0){
    if(SelectedClass.class == "Wojownik" && SelectedClass.szczescie > 2){
      SelectedClass.wolne += 1;
      SelectedClass.szczescie -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Lucznik" && SelectedClass.szczescie > 5){
      SelectedClass.wolne += 1;
      SelectedClass.szczescie -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Tancerz Ostrzy" && SelectedClass.szczescie > 6){
      SelectedClass.wolne += 1;
      SelectedClass.szczescie -= 1;
      updateStatDisplay();
    }
    else if(SelectedClass.class == "Mag Ognia" || SelectedClass.class == "Mag Lodu" || SelectedClass.class == "Mag Blyskawic")
    {
      if(SelectedClass.int > 2){
        SelectedClass.wolne += 1;
        SelectedClass.szczescie -= 1;
        updateStatDisplay();
      }
    }
  }
}
