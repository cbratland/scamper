import Doc from './docs.js'

export const equal: Doc = new Doc(
  '(equal? v1 v2): boolean?', [
    'v1: any',
    'v2: any'
  ],
  'Returns `#t` if and only `v1` and `v2` are (structurally) equal values.'
)

export const number: Doc = new Doc(
  '(number? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a number.'
)

export const real: Doc = new Doc(
  '(real? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a real number.'
)

export const integer: Doc = new Doc(
  '(integer? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is an integer.'
)

export const nanQ: Doc = new Doc(
  '(nan? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is the number `NaN`.'
)

export const lt: Doc = new Doc(
  '(< v1 v2): boolean?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `#t` if and only `v1` is strictly less than `v2`.'
)

export const leq: Doc = new Doc(
  '(<= v1 v2): boolean?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `#t` if and only `v1` is less than or equal to `v2`.'
)

export const gt: Doc = new Doc(
  '(> v1 v2): boolean?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `#t` if and only `v1` is strictly greater than `v2`.'
)

export const geq: Doc = new Doc(
  '(>= v1 v2): boolean?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `#t` if and only `v1` is greater than or equal to `v2`.'
)

export const numeq: Doc = new Doc(
  '(= v1 v2): boolean?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `#t` if and only `v1` is equal to `v2`.'
)

export const zero: Doc = new Doc(
  '(zero? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is zero.'
)

export const positive: Doc = new Doc(
  '(positive? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is positive.'
)

export const negative: Doc = new Doc(
  '(negative? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is negative.'
)

export const odd: Doc = new Doc(
  '(odd? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is odd.'
)

export const even: Doc = new Doc(
  '(even? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is even.'
)

export const max: Doc = new Doc(
  '(max v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the maximum of the given numbers.'
)

export const min: Doc = new Doc(
  '(min v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the minimum of the given numbers.'
)

export const plus: Doc = new Doc(
  '(+ v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the sum of `v1`, `v2`, ... .'
)

export const minus: Doc = new Doc(
  '(- v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the difference of `v1`, `v2`, ... .'
)

export const times: Doc = new Doc(
  '(* v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the product of `v1`, `v2`, ... .'
)

export const div: Doc = new Doc(
  '(/ v1 v2 ...): number?', [
    'v: number?'
  ],
  'Returns the quotient of `v1`, `v2`, ... .'
)

export const abs: Doc = new Doc(
  '(abs v): number?', [
    'v: number?'
  ],
  'Returns the absolute value of `v`.'
)

export const quotient: Doc = new Doc(
  '(quotient v1 v2): number?', [
    'v1: integer?',
    'v2: integer?'
  ],
  'Returns the quotient of `v1` and `v2`, _i.e._, the whole number part of `v1 / v2`.'
)

export const remainder: Doc = new Doc(
  '(remainder v1 v2): number?', [
    'v1: integer?',
    'v2: integer?'
  ],
  'Returns the remainder of `v1` and `v2`, _i.e._, the remainder of `v1 / v2`.'
)

export const modulo: Doc = new Doc(
  '(modulo v1 v2): number?', [
    'v1: number?',
    'v2: number?'
  ],
  'Returns `k = n - d * q` where `q` is the integer such that `k` has the same sign as the divisor `d` while being as close to 0 as possible. (Source: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).)'
)

export const floor: Doc = new Doc(
  '(floor v): integer?', [
    'v: number?'
  ],
  'Returns the largest integer less than or equal to `v`.'
)

export const ceiling: Doc = new Doc(
  '(ceiling v): integer?', [
    'v: number?'
  ],
  'Returns the smallest integer greater than or equal to `v`.'
)

export const truncate: Doc = new Doc(
  '(truncate v): integer?', [
    'v: number?'
  ],
  'Returns the integer closest to `v` less than or equal to `v`.'
)

export const round: Doc = new Doc(
  '(round v): integer?', [
    'v: number?'
  ],
  'Returns the integer closest to `v`.'
)

export const square: Doc = new Doc(
  '(square v): number?', [
    'v: number?'
  ],
  'Returns the square of `v`.'
)

export const sqrt: Doc = new Doc(
  '(sqrt v): number?', [
    'v: number?'
  ],
  'Returns the square root of `v`.'
)

export const expt: Doc = new Doc(
  '(expt x y): number?', [
    'x: number?',
    'y: number?'
  ],
  'Returns `x` raised to the power of `y`.'
)

