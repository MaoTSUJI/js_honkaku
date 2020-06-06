'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('6.29 append_child ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        // テキストボックスの取得
        var name = document.getElementById('name');
        var url = document.getElementById('url');
        // <a>要素の生成
        var anchor = document.createElement('a');
        // <a>要素のhref属性を設定
        // anchor.href = url.value;
        
        var href = document.createAttribute('href');
        href.value = url.value;
        anchor.setAttributeNode(href);

        // テキストノードを生成し、<a>要素の直下に追加
        var text = document.createTextNode(name.value);
        anchor.appendChild(text);
        // <br>要素を生成
        var br = document.createElement('br');
        // <div id="list">を取得
        var list = document.getElementById('list');
        // <div id="list">要素の直下に<a>/<br>要素の順番で追加
        list.appendChild(anchor);
        list.appendChild(br);
    }, false);
}, false);

console.log('---------------------------');
console.log('6.30 append_complex ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var books = [
        { title: '独習PHP', price: 3200 },
        { title: 'Javaポケットリファレンス', price: 2600 },
        { title: 'アプリを作ろう', price: 2000 },
    ];

    var frg = document.createDocumentFragment();

    // 配列booksの内容を順番に<li>要素に整形
    for(var i= 0, len = books.length; i < len; i++) {
        var b = books[i];
        var li = document.createElement('li');
        var text = document.createTextNode(b.title + ':' + b.price + '円');
        li.appendChild(text);
        frg.appendChild(li);
    }

    document.getElementById('list_complex').appendChild(frg);

}, false);

console.log('---------------------------');
console.log('6.32 replace ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var list = document.getElementById('list_replace');
    var pic  = document.getElementById('pic');
    var del = document.getElementById('del');

    // <ul id="list_replace">配下のリンクをクリックした時の処理
    list.addEventListener('click', function(e) {
        // isbn属性からアンカータグに紐付いたisbn値を取得
        var isbn = e.target.getAttribute('data-isbn');
        // isbn値が取得出来た場合にのみ処理を実行
        if (isbn) {
            // img要素を静止絵
            var img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.target.textContent;
            img.height = 150;
            img.width = 108;
            // <div>要素配下に<img>要素が存在するか（画像を表示中か）を確認
            if(pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                // <img>要素が存在しない場合、新たに追加し削除ボタンを有効に
                del.disable = false;
                pic.appendChild(img);
            }
        }
    }, false);

    // [削除]ボタンがクリックされた時の処理
    del.addEventListener('click', function() {
        // <div id="pic">配下の子要素を削除し、[削除]ボタンを無効に
        pic.removeChild(pic.lastChild);
        del.disable = true;
    }, false);
}, false);

console.log('---------------------------');
console.log('6.33 live ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var li = document.getElementsByTagName('li');
    console.log('変更前: ' + li.length);

    var ul = document.getElementById('list_live');
    ul.appendChild(document.createElement('li'));
    console.log('変更後: ' + li.length);

}, false);

console.log('---------------------------');
console.log('6.34 ng ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var second = document.getElementById('second');
    var li = document.getElementsByClassName('li');
    
}, false);