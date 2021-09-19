package main

import (
	"fmt"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	c := make(chan int, runtime.NumCPU()) // 비동기 채널
	// c := make(chan int) // 동기 채널
	count := 10
	for i := 0; i < count; i++ {
		go func(n int) {
			c <- n // 채널에 값을 넣고 값을 꺼낼 때까지 기다린다.
			fmt.Println("insert : ", n)
		}(i)
	}

	result := 0
	for i := 0; i < count; i++ {
		n := <-c // 값이 들어올 때까지 대기하다 값을 꺼낸다.
		fmt.Println(n)
		result += n
	}

	fmt.Println(result)
}
