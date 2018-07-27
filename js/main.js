// GO!

// TASK 1 -- Show/Hide Nav
var butt = document.querySelector('#hide-nav button');
var x = document.getElementsByClassName("nav-menu");
butt.addEventListener('click',function () {
    x[0].classList.toggle('nav-menu-hidden');
});

// TASK 2 -- Select an Icon
//

var  a = document.querySelectorAll(".wish-list div");
var c = "selected"
 a.forEach(function(ab){
  ab.addEventListener('click',function(event){
    var c = event.currentTarget;
      c.classList.toggle('selected');
 })
})


// TASK 3 -- Move Item From List to List
var buttons = document.querySelectorAll('.add-points .point');
var result = document.querySelector('.total-points')

buttons.forEach(function (button) {
  button.addEventListener('click', function(event){

    var btn = event.target;
    var value = btn.textContent;

    var original = result.textContent;
    var newValue = (original*1) + (value*1);
    result.textContent = newValue;
  })
})

// TASK 4 -- Add Guest to List

var standingList = document.querySelector('.good-standing-list');
var probationList = document.querySelector('.probation-list');

var probationLi = document.querySelectorAll('.probation-list');
probationLi.forEach(function (item) {
    item.addEventListener('click', function (event) {
        probationList.removeChild(event.target);
        standingList.appendChild(event.target);
    });
});
var standingLi = document.querySelectorAll('.good-standing-list');
standingLi.forEach(function (item) {
    item.addEventListener('click',function (event) {
        standingList.removeChild(event.target);
        probationList.appendChild(event.target);
    });
});

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var squares = document.querySelectorAll('.palette span');
var rectangle = document.getElementsByClassName('msg');
squares.forEach(function (color) {
  color.addEventListener('click', function(event){
        var newColor = event.target.attributes.class.textContent;
        rectangle[0].attributes.class.textContent = "msg " + newColor;
    })
})
