#include <stdio.h>
#include <stdlib.h>

typedef char String[1024];

int iscanf(void);
int calcPayment(int amount, int people);
void showPayment(int pay, int payorg, int people);

int main(int argc, char const *argv[])
{
    int amount;
    int people;
    int pay;
    int payorg;

    printf("지불총액을 입력해주세요 : ");
    amount = iscanf();

    printf("참가자 수를 입력해주세요 : ");
    people = iscanf();

    pay = calcPayment(amount, people);

    payorg = amount - pay * (people - 1);

    showPayment(pay, payorg, people);

    return 0;
}

int iscanf(void) {
    String str;
    scanf("%1023s%*[^\n]%*c", str);
    return atoi(str);
}

int calcPayment(int amount, int people) {
    double dnum = 0;
    int pay = 0;
    dnum = (double)amount / people;
    pay = (int) (dnum / 100) * 100;
    if (dnum > pay) {
        pay += 100;
    }
    return pay;
}

void showPayment(int pay, int payorg, int people) {
    printf("*** 지불액 ***\n");
    printf("1인당 %d원 (%d명), 간부는 %d원입니다.\n", pay, people - 1, payorg);
}
