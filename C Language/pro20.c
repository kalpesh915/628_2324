#include<stdio.h>

/**
    draw following pattern with nested for loop
    **********
    ****  ****
    ***    ***
    **      **
    *        *
    *        *
    **      **
    ***    ***
    ****  ****
    **********
*/

void main(){
    int i, j, s;

    for(i=1; i<=5; i++){
        for(j=5; j>=i; j--){
            printf("*");
        }
        for(s=2; s<=i; s++){
            printf("  ");
        }
        for(j=5; j>=i; j--){
            printf("*");
        }
        printf("\n");
    }

    for(i=1; i<=5; i++){
        for(j=1; j<=i; j++){
            printf("*");
        }
        for(s=4; s>=i; s--){
            printf("  ");
        }
        for(j=1; j<=i; j++){
            printf("*");
        }
        printf("\n");
    }
}
