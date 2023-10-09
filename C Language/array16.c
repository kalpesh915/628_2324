#include<stdio.h>
#define size 3

/**
    Assign values in 2D array with single statement
*/

void main(){
    int ip[size][size] = {11, 22, 33, 44, 55, 66, 77, 88, 99};

    printf("\n Size of Array is %d Bytes ", sizeof(ip));

    printf("\n ip[1][2] is %d",ip[1][2]);
}
