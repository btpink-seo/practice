#include <stdio.h> // 입출력 함수 불러오기

char caseChanger(char c) // 함수 선언, 인수 char, 반환 char
{
    if (c >= 97) // 인수가 소문자인 경우
    {
        return c - 32; // 32를 빼서 대문자로 변환하여 반환
    } else // 인수가 대문자인 경우
    {
        return c + 32; // 32를 더해서 소문자로 변환하여 반환
    }
}
int main(void) // 메인 함수 시작
{
    char c[6] = { 'a', 'B', 'c', 'D', 'e', 'F' }; // 캐릭터 배열 선언
    for (int i = 0; i < 6; i++) // for반복문 시작
    {
        printf("before : %c, after : %c\n", c[i], caseChanger(c[i])); // 결과 출력
    }
    return 0; // 프로그램 종료
}
