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

    printf("\n Enter Roll No. \t");
    scanf("%d", &s1.roll);
    printf("\n Enter Name \t");
    scanf("%s", &s1.name);
    printf("\n Enter Marks \t");
    scanf("%f", &s1.marks);

    printf("\n Roll No. is %d", s1.roll);
    printf("\n Name is %s", s1.name);
    printf("\n Marks is %f", s1.marks);
}
