#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    int * array = (int *)malloc(4*sizeof(int));
    array[0] = 1;
    array[1] = 2;
    array[2] = 3;

    // 배열 array의 크기가 부족한 상황이 발생.

    int * tmp = (int *)malloc(8*sizeof(int));
    for (int i=0; i<4; i++)
    {
        *(tmp+i) = *(array+i);
    }
    array = tmp;
    array[7] = 13;

    printf("%d\n", array[0]);
    printf("%d\n", array[1]);
    printf("%d\n", array[2]);
    printf("%d\n", array[7]);
    return 0;
}
