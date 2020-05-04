'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.49 obj_tostring ---------------------------');
var obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());

var date = new Date();
console.log(date.toString());
console.log(date.valueOf());

var ary = ["a", "b", "c"];
console.log(ary.toString());
console.log(ary.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString());
console.log(reg.valueOf());

// toString()は、文字列を返す。意味のある情報を返さない。
// valueOf()は、文字列以外の基本型の値が返されることを「期待して」使われる。
// valueOf()は、自分自身を返すだけ。

console.log('---------------------------');
console.log('3.50 obj_assign ---------------------------');
let pet = {
  type: 'スノーホワイトハムスター',
  name: 'ハム',
  description: {
    birth: '2014-02-15'
  }
};
let pet2 = {
  type: '山田きら',
  name: '白',
  description: {
    food: 'ひまわりの種'
  }
};
let pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

Object.assign(pet, pet2, pet3); // オブジェクトのマージ
console.log(pet); // 同名プロパティは後から上書きされる
// 再帰的なマージには非対応 // descriptionはまるごと上書き

console.log('---------------------------');
console.log('3.51 obj_create ---------------------------');
var obj1 = {x: 1, y: 2, z: 3};  //匿名オブジェクト
var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3; // オブジェクトリテラル

var obj3 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, configurable: true, enumerable: true },
  y: { value: 2, writable: true, configurable: true, enumerable: true },
  z: { value: 3, writable: true, configurable: true, enumerable: true },
});

console.log('---------------------------');
console.log('3.52 obj_freeze ---------------------------');
var pet52 = {type: 'スノーホワイトハムスター', name: 'ハム'};
// 以下をそれぞれコメント解除して、動作を確認
// プロパティの追加禁止
// Object.preventExtensions(pet52);
// 削除禁止
// Object.seal(pet52);
// 読み取り禁止
// Object.freeze(pet52);

pet52.name = '山田きら';
delete pet52.type;
pet52.weight= 42;