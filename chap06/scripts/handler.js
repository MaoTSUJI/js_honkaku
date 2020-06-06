'use strict';

console.log('---------------------------');
console.log('6.40 handler_remove ---------------------------');
window.onload = function() {
    var btn = document.getElementById("btn_handler");

    // イベントハンドラーを登録
    btn.onclick = function() {
        window.alert('こんにちは、世界!');
    };

    // イベントハンドラーを破棄
    btn.onclick = null;
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById("btn_listener");
    var listener = function() {
        window.alert('こんにちは, 世界!');
    };

    // イベントリスナーを登録
    btn.addEventListener('click', listener, false);
    // イベントリスナーを破棄
    btn.removeEventListener('click', listener, false);

    var btn = document.getElementById("btn_event").addEventListener('click', function(e) {
        var target = e.target;
        console.log(target);
        console.log('発生元: ' + target.nodeName + '/' + target.id);
        console.log('種類: ' + e.type);
        console.log('種類: ' + e);
    }, false);

    var main = document.getElementById("main");
    main.addEventListener('mousemove', function(e) {
        main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
            + 'page' + e.pageX + '/' + e.pageY + '<br />'
            + 'client' + e.clientX + '/' + e.clientY + '<br />'
            + 'offset' + e.offsetX + '/' + e.offsetY + '<br />';
    }, false);

    document.getElementById('key').addEventListener('keydown', function(e) {
        console.log('キーコード: ' + e.keyCode);
    }, false);

    // 6.45 propagation
    // a inner要素のlickイベントリスナー
    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナーが発生しました');
        // e.stopImmediatePropagation();   // リスナーの実行はここまで
        e.preventDefault(); // イベント本来の挙動をキャンセルする
    }, false);
    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナー2が発生しました');
    }, false);
    document.getElementById('outer').addEventListener('click', function(e) {
        window.alert('#outerリスナーが発生しました');
    }, false);

    var data = {
        title: 'java',
        price: 1200,
        handleEvent: function() {
            console.log(this.title + '/' + this.price + '円');
        },
    };
    document.getElementById('btn').addEventListener(
        'click', data, false);
}, false);

