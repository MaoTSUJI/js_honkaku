'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('2-45. switch文 フォールスルー----------');
var rank = 'B';
switch(rank) {
    case 'A':
    case 'B':
    case 'C':
        console.log('合格!');
        break;
    case 'D':
        console.log('不合格!');
        break;
}   // 結果：合格!
// いずれかの値に合致するブロックを表現したいと場合は、空のcaseブロックを列記する。
// switch文の比較は「===」演算子で比較する。

console.log('---------------------------');
console.log('2-51. for...in命令----------');
var data51 = { apple:150, orange:100, banana: 120};
for (var key in data51) {
    console.log(key + '=' + data51[key]);
}

console.log('---------------------------');
console.log('2-52. forin_array----------');
var data52 = ['apple', 'banana', 'orange'];
for (var key in data52) {
    console.log(data52[key]);
}

console.log('---------------------------');
console.log('2-53. forin_array_ng----------');
var data53 = ['apple', 'orange', 'banana'];
Array.prototype.hoge = function() {}    // 配列の拡張
for (var key in data53) {   // 処理の順序が保証されない
    console.log(data53[key]);   // 配列の場合だとコードがあまりシンプルにならない
}

console.log('---------------------------');
console.log('2-54. forin_array_ok----------');
for (var i=0, len=data53.length; i < len; i++) {    // こっちのがパフォーマンスが良い
    console.log(data53[i]);
}

console.log('---------------------------');
console.log('2-55. forof----------');
for (var value of data52) {    // forinではインデックス名が渡されてるが、forofでは値を列挙
    console.log(value);
}

console.log('---------------------------');
console.log('2-60. try----------');
var i = 1;
try {
    i = i * j;  // 例外発生 try-catchがない場合、ここでスクリプトが停止してしまう。
} catch(e) {
    console.log(e.message); // もし例外が発生したら、ここの処理を実行
} finally {
    // finallyは省略可
    console.log('処理は完了しました。');    // エラー有無に関わらず最終的に実行される処理
}

console.log('---------------------------');
console.log('2-61. throws----------');
var x = 1;
var y = 0;
try {
    if (y === 0) {
        // throwを使っtえ、自分で明示的に例外を発生させることも可能。
         throw new Error('０で除算しようとしました');
    }
    var z = x/y;
} catch(e) {
    console.log(e.message);
}
// 例外処理はオーバーヘッドが大きいので、ループ内では避けるべき