package main

import (
	"fmt"
)

func main() {
	i := 3
	switch i {
	case 1:
		fmt.Println("1")
		fallthrough
	case 2:
		fmt.Println("2")
	case 3:
		fmt.Println("3")
		fallthrough
	default:
		fmt.Println("-1")
	}

	switch j := 3; j {
	case 2, 4, 6:
		fmt.Println("even")
	case 1, 3, 5:
		fmt.Println("odd")
	}
}
