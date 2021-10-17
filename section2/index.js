// わざわざ明示的に型注釈をつけなくても型推論をしてくれるので、基本的にはつけなくても良い。
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// オブジェクトに型をつける方法（こちらも基本的には明示的に型注釈をつける必要はない。tsの型推論に任せる）
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 配列に型をつけるArray型はこのように記載する
var fruits = ['Apple', 'Banana', 'Grape'];
// Tuple型はこのように書く。このように書くことでindexに合った型を定義することができる。
var book = ['business', 1500, false];
book.push(21); // pushで値を追加することはできる。
// ただし、bookという変数はあくまでも[string, number, boolean]の型なので、下記のように参照する時はエラーを出してくれる
console.log(book); // [ 'business', 1500, false, 21 ]
// console.log(book[3]) // これはエラーとなる
// enum型はこのような形で記載する
// enum CoffeeSize {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI'
// }
// このような形で記載もできる。この場合はそれぞれに数字が割り当てられる。文字列よりはメモリの節約になるので、わざわざ文字列じゃなくてもいい場合はこちらを使うといいかも
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.VENTI;
// Union型を使って複数の型を使う
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
// Literal型を使うと特定の値のみが許容されるようになる
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
// 関数に型を適応させる場合、引数の型注釈は必須（指定しないとany型になる）、戻り値の型注釈は任意（冗長にならないのであれば付けたほうがベター）
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値にvoidを使う。戻り値がない場合は基本的にはvoidを指定してあげる。
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello());
// 関数式の場合は下記のように書く
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// アロー関数の場合
var doubleNumber = function (num) { return num * 2; };