export const numberString: Doc = new Doc(
  '(number->string v): string?', [
    'v: number?'
  ],
  'Returns the string representation of `v`.'
)

export const stringNumber: Doc = new Doc(
  '(string->number s): number?', [
    's: string?, presumed to be a number'
  ],
  'Returns the number denoted by `s` as a `number`.'
)

export const exp: Doc = new Doc(
  '(exp v): number?', [
    'v: number?'
  ],
  'Returns the exponential of `v`.'
)

export const log: Doc = new Doc(
  '(log v): number?', [
    'v: number?'
  ],
  'Returns the natural logarithm of `v`.'
)

export const sin: Doc = new Doc(
  '(sin v): number?', [
    'v: number?'
  ],
  'Returns the sine of `v`.'
)

export const cos: Doc = new Doc(
  '(cos v): number?', [
    'v: number?'
  ],
  'Returns the cosine of `v`.'
)

export const tan: Doc = new Doc(
  '(tan v): number?', [
    'v: number?'
  ],
  'Returns the tangent of `v`.'
)

export const asin: Doc = new Doc(
  '(asin v): number?', [
    'v: number?'
  ],
  'Returns the arc sine of `v`.'
)

export const acos: Doc = new Doc(
  '(acos v): number?', [
    'v: number?'
  ],
  'Returns the arc cosine of `v`.'
)

export const atan: Doc = new Doc(
  '(atan v): number?', [
    'v: number?'
  ],
  'Returns the arc tangent of `v`.'
)

export const equalsEps: Doc = new Doc(
  '(=eps n): procedure?', [
    'n: number?'
  ],
  'Returns a function that takes two numbers `x` and `y` as input returns `#t` if `|x - y| < n`.'
)

export const not: Doc = new Doc(
  '(not v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is `#f`.'
)

export const boolean: Doc = new Doc(
  '(boolean? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a boolean.'
)

export const nand: Doc = new Doc(
  '(nand v1 v2 ...): boolean?', [
    'v: boolean?'
  ],
  'Equivalent to `(not (and v1 v2 ...))`.'
)

export const nor: Doc = new Doc(
  '(nor v1 v2 ...): boolean?', [
    'v: boolean?'
  ],
  'Equivalent to `(not (or v1 v2 ...))`.'
)

export const implies: Doc = new Doc(
  '(implies v1 v2): boolean?', [
    'v1: boolean?',
    'v2: boolean?'
  ],
  'Equivalent to `(if v1 v2 #t)`.'
)

export const xor: Doc = new Doc(
  '(xor v1 v2): boolean?', [
    'v1: boolean?',
    'v2: boolean?'
  ],
  'Equivalent to `(or (and v1 (not v2)) (and (not v1) v2))`.'
)

export const pairQ: Doc = new Doc(
  '(pair? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a pair.'
)

export const cons: Doc = new Doc(
  '(cons v1 v2): pair?', [
    'v1: any',
    'v2: any'
  ],
  'Returns a new pair containing `v1` and `v2`.'
)

export const pair: Doc = new Doc(
  '(pair v1 v2): pair?', [
    'v1: any',
    'v2: any'
  ],
  'Returns a new pair containing `v1` and `v2`.'
)

export const car: Doc = new Doc(
  '(car v): any', [
    'v: pair?'
  ],
  'Returns the first element of `v`.'
)

export const cdr: Doc = new Doc(
  '(cdr v): any', [
    'v: pair?'
  ],
  'Returns the second element of `v`.'
)

export const nullQ: Doc = new Doc(
  '(null? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is the empty list.'
)

export const listQ: Doc = new Doc(
  '(list? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a list.'
)

export const list: Doc = new Doc(
  '(list v1 v2 ...): list?', [
    'v: any'
  ],
  'Returns a new list containing `v1`, `v2`, ... .'
)

export const makeList: Doc = new Doc(
  '(make-list n v): list?', [
    'n: integer?',
    'v: any'
  ],
  'Returns a new list containing `n` copies of `v`.'
)

export const length: Doc = new Doc(
  '(length v): integer?', [
    'v: list?'
  ],
  'Returns the length of `v`.'
)

export const append: Doc = new Doc(
  '(append l1 l2 ...): list?', [
    'l: list?'
  ],
  'Returns a new list containing the elements of lists `l1`, `l2`, ... in sequence.'
)

export const reverse: Doc = new Doc(
  '(reverse l): list?', [
    'l: list?'
  ],
  'Returns a new list containing the elements of `l` in reverse order.'
)

