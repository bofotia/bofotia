jQuery(function($){

var PASTA = window.PASTA || {};

/* ==================================================
	Reservation Form Validations
================================================== */
	PASTA.ReservationForm = function(){
		$('.reservation-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#rv-message").slideUp(750,function() {
			$('#rv-message').hide();

			$('#rv-submit')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				name: $('#rv-name').val(),
				phone: $('#rv-phone').val(),
				comment: $('#rv-comment').val()
						
			},
				function(data){
					document.getElementById('rv-message').innerHTML = data;
					$('#rv-message').slideDown('slow');
					$('.reservation-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#rv-submit').removeAttr('disabled');
					if(data.match('success') != null) $('.reservation-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}

/* ==================================================
	Contact Form Validations business
================================================== */
	PASTA.ContactForm = function(){
		$('.contact-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#contact-message").slideUp(750,function() {
			$('#contact-message').hide();

			$('#submit')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				purpose: $('#purpose').val(),
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				job: $('#job').val(),
				company: $('#company').val(),
				info: $('#info').val()
							},
				function(data){
					document.getElementById('contact-message').innerHTML = data;
					$('#contact-message').slideDown('slow');
					$('.contact-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('.contact-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}

/* ==================================================
	Contact Form Validations careers
================================================== */
	PASTA.CareersForm = function(){
		$('.careers-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#careers-message").slideUp(750,function() {
			$('#careers-message').hide();

			$('#submit-careers')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				job: $('#job').val(),
				company: $('#company').val(),
				info: $('#info').val()
							},
				function(data){
					document.getElementById('careers-message').innerHTML = data;
					$('#careers-message').slideDown('slow');
					$('.careers-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit-careers').removeAttr('disabled');
					if(data.match('success') != null) $('.careers-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}


/* ==================================================
	Contact Form Validations investors
================================================== */
	PASTA.InvestorsForm = function(){
		$('.investors-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#investors-message").slideUp(750,function() {
			$('#investors-message').hide();

			$('#submit-investors')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				job: $('#job').val(),
				company: $('#company').val(),
				info: $('#info').val()
							},
				function(data){
					document.getElementById('investors-message').innerHTML = data;
					$('#investors-message').slideDown('slow');
					$('.investors-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit-investors').removeAttr('disabled');
					if(data.match('success') != null) $('.investors-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}


/* ==================================================
	Contact Form Validations partner
================================================== */
	PASTA.PartnerForm = function(){
		$('.partner-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#partner-message").slideUp(750,function() {
			$('#partner-message').hide();

			$('#submit-partner')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				job: $('#job').val(),
				company: $('#company').val(),
				info: $('#info').val()
							},
				function(data){
					document.getElementById('partner-message').innerHTML = data;
					$('#partner-message').slideDown('slow');
					$('.partner-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit-partner').removeAttr('disabled');
					if(data.match('success') != null) $('.partner-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}

/* ==================================================
	Contact Form Validations media
================================================== */
	PASTA.MediaForm = function(){
		$('.media-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#media-message").slideUp(750,function() {
			$('#media-message').hide();

			$('#submit-media')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				job: $('#job').val(),
				company: $('#company').val(),
				info: $('#info').val()
							},
				function(data){
					document.getElementById('media-message').innerHTML = data;
					$('#media-message').slideDown('slow');
					$('.media-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit-media').removeAttr('disabled');
					if(data.match('success') != null) $('.media-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}


/* ==================================================
	Newsletter Form Validations
================================================== */
	PASTA.Newsletter = function(){
		$('.newsletter-form').each(function(){
			var formInstance = $(this);
			formInstance.submit(function(){

			var action = $(this).attr('action');

			$("#nl-message").slideUp(750,function() {
			$('#nl-message').hide();

			$('#nl-submit')
				.after('<img src="images/ajax-loader-bg.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				email: $('#nl-email').val()
			},
				function(data){
					document.getElementById('nl-message').innerHTML = data;
					$('#nl-message').slideDown('slow');
					$('.newsletter-form img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#nl-submit').removeAttr('disabled');
					if(data.match('success') != null) $('.newsletter-form').slideUp('slow');

				}
			);
			});
			return false;
		});
		});
	}

  /* ==================================================
   Init Functions
================================================== */
$(document).ready(function(){
	PASTA.ReservationForm();
	PASTA.InvestorsForm();
	PASTA.PartnerForm();
	PASTA.MediaForm();
	PASTA.CareersForm();
	PASTA.ContactForm();
	PASTA.Newsletter();
});

	});
