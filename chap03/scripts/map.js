'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.26 map ---------------------------');
let m = new Map();
m.set('dog', 'わんわん');
m.set('cat', 'にゃー');
m.set('mouse', 'ちゅー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

// キーを順に取得
for (let key of m.keys()) {
    console.log(key);
}
// 値を順に取得
for (let value of m.values()) {
    console.log(value);
}
// キー/値を順に取得
for (let [key, value] of m.entries()) {
    console.log(key, value);
}
m.delete('dog');
console.log(m);
m.clear();
console.log(m);


console.log('---------------------------');
console.log('3.29 map_obj ---------------------------');
var m1 = new Map();
var key = {};
m1.set(key, 'ほげ');
console.log(m1.get(key));

