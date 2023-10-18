#include<stdio.h>

/**
    create String UDF function for convert string to lowercase

    \0 = null character indicate end of string
*/

void stringLower(char[]);

void main(){
    char ip[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    stringLower(ip);

}

void stringLower(char ip[100]){
    int tmp = 0;

    while(ip[tmp] != '\0'){
        if(ip[tmp] >= 65 && ip[tmp] <= 90){ /// AZ
            ip[tmp] = ip[tmp] + 32; /// a-z
        }
        tmp++;
    }

    printf("\n New String is %s", ip);
}
