#include <stdio.h>
#include <string.h>
#define BUFFER_SIZE 20

int read_line(char str[], int limit);

int main(int argc, char const *argv[])
{
    char buffer[BUFFER_SIZE];
    while (1)
    {
        printf("$ ");
        // gets(buffer);
        // fgets(buffer, BUFFER_SIZE, stdin);
        // buffer[strlen(buffer)-1] = '\0';
        read_line(buffer, BUFFER_SIZE);
        printf("-> %s:%lu\n", buffer, strlen(buffer));
    }

    return 0;
}

int read_line(char str[], int limit)
{
    int ch, i = 0;

    // getchar: 한글자씩 읽음
    while ((ch = getchar()) != '\n')
    {
        if (i < limit)
        {
            printf("%d\n", ch);
            str[i++] = ch;
        }
    }
    str[i] = '\0';
    return i;
}