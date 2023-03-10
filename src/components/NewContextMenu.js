import styles from "./NewContextMenu.module.css"

export function NewContextMenu({isShown, coordinates}){
    return(
        <div className={styles.menuDiv}
             style={{top:coordinates.y,left:coordinates.x, display:isShown}}>
            <div>
                <button className={styles.opcion}>Copiar</button>
                <button className={styles.opcion}>Pegar</button>
                <button className={styles.opcion}>Pegar Texto</button>
                <button className={styles.opcion}>Borrar</button>
            </div>
        </div>
    )

}