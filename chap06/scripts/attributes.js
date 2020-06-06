'use strict';


console.log("---------------------------");
console.log("6.14 attributes ---------------------------");
document.addEventListener('DOMContentLoaded', function() {
    // imgを取得
    var logo = document.getElementById('logo');
    // imgに含まれる属性リストを取得
    var attrs = logo.attributes;
    for (var i=0, len = attrs.length; i < len; i++) {
        var attr = attrs.item(i);
        console.log(attr.name + ": " + attr.value);
    }
}, false);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('result_text').textContent = 
    '<a href="http://www.wingsmsn.to/">WINGSプロジェクト</a>';
    document.getElementById('result_html').innerHTML = 
    '<a href="http://www.wingsmsn.to/">WINGSプロジェクト</a>';
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var list = document.getElementById('list');
    console.log(list.innerHTML);
    console.log(list.textContent);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    // ボタンクリック時に挨拶メッセーじを反映
    document.getElementById("btn").addEventListener('click', function() {
        var name = document.getElementById("name");
        var result = document.getElementById("result");
        result.textContent = 'こんにちは' + name.value + 'さん';
    }, false);
}, false);

// <div onclick="alert('ほげ')">ほげほげ</div>を入力すると、スクリプトが実行されてしまう
// 外部サービスから取得したコンテンツに不正な文字列が入ってたら、ブラウザー上で勝手に実行されてしまう可能性がある
// クロスサイトスクリプティングXSS脆弱性がある。
// 入力した値を出力するときはtextContentを仕様する