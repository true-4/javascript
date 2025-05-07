'use strict'

// 2 пункт
const num1 = 1
const str1 = "hello"
const bool1 = true
const null1 = null
const undef1 = undefined
const sym1 = Symbol("a")
const big1 = 10n
const obj1 = { a: 1 }
const arr1 = [1, 2, 3]
const func1 = function() { return 1 }
const num2 = 2
const str2 = "hi"
const bool2 = false
const null2 = null
const undef2 = undefined
const sym2 = Symbol("b")
const big2 = 11n
const obj2 = { b: 2 }
const arr2 = [4, 5, 6]
const func2 = function() { return 2 }
const num3 = 3
const str3 = "ola"
const bool3 = true
const null3 = null
const undef3 = undefined
const sym3 = Symbol("c")
const big3 = 12n
const obj3 = { c: 3 }
const arr3 = [7, 8, 9]
const func3 = function() { return 3 }
const num4 = 4
const str4 = "norok"
const bool4 = false
const null4 = null
const undef4 = undefined
const sym4 = Symbol("d")
const big4 = 13n
const obj4 = { d: 4 }
const arr4 = [10, 11, 12]
const func4 = function() { return 4 }
const num5 = 5
const str5 = "salut"
const bool5 = true
const null5 = null
const undef5 = undefined
const sym5 = Symbol("e")
const big5 = 14n
const obj5 = { e: 5 }
const arr5 = [13, 14, 15]
const func5 = function() { return 5 }
const num6 = 6
const str6 = "privet"
const bool6 = false
const null6 = null
const undef6 = undefined
const sym6 = Symbol("f")
const big6 = 15n
const obj6 = { f: 6 }
const arr6 = [16, 17, 18]
const func6 = function() { return 6 }
const num7 = 7
const str7 = "nihau"
const bool7 = true
const null7 = null
const undef7 = undefined
const sym7 = Symbol("g")
const big7 = 16n
const obj7 = { g: 7 }
const arr7 = [19, 20, 21]
const func7 = function() { return 7 }
const num8 = 8
const str8 = "ohaiogozeimas"
const bool8 = false
const null8 = null
const undef8 = undefined
const sym8 = Symbol("h")
const big8 = 17n
const obj8 = { h: 8 }
const arr8 = [22, 23, 24]
const func8 = function() { return 8 }
const num9 = 9
const str9 = "namaste"
const bool9 = true
const null9 = null
const undef9 = undefined
const sym9 = Symbol("i")
const big9 = 18n
const obj9 = { i: 9 }
const arr9 = [25, 26, 27]
const func9 = function() { return 9 }
const num10 = 10
const str10 = "bonjur"
const bool10 = false
const null10 = null
const undef10 = undefined
const sym10 = Symbol("j")
const big10 = 19n
const obj10 = { j: 10 }
const arr10 = [28, 29, 30]
const func10 = function() { return 10 }

// 3 пункт
const age = 25
const userName = "Vladislav"
const isStudent = true
const muSymbol = Symbol("mu")
const bigNumber = 1000000n
const person = { name, age }
const colors = ["red", "green", "blue"]
const greet = function() { return "hello" }
const undefinedVar = undefined
const emptyValue = null
const PI = 3.1415
var oldSchool = "JS" 
//(РАЗНАЯ ОБЛАСТЬ ВИДИМОСТИ) отличается от let тем, что var можно вызвать до её обЪявления получим (undefined), а let выдаст ошибку чётко указам что такая переменная не объявлена
// console.log(testColl)
// var testColl = "Переменная вызванная до её объявления (undefined)"
const hasAccess = false
const numbers = [1, 2, 3, 4, 5]
const car = { 
  brand: "BMW",
  modal: "M3 E46",
  year: 2002,
}
const country = "Moldova"
function sayHi() {
  console.log("проверка вызова функции")
}
sayHi()
const taskCount = 30
const MAX_USER = 100
const fruits = [
  function() {},
  function() {},
  function() {},
]
const temperature = 22.5
const isOnline = true
const settings = {}
const messages = []
const sumFunc = function() {
  console.log(9+37)
}
sumFunc()
const lastLogin = null
const userRole = "admin"
const height = 700
const languages = ["JS", "GO", "1C",]
const book = {
  title: "JavaScript. Полное руководство. 7-е издание.",
  author: "Флэнаган Дэвид",
  year: 2021,
}
console.log(book)

