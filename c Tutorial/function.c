/*
function :
 it is perform sepcific task or operation.

 Two type of function in c 

   1. pre-define function(built-in)
     -printf()
     -scanf()
     -int main()


   2. user define function
    - with argument with return type
    - with argument without return type
    - without argument without return type
    - without argument with return type

*/

#include<stdio.h>

// function declaration
//without argument without return type
void hello(){

    printf("Hello world\n");
}


// without argument with return type.

int n1(){

    int a;

    printf("Enter a value: ");
    scanf("%d",&a);

   return a;
}


// with argument with return type

int sum(int a, int b){

    return a + b;
}

//with argument without return type

 void star(int a){

   for (int i = 1; i <= a; i++)
   {
    printf("%c\n",'*');
   }
   
 }



int main(){

// funcction calling;
   //hello();


// int c = n1();

 //printf("c is %d",c);

   // int d = sum(10,30);
   
 //  printf("sum of two variable is %d",d);

   //star(10);
}