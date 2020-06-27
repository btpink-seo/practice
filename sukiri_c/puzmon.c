// 1. 게임의 흐름
//     1-1. 게임타이틀은 Puzmon
//     1-2. 플레이어는 게임 시작할 때부터 4개(빨파검백)의 몬스터를 가지고 있다.
//     1-3. 플레이어는 게임 시작 직후에 4개의 몬스터와 파티를 편성해 던전에 간다
//     1-4. 던전은 5회 배틀이 발생하고 모든 배들에서 살아남았다면 게임 클리어. 도중에 파티hp가 0이 되면 게임오버
//     1-5. 각 배틀에서는 파티대 적 몬스터 1개의 구도로 싸운다. 적 hp를 0으로 만들면 다음 배틀로 넘어간다.
//     1-6. 전투에 싸울 상대는, 등장순서로, 슬라임, 고블린, 오크, 웨어울프, 드래곤이다.
//     1-7. 게임종료때에는 GAME OVER 또는 GAME CLEARED!와 함께 쓰러트린 몬스터의 수를 표시한다.

// 2. 파라메터 개요
//     2-1. 적 몬스터의 파라메터 : name, hp, max_hp, attribute, attack, defence
//     2-2. 아군 파라메터 : name, hp, max_hp, attribute, attack, defence
//     2-3. 파티 파라메터 : player_name, monsters, hp, max_hp, defence
//     2-4. 파티 편성 때 파티에 참가 하고 있는 몬스터의
//         hp : 몬스터 hp의 합
//         max_hp : 몬스터 최대hp의 합
//         defence : 파티의 평균 방어력
//     2-5 던전 안에서 배틀로 아군의 각 몬스터의 hp가 증감하는 것은 없으며 파티hp가 변할 뿐이다.

// 4. 속성
//     4-1. enum { FIRE, WATER, WIND, EARTH, LIFE, EMPTY };
//     4-2. WATER > FIRE, FIRE > WIND, WIND > EARTH, EARTH > WATER
//     4-3. 4-2 외의 속성은 강약 관계는 없다( FIRE / EARTH )

// 5. 배틀 시스템
//     5-1. 배틀은 아군파티(플레이어와 4몬)과 적몬스터 1개와의 사이에서 이루어짐. 어느쪽이든 hp가 0이 될때까지 싸움
//     5-2. 배틀에서 적을 쓰러트리고 다음으로 나아갈때도 파티의 hp는 회복되지 않는다.
//     5-3. 배틀은 아군턴과 적군 턴이 교대로 이루어지며 상대방에게 공격을 한다.
//     5-4. 배틀이 이루어지는 장소를 배틀필드라고 하며 여기에서는 14개의 보석놓는 곳(슬롯)이 존재한다. 각 슬롯에는 왼쪽부터 A~N의 기호가 부여된다.
//     5-5. 배틀개시때 각 슬록에는 모두 14개의 Gem 이 정렬되어 있음. Gem은 무 속성을 빼고 5종의 속성중 하나이다.
//     5-6. 플레이어는 슬롯에 놓은 젬을 움직여서 몬스터를 공격하거나 hp를 회복한다.
//     5-7. 플레이어는 젬을 움직이기위해 AD와 같은 2문자의 알파벳의 커맨드를 입력한다. 이것은 A슬롯의 젬을 D슬롯으로 이동시킨다는 의미이다.
//     5-8. 젬은 1개씩 옆자리와 교환하면서 목적 위치까지 이동해나간다. 예를들어 AD의 경우 AB, BC, CD 의 3번의 교환을 걸쳐 이동한다.
//     5-9. 젬은 같은 속성이 3개이상 연속 정렬되면 삭제되며 다음과 같은 효과를 가진다.
//         화수풍토 : 화수풍토속성 아군 몬스터가 적을 공격
//         명 : 파티의 hp를 회복함
//     5-10. 배틀개시 때 우연히 같은 속성 젬이 이미 3개이상 정렬될 경우에는 삭제가 발동하지 않는다.double
//     5-11. 젬이 삭데된 공간에는 오른쪽에 정렬되어있던 보석이 왼쪽으로 붙는다. 이것으로 인해 3개이상의 같은 속성의 보석이 정렬되면 삭제되며 효과가 발생(콤보)
//     5-12. 젬의 동종 3연속 이상의 정렬이 2개 이상 발생한 경우도 동시에는 삭제되지 않고 왼쪽부터 순서대로 삭제된다.(공간메꾸기와 평가처리가 우선)
//     5-13. 메꾸기가 끝난 후, 빈 슬롯 부분에는 랜덤 젬이 채워진다. 이때 3개 이상의 동종 젬이 정렬된 경우 삭제되며 효과 발생(콤보)
//     5-14. 콤보수는 플레이어에따라 젬이동으로 인한 삭제를 1로 시작하여 이후 다음 이동까지 발생한 삭제당 1개씩 증가한다.
//     5-15. 콤보수가 2이상인 젬삭제의 경우 화면에는 2COMBO! 와 같은 콤보발생의 사실을 표시한다.
//     5-16. 적 턴에서 적은 파티에게 공격을 하고 파티의 hp를 줄인다.

