// Datos de provincias y distritos
const provinciasData = {
    "01": [
        { codigo: "0101", nombre: "CHACHAPOYAS" },
        { codigo: "0102", nombre: "BAGUA" },
        { codigo: "0103", nombre: "BONGARA" },
        { codigo: "0104", nombre: "CONDORCANQUI" },
        { codigo: "0105", nombre: "LUYA" },
        { codigo: "0106", nombre: "RODRIGUEZ DE MENDOZA" },
        { codigo: "0107", nombre: "UTCUBAMBA" }
    ],
    "02": [
        { codigo: "0201", nombre: "HUARAZ" },
        { codigo: "0202", nombre: "AIJA" },
        { codigo: "0203", nombre: "ANTONIO RAYMONDI" },
        { codigo: "0204", nombre: "ASUNCION" },
        { codigo: "0205", nombre: "BOLOGNESI" },
        { codigo: "0206", nombre: "CARHUAZ" },
        { codigo: "0207", nombre: "CARLOS FERMIN FITZCARRALD" },
        { codigo: "0208", nombre: "CASMA" },
        { codigo: "0209", nombre: "CORONGO" },
        { codigo: "0210", nombre: "HUARI" },
        { codigo: "0211", nombre: "HUARMEY" },
        { codigo: "0212", nombre: "HUAYLAS" },
        { codigo: "0213", nombre: "MARISCAL LUZURIAGA" },
        { codigo: "0214", nombre: "OCROS" },
        { codigo: "0215", nombre: "PALLASCA" },
        { codigo: "0216", nombre: "POMABAMBA" },
        { codigo: "0217", nombre: "RECUAY" },
        { codigo: "0218", nombre: "SANTA" },
        { codigo: "0219", nombre: "SIHUAS" },
        { codigo: "0220", nombre: "YUNGAY" }
    ],
    "15": [
        { codigo: "1501", nombre: "LIMA" },
        { codigo: "1502", nombre: "BARRANCA" },
        { codigo: "1503", nombre: "CAJATAMBO" },
        { codigo: "1504", nombre: "CANTA" },
        { codigo: "1505", nombre: "CAÑETE" },
        { codigo: "1506", nombre: "HUARAL" },
        { codigo: "1507", nombre: "HUAROCHIRI" },
        { codigo: "1508", nombre: "HUAURA" },
        { codigo: "1509", nombre: "OYON" },
        { codigo: "1510", nombre: "YAUYOS" }
    ]
};

const distritosData = {
    "1501": [
        { codigo: "150101", nombre: "LIMA" },
        { codigo: "150102", nombre: "ANCON" },
        { codigo: "150103", nombre: "ATE" },
        { codigo: "150104", nombre: "BARRANCO" },
        { codigo: "150105", nombre: "BREÑA" },
        { codigo: "150106", nombre: "CARABAYLLO" },
        { codigo: "150107", nombre: "CHACLACAYO" },
        { codigo: "150108", nombre: "CHORRILLOS" },
        { codigo: "150109", nombre: "CIENEGUILLA" },
        { codigo: "150110", nombre: "COMAS" },
        { codigo: "150111", nombre: "EL AGUSTINO" },
        { codigo: "150112", nombre: "INDEPENDENCIA" },
        { codigo: "150113", nombre: "JESUS MARIA" },
        { codigo: "150114", nombre: "LA MOLINA" },
        { codigo: "150115", nombre: "LA VICTORIA" },
        { codigo: "150116", nombre: "LINCE" },
        { codigo: "150117", nombre: "LOS OLIVOS" },
        { codigo: "150118", nombre: "LURIGANCHO" },
        { codigo: "150119", nombre: "LURIN" },
        { codigo: "150120", nombre: "MAGDALENA DEL MAR" },
        { codigo: "150121", nombre: "MAGDALENA VIEJA" },
        { codigo: "150122", nombre: "MIRAFLORES" },
        { codigo: "150123", nombre: "PACHACAMAC" },
        { codigo: "150124", nombre: "PUCUSANA" },
        { codigo: "150125", nombre: "PUEBLO LIBRE" },
        { codigo: "150126", nombre: "PUENTE PIEDRA" },
        { codigo: "150127", nombre: "RIMAC" },
        { codigo: "150128", nombre: "SAN BARTOLO" },
        { codigo: "150129", nombre: "SAN BORJA" },
        { codigo: "150130", nombre: "SAN ISIDRO" },
        { codigo: "150131", nombre: "SAN JUAN DE LURIGANCHO" },
        { codigo: "150132", nombre: "SAN JUAN DE MIRAFLORES" },
        { codigo: "150133", nombre: "SAN LUIS" },
        { codigo: "150134", nombre: "SAN MARTIN DE PORRES" },
        { codigo: "150135", nombre: "SAN MIGUEL" },
        { codigo: "150136", nombre: "SANTA ANITA" },
        { codigo: "150137", nombre: "SANTA MARIA DEL MAR" },
        { codigo: "150138", nombre: "SANTA ROSA" },
        { codigo: "150139", nombre: "SANTIAGO DE SURCO" },
        { codigo: "150140", nombre: "SURQUILLO" },
        { codigo: "150141", nombre: "VILLA EL SALVADOR" },
        { codigo: "150142", nombre: "VILLA MARIA DEL TRIUNFO" }
    ],
    "0101": [
        { codigo: "010101", nombre: "CHACHAPOYAS" },
        { codigo: "010102", nombre: "ASUNCION" },
        { codigo: "010103", nombre: "BALSAS" },
        { codigo: "010104", nombre: "CHETO" },
        { codigo: "010105", nombre: "CHILIQUIN" },
        { codigo: "010106", nombre: "CHUQUIBAMBA" },
        { codigo: "010107", nombre: "GRANADA" },
        { codigo: "010108", nombre: "HUANCAS" },
        { codigo: "010109", nombre: "LA JALCA" },
        { codigo: "010110", nombre: "LEIMEBAMBA" },
        { codigo: "010111", nombre: "LEVANTO" },
        { codigo: "010112", nombre: "MAGDALENA" },
        { codigo: "010113", nombre: "MARISCAL CASTILLA" },
        { codigo: "010114", nombre: "MOLINOPAMPA" },
        { codigo: "010115", nombre: "MONTEVIDEO" },
        { codigo: "010116", nombre: "OLLEROS" },
        { codigo: "010117", nombre: "QUINJALCA" },
        { codigo: "010118", nombre: "SAN FRANCISCO DE DAGUAS" },
        { codigo: "010119", nombre: "SAN ISIDRO DE MAINO" },
        { codigo: "010120", nombre: "SOLOCO" },
        { codigo: "010121", nombre: "SONCHE" }
    ]
};

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', function () {
    inicializarFormulario();
    inicializarEventos();
});

