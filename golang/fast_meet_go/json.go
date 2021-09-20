package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type Author struct {
	Name  string
	Email string
}

type Comment struct {
	Id      uint64
	Author  Author
	Content string
}

type Article struct {
	Id         uint64
	Title      string
	Author     Author
	Content    string
	Recommends []string
	Comments   []Comment
}

func main() {
	doc := `
	{
		"name":"maria",
		"age": 10
	}
	`

	var data map[string]interface{}
	json.Unmarshal([]byte(doc), &data)

	fmt.Println(data["age"].(float64) + float64(1))

	doc2, _ := json.MarshalIndent(data, "", "  ")

	fmt.Println(string(doc2))

	doc3 := `
	[{
		"Id": 1,
		"Title": "Hello, world!",
		"Author": {
			"Name": "Maria",
			"Email": "maria@example.com"
		},
		"Content": "Hello~",
		"Recomments": [
			"John",
			"Andrew"
		],
		"Comments": [{
			"Id": 1,
			"Author": {
				"Name": "Andrew",
				"Email": "andrew@hello.com"
			},
			"Content": "Hello Maria"
		}]
	}]
	`

	var data2 []Article
	json.Unmarshal([]byte(doc3), &data2)
	fmt.Println(data2)

	ioutil.WriteFile("articles.json", []byte(doc3), os.FileMode(06444))
}
