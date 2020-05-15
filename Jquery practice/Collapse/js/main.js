$(".ans-one").hide();
$(".ans-two").hide();
$(".ans-three").hide();
$(".fa-minus").hide();

$(".question-one").click(function(){
	$(".ans-one").toggle(300);
	$(".fa-plus").hide(200);
	$(".fa-minus").show(200);
	$(".ans-two").hide(200);
	$(".ans-three").hide(200);
});

$(".question-two").click(function(){
	$(".ans-two").toggle(300);
	$(".ans-one").hide(200);
	$(".ans-three").hide(200);
});

$(".question-three").click(function(){
	$(".ans-three").toggle(300);
	$(".ans-one").hide(200);
	$(".ans-two").hide(200);
});