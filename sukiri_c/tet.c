#include <stdio.h>

int main(int argc, char const *argv[])
{
    char t[100] = "\x1b[40mC\x1b[41mo\x1b[42ml\x1b[43mo\x1b[44mr\x1b[45ma\x1b[46ms\x1b[47mdf";
    printf("\x1b[31mHello%s\x1b[0mWorld\n", t);
    // 0: Black, 1: Red, 2: Green, 3: Yellow, 4: Blue, 5: Puple, 6: Cyan, 7: white
    return 0;
}
    {
    case FIRE:
        printf("\x1b[30m\x1b[41m%s\x1b[0m", str); // RED
        break;
    case WATER:
        printf("\x1b[30m\x1b[44m%s\x1b[0m", str); // BLUE
        break;
    case WIND:
        printf("\x1b[30m\x1b[46m%s\x1b[0m", str); // CYAN
        break;
    case EARTH:
        printf("\x1b[30m\x1b[42m%s\x1b[0m", str); // GREEN
        break;
    case LIFE:
        printf("\x1b[30m\x1b[43m%s\x1b[0m", str); // YELLOW
        break;
    default:
        printf("\x1b[30m\x1b[47m%s\x1b[0m", str); // WHITE
        break;
    }