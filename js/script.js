function randomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

function randomName(corp) {
    let names = ["Алексей", "Владимир", "Григорий", "Александр", "Юрий", "Николай", "Роман", "Сергей", "Герман", "Михаил"],
        surname = ["Аникеев", "Быковский", "Волынов", "Гагарин", "Горбатко", "Комаров", "Леонов", "Николаев", "Титов", "Попович"],
        astronautName = names[randomNumber(0, names.length - 1)] + " " + surname[randomNumber(0, surname.length - 1)];

    if (checkName(astronautName, corp)){
        astronautName = randomName(corp);
    }

    return (astronautName);
  }

function randomFace(){
    let eyes = ["eyes1.png", "eyes2.png", "eyes3.png", "eyes4.png", "eyes5.png"],
        hair = ["hair1.png", "hair2.png", "hair3.png", "hair4.png", "hair5.png"],
        noses = ["noses1.png", "noses2.png", "noses3.png", "noses4.png", "noses5.png"],
        faces = ["faces1.png", "faces2.png", "faces3.png", "faces4.png", "faces5.png"],
        mouth = ["mouth1.png", "mouth2.png", "mouth3.png", "mouth4.png", "mouth5.png"],
        faseParams = {
            "eyes": eyes[randomNumber(0, eyes.length - 1)],
            "hair": hair[randomNumber(0, hair.length - 1)],
            "noses": noses[randomNumber(0, noses.length - 1)],
            "faces": faces[randomNumber(0, faces.length - 1)],
            "mouth": mouth[randomNumber(0, mouth.length - 1)]
        };
        return (faseParams);

}

function checkName(name, corp){
    for (let i = 0; i < corp.length; i++){
        if (name == corp[i].name){
            return true;
        }
    }
}

class Astronaut {

    constructor (name, age, learnability, faceParams){
        this.name = name;
        this.age = age;
        this.learnability = learnability;
        this.faceParams = faceParams;
      }
}

function createCorps (strength){
    let corp = [];

    for (let i = 0; i < strength; i++){
        let astronaut = new Astronaut(randomName(corp), randomNumber(25, 40), randomNumber(1, 10), randomFace())
        corp.push(astronaut);
    }

    return corp;
}

function createCorpsBlock (corp){
    let astronautsBlock = document.createElement('div');
    astronautsBlock.className = 'astronautsBlock';
    document.getElementById('main').appendChild(astronautsBlock);

    for (let i = 0; i < corp.length; i++){
        let astronaut = document.createElement('div');
        astronaut.className = 'astronautBlock';
        astronaut.innerHTML = `
        <div class = "foto">
            <div class = "eyes">
                <img src = "img/portraits/eyes/${corp[i].faceParams.eyes}">
            </div>
            <div class = "hair">
            <img src = "img/portraits/hair/${corp[i].faceParams.hair}">
            </div>
            <div class = "noses">
            <img src = "img/portraits/noses/${corp[i].faceParams.noses}">
            </div>
            <div class = "faces">
            <img src = "img/portraits/faces/${corp[i].faceParams.faces}">
            </div>
            <div class = "mouth">
            <img src = "img/portraits/mouthes/${corp[i].faceParams.mouth}">
            </div>
        </div>
        Имя: 
        ${corp[i].name} 
        Возраст: ${corp[i].age} 
        Обучаемость: ${corp[i].learnability}`
        astronautsBlock.appendChild(astronaut);
        console.log(corp[i].faceParams);
    }
}


let corpOne = createCorps(5);
createCorpsBlock(corpOne);
let rerollButton = document.querySelector(".reroll");
rerollButton.onclick = function(){
    document.getElementById('main').innerHTML = "";
    let corpOne = createCorps(5);
    createCorpsBlock(corpOne);
}