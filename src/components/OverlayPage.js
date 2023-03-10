import {H1, H2, H3, P, LIST1, LIST2, LIST3, IMG} from "../Utils/Constantes";
import styles from "./Overlay.module.css";

export function OverlayPage({off, nowActive, setNowActive, setTipoExpansible, pageNumber, addNew}){
    const addNewAndOff = (event) =>{
        addNew(event)
        off()
    }

    const Hover = (e) =>{
        if (nowActive){
            nowActive.className = styles.opcion
        }
        e.target.className = styles.active
        setNowActive(e.target)
        setTipoExpansible(e.target.id)
    }

    if(pageNumber === 0){
        return(
            <div className={styles.page}>
                <button id ={H1} className={styles.opcion} onClick={(event) => addNewAndOff(event)} onMouseOver={Hover}>Titulo</button>
                <button id ={H2} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Subtitulo 2</button>
                <button id ={H3} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Subtitulo 3</button>
                <button id ={P} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Párrafo</button>
            </div>
        )
    }
    if(pageNumber === 1){
        return(
            <div className={styles.page}>
                <button id ={LIST1} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Lista 1</button>
                <button id ={LIST2} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Lista 2</button>
                <button id ={LIST3} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Lista 3</button>
                <button id ={IMG} className={styles.opcion} onClick={addNewAndOff} onMouseOver={Hover}>Imagen</button>
            </div>
        )
    }

}