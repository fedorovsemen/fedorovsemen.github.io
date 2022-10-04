$(window).load(function() {
 
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
 
});



	
	
	


		

	
	
	





	

$("#inputTel").mask("+7(999) 999-9999");

	$('form').submit(function(event){
		if ($("#inputTel").val() == "" || $("#inputName").val() == ""){
			event.preventDefault();
			alert("Ведитe поле");
		}
	})



