let person1 = {
    name: 'Alex'
}
let person2 = {
    name: 'Alexis'
}
function namer() {
    return this.name;
}

// CHALLENGE - USE BIND TO RETURN EACH NAME
let person1NameBind = namer.bind(person1)()
let person2NameBind = namer.bind(person2)()

// console.log(`${person1NameBind} & ${person2NameBind}`);

let number = {
    x: 24,
    y: 22
}
let count = (function() {
    return this.x + this.y;
})
let countBind = count.bind(number)()
console.log(countBind)