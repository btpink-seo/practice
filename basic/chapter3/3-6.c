#include <stdio.h>
#include <limits.h>
#include <stdlib.h>

char * itoa(void *num, int divi);

int main(int argc, char const *argv[])
{
    // unsigned int i = 0b11111111111111111111111111111111;
    unsigned int u = UINT_MAX;
    // signed int i_max = INT_MAX;
    // signed int i_min = INT_MIN;

    // printf("%lu\n", sizeof(unsigned int));
    // printf("%lu\n", sizeof(i));
    // printf("%u\n", i);
    // printf("%u\n", u);
    // printf("%d\n", i_max);
    // printf("%d\n", i_min);

    // char buffer[33];
    // sprintf(buffer, "0b%u", u);
    // printf("%u\n", u);
    // printf("%s\n", buffer);
    // int a = 7 / 2;
    char * r = itoa(&u, 2);

    printf("%s", r);


    return 0;
}

char * itoa(void *num, int divi) {
    unsigned int *aaa = (unsigned int *)num;
    int i = 0;
    char * result = (char *)malloc(sizeof(char) * 100);
    while (*aaa > 0)
    {
        result[i++] = (char)(*aaa % divi + 48);
        *aaa = *aaa / divi;
    }

    return result;
}
