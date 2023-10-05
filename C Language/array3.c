#include<stdio.h>

/**
    create a simple array
    assign values in array with single assignment
*/

void main(){
               ///0   1    2   3   4   5   6   7  8    9
    int ip[10] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 111};

    printf("\n Size of ip is %d bytes ", sizeof(ip));


    printf("\n value is %d", ip[2]);

}
