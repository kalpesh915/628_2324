#include<stdio.h>

/**
    box union
*/

union box{
    int h, w, b;
};

void main(){

    union box b;
    printf("\n Size of box union is %d Bytes ", sizeof(b));

    printf("\n Enter Height of Box \t");
    scanf("%d", &b.h);
    printf("\n Enter Width of Box \t");
    scanf("%d", &b.w);
    printf("\n Enter Breadth of Box \t");
    scanf("%d", &b.b);

    printf("\n Volume of Box is %d", b.h * b.w * b.b);
}
