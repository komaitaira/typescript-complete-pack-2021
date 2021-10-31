"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello My Name is " + this.name);
    };
    return Person;
}());
var quill = new Person("Quill");
quill.greeting();
var anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
};
anotherQuill.greeting();
