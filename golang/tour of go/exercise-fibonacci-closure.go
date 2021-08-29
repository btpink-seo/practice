package main

import "fmt"

// fibonacci is a function that returns
// a function that returns an int.
func fibonacci() func() int {
	root, i, current, next := [3]int{0, 1, 1}, 0, 1, 1

	return func() int {
		if i < cap(root) {
			tmp_index := i
			i += 1
			return root[tmp_index]
		}
		tmp := next
		next += current
		current = tmp

		return next
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
