#include<stdio.h>

/**
    create a array and get values from user
    print average and sum of array values
*/
#define size 10

void main(){
    int ip[size], i, max = 0;

    for(i=0; i<size; i++){
        printf("\n Enter value for ip[%d] \t",i);
        scanf("%d", &ip[i]);
    }

    for(i=0; i<size; i++){
        if(max < ip[i]){
            max = ip[i];
        }
    }

    printf("\n Max of Array is %d", max);
}
