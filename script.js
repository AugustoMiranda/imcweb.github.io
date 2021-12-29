var capturandoPeso = "";
var capturandoAltura = "";

function capturar() {
    
    capturandoPeso = document.getElementById('input-peso').value;
    capturandoAltura = document.getElementById('input-altura').value;
    

    if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) < 18.5){
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Abaixo do peso';

    } else if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) > 18.5 && (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) <= 24.9) {
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Peso Normal';

    } else if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) > 25.0 && (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) <= 29.9){
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Pré-obesidade';
    } else if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) > 30.0 && (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) <= 34.9){
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Obesidade Grau I';
    
    }else if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) > 35.0 && (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) <= 39.9){
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Obesidade Grau II';
    
    }else if ((capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) > 40.0){
        document.getElementById('input-resultado').innerHTML = 'Resultado: \n' + 'Peso: ' + capturandoPeso + ' Kg.'  +
        '\nAltura: ' + capturandoAltura + ' cm. ' + '\nIMC: ' + 
        (capturandoPeso / (capturandoAltura * capturandoAltura)).toFixed(2) + '\nIMC: Obesidade Grau III';
    
    }

    event.preventDefault();
    
}








