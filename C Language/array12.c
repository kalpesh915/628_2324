#include<stdio.h>

/**
    copy array to array
*/

#define size 10

void main(){
    int ip1[size], ip2[size], i;

    /// get values in array 1
    for(i=0; i<size; i++){
        printf("\n Enter value for ip1[%d] \t", i);
        scanf("%d", &ip1[i]);
    }

    /// copy process

    for(i=0; i<size; i++){
        ip2[i] = ip1[i];
    }


    /// printing data
    printf("\n Odd values are \n");
    for(i=0; i<size; i++){
        printf("\n ip1[%d] : %d ip2[%d] : %d", i, ip1[i], i, ip2[i]);
    }
}
