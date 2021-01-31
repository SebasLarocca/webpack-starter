
import "../css/componentes.css";

export const saludar = ( nombre ) => {

    console.log(`creando etiqueta h1`);
    const etiquetah1 = document.createElement("h1");
    etiquetah1.innerText = `Hola, ${nombre}, hello Sebas`;
    document.body.append( etiquetah1 );
    
    };

