<?php
    function greetings(string $fname, string $lname, int $year = 2025){
        echo "<hr> Welcome $fname $lname to $year";
    }

    greetings("Devarshi", "Thakar");
    greetings("Devarshi", "Thakar", 2026);
    greetings("Ankit", "Patel");
?>