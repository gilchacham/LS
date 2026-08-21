
import Circleservice from "./circle.service.js"
import rectangleservice from "./rectangle.service.js";
 
 const option = prompt("(Digite a sua opção( 1-retangulo, 2-circulo")
 const resultDiv = document.getElementById("result")
 let result
switch(option){
    case"1":
    const width = prompt("Digite a largura")
    const heigth =prompt("Digite a altura")
    result=  rectangleservice(width,heigth)
    break;
    case "2":
        const radius = prompt ("Digite o raio")
result=Circleservice(radius)
    break;
    default:
        resultDiv.textContent =(" Opção invalida")

    break;
}
    if(result) {
        resultDiv.innerHTML = `
        <p>Área: ${result.area.toFixed(2)}</p>
        <p>Perímetro: ${result.perimeter.toFixed(2)}</P>`
    }
        
    
