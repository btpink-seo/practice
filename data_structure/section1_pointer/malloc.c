#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    int * p;
    p = (int *)malloc(40);
    if (p==NULL)
    {
        /* 동적 메모리 할당 실패 */
        /* 적절한 조치를 취한다. */
    }

    p[0] = 12;
    p[1] = 24;
    *(p+2) = 36;

    printf("%d\n", p[0]);
    printf("%d\n", p[1]);
    printf("%d\n", p[2]);
    return 0;
}
