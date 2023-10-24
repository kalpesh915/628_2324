#include<stdio.h>

/**
    create a file and store some data in it.

    w = write file, create if not exist, overwrite if exist
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data2.txt", "w");
    char ip[100];

    printf("\n Enter data to write in file \t");
    gets(ip);

    fputs(ip, fp);

    /// close the file
    fclose(fp);
}
