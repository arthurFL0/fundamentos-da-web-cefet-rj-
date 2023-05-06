const btn01 = document.getElementById("btn01");

const lerNumero = (seletor) =>{
    const entrada = document.querySelector(seletor);
    return parseFloat(entrada.value) || 0;
}

const soma = (n1,n2) => n1 + n2;

const apagaInput = seletor =>{
    document.querySelector(seletor) = "";
}

btn01.onclick = function(){

    const num1 = lerNumero("#I-1");
    const num2 =  lerNumero("#I-2");
    const result = soma(num1,num2);
    document.getElementById("R1").innerHTML = `RESULTADO = ${result}`;

    // pode ser p1.innerHTML = "resultado = "+ result;
 
    apagaInput("#I-1");
    apagaInput("#I-2");
}