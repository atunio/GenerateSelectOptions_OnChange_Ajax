<?php 
extract($_REQUEST);
switch($source_field){
	case 'option1':
		$query = "select * from table where option1 = '".$option1."'";
		$array[] = array(1 => "Option 1");	
		$array[] = array(2 => "Option 2");	
		$array[] = array(3 => "Option 3");	
		$array[] = array(4 => "Option 4");	
	break; 
}
echo json_encode( $array );