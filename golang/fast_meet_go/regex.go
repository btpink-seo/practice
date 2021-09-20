package main

import (
	"fmt"
	"regexp"
)

func main() {
	var matched bool
	matched, _ = regexp.MatchString("He", "Hello 100")
	fmt.Println(matched)
	matched, _ = regexp.MatchString("H", "Hi")
	fmt.Println(matched)
	matched, _ = regexp.MatchString("[a-zA-Z0-9]+", "Hello 100")
	fmt.Println(matched)
}
