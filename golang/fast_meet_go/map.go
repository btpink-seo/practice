package main

import (
	"fmt"
)

func main() {
	var a map[string]int = make(map[string]int)
	var b = make(map[string]int)
	c := make(map[string]int)

	fmt.Println(a, b, c)

	d := map[string]int{"hello": 10, "world": 20}

	fmt.Println(d["hello"], d["world"])

	solarSystem := make(map[string]float32)

	solarSystem["Mercury"] = 87.969
	solarSystem["Venus"] = 224.70069

	fmt.Println(solarSystem)

	if value, ok := solarSystem["Mercury"]; ok {
		fmt.Println(value)
	}

	for key, v := range solarSystem {
		fmt.Println(key, v)
	}

	delete(d, "world")
	fmt.Println(d)

	terrestrialPlanet := map[string]map[string]float32{
		"Mercury": {
			"meanRadius":    2439.7,
			"mass":          3.302e+23,
			"orbitalPeriod": 87.969,
		},
	}
	fmt.Println(terrestrialPlanet)
}
