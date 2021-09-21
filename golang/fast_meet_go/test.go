package main

import (
	"calc"
	"testing"
)

func TestSum(t *testing.T) {
	r := calc.Sum(1, 2)
	if r != 3 {
		t.Error("결과값이 3이 아닙니다. r=", r)
	}
}
