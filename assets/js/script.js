let imagen= document.querySelector(".desafio-1__img")

imagen.addEventListener("click", function(){
   
    let color=imagen.style.border
    

    if (color == ""){
        imagen.style.border="2px solid red"
    }
    else if (color == "2px solid red") {
        imagen.style.border=""
        
    } 
})

inputValor1= document.querySelector(".desafio-2__input--1")
inputValor2=document.querySelector(".desafio-2__input--2")
inputValor3=document.querySelector(".desafio-2__input--3")
btn=document.querySelector(".desafio-2__btn")
divsol=document.querySelector(".desafio-2__sol")

//valor1=parseFloat(inputValor1.value)
//valor2=parseFloat(inputValor2.value)
//valor3=parseFloat(inputValor3.value)

inputValor1.addEventListener("input",function(){
    valor1=parseInt(this.value) 
    console.log(valor1)
})
inputValor2.addEventListener("input",function(){
    valor2= parseInt(this.value) 
    console.log(valor2)
})
inputValor3.addEventListener("input",function(){
    valor3= parseInt(this.value) 
    console.log(valor3)
})





btn.addEventListener("click",function(){

    res=valor1+valor2+valor3
    if(res<=10){
        parrafo=document.createElement("p")
        restext=document.createTextNode(res)
        parrafo.appendChild(restext)
        divsol.appendChild(parrafo)
    }

})