export const listTail: Doc = new Doc(
  '(list-tail l k): list?', [
    'l: list?',
    'k: integer?, 0 <= k <= (length l)'
  ],
  'Returns `l` but with the first `k` elements of `l` omitted.'
)

export const listDrop: Doc = new Doc(
  '(list-drop l k): list?', [
    'l: list?',
    'k: integer?, 0 <= k <= (length l)'
  ],
  'An alias for `(list-tail l k)`.'
)

export const listTake: Doc = new Doc(
  '(list-take l k): list?', [
    'l: list?',
    'k: integer?, 0 <= k <= (length l)'
  ],
  'Returns a new list containing the first `k` elements of `l`.'
)

export const listRef: Doc = new Doc(
  '(list-ref l n): any', [
    'l: list?',
    'n: integer?, 0 <= n < (length l)'
  ],
  'Returns the `n`th element of `l`.'
)

export const indexOf: Doc = new Doc(
  '(index-of l v): integer?', [
    'l: list?',
    'v: any'
  ],
  'Returns the index of the first occurrence of `v` in `l` or `-1` if `v` is not in `l`.'
)

export const assocKey: Doc = new Doc(
  '(assoc-key? k l): any', [
    'k: any',
    'l: list?, an association list'
  ],
  'Returns `#t` if `k` is a key in association list `l`.'
)

export const assocRef: Doc = new Doc(
  '(assoc-ref k l): any', [
    'k: any',
    'l: list?, an association list'
  ],
  'Returns the value associated with key `k` in association list `l`.'
)

export const assocSet: Doc = new Doc(
  '(assoc-set k v l): list?', [
    'k: any',
    'v: any',
    'l: list?, an association list'
  ],
  'Returns a new association list containing the same key-value pairs as `l` except that `k` is associated with `v`.'
)

export const charQ: Doc = new Doc(
  '(char? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a character.'
)

export const charEq: Doc = new Doc(
  '(char=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... are all equivalent characters.'
)

export const charLt: Doc = new Doc(
  '(char<? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have strictly increasing character values.'
)

export const charGt: Doc = new Doc(
  '(char>? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have strictly decreasing character values.'
)

export const charLeq: Doc = new Doc(
  '(char<=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have non-decreasing character values.'
)

export const charGeq: Doc = new Doc(
  '(char>=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have non-increasing character values.'
)

export const charEqCi: Doc = new Doc(
  '(char-ci=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... are all equivalent characters, ignoring case.'
)

export const charLtCi: Doc = new Doc(
  '(char-ci<? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have strictly increasing character values, ignoring case.'
)

export const charGtCi: Doc = new Doc(
  '(char-ci>? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have strictly decreasing character values, ignoring case.'
)

export const charLeqCi: Doc = new Doc(
  '(char-ci<=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have non-decreasing character values, ignoring case.'
)

export const charGeqCi: Doc = new Doc(
  '(char-ci>=? c1 c2 ...): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c1`, `c2`, ... have non-increasing character values, ignoring case.'
)

export const charAlphabetic: Doc = new Doc(
  '(char-alphabetic? c): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c` is an alphabetic character.'
)

export const charNumeric: Doc = new Doc(
  '(char-numeric? c): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c` is a numeric character.'
)

export const charWhitespace: Doc = new Doc(
  '(char-whitespace? c): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c` is a whitespace character.'
)

export const charUpperCase: Doc = new Doc(
  '(char-upper-case? c): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c` is an upper-case character.'
)

export const charLowerCase: Doc = new Doc(
  '(char-lower-case? c): boolean?', [
    'c: char?'
  ],
  'Returns `#t` if and only `c` is a lower-case character.'
)

export const digitValue: Doc = new Doc(
  '(digit-value c): integer?', [
    'c: char?'
  ],
  'Returns the numeric value of `c` if `c` is a decimal digit (0-10), otherwise raises an error.'
)

export const charToInteger: Doc = new Doc(
  '(char->integer c): integer?', [
    'c: char?'
  ],
  'Returns the codepoint value of character `c`.'
)

export const integerToChar: Doc = new Doc(
  '(integer->char n): char?', [
    'n: integer?'
  ],
  'Returns the character with codepoint value `n`.'
)

export const charUpcase: Doc = new Doc(
  '(char-upcase c): char?', [
    'c: char?'
  ],
  'Returns the upper-case equivalent of `c`.'
)

export const charDowncase: Doc = new Doc(
  '(char-downcase c): char?', [
    'c: char?'
  ],
  'Returns the lower-case equivalent of `c`.'
)

