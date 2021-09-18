package main

import "fmt"

func main() {
	var a [5]int

	a[2] = 7
	a[3] = 9
	fmt.Println(a)

	var (
		b [5]int = [5]int{32, 29, 78, 16, 81}
		c        = [5]int{32, 29, 78, 16, 81}
	)
	d := [5]int{32, 29, 78, 16, 81}
	e := [...]int{1, 2, 3, 4, 5, 6}
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e, len(e), cap(e))

	for i, v := range a {
		fmt.Println(i, v)
	}
	for v := range e {
		fmt.Println(v)
	}

	f := e
	f[1] = 999

	fmt.Println(e)
	fmt.Println(f)
}
