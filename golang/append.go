package main

import "fmt"

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

func main() {
	var s []int
	fmt.Println(&s)
	printSlice(s)

	s = append(s, 1)
	fmt.Println(&s)
	printSlice(s)

	s = append(s, 2, 3, 4)
	fmt.Println(&s)
	printSlice(s)
}
