/// class Builder///
class Builder {
    constructor(val) {
        this.val = val;
    }
    plus(...n) {

        if (typeof (this.val) === "number") {

            this.val = [...n].reduce((a, b) => a + b, 0) + this.val;
            return this
        } else {

            this.val = this.val + [...n].reduce((a, b) => a + b, "")
            return this
        }
    }
    minus(...n) {
        if (typeof (this.val) === "number") {
            this.val = this.val - [...n].reduce((a, b) => a + b, 0);
            return this
        } else {
            let num = this.val.length - n * 1
            this.val = this.val.substr(0, num)
            return this
        }
    }
    multiply(n) {
        if (typeof (this.val) === "number") {
            this.val = this.val * n;
            return this
        } else {
            let nevVal = this.val
            for (let i = 0; i < n - 1; i++) {

                this.val += nevVal;

            }
            return this
        }
    }
    divide(n) {
        if (typeof (this.val) === "number") {
            this.val = this.val / n;
            return this
        } else {
            let k = Math.floor(this.val.length / n)

            this.val = this.val.substr(0, k * 1)
            return this

        }
    }
    mod(n) {
        if (typeof (this.val) === "number") {
            this.val = this.val % n
            return this
        }
    }
    remove(str) {

        this.val = this.val.split("")

        return this.val.filter(item => item !== str).join("")




    }
    sub(from, n) {
        console.log(from);
        console.log(n);
        let z = this.val.splice(from, n).toString()
        this.val=z
        console.log(this.val)
        return  this
    }
    get() {
        if (typeof (this.val) === "number") {

            return this
        } else {
            return "e"
        }

    }
    static random(from, to) {
        this.min = from;
        this.max = to;

        return randomizer(this.min, this.max);
    }
}
///// int builder//
class IntegerBuilder extends Builder {
    constructor(num) {

        if (typeof (num) !== "number") {
            num = 0;
            super(num);
        } else {
            super(num)
        }
    }
}
let intBuilder = new IntegerBuilder(10); // 10;
intBuilder
.plus(2,3,2)
.minus(1,2)
.multiply(2)
.divide(4)
.mod(3)
.get();
/////string builder///
function StrBuilder(val) {
    if (typeof (val) !== "string") {
        val = ""
        return Object.assign(this, new Builder(val));
    } else {
        return Object.assign(this, new Builder(val));
    }

}
StrBuilder.prototype = Object.create(Builder.prototype);
StrBuilder.prototype.constructor = StrBuilder;
let StringBuilder = new StrBuilder("hello")
StringBuilder
.plus(' all', '!')
.minus(4)
.multiply(3)
.divide(4)
.remove("l")
.sub(1, 1)
.get();
// randomizer for static method//
function randomizer(min, max) {


    if (min < Infinity || max < Infinity) {

        if (min > max) {

            let z = min;
            this.min = max;
            max = z;

            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

            return randomNumber;
        } else {

            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

            return randomNumber;
        }
    } else {
        console.log("type some numbers")
    }
}

