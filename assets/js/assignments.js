function submit_function(el){
	caller = $(el);

	// In case it is called a second time
	reset_redtext();

	form = caller.parent('form');

	required_fields = form.find('.required input');

	required_fields.each(function(){
		if($(this).is(":checkbox")){
			// Because checkboxes are weird
			if($(this)[0].checked == false){
				$(this).parent().addClass('red-text');
			}

		}else{
			if($(this).val() === ""){
				$(this).parent().addClass('red-text');
			}
		}

	});

}

function sumbmit_sucess(){
	var submit = document.getElementById("sucess");
	sucess.style.display = "block";
}
function showHome(){
	var home = document.getElementById("home");
	home.style.display = "block";
}


function reset_redtext(){

	// Remove all red-text classes in the document
	$(".red-text").removeClass('red-text');
}


$(document).ready(function(){

	required_fields = $(".required");
	$("#response_area p").html("There are " + required_fields.length + " required fields");
});
