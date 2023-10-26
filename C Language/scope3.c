#include<stdio.h>

/**
    example of global variable
*/

int x = 100; /// global

void main(){
    int x = 10; /// local
    printf("\n value of x is %d", x);

    {
        int x = 15; /// local
        printf("\n value of x is %d", x);
    }

    {
        int x = 20; /// local
        printf("\n value of x is %d", x);
    }

    printf("\n value of x is %d", x);
}
