#include<stdio.h>
#include<string.h>

/**
    string concatenation
*/


void main(){
    char ip[100], ip1[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);
    printf("\n Enter any string \t");
    gets(ip1);

    strcat(ip1, ip);  /// destination, source

    printf("\n String is %s", ip);
    printf("\n New String is %s", ip1);
}
