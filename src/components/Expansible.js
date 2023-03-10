import styles from "./Expansible.module.css";
import {H1, H2, H3, LIST1, LIST2, LIST3, NONE, P} from "../Utils/Constantes"

export function Expansible({tipo}){
    if(tipo===H1){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.sinColor} >Fisica 1 - CURSO X</h1>
                <h2 className={styles.conColor} >Leyes de Newton</h2>
                <h3 className={styles.conColor} >Primera ley </h3>
                <p className={styles.conColor} >La primera ley postula que un cuerpo no puede
                    cambiar por sí solo su estado inicial, ya sea en reposo o en movimiento rectilíneo uniforme,
                    a menos que se aplique una fuerza o una serie de fuerzas cuya resultante no sea nula. </p>
            </div>
        );
    }
    if(tipo===H2){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Fisica 1 - CURSO X</h1>
                <h2 className={styles.sinColor} >Leyes de Newton</h2>
                <h3 className={styles.conColor} >Primera ley </h3>
                <p className={styles.conColor} >La primera ley postula que un cuerpo no puede
                    cambiar por sí solo su estado inicial, ya sea en reposo o en movimiento rectilíneo uniforme,
                    a menos que se aplique una fuerza o una serie de fuerzas cuya resultante no sea nula. </p>
            </div>
        );
    }
    if(tipo===H3){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Fisica 1 - CURSO X</h1>
                <h2 className={styles.conColor} >Leyes de Newton</h2>
                <h3 className={styles.sinColor} >Primera ley </h3>
                <p className={styles.conColor} >La primera ley postula que un cuerpo no puede
                        cambiar por sí solo su estado inicial, ya sea en reposo o en movimiento rectilíneo uniforme,
                        a menos que se aplique una fuerza o una serie de fuerzas cuya resultante no sea nula. </p>
            </div>
        );
    }
    if(tipo===P){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Fisica 1 - CURSO X</h1>
                <h2 className={styles.conColor} >Leyes de Newton</h2>
                <h3 className={styles.conColor} >Primera ley </h3>
                <p className={styles.sinColor} >La primera ley postula que un cuerpo no puede
                    cambiar por sí solo su estado inicial, ya sea en reposo o en movimiento rectilíneo uniforme,
                    a menos que se aplique una fuerza o una serie de fuerzas cuya resultante no sea nula. </p>
            </div>
        );
    }
    if(tipo===null){
        return(
            <div className={styles.expansible}>
                {NONE}
            </div>
        );
    }
    if(tipo===LIST1){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Analisis Matematico 2</h1>
                <h2 className={styles.conColor} >Teoremas importantes para el Final</h2>
                <ul>
                    <li className={styles.sinColor}>Teorema de Green</li>
                    <li className={styles.sinColor}>Teorema de Gauss</li>
                    <li className={styles.sinColor}>Teorema de Stokes</li>
                </ul>
            </div>
        );
    }
    if(tipo===LIST2){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Analisis Matematico 2</h1>
                <h2 className={styles.conColor} >Teoremas importantes para el Final</h2>
                <ol>
                    <li className={styles.sinColor}>Teorema de Green</li>
                    <li className={styles.sinColor}>Teorema de Gauss</li>
                    <li className={styles.sinColor}>Teorema de Stokes</li>
                </ol>
            </div>
        );
    }
    if(tipo===LIST3){
        return(
            <div className={styles.expansible}>
                <h1 className={styles.conColor} >Analisis Matematico 2</h1>
                <h2 className={styles.conColor} >Teoremas importantes para el Final</h2>
                <dl>
                    <dt className={styles.sinColor}>Teorema de Green</dt>
                    <dd className={styles.sinColor}>- Calculo de circulacion</dd>
                    <dt className={styles.sinColor}>Teorema de Gauss</dt>
                    <dd className={styles.sinColor}>- Calculo de flujo</dd>
                    <dt className={styles.sinColor}>Teorema de Stokes</dt>
                    <dd className={styles.sinColor}>- Calculo de circulacion</dd>
                </dl>
            </div>
        );
    }

}