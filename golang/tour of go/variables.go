package main

import "fmt"

var c, python, java bool
var j, k int = 1, 2

func main() {
	var i int
	// var java = "no"
	// var c = 123
	var c, python, java = true, false, "no"

	z, x := 1, 2

	fmt.Println(i, j, k, c, python, java)
	fmt.Println(z, x)
}