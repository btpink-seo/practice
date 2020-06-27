#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>

int main(int argc, char const *argv[])
{
    srand((unsigned)time(0UL));
    printf("123 - 10 : %f, +10 : %f\n", 123*0.9, 123*1.1);
    for (int i = 0; i < 100; i++)
    {
        double random = rand() % 21 + 90;
        int damage = 123 * random / 100;
        printf("%d\t", damage);
    }

    return 0;
}
