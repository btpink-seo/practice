package main

import (
	"fmt"
	. "strings"
	"unicode"
)

func main() {
	fmt.Println(Contains("Hello, world!", "wo"))
	fmt.Println(Contains("Hello, world!", "w o"))
	fmt.Println(Contains("Hello, world!", "ow"))

	fmt.Println(ContainsAny("Hello, world!", "wo"))
	fmt.Println(ContainsAny("Hello, world!", "w o"))
	fmt.Println(ContainsAny("Hello, world!", "ow"))

	fmt.Println(Count("Hello Helium", "He"))
	var r rune = '하'
	fmt.Println(ContainsRune("안녕하세요", r))
	fmt.Println(HasPrefix("Hello, world!", "He"))
	fmt.Println(HasPrefix("Hello, world!", "rld!"))
	fmt.Println(HasSuffix("Hello, world!", "rld!"))
	fmt.Println("==============")

	fmt.Println(Index("Hello, world!", "He"))
	fmt.Println(Index("Hello, world!", "wor"))
	fmt.Println(Index("Hello, world!", "ow"))
	fmt.Println(IndexAny("Hello, world!", "oe"))
	fmt.Println(IndexAny("Hello, world!", "f"))

	var c byte = 'd'
	fmt.Println(IndexByte("Hello, world!", c))
	c = 'f'
	fmt.Println(IndexByte("Hello, world!", c))
	r = '언'
	fmt.Println(IndexRune("고 언어", r))

	f := func(rr rune) bool {
		return unicode.Is(unicode.Hangul, rr)
	}

	fmt.Println(IndexFunc("Go 언어", f))
	fmt.Println(IndexFunc("Go Language", f))

	fmt.Println(LastIndex("Hello Hello Hello, world!", "Hello"))
	fmt.Println(LastIndexAny("Hello, world!", "lo"))
	fmt.Println(LastIndexFunc("Hello, world! 안녕", f))

	fmt.Println("---------------------")

	s1 := []string{"Hello,", "world!"}
	fmt.Println(Join(s1, " "))
	s2 := Split("Hello, world!", ",")
	fmt.Println(s2[1])
	s3 := Fields("Hello, world!")
	fmt.Println(s3[1])

	s4 := FieldsFunc("Hello안녕Hello", f)
	fmt.Println(s4)

	fmt.Println(Repeat("Hello", 2))
	fmt.Println(Replace("Hello, world! world world world", "world", "GO", -1))
	fmt.Println(Replace("Hello Hello", "llo", "Go", 2))

	fmt.Println("--------------")

	fmt.Println(Trim("Hello,~~ world!~~", "~~"))
	fmt.Println(Trim("  Hello, world!   ", " "))
	fmt.Println(TrimLeft("~~Hello,~~ world!~~", "~"))
	fmt.Println(TrimRight("~~Hello,~~ world!~~", "~"))

	s := "안녕 Hello 고 Go 언어"
	fmt.Println(TrimFunc(s, f))
	fmt.Println(TrimLeftFunc(s, f))
	fmt.Println(TrimRightFunc(s, f))
	fmt.Println(TrimSuffix("Hello, world!", "orld!"))
	fmt.Println(TrimSuffix("Hello, world!", "wor"))

	fmt.Println("=====================")

	r1 := NewReplacer("<", "&lt;", ">", "&gt;")
	fmt.Println(r1.Replace("<div><span>Hello, world!</span></div>"))
}
