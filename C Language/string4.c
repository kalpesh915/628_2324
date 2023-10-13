#include<stdio.h>
#include<string.h>

/**
    string length
*/


void main(){
    char ip[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    ans = strlen(ip);

    printf("\n String Length is %d", ans);
}
