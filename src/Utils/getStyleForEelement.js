import {H1, H2, H3, IMG, LIST1, LIST1ITEM, LIST2, LIST3, LIST3ITEM1, LIST3ITEM2, P} from "./Constantes";

export function getStyleForEelement(id){
    if([H2,H3,P,LIST1,LIST2,LIST3].includes(id)){
        return {
            position: "relative", marginLeft:"0px", marginRight:"0px", marginTop:"0px", marginBottom:"0px",
            userSelect: "none", left:"0", transform:"translate(0,0)", width: "fit-content", minHeight: "1rem",
            textAlign: "left", color: "#000000FF", backgroundColor:"#FFFFFFFF", height:"fit-content",
            borderTopLeftRadius:"0%", borderBottomLeftRadius:"0%", borderTopRightRadius:"0%", borderBottomRightRadius:"0%",
            boxShadow: "0px 0px 0px 0px gray", opacity:"1", TextDecoration: "none", fontFamily:"Segoe UI"

    };
    }else if(id ===H1){
        return {
            position: "relative", marginLeft:"0px", marginRight:"0px", marginTop:"0px", marginBottom:"0px",
            userSelect: "none", left:"0", transform:"translate(0,0)", width: "fit-content", height:"fit-content",
            minHeight: "1rem", textAlign: "left", color: "#000000FF", fontSize: "2rem", backgroundColor:"#FFFFFFFF",
            borderTopLeftRadius:"0%", borderBottomLeftRadius:"0%", borderTopRightRadius:"0%", borderBottomRightRadius:"0%",
            boxShadow: "0px 0px 0px 0px gray", opacity:"1", TextDecoration: "none", fontFamily:"Segoe UI"

        };
    }else if([LIST1ITEM,LIST3ITEM1,LIST3ITEM2].includes(id)){
        return {position: "relative", userSelect: "none", width: "fit-content", minHeight: "1rem", color: "#000000FF",
            marginLeft:"0px", marginRight:"0px", marginTop:"0px", marginBottom:"0px", backgroundColor:"#FFFFFFFF",
            borderTopLeftRadius:"0%", borderBottomLeftRadius:"0%", borderTopRightRadius:"0%", borderBottomRightRadius:"0%",
            boxShadow: "0px 0px 0px 0px gray", height:"fit-content", opacity:"1", fontFamily:"Segoe UI"

        }
    }else if(id ===IMG) {
        return {
            position: "relative", marginLeft:"0px", marginRight:"0px", marginTop:"0px", marginBottom:"0px",
            minHeight: "1rem", color: "#000000FF", left:"0", transform:"translate(0,0)", textAlign: "left",
            display:"block", width: "fit-content", userSelect: "none", backgroundColor:"#FFFFFFFF",
            borderTopLeftRadius:"0%", borderBottomLeftRadius:"0%", borderTopRightRadius:"0%", borderBottomRightRadius:"0%",
            boxShadow: "0px 0px 0px 0px gray", height:"fit-content", opacity:"1", fontFamily:"Segoe UI"

        }
    }
}