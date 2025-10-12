
/**
* Iniciar al objeto Paginador para generar una paginación. 
* @param {Array} array con parametros de inicialización
*                   content: id del elemento html donde se ubicarán los indices generados.
*                   rows: cantidad de filas que se muestran por cada página.
*                   numindexes: numero de indices que se mostraran en la paginación.
*                   action: funcion que se ejecutara al hacer click sobre algun indice generado, 
*                           la funcion debe recibir 1 parametro que sera el objeto html.
*/
function Paginador(parameters) {
    this.content = parameters.content;
    this.tamPagina = parameters.rows;
    this.pagActual = null;
    this.totalResultados = null;
    this.numIndices = parameters.numindexes;
    this.action = parameters.action;

    this.paginas = null;
    this.generarPaginacion = generarPaginacion;
    this.parameters = null;
}

/**
* metodo que arma y muestra la paginacion.
* @param {array} array con parametros de entrada
*                   currentpage: indice de la pagina actual.
*                   size: total de resultados en general.
*/
function generarPaginacion(parameters) {
    this.pagActual = parseInt(parameters.currentpage);
    this.totalResultados = parameters.size;
    this.paginas = Math.ceil((this.totalResultados) / this.tamPagina);

    var oRangoInferior = 0;
    var oRangoSuperior = 0;
    var oMaxInferior = false;
    var oMaxSuperior = false;

    if (this.numIndices % 2 == 0) {
        var oDifInferior = 0;
        var oDifSuperior = 0;

        oRangoInferior = this.pagActual - ((this.numIndices / 2) - 1);
        oRangoSuperior = this.pagActual + (this.numIndices / 2);
        if (oRangoInferior <= 0) {
            oDifInferior = (-1 * oRangoInferior) + 1;
            oRangoInferior = 1;
        }
        if (oRangoSuperior > this.paginas) {
            oDifSuperior = oRangoSuperior - this.paginas;
            oRangoSuperior = this.paginas;
        }

        if (oDifInferior > 0) {
            oRangoSuperior = oRangoSuperior + oDifInferior
            if (oRangoSuperior > this.paginas)
                oRangoSuperior = this.paginas;
        }
        if (oDifSuperior > 0) {
            oRangoInferior = oRangoInferior - oDifSuperior;
            if (oRangoInferior <= 0)
                oRangoInferior = 1;
        }

    } else {
        var oDifInferior = 0;
        var oDifSuperior = 0;
        oRangoInferior = this.pagActual - ((this.numIndices - 1) / 2);
        oRangoSuperior = this.pagActual + ((this.numIndices - 1) / 2);
        if (oRangoInferior <= 0) {
            oDifInferior = (-1 * oRangoInferior) + 1;
            oRangoInferior = 1;
        }
        if (oRangoSuperior > this.paginas) {
            oDifSuperior = oRangoSuperior - this.paginas;
            oRangoSuperior = this.paginas;
        }

        if (oDifInferior > 0) {
            oRangoSuperior = oRangoSuperior + oDifInferior
            if (oRangoSuperior > this.paginas)
                oRangoSuperior = this.paginas;
        }
        if (oDifSuperior > 0) {
            oRangoInferior = oRangoInferior - oDifSuperior;
            if (oRangoInferior <= 0)
                oRangoInferior = 1;
        }
    }

    var oHtml = "<table border='0' cellpadding='1' cellspacing='0' ><tr>";
    if (oRangoInferior > 1) {
        oHtml += getHtmlIndice("«", 1, this.action);
        oHtml += getHtmlIndice("‹", (this.pagActual - 1), this.action);
    }
    if (oRangoInferior != 1 || oRangoSuperior != 1) {
        for (i = oRangoInferior; i <= oRangoSuperior; i++) {
            if (i == this.pagActual)
                oHtml += getHtmlIndiceSeleccionado(i, i, this.action);
            else
                oHtml += getHtmlIndice(i, i, this.action);
        }
    }
    if (oRangoSuperior < this.paginas) {
        oHtml += getHtmlIndice("›", (this.pagActual + 1), this.action);
        oHtml += getHtmlIndice("»", this.paginas, this.action);
    }
    oHtml += "</tr></table>";
    document.getElementById(this.content).innerHTML = oHtml;
}

function getHtmlIndice(t, v, f) {
    return "<td><div class='button' value='" + v + "' onclick='javascript:" + f + "(this);' ><a href='#' onclick='javascript:return false;' >" + t + "</a></div></td>";
}

function getHtmlIndiceSeleccionado(t, v, f) {
    return "<td><div class='button' value='" + v + "' onclick='javascript:" + f + "(this);' ><a href='#' onclick='javascript:return false;' style='background-color:#6D6D6D; color:white' ><b>" + t + "</b></a></div></td>";
}