// 6. 데미지 룰
//     6-1. 배틀에서 데미지 또는 회복량은 다음 공식에 따라 결정된다. 또한 +-X% 로 기재된 경우는 그 값을 표준으로하여 -x%~+x%의 폭에서 랜덤하게 값이 변동하는 것을 의미한다.
//     6-2. 적에 의한 파티의 공격 데미지
//         (적 공격력 - 파티방어력) +- 10%
//         단, 위의 값이 음수가 될 경우 공격력은 1로 취급한다.
//     6-3. 아군 공격 데미지
//         (공격몬스터의 공격력 - 적의 방어력) * 속성보정 * (1.5^(삭제보석수 - 3 + 콤보수)) +- 10%
//         단, 위의 값이 음수가 될 경우 공격력은 1로 취급한다.
//         ^는 제곱연산, 공식의 콤보수는 최후에 플레이어가 젬을 이동시킨 시점부터 몇번째의 콤보인가로 결정
//     6-4. 속성보정
//         강 -> 약 : 2.0
//         약 -> 강 : 0.5
//         그 외 : 1.0
//     6-5. 명 젬 회복량
//         20 * (1.5^(삭제보석수 - 3 + 콤보수)) +- 10%
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>

#define ENEMY_COUNT 5
#define PARTY_COUNT 4
#define SLOT_COUNT 14

typedef char String[1024];
typedef struct
{
    String name;
    int hp;
    int max_hp;
    char attribute;
    int attack;
    int defence;
} Monster;

typedef struct
{
    const char* player_name;
    Monster* monsters;
    int hp;
    int max_hp;
    int defence;
} Party;
typedef struct
{
    int target;
    int count;
    int index_from;
} EvalResult;

enum { A, B, C, D, E, F, G, H, I, J, K, L, M, N }; // slot
enum { FIRE, WATER, WIND, EARTH, LIFE, EMPTY }; // attribute
enum { MONSTER, PLAYER }; // turn

void printWithColor(int color);
void printSlot(int* slot);
void printParty(Party party);
int dungeon(Monster* enemies, Party party, int* slot, int* defeat_count);
void move(int* slot, char from, char to);
void playerAttack(Monster* monster, Party* party, int* combo, EvalResult eval_result, int* slot);
EvalResult* evaluation(int* slot);
double checkAttribute(int my_attribute, int monster_attribute);

int main(int argc, char const *argv[])
{
    // 초기설정
    // 적 몬스터 정의
    Monster slime = { "\x1b[30m\x1b[44m~슬라임~\x1b[0m", 100, 100, WATER, 10, 5 };
    Monster goblin = { "\x1b[30m\x1b[43m#고블린#\x1b[0m", 200, 200, EARTH, 20, 15 };
    Monster oak = { "\x1b[30m\x1b[42m@오크@\x1b[0m", 300, 300, WIND, 30, 25 };
    Monster werewolf = { "\x1b[30m\x1b[42m@웨어울프@\x1b[0m", 400, 400, WIND, 40, 30 };
    Monster dragon = { "\x1b[30m\x1b[41m$드래곤$\x1b[0m", 800, 800, FIRE, 50, 40 };
    Monster enemies[ENEMY_COUNT] = { slime, goblin, oak, werewolf, dragon };

    // 내 몬스터 정의
    Monster red = { "\x1b[30m\x1b[41m$주작$\x1b[0m", 150, 150, FIRE, 25, 10 };
    Monster blue = { "\x1b[30m\x1b[42m@청룡@\x1b[0m", 150, 150, WIND, 15, 10 };
    Monster white = { "\x1b[30m\x1b[43m#백호#\x1b[0m", 150, 150, EARTH, 20, 5 };
    Monster black = { "\x1b[30m\x1b[44m~현무~\x1b[0m", 150, 150, WATER, 20, 15 };
    Monster my_monsters[PARTY_COUNT] = { red, blue, white, black };
    int total_hp = 0, total_defence = 0;
    for (int i = 0; i < PARTY_COUNT; i++)
    {
        total_hp += my_monsters[i].hp;
        total_defence += my_monsters[i].defence;
    }
    // 파티 정의
    Party party = { argv[1], my_monsters, total_hp, total_hp, total_defence };

    // 슬롯 정의
    srand((unsigned)time(0UL));
    int slot[SLOT_COUNT] = {};
    for (int i = 0; i < 14; i++) slot[i] = rand() % 5;

    int defeat_count = 0;

    // 게임 시작
    printf("*** Puzzle & Monsters ***\n");
    printf("%s의 파티(HP=%d)는 던전에 도착했다.\n", party.player_name, party.max_hp);
    printParty(party);
    printf("\n");
    int is_clear = dungeon(enemies, party, &slot[0], &defeat_count);
    if (is_clear)
    {
        printf("\n\n%s는 던전을 클리어했다!\n", party.player_name);
        printf("***GAME CLEARED!***\n");
    }
    else
    {
        printf("\n\n***GAME OVER***\n");
    }
    printf("쓰러트린 몬스터 수 = %d\n", defeat_count);
    return 0;
}

