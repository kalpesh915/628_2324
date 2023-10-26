#include<stdio.h>

/**
    example of formal variable
*/

void sum(int, int);

void main(){
    int ip1, ip2;

    printf("\n Enter value for ip1 \t");
    scanf("%d", &ip1);
    printf("\n Enter value for ip2 \t");
    scanf("%d", &ip2);

    sum(ip1, ip2);
}


/**
    variable i and j is known as formal parameters
    because its treated as local for sum function
*/
void sum(int i, int j){
    printf("\n Sum is %d", i + j);
}
