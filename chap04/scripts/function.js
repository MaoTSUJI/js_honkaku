'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.01 function ---------------------------');
function getTriangle(base, height) {
    return base * height / 2;
}
console.log('三角形の面積: ' + getTriangle(5, 2));

// コンストラクター経由で定義する
var getTriangle1 = new Function('base', 'height', 'return base * height / 2');
console.log('三角形の面積: ' + getTriangle1(5, 2));

console.log('---------------------------');
console.log('4.04 function_literal ---------------------------');
// 関数リテラルを使ってた
// 匿名関数 or 無名関数と呼ばれる
var getTriangle4 = function(base, height) {
    return base * height / 2;
};

console.log('三角形の面積: ' + getTriangle4(5,2));

console.log('---------------------------');
console.log('4.05 function_arrow ---------------------------');
// アロー関数   関数リテラルよりシンプル
let getTriangle5 = (base, height) => {
    return base * height / 2;
}
// {return}を省略できる
let getTriangle51 = (base, height) => base * height / 2;
// 引数1つのときは、()を省略できる
let getCircle = radius => radius * radius * Math.PI;
// 引数がない場合は、()を省略できない
let show = () => console.log('こんにちは');
// オブジェクトリテラルを返すとき
let func = () => ({ hoge: 'ほげ' });
console.log(func());

console.log('---------------------------');
console.log('4.07 data ---------------------------');
var getTriangle7 = function(base, height) {
    return base * height / 2;
}
console.log(getTriangle7(5, 2));
getTriangle7 = 0;   // JavaScriptやと関数はデータ型の一種にあたるので。再代入可能。
console.log(getTriangle7);
console.log(getTriangle51);

console.log('---------------------------');
console.log('4.09 static ---------------------------');
console.log('三角形の面積: ' + getTriangle09(5, 2));
// ↑functionは静的な構造を宣言するためのキーワードなので、エラーは出ない
function getTriangle09 (base, height) {
    return base * height / 2;

}
console.log('---------------------------');
console.log('4.10 static2 ---------------------------');
console.log('三角形の面積: ' + getTriangle10(5, 2));
// 関数リテラルだと、エラー発生。
// 関数リテラルやFunctionコンストラクターは実行時(代入時）に評価される。
// 関数リテラル / Functionコンストラクターは先に記述する必要がある。
var getTriangle10 = function(base, height) {
    return base * height / 2;
}