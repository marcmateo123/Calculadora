window.onload = function () {

    var acum=0;
    var ultima_ope="";
    var viene_de_ope=false;

    var numeros = document.getElementsByClassName("numero");
    for(var i=0;i<numeros.length;i++){
        numeros[i].addEventListener("click",mostrar_display);
    }

    document.getElementById("suma").addEventListener("click",suma);
    document.getElementById("resta").addEventListener("click",resta);
    document.getElementById("igual").addEventListener("click",igual);


    function mostrar_display(){
        if (viene_de_ope){
            document.getElementById("display").value=this.value;
            viene_de_ope=false;
        }else{
            document.getElementById("display").value+=this.value;
       }
    }

    function suma(){
        switch(ultima_ope){
            case suma:
                acum += parseFloat(document.getElementById("display").value);
                break;
            default:
                acum = parseFloat(document.getElementById("display").value);
        }       
        viene_de_ope = true;

    }

    function resta(){
        switch(ultima_ope){
            case suma:
                acum += parseFloat(document.getElementById("display").value);
                break;
            default:
                acum = parseFloat(document.getElementById("display").value);
        }
        viene_de_ope = true;

    }

    function igual(){
        switch(ultima_ope){
            case suma:
                acum += parseFloat(document.getElementById("display").value);
                break;
                case resta:
                    acum -= parseFloat(document.getElementById("display").value);
                    break;
        }
         
        document.getElementById("display").value = acum;

    }


}




    /*              CODIGO OBSOLETO

    //------------------Variables-----------------//
    var resultado = document.getElementById('display');
    var igual = document.getElementById('igual');
    var reset = document.getElementById('numC');
    var raiz = document.getElementById('raiz');
    var cuadrado = document.getElementById('cuadr');
    var division = document.getElementById('divideix');
    var multiplica = document.getElementById('multiplica');
    var resta = document.getElementById('resta');
    var suma = document.getElementById('suma');
    var cero = document.getElementById('num0');
    var uno = document.getElementById('num1');
    var dos = document.getElementById('num2');
    var tres = document.getElementById('num3');
    var cuatro = document.getElementById('num4');
    var cinco = document.getElementById('num5');
    var seis = document.getElementById('num6');
    var siete = document.getElementById('num7');
    var ocho = document.getElementById('num8');
    var nueve = document.getElementById('num9');
    var coma = document.getElementById('coma');
    var valorPrimero;
    var valorSegundo;
    var operacion;
    //-------------------------------------------//



    //Valores
    uno.onclick = function (e) { // "(e)" Es la variable que contiene el objeto que devuelva la funcion (principalmente usada para eventos)
        resultado.value = resultado.value + "1";
    }
    dos.onclick = function (e) {
        resultado.value = resultado.value + "2";
    }
    tres.onclick = function (e) {
        resultado.value = resultado.value + "3";
    }
    cuatro.onclick = function (e) {
        resultado.value = resultado.value + "4";
    }
    cinco.onclick = function (e) {
        resultado.value = resultado.value + "5";
    }
    seis.onclick = function (e) {
        resultado.value = resultado.value + "6";
    }
    siete.onclick = function (e) {
        resultado.value = resultado.value + "7";
    }
    ocho.onclick = function (e) {
        resultado.value = resultado.value + "8";
    }
    nueve.onclick = function (e) {
        resultado.value = resultado.value + "9";
    }
    cero.onclick = function (e) {
        resultado.value = resultado.value + "0";
    }
    reset.onclick = function (e) {
        resetear();
    }
    igual.onclick = function (e) {
        valorSegundo=resultado.value;
        resolver();
    }




    //Funciones operaciones
    function resetear() { //Resetear valores
        resultado.value = null;
        valorPrimero = 0;
        operacion = "";
    }

    suma.onclick = function (e) { //Funcion sumar
        valorPrimero = resultado.value;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) { //Funcion restar
        valorPrimero = resultado.value;
        operacion = "-";
        limpiar();
    }
    multiplica.onclick = function (e) { //Funcion multiplicacion
        valorPrimero = resultado.value;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) { //Funcion dividir
        valorPrimero = resultado.value;
        operacion = "/";
        limpiar();
    }
    raiz.onlick = function(e){
        valorPrimero = resultado.value;
        operacion = "raiz";
        resolver();
    }
    cuadrado.onclick = function(e){
        valorPrimero = resultado.value;
        operacion = "cuadrado";
        resolver();
    }


    //RESULTADO
    function limpiar() {
        resultado.value = null;
    }
    function resolver() {
        switch (operacion) {
            case "+":
                res = parseFloat(valorPrimero) + parseFloat(valorSegundo);
                break;
            case "-":
                res = parseFloat(valorPrimero) - parseFloat(valorSegundo);
                break;
            case "*":
                res = parseFloat(valorPrimero) * parseFloat(valorSegundo);
                break;
            case "/":
                res = parseFloat(valorPrimero) / parseFloat(valorSegundo);
                break;
            case "cuadrado":
                res= parseFloat(valorPrimero)*parseFloat(valorPrimero);
                break;
            /*case "raiz":
                res = parseFloat(valorPrimero)*parseFloat(valorPrimero);
                console.log(res);
                break;   
        }
        resultado.value=res;
    }

    
} */
