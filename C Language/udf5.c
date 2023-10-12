#include<stdio.h>

/**
    Type 3: no parameters with return value
*/

float pi();

void main(){
        float ans;

        ans = pi();
        printf("\n Answer is %f", ans);
        printf("\n Answer is %f", pi());
}

float pi(){
    return 3.147;
}

