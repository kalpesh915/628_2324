#include<stdio.h>

/**
    create String UDF function for concat two strings

    \0 = null character indicate end of string
*/

void stringConcat(char[], char[]);

void main(){
    char ip1[100], ip2[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip1);
    printf("\n Enter any string \t");
    gets(ip2);

    stringConcat(ip1, ip2);

}

void stringConcat(char ip1[100], char ip2[100]){
    char ans[200];
    int tmp = 0, cnt = 0;

    while(ip1[tmp] != '\0'){
        ans[cnt] = ip1[tmp];
        tmp++;
        cnt++;
    }

    tmp = 0; /// string read from first character
    while(ip2[tmp] != '\0'){
        ans[cnt] = ip2[tmp];
        tmp++;
        cnt++;
    }

    printf("\n New String is %s", ans);
}
