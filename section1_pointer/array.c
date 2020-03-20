#include <stdio.h>

int calculate_sum(int *array);

int main(int argc, char const *argv[])
{
  int sum, i, average;
  int num[10];

  for (i = 0; i < 10; i++)
  {
    scanf("%d", &num[i]);
  }

  sum = calculate_sum( num );
  average = sum/10;
  printf("%d\n", sum);
  printf("%d\n", average);
  return 0;
}

int calculate_sum(int *array) // int array[]
{
  int sum, i;
  sum = 0;
  for ( i = 0; i < 10; i++)
  {
    sum = sum + *(array + i);//array[i];
  }
  return sum;
}
