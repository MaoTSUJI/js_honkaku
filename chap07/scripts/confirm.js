'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('7.01 confirm ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fm').addEventListener('submit', function(e) {
        if(!window.confirm('ページを送信しても良いですか?')){
            e.preventDefault();
        }
    }, false)

    var timer = window.setInterval(
        // 現在の時刻を<div id="result">に表示
        function() {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 1000);

        // ボタンクリック時にタイマー処理を中止
        document.getElementById('btn').addEventListener('click', function() {
            window.clearInterval(timer);    // セットしたタイマーを解除
        }, false);

        // setinterval 決められた時間間隔で繰り返し処理を実行する
        // setTimeout  指定された時間が経過したところで、1回だけ処理を実行する

        document.getElementById('isbn').addEventListener('change', function() {
            location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value);
        }, false);
}, false);

// interval
function hoge() {
    console.log('あいうえお');
    setTimeout(function() {
        console.log('かきくけこ');
    }, 0);
    console.log('さしすせそ');  // 非同期処理のため、タイマーに渡してる間に次のコードを実行してる
}
hoge();

history.go(-3); // 3ページ前に戻る

console.log("------------------------");
console.log("7.06 history ------------------------");
var count = 0;
var result = document.getElementById('result_history');
// カウントアップボタンをクリックしたときに履歴を追加
document.getElementById("btn_history").addEventListener('click', function() {
    result.textContent = ++count;
    console.log(window.location.pathname);
    console.log(window.location);
    console.log(window.location.origin);
    console.log(window.location.href);
    console.log(document.domain);
    console.log(window.history);
    history.pushState(null, null, 'count/' + count);
});
// 戻るボタンでページの状態を前に戻す
window.addEventListener('popstate', function(e) {
    count=e.state;
    result.textContent = count;
});

console.log("------------------------");
console.log("7.07 navigator ------------------------");
var agent = window.navigator.userAgent.toLowerCase();
console.log(agent);
var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) && (agent.indexOf('opr') === -1);
console.log('Chrome: ' + chrome);

console.log("------------------------");
console.log("function test ------------------------");
if (window.File) {
    // ファイルオブジェクトを利用したコード
} else {
    window.alert('File APIは利用できません。');
}

console.log("------------------------");
console.log("7.08 log ------------------------");
console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');


console.log("------------------------");
console.log("7.09 format ------------------------");
console.log('はじめまして、私は%sです。%d歳です。', '山田太郎', 30);
console.log('今日の気温は、%.2f度です。', 25.4);

console.log("------------------------");
console.log("7.10 log_group ------------------------");
console.group('上位グループ');
for (var i = 0; i < 3; i++) {
    // 子グループを開始
    console.group('下位グループ');
    for (var j = 0; j < 3; j++) {
        console.log(i, j);
    }
    // 小グループを終了
    console.groupEnd();
}
console.groupEnd();
// 親グループ終了

console.log("------------------------");
console.log("7.10 log_groupCollapsed ------------------------");
console.groupCollapsed('上位グループ');
for (var i=0; i < 3; i++) {
    // 小グループを開始
    console.group('下位グループ');
    for (var j=0; j < 3; j++) {
        console.log(i, j);
    }
    console.groupEnd();
}
console.groupEnd();

console.log("------------------------");
console.log("7.11 log_count ------------------------");
// ラベルが何回呼び出されたかを確認
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.count('LOOP');
        console.count();
    }
}
console.count('LOOP');
console.count();
// ラベル: 回数

console.log("------------------------");
console.log("7.12 log_trace ------------------------");
function call1() {
    call2();
}
function call2() {
    call3();
}
function call3() {
    console.trace();
}

call1();

console.log("------------------------");
console.log("7.13 log_timer ------------------------");
console.time('MyTimer');
window.alert('確認してください');
console.timeEnd('MyTimer');
// 同じラベルのtimeからtimeEndまでの時間を計測する

console.log("------------------------");
console.log("7.14 log_assert ------------------------");
function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0, '引数radiusは整数でなければいけません');
    return radius * radius * Math.PI;
}
console.log(circle(-5));

console.log("------------------------");
console.log("7.15 log_dir ------------------------");
console.log(window);    // Elementオブジェクトを出力する場合に明らかになります。
console.dir(window);    // 
document.addEventListener('DOMContentLoaded', function() {
    var d = document.getElementById('main');
    console.log(d); // 要素をHTML形式で出力する
    console.dir(d); // オブジェクトツリーとして出力する
}, false);