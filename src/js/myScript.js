$(document).ready(function () {

	let options = {
		threshold: [0.5]
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

	/*
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








	$(window).scroll(() =>{
            let scrollDistance = $(window).scrollTop();
        $(".container, .skills, .portfolio, .statistic, .reviews, .my_nomber").each((i, el) => {
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
