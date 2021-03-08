#include <stdio.h>

void funcB(void) {
    int b = 20;
    printf("b-address: %ld\n", (long)&b);
}
void funcA(void) {
    int a = 10;
    printf("a-address: %ld\n", (long)&a);
    funcB();
}
void printIntByAddress(int* x) {
    printf("%d\n", *x);
}
int main(int argc, char const *argv[])
{
    char moji = 'C';
    int money = 89;
    char* mojiAddr;
    int* moneyAddr = &money;
    // Monster* m;
    char ages[3] = {};
    char (*age0Addr)[3] = &ages;
    void* someAddr;
    // printf("%p\n", age0Addr);

    // printf("%lu\n", sizeof(moji));
    // printf("%lu\n", sizeof(money));
    // printf("%lu\n", sizeof(mojiAddr));
    // printf("%lu\n", sizeof(moneyAddr));
    // printf("%lu\n", sizeof(ages));
    // printf("%lu\n", sizeof(age0Addr));
    // printf("%lu\n", sizeof(someAddr));
    printIntByAddress(&money);
    printIntByAddress(moneyAddr);
    funcA();
    
    return 0;
}
