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
	
	
setTimeout(function(){ 
    modalwin = document.getElementById('modal-content');
    modalwin.style.display="block"; 
    document.getElementById("modal-close").addEventListener("click", function(){
        modalwin.style.display="none";            
    });
}, 15000);
	
	/*
	const time = 4000; 
	const step = 5;
	
	function goodclientO(num, elem){
		let 1 = document.querySelector('#' + elem);
		n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n == num){
			clearInterval(interval);
			}
			l.innerHTML = n;
		},
		t);
		}
goodclientO(1000, "goodclient");
	
	
	
	
	
	
	
	/*
	
	 это загрузка видео после того как до неё долистали тоже не получилась
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
				change.target.classList.add('');
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









/* Тут я использовал для каждой сылки , а не обьеденил всех как вы показывали в видеоуроке, тк мне не нравлось как выглядит блок с услугами на 130px, а как подругому отделить этот блок я не мог придумать */
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
