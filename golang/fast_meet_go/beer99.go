package main

import (
	"fmt"
)

func bottle_string(i int) string {
	if i > 1 {
		return "bottles"
	} else {
		return "bottle"
	}
}

func main() {
	for i := 99; i >= 0; {
		if i == 0 {
			fmt.Println("No more bottles of beer on the wall, No more bottles of beer.")
			fmt.Println("Go to the store and buy som more, 99 bottles of beer on the wall.")
			break
		}

		fmt.Printf("%v %v of beer on the wall, %v %v of beer.\n", i, bottle_string(i), i, bottle_string(i))
		i--

		if i == 0 {
			fmt.Println("Take one down, pass it around, No more bottles of beer on the wall.")
		} else {
			fmt.Printf("Take one down, pass it around, %v %v of beer on the wall.\n", i, bottle_string(i))
		}
	}
}
