<?php
    
    $students = ["Devarshi", "Dev", "Devansh", "Devam", "Devak"];

    //array_push($students, "Devansh");

    $students[100] = "Devansh";

    foreach($students as $student){
        echo "<hr>Welcome $student";
    }
?>