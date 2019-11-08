window.cipher = {
    encode : ( desplazamiento , mensajeACifrar )=> { 
      let mensajeCifrado =  " " ; 
      let mensajeMayusculas = mensajeACifrar.toUpperCase();
      for (i=0 ; i <= mensajeMayusculas.length ; i++ ) { 
      let nuevoMensaje = ( (mensajeMayusculas.charCodeAt(i)) - 65+ desplazamiento) % 26 + 65;
      mensajeCifrado += String.fromCharCode(nuevoMensaje); 
    }
    return mensajeCifrado;

  },

   decode : ( desplazamiento , mensajeADescifrar ) => { 
    let mensajeDescifrado =  " " ; 
    for (i =  0 ; i < mensajeADescifrar.length ; i++ ) { 
      let nuevoMensaje = (mensajeADescifrar.charCodeAt (i)-90-desplazamiento) % 26 + 90; 
      mensajeDescifrado += String.fromCharCode(nuevoMensaje); 
    }
    return mensajeDescifrado.toUpperCase();
     }
  }
