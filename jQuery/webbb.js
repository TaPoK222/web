$("#firstLink").css("color", "red");
$("#firstLink").css("background-color", "blue");
$("#secondLink").css("font-size", "20px");
$("#secondLink").css("text-decoration", "none");
$("#firstp").css("color", "orange");
$("#secondp").css("text-decoration", "underline");
$("input").attr("disabled", true);
$('a').prepend("<a>&#8599;</a>");
$('a').attr('target', '_blank');
$('a').each(function(){ 
            var oldUrl = $("a").attr("href"); 
            var newUrl = oldUrl.replace("http://", "https://"); 
            $("a").attr("href", newUrl); 
});
document.write('<input type="button"  class="but"  value="Отмена действий 1 и 2 п."onClick="remov()"  ></input>');
function remov(){
    $("a:odd").remove();
    $("a").attr('target', '_self');
};
$("#bt1").click(function(){
  $("#txt1").fadeOut(3000).fadeIn(1000);
});
  $("#bt2").click(function(){
  $("#txt2").fadeTo(1500,0.5);
   });
  $("#bt3").click(function(){
   $("#txt3").slideUp(3000).slideDown(1000);
   });
   $("#bt4").click(function(){
   $("#txt4").slideUp().fadeIn(1500);
   }); 
