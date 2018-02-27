'use strict';

$('#spinner').hide();
$('#github').hide();
$('#error').hide();

$('#btn').on('click', e =>{
    e.preventDefault();
    var username = $('#username').val();
    //post data
    sendData(username);
    $('#spinner').show();
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
            $('#spinner').hide();
            setupResponseUI(data);
            console.log(data);
            $('#github').show();
        },
        error: error =>{
            $('#spinner').hide();
            console.log(error);
            // show error message and hide result
            $('#error').show();
            $('#errorMessage').html('Opps, there was an error, please try again!!!');

            setTimeout(()=>{
                $('#error').hide();
            }, 3000);

            $('#github').hide();
        }
    })
}

function setupResponseUI(data){
    // picture profile
    $('.pictureProfile').attr("src", data.profile.avatar_url);
    // name
    $('.gitHubName').html(data.profile.name);
    // id
    $('.gitHubId').html(data.profile.id);
    // url
    $('.gitHubUrl').html(data.profile.html_url);
    $('.gitHubUrl').attr('href', data.profile.html_url);
    // followers
    $('.gitHubFollowers').html(data.profile.followers);
    // followings
    $('.gitHubFollowing').html(data.profile.following);
}
