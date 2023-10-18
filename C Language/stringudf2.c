#include<stdio.h>

/**
    create String UDF function for convert string to uppercase

    \0 = null character indicate end of string
*/

void stringUpper(char[]);

void main(){
    char ip[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    stringUpper(ip);

}

void stringUpper(char ip[100]){
    int tmp = 0;

    while(ip[tmp] != '\0'){
        if(ip[tmp] >= 97 && ip[tmp] <= 122){ /// a-z
            ip[tmp] = ip[tmp] - 32; /// A-Z
        }
        tmp++;
    }

    printf("\n New String is %s", ip);
}
