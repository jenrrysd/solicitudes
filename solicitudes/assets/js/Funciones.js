
f_eliminaObs = function () {
    alert("La observación se eliminó correctamente.");
}


function toUpper(c) {
    if (/[a-z]/.test(c.value)) {
        c.value = c.value.toUpperCase();
    }
}
/* Contar caracteres */
function labelCount(obj, event) {
    var descripcion = $("#txtDescripcion").val();
    var keyCode = event.keyCode;

    if (descripcion.length >= 499) {

        document.getElementById("txtDescripcion").value = $('#txtDescripcion').val().substring(0, 499);

        cant = obj.value.length;
        var cantidad = 499 - cant;
        document.getElementById("lblContador").innerHTML = cantidad;
        if (cant >= 499) {
            if (document.layers)
                document.captureEvents(Event.KEYPRESS);
            var keyCode = event.keyCode;
            if (keyCode == 16 || (keyCode >= 32 && keyCode <= 44) || keyCode == 46 || keyCode == 47 || (keyCode >= 58) || keyCode == 45)
                event.returnValue = false;
        }
        return false;
    }
    else {
        cant = obj.value.length;
        var cantidad = 499 - cant;
        document.getElementById("lblContador").innerHTML = cantidad;
        if (cant >= 499) {
            if (document.layers)
                document.captureEvents(Event.KEYPRESS);
            var keyCode = event.keyCode;
            if (keyCode == 16 || (keyCode >= 32 && keyCode <= 44) || keyCode == 46 || keyCode == 47 || (keyCode >= 58) || keyCode == 45)
                event.returnValue = false;
        }
    }
}

/* Contar caracteres 2 */
function labelCount2(obj, event) {
    var descripcion = $("#txtBusquedaInfo").val();
    var keyCode = event.keyCode;

    if (descripcion.length >= 99) {

        document.getElementById("txtBusquedaInfo").value = $('#txtBusquedaInfo').val().substring(0, 99);

        cant = obj.value.length;
        var cantidad = 99 - cant;
        document.getElementById("lblContador2").innerHTML = cantidad;
        if (cant >= 99) {
            if (document.layers)
                document.captureEvents(Event.KEYPRESS);
            var keyCode = event.keyCode;
            if (keyCode == 16 || (keyCode >= 32 && keyCode <= 44) || keyCode == 46 || keyCode == 47 || (keyCode >= 58) || keyCode == 45)
                event.returnValue = false;
        }
        return false;
    }
    else {
        cant = obj.value.length;
        var cantidad = 99 - cant;
        document.getElementById("lblContador2").innerHTML = cantidad;
        if (cant >= 99) {
            if (document.layers)
                document.captureEvents(Event.KEYPRESS);
            var keyCode = event.keyCode;
            if (keyCode == 16 || (keyCode >= 32 && keyCode <= 44) || keyCode == 46 || keyCode == 47 || (keyCode >= 58) || keyCode == 45)
                event.returnValue = false;
        }
    }
}

/* Campo numérico */
function Integer(event) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    // returns false if a numeric character has been entered
    return (chCode <= 57 && chCode >= 48);
}

/* Valida numérico para dni */
function TipoDocumento(event) {
	
    if ($('#ddlTipoDocumento').val() == '1') { /* RUC - MEF 1 - simintra1 9 */
        var x = $('#txtNumDoc').val();
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
        return (chCode <= 57 && chCode >= 48 && x.length < 11);     
    }

    if ($('#ddlTipoDocumento').val() == '2')   /* DNI - MEF 2 - simistra1 3 */ {
        var x = $('#txtNumDoc').val();
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
        return (chCode <= 57 && chCode >= 48 && x.length < 8);
    }

    if ($('#ddlTipoDocumento').val() == '3' || $('#ddlTipoDocumento').val() == '5') {   /* MEF CE 3/ Pasaporte - antes 5 **--** simintra1 CE 6 / Pasaporte 8 */
        var x = $('#txtNumDoc').val();
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
        return (((chCode <= 57 && chCode >= 45) || (chCode <= 125 && chCode >= 65) || (chCode == 32) || (chCode == 241) || (chCode == 189) || (chCode == 209) || (chCode <= 250 && chCode >= 165)) && (x.length < 12));
        //return ((chCode <= 250 && chCode >= 65) || (chCode == 32) || (chCode == 241) || (chCode == 209) || (chCode <= 45 && chCode >= 1) && (x.length <= 9 || x.length >= 12));
    }
    return false;
}

