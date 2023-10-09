#include<stdio.h>
#define size 3

/**
    Assign values in 2D array with multi statement
*/

void main(){
    int ip[size][size] = {{11, 22, 33}, {44, 55, 66}, {77, 88, 99}};

    printf("\n Size of Array is %d Bytes ", sizeof(ip));

    printf("\n ip[2][1] is %d",ip[2][1]);
}