void move(int* slot, char from, char to) {
    int index_from = from - 'A';
    int index_to = to - 'A';
    int tmp = slot[index_from]; // 이동시킬 녀석을 빼놓는다.
    int direction = index_to - index_from; // 앞으로 갈지 뒤로 갈지 방향

    if (direction > 0)
    {
        for (int i = index_from; i < index_to; i++) slot[i] = slot[i + 1];
    }
    else
    {
        for (int i = index_from; i > index_to; i--) slot[i] = slot[i - 1];
    }
    slot[index_to] = tmp;
    printSlot(&slot[0]);
}

EvalResult* evaluation(int* slot) {
    int target = 0;
    int count = 0;
    int index_from = 0;
    for (int i = 0; i < SLOT_COUNT; i++)
    {
        if (target == slot[i])
        {
            count++;
        }
        else
        {
            if (count > 2) break;
            index_from = i;
            count = 1;
            target = slot[i];
        }
    }
    EvalResult* eval_result = malloc((sizeof(EvalResult)));
    eval_result->target = target;
    eval_result->count = count;
    eval_result->index_from = index_from;
    return eval_result;
}

void playerAttack(Monster* monster, Party* party, int* combo, EvalResult eval_result, int* slot) {
    // 앞으로 땡기고
    for (int i = eval_result.index_from; i < SLOT_COUNT - eval_result.count; i++) slot[i] = slot[i + eval_result.count];
    // 뒤에 랜덤으로 채우고
    for (int i = SLOT_COUNT - eval_result.count; i < SLOT_COUNT; i++) slot[i] = rand() % 5;
    // 공격력 계산 (공격몬스터의 공격력 - 적의 방어력) * 속성보정 * (1.5^(삭제보석수 - 3 + 콤보수)) +- 10%
    double random = rand() % 21 + 90; // 90 ~ 110
    if (eval_result.target == LIFE)
    {
        // recovery 20 * (1.5^(삭제보석수 - 3 + 콤보수)) +- 10%
        int recovery = 20 * pow(1.5, (eval_result.count - 3 + *combo)) * random / 100;
        if (party->hp != party->max_hp)
        {
            party->hp += recovery;
            printf("%s는 %d 회복했다!\n\n", party->player_name, recovery);
        }
        else
        {
            printf("최대 HP이기 때문에 회복되지 않았습니다.\n");
        }
    }
    else
    {
        // (공격몬스터의 공격력 - 적의 방어력) * 속성보정 * (1.5^(삭제보석수 - 3 + 콤보수)) +- 10%
        // 몬스터 찾기
        int my_monster_attack = 0, my_monster_attribute = 0;
        for (int i = 0; i < PARTY_COUNT; i++)
        {
            if (party->monsters[i].attribute == eval_result.target)
            {
                my_monster_attack = party->monsters[i].attack;
                my_monster_attribute = party->monsters[i].attribute;
                break;
            }
        }
        // 속성 보정치 WATER > FIRE, FIRE > WIND, WIND > EARTH, EARTH > WATER
        // FIRE = 0, WATER = 1, WIND = 2, EARTH = 3
        double attribute = checkAttribute(my_monster_attribute, monster->attribute);
        int damage = (my_monster_attack - monster->defence) * attribute * pow(1.5, (eval_result.count - 3 + *combo)) * random / 100;
        if (damage < 0) damage = 1;
        // 공격하고
        monster->hp -= damage;
        // 프린트 한다.
        String cb;
        *combo > 1 ? sprintf(cb, "\x1b[30m\x1b[45m%dCOMBO\x1b[0m", *combo) : sprintf(cb, "");
        printf("%s의 공격!\n%s에게 %d의 데미지!\n\n", cb, monster->name, damage);
    }
    (*combo)++;
}

