function submitForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }
    
    document.getElementById('resultName').innerText = "Name: " + name;
    document.getElementById('resultEmail').innerText = "Email: " + email;
    document.getElementById('resultMessage').innerText = "Message: " + message;
    
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('thankYouContainer').style.display = 'block';
}