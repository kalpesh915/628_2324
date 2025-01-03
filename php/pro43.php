<?php
    function findMax($ip1, $ip2){
        return $ip1 > $ip2 ? $ip1 : $ip2;
    }

    echo "<hr> Maximum is ".findMax(11, 22);
    echo "<hr> Maximum is ".findMax(111, 22);
?>