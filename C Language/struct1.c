#include<stdio.h>

struct student{
    int roll;       /// 04
    char name[20];  /// 20
    float marks;    /// 04
                    /// 28
};

void main(){
    struct student s1;

    printf("\n Size of S1 is %d Bytes ", sizeof(s1));
}
