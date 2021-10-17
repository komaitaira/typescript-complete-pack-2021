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
