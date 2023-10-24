#include<stdio.h>

/**
    create a file and store some data in it.

    w = write file, create if not exist, overwrite if exist
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data1.txt", "w");

    fputs("Welcome to world of files with C language", fp);

    /// close the file
    fclose(fp);
}
