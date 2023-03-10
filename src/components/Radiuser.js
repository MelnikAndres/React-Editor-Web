import styles from "./NavBar.module.css";
import {AiOutlineRadiusBottomleft, AiOutlineRadiusBottomright,
    AiOutlineRadiusUpleft, AiOutlineRadiusUpright
} from "react-icons/ai";
import React from "react";

export function Radiuser({setRadiusContainer, setRadius, selected}){
    const radiusSelected = (e, side) =>{
        if(selected && e){
            const styleValue =  selected.styles[side];
            e.value = styleValue.substring(0, styleValue.length-2)
            return e;
        }
    }
    const onChange =(e, side)=>{
        if(e.target.value <0){
            e.target.value = 0;
        }
        setRadius(e,side)
    }

    return(
        <div className={styles.subNavMarginContent} ref={node => setRadiusContainer(node)}>
            <AiOutlineRadiusUpleft className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => onChange(e,"borderTopLeftRadius")} ref={e =>(radiusSelected(e,"borderTopLeftRadius"))}/>
            <AiOutlineRadiusBottomleft className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => onChange(e,"borderBottomLeftRadius")} ref={e =>(radiusSelected(e,"borderBottomLeftRadius"))}/>
            <AiOutlineRadiusUpright className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => onChange(e,"borderTopRightRadius")} ref={e =>(radiusSelected(e,"borderTopRightRadius"))}/>
            <AiOutlineRadiusBottomright className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => onChange(e,"borderBottomRightRadius")} ref={e =>(radiusSelected(e,"borderBottomRightRadius"))}/>
        </div>)
}