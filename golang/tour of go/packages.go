package main

import (
	"fmt"
	"math/rand"
	"time"
	"math"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Println("My favorite number is", rand.Intn(10))
	fmt.Println("My favorite number is", math.Sqrt(77))
}