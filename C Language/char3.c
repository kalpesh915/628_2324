#include<stdio.h>
#include<ctype.h>

/**
    get a single character from user with getche()
*/

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getche();
    printf("\n Entered Character is %c", c);
}
