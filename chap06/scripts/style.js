'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('6.35 style ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem');

    // マウスポインターが乗ったタイミングで背景色を変更
    // elem.addEventListener('mouseover', function() {
    //     this.style.borderTopStyle = 'solid';
    // }, false);
    // elem.addEventListener('mouseover', function() {
    //     this.className = 'highlight';
    // }, false);

    // マウスポインターが外れたタイミングで背景色を戻す
    // elem.addEventListener('mouseout', function() {
    //     this.style.borderTopStyle = '';
    // }, false);
    // elem.addEventListener('mouseout', function() {
    //     this.className = '';
    // }, false);

    // スタイルクラス着脱
    // elem.addEventListener('click', function() {
    //     this.className = (this.className === 'highlight' ? '' : 'highlight');
    // }, false);

    // 複数スタイル
    elem.addEventListener('click', function() {
        var classes = this.className.split(' ');
        // highlightが存在する壱を検出
        var index = classes.indexOf('highlight');
        if (index === -1) {
            classes.push('highlight');
        } else {
            classes.splice(index, 1);   // 存在したらhighlightを除去
        }
        // 配列を空白区切りの文字列に
        this.className = classes.join(' ');
    }, false);

    // classListプロパティ
    var elem = document.getElementById('elem_list');

    // クリックしたタイミングで背景色を変更
    elem.addEventListener('click', function() {
        this.classList.toggle('highlight');
    }, false);


}, false);