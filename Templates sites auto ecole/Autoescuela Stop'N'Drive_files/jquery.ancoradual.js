jQuery.ancoraDual = {

    m_removeEspaciosCadena: function (cadena) {
        while (cadena.charAt(0) == ' ') {
            cadena = cadena.substring(1, cadena.length);
        }
        while (cadena.charAt(cadena.length - 1) == ' ') {
            cadena = cadena.substring(0, cadena.length - 1);
        }
        return cadena;
    },
    m_existNumbers: function (cadena) {
        var NumerosCadena = false;
        for (i = 0; i < cadena.length; i++) {
            if (!isNaN(cadena.charAt(i)) && cadena.charAt(i) != ' ') {
                NumerosCadena = true;
            }
        }
        return NumerosCadena;
    },
    m_existChar: function (cadena) {
        var LetrasCadena = false;
        for (i = 0; i < cadena.length; i++) {
            if (isNaN(cadena.charAt(i)) && cadena.charAt(i) != ' ') {
                LetrasCadena = true;
            }
        }
        return LetrasCadena;
    },
    m_isEmail: function (cadena) {
        if (cadena.lastIndexOf('.') == -1) {
            return false; //no tiene puntos
        }
        var ArrDom = new Array("es", "com", "net", "edu", "info", "cat", "tv", "uk", "fr", "org", "cat");
        var SufixDom = cadena.substring(cadena.lastIndexOf('.') + 1, cadena.length);
        var DomOk = false;
        for (i = 0; i < ArrDom.length; i = i + 1) {
            if (SufixDom == ArrDom[i]) { DomOk = true; }
        }
        if (!DomOk) return false; //El dominio no esta en la lista
        if (cadena.search('@') == -1) {
            return false; //no hay ningun @
        }
        if (cadena.indexOf('@') != cadena.lastIndexOf('@')) {
            return false; //hay mas de una @
        }
        if (cadena.indexOf('@') == 0) {
            return false; // @ en primer lugar
        }
        if (cadena[cadena.indexOf('@') - 1] == '.' || cadena[cadena.indexOf('@') + 1] == '.') {
            return false; // puntos pegados en el @
        }
        for (i = 0; i < cadena.length; i++) {
            var caracter = cadena.charAt(i);
            if (!((caracter >= 'a' && caracter <= 'z') ||
    			(caracter >= 'A' && caracter <= 'Z') ||
    			(caracter >= '0' && caracter <= '9') ||
    			caracter == '.' || caracter == '-' ||
    			caracter == '@' || caracter == '_')) {
                return false;
            }
        }
        return true;
    },
    m_isCIF: function (cadena) {
        var result = false;
        // pasar a mayúsculas
        var temp = cadena.toUpperCase();

        if (!/^[A-Za-z0-9]{9}$/.test(temp)) { // Son 9 dígitos?
            alert("Longitud incorrecta, un CIF    consta de 9 dígitos");
        } else if (!/^[ABCDEFGHKLMNPQS]/.test(temp)) {	// Es una    letra de las admitidas ?
            alert("El primer dígito es  incorrecto, debe ser una letra de las siguientes: A,B,C,D,E,F,G,H,K,L,M,N,P,Q,S    ");
        } else {
            //verifica digit de control
            var v1 = new Array(0, 2, 4, 6, 8, 1, 3, 5, 7, 9);
            var temp = 0;
            for (i = 2; i <= 6; i += 2) {
                temp = temp + v1[parseInt(cadena.substr(i - 1, 1))];
                temp = temp + parseInt(cadena.substr(i, 1));
            }
            temp = temp + v1[parseInt(cadena.substr(7, 1))];
            temp = (10 - (temp % 10));
            if (temp == parseInt(cadena.charAt(cadena.length - 1))) {
                result = true;
            } else {
                alert("El dígito de control  No Correctorrrg");
            }
        }
        return result;
    },
    m_existSpecialCaracters: function (Cadena) {
        //Esta variable contiene todos loa caracteres que consideramos normales 
        // OJO!!!! tiene que  contener un ESPACIO en BLANCO sino tb los elimina!!!!!!!
        var CaracterNormal = " abcçdefghijklmnñopqrstuvxywzABCÇDEFGHIJKLMNOPQRSTUVXYWZáàéèíìïóòúùü";
        for (pos = 0; pos <= Cadena.length - 1; pos++) { //Recorer cadena desde pos=0 hasta pos=length-1 
            if (CaracterNormal.indexOf(Cadena.charAt(pos)) == -1) { //Si indexOf devuelve -1 es que no esta el caracter dentro de 'CaracterNormal' por tanto...
                return true;
            }
        }

        return false; //Devolvemos  true
    },
    m_isDate: function (fecha) {

        if (fecha === "29/02/2012") {
            return true;
        }

        var Fecha = fecha;
        var RealFecha = new Date();
        var Ano = new String(Fecha.substring(Fecha.lastIndexOf("/") + 1, Fecha.length));
        var Mes = new String(Fecha.substring(Fecha.indexOf("/") + 1, Fecha.lastIndexOf("/")));
        var Dia = new String(Fecha.substring(0, Fecha.indexOf("/")));

        if (isNaN(Ano) || Ano.length < 4 || parseFloat(Ano) < 1900) {
            return false;
        }
        if (isNaN(Mes) || parseFloat(Mes) < 1 || parseFloat(Mes) > 12) {
            return false;
        }
        if (isNaN(Dia) || parseInt(Dia, 10) < 1 || parseInt(Dia, 10) > 31) {
            return false;
        }
        if (Mes == 4 || Mes == 6 || Mes == 9 || Mes == 11 || Mes == 2) {
            if (Mes == 2 && Dia > 28 || Dia > 30) {
                return false;
            }
        }

        return true;
    },
    m_arrayItems: "",
    m_existInList: function (item) {

        var lstItems = this.m_arrayItems.split(';');
        for (i = 0; i < lstItems.length - 1; i++) {
            if (lstItems[i] == item)
                return true;
        }

        return false;
    },
    m_saveInList: function (id) {

        if (this.m_arrayItems.indexOf(id + ";") == -1)
            this.m_arrayItems += id + ";";
    },
    m_clearList: function () {
        this.m_arrayItems = "";
    },
    // Alerta
    m_alert: function (texto) {
        jAlert(texto, 'Alerta');
    },
    m_Error: "Ha ocurrido un error. Por favor, intentenlo mas tarde. Disculpe las molestias",

    // Filtro Html  ////////////////////////////////////////////////////

    m_filtrarHtml: function (contenido) {

        var mapsFiltrado = "";

        for (i = 0; i < contenido.length; i++) {
            var letra = contenido.charAt(i)
            var filtrado = false;

            if (letra == '\"') {
                mapsFiltrado += letra.replace("\"", "|");
                filtrado = true;
            }

            if (letra == '<') {
                mapsFiltrado += letra.replace("<", "[");
                filtrado = true;
            }

            if (letra == '>') {
                mapsFiltrado += letra.replace(">", "]");
                filtrado = true;
            }

            if (!filtrado) {
                mapsFiltrado += letra;
            }

        }
        return mapsFiltrado;
    },

    // Timeout ////////////////////////////////////////////////////

    m_refreshTimeOut: function () {

        $.post('functions/AncoraDual.aspx',
		{
		    Tarea: 'refreshTimeOut'
		},
  		function (data) {
  		    if (data == "OK") {
  		        location.href = "Abandon.aspx";
  		    }
  		});

    },
    // BOX ////////////////////////////////////////////////////

    m_boxActivo: "",
    m_despliegaAcciones_Box: function (idBox, isTr) {

        //alert(this.m_boxActivo + "!=" + idBox);

        var Tr = "";
        if (isTr.toString() == "true") {
            Tr = "Tr";
        }

        if (this.m_boxActivo != idBox) {
            if (this.m_boxActivo == "") {
                this.m_boxActivo = idBox;
                $("#" + idBox).addClass("boxSelect" + Tr);
                $("#AccionBox_" + idBox).slideDown("fast");
                return;
            }
            else {
                $("#" + this.m_boxActivo).removeClass("boxSelect" + Tr);
                $("#" + this.m_boxActivo).addClass("box" + Tr);
                $("#AccionBox_" + this.m_boxActivo).fadeOut("fast");

                $("#AccionBox_" + idBox).slideDown("fast");
                $("#" + idBox).addClass("boxSelect" + Tr);
                this.m_boxActivo = idBox;
                return;
            }

        }
        else {
            $("#" + this.m_boxActivo).removeClass("boxSelect" + Tr);
            $("#" + this.m_boxActivo).addClass("box" + Tr);
            $("#AccionBox_" + this.m_boxActivo).fadeOut("fast");
            this.m_boxActivo = "";
            return;

        }
    },
    // BOXTR ////////////////////////////////////////////////////

    m_boxTrActivo: "",
    m_despliegaAcciones_BoxTr: function (idBox) {

        if (this.m_boxTrActivo != idBox) {
            if (this.m_boxTrActivo == "") {
                this.m_boxTrActivo = idBox;
                //$("#" + idBox).addClass("boxSelect");
                $("#AccionBoxTr_" + idBox).slideDown("slow");
                return;
            }
            else {
                //$("#" + this.m_boxTrActivo).removeClass("boxSelect");
                //$("#" + this.m_boxTrActivo).addClass("box");
                $("#AccionBoxTr_" + this.m_boxTrActivo).fadeOut("slow");

                $("#AccionBoxTr_" + idBox).slideDown("slow");
                //$("#" + idBox).addClass("boxSelect");
                this.m_boxTrActivo = idBox;
                return;
            }

        }
        else {
            //$("#" + this.m_boxTrActivo).removeClass("boxSelect");
            //$("#" + this.m_boxTrActivo).addClass("box");
            $("#AccionBoxTr_" + this.m_boxTrActivo).fadeOut("slow");
            this.m_boxTrActivo = "";
            return;

        }
    },
    m_pliegaAcciones_BoxTr: function () {

        $("#AccionBoxTr_" + this.m_boxTrActivo).fadeOut("slow");
        this.m_boxTrActivo = "";
        return;
    },
    // HASH TABLE ///////////////////////////////////////////////////
    m_Hash: function () {
        this.length = 0;
        this.items = new Array();
        for (var i = 0; i < arguments.length; i += 2) {
            if (typeof (arguments[i + 1]) != 'undefined') {
                this.items[arguments[i]] = arguments[i + 1];
                this.length++;
            }
        }

        this.removeItem = function (in_key) {
            var tmp_previous;
            if (typeof (this.items[in_key]) != 'undefined') {
                this.length--;
                var tmp_previous = this.items[in_key];
                delete this.items[in_key];
            }

            return tmp_previous;
        }

        this.getItem = function (in_key) {
            return this.items[in_key];
        }

        this.setItem = function (in_key, in_value) {
            var tmp_previous;
            if (typeof (in_value) != 'undefined') {
                if (typeof (this.items[in_key]) == 'undefined') {
                    this.length++;
                }
                else {
                    tmp_previous = this.items[in_key];
                }

                this.items[in_key] = in_value;
            }

            return tmp_previous;
        }

        this.hasItem = function (in_key) {
            return typeof (this.items[in_key]) != 'undefined';
        }

        this.clear = function () {
            for (var i in this.items) {
                delete this.items[i];
            }

            this.length = 0;
        }
    },
    // Favoritos ////////////////////////////////////////////////////

    favoritos: "",
    m_total_favoritos: 0,

    m_FavotitosContains: function (item, lst) {

        var lstItems = lst.split(';');
        for (i = 0; i < lstItems.length - 1; i++) {
            if (lstItems[i] == item)
                return true;
        }

        return false;
    },
    m_add_Favorito: function (item) {

        var seccion = item.toString().substring(0, item.toString().indexOf("_"));
        var accion = "addFavorite";
        if (!this.m_FavotitosContains(item, this.favoritos)) {
            this.favoritos += item + ";";
            $("#Favorito_" + item).removeClass('favorito').addClass('favoritoSelect');
            $("#Favorito_" + item).attr('title', 'Treure de la meva llista de favorits');
            accion = "addFavorite";
        }
        else {
            $("#Favorito_" + item).removeClass('favoritoSelect').addClass('favorito');
            $("#Favorito_" + item).attr('title', 'Afegir a la meva llista de favorits');
            this.favoritos = this.favoritos.replace(item + ";", "");
            accion = "removeFavorite";
        }

        //alert(this.favoritos);

        $.post('functions/AncoraDual.aspx',
		    {
		        Tarea: accion,
		        item: item
		    },
  		    function (data) {
  		    });

        this.m_reCount_Favoritos(item);

    },
    m_reCount_Favoritos: function (item) {

        var contador = 0;
        var seccion = "";
        var lstItems = this.favoritos.split(';');
        for (i = 0; i < lstItems.length - 1; i++) {

            var clave = lstItems[i].toString().substring(0, lstItems[i].toString().indexOf("_"));
            var valor = lstItems[i].toString().substring(lstItems[i].toString().indexOf("_") + 1);


            seccion = item.toString().substring(0, item.toString().indexOf("_"));
            if (seccion == clave) {
                contador++;
            }
        }

        $("#favoritos_" + seccion).html(contador);

    },
    m_render_Favoritos: function () {

        if (this.favoritos != "") {

            var myHash = new this.m_Hash();

            var lstItems = this.favoritos.split(';');
            for (i = 0; i < lstItems.length - 1; i++) {

                var clave = lstItems[i].toString().substring(0, lstItems[i].toString().indexOf("_"));
                var valor = lstItems[i].toString().substring(lstItems[i].toString().indexOf("_") + 1);

                $("#Favorito_" + lstItems[i]).removeClass('favorito').addClass('favoritoSelect');
                $("#Favorito_" + lstItems[i]).attr('title', 'Eliminar de mi lista de Favoritos');

                if (typeof (myHash.getItem(clave)) != 'undefined') {
                    var total = parseInt(myHash.getItem(clave));
                    total++;
                    myHash.setItem(clave, total);
                }
                else {
                    myHash.setItem(clave, 1);
                }
            }

            for (var i in myHash.items) {
                $("#favoritos_" + i).html(myHash.getItem(i));
            }
        }

        //$("#favoritos_" + seccion).html(contador);

    },
    m_clear_Favoritos: function (tipoItem) {

        //alert(this.favoritos);
        var lstItems = this.favoritos.split(';');
        for (i = 0; i < lstItems.length - 1; i++) {

            var clave = lstItems[i].toString().substring(0, lstItems[i].toString().indexOf("_"));
            var valor = lstItems[i].toString().substring(lstItems[i].toString().indexOf("_") + 1);

            if (clave.toString() == tipoItem.toString()) {
                this.favoritos = this.favoritos.replace(lstItems[i] + ';', '');
            }
        }

        this.m_render_Favoritos();
        //alert(this.favoritos);

        var accion = "clearFavorites";

        $.post('functions/AncoraDual.aspx',
		    {
		        Tarea: accion,
		        item: tipoItem
		    },
  		    function (data) {
  		    });

        location.href = location.href;


    }
    // Descargas ////////////////////////////////////////////////////
    ,
    m_descargarArchivo: function (link) {
        $('#descargar').html("<a id=\"descargaHref\" href=\"temp/" + link + "\" target=\"_blank\" onClick=\"$('#descargar').fadeOut(2000);\"><img src='img/down.png'>&nbsp;&nbsp;Descargar archivo&nbsp;&nbsp;<img src='img/down.png'></a>");
        $('#descargar').fadeIn(2000);
    },

    m_MostrarMensajeGlobal: function (Mensaje) {
        $('#descargar').html(Mensaje);
        $('#descargar').fadeIn(1000);
        $('#descargar').fadeOut(3000);
    },
    // Estado ////////////////////////////////////////////////////
    m_inHome: "false",
    // Pop Modal ////////////////////////////////////////////////////
    m_mostrarModal: function () {
        $('body').append("<div id='mask'><img src='" + urlBase + "img/loading.gif'></div>");
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#mask').css({ 'width': maskWidth, 'height': maskHeight, 'position': 'absolute', 'left': '0', 'top': '0', 'z-index': '9000', 'background-color': '#000', 'opacity': '0.4', 'filter': 'alpha(opacity=40)' });
        $('#mask img').css({ 'position': 'absolute', 'right': '50%', 'top': '10%' });
        $('#mask').fadeTo("slow", 0.5);

        $("#mask").click(function () {
            $.ancoraDual.m_cerrarPopUpModal();
        });
    },
    m_cerrarPopUpModal: function () {
        $('#mask').fadeOut("slow");
        $('#mask').remove();
    },
    m_mostrarContenidoPopUp: function (data) {
        $("#aModal .modal-content").html(data);
        $("#aModal").modal('show');
        $('#mask').remove();

        //  $.ancoraDual.m_mostrarModal();
        //  $('#loading').hide();
    },
    m_cargandoDatos: function () {
        $('#mask').show("slow");
        $('#loading').show();
    },
    m_secciones: "",
    m_mostrarSeccion: function (seccion) {
        var array_Secciones = this.m_secciones.split(";")
        for (x = 0; x < array_Secciones.length; x++) {
            if (array_Secciones[x] != "") {
                $('#' + array_Secciones[x]).removeClass('current');
            }
        }
        $('#' + seccion).addClass('current');

    },
    // tabs
    m_activarTabs: function () {
        $(".tab_content").hide();
        $("ul.tabs li:first").addClass("active").show();
        $(".tab_content:first").show();

        $("ul.tabs li").click(function () {
            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab_content").hide();

            var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn();
            return false;
        });
    }


};