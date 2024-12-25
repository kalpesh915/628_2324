<?php
    // global variable

    $ip = 10;

    echo "<hr>value of \$ip is $ip";

    function msg(){
        global $ip;
        echo "<hr>value of \$ip is $ip"; 
    }

    msg();
?>