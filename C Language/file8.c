#include<stdio.h>

/**
    read data from file

    feof = file end of file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "r");
    char ip[100];

    printf("\n Read pointer at %d", ftell(fp));
    fgets(ip, 100, fp); /// file get string
    printf("\nData from file is %s", ip);
    printf("\n Read pointer at %d", ftell(fp));
    fgets(ip, 100, fp); /// file get string


    fclose(fp);
}
