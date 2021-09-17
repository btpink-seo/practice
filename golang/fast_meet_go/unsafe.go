package main

import (
	f "fmt"
	. "unicode/utf8"
	"unsafe"
)

func main() {
	var (
		num1 int8  = 1
		num2 int16 = 1
		num3 int32 = 1
		num4 int64 = 1
	)

	f.Println(unsafe.Sizeof(num1))
	f.Println(unsafe.Sizeof(num2))
	f.Println(unsafe.Sizeof(num3))
	f.Println(unsafe.Sizeof(num4))

	var s1 string = "Hello, world!\n"
	var s2 string = "안녕하세요\n"
	var s3 string = "\ud55c\uae00"         // 한글: 유니코드 문자 코드로 저장
	var s4 string = "\U0000d55c\U0000ae00" // 한글: 유니코드 문자 코드로 저장
	var s5 string = "\xed\x95\x9c\xea\xb8\x80"
	f.Println(s1, s2, s3, s4, s5)
	f.Println(len("주희"))
	f.Println(RuneCountInString("주희"))

	f.Println("주희" == "주희")
	f.Println("주희" + "주희" + "징이")
	f.Println("주희" + "주희" + "징이" + s1)
	f.Printf("aa%c\b\a\n", s1[0])

	const (
		a = iota + 2
		b
		c
		_
		d
	)

	f.Println(a, b, c, d)

	arr1 := [3]int{1, 2, 3}
	arr2 := [3]int{1, 2, 3}
	f.Println(arr1 == arr2)
}
