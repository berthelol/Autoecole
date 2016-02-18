window.fbAsyncInit = function () {
    FB.init({
        appId: '1678091775765514',
        cookie: true,
        xfbml: true,
        version: 'v2.5'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function loginFacebook() {
    FB.getLoginStatus(function (response) {

        if (response.status === 'connected') {
            
            FB.login(function (response) {
                validarUsuarioFacebook();
            }, { scope: 'email' });

            testAPI();

        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
        } else {
            FB.login(function (response) {
                if (response.authResponse) {
                    validarUsuarioFacebook();
                } else {
                    console.log('Se ha cancelado el login o no se ha autorizado la aplicacion.');
                }
            },{scope: 'email'});
        }
    });
}


// funcion de prueba
function testAPI() {
    console.log('Conectando.... ');

    FB.api("/me?fields=id,first_name,last_name,email", function (response) {
        console.log('Conectado como: ' + response.first_name);
        console.log('Id: ' + response.id);

        if (response && !response.error) {
            console.log(response);
        }
        else {
            console.log(response.error.message)
        }
    });
}



function validarUsuarioFacebook() {

    var destino = urlBase + StrIdioma + "/cuenta/";
    if (location.href.indexOf('reservar') >= 0) {
        destino = urlBase + StrIdioma + "/reservar";
    }

    FB.api("/me?fields=id,first_name,last_name,email", function (response) {

        if (response && !response.error) {
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
            {
                Tarea: 'validarFacebook',
                id: response.id,
                first_name: response.first_name,
                last_name: response.last_name,
                email: response.email,
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
        }
        else {
            alert(response.error.message);
        }
    });
}

function sincronizarCuentaFacebook(nAlumnoId) {
    // Comprobamos la conexion
    FB.getLoginStatus(function (response) {

        if (response.status === 'connected') {
            sincronizarFacebook(nAlumnoId);
            testAPI();

        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.

        } else {
            FB.login(function (response) {
                if (response.authResponse) {
                    sincronizarFacebook(nAlumnoId);
                } else {
                    console.log('Se ha cancelado el login o no se ha autorizado la aplicacion.');
                }
            });
        }
    });
}

function sincronizarFacebook(nAlumnoId) {

    FB.api("/me?fields=id", function (response) {
        if (response && !response.error) {
            console.log(response);
            $.ancoraDual.m_mostrarModal();

            $.post(urlBase + 'functions/Usuario.aspx',
            {
                Tarea: 'sincronizarFacebook',
                nAlumnoId: nAlumnoId,
                id: response.id,
            },
            function (data) {
                $.SnDCuenta.m_getPerfil();
                $.ancoraDual.m_cerrarPopUpModal();
            });
        }
        else {
            alert(response.error.message)
        }
    });
}

function desvincularFacebook(nAlumnoId) {

    var confirmtext = "Se desvinculara esta cuenta de Facebook. Seguro que deseas continuar?";

    if (StrIdioma == "fr")
        confirmtext = "Il va délier de ce compte Facebook. Etes-vous sûr de vouloir continuer?";
    else if (StrIdioma == "en")
        confirmtext = "You're going to untie this Facebook account. Are you sure you want to continue?";

    var result = confirm(confirmtext)

    if (result) {
        $.ancoraDual.m_mostrarModal();

        $.post(urlBase + 'functions/Usuario.aspx',
        {
            Tarea: 'desvincularFacebook',
            nAlumnoId: nAlumnoId
        },
        function (data) {
            $.SnDCuenta.m_getPerfil();
        });
    }
}