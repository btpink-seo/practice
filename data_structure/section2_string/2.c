#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define BUFFER_SIZE 100
char * strdup2(char * s);

int main(int argc, char const *argv[])
{
  /* code */
  char * words[100];
  int n = 0; // number of strings
  char buffer[BUFFER_SIZE];
  while (n < 4 && scanf("%s", buffer) != EOF)
  {
    /* code */
    // strcpy(str2, str1) str1을 str2에 복사한다.
    // strdup(str1) 복제본을 만들어서 그 주소를 리턴 모든 컴파일러에서 작동하는 것은 아니다.
    words[n] = strdup2(buffer);
    n++;
  }

  for (int i=0; i<4; i++)
  {
    printf("%s\n", words[i]);
  }


  return 0;
}

char * strdup2(char * s)
{
  char *p;
  p = (char *)malloc(strlen(s)+1);
  if (p != NULL)
  {
    strcpy(p, s);
  }
  return p;
}
