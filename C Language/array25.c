#include<stdio.h>

#define size 3

/**
    store data in 3D array
*/

void main(){
    int ip[size][size][size], i, j, k;

    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            for(k=0; k<size; k++){
                printf("\n Enter value for ip[%d][%d][%d] \t", i, j, k);
                scanf("%d", &ip[i][j][k]);
            }
        }
    }

    printf("\n Printing Array Data \n");

    for(i=0; i<size; i++){
        printf("\n New Block Started \n");
        for(j=0; j<size; j++){
            for(k=0; k<size; k++){
                printf(" ip[%d][%d][%d] is %d", i, j, k, ip[i][j][k]);
            }
            printf("\n");
        }
    }
}
