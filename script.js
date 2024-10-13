document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('response-message');
  
    
    if (name === "" || email === "" || message === "") {
      responseMessage.textContent = "Please fill out all fields.";
      responseMessage.style.color = "red";
    } else {
      responseMessage.textContent = "Thank you for contacting us, " + name + "!";
      responseMessage.style.color = "orange";
  
      
      document.getElementById('contact-form').reset();
    }
  });
  
