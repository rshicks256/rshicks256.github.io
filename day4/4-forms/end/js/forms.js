//https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData(data) {
	var XHR = new XMLHttpRequest();
	var urlEncodedData = "";
	var urlEncodedDataPairs = [];
	var name;

	urlEncodedDataPairs.push(encodeURIComponent("name") + '=' + encodeURIComponent(document.getElementById("name").value));
	urlEncodedDataPairs.push(encodeURIComponent("send_to") + '=' + encodeURIComponent(document.getElementById("send_to").value));
	urlEncodedDataPairs.push(encodeURIComponent("email") + '=' + encodeURIComponent(document.getElementById("email").value));
	urlEncodedDataPairs.push(encodeURIComponent("phone") + '=' + encodeURIComponent(document.getElementById("phone").value));
	urlEncodedDataPairs.push(encodeURIComponent("date") + '=' + encodeURIComponent(document.getElementById("date").value));
	urlEncodedDataPairs.push(encodeURIComponent("qty") + '=' + encodeURIComponent(document.getElementById("qty").value));


	//radio buttons
	let radio = document.getElementsByName("ufotype")
	for (var i = 0, length = radio.length; i < length; i++) {
		if (radio[i].checked) {
			urlEncodedDataPairs.push(encodeURIComponent("ufotype") + '=' + encodeURIComponent(radio[i].value));
		}
	}

	//dropdown menu
	var dropdown = document.getElementById("abtype");
	urlEncodedDataPairs.push(encodeURIComponent("abtype") + '=' + encodeURIComponent(dropdown.options[dropdown.selectedIndex].text));

	urlEncodedDataPairs.push(encodeURIComponent("comments") + '=' + encodeURIComponent(document.getElementById("comments").value));
	urlEncodedDataPairs.push(encodeURIComponent("subscribe") + '=' + encodeURIComponent(document.getElementById("subscribe").checked));

	// Combine the pairs into a single string and replace all %-encoded spaces to 
	// the '+' character; matches the behaviour of browser form submissions.
	urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

	// Define what happens on successful data submission
	XHR.addEventListener('load', function (event) {
		if (XHR.readyState === XHR.DONE) {
			if (XHR.status === 200) {
				alert('Your order has been received! Check your email.');
			} else {
				alert('Oh oh! We have a problem! ' + XHR.responseText + '.');
			}
		}
	});

	// Define what happens in case of error
	XHR.addEventListener('error', function (event) {
		// This is normally a timeout or connection error.
		alert('Oops! Something went wrong.');
	});

	// Set up our request
	XHR.open('POST', 'https://e3vwdl4bpd.execute-api.us-west-2.amazonaws.com/default/API2SES');

	// Add the required HTTP header for form data POST requests
	XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	// Finally, send our data.
	XHR.send(urlEncodedData);
}