$( document ).ready(function() {
  $(".showMore").hide();
  $(".btn-show-less").hide();
  $(".showLess").show();


$(".btn-show-more").click(function(){
	$(".showMore").show(300);
	$(".btn-show-less").show(300);
	$(".btn-show-more").hide(300);
});
$(".btn-show-less").click(function(){
	$("showMore").hide(300);
	$(".showLess").show(300);
	$(".btn-show-less").hide(300);
	$(".btn-show-more").show(300);
});


});
