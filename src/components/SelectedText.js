import styles from "./NavBar.module.css";
import React from "react";

export function SelectedText({selected}){
    const getText = ()=>{
        if(selected && selected.texto){
            return (selected.texto.length<40
                ? "Seleccionado -> " + selected.texto
                : "Seleccionado -> " + selected.texto.substring(0,40)+ "...")
        }else{
            return "Ningun elemento seleccionado"
        }
    }
    return(
        <p className={styles.selectedText}>{getText()}</p>
    );
}