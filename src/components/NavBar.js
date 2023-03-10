import styles from "./NavBar.module.css"
import {ColorPicker} from "./ColorPicker";
import React, {useState} from "react";
import {IoMdTrash} from "react-icons/io";
import {BiLink} from "react-icons/bi"
import {SelectedText} from "./SelectedText";
import {Linker} from "./Linker";
import {Link} from "react-router-dom";
import {IoMdEye} from "react-icons/io";
import {ITEMS} from "../Utils/Constantes";
import {TbBoxMargin} from "react-icons/tb";
import {Marginer} from "./Marginer";
import {RiAlignCenter, RiAlignLeft} from "react-icons/ri";
import {Radiuser} from "./Radiuser";
import {AiOutlineColumnWidth, AiOutlineDownload, AiOutlineRadiusUpleft} from "react-icons/ai";
import {Shadower} from "./Shadower";
import {MdOpacity, MdOutlineCollections} from "react-icons/md";
import {Sizer} from "./Sizer";
import {Opaciter} from "./Opaciter";
export function NavBar({selected, setter, setSelect, elementos, setRecargar, setBgColorGlobal}){
    const [linkContainer, setLinkContainer] = useState(null);
    const [inputNode, setInputNode] = useState(null);
    const [marginContainer, setMarginContainer] = useState(null);
    const [subNavBarOn, setSubNavBarOn] = useState(null)
    const [radiusContainer, setRadiusContainer] = useState(null);
    const [shadowContainer, setShadowContainer] = useState(null);
    const [sizeContainer, setSizeContainer] = useState(null);
    const [opacityContainer, setOpacityContainer] = useState(null);


    const colorear = (newColor) =>{
        if (!selected){
            return;
        }
        selected.setColor(newColor)
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.style.color = selected.styles.color;
        selectedElement.focus();
    }
    const colorearBg = (newColor) =>{
        if (!selected){
            return;
        }
        selected.setBgColor(newColor)
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.style.backgroundColor = selected.styles.backgroundColor;
        selectedElement.focus();
    }
    const borrar = () =>{
        if(!selected){
            return;
        }
        setter((prevElementos) => {
            if(ITEMS.includes(selected.tipo)){
                selected.id = null;
            }else{
                prevElementos.delete(selected.id.toString())
            }
            setRecargar(prevState => !prevState)
            return prevElementos})
        setSelect(null)
    }

    const setLink = (e)=>{
        if(!selected){
            return;
        }
        if(e.key === 'Enter'){
            setter((prevElementos) => {
                    if (!e.target.value.includes("https://" || "http://") && e.target.value.includes(".com"||".net")) {
                        selected.setLink("https://" + e.target.value)
                    } else {
                        selected.setLink(e.target.value)
                    }
                return prevElementos;
                }
            )
            inputNode.blur()
        }
    }

    const isSelectedOnFocus = (e) =>{
        if(!selected){
            inputNode.placeholder = "NO HAY ELEMENTO SELECCIONADO"
            return;
        }
        inputNode.placeholder = "Link Destino"
    }

    const displayLink = () =>{
        if(!linkContainer){
            return;
        }
        if(linkContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            linkContainer.style.display ="flex"
            if (!inputNode){
                return;
            }
            setSubNavBarOn(linkContainer)
            inputNode.focus()
        }else{
            setSubNavBarOn(null)
            linkContainer.style.display ="";
        }
    }

    const displayMarginer = () =>{
        if(!marginContainer){
            return;
        }
        if(marginContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            setSubNavBarOn(marginContainer)
            marginContainer.style.display ="flex"
        }else{
            setSubNavBarOn(null)
            marginContainer.style.display ="";
        }
    }
    const displayRadiuser = () =>{
        if(!radiusContainer){
            return;
        }
        if(radiusContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            setSubNavBarOn(radiusContainer)
            radiusContainer.style.display ="flex"
        }else{
            setSubNavBarOn(null)
            radiusContainer.style.display ="";
        }
    }
    const displayShadow = () =>{
        if(!shadowContainer){
            return;
        }
        if(shadowContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            setSubNavBarOn(shadowContainer)
            shadowContainer.style.display ="flex"
        }else{
            setSubNavBarOn(null)
            shadowContainer.style.display ="";
        }
    }
    const displaySizer = () =>{
        if(!sizeContainer){
            return;
        }
        if(sizeContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            setSubNavBarOn(sizeContainer)
            sizeContainer.style.display ="flex"
        }else{
            setSubNavBarOn(null)
            sizeContainer.style.display ="";
        }
    }
    const displayOpaciter = () =>{
        if(!opacityContainer){
            return;
        }
        if(opacityContainer.style.display === ""){
            if(subNavBarOn){
                subNavBarOn.style.display = ""
            }
            setSubNavBarOn(opacityContainer)
            opacityContainer.style.display ="flex"
        }else{
            setSubNavBarOn(null)
            opacityContainer.style.display ="";
        }
    }

    const changeAlignment = () =>{
        if(!selected){
            return;
        }
        setter(prevElementos =>{
            selected.changeAlign()
            setRecargar(prevState => !prevState)
            return prevElementos;
        })
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        selectedElement.style.left = selected.styles.left
        selectedElement.style.transform = selected.styles.transform
        selectedElement.style.textAlign = selected.styles.textAlign
    }

    const setMargin = (e,side) =>{
        if(!selected){
            return
        }
        setter(prevElementos =>{
            selected.changeMargin(side,e.target.value)
            return prevElementos;
        })
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        selectedElement.style.marginLeft = selected.styles.marginLeft
        selectedElement.style.marginRight = selected.styles.marginRight
        selectedElement.style.marginTop = selected.styles.marginTop
        selectedElement.style.marginBottom = selected.styles.marginBottom
    }
    const setRadius = (e,side) =>{
        if(!selected){
            return
        }
        setter(prevElementos =>{
            selected.changeRadius(side,e.target.value)
            return prevElementos;
        })
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        selectedElement.style.borderTopLeftRadius = selected.styles.borderTopLeftRadius
        selectedElement.style.borderTopRightRadius = selected.styles.borderTopRightRadius
        selectedElement.style.borderBottomLeftRadius = selected.styles.borderBottomLeftRadius
        selectedElement.style.borderBottomRightRadius = selected.styles.borderBottomRightRadius
    }
    const setSize = (e,side) =>{
        if(!selected){
            return
        }
        setter(prevElementos =>{
            selected.changeSize(side,e.target.value)
            return prevElementos;
        })
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        selectedElement.style.width = selected.styles.width
        selectedElement.style.height = selected.styles.height
    }
    const setShadow = (newValue) =>{
        setter(prevElementos =>{
            selected.changeShadow(newValue)
            return prevElementos;
        })
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        selectedElement.style.boxShadow = selected.styles.boxShadow
    }
    const setOpacity = (newValue, tipo) =>{
        let selectedElement = document.getElementById(selected.id.toString())
        selectedElement.focus();
        if(tipo ==="opacity"){
            setter(prevElementos =>{
                selected.changeOpacity(newValue)
                return prevElementos;
            })
            selectedElement.style.opacity = selected.styles.opacity
        }else{
            setter(prevElementos =>{
                selected.changeOpacityField(newValue, tipo)
                return prevElementos;
            })
            selectedElement.style.color = selected.styles.color
            selectedElement.style.backgroundColor = selected.styles.backgroundColor
        }

    }

    const alignIcon = () =>{
        if(!selected){
            return <RiAlignLeft className={styles.iconoRegular} size={28}/>;
        }
        if(selected.styles.left === "0"){
            return <RiAlignCenter className={styles.iconoRegular} size={28}/>
        }else{
            return <RiAlignLeft className={styles.iconoRegular} size={28}/>
        }
    }

    const changeBgColor = (newColor) =>{
        setBgColorGlobal(newColor)
    }

    return(
        <div className={styles.navbar}>
            <button className={styles.prueba} ><ColorPicker colorear={colorear} type={"texto"}/></button>
            <button className={styles.prueba}><ColorPicker colorear={colorearBg} type={"elementBg"}/></button>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displayOpaciter}><MdOpacity className={styles.iconoSubNav} size={28}/></button>
                <Opaciter setOpacityContainer={setOpacityContainer} setOpacity={setOpacity} selected={selected}/>
            </div>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displayLink} ><BiLink className={styles.iconoSubNav} size={28}/></button>
                <Linker setLink = {setLink} isSelectedOnFocus = {isSelectedOnFocus}
                        setInputNode={setInputNode} setLinkContainer ={setLinkContainer}/>
            </div>
            <button className={styles.prueba} onClick={changeAlignment}>{alignIcon()}</button>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displayMarginer}><TbBoxMargin className={styles.iconoSubNav} size={28}/></button>
                <Marginer setMarginContainer={setMarginContainer} setMargin={setMargin} selected={selected}/>
            </div>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displayShadow}><MdOutlineCollections className={styles.iconoSubNav} size={28}/></button>
                <Shadower setShadowContainer={setShadowContainer} setShadow={setShadow} selected={selected}/>
            </div>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displayRadiuser}><AiOutlineRadiusUpleft className={styles.iconoSubNav} size={28}/></button>
                <Radiuser setRadiusContainer={setRadiusContainer} setRadius={setRadius} selected={selected}/>
            </div>
            <div className={styles.subNav}>
                <button className={styles.prueba} onClick={displaySizer}><AiOutlineColumnWidth className={styles.iconoSubNav} size={28}/></button>
                <Sizer setSizeContainer={setSizeContainer} setSize={setSize} selected={selected}/>
            </div>
            <button className={styles.prueba} onClick={borrar}><IoMdTrash className={styles.iconoRegular} size={28}/></button>
            <SelectedText id="selectedText" selected={selected}/>
            <Link to="/preview"><button className={styles.prueba + " " + styles.preview}><IoMdEye className={styles.previewIcon} size={28}/></button></Link>
            <button className={styles.prueba + " " + styles.bgColorear}><ColorPicker colorear={changeBgColor} type={"bg"}/></button>
        </div>
    );
}