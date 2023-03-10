import {Elemento} from "./Elemento"
import {useState} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {ITEMS} from "../Utils/Constantes";
import styles from "./Elementos.module.css"

export function Elementos({elementos, selectFunc, setElementos, contador, setContador}) {
    const [dragged, setDragged] = useState(null);

    const drop = (result) =>{
        const {source, destination} = result;
        if(!destination){
            return;
        }
        if(source.index === destination.index){
            return;
        }
        setElementos((prevElementos) =>{
            let elementosArray = Array.from(prevElementos.values())
            let a = elementosArray[source.index];
            let b = elementosArray[destination.index];
            let auxId = a.id;
            a.id = b.id
            b.id = auxId
            elementosArray.splice(source.index,1)
            elementosArray.splice(destination.index,0,a)
            const newElementos = new Map(
                elementosArray.map(object => {
                    return [object.id, object];
                }),
            );
            return newElementos;
        })

    }

    const mapear = () => {
        let elementosReturn = [];
        let elementosArray = Array.from(elementos.values())
        for (let i = 0; i<elementosArray.length;i++) {
            const elemento = elementosArray[i];
            if(ITEMS.includes(elemento.tipo)){
                continue
            }
            elementosReturn.push(
                <Draggable key={elemento.id + "drag"} draggableId={elemento.id.toString()} index={i}>
                    {(draggableProvided) => (
                        <div className={styles.draggable} {...draggableProvided.draggableProps}
                             ref={draggableProvided.innerRef}
                             {...draggableProvided.dragHandleProps}>
                            <Elemento
                                      key={elemento.id} elemento={elemento} elementos={elementos}
                                      selectFunc={selectFunc} setElementos={setElementos}
                                      contador={contador} setContador={setContador} dragged={dragged}
                                      setDragged={setDragged} drop={drop}/>
                        </div>

                    )}
                </Draggable>
            )
        }
        return elementosReturn;
    }

    return (
        <DragDropContext onDragEnd={result => drop(result)}>
            <Droppable droppableId={"elementos"}>
                {(droppableProvided) =>
                    <div {...droppableProvided.droppableProps}
                                             ref={droppableProvided.innerRef}>
                    {mapear()}
                    {droppableProvided.placeholder}
                </div>}
            </Droppable>
        </DragDropContext>
        );
}