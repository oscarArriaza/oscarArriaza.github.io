import NombreDeLaClase from "./nombreDelPaquete/NombreDeLaClase.js";
document.addEventListener
(
    "DOMContentLoaded",
    function()
    {
        let etiquetaBody=document.getElementsByTagName("body")[0];
        let modalProyectoLabel=document.getElementById("modalProyectoLabel");
        let imagen=document.getElementById("imagen");
        let descripcion=document.getElementById("descripcion");
        let fecha=document.getElementById("fecha");
        let categoria=document.getElementById("categoria");
        let botonVerCodigo=document.getElementById("botonVerCodigo");
        let botonVerAplicacion=document.getElementById("botonVerAplicacion");
        let modalHabilidadLabel=document.getElementById("modalHabilidadLabel");
        let imagenHabilidad=document.getElementById("imagenHabilidad");
        let descripcionHabilidad=document.getElementById("descripcionHabilidad");
        let modalExperienciaLabel=document.getElementById("modalExperienciaLabel");
        let imagenExperiencia=document.getElementById("imagenExperiencia");
        let descripcionExperiencia=document.getElementById("descripcionExperiencia");
        let botonDesplegarPrimerModal=document.getElementById("botonDesplegarPrimerModal");
        let botonDesplegarVideo=document.getElementById("botonDesplegarVideo");
        let video1=document.getElementById("video1");
        let segundoDePausa=8;
        let botonDesplegarPregunta=document.getElementById("botonDesplegarPregunta");
        let cancelarVisitaGuiada=false;
        let segundoDeSeccionSobreMi=11;
        let segundoDeAutobiografia=17;
        let botonSobreMiNavbar=document.getElementById("botonSobreMiNavbar");
        let botonDesplegarAutobiografia=document.getElementById("botonDesplegarAutobiografia");
        let segundoDeSeccionPortafolio=24;
        let segundoDeSeccionPortafolioDos=29;
        let segundoDeSeccionPortafolioTres=34;
        let botonPortafolioNavbar=document.getElementById("botonPortafolioNavbar");
        let botonSiguienteProyecto=document.getElementById("botonSiguienteProyecto");
        let segundoDeSeccionHabilidades=41;
        let segundoDeSeccionHabilidadesDos=43;
        let segundoDeSeccionHabilidadesTres=45;
        let segundoDeSeccionHabilidadesCuatro=47;
        let botonHabilidadesNavbar=document.getElementById("botonHabilidadesNavbar");
        let botonSiguienteHabilidad=document.getElementById("botonSiguienteHabilidad");
        let segundoDeSeccionExperiencia=50;
        let botonExperienciaNavbar=document.getElementById("botonExperienciaNavbar");
        let segundoDeSeccionContacto=56;
        let botonContactoNavbar=document.getElementById("botonContactoNavbar");
        let segundoDeFinDeLaVisitaGuiada=97;
        let segundoDeVisitaGuiadaCancelada=106;
        principal();
        function principal()
        {
            botonDesplegarPrimerModal.click();
            
            etiquetaBody.addEventListener
            (
                "mouseover",
                function(event)
                {
                    if(event.target.className==="nav-link elementoClickeable")
                    {
                        event.target.setAttribute("style","background-color: rgba(8, 255, 115, 0.515); color:white;");
                    }

                    if(event.target.id==="miNombre")
                    {
                        event.target.setAttribute("style","background-color: rgba(120, 120, 120, 0.471); color:white;");
                    }
                }
            );
            etiquetaBody.addEventListener
            (
                "mouseout",
                function(event)
                {
                    if(event.target.className==="nav-link elementoClickeable")
                    {
                        event.target.setAttribute("style","background-color:rgba(8, 255, 115, 0.768); color:black;");
                    }

                    if(event.target.id==="miNombre")
                    {
                        event.target.setAttribute("style","background-color: rgba(255, 255, 255, 0.686); color:black;");
                    }
                }
            );
            etiquetaBody.addEventListener
            (
                "click",
                function(event)
                {
                    if(event.target.className==="d-block w-100 proyecto")
                    {
                        modalProyectoLabel.textContent=event.target.getAttribute("data-titulo");
                        imagen.setAttribute("src",event.target.getAttribute("src"));
                        imagen.setAttribute("alt",event.target.getAttribute("alt"));
                        descripcion.textContent=event.target.getAttribute("data-descripcion");
                        fecha.textContent="Fecha de publicacion: "+event.target.getAttribute("data-fecha");
                        categoria.textContent="Categoria: "+event.target.getAttribute("data-categoria");
                        botonVerCodigo.setAttribute("href",event.target.getAttribute("data-linkAlCodigo"));
                        botonVerAplicacion.setAttribute("href",event.target.getAttribute("data-linkALaAplicacion"));
                    }
                    if(event.target.className==="d-block w-75 d-block d-lg-none habilidad"||event.target.className==="d-block w-25 d-none d-lg-block habilidad")
                    {
                        modalHabilidadLabel.textContent=event.target.getAttribute("data-titulo");
                        imagenHabilidad.setAttribute("src",event.target.getAttribute("src"));
                        imagenHabilidad.setAttribute("alt",event.target.getAttribute("alt"));
                        descripcionHabilidad.textContent=event.target.getAttribute("data-descripcion");
                    }
                    if(event.target.className==="d-block w-100 d-block d-lg-none experiencia"||event.target.className==="d-block w-50 d-none d-lg-block experiencia")
                    {
                        modalExperienciaLabel.textContent=event.target.getAttribute("data-titulo");
                        imagenExperiencia.setAttribute("src",event.target.getAttribute("src"));
                        descripcionExperiencia.textContent=event.target.getAttribute("data-descripcion");
                    }
                    if(event.target.id==="botonCerrarPrimerModal")
                    {
                        botonDesplegarVideo.click();
                        video1.play();        
                    }
                    if(event.target.id==="botonSiVisitaGuiada")
                    {
                        segundoDePausa=8940;
                        video1.play();
                    }
                    if(event.target.id==="botonNoVisitaGuiada")
                    {
                        segundoDePausa=8940;
                        cancelarVisitaGuiada=true;
                        video1.currentTime=segundoDeVisitaGuiadaCancelada;
                        video1.play();
                        setTimeout
                        (
                            function()
                            {
                                botonDesplegarVideo.click();
                            },
                            5000
                        );
                    }
                }
            );
            video1.addEventListener("timeupdate", function()
            {
                if (video1.currentTime >= segundoDePausa&&cancelarVisitaGuiada===false)
                {
                    video1.pause(); // Pausar el video en el segundo específico
                    botonDesplegarPregunta.click(); // Mostrar el modal
                }
                if(video1.currentTime>=segundoDeSeccionSobreMi&&cancelarVisitaGuiada===false)
                {
                    botonSobreMiNavbar.click();
                    segundoDeSeccionSobreMi=8940;
                }
                if(video1.currentTime>=segundoDeAutobiografia&&cancelarVisitaGuiada===false)
                {
                    botonDesplegarAutobiografia.click();
                    segundoDeAutobiografia=8940;
                }
                if(video1.currentTime>=segundoDeSeccionPortafolio&&cancelarVisitaGuiada===false)
                {
                    botonPortafolioNavbar.click();
                    segundoDeSeccionPortafolio=8940;
                }
                if(video1.currentTime>=segundoDeSeccionPortafolioDos&&cancelarVisitaGuiada===false)
                {
                    botonSiguienteProyecto.click();
                    segundoDeSeccionPortafolioDos=8940;
                }
                if(video1.currentTime>=segundoDeSeccionPortafolioTres&&cancelarVisitaGuiada===false)
                {
                    botonSiguienteProyecto.click();
                    segundoDeSeccionPortafolioTres=8940;
                }
                if(video1.currentTime>=segundoDeSeccionHabilidades&&cancelarVisitaGuiada===false)
                {
                    botonHabilidadesNavbar.click();
                    segundoDeSeccionHabilidades=8940;
                }
                if(video1.currentTime>=segundoDeSeccionHabilidadesDos&&cancelarVisitaGuiada===false)
                {
                    botonSiguienteHabilidad.click();
                    segundoDeSeccionHabilidadesDos=8940;
                }
                if(video1.currentTime>=segundoDeSeccionHabilidadesTres&&cancelarVisitaGuiada===false)
                {
                    botonSiguienteHabilidad.click();
                    segundoDeSeccionHabilidadesTres=8940;
                }
                if(video1.currentTime>=segundoDeSeccionHabilidadesCuatro&&cancelarVisitaGuiada===false)
                {
                    botonSiguienteHabilidad.click();
                    segundoDeSeccionHabilidadesCuatro=8940;
                }
                if(video1.currentTime>=segundoDeSeccionExperiencia&&cancelarVisitaGuiada===false)
                {
                    botonExperienciaNavbar.click();
                    segundoDeSeccionExperiencia=8940;
                }
                if(video1.currentTime>=segundoDeSeccionContacto&&cancelarVisitaGuiada===false)
                {
                    botonContactoNavbar.click();
                    segundoDeSeccionContacto=8940;
                }
                if(video1.currentTime>=segundoDeFinDeLaVisitaGuiada&&cancelarVisitaGuiada===false)
                {
                    botonSobreMiNavbar.click();
                    video1.pause();
                    botonDesplegarVideo.click();
                }
            });
        
        }
    }
);