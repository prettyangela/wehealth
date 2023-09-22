// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const city = document.getElementById('city').value;
	const zipCode = document.getElementById('zip-code').value;
	const status = document.getElementById('status').checked;

	return{
		name, email, city, zipCode, status
	}
}

function isNumber(str) {
	for(let i = 0; i < str.length; i++){
		if(isNaN(parseInt(str[i]))){
			return false;
		}
	}

	return true;
}

function checkboxIsChecked() {
	const checkBox = document.getElementById('status');

	if(checkBox.checked) {
		return true;
	} else {
		return false;
	}
}

function validateFormData({ name, city, email, zipCode, status} = {}) { 
	return name && city && email && isNumber(zipCode) && checkboxIsChecked();
	
}

function submit() {
	const data = handleGetFormData();
	const isValid = validateFormData(data);
	const warningDiv = document.getElementById("warning");
	

	if (!isValid) {
		warningDiv.textContent = "Periksa form anda sekali lagi";
	} else {
		warningDiv.textContent = "";
	}
}
 addEventListener("DOMContentLoaded", ()=>document.forms[0].addEventListener("submit", submit));

