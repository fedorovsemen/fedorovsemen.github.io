$(document).ready(function () {

	let options = {
		threshold: [0.2]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i, el) => {
		observer.observe(el);
	});

	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('show-animation');
			}
		});
	}

	
	

	$(".middle").css("display", "none");
	
	function calculate(){
		let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
		let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
		$(".days .digit").text(days);
		$(".price .digit").text(sum);	
	}
	$("select").on("change", function(){
		calculate();
	});
	
	/*
setTimeout(function(){ 
    modalwin = document.getElementById('modal-content');
    modalwin.style.display="block"; 
    document.getElementById("modal-close").addEventListener("click", function(){
        modalwin.style.display="none";            
    });
}, 15000);*/


$(document).ready(function(){
    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1500
    });
});
	$(document).ready(function () {
 
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
             
            show = false;
        }
    });
 
});
		

	
	
	 /*это загрузка картинок после того как до неё долистали тоже не получилась*//*
	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('');
	elements.each((i, el) => {
		observer.observe(el);
	});

	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
			
				change.target.src = change.target.dataset.src;
			}
		});
	}

*/

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
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









/* Тут я использовал для каждой сcылки , а не обьеденил всех как вы показывали в видеоуроке, тк мне не нравлось как выглядит блок с услугами на 130px, а как подругому отделить этот блок я не мог придумать */
$('a[href^="#me"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 130 + "px"
	});
});


$('a[href^="#case"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 150 + "px"
	});
});

$('a[href^="#statistic"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 150 + "px"
	});
});

$('a[href^="#reviews"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 150 + "px"
	});
});

$('a[href^="#contacts"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 150 + "px"
	});
});


$('a[href^="#services"]').click(function () {
	let valHref = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(valHref).offset().top - 230 + "px"
	});
});
