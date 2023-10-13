#include<stdio.h>
#include<string.h>

/**
    get string from user with scanf()
*/


void main(){
    char ip[100];

    printf("\n Enter any string \t");
    scanf("%s", &ip);

    printf("\n You Entered %s", ip);
}
