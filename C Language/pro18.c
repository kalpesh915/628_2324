#include<stdio.h>

/**
    draw following pattern with nested for loop

    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
*/

void main(){
    int i, j, s;

    for(i=65; i<=69; i++){
        for(s=68; s>=i; s--){
            printf("-");
        }

        for(j=65; j<=i; j++){
            printf("%c", j);
        }

        for(j=i-1; j>=65; j--){
            printf("%c", j);
        }
        printf("\n");
    }
}
