'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.12 scope2 ---------------------------');
// varは省略できるが、全てグローバル変数やとみなされてしまう。
var scope = 'Global Variable';  // strictモードやとvarが必須

function getValue() {
    var scope = 'Local Variable';   // 省略すると、グローバル変数のscopeに上書きしてしまう。
    return scope;
}

console.log(getValue());
console.log(scope);

console.log('---------------------------');
console.log('4.13 scope3 ---------------------------');
var scope3 = 'Global Variable';

function getValue3() {
    console.log(scope3);
    // まだローカル変数scope3が有効になったが、確保されてるだけでvar が実行されてない。
    // つまり、未定義undefinedが出る。(=変数の巻き上げ , hoisting)

    var scope3 = 'Local Variable';
    return scope3;
}

console.log(getValue3());   // Local Variable
console.log(scope3);    // Global Variable

console.log('---------------------------');
console.log('4.14 reference ---------------------------');
var value = 10;

function decrementValue(value) {
    value--;
    return value;
}

console.log(decrementValue(100));
console.log(value);

console.log('---------------------------');
console.log('4.15 reference2 ---------------------------');
var value2 = [1,2,4,8,16];  // メモリ上のアドレス200とする

function decrementElement(value2) { // アドレス200が渡される
    value2.pop();   // アドレス200の値[1,2,4,8]
    return value2;  // アドレス200を返す
}

console.log(decrementElement(value2));
console.log(value2);    // アドレス200を出力 = [1,2,4,8]を出力

console.log('---------------------------');
console.log('4.16 scope ---------------------------');
if (true) {
    var i = 5;
}
console.log(i); // Javaとかやと、ブロックスコープが存在するからエラー出てしまう。
// jsの場合は、ブロックレベルのスコープが存在しない。

console.log('---------------------------');
console.log('4.18 block ---------------------------');
(function() {
    var j = 5;
    console.log(j);
}).call(this);  // その場で実行する。 thisは直前の無名関数のこと。
// ()内を擬似的にブロックスコープを実現できる。
// ここのcallを即時関数と呼ぶ

// console.log(j)  // スコープ外なので、エラー

console.log('---------------------------');
console.log('4.19 let ---------------------------');
if (true) {
    let k = 5;
}

// console.log(k); // エラー発生　undefined
// let命令で宣言された変数はブロックの外では無効になる。

console.log('---------------------------');
console.log('4.20 let_block ---------------------------');
{
    let l = 5;
    console.log(l);
}

// console.log(l); // 変数lはスコープ外なので、エラ-

console.log('---------------------------');
console.log('4.21 let_switch ---------------------------');
var m = 1;
switch(m) {
    case 0:
        let value21 = 'x:0';
    case 1:
        // let value21 = 'x:1';    // 変数名の重複
}

console.log('---------------------------');
console.log('4.22 scope4 ---------------------------');
var scope = 'Global Variable';

function checkScope() {
    var scope = 'Local Variable';

    var f_lit = function() { return scope; }
    console.log(f_lit());   // ローカルscope

    var f_con = new Function('return scope;');
    console.log(f_con());   // Functionコンストラクター配下の変数は、グローバルスコープとみなされる
}
checkScope();