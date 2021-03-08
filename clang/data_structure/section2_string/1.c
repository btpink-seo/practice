#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
  /* code */
  char str1[10];
  str1[0] = 'h';
  str1[1] = 'e';
  str1[2] = 'l';
  str1[3] = 'l';
  str1[4] = 'o';
  // null character('\0')는 문자열의 끝을 표시하는 역할을 한다.
  // 즉 배열의 크기가 문자열의 길이보다 적어도 1만큼 길어야 한다.
  str1[5] = '\0';

  char str2[] = "hello";
  char * str3 = "hello"; // strin literal -> 수정불가능
  printf("%s\n", str1);
  printf("%s\n", str2);
  printf("%s\n", str3);
  return 0;
}
