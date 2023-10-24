#include<stdio.h>

/**
    read data from file

    feof = file end of file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "r");
    char ip;

    ip = fgetc(fp); /// file get character
    printf("\n character is %c", ip);
    ip = fgetc(fp); /// file get character
    printf("\n character is %c", ip);

    fclose(fp);
}
