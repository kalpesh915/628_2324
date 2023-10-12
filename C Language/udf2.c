#include<stdio.h>

/**
    Type 1: no parameters no return value
*/

void msg(); /// declaration

void main(){
    int i;
    for(i=1; i<=10; i++){
        msg(); /// calling
    }
}

void msg(){ /// definition
    printf("\n Welcome to world of C functions");
}
