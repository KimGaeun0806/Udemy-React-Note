## โ๏ธ Truthy & Falsy 
#### ๐น ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ์์ ๋ง์ ํน์ ํ ๊ธฐ์ค์ผ๋ก ๊ฐ์ ์ฐธ์ด๋ ๊ฑฐ์ง์ผ๋ก ๋ถ๋ฅ 
 
#### ๐น ์ฐธ์ผ๋ก ํ๊ฐํ๋ ๊ฐ๋ค (Truthy)
- ๋น ์ค๊ดํธ, ์ฆ ๊ฐ์ฒด ๋ฆฌํฐ๋ด ( {} )
- ์ซ์ ( 42 )
- ๋ฌธ์์ด ( "0", "false" )
- ์์ ๋ฌดํ๋ ( Infinity )

#### ๐น ๊ฑฐ์ง์ผ๋ก ํ๊ฐํ๋ ๊ฐ๋ค (Falsy)
- null 
- undefined
- ์ซ์ 0, -0
- NaN 
- ๋น ๋ฌธ์์ด ( "" )

#### ๐น Truthy, Falsy ํ์ฉํ๋ ๋ฒ  
- ํ๋ผ๋ฏธํฐ๊ฐ ๊ฐ์ฒด์ธ ๊ฒฝ์ฐ ๋ฌธ์  x 
```javascript
const getName = (person) => {
    return person.name;
};

let person = { name: '์ฐ์งํธ' };
const name = getName(person);
console.log(name); // ์ฐ์งํธ 
```
- person์ด undefined๋ null์ผ ๊ฒฝ์ฐ -> ์ ๋ฌ๋ฐ์ ํ๋ผ๋ฏธํฐ๊ฐ ๊ฐ์ฒด์ธ์ง ์๋์ง ํ๋จํด์ผ ํจ 
```javascript
const getName = (person) => {
    if (!person) { // undefined, null์ falsyํ ๊ฐ. false์ NOT์ ๋ถ์ด๋ฉด true๊ฐ ๋๋ ๊ฒ์ ํ์ฉ 
        return '๊ฐ์ฒด๊ฐ ์๋๋๋ค'
    }
    return person.name;
};

// if (person === undefined || person === null) {
//     return "๊ฐ์ฒด๊ฐ ์๋๋๋ค"
// } 
// ๊ฐ์ ์กฐ๊ฑด์๋ณด๋ค ํจ์ฌ ๊ฐ๋จํ๊ฒ ํด๊ฒฐ ๊ฐ๋ฅ     

let person;
const name = getName(person);
console.log(name); // ๊ฐ์ฒด๊ฐ ์๋๋๋ค
```
