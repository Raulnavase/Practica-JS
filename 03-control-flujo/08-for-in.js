let user = {
    id: 1,
    name: 'Willy Rex',
    age: 25,
}

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'conejo'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}