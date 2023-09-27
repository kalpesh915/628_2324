#include<stdio.h>

/**
    sum of digits of entered number

    2534 = 12
*/

void main(){
    int ip, ans=0;

    printf("\n Enter any number \t");
    scanf("%d",&ip);

    while(ip > 0){
        ans += ip % 10;
        ip = ip / 10;
    }

    printf("\n Total Digits is %d", ans);
}
