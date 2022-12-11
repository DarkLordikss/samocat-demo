var k1 = 0;
var k2 = 0;
var k3 = 0;
function buttonGreen1() {
    var element = document.getElementById("b1");
    element.classList.add("green");
    element.textContent = "Подтверждено";
    k1 = 1;
    if (k1 == 1 && k2 == 1 && k3 == 1) {
        window.location.href = '/promo';
    }
}
function buttonGreen2() {
    var element = document.getElementById("b2");
    element.classList.add("green");
    element.textContent = "Подтверждено";
    k2 = 1;
    if (k1 == 1 && k2 == 1 && k3 == 1) {
        window.location.href = '/promo';
    }
}
function buttonGreen3() {
    var element = document.getElementById("b3");
    element.classList.add("green");
    element.textContent = "Подтверждено";
    k3 = 1;
    if (k1 == 1 && k2 == 1 && k3 == 1) {
        window.location.href = '/promo';
    }
}