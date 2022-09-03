

//Agregamos function calcula area triangulo
function areaTriangulo(base, altura){
    

        //////////////////////////////////////////
                        
    let validar1 = true
    do{
        base = parseInt(prompt("ingresa base del triangulo")) 
    
   
    if(isNaN(base)){
        alert (`el valor ingresado ${base} no es un numero`)
    }
    else if (base === " "){
        alert(`no ingreso ningun valor`)

    }
    else {
                ////////////////////////////segunda validacion de datos/////////////////// 
        let validar2 = true
        do{
            altura = parseInt(prompt("ingresa altura del triangulo")) 
       
    
   
                if(isNaN(altura)){
                    alert (`el valor ingresado ${altura} no es un numero`)
                    }
                    else if (altura === " "){
                        alert(`no ingreso ningun valor`)

                        }
                    else{
                            validar2 = false  //// El do while me funciona, al anular validar = false, tambien. Eso es por el return??
                            let areaT = (base*altura)/2
                            alert ("El area del triangulo es:"  + areaT);
                            return areaT
                        }
                    } while (validar2)



    }
} while (validar1)
        ///////////////////////////////////////
    }
  
  
    //Agregamos function calcula area trapecio
  function areaTrapecio(baseMayor, baseMenor,altura){
    
    let validar1 = true
    do{
        baseMayor = parseInt(prompt("Ingrese base mayor del rombo ")) 
    
   
    if(isNaN(baseMayor)){
        alert (`el valor ingresado ${baseMayor} no es un numero`)
    }
    else if (baseMayor === " "){
        alert(`no ingreso ningun valor`)

    }
    else {
                ////////////////////////////segunda validacion de datos/////////////////// 
        let validar2 = true
        do{
            baseMenor = parseInt(prompt("Ingrese base menor del rombo ")) 
       
    
   
                if(isNaN(baseMenor)){
                    alert (`el valor ingresado ${baseMenor} no es un numero`)
                    }
                    else if (baseMenor=== " "){
                        alert(`no ingreso ningun valor`)

                        }

                    else{    ////////////////////////////tercera validacion de datos/////////////////// 
                        let validar3 = true

                        do{
                            altura = parseInt(prompt("Ingrese altura del rombo ")) 
                   
                                if(isNaN(altura)){
                                    alert (`el valor ingresado ${altura} no es un numero`)
                                    }
                                    else if (altura === " "){
                                        alert(`no ingreso ningun valor`)
                
                                        }
                                    else{
                                            validar3 = false  //// El do while me funciona, al anular validar = false, tambien. Eso es por el return??
                                            let areaTrap = ((baseMayor+baseMenor)/2)*altura
                                             alert ("El area del trapecio es:"  + areaTrap);
                                                return areaTrap
                                        }
                                    
                                } while (validar3)
                        }
                    } while (validar2)



    }
} while (validar1)
    
    }
  
    //Agregamos function calcula area rombo
  function areaRombo(diagMayor, diagMenor){
    
    let validar1 = true
    do{
        diagMayor = parseInt(prompt("Ingrese valor de diagonal mayor del rombo ")) 
    
   
    if(isNaN(diagMayor)){
        alert (`el valor ingresado ${diagMayor} no es un numero`)
    }
    else if (diagMayor === " "){
        alert(`no ingreso ningun valor`)

    }
    else {
                ////////////////////////////segunda validacion de datos/////////////////// 
        let validar2 = true
        do{
            diagMenor = parseInt(prompt("Ingrese valor de diagonal menor del rombo ")) 
       
    
   
                if(isNaN(diagMenor)){
                    alert (`el valor ingresado ${diagMenor} no es un numero`)
                    }
                    else if (diagMenor=== " "){
                        alert(`no ingreso ningun valor`)

                        }
                    else{
                            validar2 = false  //// El do while me funciona, al anular validar = false, tambien. Eso es por el return??
                            let areaR = (diagMayor*diagMenor)/2
                            alert ("El area del rombo es:"  + areaR);
                            return areaR
                        }
                    } while (validar2)



    }
} while (validar1)
    
}

    //Agregamos function calcula area cuadrado
  function areaCuadrado(lado){
    //Calculamos el area
    let validar = true
    do{
    lado = parseInt(prompt("Ingrese valor del lado del cuadrado "))  
    
   
    if(isNaN(lado)){
        alert (`el valor ingresado ${lado} no es un numero`)
    }
    else if (lado === " "){
        alert(`no ingreso ningun valor`)

    }
    else {
        validar = false  //// El do while me funciona, al anular validar = false, tambien. Eso es por el return??
        let areaC = lado*lado
        alert ("el resultado es"  + areaC);
        console.log ("El area del cuadrado es:"  + areaC);
        //reiniciar()
         return areaC
         
    }
} while (validar)
}   
    

