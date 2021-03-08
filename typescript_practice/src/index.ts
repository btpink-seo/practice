type Color = 'Black' | 'White'
type FFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


let set = new Set
set.add(1).add(2).add(3)
set.has(2)
set.has(3)

class Set {
  has(value: number): boolean {
    return true
  }

  add(value: number): this {
    return this
  }
}

class MutableSet extends Set {
  delete(value: number): boolean {
    return true
  }
}

type Food = {
  calories: number
  tasty: boolean
}

type Sushi = Food & {
  salty: boolean
}

type Cake = Food & {
  sweet: boolean
}

interface IFood {
  calories: number
  tasty: boolean
}

interface ISushi extends IFood {
  salty: boolean
}

interface ICake extends IFood {
  sweet: boolean
}

interface A {
  good(x: number): string
  bad(x: number): string
}

interface B extends A {
  good(x: string | number): string
  bad(x: string): string
}


type C = {
  good(x: number): string
  bad(x: number): string
}

type D = C & {
  good(x: string | number): string
  bad(x: string): string
}