// import 'https://unpkg.com/jspdf@2.4.0/dist/jspdf.umd.min.js';
// const { jsPDF } = require("jspdf");
"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let btnAgregarRepuesto= document.getElementById("btnAgregarRepuesto");
    let ListaULRepuestos= document.getElementById("ListaRepuestos");
    let RepuestoACambiar= document.getElementById("RepuestoACambiar");
    let GenerarPDF= document.getElementById("btnGenerarPDF");
    let listarepuestos1=[];

    //imputs del formulario 

 

    GenerarPDF.addEventListener("click",(e)=>{
        e.preventDefault();
            let eNombreCliente= document.getElementById('nombreCliente');
            let eApellidoCliente= document.getElementById('apellidoCliente');
            let ePatente= document.getElementById('patente');
            let eModelo=document.getElementById('modelo');
            let eAnio= document.getElementById('anio');
            let eTituloReparacion=document.getElementById('TituloReparacion');
            let eDescripcion=document.getElementById('Descripcion');
            let eRepuestos=document.querySelectorAll('.liDeRepuestos');
            let eNombreGenerador=document.getElementById('nombreGenerador');

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

            //valores de textos 
            let opacidadTitulo = 0.7;
            let opacidadDatos = 1;
            let tamanioTitulos= 14;
            let tamanioDatos= 21;
            

            // Agrega contenido al PDF
            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(20, 20, 'Orden de trabajo');
            doc.text(100, 20, 'Genero la orden:  '+nombreGenerador);

            doc.text(100, 35, patente);
            
            doc.setFontSize(tamanioTitulos);
            doc.setOpacity(opacidadTitulo);
            doc.text(40, 35, `Patente: `);

            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(100, 45, modelo);
            
            doc.setFontSize(tamanioTitulos);
            doc.setOpacity(opacidadTitulo);
            doc.text(40, 45, `Modelo:`);

            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(100, 55, anio);

            doc.setFontSize(tamanioTitulos);
            doc.setOpacity(opacidadTitulo);
            doc.text(40, 55, `AÑO:`);

            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(20, 70, `CLIENTE`);

            doc.setFontSize(tamanioTitulos);
            doc.setOpacity(opacidadTitulo);
            doc.text(40, 85, `Nombre:`);

            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(100, 80, nombreCliente+" "+apellidoCliente);

            doc.text(20, 100, `DATOS DE REPARACION`);

            doc.setFontSize(tamanioTitulos);
            doc.setOpacity(opacidadTitulo);
            doc.text(40, 115, 'REPARACION:');

            doc.setFontSize(tamanioDatos);
            doc.setOpacity(opacidadDatos);
            doc.text(100, 110, tituloReparacion);
            doc.text(85, 130, 'Descripcion:');
            // doc.text(40, 145, descripcion);

            // Ajusta la posición y el ancho máximo para el texto largo
            let descripcionLines = doc.splitTextToSize(descripcion, 150);
            let descriptionY = 145;

            // Agrega cada línea de la descripción
            descripcionLines.forEach((line) => {
                doc.text(20, descriptionY, line);
                descriptionY += 10; // Ajusta el espaciado entre líneas según sea necesario
            });











            // Guarda o descarga el PDF
            doc.save('OrdenDeTrabajo.pdf');
    });
    btnAgregarRepuesto.addEventListener('click',(e)=>{
        e.preventDefault();
        let repuesto= RepuestoACambiar.value ;
        if(!repuesto ==''){
            listarepuestos1.push(repuesto);
            ListaULRepuestos.innerHTML=``;
                listarepuestos1.forEach(repuestoL => {
                    ListaULRepuestos.innerHTML+=`<div class="contenedorRepuesto"><li class="liDeRepuestos">`+repuestoL+`</li><button class="btnBorrarRepuesto" id="`+listarepuestos1.indexOf(repuestoL)+`">Borrar</button></div>`;
                });
                asignarEventosABotones();
        }
    })
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