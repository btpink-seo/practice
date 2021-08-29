package main

import "fmt"

const Pi = 3.14

func main() {
	const World = "세계"
	fmt.Println("hello", World)
	fmt.Println("hello", Pi, "Day")

	const Truth = true
	fmt.Println("Go rules?", Truth)
}