package main

import (
	"fmt"
	"math"
)

func main() {
	var (
		num1 uint8  = math.MaxUint8
		num2 uint16 = math.MaxUint16
		num3 uint32 = math.MaxUint32
		num4 uint64 = math.MaxUint64
	)

	fmt.Println(num1 + 1)
	fmt.Println(num2)
	fmt.Println(num3)
	fmt.Println(num4)
}
