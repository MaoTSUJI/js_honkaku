'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3-08. nan ---------------------------');
console.log(Number.NaN === Number.Nan);
// Nanは自分自身を含むすべての値と等しくない

console.log('---------------------------');
console.log('3-09. safe_integer ---------------------------');
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

console.log('3-10. number ---------------------------');
var num1 = 255;
console.log(num1.toString(16));

var num2 = 123.45678;
console.log(num2.toExponential(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));

console.log('---------------------------');
console.log('3-10. parse ---------------------------');
var n = '123xxx';
console.log(Number(n)); // 文字列混在の数値を解析できない
console.log(Number.parseFloat(n));  // 数値だけを取り込む
console.log(Number.parseInt(n));
console.log('---');
var d = new Date();
console.log(Number(d)); // Dateオブジェクトを経過ミリ秒に換算した値
console.log(Number.parseFloat(d));  // 解析出来ない
console.log(Number.parseInt(d));
console.log('---');
var h = '0x10'; // 整数・浮動小数点リテラルを解析した場合
console.log(Number(h)); // 16進数とみなして返す
console.log(Number.parseFloat(h));  // 数値文字列混在は文字列とみなしてしまう
console.log(Number.parseInt(h)); // 16進数とみなして返す
 // 16進数とみなして返す
 console.log('---');
 var b = '0b11';
console.log(Number(b)); // 2進数として返す
console.log(Number.parseFloat(b));
console.log(Number.parseInt(b));  // 2進数は解析出来ない
var e = '1.01e+2';
console.log(Number(e)); // 2進数として返す
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));  // e+2をサプレスする

console.log('---------------------------');
console.log('3-12. convert ---------------------------');
console.log(typeof(123 + ''));  // string
console.log(typeof('123' - 0))  // number
// + 演算子が右側の''を優先して、123を強制的に文字列にする
// - 演算子がオペランドが数値やったとき、123を数値に変換

console.log('3-13. convert2 ---------------------------');
var num = 123;
console.log(!!num);  // string