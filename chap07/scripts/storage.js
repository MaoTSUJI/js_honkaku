'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('7.16 storage ---------------------------');
var storage = localStorage;
storage.setItem('fruit1', 'りんご');    // メソッド構文　設定
storage.fruit2 = 'みかん';  // プロパティ構文　※便利だが、「123」のように識別子で利用できない名前は使用出来ない
storage['fruit3'] = 'ぶどう';   // ブラケットこうh分
console.log(storage.getItem('fruit1')); // メソッド構文　取得
console.log(storage.fruit2);
console.log(storage['fruit3']);

// 既存のデータを削除する
// storage.removeItem('fruit1');
// delete storage.fruit1;
// delete storage['fruit1'];

// 全てのデータを削除する
storage.clear();

console.log('---------------------------');
console.log('7.17 ストレージから全てを取り出す ---------------------------');
var storage17 = localStorage;
for (var i = 0, len = storage17.length; i < len; i++ ) {
    var k = storage17.key(i);   // keyを取得するときは、keyメソッドを入れる
    var v = storage17[k];   // ブラケット構文で値にアクセスする。
    console.log(k + ':' + v);
}
// ストレージに保存できる型は文字列が前提！

console.log('---------------------------');
console.log('7.18 ストレージにオブジェクトを保存 ---------------------------');
// storage17.clear();
var storage18 = localStorage;
var apple = { name: 'りんご', price: 150, made: '青森' };
storage18.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage18.getItem('apple'));
console.log(data.name);
storage.clear();