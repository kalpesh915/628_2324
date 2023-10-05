#include<stdio.h>

/**
    create a simple array
    assign values in array with manual assignment
*/

void main(){
    int ip[10];

    printf("\n Size of ip is %d bytes ", sizeof(ip));

    ip[0] = 11;
    ip[1] = 110;
    ip[2] = 121;
    ip[3] = 161;
    ip[4] = 116;
    ip[5] = 131;
    ip[6] = 311;
    ip[7] = 181;
    ip[8] = 119;
    ip[9] = 112;

    printf("\n value is %d", ip[2]);

}
