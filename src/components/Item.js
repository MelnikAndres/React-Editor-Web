import {LIST1ITEM, LIST3ITEM1, LIST3ITEM2} from "../Utils/Constantes";
import {useState} from "react";
import styles from "./Elementos.module.css";

export function Item({elemento, selectFunc, focusLost,setHabilitado, setHabilitadoStrong}){
    const [input, setInput] = useState(null)

    if(input && !elemento.linkListener){
        elemento.linkListener =  () =>{
            input.style.color = "darkcyan"
            input.style.textDecoration = "underline"}
    }

    const clicked = (e) =>{
        input.contentEditable = true;
        input.focus();
        setHabilitado(false)
        setHabilitadoStrong(false)
        selectFunc(prevState =>{
            if(prevState){
                let selectedElement = document.getElementById(prevState.id.toString())
                selectedElement.classList.remove(styles.focused)
            }
            return elemento
        });
    }
    const rightClick = () =>{
        input.click()
    }

    const changed = (e) =>{
        elemento.setText(e.target.textContent)
    }

    if (elemento.tipo === LIST1ITEM){
        return (
            <li id = {elemento.id} style={elemento.styles}
                onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => setInput(node)}
                onInput={changed}>{elemento.texto}</li>
        );
    }
    if (elemento.tipo === LIST3ITEM1){
        return (
            <dt id = {elemento.id} style={elemento.styles}
                onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => setInput(node)}
                onInput={changed}>{elemento.texto}</dt>
        );
    }
    if (elemento.tipo === LIST3ITEM2){
        return (
            <dd id = {elemento.id} style={elemento.styles}
                onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => setInput(node)}
                onInput={changed}>{elemento.texto}</dd>
        );
    }
}