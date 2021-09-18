package main

import (
	"fmt"
)

func calc() func(x int) int {
	a, b := 3, 5
	return func(x int) int {
		return a*x + b
	}
}
func main() {
	a, b := 3, 5

	f := func(x int) int {
		return a*x + b
	}

	r := f(5)
	fmt.Println(r)

	f2 := calc()
	fmt.Println(f2(1))
	fmt.Println(f2(2))
	fmt.Println(f2(3))
}
