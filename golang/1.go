package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("hello")

	fmt.Println("The time is", time.Now())

	x, y := 1, 2
	y, x = x, y
	fmt.Println(x, y)
}