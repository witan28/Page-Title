$(".answer").hide();
$(".wronganswer").hide();
$(".Reset").hide();

$(".Submit").click(function(x) {
    var x = $("input").val();
  if (x === '1+1') { 
    console.log ("Correct");
    $(".wronganswer").hide();
    $(".answer").show();
    $("h1").hide();
    $("h2").hide();
    $("input").hide();
    $("button").hide();
    $("body").css("background-color","lightblue");
    $(".Reset").show();
    } else {
    console.log("No");
    $(".wronganswer").show();
  }
});

$(".Reset").click(function(){
    $("h1").show();
    $("h2").show();
    $("input").show();
    $(".Submit").show();
    $("body").css("background-color","green");
    $("input").val("");
    $(".answer").hide();
    $(".wronganswer").hide();
    $(".Reset").hide();
});