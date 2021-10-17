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

// Union型を使って複数の型を使う
let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [21, 'hello'];

// Literal型を使うと特定の値のみが許容されるようになる
const apple = 'apple';


// またUnion型と組み合わせて特定の値のみを受け付けるようにもできる
// let clothSize: 'small' | 'medium' | 'large' = 'large';

// typeエイリアスを使って複雑な型を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'large';
const cloth: {
    color: string,
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}

// 関数に型を適応させる場合、引数の型注釈は必須（指定しないとany型になる）、戻り値の型注釈は任意（冗長にならないのであれば付けたほうがベター）
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// 関数の戻り値にvoidを使う。戻り値がない場合は基本的にはvoidを指定してあげる。
function sayHello(): void {
    console.log('Hello!');
}

console.log(sayHello());

// 関数式の場合は下記のように書く
const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
    return num1 + num2;
}

// アロー関数の場合
const doubleNumber: (num: number) => number = num => num * 2;