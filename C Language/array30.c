#include<stdio.h>

/**
    character array
    0123456
    rajkot\0

    \0 = null character indicate end of string
*/

void main(){
    char name[20];
    int i = 0;
    printf("\n Enter your name \t");
    gets(name); /// get string

    while(name[i] != '\0'){
        printf(" %c", name[i]);
        i++;
    }
}
