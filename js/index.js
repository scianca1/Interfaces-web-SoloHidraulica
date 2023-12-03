// import 'https://unpkg.com/jspdf@2.4.0/dist/jspdf.umd.min.js';
// const { jsPDF } = require("jspdf");
"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let btnAgregarRepuesto= document.getElementById("btnAgregarRepuesto");
    let ListaULRepuestos= document.getElementById("ListaRepuestos");
    let RepuestoACambiar= document.getElementById("RepuestoACambiar");
    let GenerarPDF= document.getElementById("btnGenerarPDF");
    let GenerarGarantia=document.getElementById("btnGenerarGarantia");
    let listarepuestos1=[];

    let eNombreCliente= document.getElementById('nombreCliente');
    let eApellidoCliente= document.getElementById('apellidoCliente');
    let ePatente= document.getElementById('patente');
    let eModelo=document.getElementById('modelo');
    let eAnio= document.getElementById('anio');
    let eTituloReparacion=document.getElementById('TituloReparacion');
    let eDescripcion=document.getElementById('Descripcion');
    let eRepuestos=document.querySelectorAll('.liDeRepuestos');
    let eNombreGenerador=document.getElementById('nombreGenerador');

    //imputs del formulario 

 

    GenerarPDF.addEventListener("click",(e)=>{
        e.preventDefault();

            var doc = new jsPDF();
            // Obtén los valores de los campos del formulario
            let nombreCliente= eNombreCliente.value;
            let apellidoCliente=eApellidoCliente.value;
            let patente= ePatente.value;
            let modelo=eModelo.value;
            let anio=eAnio.value;
            let tituloReparacion=eTituloReparacion.value;
            let descripcion=eDescripcion.value;
            let nombreGenerador= eNombreGenerador.value;
            if(patente!=""&&tituloReparacion!=""&&nombreGenerador!=""){

                //valores de textos 
                
                let tamanioTitulos= 14;
                let tamanioDatos= 21;

                // Crear un nuevo objeto de fecha
                var fechaActual = new Date();

                // Obtener los componentes de la fecha
                var año = fechaActual.getFullYear();
                var mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
                var dia = fechaActual.getDate();
                var horas = fechaActual.getHours();
                var minutos = fechaActual.getMinutes();
            

                // Agrega contenido al PDF 
                doc.setDrawColor(0, 50, 50);
                doc.setLineWidth(15); // Grosor en unidades
                doc.line(15, 18, 190, 18); // (x1, y1, x2, y2)
                
                doc.setDrawColor(70, 68, 68);
                doc.line(15, 68, 190, 68); // (x1, y1, x2, y2)

                doc.line(15, 98, 190, 98); // (x1, y1, x2, y2)

                doc.line(15, 128, 190, 128); // (x1, y1, x2, y2)

                doc.setFontSize(tamanioDatos);
                
                // doc.setOpacity(opacidadDatos);
                doc.setTextColor(255, 255, 255);
                doc.text(20, 20, 'ORDEN DE TRABAJO');

                doc.setFontSize(tamanioTitulos);
                doc.text(110, 15, 'Genero la orden:  '+nombreGenerador);
                doc.text(110, 22, 'Fecha:  '+dia+"/"+mes+"/"+año+"   "+horas+":"+minutos);
                
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(tamanioDatos);
                doc.text(100, 35, patente);

                
                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(70, 68, 68);
                // doc.setOpacity(opacidadTitulo);
                doc.text(40, 35, `Patente: `);

                
                doc.setFontSize(tamanioDatos);
                doc.setTextColor(0, 0, 0);
                // doc.setOpacity(opacidadDatos);
                doc.text(100, 45, modelo);
                
                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(70, 68, 68);
                // doc.setOpacity(opacidadTitulo);
                doc.text(40, 45, `Modelo:`);

                doc.setFontSize(tamanioDatos);
                doc.setTextColor(0, 0, 0);
                // doc.setOpacity(opacidadDatos);
                doc.text(100, 55, anio);

                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(70, 68, 68);
                // doc.setOpacity(opacidadTitulo);
                doc.text(40, 55, `AÑO:`);

                doc.setFontSize(tamanioDatos);
                doc.setTextColor(255, 255, 255);
                // doc.setOpacity(opacidadDatos);
                doc.text(85, 70, `CLIENTE`);

                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(70, 68, 68);
                // doc.setOpacity(opacidadTitulo);
                doc.text(40, 85, `Nombre:`);

                doc.setFontSize(tamanioDatos);
                doc.setTextColor(0, 0, 0);
                // doc.setOpacity(opacidadDatos);
                doc.text(100, 85, nombreCliente+" "+apellidoCliente);

                doc.setTextColor(255, 255, 255);
                doc.text(60, 100, `DATOS DE REPARACION`);

                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(70, 68, 68);
                // doc.setOpacity(opacidadTitulo);
                doc.text(40, 115, 'REPARACION:');

                doc.setFontSize(tamanioDatos);
                doc.setTextColor(0, 0, 0);
                // doc.setOpacity(opacidadDatos);
                doc.text(100, 115, tituloReparacion);

                doc.setTextColor(255, 255, 255);
                doc.text(85, 130, 'Descripcion:');
                // doc.text(40, 145, descripcion);

                // Ajusta la posición y el ancho máximo para el texto largo
                doc.setTextColor(0, 0, 0);
                let descripcionLines = doc.splitTextToSize(descripcion, 150);
                let descriptionY = 145;

                // Agrega cada línea de la descripción
                descripcionLines.forEach((line) => {
                    doc.text(20, descriptionY, line);
                    descriptionY += 10; // Ajusta el espaciado entre líneas según sea necesario
                });

                doc.setFontSize(tamanioTitulos);
                doc.setTextColor(250, 0, 0);
                doc.setFont("helvetica", "bold");
                doc.text(150, 7, 'SoloHidraulica');

                // Guarda o descarga el PDF

                doc.save(patente+'_O.pdf');
        }
    });
    GenerarGarantia.addEventListener("click",(e)=>{
       e.preventDefault();
       var doc = new jsPDF();
        // Obtén los valores de los campos del formulario
        let patente= ePatente.value;
        let tituloReparacion=eTituloReparacion.value;
        let descripcion=eDescripcion.value;
        if(patente!=""&&tituloReparacion!=""){

            //valores de textos 
            
            let tamanioTitulos= 14;
            let tamanioDatos= 21;

            // Crear un nuevo objeto de fecha
            var fechaActual = new Date();

            // Obtener los componentes de la fecha
            var año = fechaActual.getFullYear();
            var mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
            var dia = fechaActual.getDate();
            var horas = fechaActual.getHours();
            var minutos = fechaActual.getMinutes();

            
            // Especifica la ruta de tu imagen local
            // var imagePath = '../imgs/logo_2.png';

            // Agrega la imagen al PDF
            // doc.addImage(imagePath, 'PNG', 10, 10, 50, 50);
           

            doc.setDrawColor(255, 0, 0);
            doc.setLineWidth(0.5); // Grosor en unidades
            doc.line(15, 24, 190, 24); // (x1, y1, x2, y2)

                
            doc.setFontSize(tamanioDatos);
            doc.setTextColor(0, 0, 0);
            doc.text(85, 20, 'GARANTIA');
        


            doc.text(100, 40, patente);
            doc.setFontSize(tamanioTitulos);
            doc.setTextColor(70, 68, 68);
            // doc.setOpacity(opacidadTitulo);
            doc.text(40, 40, `Patente: `);
            doc.text(40, 50, `Fecha:`);

            doc.setTextColor(0, 0, 0);
            doc.setFontSize(tamanioTitulos);
            doc.text(40, 50, '     :                                    '+dia+"/"+mes+"/"+año+"   hora: "+horas+":"+minutos);
    
        
            doc.text(100, 60, tituloReparacion);

            doc.setTextColor(70, 68, 68);
            // doc.setOpacity(opacidadTitulo);
            doc.text(40, 60, 'REPARACION:');
            
            doc.text(40, 70, 'DETALLE:');

            // Ajusta la posición y el ancho máximo para el texto largo
            doc.setTextColor(0, 0, 0);
            let descripcionLines = doc.splitTextToSize(descripcion, 150);
            let descriptionY = 80;

            // Agrega cada línea de la descripción
            descripcionLines.forEach((line) => {
                doc.text(20, descriptionY, line);
                descriptionY += 10; // Ajusta el espaciado entre líneas según sea necesario
            });
            
            doc.setFontSize(tamanioDatos);
            doc.setTextColor(250, 0, 0);
            doc.setFont("helvetica", "bold");
            doc.text(150, 10, 'SoloHidraulica');

            doc.save(patente+'_G.pdf');
        }
    });
    // btnAgregarRepuesto.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     let repuesto= RepuestoACambiar.value ;
    //     if(!repuesto ==''){
    //         listarepuestos1.push(repuesto);
    //         ListaULRepuestos.innerHTML=``;
    //             listarepuestos1.forEach(repuestoL => {
    //                 ListaULRepuestos.innerHTML+=`<div class="contenedorRepuesto"><li class="liDeRepuestos">`+repuestoL+`</li><button class="btnBorrarRepuesto" id="`+listarepuestos1.indexOf(repuestoL)+`">Borrar</button></div>`;
    //             });
    //             asignarEventosABotones();
    //     }
    // })
    function asignarEventosABotones() {
        let botones= document.querySelectorAll(".btnBorrarRepuesto");
        botones.forEach(boton=>{
            boton.addEventListener('click',(e)=>{
                e.preventDefault();
                console.log("lista valuada en boton id antes de borrarla= "+listarepuestos1[boton.id]);
                // listarepuestos1=[];
                delete listarepuestos1[boton.id];
                console.log("boton id= "+boton.id);
                console.log("lista valuada en boton id= "+listarepuestos1[boton.id]);
                // listarepuestos1.splice(boton.id);
                // console.log(listarepuestos1);
                // console.log(boton.id);
                // let i=0;
                ListaULRepuestos.innerHTML='';
                listarepuestos1.forEach(repuestoL => {
                    ListaULRepuestos.innerHTML+=`<div class="contenedorRepuesto"><li class="liDeRepuestos">`+repuestoL+`</li><button class="btnBorrarRepuesto" id="`+listarepuestos1.indexOf(repuestoL)+`">Borrar</button></div>`;
                    // i++;
                });
                asignarEventosABotones();

            });
        });
    }
});