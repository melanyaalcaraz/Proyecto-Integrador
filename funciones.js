/* ----------------------------------------Galeria-------------------------------------------------- */
var i=0;
var imagenes= new Array;
imagenes[0]= "../imagenes/evermore.webp" ;
imagenes[1]= "../imagenes/reputation.webp" ;
imagenes[2]= "../imagenes/red.webp";
imagenes[3]= "../imagenes/lover.jpg";
imagenes[4]= "../imagenes/fearless.webp";


var j=0;
var imag = new Array;
imag[0]= "../imagenes/evermoreback.webp" ;
imag[1]= "../imagenes/reputationback.png";
imag[2]= "../imagenes/redback.webp" ;
imag[3]= "../imagenes/loverback.jpg";
imag[4]= "../imagenes/fearlessback.webp";
function siguiente(){
    if(i==0){
        i=1;
    } else if(i==4){
        i=0;
    } else{
        i++;
    }
    
      document.getElementById("a-1").src = imagenes[i];

      if(j==0){
        j=1;
    } else if(j==4){
        j=0;
    } else{
        j++;
    }
    document.getElementById("al2").src = imag[j];
    
    
}
function anterior(){
    if(i==4){
        i=0;
    } 
     else{
        i++;
    }
    document.getElementById("a-1").src = imagenes[i];
    if (j==4){
        j=0;
    }else{
        j++;
    }
    document.getElementById("al2").src = imag[j];
}
/* -----------------------------------------------------Validacion de formulario-------------------------------------------------- */
function enviar(){
   /* Validacion Nombre*/
        var patronNom = /([A-Za-z]){3,}/;
        nombre= document.formulario.nombre;
        if(!patronNom.test(nombre.value.trim())){  
            alert("Debe ingresar un nombre con mas de tres caracteres");
            nombre.focus();
            return false;
        } 
    /* Validacion apellido*/
        var patronA = /([A-Za-z]){3,}/;
        apellido= document.formulario.apellido;
        if(!patronA.test(apellido.value.trim())){  
            alert("Debe ingresar un apellido con mas de tres caracteres");
            apellido.focus();
            return false;
        } 
    /* Validacion de correo */
     correo= document.formulario.correo;
     var patronC = /([A-Za-z])+(@)+([A-Za-z]){3,}/;
     
     if(!patronC.test(correo.value.trim())){
        alert("Debe ingresar un correo valido")
        correo.focus();
        return false;
     }
   /* Validacion Comentario*/
        comentario= document.formulario.comentario;
        var patron = /([A-Za-z]){3,}/;
        if(!patron.test(comentario.value.trim())){  
            alert("Debe ingresar un comentario");
            comentario.focus();
            return false;
        }
    /* Validacion de checkbox */
        favorito= document.formulario.favorito;
        alMenosuno=false;
        for(i=0; i<favorito.length;i++){
            if(favorito[i].checked){
                alMenosuno=true;
            }
        }
        if(!alMenosuno){
            alert("Debe seleccionar al menos un album");
            favorito[0].focus();
            return false;
        }

    /* Confirmar*/
        if(confirm("Desea confirmar ?")){
            alert("Gracias por dejar su comentario")
        }else{
            return false;
        }
    
     
  
  }
 

 

 
  
  
