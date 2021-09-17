package main

import (
	"fmt"
)

func main() {
	goto Loop
	if true {
		fmt.Println("true")
	}

	if i := 4; i >= 10 {
		fmt.Println("10 이상")
	} else if i >= 5 {
		fmt.Println("5이상")
	} else {
		fmt.Println("0이상")
	}

	// for {
	// 	fmt.Println("hello")
	// }
Loop:
	for i := 0; i < 10; i++ {
	Loop2:
		for j := 0; j < 10; j++ {
			if i == 9 && j == 2 {
				fmt.Println("loop break")
				break Loop
			}
			if i == 8 {
				fmt.Println("loop2 break")
				break Loop2
			}
			fmt.Println(i, j)
		}
	}

	fmt.Println("start multi val")
	for i, j := 0, 0; i < 10; i, j = i+1, j+1 {
		fmt.Println(i, j)
	}
}
