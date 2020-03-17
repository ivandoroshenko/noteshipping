$(document).ready(function($) {
	let form = $('#contactForm');
	let action = form.attr('action');
	let successMessage = $('#formSuccess');
	let resetButton = $('#resetButton');

	form.on('submit', function(event) {
		let formData = {
			contactName: $('#name').val(),
			contactAddress: $('#address').val(),
			contactTel: $('#tel').val(),
			contactMail: $('#mail').val(),
			contactMessage: $('#message').val()
		}

		$.ajax({
				url: action,
				type: 'POST',
				data: formData,
				error: function (request, txtstatus, errorThrowm){
					console.log(request);
					console.log(txtstatus);
					console.log(errorThrowm);
					form.html(request, txtstatus, errorThrowm);

				},
				success: function(){
					successMessage.addClass('active');
					resetButton.on('click', function(){
						successMessage.removeClass('active');
					});
				}
			})

		event.preventDefault();
		
	});
});