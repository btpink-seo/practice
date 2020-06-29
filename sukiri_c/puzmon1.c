/*=== puzmon0: 소스코드 코멘트*/
/*** include 선언 ***/

#include <stdio.h>

// 열거형 선언

// 글로벌 정수 선언
typedef char String[1024];
// 구조체 선언

// 프로토타입선언

// 함수 선언
void doBattle()
{
    String monsters[5] = { "slime", "goblin", "oak", "werewolf", "dragon" };
    for (int i = 0; i < 5; i++)
    {
        printf("%s가 나타났다.\n", monsters[i]);
        printf("%s를 쓰러트렸다.\n", monsters[i]);
    }
}

void goDungeon(char* player_name)
{
    printf("%s는 던전에 도착했다.\n", player_name);
    doBattle();
}

int main(int argc, char *argv[])
{
    if (argv[1] == NULL)
    {
        printf("플레이어 이름을 입력하세요.\n");
        return 0;
    }

    printf("*** Puzzle & Monsters***\n");
    char* player_name = argv[1];
    goDungeon(player_name);
    printf("***GAME CLEARED!***\n쓰러트린 몬스터 수 = %d\n", 5);
    return 0;
}

// utility function