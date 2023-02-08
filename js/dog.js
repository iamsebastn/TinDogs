import dogs from "./data";

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
}

const dog = new Dog(dogs[1])

console.log(dog)