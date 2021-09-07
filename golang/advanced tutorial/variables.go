package main

import "fmt"

type sample struct {
	name string
}

func main() {
	var aaa, bbb int = 9, 1
	var (
		ccc int
		ddd int = 9
		eee string = "aaa"
	)
	fmt.Println(aaa, bbb, ccc, ddd, eee)

	var (
		t = 123
		u = "circle"
		v = 5.6
		w = true
		x = 'a'
		y = 3 + 5i
		z = sample{name: "test"}
	)

	fmt.Printf("%T[%v]\n%T[%v]\n%T[%v]\n%T[%v]\n%T[%v]\n%T[%v]\n%T[%v]\n", t, t, u, u, v, v, w, w, x, x, y, y, z, z)

	tt, uu, vv, ww, xx, yy, zz := 123, "123", 5.6, true, 'a', 3+5i, sample{name: "test"}
}