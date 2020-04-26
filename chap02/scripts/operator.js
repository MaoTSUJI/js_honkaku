　
// console.log((0.2 * 10) * 3 === (0.6 * 10));

console.log('2-25. 基本型と参照型の扱いの違い----------');

var x = 1;
var y = x;
x = 2;

console.log(y); // 2ではなく1が出力される


var data1 = [0,1,2];
var data2 = data1;
data1[0] = 5;
console.log(data2); // [5,1,2]

console.log('---------------------------');
console.log('2-26. 等価演算子----------');

console.log(1 == true);
var data11 = [1,2,3,4];
var data12 = [1,2,3,4];

console.log(data11 == data12);

console.log('---------------------------');
console.log('2-27. 同値演算子----------');

console.log('3.14E2' == 314);   // true
console.log('0x10' == 16);   // true
console.log('1' == 1);   // true

console.log('3.14E2' === 314);  // false
console.log('0x10' === 16);   // false
console.log('1' === 1);   // false

console.log('---------------------------');
console.log('2-29. 条件演算子----------');
var z = 80;
console.log(( z>= 70) ? '合格': '不合格');

console.log('---------------------------');
console.log('2-31. ショートカット演算----------');
if (x == 2) {console.log('こんにちは');}
x === 2 && console.log('こんにちは');

console.log('---------------------------');
console.log('2-33. delete演算子----------');
var ary = ['a', 'b', 'c'];
console.log(delete ary[0]);
console.log(ary);    // 要素が削除されるだけで、繰り上がるわけではない。
console.log(ary[0], ary[1]);    // インデックス番号は変わらない

var obj = {x:1, y:2};
console.log(delete obj.x);  // プロパティそのものが削除されるだけ
console.log(obj);           // プロパティが参照するオブジェクトが削除されるわけではない

var data111 = 1;
console.log(delete data111);    // 明示的に宣言された変数を削除することはできない
console.log(data111);

// data222 = 2;
// console.log(delete data222);
// console.log(data222);

console.log('---------------------------');
console.log('2-34. typeof演算子----------');
var num = 1;
console.log(typeof num);    // number
console.log(typeof obj);    // object
console.log(typeof ary);    // object