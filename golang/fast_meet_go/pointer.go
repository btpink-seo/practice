package main

import (
	"fmt"
)

func hello(n *int) {
	*n *= 2
}

func main() {
	numPtr := new(int)
	*numPtr = 1
	fmt.Println(numPtr, *numPtr)

	num := 11
	numPtr2 := &num

	fmt.Println(numPtr2, &num, *numPtr2)

	hello(numPtr2)
	fmt.Println(num)
}
