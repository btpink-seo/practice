#include <stdio.h>

int main(int argc, char const *argv[])
{
  int x=1, y=2;
  int * ip;
  ip = &x;
  y = *ip;
  *ip = 0;

  printf("%d\n", x);
  printf("%d\n", y);
  printf("%d\n", *ip);
  return 0;
}
