let num = 0;
$(".num").html(num);

$(".button_g").on("click", function () {
    var jkp = Math.floor(Math.random() * 3);
    console.log(jkp)

    if (jkp === 0) {
        $(".imgg").remove();
        $(".kekka").html(
            "私は"+'<img src="./img/janken_pa.png">'+
            '<img src="./img/BBA4.png">'
        );
    } else if (jkp === 1) {
        $(".imgg").remove();
        $(".kekka").html(
             "私は" + '<img src="./img/janken_gu.png">' +
            '<img src="./img/BBA2.png">'
        );
    } else if (jkp === 2) {
        num++;
        $(".num").html(num);
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_choki.png">' +
            '<img src="./img/BBA3.png">'
        );
        checknum(); 
    }

})
$(".button_c").on("click", function () {
    var jkp = Math.floor(Math.random() * 3);
    console.log(jkp)

    if (jkp === 0) {
        num++;
        $(".num").html(num);
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_pa.png">' +
            '<img src="./img/BBA3.png">'
        );
        checknum(); 
    } else if (jkp === 1) {
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_gu.png">' +
            '<img src="./img/BBA4.png">'
        );
    } else if (jkp === 2) {
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_choki.png">' +
            '<img src="./img/BBA2.png">'
        );
    }

})

$(".button_p").on("click", function () {
    var jkp = Math.floor(Math.random() * 3);
    console.log(jkp)

    if (jkp === 0) {
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_pa.png">' +
            '<img src="./img/BBA2.png">'
        );
    } else if (jkp === 1) {
        num++;
        $(".num").html(num);
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_gu.png">' +
            '<img src="./img/BBA3.png">'
        );
        checknum(); 
    } else if (jkp === 2) {
        $(".imgg").remove();
        $(".kekka").html(
            "私は" + '<img src="./img/janken_choki.png">' +
            '<img src="./img/BBA4.png">'
        );
    }

})

function checknum() {
    if (num >= 3) {
        document.body.innerHTML = '';
        $("body").append('<img src="./img/BBAwin.png" class="">');
    }
}