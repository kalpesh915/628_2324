#include<stdio.h>
#include<ctype.h>

/**
    get a single character from user with getch()
*/

void main(){
    char c;

    printf("\n Enter any character \t");
    c = getch();
    printf("\n Entered Character is %c", c);
}
