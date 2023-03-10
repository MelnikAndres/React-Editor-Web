import React, {useState} from "react";
import styles from "./Elementos.module.css";

export function Imagen({elemento, selectFunc, focusLost}){
    const [input, setInput] = useState(null)
    const [reset, setReset] = useState(false)

    const handleChange = (e) => {
        elemento.setImagen(e.target.files[0])
        setReset(prevState => !prevState)
    }
    const divClick = (e) =>{
        input.focus();
        selectFunc(elemento)
    }
    const clicked = (e) =>{
        input.focus();
        selectFunc((prevState) => {
            if(!prevState){
                return elemento;
            }
            let selectedElement = document.getElementById(prevState.id.toString())
            if(!selectedElement){
                return prevState;
            }
            selectedElement.classList.remove(styles.focused)
            selectedElement.blur()
            return elemento
        });
        input.classList.add(styles.focused)
        input.focus();
    }
    return(
        <div onClick={divClick}>
            {!elemento.imagen?
            <input id = {elemento.id} style={elemento.styles}
                   onClick={clicked} onBlur={focusLost}
                   type={"file"} onChange={handleChange} accept="image/png, image/gif, image/jpeg" ref={node => setInput(node)}/>:
            <img id = {elemento.id} style={elemento.styles}
                 onClick={clicked} onBlur={focusLost}
                 src={elemento.imagen} alt="" ref={node => setInput(node)}/>}
        </div>)
}