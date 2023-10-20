#include<stdio.h>

struct student{
    int roll;       /// 04
    char name[20];  /// 20
    float marks;    /// 04
                    /// 28
};

void main(){

    /// array of structure
    struct student s1[5];
    int i;
    printf("\n Size of S1 is %d Bytes ", sizeof(s1));


    for(i=0; i<5; i++){
        printf("\n Enter Roll No. \t");
        scanf("%d", &s1[i].roll);
        printf("\n Enter Name \t");
        scanf("%s", &s1[i].name);
        printf("\n Enter Marks \t");
        scanf("%f", &s1[i].marks);
    }

    for(i=0; i<5; i++){
        printf("\n Roll No. is %d", s1[i].roll);
        printf(" Name is %s", s1[i].name);
        printf(" Marks is %f", s1[i].marks);
    }

}
