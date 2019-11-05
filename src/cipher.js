window.cipher = {
codificar : ( desplazamiento , mensajeACifrar ) => { 
    let mensajeCifrado =  " " ; 
    for ( let i =  0 ; i <  mensajeACifrar . length ; i ++ ) { 
      let resultado = ( mensajeACifrar . charCodeAt (i) -  65  + desplazamiento) %  26  +  65 ;
      mensajeCifrado + =  Cadena . fromCharCode (resultado); 
    }
    return mensajeCifrado;

  },

  decode : ( desplazamiento , mensajeADescifrar ) => { 
    let mensajeDescifrado =  " " ; 
    for ( let i =  0 ; i <  mensajeADescifrar . length ; i ++ ) { 
      let resultado = ( mensajeADescifrar . charCodeAt (i) -  90  - userKey) %  26  +  90 ; 
      mensajeDescifrado + =  Cadena . fromCharCode (resultado); 

    }
    volver mensajeDescifrado; 
};
