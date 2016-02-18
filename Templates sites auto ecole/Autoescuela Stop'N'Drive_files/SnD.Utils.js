jQuery.extend({
    Utils: {
        m_sendContact: function () {

            var Nombre = $('#i_nombre').val();
            var Email = $('#i_email').val();
            var Comentarios = $('#i_comentarios').val();

            if (Nombre == "") {

                if (StrIdioma == "fr")
                    alert("Le nom est obligatoire");
                else if (StrIdioma == "en")
                    alert("Your first name is required");
                else
                    alert("Nombre es un dato necesario");


                $("#i_nombre").focus();
                return;
            }

            if (Email == "") {

                if (StrIdioma == "fr")
                    alert("L'e-mail est obligatoire");
                else if (StrIdioma == "en")
                    alert("E-mail is required");
                else
                    alert("Email es un dato necesario");

                $("#i_email").focus();
                return;
            }

            if (!$.ancoraDual.m_isEmail(Email)) {

                if (StrIdioma == "fr")
                    alert("L'e-mail doit être écrit correctement");
                else if (StrIdioma == "en")
                    alert("The e-mail must be written correctly");
                else
                    alert("El email no tiene un formato valido");

                $("#i_email").focus();
                return;
            }

            if (Comentarios == "") {

                if (StrIdioma == "fr")
                    alert("Le commentaire est obligatoire");
                else if (StrIdioma == "en")
                    alert("Comments are required");
                else
                    alert("Comentarios es un dato necesario");


                $("#i_comentarios").focus();
                return;
            } 

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Mail.aspx',
		    {
		        Tarea: 'enviarContacto',
		        Nombre: Nombre,
		        Email: Email,
		        Comentarios: Comentarios
		    },
  		    function (data) {
  		        alert(data);
  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },
        m_mostrarLogin: function () {
            $('#capa_login').show();

            $('body').append("<div id='login'></div>");

            var loginHeight = $(document).height();
            var loginWidth = $(window).width();

            $('#login').css({ 'width': loginWidth, 'height': loginHeight, 'position': 'absolute', 'left': '0', 'top': '0', 'z-index': '8999' });

            $("#login, #bRegistro").click(function () {
                $.Utils.m_ocultarLogin();
            });
        },

        m_ocultarLogin: function () {
            $('#login').remove();
            $('#capa_login').hide();
        }
    }

});