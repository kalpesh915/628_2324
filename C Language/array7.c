#include<stdio.h>

/**
    create a array and get values from user
    print average and sum of array values
*/
#define size 10

void main(){
    int ip[size], i, sum = 0;

    for(i=0; i<size; i++){
        printf("\n Enter value for ip[%d] \t",i);
        scanf("%d", &ip[i]);
    }

    for(i=0; i<size; i++){
        printf(" %d", ip[i]);
        sum = sum + ip[i];
    }

    printf("\n Sum of Array is %d", sum);
    printf("\n Average of Array is %d", sum / size);
}
