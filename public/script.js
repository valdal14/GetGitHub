'use strict';

$('#btn').on('click', e =>{
    e.preventDefault();
    var username = $('#username').val();
    //post data
    sendData(username);
});


$('#username').on('keyup', e =>{
    e.preventDefault();
    var username = $('#username').val();
    
    if(username.length >= 0){
        $('#btn').prop('disabled', false);
        $('#username').removeClass('is-invalid');
        
    } 
    
    if(username.length === 0){
        $('#btn').prop('disabled', true);
        $('#username').addClass('form-control is-invalid');
    }
})

/**
 * Post data to Express backend
 * @param {*} username 
 */
function sendData(username){
    $.ajax({
        type: 'post',
        url: '/getProfile',
        data: {
            username: username
        },
        success: data => {
            console.log(data);
        },
        error: error =>{
            console.log(error);
        }
    })
}