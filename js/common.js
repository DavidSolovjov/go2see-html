$(document).ready(function(){

// -------- select ----- //
$(".select select").change(function(){
  var select_val = $(this).val();
  $(this).prev().html(select_val);
});

// ---- Accordion ---- //
$(".rules p").hide();
$(".rules p:first").show();
$(".rules__title, .rules__sub-title").click(function(){
  $(".rules p").slideUp();
  $(this).next().slideDown();
  return false;
});

// ---- Sidebar Tabs ----- //
//reset
$(".tab-content").hide();
$(".tab li:first a").addClass("tab-active").show();  
$(".tab-content:first").show();
// main
  $(".tab a").click(function() { 
      $(".tab li a").removeClass("tab-active");  
      $(this).addClass("tab-active");  
      $(".tab-content").hide();  
      var activeTab = $(this).attr("href");  
      $(activeTab).show();  
      return false; 
  });
})