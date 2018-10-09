"use strict";
function greeterInterface(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Jane", lastName: "UserInterface" };
document.body.innerHTML = greeterInterface(user2);
