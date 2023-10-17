#include<stdio.h>

/**
    create character udf function to convert character in uppercase
    ASCII 65-90 / 97-122

    a = 97
    A = 65
*/

int toUpper(char);

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche();

    printf("\n Character to uppercase is %c", toUpper(c));
}


int toUpper(char c){
    if((c >=97 && c <= 122)){
        return c - 32;
    }else{
        return c;
    }
}
