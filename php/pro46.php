<?php
    function sum(...$data){
        $ans = 0;

        foreach($data as $tmp){
            $ans += $tmp;
        }
        echo "<hr> Sum is $ans";
    }

    sum(11, 22);
    sum(11, 22, 33);
    sum(11, 22, 33, 44);
    sum(11, 22, 33, 44, 55);
?>
