#include <stdio.h>
#include <string.h>
#define BUFFER_SIZE 40

int read_line(char str[], int limit);

int main(int argc, char const *argv[])
{
    char buffer[BUFFER_SIZE];
    while (1)
    {
        printf("$ ");
        int len = read_line(buffer, BUFFER_SIZE);
        printf("-> %s:%d\n", buffer, len);
    }

    return 0;
}

int read_line(char str[], int limit)
{
    int ch, i = 0;

    // getchar: 한글자씩 읽음
    while ((ch = getchar()) != '\n')
    {
        // isspace(ch) == ch != 32
        if ((i < limit-1) && ((ch != 32) || (i > 0 && str[i-1] != 32)))
            str[i++] = ch;
    }
    if (str[i-1] == 32)
        i--;
    str[i] = '\0';

    return i;
}
