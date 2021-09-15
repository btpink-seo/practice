package main

import "fmt"

// a line comment
/*
lines comment
*/
func main() {
	// var x, y int = 30, 50
	// var age, name = 10, "aaa"
	// x, y, age, name := 30, 50, 10, "aaa"
	// var a, b int
	// var aa string
	// a, b, aa = 1, 2, "adf"
	var (
		x, y       int  = 30, 50
		age, name       = 10, "Maria"
		a, b, aa        = 1, 1.1, 3 + 1i
		num1            = 'a'
		num2       byte = 'a'
		r1, r2, r3 rune = '日', '\ud55c', '\U0000d55c'
	)
	fmt.Println(x, y, age, name, a, b, aa)
	fmt.Println(num1, num2)
	fmt.Println(r1, r2, r3)

	var (
		num3 uint8   = 3
		num4 float32 = 2.2
		num5 uint16  = 10
		num6 uint32  = 80000
	)
	// fmt.Println(num3 + num4)
	fmt.Println(float32(num3) + num4)
	fmt.Println(num3 + uint8(num4))
	fmt.Println(num5 + uint16(num6))
	Overflow()
}
