import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import {EditorPage} from "./pages/EditorPage";
import {PreviewPage} from "./pages/PreviewPage";
import {ElementoData} from "./components/ElementoData";
import {getStyleForEelement} from "./Utils/getStyleForEelement";
import {DoblePage} from "./pages/DoblePage";

export function App(){
    const [elementos, setElementos] = useState(new Map())
    const [nowSelected, setSelected] = useState(null)
    const [contador, setContador] = useState(0)
    const [recargar, setRecargar] = useState(false);
    const [bgColorGlobal, setBgColorGlobal] = useState("#FFFFFF")
    const [isContextMenuSet, setIsContextMenuSet] = useState(false)
    const [isShown, setIsShown] = useState("none");
    const [coordinates, setCoordinates] =  useState({x:0, y:0});
    const [isSet, setIsSet] = useState(false)
    const showNow = (e) =>{
        e.preventDefault()
        setIsShown("block")
        setCoordinates({x:e.pageX, y:e.pageY})
    }
    const hideNow = () =>{
        setIsShown("none")
    }
    useEffect(() =>{
        if(!isSet){
            document.addEventListener("contextmenu",showNow)
            document.addEventListener("click",hideNow)
            setIsSet(true)
        }
    },[isSet])

    useEffect(() =>{
        if(!isContextMenuSet){
            setIsContextMenuSet(true)
            document.oncontextmenu = () =>false
        }
    },[isContextMenuSet])
    const on = () => {
        document.getElementById("overlay").style.display = "block";
    }
    const addNew = (e) => {
        setElementos((prevElementos) => {
            prevElementos.set(contador.toString(),new ElementoData(e.target.id, e.target.textContent,contador.toString(),getStyleForEelement(e.target.id),null, new Map()))
            return prevElementos
        })
        setContador((prevCont) => prevCont+1);
    }
    const selectFunc = (e) =>{
        if(typeof e === "function"){
            setSelected(prevState => e(prevState))
            return;
        }
        if( !e || !e.id){
            setSelected(null)
            return;
        }
        if(e.id.includes(".")){
            let ids = e.id.split(".")
            let elemento = elementos.get(ids[1])
            setSelected(elemento.items.get(e.id))
        }else{
            setSelected(elementos.get(e.id))
        }
    }
    return (
        <Router>
            <main>
                <Routes>
                    <Route exact path="/preview" element={<PreviewPage elementos={elementos} bgColorGlobal ={bgColorGlobal}/>}/>
                    <Route path="/editor" element={<EditorPage nowSelected={nowSelected} setElementos={setElementos} setSelected={selectFunc} elementos={elementos}
                                                               addNew={addNew} contador={contador} setContador={setContador} on={on} setRecargar={setRecargar}
                                                               bgColorGlobal ={bgColorGlobal} setBgColorGlobal={setBgColorGlobal} isShown={isShown} coordinates={coordinates}/>}/>
                    <Route path="/doble" element={<DoblePage nowSelected={nowSelected} setElementos={setElementos} setSelected={selectFunc} elementos={elementos}
                                                             addNew={addNew} contador={contador} setContador={setContador} on={on} setRecargar={setRecargar}
                                                             bgColorGlobal ={bgColorGlobal} setBgColorGlobal={setBgColorGlobal} isShown={isShown} coordinates={coordinates}/>}/>
                    <Route path="*" element={<Navigate replace to="/editor" />} />
                </Routes>
            </main>
        </Router>
        );
}