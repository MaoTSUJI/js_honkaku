'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('6.18 text_select.html ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var name = document.getElementById('name');
        console.log(name.value);
    }, false);
}, false);

console.log('---------------------------');
console.log('6.19 check.html ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn_checkbox').addEventListener('click', function() {
        var result = [];
        var foods = document.getElementsByName('food');

        // チェックボックスを走査し、チェック状態にあるかを確認
        for(var i=0, len = foods.length; i< len; i++) {
            var food = foods.item(i);
            if (food.checked) {
                result.push(food.value);
            }
        }
        // 配列の内容をダイアログに出力
        window.alert(result.toString());
    }, false);
}, false);
// valueプロパティは選択の有無に関わらず、value属性で指定された値を返す

console.log('---------------------------');
console.log('6.20 radio ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    // 指定されたラジオボタンの名前を取得
    var getRadioValue = function(name) {
        var result = '';
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、チェック状態にあるか確認
        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            if (elem.checked) {
                result = elem.value;
                break;
            }
        }
        return result;
    }
    // 取得した値をダイアログ表示
    document.getElementById('btn_radio').addEventListener('click', function() {
        window.alert(getRadioValue('food1'));
    }, false);
}, false);

console.log('---------------------------');
console.log('6.21 radio ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    // 指定されたラジオボタンを取得
    var setRadioValue = function(name, value) {
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、値の等しいものを検出
        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            // 引数valueと等しい値を持つ項目を選択状態に
            if (elem.value === value) {
                // 引数valueと等しい値を持つ項目を選択状態に
                elem.checked = true;
                break;
            }
        }
    };
    setRadioValue('food1', '餃子');
}, false);

console.log('---------------------------');
console.log('6.22 check ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    // 指定されたラジオボタンを取得
    var setCheckValue = function(name, value) {
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、値の等しいものを検出
        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            // 配列valueと等しい値を持つ項目を選択状態に
            if (value.indexOf(elem.value) > -1) {
                // 引数valueと等しい値を持つ項目を選択状態に
                console.log( elem.value + ': ' + value.indexOf(elem.value));
                elem.checked = true;
            }
        }
    };
    setCheckValue('food', ['餃子', '焼き肉']);
}, false);

console.log('---------------------------');
console.log('6.23 list ---------------------------');
document.addEventListener('DOMContentLoaded', function() {
    var getSelectValue = function(name) {
        // 選択値を格納するための配列
        var result = [];
        var opts = document.getElementById(name).options;

        // <option>要素を走査し、チェック状態にあるかを確認
        for(var i=0, len = opts.length; i < len; i++) {
            var opt = opts.item(i);
            if (opt.selected ) {
                result.push(opt.value);
                console.log(opt.value);
            }
        }
        return result;
    };
    var setSelectValue = function(name, value) {
        var opts = document.getElementById(name).options;
        for (var i=0, len = opts.length; i < len; i++ ) {
            var opt = opts.item(i);
            if (value.indexOf(opt.value) > -1) {
                opt.selected = true;
            }
        }
    };
    document.getElementById('btn_option').addEventListener('click', function() {
        window.alert(getSelectValue('food_option'));
    });
    setSelectValue('food_option', ['ラーメン', '焼き肉']);
}, false);

console.log('---------------------------');
console.log('6.25 file_info ---------------------------');
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function(e) {
        var inputs = document.getElementById("file").files;
        for (var i=0, len = inputs.length; i < len; i++) {
            var input = inputs[i];
            console.log('ファイル名: ' + input.name);
            console.log('種類: ' + input.type);
            console.log('サイズ: ' + input.size / 1024 + 'KB');
            console.log('最終更新日: ' + input.lastModifiedDate);
        }
    }, true);
}, false);

console.log('---------------------------');
console.log('6.26 file_reader.html ---------------------------');
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file_pre').addEventListener('change', function(e) {
        // 選択されたファイルを取得（単一選択なので、0で決め打ち）
        var input = document.getElementById("file_pre").files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById("result_file").textContent = reader.result;
        }, true);
        reader.addEventListener('error', function() {
            console.log(reader.error.message);
        }, true);
        reader.readAsText(input, 'UTF-8');
        reader.abort();
    }, true);
});

console.log('---------------------------');
console.log('6.27  ---------------------------');
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("file_img").addEventListener('change', function(e) {
        var input = document.getElementById("file_img").files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function(e) {
            document.getElementById("result_img").src = reader.result;
        }, true);
        reader.readAsDataURL(input);
    }, true);
}, false);