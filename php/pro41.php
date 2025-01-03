<?php
    function greetings(string $fname, string $lname, int $year){
        echo "<hr> Welcome $fname $lname to $year";
    }

    greetings("Devarshi", "Thakar", 2025);
    greetings(2025, "Ankit", "Patel");
?>