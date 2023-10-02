#include<stdio.h>

/**
    do{
        statements
    }while(condition);
*/

void main(){
    int i;

    i = 1;

    do{
        printf(" %d", i);
        i++;
    }while(i <= 10);
}
