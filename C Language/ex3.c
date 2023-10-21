#include<stdio.h>

/**
    create custom data type with list of valid values with enum
    enum = enumeration
*/

enum days {monday = 1, tuesday, wednesday, thursday, friday, saturday, sunday};

/**
    days is known as enum data type and variable of days type
    only allow to accept values from list

    enum store values in array
    first value on 0, second value on 1 and so on
*/

void main(){
    enum days d1;

    d1 = friday;

    printf("\n value of d1 is %d", d1);
}
