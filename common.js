
$(document).ready(function() { 
    $('#option1').on('change', function() { 
        if ($(this).val() != null && $(this).val() != '') {
                // new code for subject if fcps1 selected
                data = [];
                data[0] = this; // source field name
                data[1] = 'option2'; // target field
                data[2] = null;
                data[3] = null;
                data[4] = null;
                generate_combo_new(data);
        } 
    }); 
}); 

//////////////  combo generation functoin /////////////
// combo generation function
function generate_combo_new(data){
    source_field  = data[0];
    target_field  = data[1];
    other_option  = data[2];
    default_value = data[3];
    other_value  =  data[4];
    //alert(other_value);

    var dataString = '';
    dataString = dataString +"source_field="+$(source_field).attr('name')+"&"+$(source_field).attr('name')+"="+$(source_field).val()+"";
    dataString = dataString +"&target_field="+target_field;
    if(other_option != null) { dataString = dataString +"&other_option=1"; }
    if(other_value != null) { dataString = dataString +"&other_value="+other_value; }
    
    //alert(dataString);
    // extra variables for query
    if(data[4] != null) {
        for(i=4; i<data.length; i++) {
            dataString = dataString +"&"+data[i]+"="+$('#'+data[i]+'').val()+"";
        }
    }
  
    $.ajax({
        url: 'generate_combo.php',
        type: 'POST',
        dataType: 'json',					
        data: dataString,
        
        success: function(result){
            
                $('#'+target_field).html("");//clear old options
                result = eval(result);
                for (i = 0; i < result.length; i++) {
                    for ( key in result[i] ) {
                        $('#'+target_field).get(0).add(new Option(result[i][key],[key]), document.all ? i : null);
                    }
                }
                if (default_value != null) {
                    $('#'+target_field).val(default_value);//select default value
                } 
                else {
                    $("option:first", target_field).attr( "selected", "selected" );//select first option
                }
                
                $('#'+target_field+'_loading_temp').fadeOut(500);
                $('#'+target_field+'_loading_temp').fadeOut(500, function()	{	$('#'+target_field+'_loading_temp').remove(); });
                $('#'+target_field).css("display","inline");

        }
    });
}

 