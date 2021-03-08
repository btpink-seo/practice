#include <stdio.h>

void say_hello(void); //prototyping, function declaration

int main(int argc, char const *argv[])
{
    int x, y, z; // declaration

    x = 1; // assignment
    y = 2;
    z = x + y; // operation

    // escape sequence \n
    printf("%i\a\n", z);
    say_hello();

    return 0;
}

void say_hello(void)
{
    printf("Hello, World!\n");
}
