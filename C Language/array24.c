#include<stdio.h>

#define size 3

/**
    store data in 3D array

    ip
            0               1               2
            -               -               -
        0   1   2       0   1   2       0   1   2
    0
    1           25                          12
    2                           11              14
*/

void main(){
    int ip[size][size][size];
    printf("\n Size of Array is %d Bytes", sizeof(ip));
    ip[0][1][2] = 25;
    /// [block][row][column]
    ip[1][2][2] = 11;
}
