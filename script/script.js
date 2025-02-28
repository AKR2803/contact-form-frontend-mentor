'use strict';

const radioButtons = document.querySelectorAll('input[name="query-type"]');

radioButtons.forEach((radio) => {    
    // on selecting a radio button, change its styling (border and background color)
    radio.addEventListener('change', (event) => {

        // give all other radio buttons normal styling    
        radioButtons.forEach((rb) => {
            // .closest() find the closest ancestor of the specified type including the current element
            // Ref: [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#javascript]
            rb.closest('label').style.backgroundColor = '';
            rb.closest('label').style.border = '';
        });

        // for the one radio button that is checked(selected), provide the custom styling
        if(radio.checked){
            radio.closest('label').style.backgroundColor = '#dff1e7';
            radio.closest('label').style.border = '1.5px solid #0c7d69';
        }
    });
});

// submit the form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default behaviour of submitting the form and sending data to a server

    // form validity
    let isValid = true;  

    // error text is the error msg for input type text
    let errorText = document.querySelectorAll(".error-text");

    // console.dir(errorText);

    errorText.forEach(errorMsg => {
        // we select the inpt fileds, first-name, last-name, email and textarea using the error-text elements
        // for each error-text element, we have the previous element as the input element (check the HTML)
        // hence we can use .previousElementSibling, and then check if the input is not empty
        let inputField = errorMsg.previousElementSibling;

        if(inputField){
            if(inputField.value.trim() === ""){
                errorMsg.style.display = "block";
                isValid = false;
            }
            else{
                errorMsg.style.display = "none";
            }
        }
    });
   

    let radios = document.querySelectorAll("input[type='radio']");
    
    // error radio is the error msg for input type radio
    let errorRadio = document.querySelector('.error-text-radio');

    if(radios){
        // radios is NodeList, to use .some() method we need to convert it to an array first
        // .some() says as long as some element of the array is satifying a condition return true
        // Ref : [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some]
        let isChecked = Array.from(radios).some(radio => radio.checked);

        // if no radio button is checked then show the error under radio buttons and assign `isValid = false`
        if(!isChecked){
            errorRadio.style.display = "block";
            isValid = false;
        } 
        // else the radio button part is valid
        else{
            errorRadio.style.display = "none";
        }
    }

    // validating the consent checkbox 
    let consentCheckbox = document.querySelector("input[type='checkbox']");  

    // error checkbox is the error msg for input type checkbox
    let errorCheckbox = document.querySelector('.error-text-checkbox');

    // if the consent is given, i.e. the checkboc is checked, then validate the form, else set isValid = false 
    if(consentCheckbox){
        if(!consentCheckbox.checked){
            errorCheckbox.style.display = "block";
            isValid = false;
        } else{
            errorCheckbox.style.display = "none";
        }
    }

    // if all the elements in the form are valid, submit the form and .reset() it then
    if(isValid){
        
        // reset the form
        document.querySelector("form").reset();
        
        // reset the error text if any
        errorText.forEach(error => error.style.display = "none");
        if(errorRadio) errorRadio.style.display = "none";
        if(errorCheckbox) errorCheckbox.style.display = "none";
        
        // reset the radio buttons styling back to normal
        // because we gave it custom styling using javascript on clicking the radio buttons
        // reset that styling using javascript when the form is submitted 
        radioButtons.forEach((radio) => {
            // .closest() find the closest ancestor of the specified type including the current element
            // Ref: [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#javascript]
            radio.closest('label').style.backgroundColor = '';
            radio.closest('label').style.border = '';
        });

        // show an alert on successful form submission
        alert("Form Submitted Succesfully");
    }
});