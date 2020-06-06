'use strict';

var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

// ページ内のすべてのアンカータグを取得
var list =  document.getElementsByTagName('a');
// リストから順にアンカータグ取り出し
// そのhref属性をログに出力
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href); // item(i) i番目の要素を取得
}

var current1 = new Date();
// <input name="time">要素を取得
var nam = document.getElementsByName('time');
// そのvalue属性を設定
nam[0].value = current1.toLocaleTimeString();

console.log("-----------------------------")
console.log("6.06 element_query-----------------------------")
var list6 = document.querySelectorAll('#list6 .external');
for (var i=0, len = list6.length; i < len; i++) {
    console.log(list6[i].href);
}
