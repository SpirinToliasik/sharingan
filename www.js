// stopanimation = false
// function firstCallback(time) {
//     if (stopanimation==true){return}
//     console.log("Перша функція ", time);
//     requestAnimationFrame(firstCallback);
//   }
  
//   function secondCallback(time) {
//     if (stopanimation==true){return}
//     console.log("Друга функція ", time);
//     requestAnimationFrame(secondCallback);
//   }
  
//   requestAnimationFrame(firstCallback);
//   requestAnimationFrame(secondCallback);
  
// ========================================================================

// class Rectangle {
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
//   area(){
//     return this.a*this.b
//   }
// }

// class Animals{
//   constructor(name){
//     this.name=name
//   }
//   speak(){
//     document.body.insertAdjacentHTML("beforeEnd", this.name + " fur   ")
//     document.body.insertAdjacentHTML("beforeEnd", `${this.name} fur`)
//   }
// }
// ger = new Animals("Ger")
// ger.speak()

// class Person{
//   constructor(name, age){
//     this.name=name
//     this.age=age
//   }
//   introduse(){
//     document.body.insertAdjacentHTML("beforeend",`Hello, my name is ${this.name}`)
//   }
//   static compareAge(Person1, Person2){
//     if (Person1.age<Person2.age) console.log(1);
//     if (Person1.age>Person2.age) console.log(2);
//     else console.log(3);
//   }
// }
// ======================================================================

// setTimeout(func-()-|code , delay in ms, arg1,arg2,arg3...)
// setTimeout(() => alert("hi"), 1000)
// timerId = setTimeout(..);
// clearTimeout(timerid)
// tim = setTimeout(()=>alert("rrr"),0)
// alert(tim)
// clearTimeout(tim)
// alert(tim)
// ------------------------------------------------
// function printNumbers(from,to){
//     if(from<to){
//         console.log(from)
//     }else {console.log(to);return};
//     setTimeout(printNumbers,1000,from+1,to)
// }


// function printNumbers(from,to){
//     timerId = setInterval(function(){
//         if(from<to) {console.log(from)}
//         else {console.log(to);clearInterval(timerId)}
//         from++;
//     },1000)
    
// }
// printNumbers(1,5)
// -----------------------------------------------------
// ============================================================================================
button = document.querySelector(".changeToMangeke")
eyes = document.querySelectorAll(".eye")
changeBackToMangeke = false
button.addEventListener("click",()=>{
    changeBackToMangeke = true;
})
    eyes.forEach(eye => {
        eye.addEventListener("animationiteration",()=>{
            if(changeBackToMangeke){
                // eye.classList.add("changeBackground")
                eye.style.backgroundImage = "url('../sharingan/assets/img/mangeke.png')"
            }
        })
    })



    