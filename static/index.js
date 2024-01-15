//automatic input cursor focus
function moveToNext(currentInput){
    const maxLength= parseInt(currentInput.getAttribute("maxlength"));
    const currentLength= currentInput.value.length;

    if(currentLength === maxLength){
        const nextInput = currentInput.nextElementSibling;

        if (nextInput){
            nextInput.focus()
        }
    };
    input.value= input.value.replace(/[^0-9]/g, '');


};

//reverse input deletion
function handleBackspace(currentInput, event){
    const currentLength= currentInput.value.length

    if(event.keyCode === 8 && currentLength === 0){
        const previousInput= currentInput.previousElementSibling
        if(previousInput){
            previousInput.value = ''
            previousInput.focus()
        }
    }

    const otpInputs= document.querySelectorAll('input[name^="otp_digit_"]')
//form submission on last input
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function(){
            if (input.value.length === 1){
                if (index === otpInputs.length-1){
                    document.getElementById('otp-form').submit();
                }    
            } 
            else {
                otpInputs[index + 1].focus()
            }
        })
    })
}

//automatic loginform submission
document.getElementById('passwd').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        document.getElementById(login-form).submit();
    }
});

//password visibility
const eyeIcon= document.getElementById('eye-icon')
const passwordInput= document.getElementById('passwd')

eyeIcon.onclick = function(){
    if (passwordInput.type === 'password'){
        passwordInput.type === 'text'
    }else{
        passwordInput.type === 'password'
    }
}