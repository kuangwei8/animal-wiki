


$(document).ready(function(){
  
  $( "input" ).on( "click", function(event) {

    var animal = $("input:checked").val();

      if (animal==="turtle"){
        $(".turtles").show();
      } else if (animal==="snake"){
        $(".snakes").show();
      } else {
        $(".insects").show();
      }

    event.preventDefault();
  });

})
