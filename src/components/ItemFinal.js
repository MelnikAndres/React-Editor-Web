import {LIST1ITEM, LIST3ITEM1, LIST3ITEM2} from "../Utils/Constantes";
import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

export function ItemFinal({elemento}){
    const [input, setInput] = useState(null);
    const [reset, setReset] = useState(false)
    useEffect(() =>{
        if(input){
            elemento.reseter =  () =>{setReset(prevState => !prevState)}
        }
    },[elemento,input])

    if (elemento.tipo === LIST1ITEM){
        return (
            <a href={elemento.link} style={{textDecoration:"none"}}>
                <li style={elemento.styles} ref={node => setInput(node)}>{elemento.texto}</li></a>
        );
    }
    if (elemento.tipo === LIST3ITEM1){
        return (
            <a href={elemento.link} style={{textDecoration:"none"}}>
                <dt style={elemento.styles} ref={node => setInput(node)}>{elemento.texto}</dt></a>
        );
    }
    if (elemento.tipo === LIST3ITEM2){
        return (
            <a href={elemento.link} style={{textDecoration:"none"}}>
                <dd style={elemento.styles} ref={node => setInput(node)}>{elemento.texto}</dd></a>
        );
    }
}