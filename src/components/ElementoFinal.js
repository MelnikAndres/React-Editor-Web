import {H1, H2, H3, IMG, LIST1, LIST2, LIST3, P} from "../Utils/Constantes";
import {ItemFinal} from "./ItemFinal";
import {useEffect, useState} from "react";

export function ElementoFinal({elemento}){
    const [input, setInput] = useState(null)
    const [reset, setReset] = useState(false)

    useEffect(() =>{
        if(input){
            elemento.reseter =  () =>{setReset(prevState => !prevState)}
        }

    },[elemento,input])

    const click = () =>{
        return
    }

    if (elemento.tipo === H1){
        return (<a href={elemento.link} style={{textDecoration:"none"}}><h1 id="hola" onClick={click} style={elemento.styles}
                     ref={node => setInput(node)}>{elemento.texto}</h1></a>
        );
    }
    if (elemento.tipo === H2){
        return (<a href={elemento.link} style={{textDecoration:"none"}}>
                <h2 style={elemento.styles}
                    ref={node => setInput(node)}>{elemento.texto}</h2></a>
        );
    }
    if (elemento.tipo === H3){
        return (<a href={elemento.link} style={{textDecoration:"none"}}>
                <h3 style={elemento.styles} ref={node => setInput(node)}>
                {elemento.texto}</h3></a>
        );
    }
    if (elemento.tipo === P){
        return (<a href={elemento.link} style={{textDecoration:"none"}}>
                <p style={elemento.styles} ref={node => setInput(node)}>{elemento.texto}</p></a>
        );
    }
    const mapear = () => {
        let elementosReturn = [];
        for (const item of elemento.items.values()) {
            elementosReturn.push(<ItemFinal key={item.id + "id"} elemento={item}/>)
        }
        return elementosReturn;
    }

    if(elemento.tipo === LIST1){
        return(
                <ul style={elemento.styles} ref={node => setInput(node)}>
                    {mapear()}
                </ul>
        )
    }
    if(elemento.tipo === LIST2){
        return(
            <ol style={elemento.styles} ref={node => setInput(node)}>
                {mapear()}
            </ol>
        )
    }
    if(elemento.tipo === LIST3){
        return(
            <dl style={elemento.styles} ref={node => setInput(node)}>
                {mapear()}
            </dl>
        )
    }
    if(elemento.tipo === IMG){
        return(
                <a href={elemento.link} style={{textDecoration:"none"}}>
                    <img style={elemento.styles} src={elemento.imagen} alt="" ref={node => setInput(node)}/></a>
        )
    }
}