#include <stdio.h>
#include <stdbool.h>
#include <time.h>

void weather(void) {
    printf("오늘의 날씨는 흐림");
}

double calcCircleArea(double r) {
    return 3.14 * r * r;
}

long now(void) {
    return time(NULL);
}

bool isLeapYear(int year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
}


int main(int argc, char const *argv[])
{
    /* code */
    printf("%ld\n", now());
    bool isL = isLeapYear(2000);
    if (isL) {
        printf("true");
    } else {
        printf("false");
    }
    return 0;
}
