'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.48 ---------------------------');
// 与えられた文字列をエスケープ
function escapeHtml(str) {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

// 分解されたtemplatesとvaluesを順に連結
function e(templates, ...values) {  // 分解したテンプレート文字列と可変長引数を受け取ること
    let result = '';
    for (let i = 0, len = templates.length; i < len; i++) {
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}
// テンプレート文字列をエスケープ処理
let name = '<"Mario" & \'Luigi\'';
console.log(e`こんにちは、${name}さん`);    // 関数名`テンプレートリテラル`

// jsではスクリプト実行時に内部的にGlobalオブジェクトを生成する
// Globalオブジェクトは「グローバル変数やグローバル関数を管理するための便宜的なオブジェクトのこと」
// グローバル変数やグローバル関数は、グローバルオブジェクトのプロパティやメソッド

// ローカル変数もActivation Object(Callオブジェクト)のプロパティ
// Callオブジェクトは関数呼び出しの都度、内部的に生成されるオブジェクト
// argumentsプロパティも↑のプロパティ。

console.log('---------------------------');
console.log('4.49 スコープチェーン ---------------------------');
var y = 'Global';
function outerFunc() {
    var y = 'Local Outer';

    function innerFunc() {
        var z = 'Local Inner';
        console.log(z);
        console.log(y);
        // console.log(x);
    }
    innerFunc();    // 関数呼び出し
}
outerFunc();    // 関数呼び出し
// スコープチェーンが下記の様に出来上がっている。
// ①内部のCallオブジェクト-> ②外部のCallオブジェクト-> ③グローバルオブジェクト

console.log('---------------------------');
console.log('4.50 クロージャ ---------------------------');
// クロージャはローカル変数を参照している関数内関数のこと
function closure(init) {
    var counter = init;

    return function() {     // この匿名関数(*)がクロージャや!!!
        return ++counter;
    }
}
var myClosure = closure(1); // myClosureに匿名関数(*)をセット
var myClosure2 = closure(100);
console.log(myClosure());   // ローカル変数counterが維持されてる！
console.log(myClosure2());  //  ローカル変数はmyClossure2とは別物として維持される。
console.log(myClosure());
console.log(myClosure2());


console.log('---------------------------');
console.log('4.40 コールバック関数と高階関数 ---------------------------');
// コールバック関数とは、呼び出し先の関数の中で呼び出される関数のこと
// 高階関数は、関数を引数や戻り値として扱う関数

// 高階関数の基本
function arrayWalk(data, f) {   // 引数に関数fを与える
    for (var key in data) {
        f(data[key], key);
    }
}
function showElement(value, key) {
    console.log(key + ': ' + value);
}

var ary = [1,2,3,4,5];
arrayWalk(ary, showElement);    // この時、()としない。
// ここでshowElementがコールバック関数に当たる。