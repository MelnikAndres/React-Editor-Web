import styles from "./NavBar.module.css";
import React, {useState} from "react";
import {BsArrowDownShort, BsArrowRightShort} from "react-icons/bs";
import {HiOutlineArrowsExpand} from "react-icons/hi";
import {MdHdrStrong} from "react-icons/md";
import {CgColorPicker} from "react-icons/cg";

export function Shadower({setShadowContainer, setShadow, selected}){
    const [left, setLeft] = useState(0);
    const [down, setDown] = useState(0);
    const [expand, setExpand] = useState(0);
    const [intense, setIntense] = useState(0);
    const [color, setColor] = useState("gray");


    const shadowSelected = (e, index) =>{
        if(selected && e && index !== 4){
            const styleValue = selected.styles["boxShadow"].split(" ");
            e.value = styleValue[index].substring(0, styleValue[index].length-2)
        }
        if(index ===0){
            setLeft(e)
        }
        if(index ===1){
            setDown(e)
        }
        if(index ===2){
            setExpand(e)
        }
        if(index ===3){
            setIntense(e)
        }
        if(index===4){
            setColor(e)
        }
    }
    const setter = () =>{
        const newValue = left.value + "px " + down.value + "px " + expand.value + "px " + intense.value + "px " +  color.value
        setShadow(newValue);
    }
    return(
        <div className={styles.subNavMarginContent} ref={node => setShadowContainer(node)}>
            <BsArrowRightShort className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={setter} ref={e =>(shadowSelected(e,0))}/>
            <BsArrowDownShort className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={setter} ref={e =>(shadowSelected(e,1))}/>
            <HiOutlineArrowsExpand className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={setter} ref={e =>(shadowSelected(e,2))}/>
            <MdHdrStrong className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={setter} ref={e =>(shadowSelected(e,3))}/>
            <CgColorPicker className={styles.marginIcon} size={24}/>
            <input className={styles.shadowInputColor} type="color" placeholder="color"
                   onChange={setter} ref={e =>(shadowSelected(e,4))}/>

        </div>)
}