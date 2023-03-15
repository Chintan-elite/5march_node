/*

syntax:

 switch(case){

 case 1:
   statment;
   break;

   case 2:
   statment;
   break;

   default:
   statment;
   break;

 }
*/


#include<stdio.h>

int main(){

    int value;

    printf("Enter a value :");
    scanf("%d",&value);

    switch (value)
    {
    case 1:
      printf("sunday");
        break;

        case 2:
      printf("monday");
        break;

        case 3:
      printf("tuesday");
        break;

    
    default:
        break;
    }


}