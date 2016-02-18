jQuery.extend({
    SnDForo: {
        m_getNuevoMensaje: function (nTemaId) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Foro.aspx',
		    {
		        Tarea: 'getNuevoMensaje',
		        nTemaId: nTemaId
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },

        m_saveNuevoMensaje: function (nTemaId) {

            var Asunto = $("#Asunto").val();
            if (Asunto == "") {

                if (StrIdioma == "fr")
                    alert("Le titre du message est un requis");
                else if (StrIdioma == "en")
                    alert("The title is required");
                else
                    alert("El titulo del mensaje es un dato necesario");


                $("#Asunto").focus();
                return;
            }
            var Mensaje = $("#Mensaje").val();
            if (Mensaje == "") {

                if (StrIdioma == "fr")
                    alert("La description du message est obligatoire");
                else if (StrIdioma == "en")
                    alert("The description is required");
                else
                    alert("La descripcion del mensaje es un dato necesario");


                $("#Mensaje").focus();
                return;
            }
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Foro.aspx',
		    {
		        Tarea: 'saveNuevoMensaje',
		        nTemaId: nTemaId,
		        Asunto: Asunto,
		        Mensaje: Mensaje
		    },
  		    function (data) {

  		        if (data == "NOK")
  		            $.SnDUsuario.m_IniciarSesion();
  		        else
  		            window.location.reload(true);

  		    });
        },

        m_showRespuesta: function () {
            $("#Re_Mensaje").val("");
            $("#responder").show();
            $("html, body").animate({ scrollTop: ($(document).height() - 1000) }, 1000);
        },

        m_saveRespuesta: function (nMensajeId) {

            var Asunto = $("#Re_Asunto").val();
            if (Asunto == "") {

                if (StrIdioma == "fr")
                    alert("Le titre du message est obligatoire");
                else if (StrIdioma == "en")
                    alert("The title is required");
                else
                    alert("El titulo del mensaje es un dato necesario");


                $("#Re_Asunto").focus();
                return;
            }
            var Mensaje = $("#Re_Mensaje").val();
            if (Mensaje == "") {

                if (StrIdioma == "fr")
                    alert("La description du message est obligatoire");
                else if (StrIdioma == "en")
                    alert("The description is required");
                else
                    alert("La descripcion del mensaje es un dato necesario");


                $("#Re_Mensaje").focus();
                return;
            }
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Foro.aspx',
		    {
		        Tarea: 'saveRespuesta',
		        nPadreId: nMensajeId,
		        Asunto: Asunto,
		        Mensaje: Mensaje

		    },
  		    function (data) {
  		        $.ancoraDual.m_cerrarPopUpModal();

  		        if (data == "NOK")
  		            $.SnDUsuario.m_IniciarSesion();
  		        else 
  		            location.href = location.href;

  		    });
        }



    }
});