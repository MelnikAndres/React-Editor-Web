import styles from "../App.module.css";
import {Resultado} from "../components/Resultado";
import React, {useState} from "react";
import {FaRegEdit} from "react-icons/fa"
import {FiColumns} from "react-icons/fi"
import {Link} from "react-router-dom";
import stylesPrev from "./PreviewPage.module.css"
import {AiOutlineDownload} from "react-icons/ai";
export function PreviewPage({elementos, bgColorGlobal}){
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
        const htmlContent = div.outerHTML;
        let bgColor = bgColorGlobal.toString()
        const html = "<!DOCTYPE html>" +
            "<html lang=\"en\">" +
            "  <head>" +
            "    <meta charset=\"utf-8\" />" +
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
            "    <title>Resumen</title>" +
            "<script>console.log('hola')</script>"+
            "  </head>" +
            "  <body style='margin: 0;background-color:" +bgColor+"'>" +
            htmlContent +
            "<script>document.getElementById('hola').addEventListener('click',() =>{console.log('hola')})</script>"+
            "  </body>" +
            "</html>"
        const fileName = `Resumen.html`;
        saveFile(createHTMLFile(fileName, html));
    }

    return(
        <div>
            <div className={stylesPrev.header}>
                <Link to="/editor"><button className={stylesPrev.back}><FaRegEdit className={stylesPrev.backIcon} size={28}/></button></Link>
                <Link to="/doble"><button className={stylesPrev.doble}><FiColumns className={stylesPrev.dobleIcon} size={28}/></button></Link>
                <h2 className={stylesPrev.headerContent}>Preview</h2>
            </div>
            <div className={stylesPrev.spacer}>
            </div>
            <div className={styles.father}>
                <section style={{backgroundColor:bgColorGlobal}} id="main-preview" className={stylesPrev.main}>
                    <Resultado elementos={elementos} setRef={setRef} bgColorGlobal = {bgColorGlobal}/>
                </section>
            </div>
            <button className={stylesPrev.downloadButton} onClick={handleClick}><AiOutlineDownload className={stylesPrev.downloadIcon} size={40}/></button>
        </div>
    )
}