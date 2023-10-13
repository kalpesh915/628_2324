#include<stdio.h>
#include<string.h>

/**
    string compare
    check entered string is palindrome or not

    nayan
    >> <<
*/


void main(){
    /// declare required variables
    char ip1[100], ip2[100];
    int ans;

    /// get values in array
    printf("\n Enter any string to check palindrome or not \t");
    gets(ip1);

    /// copy string 1 to string 2
    strcpy(ip2, ip1);

    /// reverse the string 2
    strrev(ip2);

    /// compare both strings
    ans = strcmp(ip1, ip2);

    /// printing a result
    if(ans == 0){
        printf("\n Entered string is palindrome");
    }else{
        printf("\n Please enter another string");
    }
}
