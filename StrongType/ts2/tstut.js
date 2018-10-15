// Ex.
// --------------------------------------------------------------
// Ex.
// --------------------------------------------------------------
// Ex.
// --------------------------------------------------------------
// Ex.
// --------------------------------------------------------------
// Ex.
// --------------------------------------------------------------
// Ex.14
// --------------------------------------------------------------
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
// myFeeling = 1
document.write("myFeeling = " + myFeeling);
// // Ex.13
// // --------------------------------------------------------------
// function theSum(x,y,z): void {
//     document.write("Sum : " + (x+y+z)+ "<br/>");
// }
// var args = [4,5,6];
// theSum(4,5,8);
// // theSum(...args);
// // Ex.12
// // --------------------------------------------------------------
// var multStr = `I go on for 
// many lines <br/>`;
// document.write(multStr);
// document.write(`<b>${multStr}</b>`);
// // Ex.11
// // --------------------------------------------------------------
// var randVals = {x:1, y:2, z:3};
// var {x,y,z} = randVals;
// document.write(x+ y + z + "<br/>");
// [x,y,z] = [z,y,x];
// document.write("Switch : "+ x+ y + z + "<br/>");
// // Ex.10    Generic
// // --------------------------------------------------------------
// class GenericNumber<T> {
//     add: (val1: T, val2: T) => T;
// }
// var aNumber = new GenericNumber<number>();
// aNumber.add = function(x,y){return x+y;  };
// document.write("5 + 4 = "+ aNumber.add(5,4)+ " as number<br/>");
// var aString = new GenericNumber<string>();
// aString.add = function(x,y){return String(Number(x)+Number(y));  };
// document.write("5 + 4 = "+ aString.add("5","4")+ " as string<br/>");
// // Ex.9      - Interface and Generic
// // --------------------------------------------------------------
// interface Vehicle{
//     drive(): any;
// }
// class Car implements Vehicle{
//     constructor(private wheels: number) {            }
//     drive(): void{
//         document.write("The car drives with "+ this.wheels + " wheels<br/>");
//     }
// }
// class Bicycle implements Vehicle{
//     constructor(private wheels: number) {            }
//     drive(): void{
//         document.write("The bicycle drives with "+ this.wheels + " wheels<br/>");
//     }
// }
// var car = new Car(4);
// var bike = new Bicycle(2);
// car.drive();
// bike.drive();
// function GetType<T>(val: T): string {
//     return typeof(val);
// }
// var aStr = "A String";
// var aNum = 10;
// document.write(GetType(aStr) + "<br/>");
// document.write(GetType(aNum) + "<br/>");
// function GetWheels<w extends Vehicle>(veh: w) : number {
//     return veh.drive();
// }
// GetWheels(car);
// GetWheels(bike);
// // Ex.8
// // --------------------------------------------------------------
// class Animal {
//     public  favFood: string;
//     static numOfAnimals: number =0;
//     constructor(private name: string, private owner: string) {
//         Animal.numOfAnimals++;
//     }
//     ownerInfo(){
//         document.write(this.name + " is owned by "+ this.owner + "<br/>");
//     }
//     static howManyAnimals():number {
//         return Animal.numOfAnimals;
//     }
//     private _weight : number;
//     get weight() : number {
//         return this._weight;
//     }
//     set weight(v : number) {
//         this._weight = v;
//     }
// }
// var spot = new Animal("Spot", "Doug");
// spot.ownerInfo();
// spot.weight = 100;
// document.write("Spot's Weight is :  "+ spot.weight + "<br/>");
// document.write("# of Animals:  "+ Animal.howManyAnimals() + "<br/>");
// document.write("<br/>");
// class Dog extends Animal {
//     constructor(name: string, owner: string) {
//         super(name, owner);
//         Dog.numOfAnimals++;
//     }
// }
// var grover= new Dog("Grover", "Jimmy");
// document.write("# of Animals:  "+ Animal.howManyAnimals() + "<br/>");
// document.write("Is a Dog an Animal : "+ (grover instanceof Animal) + "<br/>");
// document.write("Does grover has a name : "+ ('name' in grover) + "<br/>");
// // Ex.7
// // --------------------------------------------------------------
// var sumAll = function(...nums: number[]): void{
//     var sum = nums.reduce((a, b)=> a + b, 0);
//     document.write("Sum = "+ sum + "<br/>");
// }
// sumAll(1,2,3,4,5);
// var addOne = (x)=>x+1;
// document.write("1 + 1 = "+ addOne(1) + "<br/>");
// // Ex.6
// // --------------------------------------------------------------
// var getSum = function (num1: number, num2: number): number {
//     return num1 + num2;
// }
// var theSum1: number = getSum(5,2);
// document.write("5 + 2 = "+ theSum1 + "<br/>");
// var getDiff = function(num1:number, num2 = 2, num3: number ): number{
//     if (typeof num3 !== undefined) {
//         return num1 - num2-num3;
//     }
//     return num1- num2;
// }
// document.write("5 + 2 = "+ getDiff(5) + "<br/>");
// document.write("5 + 2 = "+ getDiff(5,2,3) + "<br/>");
// // Ex.5
// // --------------------------------------------------------------
// var randArray = [5,6,7,8];
// for (var val in randArray) {
//     document.write(val + "<br/>");
// }
// var strArray = randArray.map(String);
// for (var val of strArray) {
//     document.write(val + "<br/>");
// }
// // Ex.4
// // --------------------------------------------------------------
// let sampLet = 123;
// if (true) {
//     let sampLet = 456;
// }
// document.write("sampLet : " + sampLet +"<br/>");
// var sampLet = 123;
// if (true) {
//     var sampLet = 456;
// }
// document.write("sampLet : " + sampLet +"<br/>");
// // Ex.3
// // --------------------------------------------------------------
// document.write("5 + 4 = " + (5+4) + "<br/>");
// document.write("5 - 4 = "  + (5-4) + "<br/>");
// document.write("5 * 4 = " + (5*4) + "<br/>");
// document.write("5 / 4 = " + (5/4) + "<br/>");
// document.write("5 % 4 = " + (5%4) + "<br/>");
// document.write("5 + String 2 = "+ (5+'2')+ "<br/><br/>");
// var randNum: number = 1;
// document.write("randNum++ = "+ randNum++ + "<br/>");
// document.write("++randNum = "+ ++randNum + "<br/>");
// document.write("randNum-- = "+ randNum-- + "<br/>");
// document.write("--randNum = "+ --randNum + "<br/>");
// Ex.2
// --------------------------------------------------------------
// var employess: string[] = ["Bob", "Sally", "Sam"];
// document.write(employess.toString() + "<br />");
// interface   SuperHero {
//     realName: String;
//     superName: String;
// }
// var superheroes: SuperHero[] = [];
// superheroes.push({
//     realName: 'Bruce Wayne',
//     superName: "Batman11"
// });
// document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
// Ex.1
// --------------------------------------------------------------
// var myName: string = "Darek222";
// var myAge : number  = 41;
// var canVote: boolean = true;
// var anything : any = "dog";
// anything = 2;
// document.getElementById("tsStuff").innerHTML = "My name is "+ myName;
// document.write("canVote is a " + typeof(canVote)+ "<br>");
// document.write("myName is a " + typeof(myName)+ "<br>");
// document.write("anything is a " + typeof(anything)+ "<br>");
// document.write("<br>");
// var strToNum: number = parseInt("5");
// document.write("strToNum is a " + typeof(strToNum)+ "<br>");
// document.write("<br>");
// const PI = 3.14159;
// document.write("PI is a " + typeof(PI)+ "<br>");
// document.write("<br>");
