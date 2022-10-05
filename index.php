
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Generate Select Options On Change Using AJAX</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="common.js"></script>
    </head>
    <body>
        <!-- Loader -->
        <br><br><br><br><br><br>
        <div style="width: 50%; text-align: center;">
         <div>
             Source Field
            <select id="option1" name="option1"> 
                <Option value="">Please Select</Option>   
                <Option value="1">Option 1</Option>   
                <Option value="2">Option 2</Option>   
                <Option value="3">Option 2</Option>   
            </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Target Field:
            <select id="option2" name="option2"> </select>  
        </div> 
        </div> 
    </body>
</html>