function documento(obj, event) {

    var dni = $('#txtNumDoc').val();

    if ($("#ddlTipoDocumento").val() == "2" && dni.length != 8 && dni != "") {   /* DNI */
        document.getElementById("divNumDoc").style.display = "block";
        $("#divNumDoc").html("<label id='label-required'>Ingrese 8 dígitos</label>");
    
        return false;
    } else {

//        if ($("#ddlTipoDocumento").val() == "3" && (dni.length < 12) && dni != "") {   /* Carnet de extranjería */
//            document.getElementById("divNumDoc").style.display = "block";
//            $("#divNumDoc").html("<label id='label-required'>Ingrese mínimo 12 caracteres</label>");
//            return false;
//        }
     //   else {

//            if ($("#ddlTipoDocumento").val() == "5" && (dni.length < 12) && dni != "") {   /* Pasaporte */
//                document.getElementById("divNumDoc").style.display = "block";
//                $("#divNumDoc").html("<label id='label-required'>Ingrese mínimo 12 caracteres</label>");
//                return false;
//            } 
       //     else {
            	
                if ($("#ddlTipoDocumento").val() == "1" && (dni.length < 11) && dni != "") {   /* RUC */
                    document.getElementById("divNumDoc").style.display = "block";
                    $("#divNumDoc").html("<label id='label-required'>Ingrese 11 dígitos</label>");
                    return false;
                } else {                    
                    document.getElementById("divNumDoc").style.display = "none";
                }
         //   }
       // }
    }
}

function ValidarTelefono(obj, event) {
    var telefono = $('#txtTelefono').val();
   
    if (telefono.length < 6 && telefono != "") {
        document.getElementById("divTelefono").style.display = "block";
        $("#divTelefono").html("<label id='label-required'>Ingrese mínimo 6 dígitos</label>");

    }
    return false;
}
/*
function ValidarInt(obj, event) {
    var celular = $('#txtCelular').val().trim();
    var mensaje = $("#divCelular");

    if (celular === "") {
        mensaje.text("El campo no puede estar vacío.");
        mensaje.show();
        return false;
    }

    if (celular.length !== 9) {
        mensaje.text("Debe tener exactamente 9 dígitos.");
        mensaje.show();
        return false;
    }

    if (celular.charAt(0) !== '9') {
        mensaje.text("El número debe comenzar con 9.");
        mensaje.show();
        return false;
    }

    mensaje.hide();
    return true;
}
*/
function ValidarInt(obj, event) {
    //var telefono = $('#txtTelefono').val();
    var celular = $('#txtCelular').val();
/*
    if (telefono.length < 6 && telefono != "") {
        document.getElementById("divTelefono").style.display = "block";
        $("#divTelefono").html("<label id='label-required'>Ingrese mínimo 6 dígitos</label>");
        
    }*/

    if (celular != "" && celular.length < 9) {
        document.getElementById("divCelular").style.display = "block";
        $("#divCelular").html("<label id='label-required'>Ingrese mínimo 9 dígitos</label>");
        //return false;
    }

    return false;
}


function ValidarDescripcion(obj, event) {
    var descripcion = $('#txtDescripcion').val();

    if (descripcion.length < 15 && descripcion != "") {
        document.getElementById("divDescripcion").style.display = "block";
        $("#divDescripcion").html("<label id='label-required'>Ingrese mínimo 15 caracteres</label>");
    }
    return false;
}

/* Campo texto */
function Character(event) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    // returns false if a numeric character has been entered
    return ((chCode <= 250 && chCode >= 65) || (chCode == 32) || (chCode == 241) || (chCode == 209) || (chCode <= 45 && chCode >= 1));
}

/* Validar email */
function isValidEmail(event) {
    return !(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(event));
}

/* Formato correo */
function validarEmail(obj, event) {
    var email = $('#txtEmail').val();
    //if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email))) {
    if (!(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(email)) && email != "") {
        document.getElementById("divEmail").style.display = "block";
        $("#divEmail").html("<label id='label-required'>Formato de email no válido</label>");
        return false;
    }
}

