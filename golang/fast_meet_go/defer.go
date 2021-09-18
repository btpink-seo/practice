package main

import (
	"fmt"
	"os"
)

func RealHello() {
	file, err := os.Open("hello.txt")
	defer file.Close()

	if err != nil {
		fmt.Println(err)
		return
	}

	buf := make([]byte, 100)
	if _, err = file.Read(buf); err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(string(buf))
}

func hello() {
	fmt.Println("Hello")
}

func world() {
	fmt.Println("world!")
}

func main() {
	defer world()
	defer hello()
	defer world()
	defer hello()
	RealHello()
}
