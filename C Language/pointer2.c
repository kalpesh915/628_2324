 #include<stdio.h>

 void main(){
    int ip, *ptr;

    ip = 10;

    printf("\n value of ip is %d", ip);
    printf("\n Address of ip is %d", &ip); /// decimal

    /// assign address of ip to ptr
    ptr = &ip;

    printf("\n value of ptr is %d", ptr);
    printf("\n address of ptr is %d", &ptr);
 }