/*Transforma decimal a string segun los decimales que se le indiquen*/
function addComas(nStr, ndec) {
    nStr = nStr.toFixed(ndec);
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

// Remueve caracteres no numericos
function stripNonNumeric(str) {
    str += '';
    var rgx = /^\d|\.|-$/;
    var out = '';
    for (var i = 0; i < str.length; i++) {
        if (rgx.test(str.charAt(i))) {
            if (!((str.charAt(i) == '.' && out.indexOf('.') != -1) ||
             (str.charAt(i) == '-' && out.length != 0))) {
                out += str.charAt(i);
            }
        }
    }
    return out;
}

/* Formatea un numero de acuerdo al numero de decimales */
function format_number(pnumber, decimals) {
    if (isNaN(pnumber)) { return 0 };
    if (pnumber == '') { return 0 };
    var snum = new String(pnumber);
    var sec = snum.split('.');
    var whole = parseFloat(sec[0]);
    var result = '';
    if (sec.length > 1) {
        var dec = new String(sec[1]);
        dec = String(parseFloat(sec[1]) / Math.pow(10, (dec.length - decimals)));
        dec = String(whole + Math.round(parseFloat(dec)) / Math.pow(10, decimals));
        var dot = dec.indexOf('.');
        if (dot == -1) {
            dec += '.';
            dot = dec.indexOf('.');
        }
        while (dec.length <= dot + decimals) { dec += '0'; }
        result = dec;
    } else {
        var dot2;
        var dec2 = new String(whole);
        dec2 += '.';
        dot2 = dec2.indexOf('.');
        while (dec2.length <= dot2 + decimals) { dec2 += '0'; }
        result = dec2;
    }
    return result;
}

function Trim(str) {
    var resultStr = "";
    resultStr = TrimLeft(str);
    resultStr = TrimRight(resultStr);
    return resultStr;
}

function TrimRight(str) {
    var resultStr = "";
    var i = 0;
    if (str + "" == "undefined" || str == null)
        return null;

    str += "";
    if (str.length == 0)
        resultStr = "";
    else {
        i = str.length - 1;
        while ((i >= 0) && (str.charAt(i) == " "))
            i--;
        resultStr = str.substring(0, i + 1);
    }
    return resultStr;
}

function TrimLeft(str) {
    var resultStr = "";
    var i = len = 0;
    if (str + "" == "undefined" || str == null)
        return null;

    str += "";

    if (str.length == 0)
        resultStr = "";
    else {
        len = str.length;
        while ((i <= len) && (str.charAt(i) == " "))
            i++;
        resultStr = str.substring(i, len);
    }
    return resultStr;
}

function esDigito(sChr) {
    var sCod = sChr.charCodeAt(0);  
    return ((sCod > 47) && (sCod < 58));
}

function ValidarTextBox(TextBox, Campo) {
    if (TextBox.value == '' || TextBox.value == null) {
        alert(Campo);
        TextBox.focus();
        return false;
    }
}

function esNumero(TextBox, Campo) {
    k = "0123456789";
    var valor = Trim(TextBox.value);
    for (j = 0; j < valor.length; j++) {
        if (k.indexOf(valor.charAt(j)) == -1) {
            alert(Campo);
            TextBox.focus();
            return false;
        }
    }
    return true;
}

function validarCadenas(obj, texto) {
    if (Trim(obj) == "" || Trim(obj) == null ) {
        alert(texto);
        //obj.focus();
        return false;
    }
    return true;
}

function validarCombos(obj, texto) {
    if (obj.options[obj.selectedIndex].value == '0') {
        alert(texto);
        obj.focus();
        return false;
    }
    return true;
}

function DiffFechas(fecIni, fecFin) {
    var un_dia = 1000 * 60 * 60 * 24;
    var arrayFechaIni = fecIni.split("/")
    var arrayFechaFin = fecFin.split("/")

    var diaI = arrayFechaIni[0]
    var mesI= (parseInt(arrayFechaIni[1]) - 1).toString();
    var anoI= (arrayFechaIni[2])
 
    var diaF= arrayFechaFin[0]
    var mesF= (parseInt(arrayFechaFin[1]) - 1).toString();
    var anoF= (arrayFechaFin[2]) //le restamos un año
 
    var fechaDateIni = new Date(anoI,mesI,diaI)
    var fechaDateFin = new Date(anoF,mesF,diaF)

    var Diff = Math.ceil((fechaDateFin.getTime() - fechaDateIni.getTime()) / (un_dia));
    return Diff + 1
}

function validateFile() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];

    // Extensiones permitidas: PDF, DOC, DOCX, XLS, XLSX
    var allowedExtensions = /\.(pdf|doc|docx|xls|xlsx)$/i;
    var maxSize = 5 * 1024 * 1024; // 5 MB en bytes

    if (!allowedExtensions.test(file.name)) {
        Swal.fire(
            'Advertencia',
            'Por favor, selecciona un archivo con una extensión válida (pdf, doc, docx, xls, xlsx).',
            'warning'
        );
        fileInput.value = ''; // Limpiar el campo de archivo seleccionado
    } else if (file.size > maxSize) {
        Swal.fire(
            'Advertencia',
            'El tamaño del archivo debe ser máximo de 5MB.',
            'warning'
        );
        fileInput.value = ''; // Limpiar el campo de archivo seleccionado
    } else {
        // Obtener la extensión del archivo
        var fileExtension = file.name.split('.').pop();
        // Asignar la extensión al campo oculto
        document.getElementById('extensionFile').value = fileExtension;
    }
}

function handleChange(checkbox) {
    var value = checkbox.checked ? 1 : 0;
    document.getElementById("valorDiscapacidad").value = value;
    //console.log("Valor de la discapacidad:", value);
}