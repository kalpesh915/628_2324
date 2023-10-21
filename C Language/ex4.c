#include<stdio.h>

/**
    create boolean data type with enum
*/

            /// 0     1
enum boolean {false, true};

void main(){
    enum boolean state;

    state = true;

    printf("\n value of state is %d", state);
}
