interface Person {
    name?: string;
    lastname?: string;
    age: Number;
}

let person1 : Person = {name: "Manu", age: 26}
let person2 : Person = {name: "Luis", age: 63}
let person3 : Person = {name: "Carlos", age: 50}
let person4 : Person = {name: "Pepe", age: 11}

let arrayOfPersons : Person[] = [person1,person2,person3,person4];

interface Sorting {
    merge?(data : Array<Person>): Array<Person>; 
    bubleSort(data : Array<Person>): Array<Person>; 
}

class SortingObject implements Sorting {
    bubleSort(data: Array<Person>): Array<Person> {
        let i: number;
        let j: number;

        for (i = 0; i < data.length ; i++) {
            for (j = 0; j < i; j++) {
                if (data[i].age < data[j].age ) {
                    let aux = data[i];
                    data[i] = data[j];
                    data[j] = aux;
                }
            }
        }
        return data;
    }
}

let sortedObj = new SortingObject;
console.log(sortedObj.bubleSort(arrayOfPersons));
