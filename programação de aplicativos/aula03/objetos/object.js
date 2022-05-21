//let point ={}
//let point2 ={x:2, y:4}
//console.log(point, point2);
//point.x =2
//console.log(point);

/*let point = new Object({x:2})
console.log(point);
let point2 = Object.create({x:2, y:2})
console.log(point2.x + point2.y);*/

/*let book = {
    main_title: "harry potter",
    sub_title: "a pedra filosofal",
    author:{
        firstname:"J.K.",
        lastname:"rowling"
    }
}
console.log(book);*/

/*let object = {x:2}
if ("x" in object){
    delete (object.x)
}
console.log("x" in object);

console.log();*/

/*let serialNumbers = {
    $n:0,
    get next(){
        return this.$n ++
    },
    set next (value){
        this,$n = value
    }
}
console.log(serialNumbers.next);
console.log(serialNumbers.next);
serialNumbers.next = 10
console.log(serialNumbers.next);*/


let calc = {
    $x: 0,
    $y: 0,
    get valorX(){
        return this.$x
    }, 
    set valorX(newX){
        this.$x = newX 
    },
    get valorY(){
        return this.$y
    }, 

    set valorY(newY){
        this.$x = newY
    },
    get soma(){
        return this.$x + this.$y

    }

}
calc.valorX = 10
calc.valorY = 10
console.log(calc.soma);
