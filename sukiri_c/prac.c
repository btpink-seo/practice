#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef char String[1024];

char * tt(char* target) {
    char* a = (char*)malloc(1024);
    memcpy(a, target, 1024);
    return a;
}

int main(int argc, char const *argv[])
{
    // stack
    char array[1024] = "C";
    char* msg1 = array;
    printf("%s\n", msg1);

    // heap
    char* msg2 = (char*)malloc(1024);
    msg2[0] = 'D';
    msg2[1] = 0;
    printf("%s\n", msg2);
    free(msg2);

    //static
    const char* msg3 = "E";
    printf("%s\n", msg3);

    char* msg4 = tt(msg2);
    printf("%s\n", msg4);
    free(msg4);

    int len = strlen(msg4);
    printf("%d\n", len);

    char str1[] = "hello\0ABC";
    char str2[] = "hello\0DEF";
    if (strcmp(str1, str2) == 0) {
        printf("kitaaaaa\n");
    }
    String a = "asdf";
    String b;
    strcpy(b, a);
    printf("%s\n", b);
    char* c = strcat(b, msg3);
    printf("%s\n", c);
    return 0;
}