function inicializarEventos() {
    // Evento para tipo de persona (solo si existe)
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    if (ddlTipoPersona) {
        ddlTipoPersona.addEventListener('change', function () {
            cambiarTipoPersona(this.value);
        });
    }

    // Evento para forma de entrega
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    if (ddlFormaEntrega) {
        ddlFormaEntrega.addEventListener('change', function () {
            toggleOtrosEntrega(this.value);
        });
    }

    // Evento para forma de notificación
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    if (ddlFormaNotificacion) {
        ddlFormaNotificacion.addEventListener('change', function () {
            toggleOtrosNotificacion(this.value);
        });
    }

    // Evento para grupo étnico
    const vGrupoEtnico = document.getElementById('vGrupoEtnico');
    if (vGrupoEtnico) {
        vGrupoEtnico.addEventListener('change', function () {
            toggleOtrosGrupoEtnico(this.value);
        });
    }

    // Evento para lengua materna
    const vLenguaMaterna = document.getElementById('vLenguaMaterna');
    if (vLenguaMaterna) {
        vLenguaMaterna.addEventListener('change', function () {
            toggleOtrosLenguaMaterna(this.value);
        });
    }

    // Evento para discapacidad
    const cDiscapacidad = document.getElementById('cDiscapacidad');
    if (cDiscapacidad) {
        cDiscapacidad.addEventListener('change', function () {
            document.getElementById('valorDiscapacidad').value = this.checked ? '1' : '0';
        });
    }

    // Eventos para menor de edad (solo si existen)
    const radioMenorSi = document.getElementById('radioMenorSi');
    const radioMenorNo = document.getElementById('radioMenorNo');

    if (radioMenorSi) {
        radioMenorSi.addEventListener('change', function () {
            if (this.checked) {
                toggleCamposMenorEdad(true);
            }
        });
    }

    if (radioMenorNo) {
        radioMenorNo.addEventListener('change', function () {
            if (this.checked) {
                toggleCamposMenorEdad(false);
            }
        });
    }

    // Evento para el botón de enviar
    const btnGrabar = document.getElementById('btngrabar');
    if (btnGrabar) {
        btnGrabar.addEventListener('click', function () {
            enviarSolicitud();
        });
    }
}

function inicializarFormulario() {
    // Inicializar contadores de caracteres
    actualizarContador('txtDescripcion', 'lblContador', 499);
    actualizarContador('txtBusquedaInfo', 'lblContador2', 99);

    // Inicializar tipos de documento
    inicializarTiposDocumento();

    // Configurar eventos para los campos de texto
    document.getElementById('txtDescripcion').addEventListener('input', function () {
        actualizarContador('txtDescripcion', 'lblContador', 499);
    });

    document.getElementById('txtBusquedaInfo').addEventListener('input', function () {
        actualizarContador('txtBusquedaInfo', 'lblContador2', 99);
    });
}

