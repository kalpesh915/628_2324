#include<stdio.h>

/**
    box structure
*/

struct box{
    int h, w, b;
};

void main(){

    struct box b;
    printf("\n Size of box is %d Bytes ", sizeof(b));
}
