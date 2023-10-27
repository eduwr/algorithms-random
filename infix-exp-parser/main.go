package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"unicode"
)

const (
	WhiteSpaceToken = iota
	PlusToken
	MinusToken
	StarToken
	SlashToken
	OpenParenthesisToken
	CloseParenthesisToken
	NumberToken
	BadToken
)

func main() {
	token := SlashToken
	fmt.Println("HELLO PARSER", token)

	scan := bufio.NewScanner(os.Stdin)

	for {
		print(">")
		scan.Scan()
		line := scan.Text()

		lexer := NewLexer(line)

		result := lexer.Evaluate()

		fmt.Printf("RESULT => %v", result)

	}

}

type Lexer struct {
	Expression string
	Position   int
}

func NewLexer(exp string) *Lexer {
	return &Lexer{
		Position:   0,
		Expression: exp,
	}
}

func (l *Lexer) Current() byte {
	return l.Expression[l.Position]
}

func (l *Lexer) Next() byte {
	c := l.Current()
	if l.Position < len(l.Expression) {
		l.Position++
	}

	return c
}

func (l *Lexer) InRange() bool {
	return l.Position < len(l.Expression)
}

func (l *Lexer) Evaluate() []TokenSyntax {
	var result []TokenSyntax

	for l.InRange() {
		symbol := l.Next()

		println("position => ", l.Position, len(l.Expression))
		for isNumber(symbol) {

			if l.Position >= len(l.Expression) {
				v, err := strconv.Atoi(string(symbol))
				if err != nil {
					panic("couldnt convert string to number")
				}

				println("value => ", symbol, v)
				result = append(result, NewTokenSyntax(NumberToken, v))

				break
			}

			println("debug ", l.Position, l.Current())

			c := l.Next()
			symbol += c
			next := l.Current()

			if !isNumber(next) {
				v, err := strconv.Atoi(string(symbol))
				if err != nil {
					panic("couldnt convert string to number")
				}
				result = append(result, NewTokenSyntax(NumberToken, v))

				break
			}
		}

		tokenMap := map[byte]int{
			'+': PlusToken,
			'-': MinusToken,
			'*': StarToken,
			'/': SlashToken,
			'(': OpenParenthesisToken,
			')': CloseParenthesisToken,
			' ': WhiteSpaceToken,
		}

		token, found := tokenMap[symbol]

		if !found {
			result = append(result, NewTokenSyntax(BadToken, 0))
		} else {
			result = append(result, NewTokenSyntax(token, 0))
		}

	}

	return result

}

func isNumber(b byte) bool {
	return unicode.IsDigit(rune(b))
}

type TokenSyntax struct {
	Type  int
	Value int
}

func NewTokenSyntax(t int, v int) TokenSyntax {
	return TokenSyntax{
		Type:  t,
		Value: v,
	}
}
