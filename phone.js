$(document).ready(function() { // do this when the document is loaded
 
// //////////////////////// TABS /////////////////////////


 //  Show the Dialer at the beginning 
 
 $(".tab_content").hide();
 $("#dialer").show(); // show the element with ID "element"
 $("#dialer_btn").addClass('active');

 // Clicking tabs
 
 $(".tab_btn").click(function(){

  // change color of tab button
  
  $(".tab_btn.active").toggleClass('active');
  $(this).toggleClass('active');



  // whow content
  
  var id = $(this).attr('id');
  var tab_name = id.substring(0,id.indexOf("_btn"));

  $(".tab_content").hide();
  $("#"+tab_name).fadeToggle('fast', null);

 })


//////////////////////// DIALER /////////////////////////


$(".key").click(function(){
  var key = $(this).text()
  var currentText = $("#dialer_input").val();
  $("#dialer_input").val(currentText+key)
})

$("#clear_btn").click(function(event) {
  /* Act on the event */
  $("#dialer_input").val("");
});



//////////////////////// GESTURES /////////////////////////

// initiate vars
var x1,x2,y1,y2=0

$("#gesture_pad").mousedown(function(event) {
  /* Act on the event */
  $("#gesture_log p").text("mouse down")
  $(this).css("backgroundColor","blue")
  x1 = event.clientX
  y1 = event.clientY
}).mouseup(function(event) {
  /* Act on the event */
  $("#gesture_log p").text("mouse up")
  $(this).css("backgroundColor","lightgrey")
  x2 = event.clientX
  y2 = event.clientY
  gesture = trackSwipe(x1,y1,x2,y2);
  $("#gesture_log p").text(gesture)
}).mouseout(function(event) {
  /* Act on the event */
  $(this).css("backgroundColor","darkgrey")
  $("#gesture_log p").text("Enter the area to be tracked")
}).mouseenter(function(event) {
  /* Act on the event */
  $(this).css("backgroundColor","lightgrey")
  $("#gesture_log p").text("mouse entered")
}).mousemove(function(event) {
  /* Act on the event */
  $("#gesture_log p").text("x:"+event.clientX+" y:"+event.clientY)
});


function trackSwipe(x1,y1,x2,y2){
  if(x2>x1){
    return "swipe right"
  }else if(x2<x1){
    return "swipe left"
  }
}


//////////////////////// LOW Visison /////////////////////////


$("#low_vision_button").click(function(event) {
  /* Act on the event */
  NORMAL_CSS = "phone.css"
  LOW_VISION_CSS = "phone_lowVision.css"
  current_css = $("#pageStyle").attr('href');
  if(current_css === NORMAL_CSS){
    $("#pageStyle").attr('href', LOW_VISION_CSS);
  }else{
    $("#pageStyle").attr('href', NORMAL_CSS);
  }
});












});