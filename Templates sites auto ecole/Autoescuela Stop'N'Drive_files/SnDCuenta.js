jQuery.extend({
    SnDCuenta: {
        m_detalleReserva1: function (nReservaId) {
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'detalleReserva1',
		        nReservaId: nReservaId
		    },
  		    function (data) {
  		        if (data != "OFF")
  		            $.ancoraDual.m_mostrarContenidoPopUp(data);
  		        else
  		            location.href = urlBase;
  		    });
        },
        m_getPracticas: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getPracticas'
		    },
  		    function (data) {
  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 mispracticas');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_practicas").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();

  		    });
        },
        m_getReservas: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getReservas'
		    },
  		    function (data) {

  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 misreservas');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_reservas").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_getConvocatorias: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getConvocatorias'
		    },
  		    function (data) {

  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 convocatorias');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_convocatorias").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },

        m_getSaldos: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getSaldos'
		    },
  		    function (data) {
  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 missaldos');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_credito").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_getTeorica: function (sIdioma) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getTeorica',
		        sIdioma: sIdioma
		    },
  		    function (data) {
  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 miteorica');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_teorica").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_getVideo: function (nVideoId) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getVideo',
		        nVideoId: nVideoId
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_getPerfil: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getPerfil'
		    },
  		    function (data) {
  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 perfil');
  		            $(".menu-sidebar li").removeClass("actiu");
  		            $(".usr_perfil").addClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }

  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_getFotoPerfil: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getFotoPerfil'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_updateFoto: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'updateFoto'
		    },
  		    function (data) {
            if (data!=""){
  		        var url = "url(" + urlBase + "/uploads/profile/" + data + ')';
                $('.foto_perfil').css('background-image', url);
            }
  		        $.ancoraDual.m_cerrarPopUpModal();

  		    });
        },
        m_savePerfil: function (nAlumnoId) {

            $.ancoraDual.m_mostrarModal();

            var nombre = $('#pNombre').val();
            var apellidos = $('#pApellidos').val();
            var pw = $('#pPw').val();
            var mail = $('#pMail').val();
            var telefono = $('#pTelefono').val();
            var nif = $('#pNIF').val();
            var direccion = $('#pDireccion').val();
            var cp = $('#pPostal').val();
            var poblacion = $('#pPoblacion').val();
            var provincia = $('#pprovincia').val();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'savePerfil',
		        nAlumnoId: nAlumnoId,
		        nombre: nombre,
		        apellidos: apellidos,
		        pw: pw,
		        mail: mail,
		        telefono: telefono,
		        nif: nif,
		        direccion: direccion,
		        cp: cp,
		        poblacion: poblacion,
		        provincia: provincia
		    },
  		    function (data) {
  		        if (StrIdioma == "fr")
  		            alert("Vos données ont bien été modifié.");
  		        else if (StrIdioma == "en")
  		            alert("Your details have been changed successfully.");
  		        else
  		            alert("Sus datos han sido cambiados correctamente.");


  		        $("#nombre").html(nombre);
  		        $("#nombre1").html(nombre);
  		        $("#apellidos").html(apellidos);
  		        $("#apellidos1").html(apellidos);

  		    });
            $.ancoraDual.m_cerrarPopUpModal();

        },
        m_getBienvenida: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Cuenta.aspx',
		    {
		        Tarea: 'getBienvenida'
		    },
  		    function (data) {
  		        if (data != "OFF") {
  		            $("#cuenta .central").html(data);
  		            $('#cuenta .central').removeClass().addClass('central col-xs-9 bienvenida');
  		            $(".menu-sidebar li").removeClass("actiu");
  		        }
  		        else {
  		            location.href = urlBase;
  		        }
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        }

    }
});