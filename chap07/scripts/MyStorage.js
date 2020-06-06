'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('7.19 MyStorage ---------------------------');
var MyStorage = function(app) {
    // アプリ名
    this.app = app;
    // 利用するストレージの種類（ここではローカルストレージ）
    this.storage = localStorage;
    // ストレージから読み込んだオブジェクト
    // 該当するデータがない場合はｍ￥、空のオブジェクトを生成
    this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
    // 指定されたキーで値を取得
    getItem: function(key) {
        return this.data[key];
    },
    // 指定されたキー/値でオブジェクトを書き換え
    setItem: function(key, value) {
        this.data[key] = value;
    },
    // MyStorageオブジェクトの内容をストレージに保存
    save: function() {
        this.storage[this.app] = JSON.stringify(this.data);
    }
}