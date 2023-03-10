import {NavBar} from "../components/NavBar";
import {Overlay} from "../components/Overlay";
import {Elementos} from "../components/Elementos";
import {IoIosAdd} from "react-icons/io";
import {Resultado} from "../components/Resultado";
import styles from "../App.module.css";
import {useState} from "react";
import stylesPrev from "./PreviewPage.module.css";
import {AiOutlineDownload} from "react-icons/ai";

export function DoblePage({nowSelected, setElementos, setSelected,
                              elementos, addNew, contador, setContador,
                              on, setRecargar, bgColorGlobal, setBgColorGlobal, isShown, coordinates}){
    const [ref, setRef] = useState(null);

    const createHTMLFile = (fileName, html) => {
        console.log(fileName)
        return new File([html], fileName, {type: 'text/html'});
    }
    const saveFile = (file)=> {
        console.log(file)
        const oUrl = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.style.setProperty('display', 'none');
        a.href = oUrl;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        // 10s is arbitrary, but is more than enough for the user to download the HTML
        // even if they're preseneted with a download confirmation prompt by their
        // browser:
        const delay = 10_000;
        // the important part is that you clean up the object URL so that you don't
        // leak memory for every click (since they aren't garbage collected)
        setTimeout(() => URL.revokeObjectURL(oUrl), delay);
    };

    const handleClick = () => {
        const div = ref;
        if (!div) return;
        const html = div.outerHTML;
        const fileName = `Resumen.html`;
        saveFile(createHTMLFile(fileName, html));
    }

    return(
        <div>
            <NavBar selected={nowSelected} setter={setElementos} setSelect={setSelected}
                    elementos={elementos} setRecargar={setRecargar} setBgColorGlobal = {setBgColorGlobal} isShown={isShown}
            coordinates={coordinates}/>
            <div className={styles.header}>
                <h2 className={styles.headerContent}>Editor</h2>
            </div>
            <div className={styles.father}>
                <div style={{backgroundColor:bgColorGlobal}} id="main-editor-doble" className={styles.main}>
                    <Overlay addNew={addNew}/>
                    <Elementos elementos = {elementos} selectFunc = {setSelected} setElementos ={setElementos}
                               contador={contador} setContador={setContador}/>
                    <IoIosAdd className={styles.plus} size={30} onClick={on}/>
                </div>
            </div>
            <div className={styles.header}>
                <h2 className={styles.headerContent}>Preview</h2>
            </div>
            <div className={styles.father}>
                <div id="main-preview-doble" className={styles.main}>
                    <Resultado elementos={elementos} setRef={setRef} bgColorGlobal={bgColorGlobal}/>
                </div>
            </div>
            <button className={stylesPrev.downloadButton} onClick={handleClick}><AiOutlineDownload className={stylesPrev.downloadIcon} size={40}/></button>
        </div>
    )
}