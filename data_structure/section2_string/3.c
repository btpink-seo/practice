#include <stdio.h>

int main(int argc, char const *argv[])
{
  FILE * in_fp = fopen("section2_string/input.txt", "r");
  FILE * out_fp = fopen("section2_string/output.txt", "w");
  char buffer[100];
  while(fscanf(in_fp, "%s", buffer) != EOF)
  {
    fprintf(out_fp, "%s ", buffer);
  }
  fclose(in_fp);
  fclose(out_fp);
  return 0;
}
