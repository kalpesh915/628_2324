#include<stdio.h>

/**
    print table of entered number
*/

void main(){
    int i, ip;

    printf("\n Enter any number to print table \t");
    scanf("%d", &ip);

    i = 1;

    while(i <= 10){
        printf("\n  %3d * %3d : %3d", ip, i, ip * i);
        i++;
    }
}