export const charFoldcase: Doc = new Doc(
  '(char-foldcase c): char?', [
    'c: char?'
  ],
  'Returns the case-folded equivalent of `c`. This is a version of `c` that is appropriate for case-insensitive comparison.'
)

export const stringQ: Doc = new Doc(
  '(string? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a string.'
)

export const makeString: Doc = new Doc(
  '(make-string k c): string?', [
    'k: integer?',
    'c: char?'
  ],
  'Returns a string of length `k` with each character set to `c`.'
)

export const string: Doc = new Doc(
  '(string c1 c2 ...): string?', [
    'c: char?'
  ],
  'Returns a string consisting of the characters `c1`, `c2`, ...'
)

export const stringLength: Doc = new Doc(
  '(string-length v): integer?', [
    'v: string?'
  ],
  'Returns the length of `v`.'
)

export const stringRef: Doc = new Doc(
  '(string-ref s n): string?', [
    's: string?',
    'n: integer?'
  ],
  'Returns the character at index `n` of string `s`.'
)

export const stringEq: Doc = new Doc(
  '(string=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are equivalent strings.'
)

export const stringLt: Doc = new Doc(
  '(string<? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in strictly lexicographically increasing order.'
)

export const stringGt: Doc = new Doc(
  '(string>? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in strictly lexicographically decreasing order.'
)

export const stringLeq: Doc = new Doc(
  '(string<=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in lexicographical order.'
)

export const stringGeq: Doc = new Doc(
  '(string>=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in reverse lexicographical order.'
)

export const stringEqCi: Doc = new Doc(
  '(string-ci=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are equivalent strings, ignoring case.'
)

export const stringLtCi: Doc = new Doc(
  '(string-ci<? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in strictly lexicographically increasing order, ignoring case.'
)

export const stringGtCi: Doc = new Doc(
  '(string-ci>? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in strictly lexicographically decreasing order, ignoring case.'
)

export const stringLeqCi: Doc = new Doc(
  '(string-ci<=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in lexicographical order, ignoring case.'
)

export const stringGeqCi: Doc = new Doc(
  '(string-ci>=? s1 s2 ...): boolean?', [
    's: string?'
  ],
  'Returns `#t` if and only `s1`, `s2`, ... are in reverse lexicographical order, ignoring case.'
)

export const stringUpcase: Doc = new Doc(
  '(string-upcase s): string?', [
    's: string?'
  ],
  'Returns the upper-case version of `s`.'
)

export const stringDowncase: Doc = new Doc(
  '(string-downcase s): string?', [
    's: string?'
  ],
  'Returns the lower-case version of `s`.'
)

export const stringFoldcase: Doc = new Doc(
  '(string-foldcase s): string?', [
    's: string?'
  ],
  'Returns the case-folded version of `s`. This is a version of `s` that is appropriate for case-insensitive comparison.'
)

export const substring: Doc = new Doc(
  '(substring s start end): string?', [
    's: string?',
    'start: integer?',
    'end: integer?'
  ],
  'Returns the substring of `s` from index `start` (inclusive) to index `end` (exclusive).'
)

export const stringAppend: Doc = new Doc(
  '(string-append s1 s2 ...): string?', [
    's: string?'
  ],
  'Returns a string made by joining `s1`, `s2`, ... together.'
)

export const fileString: Doc = new Doc(
  '(file->string path): string?', [
    'path: string?'
  ],
  'Returns the contents of the file at `path` as a string.'
)

export const fileLines: Doc = new Doc(
  '(file->lines path): list?', [
    'path: string?'
  ],
  'Returns the contents of the file at `path` as a list of strings, one for each line.'
)

export const withFile: Doc = new Doc(
  '(with-file fn): void', [
    'fn: procedure?'
  ],
  "Creates a file chooser widget. When a file is selected, `fn` is called and passed the file's contents as input"
)

export const vectorQ: Doc = new Doc(
  '(vector? v): boolean', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a vector.'
)

export const vector: Doc = new Doc(
  '(vector v1 v2 ...): vector?', [
    'v: any'
  ],
  'Returns a vector consisting of the values `v1`, `v2`, ...'
)

export const makeVector: Doc = new Doc(
  '(make-vector k v): vector?', [
    'k: integer?',
    'v: any'
  ],
  'Returns a vector of length `k` with each element set to `v`.'
)

export const vectorLength: Doc = new Doc(
  '(vector-length v): integer?', [
    'v: vector?'
  ],
  'Returns the length of vector `v`.'
)