function tipoDeOper(){
    let operacion  = (prompt("Ingrese la operacion que desea realizar: \nA- Calcular area de un cuadrado \nB- Calcular area de un triangulo \nC- Calcular area de un rombo \nD- Calcular area de un trapecio  "))
    console.log(operacion)
    return operacion
//    
}

function reiniciar(){
    //let reingresar  = (prompt("Ingrese la operacion que desea realizar: \nA- Calcular area de un cuadrado \nB- Calcular area de un rectangulo \nC- Calcular area de un rombo "))
    //console.log(operacion)
    //return operacion
    let pregunta = parseInt(prompt(`Desea realizar otro calculo? 
    1. Si
    2. No`))
    console.log(pregunta)
    return pregunta
    
    
}

/////////////INCIO DO WIHLE PARA OPCION DE CALCULO DE FIGURAS GEOMETRICAS////////////
let ingreso = true

do {

let confirmarIngreso = parseInt(prompt(`Desea calcuar el area de una figura geometrica? 
1. Si
2. No`))
           
              if(confirmarIngreso == 1 ) {
        
            
                //let opcion = tipoDeOper()
/////////////INCIO DO WIHLE PARA TIPO DE CALCULO ////////////
                let ingreso2= true
                ingreso = false /// sino declaro esto el simulador comikenxza de cero  // 
                do {

                    let opcion = tipoDeOper()
                   
                if (opcion.toLowerCase() == "a")  {
  
                    areaCuadrado()
                  console.log ("ingreso  " + opcion);

                    let reload = reiniciar()

                     if(reload == 1){
                    ingreso2 = true
                    }
                  
                     else  {
                    //ingreso = false
                    ingreso2 = false
                     }
                  }
                  else if (opcion.toLowerCase() == "b")  {
  
                    areaTriangulo()
                    console.log ("ingreso  " + opcion);
                
                        let reload = reiniciar()

                         if(reload == 1){
                        ingreso2 = true
                        }
                  
                        else  {
                        //ingreso = false
                        ingreso2 = false
                         }
                  }

                  else if (opcion.toLowerCase() == "c")  {
  
                         areaRombo()
                        console.log ("ingreso  " + opcion);

                        let reload = reiniciar()

                         if(reload == 1){
                        ingreso2 = true
                        }
                        
                         else  {
                        //ingreso = false
                        ingreso2 = false
                            }
                  }
                 
                  else if (opcion.toLowerCase() == "d")  {
  
                    areaTrapecio()
                    console.log ("ingreso  " + opcion);
                    
                    let reload = reiniciar()

                    if(reload == 1){
                   ingreso2 = true
                   }
                 
                    else  {
                   //ingreso = false
                   ingreso2 = false
                    }
                
                  }

                  else //////ELSE  OPCION DE CALCULO////
                  {
                    alert("La opcion elegida es incorrecta")
                    
                    //confirmar.toLowerCase() = " "
                   // ingreso2 = true
                  }

              } while(ingreso2)
           /////////////FIN DO WHILE/////////////
            }
            else if (confirmarIngreso == 2) {
                ingreso = false
              } 
              else if (confirmarIngreso != 1 || 2 ){
                alert(`Valor invalido`)
              }
            
            }
              while(ingreso)
/////////////FIN DO WHILE/////////////