/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type PersonTuple = [string, number];
  type Dog = {
    name: string,
    age: number,
    breed: 'Spaniel' | 'Poodle',
  };
  type Person = {
    name: string,
    age: number,
  };
  type FriendshipTuple = [Person, Dog];
  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person1: PersonTuple = ['Birutė', 50];
    const person2: PersonTuple = ['Gediminas', 52];

    console.log(person1, person2);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const friendship1: FriendshipTuple = [{
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
    const triangle1: TriangleTuple = [[-8, 4], [3, 3], [6, 2]];
    const rightTriangle: TriangleTuple = [[0, 0], [4, 0], [4, 3]];

    console.log({
      triangle1,
      rightTriangle,
    });
  }
  console.groupEnd();

}
console.groupEnd();