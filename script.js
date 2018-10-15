$(document).ready(function() {


    $("#button_effects1").click(function() {
   	 $("#button_effects1").hide("slow");
    });
     
    $("#button_effects2").mouseenter(function() {
    	$("#button_effects2").fadeTo(1000,0.5);
    });

    $("#button_effects2").mouseenter(function() {
    	$("#button_effects2").fadeIn(1000, 1);
    });
    
    $("#button_effects3").click(function() {
     $("#button_effects3").slideUp("slow");
    });

    $("#button_effects3").click(function() {
    	$("#button_effects3").slideDown("slow");
    });
    
    
    $("#button_effects4").mouseenter(function() {
    	$("#button_effects4").fadeTo(1000,0.5);
    });

    $("#button_effects4").mouseleave(function() {
    	$("#button_effects4").fadeTo(1000, 1);
   
   });
});