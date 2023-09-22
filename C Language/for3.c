#include<stdio.h>

/**
    for(initialize; condition; increment / decrement){
        loop body
    }
    1 10 2 9 3 8 4 7 5 6 6 5 7 4 8 3 9 2 10 1
*/

void main(){
    int i, j;
    for(i=1, j=10; i<=10; i++, j--){
        printf(" %d %d", i, j);
    }
}
