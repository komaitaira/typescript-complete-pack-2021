type Engineer = {
    name: string;
    role: string;
};

type Blogger = {
    name: string;
    follower: number;
};

// type EnginnerBlogger = Engineer & Blogger;
interface EnginnerBlogger extends Engineer, Blogger {}

const quill: EnginnerBlogger = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
const upperHello = toUpperCase("hello");

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: "dog" = "dog";
    speak() {
        console.log("bow-wow");
    }
}

class Bird {
    kind: "bird" = "bird";
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("fly");
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
