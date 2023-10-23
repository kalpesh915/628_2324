 #include<stdio.h>

 /**
    point array to pointer
 */

 void main(){
    int ip[] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 111}, *ptr;

    ptr = &ip;
    printf("\n address is %d and value is %d", ptr, *ptr);
    ptr++;
    printf("\n address is %d and value is %d", ptr, *ptr);
 }
