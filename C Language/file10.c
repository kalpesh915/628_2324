#include<stdio.h>

/**
    read data from file

    feof = file end of file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "r");
    char ip;

    while(!feof(fp)){
        ip = fgetc(fp);
        printf(" %c", ip);
    }

    fclose(fp);
}
