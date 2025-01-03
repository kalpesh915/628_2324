<?php
    $ip1 = 10;

    echo "<hr> value of ip1 before() is $ip1";

    function add10($ip1){
        $ip1 += 10;
        echo "<hr> value of ip1 in add10() is $ip1";
    }

    add10($ip1);
    echo "<hr> value of ip1 After() is $ip1";
?>