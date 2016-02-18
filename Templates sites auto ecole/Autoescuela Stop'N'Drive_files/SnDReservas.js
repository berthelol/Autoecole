jQuery.extend({
    SnDReservas: {
        m_addReserva: function () {

            $.SnDReservas.m_lstSelecciones = "";
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'addReserva'
		    },
  		    function (data) {
  		        $(".data2").html(data);
  		        $.SnDReservas.m_updateSeleccion();

  		    });
        },
        m_getCalendario: function (fecha) {
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'getCalendario',
		        fecha: fecha
		    },
  		    function (data) {
  		        $("#Calendario").html(data);
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_lstSelecciones: "",
        //m_lstValoresReserva: "",
        m_addSeleccion: function (celda) {
            var check = $("input#" + celda).is(":checked");
            if (check) {
                $("#celda_" + celda).css('background-color', '#237300');
                $("#celda_" + celda).css('color', '#fff');
                $.SnDReservas.m_lstSelecciones += celda + ";";
                $.SnDReservas.m_updateSeleccion();
            }
            else {
                $.SnDReservas.m_removeSeleccion(celda);
            }

        },

        m_removeSeleccion: function (celda) {

            var color = $("#color_" + celda).val();
            $("#celda_" + celda).css('background-color', color);
            $("#celda_" + celda).css('color', '#000');
            $.SnDReservas.m_lstSelecciones = $.SnDReservas.m_lstSelecciones.replace(celda + ";", "");
            $("input#" + celda).attr('checked', false)

            $.SnDReservas.m_updateSeleccion();

        },
        m_updateSeleccion: function () {

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'addSeleccion',
		        selecciones: $.SnDReservas.m_lstSelecciones
		    },
  		    function (data) {
  		        $("#listaReservas").html(data);
  		    });
        },
        m_verificarReserva: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'verificarReserva'
		    },
  		    function (data) {
  		        if (data == "OK") {
  		            $.ancoraDual.m_mostrarContenidoPopUp(data);
  		        }
  		        else {
  		            alert(data);
  		        }
  		    });
        },
        m_detalleReserva: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'detalleReserva'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },

        m_detalleReservaTeorica: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'detalleReservaTeorica'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_inscripcionConvocatoria: function (nConvocatoriaId) {
            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'validarInscripcion',
		        nConvocatoriaId: nConvocatoriaId,
		    },
  		    function (data) {
  		        if (data != "OK")
  		            alert(data);
  		        else {
  		            $.ancoraDual.m_mostrarModal();

  		            $.post(urlBase + 'functions/Reservas.aspx',
                    {
                        Tarea: 'inscripcionConvocatoria',
                        nConvocatoriaId: nConvocatoriaId,
                    },
                    function (data) {
                        $.ancoraDual.m_mostrarContenidoPopUp(data);
                    });
  		        }
  		    });
        },
        m_seleccionarPago: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'seleccionarPago'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_realizarPago: function (tipo) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'realizarPago',
		    },
  		    function (data) {
  		        if (data == "OK") {
  		            location.href = "../cuenta/";
  		        }
  		    });
        },
        // profesores
        m_viewPracticas: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'viewPracticas'
		    },
  		    function (data) {
  		        $(".data").html(data);
  		    });
        },
        m_getCalendarioProfesores: function (fecha) {

            $.ancoraDual.m_mostrarModal();
            $.post(urlBase + 'functions/Reservas.aspx',
		    {
		        Tarea: 'getCalendarioProfesores',
		        fecha: fecha
		    },
  		    function (data) {
  		        $("#Calendario").html(data);
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },

        //Cancelar practica
        m_cancelarPractica: function (nPracticaId, nReservaId) {
            var confirmtext = "Vas a eliminar esta práctica. Segur@ que deseas continuar?";

            if (StrIdioma == "fr")
                confirmtext = "Vous allez éliminer cette pratique. Etes-vous sûr de vouloir continuer?";
            else if (StrIdioma == "en")
                confirmtext = "You're going to delete this driving lesson. Are you sure you want to continue?";

            var result = confirm(confirmtext)

            if (result) {
                $.ancoraDual.m_mostrarModal();

                $.post(urlBase + 'functions/Usuario.aspx',
		        {
		            Tarea: 'cancelarPractica',
		            nPracticaId: nPracticaId
		        },
  		        function (data) {
  		            location.reload();
  		        });
            }
        }

    }
});