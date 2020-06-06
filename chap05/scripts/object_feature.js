// 'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5.1 simple  ---------------------------');
// JavaScriptのクラス
var Member = function() {};
// インスタンス化
var mem = new Member();

// Javascriptでは関数(Functionオブジェクト)にクラスとしての役割を与えている

// コンストラクターに初期化処理を記述
var Member = function(firstName, lastName) {
    this.firstName = firstName; // ここのthisは自分自身
    this.lastName = lastName;
    // getNameがメソッドと見なされる(*)
    this.getName = function () {    // プロパティには関数オブジェクトも指定できる
        return this.lastName + ' ' + this.firstName;
    }
}
var mem = new Member('真緒', '辻');
console.log(mem.getName());

// 値が関数オブジェクトであるプロパティがメソッドと見なされる(*)


console.log('---------------------------');
console.log('5.6  call  ---------------------------');
var data = 'Global data';
var obj1 = { data: 'obj1 data'};
var obj2 = { data: 'obj2 data'};

function hoge() {
    console.log(this.data);
}
// strictモードでは出力されない
hoge.call(null);    // Global data からの場合はグローバルオブジェクトを割り当て
hoge.call(obj1);    // thisにobj1を割り当てる
hoge.call(obj2);    // thisにobj2を割り当てる


console.log('---------------------------');
console.log('5.7  call_argument  ---------------------------');
function hoge7() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('/'));
}
hoge7('Angular', 'React', 'Backbone');

console.log('---------------------------');
console.log('5.8  no_constructor  ---------------------------');
var Member8 = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var m8 = Member8('花子', '山田');
// Memberオブジェクトは生成されない
console.log(m8);    // この場合、thisはグローバルオブジェクトを指す
console.log(firstName);
console.log(m8.firstName);

console.log('---------------------------');
console.log('5.9  simple3  ---------------------------');
var Member9 = function(firstName, lastName) {
    if (!this instanceof Member9) { // thisがMember9オブジェクトではないとき、
        return new Member9(firstName, lastName);    // 改めてnew演算子でコンストラクターを呼び出す
    }
    this.firstName = firstName;
};