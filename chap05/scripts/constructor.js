'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5. ---------------------------');
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

var mem = new Member('真緒', '辻');
console.log(mem.getName()); // getNameメソッドがMemberクラスから参照してる
// オブジェクトをインスタンス化した場合、
// インスタンスはもととなるオブジェクトに属するプロパティに対して
// 暗黙的な参照を持つことになる。

console.log('---------------------------');
console.log('5.11 ---------------------------');
var mem11 = new Member('健二', '辻');

// インスタンス化の後にメソッドを追加
Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

console.log(mem11.getName());
// 暗黙の参照をしているので、インスタンス後でもプロパティの内容も認識できる。

console.log('---------------------------');
console.log('5.12 ---------------------------');
var Member12 = function() {};

Member12.prototype.sex = '男';
var mem1 = new Member12();
var mem2 = new Member12();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '女';    // インスタンスmem2に対してsexプロパティを追加
console.log(mem1.sex + '|' + mem2.sex); // プロトタイプオブジェクトが利用されるのは参照のときだけ。
// mem2.sexはインスタンスmem2のプロパティから取得している
// 通常プロパティの宣言はコンストラクターで
// メソッドの宣言はプロトタイプで行う

console.log('---------------------------');
console.log('5.13 ---------------------------');
delete mem1.sex // インスタンスmem1にsexプロパティは存在しないので、delete演算子は何もしない
delete mem2.sex // 削除するのは、インスタンス上のプロパティ
console.log(mem1.sex + '|' + mem2.sex);

// インスタンス側でのメンバーの追加や削除といった操作が、プロトタイプオブジェクトにまで影響を及ぼすことはない

console.log('---------------------------');
console.log('5.14 ---------------------------');
mem2.sex = undefined;   // メンバーの存在はそのままに、値を強制的に未定義にしている
console.log(mem1.sex + '|' + mem2.sex);
for (var key in mem1) {
    console.log(key + ":" + mem[key])
;}

console.log('---------------------------');
console.log('5.16  literal---------------------------');
// オブジェクトリテラルを利用することで、記述を最小限に抑えられる
Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString: function() {
        return this.lastName + this.firstName;
    }
}

console.log('---------------------------');
console.log('5.18 static---------------------------');
var Area = function() {};

Area.version = '1.0';   // 静的プロパティの定義

// 静的メソッドtriangleの定義
Area.triangle = function(base, height) {
    return base * height / 2;
};

// 静的メソッドdiamondの定義
Area.diamond = function(width, height) {
    return width * height / 2
};
// 静的メソッドは基本的に読み取り専用の用途に限定すべき
// 静的メソッドの中でthisは使えない
console.log('Areaクラスのバージョン: ' + Area.version);
console.log('三角形の面積: ' + Area.triangle(5, 3));

var a = new Area();
console.log('ひし形の面積: ' + Area.diamond(10, 2));