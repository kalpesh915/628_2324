#include<stdio.h>

/**
    create a file and store some data in it.

    a = append data file, create if not exist, if exist add data at end
    of file
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data3.txt", "a");
    char ip;

    fputs("welcome to world of files with c language \n", fp); /// file put string
    /// close the file
    fclose(fp);
}
