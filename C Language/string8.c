#include<stdio.h>
#include<string.h>

/**
    string reverse
*/


void main(){
    char ip[100], ip1[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    strrev(ip);
    printf("\n Reverse String is %s", ip);
}
