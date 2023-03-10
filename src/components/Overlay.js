import styles from "./Overlay.module.css"
import {IoIosClose} from "react-icons/io"
import React, {useState} from "react";
import {Expansible} from "./Expansible";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {OverlayPage} from "./OverlayPage";
export function Overlay({addNew}){
    const [tipoExpansible, setTipoExpansible] = useState(null);
    const [nowActive, setNowActive] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const off = () => {
        document.getElementById("overlay").style.display = "none";
        if(nowActive){
            nowActive.className =styles.opcion
        }
        setNowActive(null)
        setTipoExpansible(null)
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            off();
        }
    });


    return(
        <div id ="overlay" className={styles.overlay}>
            <div className={styles.top}>
                <p className={styles.windowTitle}>Agregar Elemento</p>
                <IoIosClose className={styles.close} onClick={off} size={35}/>
            </div>
            <Expansible tipo={tipoExpansible}/>
            <MdKeyboardArrowRight  className={styles.rightArrow}
                                   onClick={() => setPageNumber(prevState => prevState<3?prevState+1:prevState)} size={50}/>
            <MdKeyboardArrowLeft  className={styles.leftArrow} size={50}
                                  onClick={() => setPageNumber(prevState => prevState>0?prevState-1:prevState)}/>
            <OverlayPage nowActive={nowActive} setNowActive={setNowActive} off={off}
                         setTipoExpansible={setTipoExpansible} pageNumber={pageNumber} addNew={addNew}/>



        </div>)
}