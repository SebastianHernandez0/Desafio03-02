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
    
})
inputValor2.addEventListener("input",function(){
    valor2= parseInt(this.value) 
    
})
inputValor3.addEventListener("input",function(){
    valor3= parseInt(this.value) 
})





btn.addEventListener("click",function(){

    res=valor1+valor2+valor3
    if(res<=10){
        parrafo=document.createElement("p")
        restext=document.createTextNode("Llevas "+res+" Stickers")
        parrafo.appendChild(restext)
        divsol.appendChild(parrafo)
    }
    else{
        parrafo=document.createElement("p")
        restext=document.createTextNode("Llevas demasiados stickers")
        parrafo.appendChild(restext)
        divsol.appendChild(parrafo)
    }

})


//Desafio 3

select1= document.querySelector(".desafio3__select--1")
select2= document.querySelector(".desafio3__select--2")
select3= document.querySelector(".desafio3__select--3")
btn3=document.querySelector(".desafio3__btn")
divsol3=document.querySelector(".desafio3__sol")

select1.addEventListener("change",function(){
    S1=select1.value
})
select2.addEventListener("change",function(){
    S2=select2.value
})
select3.addEventListener("change",function(){
    S3=select3.value
})



btn3.addEventListener("click",function(){
    resSelect=S1+S2+S3

parr=document.createElement("p")

    if (resSelect=="911") {
        restext=document.createTextNode("Password 1 correcto")
        parr.appendChild(restext)
        divsol3.appendChild(parr)
        
    }
    else if (resSelect=="714") {
        restext=document.createTextNode("Password 2 correcto")
        parr.appendChild(restext)
        divsol3.appendChild(parr)
        
    } else {
        restext=document.createTextNode("password incorrecto")
        parr.appendChild(restext)
        divsol3.appendChild(parr)
        
    }
})
