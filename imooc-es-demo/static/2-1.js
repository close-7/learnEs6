// var -> variable
// var a = 5
// console.log(a)
// // delete a
// console.log(window.a)


// b = 6
// console.log(b)
// // delete b
// console.log(window.b)

// let a = 5
// console.log(a)
// console.log(window.a)

// let a = 5
// let a = 6
// console.log(a)

// console.log(a)
// var a = 5

// var a
// console.log(a)
// a = 5

// console.log(a)
// let a = 5

// var a = 5
// if (true) {
//     a = 6
//     let a
// }

// function foo(a = 2, b = a){
//     console.log(a, b)
// }
// foo()

// for (let i = 0; i < 3; i++) {
//     console.log('循环内:' + i)
// }
// console.log('循环外:' + i)

// if (false) {
//     let a = 5
// }
// console.log(a)

// if (true) {
//     let a = 5
// }


// for (var i = 0; i < 3; i++) {
//     (function(j){
//         setTimeout(function(){
//             console.log(j)
//         })
//     })(i)
// }
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    })
}

var a = 5
var _loop = function _loog(i){
    setTimeout(function () {
        console.log(i)
    })
}
for (var i=0;i<3;i++){
    _loop(i)
}