#include<stdio.h>

/**
    create character udf function to convert character in lowercase
    ASCII 65-90 / 97-122

    a = 97
    A = 65
*/

int toLower(char);

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche();

    printf("\n Character to uppercase is %c", toLower(c));
}


int toLower(char c){
    if((c >=65 && c <= 90)){
        return c + 32;
    }else{
        return c;
    }
}
