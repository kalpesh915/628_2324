<?php
    // global variable

    $ip = 10;

    echo "value of \$ip is $ip";

    function msg(){
        echo "value of \$ip is $ip"; // error
    }

    msg();
?>