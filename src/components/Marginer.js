import styles from "./NavBar.module.css";
import {AiOutlineBorderLeft,AiOutlineBorderRight,AiOutlineBorderTop,AiOutlineBorderBottom} from "react-icons/ai";

export function Marginer({setMarginContainer, setMargin, selected}){
    const marginSelected = (e, side) =>{
        if(selected && e){
            const styleValue =  selected.styles[side];
            e.value = styleValue.substring(0, styleValue.length-2)
            return e;
        }
    }

    return(
        <div className={styles.subNavMarginContent} ref={node => setMarginContainer(node)}>
            <AiOutlineBorderLeft className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => setMargin(e,"marginLeft")} ref={e =>(marginSelected(e,"marginLeft"))}/>
            <AiOutlineBorderRight className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => setMargin(e,"marginRight")} ref={e =>(marginSelected(e,"marginRight"))}/>
            <AiOutlineBorderTop className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => setMargin(e,"marginTop")} ref={e =>(marginSelected(e,"marginTop"))}/>
            <AiOutlineBorderBottom className={styles.marginIcon} size={24}/>
            <input className={styles.marginInput} type="number" placeholder="px"
                   onChange={(e) => setMargin(e,"marginBottom")} ref={e =>(marginSelected(e,"marginBottom"))}/>
        </div>)
}