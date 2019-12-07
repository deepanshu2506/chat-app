const nameRegex = /^[a-zA-Z]+$/;
const usernameRegex = /^[a-zA-Z0-9._]+$/;
var error = {'fnameError':false , 'lnameError':false , 'unameError':false , 'passwordError':false , 'repasswordError' :false};

$('#firstname').on('keyup',function(event){
    console.log($(this).val() != '')
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
    console.log($(this).val() != '')
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
    console.log($(this).val() != '')
    if($(this).val() != '' && !usernameRegex.test($(this).val()) && !error.lnameError){
            $(this).after('<span>*only a-z ,0-9, . , _ are allowed </span>');
        error.unameError = true;
    }else{
        if($(this).val() == '' || usernameRegex.test($(this).val())){
            $(this).next('span').remove();
            error.unameError = false;
        }
    }
});

