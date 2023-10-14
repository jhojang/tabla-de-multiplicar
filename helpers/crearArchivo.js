const fs = require('fs')

const crearArchivo = async (base = 2, listar = false, hasta = 10) => {

    try {

        let salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida)

        if (listar) {
            console.log(salida)
        }
        
        return `Archivo tabla-del-${base}.txt generado correctamente`

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo,
}
