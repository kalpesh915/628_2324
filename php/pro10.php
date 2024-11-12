<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $ip1 = 10;
        echo "<hr>Value of \$ip1 is $ip1 and Type is ".gettype($ip1);
        $ip1 = 10.1;
        echo "<hr>Value of \$ip1 is $ip1 and Type is ".gettype($ip1);
        $ip1 = 'ok';
        echo "<hr>Value of \$ip1 is $ip1 and Type is ".gettype($ip1);
        $ip1 = "Welcome";
        echo "<hr>Value of \$ip1 is $ip1 and Type is ".gettype($ip1);
        $ip1 = true;
        echo "<hr>Value of \$ip1 is $ip1 and Type is ".gettype($ip1);
        
    ?>
</body>
</html>