#include <stdio.h>

int main(int argc, char const *argv[])
{
    int data[] = {1, 2, 3};
    char data2[] = {'a', 'b', 'c'};
    long long data3[] = {1, 2, 3};
    int *p = &data[0];
    char *q = &data2[0];
    long long *r = &data3[0];

    printf("%d %p\n", p, p);
    printf("%d %p\n", p+1, p+1);
    printf("%d %p\n\n", p+2, p+2);

    printf("%d %p\n", q, q);
    printf("%d %p\n", q+1, q+1);
    printf("%d %p\n\n", q+2, q+2);

    printf("%d %p\n", r, r);
    printf("%d %p\n", r+1, r+1);
    printf("%d %p\n\n", r+2, r+2);
    return 0;
}
