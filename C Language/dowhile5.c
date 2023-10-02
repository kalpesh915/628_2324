#include<stdio.h>

/**
    goto statement example
*/

void main(){
    int i;


    question: /// this label is used as goto label
    printf("\n 5 * 5 = ? \t");
    scanf("%d", &i);

    if(i == 25){
        printf("\n Correct Answer");
    }else{
        goto question;
    }
}
