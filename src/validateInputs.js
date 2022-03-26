

function manageInputs() {
    document.querySelector('#email').addEventListener('keyup', emailFormatting); 
    document.querySelector('#country').addEventListener('keyup',countryFormatting); 
    const password1 = document.querySelector('#password'); 
    const password2 = document.querySelector('#password-2'); 
    [password1, password2].forEach(password => {
        password.addEventListener('keyup', passwordFormatting.bind(password))
    });

}


function emailFormatting() {
    let email = document.querySelector('#email'); 
    let valid = true;
    email.classList.remove('error');
        if(email.validity.typeMismatch) {
            console.log('value is not valid')
            email.setCustomValidity('Please enter a valid email address'); 
            email.reportValidity(); 
            email.classList.add('error'); 
            valid = false;
        } 
        
        if (email.validity.valueMissing) {
            email.setCustomValidity('This is a required field'); 
            email.reportValidity(); 
            email.classList.add('error')
            valid = false;

        }
    return valid;
}

function countryFormatting() {
    let country = document.querySelector('#country');
    let valid = true;
    country.classList.remove('error');        
        if (country.validity.valueMissing) {
            country.setCustomValidity('This is a required field'); 
            country.reportValidity(); 
            country.classList.add('error');
            valid = false;

        }
        return valid;
}

function passwordFormatting() {
    let valid = true;
    const password1 = document.querySelector('#password'); 
    const password2 = document.querySelector('#password-2'); 

    this.classList.remove('error');  
    // Check minimum length 
    if (this.value.length < this.min) {
        this.setCustomValidity(`The password needs to be at least ${this.min} characters`); 
        this.reportValidity(); 
        this.classList.add('error')
    }

    // check passwords match
    if (password1.value != password2.value && password1.value != '' && password2.value != '') {
        this.setCustomValidity(`The passwords need to match`); 
        this.reportValidity(); 
        this.classList.add('error')
    }
  
    return valid;
}

export {manageInputs, passwordFormatting, countryFormatting, emailFormatting}; 