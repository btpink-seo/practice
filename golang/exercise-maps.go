package main

import (
	// "golang.org/x/tour/wc"
	"fmt"
	"strings"
)

func WordCount(s string) map[string]int {
	return map[string]int{s: len(strings.Fields(s))}
}

func main() {
	// ws.Test(WordCount)
	fmt.Println(WordCount("asd asdf wef asdf"))
}