export const vectorRef: Doc = new Doc(
  '(vector-ref v n): any?', [
    'v: vector?',
    'n: integer?, a valid index into v'
  ],
  'Returns the value at index `n` of vector `v`.'
)

export const vectorSet: Doc = new Doc(
  '(vector-set! v n x): void?', [
    'v: vector?',
    'n: integer?, a valid index into v',
    'x: any'
  ],
  'Sets the value at index `n` of vector `v` to `x`.'
)

export const vectorFill: Doc = new Doc(
  '(vector-fill! v x): void?', [
    'v: vector?',
    'x: any'
  ],
  'Sets each element of vector `v` to `x`.'
)

export const vectorList: Doc = new Doc(
  '(vector->list v): list?', [
    'v: vector?'
  ],
  'Returns a list consisting of the values in vector `v`.'
)

export const listVector: Doc = new Doc(
  '(list->vector l): vector?', [
    'l: list?'
  ],
  'Returns a vector consisting of the values in list `l`.'
)

export const vectorRange: Doc = new Doc(
  '(vector-range beg end): vector?', [
    'beg: integer?, this argument can be omitted',
    'end: integer?',
    'step: integer?, step > 0, this argument can be omitted'
  ],
  'Returns a vector containing the numbers from `beg` to `end` (exclusive). If `beg` is not given, it defaults to 0. If step is not given, it defaults to 1.'
)

export const stringList: Doc = new Doc(
  '(string->list s): list?', [
    's: string?'
  ],
  'Returns a list of the characters in `s`.'
)

export const listString: Doc = new Doc(
  '(list->string l): string?', [
    'l: list?'
  ],
  'Returns a string made by joining the characters in `l` together.'
)

export const stringVector: Doc = new Doc(
  '(string->vector s): vector?', [
    's: string?'
  ],
  'Returns a vector of the characters in `s`.'
)

export const vectorString: Doc = new Doc(
  '(vector->string v): string?', [
    'v: vector? of characters'
  ],
  'Returns a string made by joining the characters in `v` together.'
)

export const stringContains: Doc = new Doc(
  '(string-contains? s1 s2): boolean?', [
    's1: string?',
    's2: string?'
  ],
  'Returns `#t` if and only if string `s1` contains string `s2`.'
)

export const stringSplit: Doc = new Doc(
  '(string-split s sep): list?', [
    's: string?',
    'sep: string?'
  ],
  'Returns a list of strings obtained by splitting `s` at occurrences of `sep`.'
)

export const stringSplitVector: Doc = new Doc(
  '(string-split-vector s sep): list?', [
    's: string?',
    'sep: string?'
  ],
  'Returns a vector of strings obtained by splitting `s` at occurrences of `sep`.'
)

export const procedure: Doc = new Doc(
  '(procedure? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only `v` is a procedure.'
)

export const apply: Doc = new Doc(
  '(apply f l): any', [
    'f: procedure?',
    'l: list?'
  ],
  'Calls `f` with the values contained in `l`.'
)

export const stringMap: Doc = new Doc(
  '(string-map f s): string?', [
    'f: procedure?, a function from characters to characters',
    's: string?'
  ],
  'Returns a new string containing the results of applying `f` to each character of `s`.'
)

export const map: Doc = new Doc(
  '(map f l): list?', [
    'f: procedure?',
    'l: list?'
  ],
  'Returns a new list containing the results of applying `f` to each element of `l`.'
)

export const filter: Doc = new Doc(
  '(filter f l): list?', [
    'f: procedure?, a predicate',
    'l: list?'
  ],
  'Returns a new list containing the elements of `l` for which `f` returns `#t`.'
)

export const fold: Doc = new Doc(
  '(fold f v l): any', [
    'f: procedure?, a binary function',
    'v: any',
    'l: list?'
  ],
  'Returns the result of accumulating the result of applying `f` to each element of `l`, starting with initial value `v`. The function `f` takes two arguments, the first is the accumulated value and the second is the current element.'
)

export const reduce: Doc = new Doc(
  '(reduce f l): any', [
    'f: procedure?, a binary function',
    'l: list?, non-empty'
  ],
  'Like `fold` but uses the first element of `l` as the initial value.'
)

export const foldRight: Doc = new Doc(
  '(fold-right f v l): any', [
    'f: procedure?, a binary function',
    'v: any',
    'l: list?'
  ],
  'Returns the result of accumulating the result of applying `f` to each element of `l` in reverse order, starting with initial value `v`. The function `f` takes two arguments, the first is the current element and the second is the accumulated value.'
)

