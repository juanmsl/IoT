$('.trigger').on('click', function(){
	$('.main-navbar .menu').slideToggle();
});



$('.main-navbar a, .ref-ref').on('click', function(event) {
	event.preventDefault();
	var hash = this.hash;
	$('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){window.location.hash = hash;
	});
});


$("#owl-example").owlCarousel({
	singleItem: true,
	autoPlay: false,
	autoHeight : true
});

$("#MAN-example, #WAN-example, #LAN-PAN-example").owlCarousel({
	autoPlay: true
});

$('.item-content').hide();

$('.item-name').on('click', function(){
	var isHidden = $(this).next('.item-content').is(':hidden');

	$('.item-name').removeClass('selected');
	$('.item-content').slideUp();

	if(isHidden) {
		$(this).addClass('selected');
		$(this).next('.item-content').slideDown();
	}
});

$('.cards .card').on('click', function(){
	var isActive = $(this).is('.active');
	$('.cards .card').removeClass('active');
	if(!isActive) {
		$(this).addClass('active');
	}
});

$('.modal-link').on('click', function(){
	var target = $(this).attr('href');
	$(target).addClass('is--visible');
	$('body').css('overflow', 'hidden');
});

$('.modal .modal-close').on('click', function(){
	$(this).parent().removeClass('is--visible');
	$('body').css('overflow', 'initial');
});
