$(document).ready(function(){
    $("li").hover(function(){
      $(this).css("background-color", "#88f057");
      $(this).css("color", "#000001");
    }, function(){
      $(this).css("background-color", "#000001");
      $(this).css("color", "#f3f3f3");
    });
  });