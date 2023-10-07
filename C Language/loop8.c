#include<stdio.h>

/**
    print factorial of entered number

    5 = 120
    5 * 4 * 3 * 2 * 1 = 120
*/

void main(){
    int ip1, i, ans = 1;

    printf("\n Enter any number \t");
    scanf("%d",&ip1);

    for(i=1; i<=ip1; i++){
        ans = ans * i;
    }

    printf("\n Factorial is %d", ans);
}
