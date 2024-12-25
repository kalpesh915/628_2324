<?php
    // without static keyword

    function msg(){
        $ip1 = 1;
        echo " $ip1";
        $ip1++;
    }

    for($i = 1; $i <= 10; $i++){
        msg();
    }
    
?>