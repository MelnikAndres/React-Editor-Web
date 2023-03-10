import {BASICOS, IMG, LISTAS} from "../Utils/Constantes";
import {Basico} from "./Basico";
import {Lista} from "./Lista";
import {Imagen} from "./Imagen";

export function Elemento({elemento, selectFunc,
                             setElementos, elementos, contador, setContador}){
    const focusLost = (e)=>{
        e.target.contentEditable = false;
    }

    if (BASICOS.includes(elemento.tipo)){
        return <Basico elemento={elemento} focusLost={focusLost}
                        selectFunc={selectFunc} elementos={elementos} setElementos={setElementos} />
    }
    if(LISTAS.includes(elemento.tipo)){
       return <Lista elemento={elemento} focusLost={focusLost}
       setElementos={setElementos} contador={contador} setContador={setContador} selectFunc={selectFunc}
       elementos={elementos}/>
    }
    if(elemento.tipo === IMG){
        return <Imagen elemento={elemento} focusLost={focusLost} selectFunc={selectFunc}
                       elementos={elementos} setElementos={setElementos}></Imagen>
    }

}