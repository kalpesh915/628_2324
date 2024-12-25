<?php

    function msg(){
        static $ip1 = 1;
        print " $ip1";
        $ip1++;
    }

    for($i = 1; $i <= 10; $i++){
        msg();
    }
    
?>