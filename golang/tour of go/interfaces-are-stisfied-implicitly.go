package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

// T리시버 이지만 인터페이스 I에서도 사용할 수 있게 암묵적 변환이 일어난다.
func (t T) M() {
	fmt.Println(t.S)
}

func main() {
	var i I = T{"hello"}
	i.M()
}