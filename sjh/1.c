#include <stdio.h> // 입출력 함수 불러오기

int main(void) // 메인 함수 시작
{
    int x[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // 배열 선연
    int sum_odd = 0; // 홀수합 변수
    int sum_even = 0; // 짝수합 변수
    for (int i = 0; i < 10; i++) // for 문 시작
    {
        if (i % 2 == 0) // 짝수 번 요소 판별
        {
            sum_even += *(x + i); // 짝수합 변수에 더하기
        }
        else // 홀수 번 요소 인 경우
        {
            sum_odd += *(x + i); // 홀수합 변수에 더하기
        }
    }
    printf("odd: %d, even: %d\n", sum_odd, sum_even); // 출력
    return 0; // 프로그램 종료
}
