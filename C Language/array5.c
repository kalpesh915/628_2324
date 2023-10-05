#include<stdio.h>

/**
    create a simple array
    assign values in array with single assignment
    never assign values larger then array size it will return error /
    garbage values and if you want to assign unknown values to array
    never specify size while declare array.
*/

void main(){
               ///0   1    2   3   4   5   6   7  8    9    10  11  12  13
    int ip[] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 11, 88, 88, 77};

    printf("\n Size of ip is %d bytes ", sizeof(ip));


    printf("\n value is %d", ip[12]);

}
