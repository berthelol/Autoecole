$(document).ready(function () {


    $('.equal').matchHeight();

    $(document).on("click", ".prevent", function (event) {
        event.preventDefault();
    });

    // ***** Menú
    var select = false;
    var page = location.href;

    $("nav li").removeClass('active');

    if (page.indexOf('Reservar') >= 0) {
        $(".menu_reserva").addClass('active');
        select = true;
    }

    if (page.indexOf('Teorica') >= 0) {
        $(".menu_teorica").addClass('active');
        select = true;
    }

    if (page.indexOf('Tarifas') >= 0) {
        $(".menu_tarifas").addClass('active');
        select = true;
    }

    if (page.indexOf('Foro') >= 0) {
        $(".menu_foro").addClass('active');
        select = true;
    }

    if (page.indexOf('Contacto') >= 0) {
        $(".menu_contacto").addClass('active');
        select = true;
    }

    if (page.indexOf('Usr_') >= 0) {
        $(".menu_cuenta").addClass('active');
        select = true;
    }


    // Marcar botones idiomas
    if (page.indexOf('/es/') >= 0) {
        $(".btn-es").addClass('active');
    }
    if (page.indexOf('/en/') >= 0) {
        $(".btn-en").addClass('active');
    }
    if (page.indexOf('/fr/') >= 0) {
        $(".btn-fr").addClass('active');
    }


    // scroll suave
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // VALIDACION USUARIO
    $("#capa_login").submit(function (event) {
        $.SnDUsuario.m_validaUsuario();
        event.preventDefault();
    });

    // VALIDACION REGISTRO
    $(".registro").submit(function (event) {
        $.SnDUsuario.m_validaRegistro();
        event.preventDefault();
    });

    // VALIDACION CONTACTO
    $("#contacto form").submit(function (event) {
        $.Utils.m_sendContact();
        event.preventDefault();
    });

    // FORO
    // ocultar y mostrar temas 
    $(document).on("click", "#foro .fa-chevron-circle-up", function () {
      //  $(this).parent().parent().parent().parent().find("td").hide();
        $(this).parents().eq(3).find("td").hide();
        $(this).parents().eq(4).css("border-collapse", "separate");
        $(this).removeClass().addClass('fa fa-chevron-circle-down');
    });

    $(document).on("click", "#foro .fa-chevron-circle-down", function () {
        $(this).parents().eq(3).find("td").show();
        $(this).removeClass().addClass('fa fa-chevron-circle-up');
        $(this).parents().eq(4).css("border-collapse", "collapse");

    });



    //$("html").on("click", ".youtube-container", function (e) {
    //    alert("hola");
    //    id = $(e.currentTarget).attr("data-id");

    //    var iframe = document.createElement("iframe");
    //    iframe.setAttribute("src", "//www.youtube.com/embed/" + id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    //    iframe.setAttribute("frameborder", "0");
    //    iframe.setAttribute("width", "100%");
    //    iframe.setAttribute("height", "auto");

    //    $("#" + id + " .youtube-container").html(iframe);

    //    console.log(iframe);
    //});

});


$(window).load(function () {

    // Slideshow inicio
    $('.slideshow').bxSlider({
        auto: true,
        speed: 1500
    });


});