// 5 пункт день 2
const num11 = 11
const str11 = "Car"
const bool11 = true
const null11 = null
const undef11 = undefined
const sym11 = Symbol("k")
const big11 = 20n
const obj11 = { k: 11 }
const arr11 = [31, 32, 33,]
const func11 = function() { return 11 }

const num12 = 12
const str12 = "motorcycle"
const bool12 = false
const null12 = null
const undef12 = undefined
const sym12 = Symbol("l")
const big12 = 21n
const obj12 = { l: 12 }
const arr12 = [34, 35, 36,]
const func12 = function() { return 12 }

const num13 = 13
const str13 = "good"
const bool13 = true
const null13 = null
const undef13 = undefined
const sym13 = Symbol("m")
const big13 = 22n
const obg13 = { m: 13 }
const arr13 = [37, 38, 39,]
const func13 = function() { return 13 }

const num14 = 14
const str14 = "top"
const bool14 = false
const null14 = null
const undef14 = undefined
const sym14 = Symbol("n")
const big14 = 23n
const obj14 = { n: 14 }
const arr14 = [40, 41, 42,]
const func14 = function() { return 14}

const num15 = 15
const str15 = "type"
const bool15 = true
const null15 = null
const undef15 = undefined
const sym15 = Symbol("o")
const big15 = 24n
const obj15 = { o: 15 }
const arr15 = [43, 44, 45,]
const func15 = function() { return 15 }

const num16 = 16
const str16 = "right"
const bool16 = false
const null16 = null
const undef16 = undefined
const sym16 = Symbol("p")
const big16 = 25n
const obj16 = { p: 16 }
const arr16 = [46, 47, 48,]
const func16 = function() { return 16 }

const num17 = 17
const str17 = "left"
const bool17 = true
const null17 = null
const undef17 = undefined
const sym17 = Symbol("q")
const big17 = 26n
const obj17 = { q: 17 }
const arr17 = [49, 50, 51,]
const func17 = function() { return 17 }

const num18 = 18
const str18 = "like"
const bool18 = false
const null18 = null
const undef18 = undefined
const sym18 = Symbol("r")
const big18 = 27n
const obj18 = { r: 18 }
const arr18 = [52, 53, 54,]
const func18 = function() { return 18 }

const num19 = 19
const srt19 = "string"
const bool19 = true
const null19 = null
const undef19 = undefined
const sym19 = Symbol("s")
const big19 = 28n
const obj19 = { s: 19 }
const arr19 = [55, 56, 57,]
const func19 = function() { return 19 }

const num20 = 20
const srt20 = "ring"
const bool20 = false
const null20 = null
const undef20 = undefined
const sym20 = Symbol("t")
const big20 = 29n
const obj20 = { t: 20 }
const arr20 = [58, 59, 60,]
const func20 = function() { return 20 }

const age2 = 23
const userName2 = "Viktor"
const isStudent2 = false
const muSymbol2 = Symbol("fack")
const bigNumber2 = 99999n
const person2 = { 
  surname: "Vlasov", 
  date: "07.03.2020",
}
const colors2 = ["yellow", "lightblue", "orange",]
const greet2 = function() { return "bye"}
const undefinedVar2 = undefined
const emptyValue2 = null
const PI2 = 3.1415
var oldSchool = "GO"
const hasAccess2 = true
const numbers2 = [6, 7, 8, 9, 10]
const car2 = {
  brand: "Mercedes-benz",
  model: "CLS 6.3AMG",
  year: 2015,
}
const country2 = "Brasil"
function sayHi2() {
  console.log("func")
}
sayHi2()
const taskCount2 = 34
const MAX_USER2 = 101
const fruits2 = [
  function() {},
  function() {},
  function() {},
]
const temperature2 = 19.6
const isOnline2 = false
const settings2 = {}
const messages2 = []
const sumFunc2 = function(a, b) {
  console.log(a + b)
}
sumFunc2(2, 3)
const lastLogin2 = null
const userRole2 = "user"
const height2 = 320
const languages2 = ["C#", "C++", "Pyhton"]
const book2 = {
  title: "Дресс-коды. 700 лет модной истории в деталях.",
  author: "Томпсон Ф. Р.",
  year:  2025,
}