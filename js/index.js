"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let btnAgregarRepuesto= document.getElementById("btnAgregarRepuesto");
    let ListaULRepuestos= document.getElementById("ListaRepuestos");
    let RepuestoACambiar= document.getElementById("RepuestoACambiar");
   

    

    let listarepuestos1=[];
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