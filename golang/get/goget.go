package main

import (
	"calc"
	"fmt"

	stringutil "golang.org/x/example/stringutil"
)

func main() {
	fmt.Println(stringutil.Reverse("olleh!!!"))
	fmt.Println(calc.Sum(1, 2))
}
