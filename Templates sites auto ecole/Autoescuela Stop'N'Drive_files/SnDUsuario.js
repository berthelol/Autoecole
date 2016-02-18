jQuery.extend({
    SnDUsuario: {
        m_getPw: function () {

            var email = $("#i_Usuario").val();
            if (email == "") {
                if (StrIdioma == "fr")
                    alert("S'il vous plaît inclure l'e-mail afin que nous puissions vous envoyer votre mot de passe");
                else if (StrIdioma == "en")
                    alert("Please include the email so we can send you your password");
                else
                    alert("Por favor incluye el Email para que podamos enviarte la contraseña");

                $("#i_Usuario").focus();
                return;
            }
                        
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'getPw',
		        email: email
		    },
  		    function (data) {
  		        if (data == "OK") {
                     if(StrIdioma=="fr")
                         alert("Bientôt vous recevrez votre mot de passe dans votre boîte aux lettres adressées e-mail");
                     else if (StrIdioma == "en")
                         alert("You will soon receive your password in your mailbox");
                    else
                         alert("En breve recibirás tu contraseña en tu buzón de correo eletrónico");


                     $.ancoraDual.m_cerrarPopUpModal();

  		        }
  		        else {
  		            alert(data);
  		        }

  		    });
        },
        m_validaUsuario: function () {

            var usuario = $("#i_Usuario").val();
            var pw = $("#i_Pw").val();
            var destino = urlBase + StrIdioma + "/cuenta/";

            if (location.href.indexOf('reservar') >= 0) {
                destino = urlBase + StrIdioma + "/reservar";
            }

            if (usuario == "") {

                if (StrIdioma == "fr")
                    alert("S'il vous plaît entrez le nom d'utilisateur");
                else if (StrIdioma == "en")
                    alert("Please enter your user name");
                else
                    alert("Por favor, introduzca el nombre de usuario");

                $("#i_Usuario").focus()
                return false;
            }

            if (pw == "") {
                if (StrIdioma == "fr")
                    alert("S'il vous plaît entrez le mot de passe");
                else if (StrIdioma == "en")
                    alert("Please enter your password");
                else
                    alert("Por favor, introduzca la contraseña");

                $("#i_Pw").focus()
                return false;
            }

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
            {
                Tarea: 'validarAlumno',
                pw: pw,
                usuario: usuario
            },
            function (data) {
                if (data == "OK") {
                    location.href = destino;
                    $.Utils.m_ocultarLogin();
                    $.ancoraDual.m_cerrarPopUpModal();
                }
                else {
                    alert(data);
                    $.ancoraDual.m_cerrarPopUpModal();

                }
            });
        },
        m_getRegistro: function (destino) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'getRegistro',
		        destino: destino
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_validaRegistro: function (destino) {

            var nombre = $("#nombre").val();
            if (nombre == "") {

                if (StrIdioma == "fr")
                    alert("Le nom est obligatoire");
                else if (StrIdioma == "en")
                    alert("Name is required");
                else
                    alert("Nombre es un dato necesario");

                $("#nombre").focus();
                return;
            }

            var email = $("#email").val();
            if (email == "") {

                if (StrIdioma == "fr")
                    alert("L'e-mail est obligatoire");
                else if (StrIdioma == "en")
                    alert("Email is required");
                else
                    alert("Email es un dato necesario");

                $("#email").focus();
                return;
            }

            if (!$.ancoraDual.m_isEmail(email)) {

                if (StrIdioma == "fr")
                    alert("L'e-mail doit être écrit correctement");
                else if (StrIdioma == "en")
                    alert("The e-mail must be written correctly");
                else
                    alert("El e-mail debe escribirse correctamente");


                $("#email").focus();
                return;
            }

            var pass = $("#pass").val();
            if (pass == "") {

                if (StrIdioma == "fr")
                    alert("Le mot de passe est obligatoire");
                else if (StrIdioma == "en")
                    alert("Password is required");
                else
                    alert("Contraseña es un dato necesario");

                $("#pass").focus();
                return;
            }

            var pass2 = $("#pass2").val();
            if (pass != pass2) {

                if (StrIdioma == "fr")
                    alert("Les mots de passe indiqués ne correspondent pas");
                else if (StrIdioma == "en")
                    alert("Passwords do not match");
                else
                    alert("Las contraseñas indicadas no coinciden");


                $("#pass").val("");
                $("#pass2").val("");
                $("#pass").focus();
                return;
            }

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'validaRegistro',
		        nombre: nombre,
		        apellidos: $("#apellidos").val(),
		        telf: $("#telf").val(),
		        email: email,
		        pass: pass
		    },
  		    function (data) {
  		        if (data == "OK") {
  		            if (destino == "reserva") {
  		                $.SnDReservas.m_detalleReserva();
  		                return;
  		            }

  		            if (StrIdioma == "fr")
  		                alert("Merci. S'il vous plaît, entrez votre e-mail pour valider votre compte.");
  		           else if (StrIdioma == "en")
  		               alert("Thanks for registering. Please enter your e-mail to validate your account.");
  		            else
  		                alert("Gracias por registrarte. Por favor, entra en tu buzón de correo para validar tu cuenta.");


  		            location.href = urlBase;
  		        }
  		        else {
  		            alert(data);
  		            $.ancoraDual.m_cerrarPopUpModal();
  		        }
  		    });
        },
        // pagos
        m_realizarPago: function () {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'realizarPago'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_pagar: function (tipo) {

            var importe = "";
            if (tipo == "bbva")
                importe = $("#importeBBVA").val();

            if (tipo == "paypal") 
                importe = $("#importePaypal").val();

            if (tipo == "lacaixa")
                importe = $("#importeLACAIXA").val();

            if (importe == "") {

                if (StrIdioma == "fr")
                    alert("S'il vous plaît entrer un montant");
                else if (StrIdioma == "en")
                    alert("Please enter an amount");
                else
                    alert("Por favor introduce un importe");


                if (tipo == "bbva")
                    $("#importeBBVA").focus();

                if (tipo == "paypal")
                    $("#importePaypal").focus();

                if (tipo == "caixa")
                    $("#importeLACAIXA").focus();

                return;
            }

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'Pagar',
		        importe: importe,
		        tipo: tipo
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_detalleReserva: function (nReservaId) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'detalleReserva',
		        nReservaId: nReservaId
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_getZona: function (zona) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'getZona',
		        zona: zona
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        },
        m_savePerfil: function () {

            var pw = $("#pw").val();
            if (pw == "") {

                if (StrIdioma == "fr")
                    alert("Le mot de passe est obligatoire");
                else if (StrIdioma == "en")
                    alert("Password is required");
                else
                    alert("Contraseña es un dato necesario");


                $("#pw").focus();
                return;
            }

            var nombre = $("#nombre").val();
            if (nombre == "") {

                if (StrIdioma == "fr")
                    alert("Le nom est obligatoire");
                else if (StrIdioma == "en")
                    alert("Name is required");
                else
                    alert("Nombre es un dato necesario");


                $("#nombre").focus();
                return;
            }

            var email = $("#email").val();
            if (email == "") {

                if (StrIdioma == "fr")
                    alert("Le mail est obligatoire");
                else if (StrIdioma == "en")
                    alert("Email is required");
                else
                    alert("Email es un dato necesario");

                $("#email").focus();
                return;
            }

            var nif = $("#nif").val();
            if (nif == "") {

                if (StrIdioma == "fr")
                    alert("Le NIF est obligatoire");
                else if (StrIdioma == "en")
                    alert("NIF ist required");
                else
                    alert("El NIF es un dato necesario");


                $("#nif").focus();
                return;
            }

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'savePerfil',
		        nombre: nombre,
		        apellidos: $("#apellidos").val(),
		        telf: $("#telf").val(),
		        email: email,
		        nif: nif,
		        direccion: $("#direccion").val(),
		        poblacion: $("#poblacion").val(),
		        provincia: $("#provincia").val(),
		        cp: $("#cp").val(),
		        pw: pw

		    },
  		    function (data) {

  		        if (StrIdioma == "fr")
  		            alert("Merci de mettre à jour vos coordonnées");
  		        else if (StrIdioma == "en")
  		            alert("Thank you for updating your information");
  		        else
  		            alert("Gracias por actualizar tus datos");


  		        $.ancoraDual.m_cerrarPopUpModal();
  		    });
        },

        m_IniciarSesion: function (zona) {

            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
		    {
		        Tarea: 'iniciarSesion'
		    },
  		    function (data) {
  		        $.ancoraDual.m_mostrarContenidoPopUp(data);
  		    });
        }
    }
});