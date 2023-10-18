#include<stdio.h>

/**
    create String UDF function for find length of string

    \0 = null character indicate end of string
*/

int stringLength(char[]);

void main(){
    char ip[100];
    int ans;

    printf("\n Enter any string \t");
    gets(ip);

    ans = stringLength(ip);

    printf("\n String Length is %d", ans);
}

int stringLength(char ip[100]){
    int tmp = 0;

    while(ip[tmp] != '\0'){
        tmp++;
    }

    return tmp;
}
