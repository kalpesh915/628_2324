#include<stdio.h>

/**
    read data from file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "r");
    char ip[100];

    /// (array for store data, length, file pointer)
    fgets(ip, 100, fp); /// file get string
    printf("\n Data from file is %s", ip);
    fgets(ip, 100, fp);
    printf("\n Data from file is %s", ip);
    fclose(fp);
}
