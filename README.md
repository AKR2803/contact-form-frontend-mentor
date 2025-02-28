# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### Screenshot

![Preview](./preview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- Basic form validation and styling.
- Custom styling radio buttons based on user preferences using JavaScript

### Useful resources

- [Arrays .some() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#parameters) 
  - This method can especially be useful to check if some radio button is checked among a group of radio buttns.
  - [In the code]() the method is used something like this:
  ```javascript
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
  ```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)