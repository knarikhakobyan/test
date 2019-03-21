
$(document).ready(function() {

    //Add lists
    $('input[type="submit"').click(function() {
        var input_value = $('input[type="text"').val();
        var input_text = $('input[type="text"');
        if(input_value == ""){
            input_text.css('border-color','red');
        }else {
            $('#list').append("<li><b>" + input_value + "</b> <span><i class='fa fa-times'></i></span><p>Click here to make it done.</p></li>");
            input_text.css('border-color','black');
            input_text.val('');  
        }
    })

    //Remove selected list
    $(document).on('click','span',function(){
        $(this).parent().remove();
    });

    // Make selected list as done 
    $(document).on('click','p',function(){
        $(this).prev().prev().css('text-decoration', "line-through");
        $(this).html('Done!').css('cursor', 'text');
    });		
    
})