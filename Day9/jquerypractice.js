$(document).ready(function(){
	var number=0

	$(document).on('mousemove', function(e){
		$("#boxed").css("top", e.pageY);
		$("#boxed").css("left", e.pageX);
	})

	$(document).on('keypress', function(f){
		console.log(f)
		if (f.keyCode==103) {
		$("#text").css("color", "green"); }
		else if (f.keyCode==98) {
		$("#text").css("color", "blue");	
		}
		
	});

	$(document).click(function(g){
		number++;
		$("#number").text(number);
	 })

});