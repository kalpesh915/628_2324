#include<stdio.h>

/**
    create character udf function to find entered character is
    lowercase alphabet or not

    1 = true, 0 = false

    ASCII

    a-z = 97-122
*/

int isLower(char);

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche();

    if(isLower(c)){
        printf("\n True");
    }else{
        printf("\n False");
    }
}


int isLower(char c){
    if((c >=97 && c <= 122)){
        return 1;
    }else{
        return 0;
    }
}
