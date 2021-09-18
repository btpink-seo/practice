package main

import (
	"fmt"
)

func hello() {
	fmt.Println("Hello, world!")
}

func sum(a, b int) int {
	return a + b
}

func sum2(a, b int) (r int) {
	r = a + b
	return
}

func SumAndDiff(a, b int) (int, int) {
	return a + b, a - b
}

func sum3(n ...int) int {
	total := 0
	for _, value := range n {
		total += value
	}
	return total
}

func factorial(n uint64) uint64 {
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	hello()
	fmt.Println(sum(1, 2))
	fmt.Println(sum2(1, 2))
	fmt.Println(SumAndDiff(1, 2))

	sumR, diff := SumAndDiff(4, 5)
	fmt.Println(sumR, diff)

	n := []int{1, 2, 3, 4, 5}
	r := sum3(n...)
	// r := sum3(1, 2, 3, 4, 5)
	fmt.Println(r)

	fmt.Println(factorial(10))

	var hellp func(a, b int) int = sum
	world := hellp
	fmt.Println(hellp(1, 2))
	fmt.Println(world(2, 3))

	f := []func(int, int) int{sum, sum2}

	fmt.Println(f[0](1, 2))
	fmt.Println(f[1](1, 2))

	g := map[string]func(int, int) int{
		"SUM": sum,
	}
	fmt.Println(g["SUM"](1, 2))

	func() {
		fmt.Println("Hello, world!")
	}()

	h := func(a, b int) int {
		return a + b
	}
	fmt.Println(h(4, 3))
}