/* function inicializarEventos() {
    // Agrega este evento en inicializarEventos()
    document.getElementById('ddlTipoDocumento').addEventListener('change', function () {
        document.getElementById('textTipoDocumento').value = this.options[this.selectedIndex].text;
    });


    // Evento para tipo de persona
    document.getElementById('ddlTipoPersona').addEventListener('change', function () {
        cambiarTipoPersona(this.value);
    });

    // Evento para forma de entrega
    document.getElementById('ddlFormaEntrega').addEventListener('change', function () {
        toggleOtrosEntrega(this.value);
    });

    // Evento para forma de notificación
    document.getElementById('ddlFormaNotificacion').addEventListener('change', function () {
        toggleOtrosNotificacion(this.value);
    });

    // Evento para grupo étnico
    document.getElementById('vGrupoEtnico').addEventListener('change', function () {
        toggleOtrosGrupoEtnico(this.value);
    });

    // Evento para lengua materna
    document.getElementById('vLenguaMaterna').addEventListener('change', function () {
        toggleOtrosLenguaMaterna(this.value);
    });

    // Evento para discapacidad
    document.getElementById('cDiscapacidad').addEventListener('change', function () {
        document.getElementById('valorDiscapacidad').value = this.checked ? '1' : '0';
    });



    // NUEVOS EVENTOS PARA MENOR DE EDAD
    document.getElementById('radioMenorSi').addEventListener('change', function () {
        if (this.checked) {
            toggleCamposMenorEdad(true);
        }
    });

    document.getElementById('radioMenorNo').addEventListener('change', function () {
        if (this.checked) {
            toggleCamposMenorEdad(false);
        }
    });


    // Evento para el botón de enviar
    document.getElementById('btngrabar').addEventListener('click', function () {
        enviarSolicitud();
    });
}
 */
function toggleCamposMenorEdad(esMenor) {
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    const txtNumDoc = document.getElementById('txtNumDoc');

    if (!ddlTipoDocumento || !txtNumDoc) return;

    if (esMenor) {
        // Si es menor de edad, deshabilitar y limpiar campos
        ddlTipoDocumento.disabled = true;
        txtNumDoc.disabled = true;

        // Establecer valores por defecto para menores
        ddlTipoDocumento.value = '1'; // DNI
        txtNumDoc.value = '';

        // Agregar estilos visuales para indicar que está deshabilitado
        ddlTipoDocumento.style.backgroundColor = '#f8f9fa';
        ddlTipoDocumento.style.color = '#6c757d';
        txtNumDoc.style.backgroundColor = '#f8f9fa';
        txtNumDoc.style.color = '#6c757d';

        // Limpiar errores de validación de estos campos
        ocultarError('divTipoDocumento');
        ocultarError('divNumDoc');

        // Mostrar mensaje informativo
        mostrarMensajeMenorEdad();
    } else {
        // Si no es menor de edad, habilitar campos
        ddlTipoDocumento.disabled = false;
        txtNumDoc.disabled = false;

        // Restaurar estilos normales
        ddlTipoDocumento.style.backgroundColor = '';
        ddlTipoDocumento.style.color = '';
        txtNumDoc.style.backgroundColor = '';
        txtNumDoc.style.color = '';

        // Ocultar mensaje informativo
        ocultarMensajeMenorEdad();
    }
}

function mostrarMensajeMenorEdad() {
    // Crear o mostrar mensaje informativo
    let mensajeDiv = document.getElementById('mensajeMenorEdad');
    if (!mensajeDiv) {
        mensajeDiv = document.createElement('div');
        mensajeDiv.id = 'mensajeMenorEdad';
        mensajeDiv.style.cssText = 'color: #856404; background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 12px;';
        mensajeDiv.innerHTML = '<strong>Información:</strong> Para menores de edad, los datos del documento de identidad deben ser proporcionados por el representante legal.';

        // Insertar después del campo de número de documento
        const divNumDoc = document.getElementById('divNumDoc');
        divNumDoc.parentNode.insertBefore(mensajeDiv, divNumDoc.nextSibling);
    } else {
        mensajeDiv.style.display = 'block';
    }
}

function ocultarMensajeMenorEdad() {
    const mensajeDiv = document.getElementById('mensajeMenorEdad');
    if (mensajeDiv) {
        mensajeDiv.style.display = 'none';
    }
}



function inicializarTiposDocumento(tipoPersona = null) {
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');

    // Determinar qué opciones mostrar según el tipo de persona
    let tiposDocumento;
    if (tipoPersona === '2') { // Persona jurídica
        tiposDocumento = [
            { value: "6", text: "REGISTRO UNICO DE CONTRIBUYENTES" },
            //{ value: "0", text: "OTROS" }
        ];
    } else { // Persona natural o por defecto
        tiposDocumento = [
            { value: "1", text: "DOCUMENTO NACIONAL DE IDENTIDAD" },
            { value: "4", text: "CARNET DE EXTRANJERIA" },
            { value: "7", text: "PASAPORTE" }
            //{ value: "A", text: "CEDULA DIPLOMATICA DE IDENTIDAD" },
            //{ value: "0", text: "OTROS" }
        ];
    }

    // Limpiar opciones existentes excepto la primera
    while (ddlTipoDocumento.options.length > 1) {
        ddlTipoDocumento.remove(1);
    }

    // Agregar opciones
    tiposDocumento.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.value;
        option.text = tipo.text;
        ddlTipoDocumento.add(option);
    });
}


