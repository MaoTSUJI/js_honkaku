'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.53 is_nan ---------------------------');
console.log(isNaN('hoge'));
console.log(Number.isNaN('hoge'));  // Number型では、引数が数字でNaNのときに、trueとなる。


console.log('---------------------------');
console.log('3.54 encode ---------------------------');

var str = '!"#$%&()+-*/@~_|;:,.';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

console.log('---------------------------');
console.log('3.55 eval ---------------------------');
var str55 = 'console.log("eval関数")';
eval(str55);  // 与えられた文字列をJavaScriptのコードとして評価/実行します。
// 処理速度が遅い
// 任意のスクリプトを実行出来てしまう。(セキュリティリスク)

var obj = { hoge: 1, foo: 2 };
var prop = 'hoge';
// eval('console.log(obj.'+ prop + ')');

console.log(obj[prop]);  // ブラケット構文

var data = { "hoge": 1, "foo": 2 };
console.log(data.hoge);