double checkAttribute(int my_attribute, int monster_attribute) {
    double result = 1.0;
    switch (my_attribute)
    {
    case FIRE:
        if (monster_attribute == WIND)
        {
            result = 2.0;
        }
        else if (monster_attribute == WATER)
        {
            result = 0.5;
        }
    case WATER:
        if (monster_attribute == FIRE)
        {
            result = 2.0;
        }
        else if (monster_attribute == EARTH)
        {
            result = 0.5;
        }
    case WIND:
        if (monster_attribute == EARTH)
        {
            result = 2.0;
        }
        else if (monster_attribute == FIRE)
        {
            result = 0.5;
        }
    case EARTH:
        if (monster_attribute == WATER)
        {
            result = 2.0;
        }
        else if (monster_attribute == WIND)
        {
            result = 0.5;
        }
    }
    return result;
}

int dungeon(Monster* enemies, Party party, int* slot, int* defeat_count) {
    for (int i = 0; i < ENEMY_COUNT; i++)
    {
        Monster monster = enemies[i];
        printf("%s가 나타났다!\n", monster.name);
        int turn = PLAYER;
        while (1)
        {
            if (turn) // 플레이어 턴
            {
                printf("[ %s 의 턴 ]\n\n", party.player_name);
                printf("-----------------------------\n\n\n");
                printf("           %s\n", monster.name);
                printf("       HP= %d / %d\n\n\n", monster.hp, monster.max_hp);
                printf(" %s %s %s %s\n", party.monsters[0].name, party.monsters[1].name, party.monsters[2].name, party.monsters[3].name);
                printf("       HP= %d / %d\n", party.hp, party.max_hp);
                printf("-----------------------------\n\n");
                printf("A B C D E F G H I J K L M N\n");
                printSlot(&slot[0]);
                printf("-----------------------------\n\n");
                String command;
                printf("커맨드를 입력하시오 > ");
                scanf("%1023s%*[^\n]%*c", command);
                move(&slot[0], command[0], command[1]);
                int combo = 0;
                // 평가 어택 루프
                while (1)
                {
                    EvalResult* eval_result = evaluation(&slot[0]);
                    if (eval_result->count > 2)
                    {
                        playerAttack(&monster, &party, &combo, *eval_result, &slot[0]);
                        free(eval_result);
                    }
                    else
                    {
                        free(eval_result);
                        break;
                    }
                }

                printf("\n");
                turn = MONSTER;
            }
            else // 몬스터의 턴
            {
                printf("[ %s 의 턴 ]\n\n", monster.name);
                double random = rand() % 21 + 90; // 90 ~ 110
                int damage = (monster.attack - party.defence) * random / 100;
                if (damage < 0) damage = 1;
                party.hp -= damage;
                printf("%s의 공격!\n%d의 데미지를 받았다!\n\n", monster.name, damage);
                turn = PLAYER;
            }

            if (monster.hp <= 0)
            {
                (*defeat_count)++;
                printf("\n");
                printf("%s에게 승리했다!\n", monster.name);
                printf("%s는 더 깊이 전진한다.\n", party.player_name);
                printf("=================================\n\n");
                break;
            }
            if (party.hp <= 0) return 0;
        }
    }
    return 1;
}

void printParty(Party party) {
    printf("파티편성----------------\n");
    for (int i = 0; i < PARTY_COUNT; i++)
    {
        printf("%s HP= %d 공격= %d 방어= %d\n", party.monsters[i].name, party.monsters[i].hp, party.monsters[i].attack, party.monsters[i].defence);
    }
    printf("--------------------\n");
}

void printWithColor(int color) {
    switch (color)
    {
    case FIRE:
        printf("\x1b[30m\x1b[41m$\x1b[0m"); // RED
        break;
    case WATER:
        printf("\x1b[30m\x1b[44m~\x1b[0m"); // BLUE
        break;
    case WIND:
        printf("\x1b[30m\x1b[42m@\x1b[0m"); // GREEN
        break;
    case EARTH:
        printf("\x1b[30m\x1b[43m#\x1b[0m"); // YELLOW
        break;
    case LIFE:
        printf("\x1b[30m\x1b[45m&\x1b[0m"); // PUPLE
        break;
    default:
        printf("\x1b[30m\x1b[40m \x1b[0m"); // BLACK
        break;
    }
}

void printSlot(int* slot) {
    for (int i = 0; i < SLOT_COUNT; i++)
    {
        printWithColor(slot[i]);
        if (i == 13) printf("\n");
        if (i < 13) printf(" ");
    }
}
