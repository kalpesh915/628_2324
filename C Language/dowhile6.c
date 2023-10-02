#include<stdio.h>

/**
    create custom loop with use of goto statement
*/

void main(){
    int i;

    i = 1;

    loop:
        printf(" %d", i);
        i++;

        if(i <= 10){
            goto loop;
        }
}
