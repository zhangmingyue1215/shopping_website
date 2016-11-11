(function () {
    var count = document.getElementsByClassName('num_input')[0];
    var btn_subtraction = document.getElementsByClassName('btn_subtraction')[0];
    var btn_add = document.getElementsByClassName('btn_add')[0];
    btn_subtraction.onclick = function () {
        if(count.value>1){
            count.value -=1;
        }else {
            alert("数量不能为0！")
        }
    }
    btn_add.onclick = function () {
        count.value = parseInt(count.value)+1;
    }
}(window));