console.log("We're learning about objects!");

//lightning exercise one
const car = {
    color: "red",
    make: "ford",
    model: "mustang",
    year: 2015
}

const animalShelter = ['kippers', 'Jack', 'Gypsy', 'Angus', 'Syemour Bouts', 'sharky'];

const Jack = {
    hair: 'blonde',
    eyeColor: 'Blue/green',
    origin: 'adopted'
}
const JohnJr = {
    hair: 'dirty blonde',
    eyeColor: 'blue',
    origin: 'birth'
}
const Pat = {
    hair: 'grey/red',
    eyeColor: 'light blue',
    origin: 'maker'
}
const JohnSr = {
    hair: 'brown',
    eyeColor: 'hazel',
    origin: 'maker'
}

const familyMembers = [Jack, JohnJr, Pat, JohnSr];

//lightning exercise two
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`The wardrobe is ${wardrobe.height} inches tall and a width of ${wardrobe.width} inches and has a depth of ${wardrobe.depth} inches. It is made by ${wardrobe.manufacturer}. It is currently filled by ${wardrobe.contents}.`)
console.log('the wardrobe')
console.log('the wardrobe height', wardrobe.height)
console.log('the wardrobe manufacturer', wardrobe.manufacturer)
console.log('the wardrobe depth', wardrobe.depth)
console.log('the wardrobe height', wardrobe.height)
console.log('the wardrobe content', wardrobe.contents[0], wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4])

//lightning exercise three
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
//part one
console.log(`
The Empire State Building is ${empireStateBuilding.stories} stories tall which is ${empireStateBuilding.height} feet. 
The North South length is ${empireStateBuilding.northSouthLength}, and the East West Length is ${empireStateBuilding.eastWestLength}.
In total it equates out to be ${empireStateBuilding.squareFeet} square feet.
`)
//part two
console.log(`
The Empire State Building's address is ${empireStateBuilding["address"]}.
It was constructed in the year ${empireStateBuilding['constructionDate']}.
It cost $${empireStateBuilding['cost']}, the architects were ${empireStateBuilding['architect']}.
It is currently owned by ${empireStateBuilding['owner']}.
`)
