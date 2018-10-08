"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "Jane", lastName: "UserType" };
document.body.innerHTML = greeter(user3);
