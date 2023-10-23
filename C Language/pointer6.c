#include<stdio.h>

/**
    Function : Call by value
    swap two values with UDF
*/

void swap(int, int);

void main(){
    int ip1, ip2;

    printf("\n Enter value for ip1 \t");
    scanf("%d", &ip1);
    printf("\n Enter value for ip2 \t");
    scanf("%d", &ip2);

    printf("\n Value before swap is %d and %d", ip1, ip2);
    swap(ip1, ip2);
    printf("\n Value after swap is %d and %d", ip1, ip2);
}


void swap(int i, int j){
    int tmp;

    tmp = i;
    i = j;
    j = tmp;

    printf("\n Value in swap() is %d and %d", i, j);
}
