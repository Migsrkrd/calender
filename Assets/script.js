// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn9 = $("#hour-9 button");
var saveBtn10 = $("#hour-10 button");
var saveBtn11 = $("#hour-11 button");
var saveBtn12 = $("#hour-12 button");
var saveBtn1 = $("#hour-1 button");
var saveBtn2 = $("#hour-2 button");
var saveBtn3 = $("#hour-3 button");
var saveBtn4 = $("#hour-4 button");
var saveBtn5 = $("#hour-5 button");
var today = dayjs().format("dddd, DD MMM YYYY");

$("#currentDay").text(today);


function nineAM (){
var timeOf9 = 9;
if (timeOf9 < dayjs().hour()){
  $("#hour-9").addClass("past");
}
else if (timeOf9 === dayjs().hour()) {
  $("#hour-9").addClass("present");
}
else if (timeOf9 > dayjs().hour()) {
  $("#hour-9").addClass("future");
}
}


nineAM()

function tenAM (){
var timeOf10 = 10;
if (timeOf10 < dayjs().hour()){
  $("#hour-10").addClass("past");
}
else if (timeOf10 === dayjs().hour()) {
  $("#hour-10").addClass("present");
}
else if (timeOf10 > dayjs().hour()) {
  $("#hour-10").addClass("future");
}
}

tenAM()

function elevenAM (){
var timeOf11 = 11;
if (timeOf11 < dayjs().hour()){
  $("#hour-11").addClass("past");
}
else if (timeOf11 === dayjs().hour()) {
  $("#hour-11").addClass("present");
}
else if (timeOf11 > dayjs().hour()) {
  $("#hour-11").addClass("future");
}
}
  
elevenAM()

function twelvePM (){
var timeOf12 = 12;
if (timeOf12 < dayjs().hour()){
  $("#hour-12").addClass("past");
}
else if (timeOf12 === dayjs().hour()) {
  $("#hour-12").addClass("present");
}
else if (timeOf12 > dayjs().hour()) {
  $("#hour-12").addClass("future");
}
}
    
twelvePM()

function onePM (){
var timeOf1 = 13;
if (timeOf1 < dayjs().hour()){
  $("#hour-1").addClass("past");
}
else if (timeOf1 === dayjs().hour()) {
  $("#hour-1").addClass("present");
}
else if (timeOf1 > dayjs().hour()) {
  $("#hour-1").addClass("future");
}
}
      
onePM()

function twoPM (){
var timeOf2 = 14;
if (timeOf2 < dayjs().hour()){
  $("#hour-2").addClass("past");
}
else if (timeOf2 === dayjs().hour()) {
  $("#hour-2").addClass("present");
}
else if (timeOf2 > dayjs().hour()) {
  $("#hour-2").addClass("future");
}
}
        
twoPM()

function threePM (){
var timeOf3 = 15;
if (timeOf3 < dayjs().hour()){
  $("#hour-3").addClass("past");
}
else if (timeOf3 === dayjs().hour()) {
  $("#hour-3").addClass("present");
}
else if (timeOf3 > dayjs().hour()) {
  $("#hour-3").addClass("future");
}
}
          
threePM()

function fourPM (){
var timeOf4 = 16;
if (timeOf4 < dayjs().hour()){
  $("#hour-4").addClass("past");
}
else if (timeOf4 === dayjs().hour()) {
  $("#hour-4").addClass("present");
}
else if (timeOf4 > dayjs().hour()) {
  $("#hour-4").addClass("future");
}
}

fourPM()

function fivePM (){
var timeOf5 = 17;
if (timeOf5 < dayjs().hour()){
  $("#hour-5").addClass("past");
}
else if (timeOf5 === dayjs().hour()) {
  $("#hour-5").addClass("present");
}
else if (timeOf5 > dayjs().hour()) {
  $("#hour-5").addClass("future");
}
}
              
fivePM()

var hour9 = $("#hour-9 textarea")[0]
var hour10 = $("#hour-10 textarea")[0]
var hour11 = $("#hour-11 textarea")[0]
var hour12 = $("#hour-12 textarea")[0]
var hour1 = $("#hour-1 textarea")[0]
var hour2 = $("#hour-2 textarea")[0]
var hour3 = $("#hour-3 textarea")[0]
var hour4 = $("#hour-4 textarea")[0]
var hour5 = $("#hour-5 textarea")[0]

var textAreaArray = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5]



saveBtn9.on("click", function(){
  textAreaArray;
  localStorage.setItem("9amText", textAreaArray[0].value);
})
function display9(){
  var input9 = localStorage.getItem("9amText");
  $("#hour-9 textarea").text(input9);
}
display9();



saveBtn10.on("click", function(){
  textAreaArray;
  localStorage.setItem("10amText", textAreaArray[1].value);
})
function display10(){
  var input10 = localStorage.getItem("10amText");
  $("#hour-10 textarea").text(input10);
}
display10();



saveBtn11.on("click", function(){
  textAreaArray;
  localStorage.setItem("11amText", textAreaArray[2].value);
})
function display11(){
  var input11 = localStorage.getItem("11amText");
  $("#hour-11 textarea").text(input11);
}
display11();


saveBtn12.on("click", function(){
  textAreaArray;
  localStorage.setItem("12pmText", textAreaArray[3].value);
})
function display12(){
  var input12 = localStorage.getItem("12pmText");
  $("#hour-12 textarea").text(input12);
}
display12();



saveBtn1.on("click", function(){
  textAreaArray;
  localStorage.setItem("1pmText", textAreaArray[4].value);
})
function display1(){
  var input1 = localStorage.getItem("1pmText");
  $("#hour-1 textarea").text(input1);
}
display1();




saveBtn2.on("click", function(){
  textAreaArray;
  localStorage.setItem("2pmText", textAreaArray[5].value);
})
function display2(){
  var input2 = localStorage.getItem("2pmText");
  $("#hour-2 textarea").text(input2);
}
display2();




saveBtn3.on("click", function(){
  textAreaArray;
  localStorage.setItem("3pmText", textAreaArray[6].value);
})
function display3(){
  var input3 = localStorage.getItem("3pmText");
  $("#hour-3 textarea").text(input3);
}
display3();




saveBtn4.on("click", function(){
  textAreaArray;
  localStorage.setItem("4pmText", textAreaArray[7].value);
})
function display4(){
  var input4 = localStorage.getItem("4pmText");
  $("#hour-4 textarea").text(input4);
}
display4();






saveBtn5.on("click", function(){
  textAreaArray;
  localStorage.setItem("5pmText", textAreaArray[8].value);
})
function display5(){
  var input5 = localStorage.getItem("5pmText");
  $("#hour-5 textarea").text(input5);
}
display5();



//----------------------------------------------------------------------------------------------
// saveBtn.on("click", function(){

// })

// move everything into curly brackets of the given function
//taverse dom to add an  listener to a parent id, telling it to listen for a click on one of its children
//have the button save the time-block for whatever we savd to our local storage


// make array for local storage for each timeblock
//make array for displaying local storage for its correspond on previous array






$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
