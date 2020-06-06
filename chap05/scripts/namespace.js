'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5.28 namespace ---------------------------');
var Wings = Wings || {};    // Wingsが未定義の場合にだけ新たな名前空間を作成する
// var Wings = {};  空のオブジェクトを生成するだけでも名前空間を定義できる

Wings.Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Wings.Member('真緒', '辻');
console.log(mem.getName());

// 名前空間(パッケージ) は、クラスをまとめるための箱のようなもの。
// JavaやC#には名前空間の仕組みが標準であるが、JavaScriptにはないから
// 空のオブジェクトを利用して擬似的に「名前空間のようなもの」を作成する

console.log('---------------------------');
console.log('5.29 namespace_utils ---------------------------');
function namespace(ns) {
    // 名前空間を「.」区切りで分割
    var names = ns.split('.');
    var parent = window;

    // 名前空間を上位から順に登録
    for (var i=0, len = names.length; i < len; i++ ) {
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

// Wings.Gihyo.Js.MyApp名前空間を登録
var my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function() {};
var p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);