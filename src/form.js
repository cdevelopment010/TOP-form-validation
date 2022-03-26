import {emailFormatting, countryFormatting, passwordFormatting} from './validateInputs'; 

export default function createForm() {
    const root = document.getElementById('root'); 
    const title = document.createElement('h1'); 
    const form = document.createElement('form'); 
    const button = document.createElement('button'); 
    
    let fields = {
        email: {
            label: 'email',
            type: 'email', 
            id: 'email', 
            minLen: 6
        }, 
        postcode: {
            label: 'postcode',
            type: 'text', 
            id: 'postcode',
            minLen: 5
        }, 
        country: {
            label: 'country',
            type: 'text', 
            id: 'country',
            minLen: 3
        }, 
        password: {
            label: 'password',
            type: 'password', 
            id: 'password',
            minLen: 8
        }, 
        'confirm-password': {
            label: 'confirm password',
            type: 'password', 
            id: 'password-2',
            minLen: 8
        }
    }


    for (let props in fields) {
        const input = createInput(fields[props]); 
        form.append(input); 
    }
    button.innerText = 'submit';
    button.addEventListener('click', validateForm); 
    button.type = 'submit'; 
    // form.noValidate = true; 
    form.append(button)
    form.id = 'form'
    form.method='post'

    title.innerText = `Form Validation`
    root.append(title);
    root.append(form); 
}


function createInput(item) {
    const label = document.createElement('label');
    const input = document.createElement('input'); 
    
    label.append(item.label[0].toUpperCase() + item.label.slice(1).toLowerCase() + ": "); 
    input.type = item.type;
    input.id = item.id
    input.min= item.minLen; 
    input.required = true;
    label.append(input);

    return label;
}

function validateForm( e ) {
    e.preventDefault(); 
    let valid = true; 
    let form = document.querySelector('#form'); 
    let inputs = form.querySelectorAll('input'); 
    inputs.forEach(input => {

        input.classList.remove('error');
        if (input.validity.valueMissing) {
            input.classList.add('error');
            input.setCustomValidity('Please enter value'); 
            input.reportValidity();
            valid = false;  
        }
    })

    if (!passwordFormatting.bind(document.querySelector('#password')) || !passwordFormatting.bind(document.querySelector('#password-2'))  
            || !countryFormatting() || !emailFormatting()) {
        console.log('FAIL'); 
        valid = false; 
    }

    if (!valid ){
        console.log(`form isn't valid`)
    } else {
        alert(`Nice one! Form has been submitted.`)
    }
}