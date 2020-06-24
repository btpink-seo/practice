#include <stdio.h> // 입출력 함수 불러오기
#include <math.h> // 제곱근 구하기 위한 수학 함수 불러오기

int main(void) // 메인 함수 시작
{
    const int MAX = 1024; // 메모리 확보 수
    char tmp[MAX] = {}; // 입력받을 문자열 정의
    int val[MAX] = {}; // 입력받은 숫자가 저장될 변수 정의
    int number_count = 0, tmp_num = 0; // var 변수의 요소 갯수, 문자 -> 숫자 변환시 사용될 임의 수
    printf("정수를 스페이스로 분리하여 입력하세요: "); // 입력 안내 문구
    gets(tmp); // 입력받기
    for (int i = 0; tmp[i] != 0; i++) // 입력 받은 문자열을 숫자 배열로 변경
    {
        if (tmp[i] != ' ') // 공백문자가 아닌경우
        {
            tmp_num = tmp_num * 10 + tmp[i] - '0'; // 기존 숫자 자릿수 올리고 더하기
            // '0'을 빼주는 이유 : tmp[i]는 char이기 때문에 ASCII코드 0을 빼줌으로써 해당 숫자가 된다.
        }
        else
        {
            val[number_count++] = tmp_num; // 숫자 배열에 대입
            tmp_num = 0; // num 초기화
        }
    }
    val[number_count++] = tmp_num; // 마지막 숫자 입력
    int sum = 0; // 총합
    double avg = 0, var = 0, d = 0; // 평균, 분산, 표준편차
    for (int i = 0; i < number_count; i++) sum += val[i]; // sum 구하기
    avg = (double)sum / number_count; // 평균 구하기

    for (int i = 0; i < number_count; i++) var += (val[i] - avg)*(val[i] - avg); // 값 - 평균의 제곱의 합
    var /= number_count; // 분산 구하기

    d = sqrt(var); // 표준편차 구하기

    printf("sum : %d | avg : %.3f | var : %.2f | d : %.4f\n", sum, avg, var, d); // 결과출력
    return 0; // 프로그램 종료
}
