import {LIST1, LIST1ITEM, LIST2, LIST3, LIST3ITEM1, LIST3ITEM2} from "../Utils/Constantes";
import {ElementoData} from "./ElementoData";
import {IoIosAdd} from "react-icons/io";
import styles from "./Elementos.module.css";
import {useState} from "react";
import {Item} from "./Item";
import {getStyleForEelement} from "../Utils/getStyleForEelement";

export function Lista({elemento,focusLost, setElementos, selectFunc}){
    const [input, setInput] = useState(null);
    const [habilitado, setHabilitado] = useState(true);
    const [contadorInterno, setContadorInterno] = useState(0);
    const [habilitadoStrong, setHabilitadoStrong] = useState(true)

    const divClick = (e) =>{
        if(!habilitado){
            setHabilitado(true)
            return;
        }
        if(!habilitadoStrong){
            setHabilitadoStrong(true)
            return;
        }
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
    const lostFocusList = (e) =>{
        input.classList.remove(styles.focused)
    }
    const addElement = () =>{
        let newItem;
        setElementos( (prevElementos) =>{
            newItem = new ElementoData(LIST1ITEM, "elemento", contadorInterno.toString() +"."+ elemento.id, getStyleForEelement(LIST1ITEM),null, new Map());
            elemento.items.set(newItem.id.toString(), newItem)
            setContadorInterno((prevCont) => prevCont+1);
            selectFunc(newItem)
            return prevElementos
        })
    }
    const addElementList3 = () =>{
        let newItem;
        let newDescription;
        setElementos( (prevElementos) =>{
            newItem = new ElementoData(LIST3ITEM1, "elemento", contadorInterno.toString() + "."+ elemento.id, getStyleForEelement(LIST3ITEM1),null, new Map());
            newDescription = new ElementoData(LIST3ITEM2, "- descripcion", (contadorInterno+1).toString() +"."+ elemento.id, getStyleForEelement(LIST3ITEM2),null, new Map());
            elemento.items.set(newItem.id.toString(), newItem)
            elemento.items.set(newDescription.id.toString(), newDescription);
            setContadorInterno((prevCont) => prevCont+2)
            selectFunc(newItem)
            return prevElementos
        })
    }
    const mapear = () => {
        let elementosReturn = [];
        let itemsRework = new Map()
        for (const item of elemento.items.values()) {
            if(!item.id){
                continue
            }
            itemsRework.set(item.id.toString(), item)
            elementosReturn.push(<Item key={item.id} elemento={item} selectFunc={selectFunc}
                                       focusLost={focusLost}  setHabilitado={setHabilitado}
                                       habilitado={habilitado} setHabilitadoStrong={setHabilitadoStrong}/>)
        }
        elemento.items = itemsRework;
        return elementosReturn;
    }

    if (elemento.tipo === LIST1){

        return (
            <div onClick={divClick} onContextMenu={divClick}>
                <ul id = {elemento.id} className="Lista Sin Orden" style={elemento.styles}
                    onBlur={lostFocusList} ref={(node) =>setInput(node)}>
                    {mapear()}
                    <IoIosAdd className={styles.listPlus} size={25} onClick={addElement}/>
                </ul>
            </div>
        );
    }
    if (elemento.tipo === LIST2){
        return (
            <div onClick={divClick} onContextMenu={divClick}>
                <ol id = {elemento.id} className="Lista Ordenada" style={elemento.styles}
                    onBlur={lostFocusList} ref={(node) =>setInput(node)}>
                    {mapear()}
                    <IoIosAdd className={styles.listPlus} size={25} onClick={addElement}/>

                </ol>
            </div>
        );
    }
    if (elemento.tipo === LIST3){

        return (
            <div onClick={divClick} onContextMenu={divClick}>
                <ol id = {elemento.id} className="Lista Descriptiva" style={elemento.styles}
                    onBlur={lostFocusList} ref={(node) =>setInput(node)}>
                    {mapear()}
                    <IoIosAdd className={styles.listPlus} size={25} onClick={addElementList3}/>
                </ol>
            </div>
        );
    }
}