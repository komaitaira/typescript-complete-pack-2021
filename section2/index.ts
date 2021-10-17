// わざわざ明示的に型注釈をつけなくても型推論をしてくれるので、基本的にはつけなくても良い。
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

// オブジェクトに型をつける方法（こちらも基本的には明示的に型注釈をつける必要はない。tsの型推論に任せる）
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}

// 配列に型をつけるArray型はこのように記載する
const fruits = ['Apple', 'Banana', 'Grape'];

// Tuple型はこのように書く。このように書くことでindexに合った型を定義することができる。
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21); // pushで値を追加することはできる。
// ただし、bookという変数はあくまでも[string, number, boolean]の型なので、下記のように参照する時はエラーを出してくれる
console.log(book) // [ 'business', 1500, false, 21 ]
// console.log(book[3]) // これはエラーとなる

// enum型はこのような形で記載する
// enum CoffeeSize {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI'
// }

// このような形で記載もできる。この場合はそれぞれに数字が割り当てられる。文字列よりはメモリの節約になるので、わざわざ文字列じゃなくてもいい場合はこちらを使うといいかも
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.VENTI;