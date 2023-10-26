#include<stdio.h>

/**
    example of local variable
*/

void main(){
    const int x = 10;
    printf("\n value of x is %d", x);

    {
        int x = 15;
        printf("\n value of x is %d", x);
    }

    {
        int x = 20;
        printf("\n value of x is %d", x);
    }

    printf("\n value of x is %d", x);
}
