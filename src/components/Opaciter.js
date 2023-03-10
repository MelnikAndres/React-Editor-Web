import styles from "./NavBar.module.css";
import React from "react";
import {RxText} from "react-icons/rx";
import {MdOpacity,MdOutlineImagesearchRoller} from "react-icons/md";

export function Opaciter({setOpacityContainer, setOpacity, selected}){
    const opacitySelected = (e, tipo) =>{
        if(selected && e){
            let styleValue;
            if(tipo === "color"){
                let color = selected.styles.color
                styleValue =  color.substring(color.length-2,color.length);
                e.value = (Math.floor(parseInt(styleValue, 16)/51)*20);
            }else if (tipo ==="backgroundColor"){
                let color = selected.styles.backgroundColor
                styleValue =  color.substring(color.length-2,color.length);
                e.value = (Math.floor(parseInt(styleValue, 16)/51)*20);
            }else{
                styleValue = selected.styles.opacity;
                e.value = styleValue*100
            }
            return e;
        }
    }
    const onChange =(e, tipo)=>{
        if(e.target.value <0){
            e.target.value = 0;
        }
        if (e.target.value > 100){
            e.target.value = 100;
        }
        if (tipo === "opacity"){
            setOpacity(e.target.value,tipo)
        }else{
            setOpacity(Math.floor(e.target.value*255/100),tipo)
        }
    }

    return(
        <div className={styles.subNavMarginContent} ref={node => setOpacityContainer(node)}>
            <RxText className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="%"
                   onChange={(e) => onChange(e,"color")} ref={e =>(opacitySelected(e,"color"))}/>
            <MdOutlineImagesearchRoller className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="%"
                   onChange={(e) => onChange(e,"backgroundColor")} ref={e =>(opacitySelected(e,"backgroundColor"))}/>
            <MdOpacity className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="%"
                   onChange={(e) => onChange(e,"opacity")} ref={e =>(opacitySelected(e,"opacity"))}/>
        </div>)
}