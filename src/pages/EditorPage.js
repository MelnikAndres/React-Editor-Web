import {NavBar} from "../components/NavBar";
import styles from "../App.module.css";
import {Overlay} from "../components/Overlay";
import {Elementos} from "../components/Elementos";
import {IoIosAdd} from "react-icons/io";
import React, {useEffect, useState} from "react";
import {NewContextMenu} from "../components/NewContextMenu";

export function EditorPage({nowSelected, setElementos, setSelected, elementos, addNew,
                               contador, setContador, on, setRecargar,bgColorGlobal, setBgColorGlobal, isShown, coordinates}){

    const httpGetAsync = () =>
    {let theUrl = "https://script.google.com/macros/s/AKfycbxW9mBrQuS1LzrzEKHl7WXPfpNyf_DKadoKkE_Vp2O71_oYzwkjSDO5tzk2GV9rY0o8/exec";
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                console.log(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    return(
        <div>
            <NewContextMenu isShown={isShown} coordinates={coordinates}/>
            <NavBar selected={nowSelected} setter={setElementos} setSelect={setSelected}
                        elementos={elementos} setRecargar={setRecargar} setBgColorGlobal ={setBgColorGlobal}/>
            <div className={styles.header}>
                <h2 className={styles.headerContent}>Editor</h2>
            </div>
            <div  className={styles.father}>
                <section style={{backgroundColor: bgColorGlobal}} id="main-editor" className={styles.main}>
                    <Overlay addNew={addNew}/>
                    <Elementos elementos = {elementos} selectFunc = {setSelected} setElementos ={setElementos}
                               contador={contador} setContador={setContador}/>
                    <IoIosAdd className={styles.plus} size={30} onClick={on}/>
                </section>
            </div>
        </div>
    )
}