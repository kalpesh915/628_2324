#include<stdio.h>
#define size 3

/**
    get values in 2D array with scanf()
    find minimum out of 2D array
*/

void main(){
    int ip[size][size], i, j, min;

    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            printf("\n Enter value for ip[%d][%d] \t", i, j);
            scanf("%d", &ip[i][j]);
        }
    }

    /// assing first element to min
    min = ip[0][0];

    printf("\n Array Data is \n");
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            printf(" ip[%d][%d] : %d", i, j, ip[i][j]);

            /// code for find maximum
            if(min > ip[i][j]){
                    min = ip[i][j];
            }
        }
    printf("\n");
    }

    printf("\n Minimum of Array is %d", min);
}
