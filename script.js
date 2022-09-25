function tienda() {
    alert("Bienvenido a Figuritas Coleccionables!");
    let userName = prompt("Ingrese su nombre: ")
    saludar(userName);



function saludar (userName){
    alert("Bienvenido " + userName + "! Aquí encontrara todo lo que necesita para su colección");
}

let producto1 = `Goku`;
let producto2 = `Vegeta`;
let producto3 = `Eren Jaeger Titan de Ataque`;
let producto4 = `Pikachu`;
let precio1 = `100.000`;
let precio2 = `95.000`;
let precio3 = `150.000`;
let precio4 = `65.000`;
let valor1 = 100000;
let valor2 = 95000;
let valor3 = 150000;
let valor4 = 65000;
let total = 0;
let totalisimo = 0;

function totalisimoo (num1, num2){
    let resultado = num1 + num2;
    alert('Su total es:', resultado);
    return resultado
}


let seleccion1 = "";
let seleccion2 = "";
let confirmacionCompra = prompt("Desea realizar una compra?");

while( confirmacionCompra== `si` || confirmacionCompra ==`no`|| confirmacionCompra==``){
    console.log("while grande" + confirmacionCompra)
    if(confirmacionCompra==`si`){
        seleccion1 = parseInt(prompt(`Debe selecionar un articulo\n`+`1  ` + producto1 + ` $` +precio1 + `\n` + `2  ` + producto2 + ` $`+precio2 + `\n` + `3  ` + producto3 + ` $`+precio3 + `\n` + `4  ` + producto4 + ` $`+precio4));
        while(seleccion1 == '1' || seleccion1 == '2' || seleccion1 == '3' || seleccion1 == '4'){
            console.log('entrando al while')
            switch(seleccion1){
                case 1:
                    seleccion2 = parseInt(prompt(`Usted seleccionó: \n` + producto1 + ` Que tiene un valor de: $`+ precio1 + "\n Que cantidad desea?"));
                    total = seleccion2 * valor1;
                    console.log(total);
                    break
                case 2:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto2 + ` Que tiene un valor de: $`+ precio2 + "\n Que cantidad desea?"));
                    total = seleccion2 * valor2;
                    console.log(total);
                    break
                case 3:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto3 + ` Que tiene un valor de: $`+ precio3 + "\n Que cantidad desea?"));
                    total = seleccion2 * valor3;
                    console.log(total);
                    break
                case 4:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto4 + ` Que tiene un valor de: $`+ precio4 + "\n Que cantidad desea?"));
                    total = seleccion2 * valor4;
                    console.log(total);
                    break
                }
            seleccion1 = parseInt(prompt(`Desea comprar mas? Seleccione un articulo\n`+`1  ` + producto1 + ` $` +precio1 + `\n` + `2  ` + producto2 + ` $`+precio2 + `\n` + `3  ` + producto3 + ` $`+precio3 + `\n` + `4  ` + producto4 + ` $`+precio4 + `\n` + `5  ` + ` para Salir`));
            if(seleccion1 == 5){
                confirmacionCompra = 'no';
            }
            totalisimo = totalisimo + total;
            }
        }

        if(confirmacionCompra==`no`){
            alert(`Gracias por su visita, el total de su compra es: ${totalisimo}`);
            break;
        }
        if(confirmacionCompra ==``){
        alert(`...ERROR... \nDebe selecionar si o no`);
        confirmacionCompra = prompt("Desea realizar una compra?");
        }
    }

}