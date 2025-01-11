<?php
    
    $student = [
        "id" => 1,
        "fname" => "Devarshi",
        "lname" => "Thakar",
        "city" => "Rajkot"
    ];

    foreach($student as $key => $value){
        echo "$key is $value <hr>";
    }
?>