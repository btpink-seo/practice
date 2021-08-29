package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z := 1.50

	for i := 0; i < 10; i++ {
		z -= (z*z - x) / 2*z
		fmt.Println(z)
	}

	return z
}

func main() {
	fmt.Printf("func : %g\n", Sqrt(2))
	fmt.Printf("math : %g\n", math.Sqrt(2))
}