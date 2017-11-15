$(document).ready(function(){
    // getting input values
    let name = $('#form-name').val();
    let email = $('#form-email').val();
    let message = $('#form-message').val();



    // setting click event to 'Send' button
    $('#form-send').on('click', function(){
        showError(name, 'form-name', 'Name is required');
        showError(email, 'form-email', 'Email is required');            
        showError(message, 'form-message', 'Please add a message');       
            
    }); 
    
    // show error type on input field 
    function showError(name, id, msg) {
        if(name === "") {
            // string variable with back-tick
            $(`#${id}`).attr("placeholder", `${msg}`);
        }
    }
    $("#form-send").click(function() {  
        window.location.href = "./confirmation.html";
    })
})