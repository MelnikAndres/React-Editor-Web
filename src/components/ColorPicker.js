import styles from "./ColorPicker.module.css";
import {useState} from "react";
import {MdImagesearchRoller, MdOutlineFormatColorText} from "react-icons/md";
import {AiOutlineBgColors} from "react-icons/ai";

export function ColorPicker({colorear, type}){
    const [inputRef, setInputRef] = useState(null);
    const setColor = (e) =>{
        colorear(e.target.value)
        document.getElementById("color-circle"+type).style.color =  e.target.value;
    }
    const onClickImg = () =>{
        inputRef.click()
    }
    if (type === "elementBg"){
        return(<div>
                <MdImagesearchRoller id={"color-circle"+ type} className={ styles.color } size={28} onClick={onClickImg}/>
                <input  className={styles.inputColor} type="color" onChange={setColor}
                        ref={node =>(setInputRef(node))}/>
            </div>
        )
    }
    if (type === "bg"){
        return(<div>
                <AiOutlineBgColors id={"color-circle"+ type} className={ styles.color } size={28} onClick={onClickImg}/>
                <input  className={styles.inputColor} type="color" onChange={setColor}
                        ref={node =>(setInputRef(node))}/>
            </div>
        )
    }
    return(<div>
            <MdOutlineFormatColorText id={"color-circle" + type} className={ styles.color } size={28} onClick={onClickImg}/>
            <input  className={styles.inputColor} type="color" onChange={setColor}
                    ref={node =>(setInputRef(node))}/>
        </div>
    )
}