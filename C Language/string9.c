#include<stdio.h>
#include<string.h>

/**
    string uppercase, lowercase
*/


void main(){
    char ip[100], ip1[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    printf("\n Lowercase String is %s", strlwr(ip));
    printf("\n Uppercase String is %s", strupr(ip));
}
