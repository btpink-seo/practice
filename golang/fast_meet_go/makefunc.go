package main

import (
	"fmt"
	. "reflect"
)

func h(args []Value) []Value {
	fmt.Println("Hello, world!")
	return nil
}

func sum(args []Value) []Value {
	a, b := args[0], args[1]
	if a.Kind() != b.Kind() {
		fmt.Println("diffrent type")
		return nil
	}

	switch a.Kind() {
	case Int, Int8, Int16, Int32, Int64:
		return []Value{ValueOf(a.Int() + b.Int())}
	case Uint, Uint8, Uint16, Uint32, Uint64:
		return []Value{ValueOf(a.Uint() + b.Uint())}
	case Float32, Float64:
		return []Value{ValueOf(a.Float() + b.Float())}
	case String:
		return []Value{ValueOf(a.String() + b.String())}
	default:
		return []Value{}
	}
}

func makeSum(fptr interface{}) {
	fn := ValueOf(fptr).Elem()
	v := MakeFunc(fn.Type(), sum)
	fn.Set(v)
}

func main() {
	var hello func()
	fn := ValueOf(&hello).Elem()

	v := MakeFunc(fn.Type(), h)
	fn.Set(v)
	hello()

	var intSum func(int, int) int64
	var floatSum func(float32, float32) float64
	var stringSum func(string, string) string

	makeSum(&intSum)
	makeSum(&floatSum)
	makeSum(&stringSum)

	fmt.Println(intSum(1, 2))
	fmt.Println(floatSum(1.2, 2.2))
	fmt.Println(stringSum("1", "2"))
}
