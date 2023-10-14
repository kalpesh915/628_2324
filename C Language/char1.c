#include<stdio.h>
#include<ctype.h>

/**
    get a single character from user with scanf()
*/

void main(){
    char c;

    printf("\n Enter any character \t");
    scanf("%c", &c);
    printf("\n Entered Character is %c", c);
}
