package main

import (
	"fmt"
	"strings"
)

type IPAddr [4]byte
func (ipaddr IPAddr) String() string {
	tmp := make([]string, 4)
	for index, ip := range ipaddr {
		tmp[index] = fmt.Sprintf("%v", ip)
	}
	return fmt.Sprintf(strings.Join(tmp[:], "."))
}

func main() {
	hosts := map[string]IPAddr{
		"loopback": {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}

	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}