var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
  // if the name is = 0 we display  name is required and return false.
    if(name.length === 0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    // to find if the name is full
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full Name'
        return false;
    }
    nameError.innerHTML = '<i class= "fas fa-check-circle"></i>'
    return true;
}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length === 0){
        phoneError.innerHTML = 'phone no is required'
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please.'
        return false;
    }
    phoneError.innerHTML = '<i class= "fas fa-check-circle"></i>'
    return true;

}
 function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length === 0){
        emailError.innerHTML = 'Email is requireed'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid'
        return false;
    }
    emailError.innerHTML = '<i class= "fas fa-check-circle"></i>'
    return true;
 }
  
 function validateMessage(){
    var message = document.getElementById('contact-message').value; 
    
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required'
        return false;
    }
   messageError.innerHTML = '<i class= "fas fa-check-circle"></i>'
   return true;
   
 }
 function validateForm(){
    if(!validateEmail() || !validatephone() || validateMessage() || validateName() ){
        submitError.style.display = 'block'
        submitError.innerHTML = 'please fix error to submit';
        return false; 

        setTimeout(function(){ submitError.style.display = 'block'})
    }

 }