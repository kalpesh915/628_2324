#include<stdio.h>

/**
    read data from file

    feof = file end of file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "r");
    char ip[100];

    while(!feof(fp)){
        fgets(ip, 100, fp); /// file get string
        printf("Data from file is %s", ip);
    }
    fclose(fp);
}
