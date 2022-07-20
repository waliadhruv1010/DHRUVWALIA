$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('YOUR FORM IS SUBMITTED');
    });