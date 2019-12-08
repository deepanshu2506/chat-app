const nameRegex = /^[a-zA-Z]+$/;
const usernameRegex = /^[a-zA-Z0-9._]+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var error = {'fnameError':false , 'lnameError':false , 'unameError':false,'emailError':false,'mobileError':false , 'passwordError':false , 'repasswordError' :false};

$('#firstname').on('keyup',function(event){
    if($(this).val() != '' && !nameRegex.test($(this).val()) && !error.fnameError){
        
            $(this).after('<span>*enter only alphabets</span>');
        error.fnameError = true;
    }else{
        if($(this).val() == '' || nameRegex.test($(this).val())){
            $(this).next('span').remove();
            error.fnameError = false;
        }
    }
});

$('#lastname').on('keyup',function(event){

    if($(this).val() != '' && !nameRegex.test($(this).val()) && !error.lnameError){
        
            $(this).after('<span>*enter only alphabets</span>');
        error.lnameError = true;
    }else{
        if($(this).val() == '' || nameRegex.test($(this).val())){
            $(this).next('span').remove();
            error.lnameError = false;
        }
    }
});

$('#username').on('keyup',function(event){

    if($(this).val() != '' && !usernameRegex.test($(this).val()) && !error.unameError){
        $(this).after('<span>*only a-z ,0-9, . , _ are allowed </span>');
        error.unameError = true;
    }else{
        if($(this).val() == '' || usernameRegex.test($(this).val())){
            $(this).next('span').remove();
            error.unameError = false;
        }
    }
});
$('#username').on('focusout',function(event){
    if(!error.unameError){
        console.log('fetching');
        $.ajax({
            url: '/register/check_username',
            type:"POST",
            data: {username: $('#username').val()},
            success:(data)=>{
                if(data.found){
                    $('#username').after("<span>*username is taken</span>");
                    error.unameError = true;
                }
                else{
                        $('#username').after("<span>*username is available</span>");
                        error.unameError = false;
                }
            }
        });
    }
});

$('#email').on('focusout',function(event){

    if($(this).val() != '' && !emailRegex.test($(this).val()) && !error.emailError){
            $(this).after('<span>*Enter valid email id </span>');
        error.emailError = true;
    }else{
        if($(this).val() == '' || emailRegex.test($(this).val())){
            $(this).next('span').remove();
            error.emailError = false;
        }
    }
});

//add password validations
// $('#password').on('keyup',function(event){
//     console.log($(this).val() != '')
//     if($(this).val() != '' && !emailRegex.test($(this).val()) && !error.emailError){
//             $(this).after('<span>*Enter valid email id </span>');
//         error.unameError = true;
//     }else{
//         if($(this).val() == '' || emailRegex.test($(this).val())){
//             $(this).next('span').remove();
//             error.unameError = false;
//         }
//     }
// });

$('#repassword').on('focusout',function(event){
    if($(this).val() != $('#password').val()){
            console.log($(this).val() +" "+ $('#password').val());
            $(this).after('<span>*passwords do not match</span>');
        error.unameError = true;
    }else{
            $(this).next('span').remove();
            error.unameError = false;
    }
});