function cambiarTipoPersona(tipoPersona) {
    const divPersonaNatural = document.getElementById('divPersonaNatural');
    const divPersonaJuridica = document.getElementById('divPersonaJuridica');
    const divCajaMenor = document.getElementById('divCajaMenor');
    const ocultarPersonaJuridica = document.getElementById('ocultarPersonaJuridica');

    document.getElementById('textTipoPersona').value = tipoPersona;

    // Actualizar tipos de documento según el tipo de persona
    inicializarTiposDocumento(tipoPersona);

    if (tipoPersona === '1') { // Persona natural
        divPersonaNatural.style.display = 'block';
        divPersonaJuridica.style.display = 'none';
        divCajaMenor.style.display = 'block';
        ocultarPersonaJuridica.style.display = 'block';
        document.getElementById('divBotonValidarReniec').style.display = 'block';
    } else if (tipoPersona === '2') { // Persona jurídica
        divPersonaNatural.style.display = 'none';
        divPersonaJuridica.style.display = 'block';
        divCajaMenor.style.display = 'none';
        ocultarPersonaJuridica.style.display = 'none';
        document.getElementById('divBotonValidarReniec').style.display = 'none';
    } else {
        divPersonaNatural.style.display = 'none';
        divPersonaJuridica.style.display = 'none';
        divCajaMenor.style.display = 'none';
        ocultarPersonaJuridica.style.display = 'none';
        document.getElementById('divBotonValidarReniec').style.display = 'none';
    }
}

function changeDepartamento() {
    const ddlDepartamento = document.getElementById('ddlDepartamento');
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');

    const departamentoCodigo = ddlDepartamento.value;
    document.getElementById('textTipoDepartamento').value = ddlDepartamento.options[ddlDepartamento.selectedIndex].text;

    // Limpiar provincias y distritos
    ddlProvincia.innerHTML = '<option value="-">-- SELECCIONAR --</option>';
    ddlDistrito.innerHTML = '<option value="-">-- SELECCIONAR --</option>';

    if (departamentoCodigo !== '-' && provinciasData[departamentoCodigo]) {
        provinciasData[departamentoCodigo].forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia.codigo;
            option.text = provincia.nombre;
            ddlProvincia.add(option);
        });
    }
}

function changeProvincia() {
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');

    const provinciaCodigo = ddlProvincia.value;
    document.getElementById('textTipoProvincia').value = ddlProvincia.options[ddlProvincia.selectedIndex].text;

    // Limpiar distritos
    ddlDistrito.innerHTML = '<option value="-">-- SELECCIONAR --</option>';

    if (provinciaCodigo !== '-' && distritosData[provinciaCodigo]) {
        distritosData[provinciaCodigo].forEach(distrito => {
            const option = document.createElement('option');
            option.value = distrito.codigo;
            option.text = distrito.nombre;
            ddlDistrito.add(option);
        });
    }
}

function changeDistrito() {
    const ddlDistrito = document.getElementById('ddlDistrito');
    document.getElementById('textTipoDistrito').value = ddlDistrito.options[ddlDistrito.selectedIndex].text;
}

function toggleOtrosEntrega(valor) {
    const divSelectorOtrosEntrega = document.getElementById('divSelectorOtrosEntrega');
    document.getElementById('textFormaEntrega').value = document.getElementById('ddlFormaEntrega').options[document.getElementById('ddlFormaEntrega').selectedIndex].text;

    if (valor === '8') { // OTROS
        divSelectorOtrosEntrega.style.display = 'block';
    } else {
        divSelectorOtrosEntrega.style.display = 'none';
    }
}

function toggleOtrosNotificacion(valor) {
    const divSelectorOtrosNotificacion = document.getElementById('divSelectorOtrosNotificacion');
    document.getElementById('textFormaNotificacion').value = document.getElementById('ddlFormaNotificacion').options[document.getElementById('ddlFormaNotificacion').selectedIndex].text;

    if (valor === '4') { // OTROS
        divSelectorOtrosNotificacion.style.display = 'block';
    } else {
        divSelectorOtrosNotificacion.style.display = 'none';
    }
}

function toggleOtrosGrupoEtnico(valor) {
    const divSelectorOtrosGrupoEtnico = document.getElementById('divSelectorOtrosGrupoEtnico');

    if (valor === '4') { // OTROS
        divSelectorOtrosGrupoEtnico.style.display = 'block';
    } else {
        divSelectorOtrosGrupoEtnico.style.display = 'none';
    }
}

