(function () {
     count = document.getElementsByClassName('num_input');
     btn_subtraction = document.getElementsByClassName('btn_subtraction');
     btn_add = document.getElementsByClassName('btn_add');
    for(var i=0;i<count.length;i++) {
        console.log(i);
        (function (i) {
            btn_subtraction[i].onclick = function () {
                if (count[i].value > 1) {
                    count[i].value -= 1;
                } else {
                    alert("数量不能为0！")
                }
            }
            btn_add[i].onclick = function () {
                count[i].value = parseInt(count[i].value) + 1;
            }
        })(i)
    }
}(window));