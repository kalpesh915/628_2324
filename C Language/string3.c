#include<stdio.h>
#include<string.h>

/**
    get string from user with gets() and print with puts()
*/


void main(){
    char ip[100];

    printf("\n Enter any string \t");
    gets(ip);

    printf("\n You Entered ");
    puts(ip);
}
