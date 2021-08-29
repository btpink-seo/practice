package main
import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -7439967},
	"Google": {37.42202, -122.08408},
}

func main() {
	// m = make(map[string]Vertex)
	// m["Bell Labs"] = Vertex{40.68433, -7439967}
	fmt.Println(m)
	fmt.Println(m["Bell Labs"])
	fmt.Println(m["Bell"])

	t := make(map[string]int)
	t["Answer"] = 42
	fmt.Println("The value: ", t["Answer"])
	t["Answer"] = 48
	fmt.Println("The value: ", t["Answer"])

	delete(t, "Answer")
	fmt.Println("The value: ", t["Answer"])

	v, ok := t["Answer"]
	fmt.Println("The value: ", v, "Present?", ok)

}