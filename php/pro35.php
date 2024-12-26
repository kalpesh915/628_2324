<?php
    $ip1 = "Hello world welcome to strings of php";

    echo "<hr>".substr($ip1, 1, 10);
    echo "<hr>".substr($ip1, 10, 20);
    echo "<hr>".substr($ip1, 10);
    echo "<hr>".substr($ip1, -11, 10);
    echo "<hr>".substr($ip1, 10, -5);
?>