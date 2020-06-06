'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.43 return_array ---------------------------');
function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);
// 複数の戻り値を個別の変数に代入する
let [, min] = getMaxMin(10, 35, -5, 78, 0);
// console.log(max);
console.log(min);

console.log('---------------------------');
console.log('4.44 recursive ---------------------------');
// 再帰関数
function factorial (n) {
    if(n != 0) { return n * factorial(n-1); }
    return 1;   // 終了点がないと無限ループしてしまう
}

console.log(factorial(5));

console.log('---------------------------');
console.log('4.45 heigher ---------------------------');
// 高階関数arrayWalkerを定義
// 配列dataを定義関数fの規則で、順番に処理するための高階関数
// ArrayオブジェクトのforEachで実装したようなもの
function arrayWalk(data, f) {
    for (var key in data) {
        f(data[key], key);
    }
}

// 配列を処理するためのユーザー定義関数
function showElement(value, key) {
    console.log(key + ':' + value);
}
var ary = [1,2,3,4,5];
arrayWalk(ary, showElement);

console.log('---------------------------');
console.log('4.46 heigher2 ---------------------------');

var result2 = 0;
function sumElement2(value, key) {
    // 与えられた配列要素で変数resultを加算
    result2 += value;
}
var ary2 = [1,2,3,4,5];
arrayWalk(ary, sumElement2);
console.log('合計値: ' + result2);
// 高階関数を利用して、詳細な機能は関数の利用者が自由に決められる。

console.log('---------------------------');
console.log('4.47 anonymous ---------------------------');
// heigherを匿名関数に置き換えたver
var ary47 = [1,2,3,4,5];
arrayWalk(
    ary,
    function (value, key) {
        console.log(key + ':' + value);
    }
)
// コードの可読性up, 意図せぬ名前の重複を回避できる