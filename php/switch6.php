<?php
    $ip1 = 1;

    switch($ip1){
        case 11:
        case 12:
        case 1:
        case 2:{
            echo "<hr> Winter";
            break;
        }

        case 3:
        case 4:
        case 5:
        case 6:{
            echo "<hr> Summer";
            break;
        }

        case 7:
        case 8:
        case 9:
        case 10:{
            echo "<hr> Monsoon";
            break;
        }
        default:{
            echo "<hr> Out of Range";
            break;
        }
    }
?>