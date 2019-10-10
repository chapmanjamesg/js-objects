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
//part two, didn't read the question fully...dumb ass...
console.log(`
The Empire State Building's address is ${empireStateBuilding["address"]}.
It was constructed in the year ${empireStateBuilding['constructionDate']}.
It cost $${empireStateBuilding['cost']}, the architects were ${empireStateBuilding['architect']}.
It is currently owned by ${empireStateBuilding['owner']}.
`)
//part two 
const addressKey = "address"
const constructionKey = 'constructionDate'
const ownerKey = "owner"
const costKey = 'cost'
const architectKey = "architect"

console.log(`The empire State building is at ${empireStateBuilding[addressKey]}.
it was built in ${empireStateBuilding[constructionKey]}. It cost $${empireStateBuilding[costKey]} it was built by 
${empireStateBuilding[architectKey]}. It is owned by ${empireStateBuilding[ownerKey]}.`)

//lightning exercise four

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

//part 1

console.log('part time instructors', nashvilleSoftwareSchool.instructors.partTime,
'full time instructors', nashvilleSoftwareSchool.instructors.fullTime
)

//using variables
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime
const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for(let i = 0; i < partTimeInstructors.length; i++){
    console.log(partTimeInstructors[i])
}

for(let i = 0; i < fullTimeInstructors.length; i++){
    console.log(fullTimeInstructors[i])
}

//for in loop

const instructorsObj = nashvilleSoftwareSchool.instructors

for(let key in instructorsObj){
   // console.log(instructorsObj['key'])
   const instructorsArray = instructorsObj[key]
   for(let i = 0; i < fullTimeInstructors.length; i++){
    console.log(fullTimeInstructors[i])
}
}

//part 2

console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchool.instructors.fullTime[4])

//instructors example

console.log('Andy: ', fullTimeInstructors[fullTimeInstructors.length -1])
console.log('Zoe: ', partTimeInstructors[0])