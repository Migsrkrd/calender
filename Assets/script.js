// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $(".saveBtn");

console.log(txtarea);

$("#currentDay").text(dayjs().toDate())

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
var timeOf1 = 1;
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
var timeOf2 = 2;
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
var timeOf3 = 3;
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
var timeOf4 = 4;
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
var timeOf5 = 5;
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
//----------------------------------------------------------------------------------------------
saveBtn.on("click", function(){

})

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
