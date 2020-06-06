'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.23 args---------------------------');
function showMessage(value) {
    console.log(value);
}

showMessage();
showMessage('山田');
showMessage('山田', '鈴木');
// 与える引数の数が、関数側で要求する数と異なる場合もこれをチェックしない

console.log('---------------------------');
console.log('4.24 args_check---------------------------');
function showMessage1(value) {
    if (arguments.length !== 1) {
        throw new Error('引数の数が間違っています: ' + arguments.length);
    }
    console.log(value);
}

try {
    showMessage1('山田', '鈴木');
} catch(e) {
    // window.alert(e.message);
}

console.log('---------------------------');
console.log('4.25 default args---------------------------');
function getTriangle(base, height) {
    if (base === undefined) { base = 1; }
    if (height === undefined) { height = 1; }
    return base * height / 2;
}
console.log(getTriangle(5));

// 引数が省略可能であることを分かりやすく示すには、「o_base」のようにするとわかりやすい。
// ここのoはoptionalの意味。

console.log('---------------------------');
console.log('4.26 variable_args ---------------------------');
function sum() {
    var result = 0;
    for (var i = 0, len = arguments.length; i < len; i++) {
      var tmp = arguments[i];
      if (typeof tmp !== 'number') {
        throw new Error('引数が数値ではありません：' + tmp);
      }
      result += tmp;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
    window.alert(e.message);
}

console.log('---------------------------');
console.log('4.27 variable_args2 ---------------------------');
function printf(format, var_args) {
    for (var i =0, len = arguments.length; i < len; i++) {
        var pattern = new RegExp('\\{' + (i-1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('こんにちは, {0}さん。わたしは{1}です。', 'かけや', '山田');
// 明示的に宣言された引数と可変長引数を混在させる。
// 第一引数formatを明示的に宣言、第二引数以降が可変長引数として扱われる

console.log('---------------------------');
console.log('4.28 named_args 名前付き引数---------------------------');
function getTriangle28(args) {
    if (args.base === undefined) { args.base = 1; }
    if (args.height === undefined) { args.height = 1; }
    return args.base * args.height / 2;
}
console.log(getTriangle28({ base: 1, height: 4}));

// メリ：コードの意味がわかりやすい、省略可能な引数をスマートに表現, 引数の順番を自由に変更可
// デメ: 引数の数が多い、省略可能な引数が多く組み合わせが多い