//ECMAscript 2015, ES6 부터 지원되는 것들
//함수 선언
function xxx() {
    //console.log(this)
}

// ES6
const xxx = () => {
    //console.log(this)
}
//constext의 차이가 존재한다.

//변수 선언
var aaa;
//ES6

// 변하지않는 상수의 형태가 필요했다.
const aaaa = 1;
// 지역변수
let aaaaa;

// Promise 패턴 (ES5 Callback Hell 패턴을 극복하기 위해)
setTimeout(function() {
    setTimeout(function () {
        const a = 1
    },100)
})

fetch()
    .then(function() {

    })
    .then(function() {

    })
    .then()
    .then()
    .then()


    function newSource() {
        //github test
    }