package main

import (
	"fmt"
	"log"
	"net/http"
	_ "runtime"
	_ "sync"

	"golang.org/x/net/html"
)

func fetch(url string) (*html.Node, error) {
	res, err := http.Get(url)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	doc, err := html.Parse(res.Body)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return doc, nil
}

// func parseFollowing(doc *html.Node) {

// }
func main() {
	doc, _ := fetch("https://github.com/pyrasis/following")
	fmt.Println(*doc)
}
