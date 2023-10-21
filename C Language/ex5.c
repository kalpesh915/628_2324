#include<stdio.h>

/**
    create boolean data type with enum
*/

            /// 0     1
enum boolean {false, true};

void main(){
    enum boolean state;

    state = false;

    if(state){
        printf("\n Welcome to voting booth");
    }else{
        printf("\n Try in Next Election");
    }
}
