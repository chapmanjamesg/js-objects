console.log("We're learning about objects!");

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