export const reduceRight: Doc = new Doc(
  '(reduce-right f l): any', [
    'f: procedure?, a binary function',
    'l: list?, non-empty'
  ],
  'Like `fold-right` but uses the last element of `l` as the initial value.'
)

export const vectorMap: Doc = new Doc(
  '(vector-map f v1 .. vk): vector?', [
    'f: procedure?',
    'v: vector?'
  ],
  'Returns a new vector containing the results of applying `f` to each element of `v1`, ..., `vk` in a element-wise fashion.'
)

export const vectorMapBang: Doc = new Doc(
  '(vector-map f v1 .. vk): void', [
    'f: procedure?',
    'v: vector?'
  ],
  'Mutates v1 with the results of results of applying `f` to each element of `v1`, ..., `vk` in a element-wise fashion.'
)

export const vectorForEach: Doc = new Doc(
  '(vector-for-each f v1 .. vk): void', [
    'f: procedure?',
    'v: vector?'
  ],
  'Runs `f` on each element of `v1`, ..., `vk` in a element-wise fashion. `f` takes `k+1` arguments where the first argument is the current index and the remaining arguments are the elements of each vector at that index.'
)

export const forRange: Doc = new Doc(
  '(for-range beg end f): void?', [
    'beg: number?',
    'end: number?',
    'f: procedure?'
  ],
  'Runs `f` on each integer in the range `[beg, end)`. `f` takes one argument, the current value of integer.'
)

export const voidQ: Doc = new Doc(
  '(void? v): boolean?', [
    'v: any'
  ],
  'Returns `#t` if and only if `v` is the void value.'
)

export const vectorFilter: Doc = new Doc(
  '(vector-filter f l): list?', [
    'f: procedure?, a predicate',
    'l: vector?'
  ],
  'Returns a new vector containing the elements of `l` for which `f` returns `#t`.'
)

export const vectorAppend: Doc = new Doc(
  '(vector-append v1 .. vk): vector?', [
    'v: vector?'
  ],
  'Returns a new vector containing the elements of `v1`, ..., `vk` in order.'
)

export const error: Doc = new Doc(
  '(error msg): any', [
    'msg: string?'
  ],
  'Raises a runtime error with message `msg`.'
)

export const qq: Doc = new Doc(
  '{??}: any', [],
  'A placeholder for an expression that is not yet implemented.'
)

export const compose: Doc = new Doc(
  '(compose f1 f2 ...): procedure?', [
    'f: procedure?'
  ],
  'Returns a new procedure that is the composition of the given functions, _i.e._, `f(x) = f1(f2(...(fk(x))))`.'
)

export const o: Doc = new Doc(
  '(o f1 f2 ...): procedure?', [
    'f: procedure?'
  ],
  'A synonym for `compose`.'
)

export const pipe: Doc = new Doc(
  '(|> v f1 f2 ...): any', [
    'v: any',
    'f: procedure?'
  ],
  'Returns the result of applying the given function in sequence, starting with initial value `v`, _i.e._, `fk(fk-1(...(f1(v))))`.'
)

export const range: Doc = new Doc(
  '(range beg end): list?', [
    'beg: integer?, this argument can be omitted',
    'end: integer?',
    'step: integer?, step > 0, this argument can be omitted'
  ],
  'Returns a list containing the numbers from `beg` to `end` (exclusive). If `beg` is not given, it defaults to 0. If step is not given, it defaults to 1.'
)

export const random: Doc = new Doc(
  '(random n): list?', [
    'n: integer?, n >= 0'
  ],
  'Returns a random number in the range 0 to n (exclusive).'
)

export const withHandler: Doc = new Doc(
  '(with-handler h f v1 .. vk): any', [
    'h: procedure?, a handler',
    'f: procedure?, a function',
    'v: any'
  ],
  'Calls `(f v1 .. vk)` and if an error is occurred, calls `(h err)` where `err` is the string associated with the raised error.'
)

export const ignore: Doc = new Doc(
  '(ignore v): void', [
    'v: any'
  ],
  'Suppresses the output of value `v` to the page.'
)

export const elseV: Doc = new Doc(
  'else: ?boolean', [],
  'A synonym for `#t` appropriate for use as the final guard of a `cond` expression.'
)

export const pi: Doc = new Doc(
  'pi: number', [],
  'The constant π.'
)

export const voidV: Doc = new Doc(
  'void: void', [],
  'The void value.'
)