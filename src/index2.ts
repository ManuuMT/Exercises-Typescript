interface Person {
    name?: string;
    lastname?: string;
    age: Number;
}

interface Sorting {
    merge?(data : Array<Person>): Array<Person>; 
    bubleSort(data : Array<Person>): Array<Person>; 
}

class SortingObject implements Sorting {
    
    /**
     * ! Properties
     */

    prop : Person;
    
    /**
     * ! Initializators
     */

    constructor (prop: Person){
        this.prop = prop;
    }

    /**
     * ! Methods
     */

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

let p1 : Person = {name: "Manu", age: 26}
let so1 = new SortingObject(p1);

let p2 : Person = {name: "Luis", age: 63}
let so2 = new SortingObject(p2);

let p3 : Person = {name: "Carlos", age: 50}
let so3 = new SortingObject(p3);

let p4 : Person = {name: "Pepe", age: 11}
let so4 = new SortingObject(p4);


let arrayOfPersons : Person[] = [p1,p2,p3,p4];

console.log(so1.bubleSort(arrayOfPersons));