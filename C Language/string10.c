#include<stdio.h>
#include<string.h>

/**
    string compare
    by ASCII
    return 0 if both strings are same
    return +ve value if string1 is greater than string 2
    return -ve value if string2 is greater than string 1
*/


void main(){
    char ip[100], ip1[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);
    printf("\n Enter any string \t");
    gets(ip1);

    ans = strcmp(ip,ip1);

    printf("\n Answer is %d", ans);
}
