package main

import (
	"fmt"
	"log"
	"net/http"
	"runtime"
	"strings"
	"sync"

	"golang.org/x/net/html"
)

var fetched = struct {
	m map[string]error
	sync.Mutex
}{m: make(map[string]error)}

func crawl(url string) {
	fetched.Lock()
	if _, ok := fetched.m[url]; ok {
		fetched.Unlock()
		return
	}
	fetched.Unlock()

	doc, err := fetch(url)

	fetched.Lock()
	fetched.m[url] = err
	fetched.Unlock()

	urls := parseFollowing(doc)
	done := make(chan bool)
	for _, u := range urls {
		go func(url string) {
			crawl(url)
			done <- true
		}(u)
	}

	for i := 0; i < len(urls); i++ {
		<-done
	}
}

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

func parseFollowing(doc *html.Node) []string {
	var urls = make([]string, 0)
	var f func(*html.Node)

	f = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "img" {
			for _, a := range n.Attr {
				if a.Key == "class" && strings.ContainsAny(a.Val, "avarar-user") {
					for _, attr := range n.Parent.Attr {
						if attr.Key == "href" && attr.Val != "" && !strings.Contains(attr.Val, "http") {
							fmt.Println(attr)
							user := attr.Val
							urls = append(urls, "https://github.com"+user+"?tab=following")
							break
						}
					}
					break
				}
			}
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
			f(c)
		}
	}

	f(doc)

	return urls
}

func main() {
	numCPUs := runtime.NumCPU()
	runtime.GOMAXPROCS(numCPUs)
	crawl("https://github.com/btpink-seo?tab=following")
}
