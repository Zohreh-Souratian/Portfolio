$("input").keypress(function(event){
	if(event.which===13){
		var task=$(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+task+"</li>");
		$("input").val("");
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("h1 i").click(function(){
	$("input").toggle();
	$("ul").toggle();
});


