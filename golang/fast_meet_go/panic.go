package main

import (
	"fmt"
)

func f() {
	defer func() {
		s := recover()

		fmt.Println(s)
	}()

	panic("Error !!!")
}
func main() {
	f()
	// a := [...]int{1, 2}

	// for i := 0; i < 3; i++ {
	// 	fmt.Println(a[i])
	// }
}
