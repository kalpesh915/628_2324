#include<stdio.h>
#include<string.h>

/**
    string copy
*/


void main(){
    char ip[100], ip1[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    strcpy(ip1, ip);  /// destination, source

    printf("\n String is %s", ip);
    printf("\n New String is %s", ip1);
}
