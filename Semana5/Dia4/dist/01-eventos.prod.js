"use strict";var boton1=document.getElementById("boton1"),boton2=document.getElementById("boton2"),boton3=document.getElementById("boton3"),linkTema=document.getElementById("colorTema"),handleClickBoton=function(o){console.log(o),console.log(o.target),"boton1"===o.target.getAttribute("id")?console.log("Click en el boton 1"):console.log("Click en el boton 2")};boton1.onclick=handleClickBoton,boton2.onclick=handleClickBoton,boton3.onclick=function(){"./css/dark.css"===linkTema.getAttribute("href")?linkTema.setAttribute("href","./css/light.css"):linkTema.setAttribute("href","./css/dark.css")};