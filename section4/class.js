"use strict";
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello My Name is " + this.name + ". I am " + this.age + " years old.");
    };
    return Person;
}());
var quill = new Person("Quill", 38);
quill.greeting();
quill.incrementAge();
quill.greeting();
