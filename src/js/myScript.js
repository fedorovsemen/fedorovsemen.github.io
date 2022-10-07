$(document).ready(function(){
	
	
$("#inputTel").mask("+7(999) 999-9999");

	$('form').submit(function(event){
		if ($("#inputTel").val() == "" || $("#inputName").val() == ""){
			event.preventDefault();
			alert("Ведитe поле");
		}
	})
	
	
	$('a[href^="#contacts"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top +150 + "px"
	});
});
	
	
	$('a[href^="#case"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top -150 + "px"
	});
});
	
	
	$('a[href^="#about_me"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top -60 + "px"
	});

	
	
	
$(window).scroll(() =>{
            let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
                if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                    $("nav a").each((i, el) => {
                        if ($(el).hasClass("active")) {
                            $(el).removeClass("active");
                        }
                    });
                    $('nav li:eq('+ i +')').find('a').addClass('active'); 
                }
        });
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

	

