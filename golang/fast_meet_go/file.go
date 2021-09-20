package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.Create("hello2.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	s1 := "He헌llo, world!\n"
	s2 := "Hell, world!\n"

	n1, err := file.Write([]byte(s1))
	if err != nil {
		fmt.Println(err)
		return
	}
	n2, err := file.WriteString(s2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(n1, "n1")
	fmt.Println(n2, "n2")
}
