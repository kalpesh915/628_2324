#include<stdio.h>

/**
    create character udf function to find entered character is
    Digit or not

    1 = true, 0 = false

    ASCII 0-9 = 47-58
*/

int isDigit(char);

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche();

    if(isDigit(c)){
        printf("\n True");
    }else{
        printf("\n False");
    }
}


int isDigit(char c){
    if((c >=47 && c <= 58)){
        return 1;
    }else{
        return 0;
    }
}
