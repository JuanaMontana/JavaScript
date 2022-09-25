function tienda() {
    alert("Bienvenido a Figuritas Coleccionables!");
    let userName = prompt("Ingrese su nombre: ")
    alert("Bienvenido " + userName + "! Aquí encontrara todo lo que necesita para su colección");


let productoA = `Goku`;
let productoB = `Vegeta`;
let productoC = `Eren Jaeger Titan de Ataque`;
let productoD = `Pikachu`;
let precio1 = `100.000`;
let precio2 = `95.000`;
let precio3 = `150.000`;
let precio4 = `65.000`;
let stockA = 10;
let stockB = 17;
let stockC = 4;
let stockD = 9;

let seleccion1 = "";
let seleccion2 = "";
let confirmacionCompra = prompt("Desea realizar una compra?");

while( confirmacionCompra== `si` || confirmacionCompra ==`no`|| confirmacionCompra==``){
    if(confirmacionCompra==`si`){
        seleccion1 = parseInt(prompt(`Debe selecionar un articulo\n`+`1  ` + productoA + ` $` +precio1 + `\n` + `2  ` + productoB + ` $`+precio2 + `\n` + `3  ` + productoC + ` $`+precio3 + `\n` + `4  ` + productoD + ` $`+precio4));
        while(seleccion1){
            switch(seleccion1){
                case 1:
                    seleccion2 = parseInt(prompt(`Usted seleccionó: \n` + productoA + ` Que tiene un valor de: $`+ precio1 + "\n Que cantidad desea?"));
                case 2:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoB + ` Que tiene un valor de: $`+ precio2 + "\n Que cantidad desea?"));
                case 3:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoC + ` Que tiene un valor de: $`+ precio3 + "\n Que cantidad desea?"));
                case 4:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoD + ` Que tiene un valor de: $`+ precio4 + "\n Que cantidad desea?"));
            
                }
            }
        }

        if(confirmacionCompra==`no`){
            alert(`Gracias por su visita`);
            break;
        }
        if(confirmacionCompra ==``){
        alert(`...ERROR... \nDebe selecionar Si o No`);
        confirmacionCompra = prompt("Desea realizar una compra?");
        }
    }

}