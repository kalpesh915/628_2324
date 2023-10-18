#include<stdio.h>

/**
    create String UDF function for compare two strings

    \0 = null character indicate end of string
*/

int stringCompare(char[], char[]);
rajkot
void main(){
    char ip1[100], ip2[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip1);
    printf("\n Enter any string \t");
    gets(ip2);

    ans = stringCompare(ip1, ip2);

    if(ans == 0){
        printf("\n Both Strings are same");
    }else{
        printf("\n Strings are not same");
    }
}

int stringCompare(char ip1[100], char ip2[100]){

    int tmp = 0, ans = 0;

    while(ip1[tmp] != '\0' || ip2[tmp] != '\0'){
        if(ip1[tmp] != ip2[tmp]){
            ans = ip1[tmp] - ip2[tmp];
            break;
        }
        tmp++;
    }

    return ans;
}
