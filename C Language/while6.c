#include<stdio.h>

/**
    print sum of first 10 digits
*/

void main(){
    int i, sum = 0;

    i = 1;

    while(i <= 10){
        sum = sum + i;
        i++;
    }

    printf("\n Sum is %d", sum);
}
