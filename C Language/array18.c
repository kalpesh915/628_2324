#include<stdio.h>
#define size 3

/**
    get values in 2D array with scanf()
*/

void main(){
    int ip[size][size], i, j;

    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            printf("\n Enter value for ip[%d][%d] \t", i, j);
            scanf("%d", &ip[i][j]);
        }
    }
    printf("\n Array Data is \n");
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            printf(" ip[%d][%d] : %d", i, j, ip[i][j]);
        }
    printf("\n");
    }
}
