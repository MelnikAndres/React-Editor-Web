import styles from "./NavBar.module.css";
import {CgArrowsShrinkH, CgArrowsShrinkV} from "react-icons/cg";
import {BsFillCircleFill} from "react-icons/bs";

export function Sizer({setSizeContainer, setSize, selected}){
    const sizeSelected = (e, tipo) =>{
        if(selected && e){
            const styleValue =  selected.styles[tipo];
            if(styleValue === "fit-content"){
                e.value = 0;
            }else{
                e.value = styleValue.substring(0, styleValue.length-2)
            }
            return e;
        }
    }
    const onChange =(e, side)=>{
        if(e.target.value < 0){
            e.target.value = 0;
        }
        setSize(e,side)
    }
    const onClick = (e, side) =>{
        document.getElementById("sizer-" + side).value=0;
        setSize(e,side)
    }

    return(
        <div className={styles.subNavMarginContent} ref={node => setSizeContainer(node)}>
            <CgArrowsShrinkH className={styles.marginIcon} size={24}/>
            <button className={styles.botonSize} value="fit-content" onClick={e => onClick(e, "width")}>
                <BsFillCircleFill className={styles.iconoSize} size={10}/></button>
            <input className={styles.marginInput} id="sizer-width" type="number" placeholder="px"
                   onChange={(e) => onChange(e,"width")} ref={e =>(sizeSelected(e,"width"))}/>
            <CgArrowsShrinkV className={styles.marginIcon} size={24}/>
            <button className={styles.botonSize} value="fit-content" onClick={e => onClick(e, "height")}>
                <BsFillCircleFill  className={styles.iconoSize} size={10}/></button>
            <input className={styles.marginInput} id="sizer-height" type="number" placeholder="px"
                   onChange={(e) => onChange(e,"height")} ref={e =>(sizeSelected(e,"height"))}/>
        </div>)
}