function toggleOtrosLenguaMaterna(valor) {
    const divSelectorOtrosLenguaMaterna = document.getElementById('divSelectorOtrosLenguaMaterna');

    if (valor === '4') { // OTROS
        divSelectorOtrosLenguaMaterna.style.display = 'block';
    } else {
        divSelectorOtrosLenguaMaterna.style.display = 'none';
    }
}

function actualizarContador(textAreaId, labelId, maxLength) {
    const textArea = document.getElementById(textAreaId);
    const label = document.getElementById(labelId);
    const currentLength = textArea.value.length;
    const remaining = maxLength - currentLength;

    label.textContent = remaining;

    if (remaining < 0) {
        label.style.color = 'red';
    } else if (remaining < 50) {
        label.style.color = 'orange';
    } else {
        label.style.color = '#FF3333';
    }
}

function validarFormulario() {
    let esValido = true;
    //const esMenorEdad = document.getElementById('radioMenorSi').checked;
    const esMenorEdad = document.getElementById('radioMenorSi') ? document.getElementById('radioMenorSi').checked : false;

    // Validar tipo de persona
    /*     const ddlTipoPersona = document.getElementById('ddlTipoPersona');
        if (document.getElementById('ddlTipoPersona').value === '-') {
            mostrarError('divTipoPersona', 'Seleccione el tipo de persona');
            esValido = false;
        } else {
            ocultarError('divTipoPersona');
        }
     */
    // Validar tipo de persona
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    if (ddlTipoPersona && ddlTipoPersona.value === '-') {
        mostrarError('divTipoPersona', 'Seleccione el tipo de persona');
        esValido = false;
    } else {
        ocultarError('divTipoPersona');
    }

    // Validar tipo de documento
    /*     const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
        if (document.getElementById('ddlTipoDocumento').value === '-') {
            mostrarError('divTipoDocumento', 'Seleccione el tipo de documento');
            esValido = false;
        } else {
            ocultarError('divTipoDocumento');
        }
     */
    // Validar número de documento
    /*     const txtnumDoc = document.getElementById('txtNumDoc');
        if (!numDoc || numDoc.trim() === '') {
            mostrarError('divNumDoc', 'Ingrese el número de documento');
            esValido = false;
        } else {
            ocultarError('divNumDoc');
        } */

    // Validar tipo de documento (solo si NO es menor de edad)
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    if (ddlTipoDocumento && !esMenorEdad && ddlTipoDocumento.value === '-') {
        mostrarError('divTipoDocumento', 'Seleccione el tipo de documento');
        esValido = false;
    } else {
        ocultarError('divTipoDocumento');
    }

    // Validar número de documento (solo si NO es menor de edad)
    const txtNumDoc = document.getElementById('txtNumDoc');
    if (txtNumDoc && !esMenorEdad && (!txtNumDoc.value || txtNumDoc.value.trim() === '')) {
        mostrarError('divNumDoc', 'Ingrese el número de documento');
        esValido = false;
    } else {
        ocultarError('divNumDoc');
    }

    // Validar descripción
    /*     const descripcion = document.getElementById('txtDescripcion');
        if (!descripcion || descripcion.trim() === '' || descripcion.length < 15) {
            mostrarError('divDescripcion', 'La descripción debe tener al menos 15 caracteres');
            esValido = false;
        } else {
            ocultarError('divDescripcion');
        }
     */
    // Validar descripción
    const txtDescripcion = document.getElementById('txtDescripcion');
    if (txtDescripcion && (!txtDescripcion.value || txtDescripcion.value.trim() === '' || txtDescripcion.value.length < 15)) {
        mostrarError('divDescripcion', 'La descripción debe tener al menos 15 caracteres');
        esValido = false;
    } else {
        ocultarError('divDescripcion');
    }

    // Validar forma de entrega
    /*     if (document.getElementById('ddlFormaEntrega').value === '-') {
            mostrarError('divFormaEntregaRequired', 'Seleccione la forma de entrega');
            esValido = false;
        } else {
            ocultarError('divFormaEntregaRequired');
        }
     */
    // Validar forma de notificación
    /*     if (document.getElementById('ddlFormaNotificacion').value === '-') {
            mostrarError('divFormaNotificacionRequired', 'Seleccione la forma de notificación');
            esValido = false;
        } else {
            ocultarError('divFormaNotificacionRequired');
        }
     */
    // Validar forma de entrega
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    if (ddlFormaEntrega && ddlFormaEntrega.value === '-') {
        mostrarError('divFormaEntregaRequired', 'Seleccione la forma de entrega');
        esValido = false;
    } else {
        ocultarError('divFormaEntregaRequired');
    }

    // Validar forma de notificación
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    if (ddlFormaNotificacion && ddlFormaNotificacion.value === '-') {
        mostrarError('divFormaNotificacionRequired', 'Seleccione la forma de notificación');
        esValido = false;
    } else {
        ocultarError('divFormaNotificacionRequired');
    }

    return esValido;
}

