import {H1, H2, H3, P} from "../Utils/Constantes";
import {useEffect, useState} from "react";
import styles from "./Elementos.module.css"

export function Basico({elemento,focusLost, selectFunc}){
    const [input, setInput] = useState(null);

    useEffect(() =>{
            elemento.linkListener =  () =>{
                input.style.color = "darkcyan"
                input.style.textDecoration = "underline"}
    },[elemento,input])

    const divClick = (e) =>{
        input.contentEditable = true;
        input.focus();
        selectFunc(elemento)
    }

    const clicked = (e) =>{
        input.focus();
        selectFunc((prevState) => {
            if(prevState){
                let selectedElement = document.getElementById(prevState.id.toString())
                selectedElement.classList.remove(styles.focused)
            }
            return elemento;
        });
        input.contentEditable = true;
    }
    const rightClick = () =>{
        input.click()
    }
    const changed = (e) =>{
        elemento.setText(input.textContent)
    }

    if (elemento.tipo === H1){
        return (<div  onClick={divClick}>
                <h1  id = {elemento.id} style={elemento.styles}
                     onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => (setInput(node))}
                     onInput={changed}>{elemento.texto}</h1>
            </div>
        );
    }
    if (elemento.tipo === H2){
        return (
            <div  onClick={divClick}>
                <h2 id = {elemento.id} style={elemento.styles}
                    onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => (setInput(node))}
                    onInput={changed}>{elemento.texto}</h2>
            </div>
        );
    }
    if (elemento.tipo === H3){
        return (
            <div  onClick={divClick}>
                <h3 id = {elemento.id} style={elemento.styles}
                    onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => (setInput(node))}
                    onInput={changed}>{elemento.texto}</h3>
            </div>
        );
    }
    if (elemento.tipo === P){
        return (
            <div  onClick={divClick}>
                <p id = {elemento.id} style={elemento.styles}
                   onClick={clicked} onContextMenu={rightClick} onBlur={focusLost} ref={node => (setInput(node))}
                   onInput={changed}>{elemento.texto}</p>
            </div>
        );
    }

}