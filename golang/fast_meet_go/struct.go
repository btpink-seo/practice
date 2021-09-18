package main

import (
	"fmt"
)

type Rectangle struct {
	width  int
	height int
}

func (rect *Rectangle) area() int {
	return rect.width * rect.height
}

func NewRectangle(width, height int) *Rectangle {
	return &Rectangle{width, height}
}

func rectangleArea(rect Rectangle) int {
	return rect.height * rect.width
}

func rectScaleA(a *[]int) {
	*a = append(*a, 1, 2)
}

func (_ Rectangle) dummy() {
	fmt.Println("dummy")
}
func main() {
	aa := []int{1, 2, 3}
	rectScaleA(&aa)

	fmt.Println(aa)
	var rect Rectangle = Rectangle{10, 20}
	rect2 := Rectangle{45, 0}
	rect3 := Rectangle{height: 11, width: 20}
	rect4 := new(Rectangle)
	rect4.height = 1

	rect5 := NewRectangle(20, 10)
	fmt.Println(rect.height, rect.width, rect)
	fmt.Println(rect2.height, rect2.width, rect2)
	fmt.Println(rect3.height, rect3.width, rect3)
	fmt.Println(rect4.height, rect4.width, rect4)
	fmt.Println(rect5.height, rect5.width, rect5)

	fmt.Println(rectangleArea(rect))

	fmt.Println(rect.area())
	rect.dummy()
}
