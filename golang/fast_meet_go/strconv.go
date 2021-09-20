package main

import (
	"fmt"
	"strconv"
)

func main() {
	var err error

	var num1 int
	num1, err = strconv.Atoi("100")
	fmt.Println(num1, err)

	var num2 int
	num2, err = strconv.Atoi("10t")
	fmt.Println(num2, err)

	var s string
	s = strconv.Itoa(40)
	fmt.Println(s)

	var s4 string
	s4 = strconv.FormatInt(37, 8)
	fmt.Println(s4)

	fmt.Println("-------------")

	var ss []byte = make([]byte, 0)

	ss = strconv.AppendBool(ss, false)
	fmt.Println(string(ss))

	ss = strconv.AppendFloat(ss, 1.3, 'f', 2, 32)
	fmt.Println(string(ss))

	var num3 int64
	num3, err = strconv.ParseInt("-10", 10, 64)
	fmt.Println(num3, err)
}
