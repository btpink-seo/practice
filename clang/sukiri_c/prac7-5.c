#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef char String[1024];
enum { COUNT = 3 };

int main(int argc, char const *argv[])
{
    srand((unsigned)time(0UL));
    printf("*** 숫자맞추기게임(레벨2) *** (개행) 3자리 수를 맞춰주세요\n");
    int answer[COUNT] = {};
    int input[COUNT] = {};
    int perfect = 0;
    int included = 0;

    for (int i = 0; i < COUNT; i++) {
        answer[i] = rand() % 10;
        printf("%d", answer[i]);
    }
    printf("\n");

    while (1) {
        // user input
        for (int i = 0; i < COUNT; i++) {
            String str;
            printf("%d번째 수를 0~9에서 입력해주세요: ", i + 1);
            scanf("%1023s%*[^\n]%*c", str);
            input[i] = atoi(str);
        }
        // count perfect
        for (int i = 0; i < COUNT; i++) {
            if (answer[i] == input[i]) {
                perfect++;
            } else {
                // count included
                for (int j = 0; j < COUNT; j++) {
                    if (i != j && answer[i] == input[j]) {
                        included++;
                    }
                }
            }
        }
        // recycle or end
        if (perfect == 3) {
            printf("정답!");
            String str;
            printf("계속하시겠습니까? (1: 계속, 0: 종료)");
            scanf("%1023s%*[^\n]%*c", str);
            int more = atoi(str);
            if (!more) {
                return 0;
            }
        } else {
            printf("%d hit!!, %d ball!!\n", perfect, included);
        }
        perfect = 0;
        included = 0;
    }
}
