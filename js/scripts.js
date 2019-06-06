


$(document).ready(function(){

  $( "input" ).on( "click", function(event) {

    var animal = $("input:checked").val();

      if (animal==="turtle"){
        $(".turtles").show();
        $(".snakes").hide();
        $(".insects").hide();
      } else if (animal==="snake"){
        $(".snakes").show();
        $(".turtles").hide();
        $(".insects").hide();
      } else {
        $(".insects").show();
        $(".snakes").hide();
        $(".turtles").hide();
      }

    event.preventDefault();
  });

})
