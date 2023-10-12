#include<stdio.h>

/**
    Type 4: with parameters with return value
*/

int square(int);

void main(){
    int ip, ans;

    printf("\n Enter value for find square \t");
    scanf("%d", &ip);

    ans = square(ip);

    printf("\n Square of %d is %d", ip, ans);
}

int square(int tmp){
    return tmp * tmp;
}

