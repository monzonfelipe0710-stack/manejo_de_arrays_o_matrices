const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function ejecutar() {
    let matrizPersonas =[];

    // 1. Entrada de datos
    while (true) {
        let nombre = await rl.question("Nombre (o 'finalizar' / 'terminado'): ");
        if (nombre.toLowerCase() === 'finalizar' || nombre.toLowerCase() === 'terminado') break;
        
        let edad = parseInt(await rl.question("Edad: "));
        let nota = parseFloat(await rl.question("Nota: "));
        
        matrizPersonas.push([nombre, edad, nota]);
    }

    if (matrizPersonas.length > 0) {
        // 2. Salida: Lista original
        console.log("\n--- Lista Original ---");
        for (let p of matrizPersonas) {
            console.log(`Nombre: ${p[0]}, Edad: ${p[1]}, Nota: ${p[2]}`);
        }

        // 3. Salida: Lista ordenada por nota
        console.log("\n--- Ordenado por Nota de Mayor a Menor ---");
        let ordenadas = [...matrizPersonas].sort((a, b) => b[2] - a[2]);
        for (let p of ordenadas) {
            console.log(`Nombre: ${p[0]}, Edad: ${p[1]}, Nota: ${p[2]}`);
        }

        // 4. Salida: Promedio
        console.log("\n--- Promedio General ---");
        let suma = matrizPersonas.reduce((acc, p) => acc + p[2], 0);
        console.log(`Promedio: ${suma / matrizPersonas.length}`);
    }
    
    rl.close();
}

ejecutar();