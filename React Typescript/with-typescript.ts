const addNumbers = (a: number, b: number) => {
    return a + b;
};

const c: number = addNumbers(2, 2);

console.log(c);


//Onion Type

let age: number | string = 0;
age = "cero";


//Type inference
let text = "Text";

//One way

let persons: string[];

persons = ["Jesus", "Gabriel"];

let person: {
    name: string,
    age: number
}[];

person = [{ name: "Jesus", age: 32 }, { name: "Antonio", age: 32 }]


//Type Aliases

type Person = {
    name: string,
    age: number
}

let person2: Person;

person2 = {
    name: "Julian", age: 32
}

// Generics


