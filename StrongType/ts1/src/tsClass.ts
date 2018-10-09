class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterClass(person : Person) {
    return "Hello  " + person.firstName + " " + person.lastName;
}

let user1 = new Student("Jane", "M.", "UserType");

document.body.innerHTML = greeterClass(user1);