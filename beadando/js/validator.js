$( document ).ready(function() {
    $( "#orderbutton" ).click(function() {
		var name = $('#name').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var animal = $('#animal').is(':checked');
		var safe = $('#safe').is(':checked');
		var bigsize = $('#bigsize').is(':checked');
		var delivery = $('input[name=delivery]:checked').val();
		
		function isValidEmailAddress(emailAddress) {
			var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return pattern.test(emailAddress);
		};
		if(!isValidEmailAddress(email)) {
			alert("Hibás email cím!");
			return -1;
		}
		
		if(name == "" || email == "" || address == "") {
			alert("Minden mezőt kötelező kitölteni!");
			return -1;
		}
		
		var message = "Köszönjük, hogy minket választott!\nAz Ön rendelési adatai:\nNév: " + name + "\nEmail: " + email + "\nCím: " + address + "\nSzállítás módja: ";
		if(delivery == "fast") {
			message += "Gyors\n";
		}
		else {
			message += "Lassú\n";
		}
		message += "Extrák: ";
		if(animal) {
			message += "Kisállat "
		}
		if(safe) {
			message += "Törékeny "
		}
		if(bigsize) {
			message += "Nagyméretű "
		}
		alert(message);
	});
});