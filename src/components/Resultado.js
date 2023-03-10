import {ElementoFinal} from "./ElementoFinal";

export function Resultado({elementos, setRef, bgColorGlobal}){
    const ele = () => {
        let elementosReturn = [];
        for (const elemento of elementos.values()) {
            elementosReturn.push(<ElementoFinal key={elemento.id + "idF"} elemento={elemento}
                                                elementos={elementos}/>)
        }
        return elementosReturn;
    }
    return(
        <div style={{backgroundColor:bgColorGlobal}} ref={node => setRef(node)} >
            {ele()}
        </div>
    )
}