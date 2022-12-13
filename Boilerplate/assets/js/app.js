// Object

// document
// #document
// document.querySelector('h1')
// <h1>​</h1>
// document.querySelectorAll('p')

// var p = document.querySelectorAll('p');

// p.forEach(function(el, i , arr) {
//     el.style.background = 'red'
// });

// p[2].style.background
// 'red'
// p[2].style.background = 'blue'
// 'blue'



// var menu = document.querySelector('.menu');

// menu.addEventListener("click", function() {
//     alert('Hello')
// });

// var menu = document.querySelector('.menu');

// menu.addEventListener("click", function() {
//     console.log(this)
// });

// var menu = document.querySelector('.menu');

// menu.addEventListener("click", function() {
//     var el = this 
//     console.log(this.classList)
//     console.log(this.classList.contains('menu'))
// });
    

var menu = document.querySelector('.menu');

menu.addEventListener("click", function() {
    var el = this 
    
    if (el.classList.contains('click')) {
        el.classList.remove('click');
        return;
    }
    el.classList.add('click')
});


