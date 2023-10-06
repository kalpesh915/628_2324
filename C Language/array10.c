#include<stdio.h>

/**
    sum of two array
*/

#define size 5

void main(){
    int ip1[size], ip2[size], ip3[size], i;

    for(i=0; i<size; i++){
        printf("\n Enter value for ip1[%d] \t", i);
        scanf("%d", &ip1[i]);
    }

    for(i=0; i<size; i++){
        printf("\n Enter value for ip2[%d] \t", i);
        scanf("%d", &ip2[i]);
    }


    /// merging process

    for(i=0; i<size; i++){
        ip3[i] = ip1[i] + ip2[i];
    }

    /// printing data

    for(i=0; i<size; i++){
        printf("\n ip3[%d] : %d", i, ip3[i]);
    }
}
