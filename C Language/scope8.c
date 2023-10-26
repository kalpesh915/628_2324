#include<stdio.h>

/**
    program without static variable

    normal : delete the local variable after complete the function
*/

void msg();

void main(){
    int i;

    for(i=1; i<=10; i++){
        msg();
    }
}

void msg(){
    int x = 1;
    printf("\n value of x is %d", x);
    x++;
}
