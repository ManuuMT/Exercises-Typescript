/*
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
*/
var SortingObject = /** @class */ (function () {
    /**
     * ! Initializators
     */
    function SortingObject(prop) {
        this.prop = prop;
    }
    /**
     * ! Methods
     */
    SortingObject.prototype.bubleSort = function (data) {
        var i;
        var j;
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < i; j++) {
                if (data[i].age < data[j].age) {
                    var aux = data[i];
                    data[i] = data[j];
                    data[j] = aux;
                }
            }
        }
        return data;
    };
    return SortingObject;
}());
var p1 = { name: "Manu", age: 26 };
var so1 = new SortingObject(p1);
var p2 = { name: "Luis", age: 63 };
var so2 = new SortingObject(p2);
var p3 = { name: "Carlos", age: 50 };
var so3 = new SortingObject(p3);
var p4 = { name: "Pepe", age: 11 };
var so4 = new SortingObject(p4);
var arrayOfPersons = [p1, p2, p3, p4];
console.log(so1.bubleSort(arrayOfPersons));
