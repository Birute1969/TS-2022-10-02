"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person1 = ['Birutė', 50];
        const person2 = ['Gediminas', 52];
        console.log(person1, person2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const friendship1 = [{
                name: 'Birutė',
                age: 50
            }, {
                name: 'Juodis',
                age: 5,
                breed: 'Poodle'
            }];
        console.log(friendship1);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[-8, 4], [3, 3], [6, 2]];
        const rightTriangle = [[0, 0], [4, 0], [4, 3]];
        console.log({
            triangle1,
            rightTriangle,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map