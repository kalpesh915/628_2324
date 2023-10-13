#include<stdio.h>
#include<string.h>

/**
    get string from user with gets()
*/


void main(){
    char ip[100];

    printf("\n Enter any string \t");
    gets(ip);

    printf("\n You Entered %s", ip);
}
