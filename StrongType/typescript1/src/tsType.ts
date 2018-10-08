interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = { firstName: "Jane", lastName: "UserType" };

document.body.innerHTML = greeter(user3);