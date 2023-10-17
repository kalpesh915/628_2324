#include<stdio.h>

/**
    create character udf function to find entered character is
    alphabet or not

    1 = true, 0 = false

    ASCII

    A-Z = 65-90, a-z = 97-122
*/

int isAlpha(char);

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche(); /// A

    if(isAlpha(c)){ /// A
        printf("\n True");
    }else{
        printf("\n False");
    }
}


int isAlpha(char c){ /// A = 65
    if((c >= 65 && c <= 90) || (c >=97 && c <= 122)){
        return 1;
    }else{
        return 0;
    }
}