function mostrarError(elementId, mensaje) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = '<span style="color: red; font-size: 12px;">' + mensaje + '</span>';
}

function ocultarError(elementId) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = '';
}

function enviarSolicitud() {
    if (!validarFormulario()) {
        alert('Por favor, complete todos los campos obligatorios correctamente.');
        return;
    }

    // Mostrar preloader
    document.getElementById('preloader').style.display = 'block';

    // Simular envío (en un caso real aquí iría la llamada al servidor)
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';

        // Generar PDF
        generarPDF();

        // Limpiar formulario después de generar el PDF
        limpiarFormulario();

        alert('Solicitud enviada correctamente. Se ha generado un PDF con los datos.');
    }, 2000);
}

function generarPDF() {
    // En un caso real, aquí se usaría una librería como jsPDF
    // Para este ejemplo, simulamos la generación del PDF
    const datos = recopilarDatosFormulario();

    // En un caso real, aquí se generaría el PDF con los datos
    console.log('Datos para el PDF:', datos);

    // Crear instancia de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurar márgenes y posiciones
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 20;

    // ===== PÁGINA 1 =====

    // Encabezado
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PERÚ', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 7;

    doc.setFontSize(12);
    doc.text('Ministerio de Trabajo y Promoción del Empleo', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 7;

    doc.setFontSize(14);
    doc.text('SOLICITUD DE ACCESO A LA INFORMACIÓN', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;

    // ===== IDENTIFICACIÓN DEL SOLICITANTE =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ IDENTIFICACIÓN DEL SOLICITANTE', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Función para agregar campo con etiqueta y valor
    function agregarCampo(etiqueta, valor, y) {
        doc.setFont('helvetica', 'bold');
        doc.text(etiqueta + ':', marginLeft, y);
        doc.setFont('helvetica', 'normal');
        doc.text(valor || 'No especificado', marginLeft + 60, y);
        return y + 6;
    }

    // Campos de identificación
    yPosition = agregarCampo('Tipo de persona', datos.tipoPersona, yPosition);
    yPosition = agregarCampo('Tipo de documento', datos.tipoDocumento, yPosition);
    yPosition = agregarCampo('N° de documento', datos.numeroDocumento, yPosition);

    if (datos.tipoPersona === 'NATURAL') {
        yPosition = agregarCampo('Apellido paterno', datos.apellidoPaterno, yPosition);
        yPosition = agregarCampo('Apellido materno', datos.apellidoMaterno, yPosition);
        yPosition = agregarCampo('Nombres', datos.nombres, yPosition);
    } else {
        yPosition = agregarCampo('Razón Social', datos.razonSocial, yPosition);
    }

    yPosition = agregarCampo('Departamento', datos.departamento, yPosition);
    yPosition = agregarCampo('Provincia', datos.provincia, yPosition);
    yPosition = agregarCampo('Distrito', datos.distrito, yPosition);
    yPosition = agregarCampo('Dirección', datos.direccion, yPosition);

    yPosition += 5;

    // ===== DETALLE DE LA SOLICITUD =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ DETALLE DE LA SOLICITUD', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Fecha de solicitud con fecha y hora actual
    const ahora = new Date();
    const fechaHora = ahora.toLocaleDateString('es-PE') + ' ' + ahora.toLocaleTimeString('es-PE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    yPosition = agregarCampo('Fecha de solicitud', fechaHora, yPosition);
    yPosition += 3;

    // Información solicitada con formato específico
    doc.setFont('helvetica', 'bold');
    doc.text('Información solicitada:', marginLeft, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    const descripcionLines = doc.splitTextToSize(datos.descripcion || 'No especificado', pageWidth - marginLeft - marginRight);
    doc.text(descripcionLines, marginLeft, yPosition);
    yPosition += (descripcionLines.length * 5) + 8;

    // Adjunta archivo
    const archivoInput = document.getElementById('file');
    const adjuntaArchivo = archivoInput && archivoInput.files.length > 0 ? 'SI' : 'NO';
    yPosition = agregarCampo('Adjunta archivo', adjuntaArchivo, yPosition);

    // Medio de entrega
    yPosition = agregarCampo('Medio de entrega de información', datos.formaEntrega, yPosition);

    yPosition += 5;

    // ===== REQUISITOS OPCIONALES =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ REQUISITOS OPCIONALES', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Área que posee la información
    const ddlUnidadOrganica = document.getElementById('ddlUnidadOrganica');
    const areaInfo = ddlUnidadOrganica.options[ddlUnidadOrganica.selectedIndex].text;
    yPosition = agregarCampo('Área que posee la información', areaInfo !== '-- SELECCIONAR --' ? areaInfo : 'No especificado', yPosition);

    // Datos que propicien la localización
    yPosition += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Datos que propicien a la localización o faciliten busqueda:', marginLeft, yPosition);
    yPosition += 4;
    doc.setFont('helvetica', 'normal');
    const busquedaLines = doc.splitTextToSize(datos.busquedaInfo || 'No especificado', pageWidth - marginLeft - marginRight);
    doc.text(busquedaLines, marginLeft, yPosition);
    yPosition += (busquedaLines.length * 5) + 8;

    // Contacto en columna vertical (formato manual)
    doc.setFont('helvetica', 'bold');
    doc.text('Celular:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.celular || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'bold');
    doc.text('Teléfono:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.telefono || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'bold');
    doc.text('Email:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.email || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 8;


    // Solo mostrar datos adicionales para personas naturales
    if (datos.tipoPersona === 'NATURAL') {
        yPosition = agregarCampo('Sexo', datos.sexo, yPosition);
        yPosition = agregarCampo('Edad', datos.edad, yPosition);
        yPosition = agregarCampo('Grupo étnico', datos.grupoEtnico, yPosition);
        yPosition = agregarCampo('Discapacidad', datos.discapacidad, yPosition);
        yPosition = agregarCampo('Idioma', datos.lenguaMaterna, yPosition);
        yPosition = agregarCampo('Nacionalidad', datos.nacionalidad, yPosition);
    }

    // Medio de notificación
    yPosition += 3;
    yPosition = agregarCampo('Medio de notificación', datos.formaNotificacion, yPosition);

    // Guardar el PDF
    const nombreArchivo = 'solicitud_acceso_informacion_' + (datos.numeroDocumento || 'sin_documento') + '.pdf';
    doc.save(nombreArchivo);
}

function recopilarDatosFormulario() {
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    const ddlDepartamento = document.getElementById('ddlDepartamento');
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    const vSexo = document.getElementById('vSexo');
    const vGrupoEtnico = document.getElementById('vGrupoEtnico');
    const vLenguaMaterna = document.getElementById('vLenguaMaterna');
    const vNacionalidad = document.getElementById('vNacionalidad');

    const esMenorEdad = document.getElementById('radioMenorSi').checked;

    // Obtener valores con formato adecuado
    const tipoPersona = ddlTipoPersona.options[ddlTipoPersona.selectedIndex].text;
    const tipoDocumento = ddlTipoDocumento.options[ddlTipoDocumento.selectedIndex].text;
    const sexo = vSexo.options[vSexo.selectedIndex].text;
    const grupoEtnico = vGrupoEtnico.options[vGrupoEtnico.selectedIndex].text;
    const lenguaMaterna = vLenguaMaterna.options[vLenguaMaterna.selectedIndex].text;
    const nacionalidad = vNacionalidad.options[vNacionalidad.selectedIndex].text;

    // Formatear valores específicos
    let grupoEtnicoFormateado = grupoEtnico;
    if (grupoEtnico === 'OTROS' && document.getElementById('vOtrosGrupoEtnico').value) {
        grupoEtnicoFormateado = document.getElementById('vOtrosGrupoEtnico').value.toUpperCase();
    }

    let lenguaMaternaFormateada = lenguaMaterna;
    if (lenguaMaterna === 'OTROS' && document.getElementById('vOtrosLenguaMaterna').value) {
        lenguaMaternaFormateada = document.getElementById('vOtrosLenguaMaterna').value.toUpperCase();
    } else if (lenguaMaterna === 'ESPAÑOL') {
        lenguaMaternaFormateada = 'CASTELLANO';
    }

    let sexoFormateado = sexo;
    if (sexo === 'MASCULINO') sexoFormateado = 'HOMBRE';
    if (sexo === 'FEMENINO') sexoFormateado = 'MUJER';

    return {
        tipoPersona: tipoPersona,
        tipoDocumento: tipoDocumento,
        numeroDocumento: document.getElementById('txtNumDoc').value,
        razonSocial: document.getElementById('txtRazonSocial').value,
        apellidoPaterno: document.getElementById('txtApePat').value.toUpperCase(),
        apellidoMaterno: document.getElementById('txtApeMat').value.toUpperCase(),
        nombres: document.getElementById('txtNombre').value.toUpperCase(),
        departamento: ddlDepartamento.options[ddlDepartamento.selectedIndex].text,
        provincia: ddlProvincia.options[ddlProvincia.selectedIndex].text,
        distrito: ddlDistrito.options[ddlDistrito.selectedIndex].text,
        direccion: document.getElementById('txtDomicilio').value.toUpperCase(),
        descripcion: document.getElementById('txtDescripcion').value.toUpperCase(),
        busquedaInfo: document.getElementById('txtBusquedaInfo').value,
        formaEntrega: ddlFormaEntrega.options[ddlFormaEntrega.selectedIndex].text,
        formaNotificacion: ddlFormaNotificacion.options[ddlFormaNotificacion.selectedIndex].text,
        telefono: document.getElementById('txtTelefono').value,
        celular: document.getElementById('txtCelular').value,
        email: document.getElementById('txtEmail').value,
        sexo: sexoFormateado,
        edad: document.getElementById('vEdad').value,
        grupoEtnico: grupoEtnicoFormateado,
        discapacidad: document.getElementById('cDiscapacidad').checked ? 'SI' : 'NO',
        lenguaMaterna: lenguaMaternaFormateada,
        nacionalidad: nacionalidad === 'PERUANA' ? 'PERÚ' : nacionalidad
    };
}

function limpiarFormulario() {
    // Limpiar campos básicos
    document.getElementById('ddlTipoPersona').value = '-';
    document.getElementById('ddlTipoDocumento').value = '-';
    document.getElementById('txtNumDoc').value = '';
    document.getElementById('txtRazonSocial').value = '';
    document.getElementById('txtApePat').value = '';
    document.getElementById('txtApeMat').value = '';
    document.getElementById('txtNombre').value = '';
    document.getElementById('ddlDepartamento').value = '-';
    document.getElementById('ddlProvincia').value = '-';
    document.getElementById('ddlDistrito').value = '-';
    document.getElementById('txtDomicilio').value = '';
    document.getElementById('txtDescripcion').value = '';
    document.getElementById('txtBusquedaInfo').value = '';
    document.getElementById('ddlFormaEntrega').value = '-';
    document.getElementById('ddlFormaNotificacion').value = '-';
    document.getElementById('txtTelefono').value = '';
    document.getElementById('txtCelular').value = '';
    document.getElementById('txtEmail').value = '';

    // Limpiar campos de persona natural
    document.getElementById('vSexo').value = '-';
    document.getElementById('vEdad').value = '';
    document.getElementById('vGrupoEtnico').value = '-';
    document.getElementById('cDiscapacidad').checked = false;
    document.getElementById('valorDiscapacidad').value = '0';
    document.getElementById('vLenguaMaterna').value = '-';
    document.getElementById('vNacionalidad').value = '-';

    // Limpiar campos "Otros"
    document.getElementById('vOtrosEntrega').value = '';
    document.getElementById('vOtrosNotificacion').value = '';
    document.getElementById('vOtrosGrupoEtnico').value = '';
    document.getElementById('vOtrosLenguaMaterna').value = '';

    // Limpiar archivo
    document.getElementById('file').value = '';

    // Limpiar unidad orgánica
    document.getElementById('ddlUnidadOrganica').value = '-';

    // Limpiar campos ocultos
    document.getElementById('textTipoPersona').value = '';
    document.getElementById('textTipoDocumento').value = '';
    document.getElementById('textTipoDepartamento').value = '';
    document.getElementById('textTipoProvincia').value = '';
    document.getElementById('textTipoDistrito').value = '';
    document.getElementById('textFormaEntrega').value = '';
    document.getElementById('textFormaNotificacion').value = '';
    document.getElementById('textNacionalidad').value = '';

    // Limpiar menor de edad
    document.querySelectorAll('input[name="vMenor"]').forEach(radio => {
        radio.checked = false;
    });


    // Asegurarse de que los campos de documento estén habilitados
    document.getElementById('ddlTipoDocumento').disabled = false;
    document.getElementById('txtNumDoc').disabled = false;

    // Restaurar estilos
    document.getElementById('ddlTipoDocumento').style.backgroundColor = '';
    document.getElementById('ddlTipoDocumento').style.color = '';
    document.getElementById('txtNumDoc').style.backgroundColor = '';
    document.getElementById('txtNumDoc').style.color = '';

    // Ocultar mensaje informativo
    ocultarMensajeMenorEdad();


    // Ocultar secciones que se mostraron dinámicamente
    document.getElementById('divPersonaNatural').style.display = 'none';
    document.getElementById('divPersonaJuridica').style.display = 'none';
    document.getElementById('divCajaMenor').style.display = 'none';
    document.getElementById('ocultarPersonaJuridica').style.display = 'none';
    document.getElementById('divBotonValidarReniec').style.display = 'none';
    document.getElementById('divSelectorOtrosEntrega').style.display = 'none';
    document.getElementById('divSelectorOtrosNotificacion').style.display = 'none';
    document.getElementById('divSelectorOtrosGrupoEtnico').style.display = 'none';
    document.getElementById('divSelectorOtrosLenguaMaterna').style.display = 'none';

    // Actualizar contadores
    actualizarContador('txtDescripcion', 'lblContador', 499);
    actualizarContador('txtBusquedaInfo', 'lblContador2', 99);

    // Reinicializar tipos de documento
    inicializarTiposDocumento();
}