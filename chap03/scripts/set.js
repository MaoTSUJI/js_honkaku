'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.31 set ---------------------------');
let s = new Set();
s.add(10);
s.add(2);
s.add(100);
s.add(50);
s.add(50);

console.log(s.has(50));
console.log(s.size);

for (let val of s.values()) {
    console.log(val);
}

for (let val of s) {
    console.log(val);
}

// 値100を破棄
s.delete(100);
console.log(s.size);
// 値をすべてクリア
s.clear();
console.log(s.size);

s.add(NaN);
s.add(NaN);
console.log(s.size);

s.add({});
s.add({});
console.log(s.size);
console.log(s);

// WeakMapとWeakSet

// let john = {name: "John"};
// // オブジェクトへはアクセス可能　Johnがその値を持ってる
// let array = [john];
// john = null;    // 参照を上書き
// console.log(john);  // null
// console.log(array[0]);  // 配列に格納されたものはガーベージコレクションされない

console.log('---------------------------');
console.log('map ---------------------------');
let john = { name : "John" };
let map = new Map();
map.set(john, "...");
john = null;
console.log(map.keys());    // johnはmapの中に保持されてる
console.log(map.size);

console.log('---------------------------');
console.log('weakMap ---------------------------');
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
weakMap.set([1, 2, 3]);
// weakMap.set("test", "Woohps");  // testはプリミティブなのでエラー
// weakMapには参照型でなければならない
