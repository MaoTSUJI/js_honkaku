'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5.19 chain ---------------------------');

var Animal = function() {};
Animal.prototype = {
    walk: function() {
        console.log("トコトコ");
    }
};

var Dog = function() {
    Animal.call(this);  //  継承
};
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log("わんわん!");
};

var d = new Dog();
d.walk();
// dインスタンス自身メンバを検索
// Dogオブジェクトのプロトタイプのメンバーを検索
// プロトタイプに登録されたインスタンスのメンバーを検索
// プロトタイプに登録されたインスタンスのプロトタイプを検索
d.bark();   // わんわん!

console.log('---------------------------');
console.log('5.20 chain ---------------------------');
var Animal20 = function() {};

Animal20.prototype = {
    walk: function() {
        console.log("トコトコ");
    }
}

var SuperAnimal = function() {};
SuperAnimal.prototype = {
    walk: function() {
        console.log("ダダダ");
    }
};

var Dog20 = function() {};
Dog20.prototype = new Animal20();
var d1 = new Dog20();
d1.walk();  // トコトコ

Dog20.prototype = new SuperAnimal();
var d2 = new Dog20();
d2.walk();  // ダダダ
d1.walk();  // ダダダ

console.log('---------------------------');
console.log('5.21 obj_type ---------------------------');
var Animal21 = function() {};   // Animal21クラスを用意
var Hamster = function() {};
Hamster.prototype = new Animal21(); // HamsterはAnimal21クラスを継承
// プロトタイプを継承

var a = new Animal21();
var h = new Hamster();

console.log(a.constructor === Animal21);  // true
console.log(h.constructor === Animal21);  // true
console.log(h.constructor === Hamster); // false
// プロトタイプを継承しているので、コンストラクターは継承元のクラスになる

console.log(h instanceof Animal21);
console.log(h instanceof Hamster);

console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));

var obj21 = { hoge: function(){}, foo: function(){} };
console.log('hoge' in obj21);
console.log('huga' in obj21);