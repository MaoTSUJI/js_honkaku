'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('7-20 storage_call ---------------------------');
var storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge'));   // 結果: ほげ
storage.save();
storage.clear();
console.log('---------------------------');
console.log('7-21 storage_ev ---------------------------');
// ストレージの変更を監視する
window.addEventListener('storage', function (e) {
    console.log('変更されたキー: ' + e.key);
    console.log('変更前の値: ' + e.oldValue);
    console.log('変更後の値: ' + e.newValue);
    console.log('発生元ページ: ' + e.url);
}, false);