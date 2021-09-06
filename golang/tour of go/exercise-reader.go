package main

import "golang.org/x/tour/reader"

type MyReader struct{}
func (myReader MyReader) Read([]byte) (int, error) {
	for {
		n, err := r.Read(b)
		fmt.Printf("n = %v  err = %v  b = %v\n", n, err, b)
		fmt.Printf("b[:n] = %q\n", b[:n])
		if err == io.EOF {
			break
		}
	}
}

func main() {
	reader.Validate(MyReader{})
}
