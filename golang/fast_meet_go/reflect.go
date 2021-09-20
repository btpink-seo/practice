package main

import (
	"fmt"
	"reflect"
)

type Data struct {
	a, b int
}

type Person struct {
	name string `tag1:"이름" tag2:"Name"`
	age  string `tag1:"나이" tag3:"Age"`
}

func main() {
	var num int = 1
	fmt.Println(reflect.TypeOf(num))

	var s string = "Hello, world!"
	fmt.Println(reflect.TypeOf(s))

	var ff float32 = 1.3
	fmt.Println(reflect.TypeOf(ff))

	var data Data = Data{1, 2}
	fmt.Println(reflect.TypeOf(data))
	fmt.Println("================")
	var f float64 = 1.3
	t := reflect.TypeOf(f)
	v := reflect.ValueOf(f)

	fmt.Println(t.Name())
	fmt.Println(t.Size())
	fmt.Println(t.Kind() == reflect.Float64)

	fmt.Println(v.Type())
	fmt.Println(v.Kind() == reflect.Float64)
	fmt.Println(v.Kind() == reflect.Int64)

	fmt.Println(v.Float())

	fmt.Println("================")

	p := Person{}
	name, ok := reflect.TypeOf(p).FieldByName("name")
	fmt.Println(ok, name.Tag.Get("tag1"), name.Tag.Get("tag2"))

	age, ok := reflect.TypeOf(p).FieldByName("age")
	fmt.Println(ok, age.Tag.Get("tag1"), age.Tag.Get("tag3"))

	fmt.Println("================")

	var a *int = new(int)
	*a = 1

	fmt.Println(reflect.TypeOf(a))
	fmt.Println(reflect.ValueOf(a))
	// fmt.Println(reflect.ValueOf(a).Int())
	fmt.Println(reflect.ValueOf(a).Elem())
	fmt.Println(reflect.ValueOf(a).Elem().Int())

	var b interface{}
	b = 1

	fmt.Println(reflect.TypeOf(b))
	fmt.Println(reflect.ValueOf(b))
	fmt.Println(reflect.ValueOf(b).Int())
	fmt.Println(reflect.ValueOf(b).Elem())
}
