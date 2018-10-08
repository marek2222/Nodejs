interface Person {
    firstName: string;
    lastName: string;
}

function greeterInterface(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Jane", lastName: "UserInterface" };

document.body.innerHTML = greeterInterface(user2);