#include<stdio.h>

/**
    Type 1: no parameters no return value
*/

void msg(); /// declaration

void main(){
    msg(); /// calling
}

void msg(){ /// definition
    printf("\n Welcome to world of C functions");
}
