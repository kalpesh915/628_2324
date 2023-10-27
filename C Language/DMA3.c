#include<stdio.h>
#include<stdlib.h>

/**
    calloc Function
*/

void main(){
    int blocks, *ptr, i;

    /// get required bytes from user
    printf("\n Enter number of blocks to allocate memory \t");
    scanf("%d", &blocks);

    /// allocate space
    ptr = (int*) calloc(blocks, sizeof(int));

    /// printing the all newly created blocks
    for(i=0; i<blocks; i++){
        printf("\n Address is %d and value is %d", ptr, *ptr);
        ptr++;
    }
    /// release allocated memory
    free(ptr);
}
