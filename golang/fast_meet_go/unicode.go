package main

import (
	"fmt"
	"unicode"
)

func main() {
	var r1 rune = '함'
	fmt.Println(unicode.Is(unicode.Hangul, r1))
	fmt.Println(unicode.Is(unicode.Latin, r1))
	fmt.Println("===============")

	var r2 rune = '感'
	fmt.Println(unicode.Is(unicode.Han, r2))
	fmt.Println(unicode.Is(unicode.Hangul, r2))

	fmt.Println("===============")
	var r3 rune = 'a'
	fmt.Println(unicode.Is(unicode.Hangul, r3))
	fmt.Println(unicode.Is(unicode.Latin, r3))
	fmt.Println(unicode.In(r1, unicode.Latin, unicode.Han, unicode.Hangul))

}
