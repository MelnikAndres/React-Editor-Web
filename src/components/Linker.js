import styles from "./NavBar.module.css";
import React from "react";
import {BiLink} from "react-icons/bi";

export function Linker({setLink, isSelectedOnFocus, setInputNode, setLinkContainer}){
    return(
        <div className={styles.subNavContent} ref={(node) =>{setLinkContainer(node)}}>
            <input  id = "input-link" className={styles.linkReceiver} type="text"
                    placeholder={"Link destino"} onKeyDown={setLink} onFocus={isSelectedOnFocus}
                    ref={(node) =>{setInputNode(node)}}/>
            <BiLink className={styles.linkReceiverIcon} size={18}/>
        </div>
    )
}