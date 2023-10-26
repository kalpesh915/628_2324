#include<stdio.h>

/**
    example of global variable
*/

int x = 100; /// global

void main(){
    printf("\n value of x is %d", x);

    {
        printf("\n value of x is %d", x);
    }

    {
        printf("\n value of x is %d", x);
    }

    printf("\n value of x is %d", x);
}
