#include<stdio.h>

/**
    create a file and store some data in it.

    w = write file, create if not exist, overwrite if exist
*/

void main(){
                /// filename, mode
    FILE *fp = fopen("data2.txt", "w");
    char ip;

    printf("\n Write data in file press X for exit \n");

    while(ip != 'X'){
        ip = getche();

        if(ip == 'X'){
            break;
        }

        fputc(ip, fp); /// file put character
    }

    printf("\n File writing completed");

    /// close the file
    fclose(fp);
}
