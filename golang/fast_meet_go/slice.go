package main

import (
	"fmt"
)

func main() {
	var a []int
	var b = make([]int, 5)
	c := make([]int, 5)

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)

	d := []int{32, 29, 78, 15, 81}
	fmt.Println(d)

	s := make([]int, 5, 10)
	fmt.Println(s, len(s), cap(s))

	s = append(s, 4, 5, 6)
	fmt.Println(s)

	a = append(a, d...)
	fmt.Println(a)

	a = s
	a[0] = 13
	fmt.Println(a)
	fmt.Println(s)

	e := []int{1, 2, 3, 4, 5}
	f := make([]int, 3)
	copy(f, e)
	fmt.Println(e, f)
	ff := e[0:3:4]
	fmt.Println(ff)
}
