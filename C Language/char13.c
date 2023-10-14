#include<stdio.h>
#include<ctype.h>

/**
    count how many characters, alphabets, numbers, words,
    special characters in entered string
*/

void main(){
    char ip[100], c;
    int count = 0, cc = 0, uc = 0, lc = 0, dc = 0, scc = 0, wc = 1;

    printf("\nEnter any string \t");
    gets(ip);

    while(ip[count] != '\0'){

        c = ip[count];

        if(isalpha(c)){
            cc++;
            if(isupper(c)){
                uc++;
            }else{
                lc++;
            }
        }else if(isdigit(c)){
            dc++;
        }else if(isspace(c)){
            wc++;
        }else if(ispunct(c)){
            scc++;
        }
        count++;
    }

    printf("\n Total Characters is %d", count);
    printf("\n Total Alphabets is %d", cc);
    printf("\n Total uppercase Alphabets is %d", uc);
    printf("\n Total lowercase Alphabets is %d", lc);
    printf("\n Total Digits is %d", dc);
    printf("\n Total Special Character is %d", scc);
    printf("\n Total Words is %d", wc);
}
