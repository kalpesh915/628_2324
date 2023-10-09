#include<stdio.h>
#define size 3

/**
    sum of 2D array
*/

void main(){
    int ip[size][size], i, j, ans =0;

    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            printf("\n Enter value for ip[%d][%d] \t", i, j);
            scanf("%d", &ip[i][j]);
        }
    }

    printf("\n Array Data is \n");
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            ans += ip[i][j];
        }
    }

    printf("\n Sum of Array is %d", ans);
}
