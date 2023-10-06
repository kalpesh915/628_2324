#include<stdio.h>

/**
    find entered value is exist in array or not
*/

#define size 10

void main(){
    int ip[size], i, tmp, flag = 1;

    for(i=0; i<size; i++){
        printf("\n Enter value for ip[%d] \t", i);
        scanf("%d", &ip[i]);
    }

    printf("\n Enter value for search in array \t");
    scanf("%d", &tmp);

    /// searching process

    for(i=0; i<size; i++){
        if(tmp == ip[i]){
            flag = 0;
            break;
        }
    }

    if(flag == 0){
        printf("\n %d is exist in array", tmp);
    }else{
        printf("\n %d is not exist in array ", tmp);
    }
}
