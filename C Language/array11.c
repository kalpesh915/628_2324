#include<stdio.h>

/**
    separate array values in odd and even array
*/

#define size 10

void main(){
    int ip1[size], odd[size], even[size], i, ec=0, oc=0;

    /// get values in array 1
    for(i=0; i<size; i++){
        printf("\n Enter value for ip1[%d] \t", i);
        scanf("%d", &ip1[i]);
    }

    /// sorting process

    for(i=0; i<size; i++){
        if(ip1[i] %2 == 0){
            even[ec] = ip1[i];
            ec++;
        }else{
            odd[oc] = ip1[i];
            oc++;
        }
    }


    /// printing data
    printf("\n Even values are \n");
    for(i=0; i<ec; i++){
        printf(" %d", even[i]);
    }

    printf("\n Odd values are \n");
    for(i=0; i<oc; i++){
        printf(" %d", odd[i]);
    }
}
