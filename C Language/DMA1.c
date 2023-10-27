#include<stdio.h>
#include<stdlib.h>

/**
    Malloc Function
*/

void main(){
    int bytes, size, *ptr, i;

    /// get required bytes from user
    printf("\n Enter number of bytes to allocate memory \t");
    scanf("%d", &bytes);

    /// allocate space
    ptr = (int*) malloc(bytes);


    /// calculate number of block created by entered bytes
    size = bytes / sizeof(int);


    /// printing the all newly created blocks
    for(i=0; i<size; i++){
        printf("\n Address is %d and value is %d", ptr, *ptr);
        ptr++;
    }

    /// release allocated memory
    free(ptr);
}
