#include<stdio.h>

/**
    break statement break the flow of loop
*/

void main(){
    int i;

    for(i=1; i<=10; i++){
        if(i == 5){
            break;
        }
        printf(" %d", i);
    }
}
