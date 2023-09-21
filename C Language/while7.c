#include<stdio.h>

/**
    print sum of 10 values and get values from user
*/

void main(){
    int i, sum = 0, tmp;

    i = 1;

    while(i <= 10){
        printf("\n Enter any number \t");
        scanf("%d", &tmp);
        sum = sum + tmp;
        i++;
    }

    printf("\n Sum is %d", sum);
}
