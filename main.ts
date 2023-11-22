function hoge<T>(moge: T):T {
    return moge
}
let num1 = hoge<number>(33);
console.log(num1);
let str1 = hoge("hello world");
console.log(str1);