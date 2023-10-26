#include<stdio.h>

/**
    program with static variable

    static : preserve the local variable after complete the function
*/

void msg();

void main(){
    int i;

    for(i=1; i<=10; i++){
        msg();
    }
}

void msg(){
    static int x = 1;
    printf("\n value of x is %d", x);
    x++;
}
