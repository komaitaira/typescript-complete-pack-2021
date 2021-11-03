interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
}

const human: Human = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}
let developer: Human;