const footerSubmit = document.getElementById('submitButton');
const formInputs = document.getElementsByClassName('formInputs');
document.head.appendChild(style)
let emailValue = ""
formInputs[1].addEventListener('change', function () {
    emailValue = formInputs[1].value
})
footerSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (
        formInputs[0].value.length > 3 &&
        formInputs[1].value.length > 3 &&
        formInputs[2].value.length > 3 &&
        formInputs[3].value.length > 3 &&
        emailValue.includes("@gmail")
    ) {
        setTimeout(() => {
            style.innerHTML = `
            #submitButton{
                cursor:default;
                &::before{
                    display:none;
                }
            }`;
            footerSubmit.disabled = true;
            footerSubmit.style.backgroundColor = `white`
            footerSubmit.style.color = `green`
            footerSubmit.style.gap = `10px`
            footerSubmit.innerHTML = '<i class="fa-solid fa-check" style="color:green"></i> The message was sent successfully!';
        }, 200);
        setTimeout(() => {
            style.innerHTML = `
            #submitButton{
                cursor:pointer;
                &::before{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }`;
            footerSubmit.disabled = false;
            footerSubmit.style.backgroundColor = `#45A29F`
            footerSubmit.style.color = `white`
            footerSubmit.style.gap = `0`
            footerSubmit.innerHTML = 'SUBMIT';

            for (let j = 0; j < formInputs.length; j++) {
                formInputs[j].value = "";
            }
        }, 1500);
    } else {
        if (!emailValue.includes("@gmail")) {
            setTimeout(() => {
                style.innerHTML = `
                #submitButton{
                    cursor:default;
                    &::before{
                        display:none;
                    }
                }`;
                footerSubmit.disabled = true;
                footerSubmit.style.backgroundColor = `white`
                footerSubmit.style.color = `red`
                footerSubmit.style.gap = `10px`
                footerSubmit.innerHTML = '<i class="fa-solid fa-close" style="color:red"></i> Email field must be contain @gmail!';

            }, 200);
            setTimeout(() => {
                style.innerHTML = `
                #submitButton{
                    cursor:pointer;
                    &::before{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                }`;
                footerSubmit.disabled = false;
                footerSubmit.style.backgroundColor = `#45A29F`
                footerSubmit.style.color = `white`
                footerSubmit.style.gap = `0`
                footerSubmit.innerHTML = 'SUBMIT';

            }, 1200);
        } else {
            setTimeout(() => {
                style.innerHTML = `
                #submitButton{
                    cursor:default;
                    &::before{
                        display:none;
                    }
                }`;
                footerSubmit.disabled = true;
                footerSubmit.style.backgroundColor = `white`
                footerSubmit.style.color = `red`
                footerSubmit.style.gap = `10px`
                footerSubmit.innerHTML = '<i class="fa-solid fa-close" style="color:red"></i> Every field must be 4 length at least!';

            }, 200);
            setTimeout(() => {
                style.innerHTML = `
                #submitButton{
                    cursor:pointer;
                    &::before{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                }`;
                footerSubmit.disabled = false;
                footerSubmit.style.backgroundColor = `#45A29F`
                footerSubmit.style.color = `white`
                footerSubmit.style.gap = `0`
                footerSubmit.innerHTML = 'SUBMIT';

            }, 1200);
        }
    }
})