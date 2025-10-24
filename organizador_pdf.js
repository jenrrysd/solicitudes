// organizador_pdf.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OPCIÓN 1: Con os.homedir() (RECOMENDADA)
const HOME = os.homedir();
const DESCARGAS = path.join(HOME, 'Descargas');
const DESTINO = path.join(HOME, 'Descargas', 'pdfs');

// OPCIÓN 2: Con template literals (si prefieres)
// const USUARIO = os.userInfo().username;
// const DESCARGAS = `/home/${USUARIO}/Descargas`;  // ← Usar BACKTICKS ``
// const DESTINO = `/home/${USUARIO}/Descargas/pdf`;

console.log('🔄 Iniciando organizador de PDFs...');
console.log(`👤 Usuario: ${os.userInfo().username}`);
console.log(`🏠 Home: ${HOME}`);
console.log(`📁 Origen: ${DESCARGAS}`);
console.log(`📁 Destino: ${DESTINO}`);

// Verificar que existe Descargas
if (!fs.existsSync(DESCARGAS)) {
    console.error(`❌ No existe la carpeta Descargas: ${DESCARGAS}`);
    process.exit(1);
}

function organizarPDFs() {
    fs.readdir(DESCARGAS, (err, archivos) => {
        if (err) {
            console.error('❌ Error leyendo Descargas:', err);
            return;
        }

        let archivosMovidos = 0;

        archivos.forEach(archivo => {
            if (archivo.match(/^\d{4}-\d{7}\.pdf$/)) {
                const origen = path.join(DESCARGAS, archivo);
                const destino = path.join(DESTINO, archivo);

                if (!fs.existsSync(destino)) {
                    fs.rename(origen, destino, (err) => {
                        if (err) {
                            console.error(`❌ Error moviendo ${archivo}:`, err);
                        } else {
                            console.log(`✅ Movido: ${archivo}`);
                            archivosMovidos++;
                        }
                    });
                }
            }
        });

        if (archivosMovidos > 0) {
            console.log(`📊 Total archivos movidos: ${archivosMovidos}`);
        }
    });
}

// Crear carpeta destino si no existe
if (!fs.existsSync(DESTINO)) {
    try {
        fs.mkdirSync(DESTINO, { recursive: true });
        console.log('✅ Carpeta pdfs creada en Descargas');
    } catch (error) {
        console.error(`❌ Error creando carpeta: ${error.message}`);
        process.exit(1);
    }
} else {
    console.log('✅ Carpeta pdfs ya existe');
}

setInterval(organizarPDFs, 10000);
console.log('⏰ Monitoreando cada 10 segundos...');
organizarPDFs();